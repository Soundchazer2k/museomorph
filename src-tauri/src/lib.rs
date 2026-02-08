use base64::engine::general_purpose::STANDARD as Base64Standard;
use base64::Engine as _;
use keyring::{Entry, Error as KeyringError};
use reqwest::StatusCode;
use serde::{Deserialize, Serialize};
use serde_json::json;
use gray_matter::{Matter, engine::YAML};
use serde_yaml;
use std::collections::{BTreeMap, BTreeSet};
use std::fs;
use std::path::{Path, PathBuf};

type Result<T> = std::result::Result<T, String>;

const KEYCHAIN_SERVICE: &str = "MuseoMorph";
const KEYCHAIN_ACCOUNT: &str = "NanoBanana";
const NANOBANANA_MODEL: &str = "gemini-3-pro-image-preview";

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct UploadPayload {
    name: String,
    mime_type: String,
    data_base64: String,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct RatioDecisionPayload {
    requested: String,
    chosen: String,
    orientation: String,
    reason: String,
    requested_value: f64,
    chosen_value: f64,
    resolution: [u32; 2],
    token_cost: u32,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct GenerateArtworkRequest {
    prompt: String,
    ratio: String,
    ratio_decision: RatioDecisionPayload,
    mode: Option<String>,
    subject_count: u32,
    user_directives: Vec<String>,
    uploads: Vec<UploadPayload>,
    additional_context: Option<String>,
    #[serde(default)]
    ratio_template: Option<UploadPayload>,
    #[serde(default)]
    image_size: Option<String>, // "1K", "2K", or "4K" for NanoBanana Pro
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct GenerateArtworkResponse {
    image_base64: String,
    mime_type: String,
    ratio_used: String,
    token_cost: u32,
    debug: serde_json::Value,
}

fn key_entry() -> Result<Entry> {
    Entry::new(KEYCHAIN_SERVICE, KEYCHAIN_ACCOUNT).map_err(|err| err.to_string())
}

fn get_stored_api_key() -> Result<String> {
    match key_entry()?.get_password() {
        Ok(value) => Ok(value),
        Err(KeyringError::NoEntry) => Err("NanoBanana API key not configured".to_string()),
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command]
fn store_nanobanana_api_key(key: String) -> Result<()> {
    key_entry()?
        .set_password(&key)
        .map_err(|err| err.to_string())
}

#[tauri::command]
fn load_nanobanana_api_key() -> Result<Option<String>> {
    match key_entry()?.get_password() {
        Ok(value) => Ok(Some(value)),
        Err(KeyringError::NoEntry) => Ok(None),
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command]
fn clear_nanobanana_api_key() -> Result<()> {
    match key_entry()?.delete_password() {
        Ok(()) | Err(KeyringError::NoEntry) => Ok(()),
        Err(err) => Err(err.to_string()),
    }
}

#[tauri::command]
async fn generate_nanobanana_image(
    request: GenerateArtworkRequest,
) -> Result<GenerateArtworkResponse> {
    let api_key = get_stored_api_key()?;

    let mut parts = vec![json!({ "text": request.prompt })];
    for upload in &request.uploads {
        Base64Standard
            .decode(upload.data_base64.as_bytes())
            .map_err(|err| format!("Invalid base64 data for {}: {}", upload.name, err))?;

        parts.push(json!({
            "inlineData": {
                "mimeType": upload.mime_type,
                "data": upload.data_base64,
            }
        }));
    }

    if let Some(template) = &request.ratio_template {
        Base64Standard
            .decode(template.data_base64.as_bytes())
            .map_err(|err| format!("Invalid base64 data for {}: {}", template.name, err))?;

        parts.push(json!({
            "inlineData": {
                "mimeType": template.mime_type.clone(),
                "data": template.data_base64.clone(),
            }
        }));
    }

    // Default to 2K resolution if not specified
    let image_size = request.image_size.as_deref().unwrap_or("2K");

    let payload = json!({
        "model": NANOBANANA_MODEL,
        "contents": [
            {
                "role": "user",
                "parts": parts,
            }
        ],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"],
            "imageConfig": {
                "aspectRatio": &request.ratio,
                "imageSize": image_size
            }
        }
    });

    let url = format!(
        "https://generativelanguage.googleapis.com/v1beta/models/{}:generateContent?key={}",
        NANOBANANA_MODEL, api_key
    );

    let client = reqwest::Client::new();
    let response = client
        .post(url)
        .json(&payload)
        .send()
        .await
        .map_err(|err| err.to_string())?;

    let status = response.status();
    let body: serde_json::Value = response.json().await.map_err(|err| err.to_string())?;

    if status != StatusCode::OK {
        let message = body
            .get("error")
            .and_then(|v| v.get("message"))
            .and_then(|v| v.as_str())
            .unwrap_or("NanoBanana request failed");
        return Err(format!(
            "NanoBanana error ({}): {}",
            status.as_u16(),
            message
        ));
    }

    let candidate = body
        .get("candidates")
        .and_then(|value| value.as_array())
        .and_then(|arr| arr.first())
        .ok_or_else(|| "NanoBanana response missing candidates".to_string())?;

    let part = candidate
        .get("content")
        .and_then(|content| content.get("parts"))
        .and_then(|parts| parts.as_array())
        .and_then(|parts| parts.iter().find(|part| part.get("inlineData").is_some()))
        .ok_or_else(|| "NanoBanana response missing inline image data".to_string())?;

    let inline = part
        .get("inlineData")
        .ok_or_else(|| "NanoBanana response missing inline image data".to_string())?;

    let data = inline
        .get("data")
        .and_then(|value| value.as_str())
        .ok_or_else(|| "NanoBanana response missing image payload".to_string())?;

    let mime_type = inline
        .get("mimeType")
        .and_then(|value| value.as_str())
        .unwrap_or("image/png");

    Ok(GenerateArtworkResponse {
        image_base64: data.to_string(),
        mime_type: mime_type.to_string(),
        ratio_used: request.ratio.clone(),
        token_cost: request.ratio_decision.token_cost,
        debug: json!({
            "requested_ratio": request.ratio_decision.requested,
            "chosen_ratio": request.ratio_decision.chosen,
            "reason": request.ratio_decision.reason,
            "mode": request.mode,
            "subject_count": request.subject_count,
            "user_directives": request.user_directives,
        }),
    })
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StyleValidationResult {
    pub file_path: String,
    pub valid: bool,
    pub errors: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StyleDestination {
    file_path: String,
    destination: String,
}

#[tauri::command]
fn import_styles(files: Vec<String>) -> Result<Vec<StyleValidationResult>> {
    let mut results = Vec::new();
    let matter = Matter::<YAML>::new();

    for file_path in files {
        let mut errors = Vec::new();
        let mut valid = true;

        let content = match fs::read_to_string(&file_path) {
            Ok(c) => c,
            Err(e) => {
                errors.push(format!("Failed to read file: {}", e));
                valid = false;
                String::new()
            }
        };

        if valid {
            if let Some(parsed) = matter.parse_with_struct::<serde_json::Value>(&content) {
                let data = parsed.data;
                if data["id"].is_null() {
                    errors.push("Missing 'id' in frontmatter".to_string());
                    valid = false;
                }
                if data["group"].is_null() {
                    errors.push("Missing 'group' in frontmatter".to_string());
                    valid = false;
                }
                if data["display_name"].is_null() {
                    errors.push("Missing 'display_name' in frontmatter".to_string());
                    valid = false;
                }
            } else {
                errors.push("Failed to parse frontmatter".to_string());
                valid = false;
            }
        }

        results.push(StyleValidationResult {
            file_path,
            valid,
            errors,
        });
    }
    Ok(results)
}

#[tauri::command]
fn get_style_folders() -> Result<Vec<String>> {
    let mut folders = Vec::new();
    let paths = fs::read_dir("./styles").map_err(|e| e.to_string())?;
    for path in paths {
        let path = path.map_err(|e| e.to_string())?.path();
        if path.is_dir() {
            folders.push(path.file_name().unwrap().to_str().unwrap().to_string());
        }
    }
    Ok(folders)
}

#[tauri::command]
fn save_styles(styles: Vec<StyleDestination>) -> Result<()> {
    for style in styles {
        let destination = if style.destination.starts_with("new-folder:") {
            let new_folder_name = style.destination.split_at(11).1;
            let new_folder_path = format!("./styles/{}", new_folder_name);
            fs::create_dir_all(&new_folder_path).map_err(|e| e.to_string())?;
            new_folder_path
        } else {
            format!("./styles/{}", style.destination)
        };

        let file_name = std::path::Path::new(&style.file_path)
            .file_name()
            .unwrap()
            .to_str()
            .unwrap();

        let file_path = format!("{}/{}", destination, file_name);

        let group = if style.destination.starts_with("new-folder:") {
            style.destination.split_at(11).1.to_string()
        } else {
            style.destination.clone()
        };

        let content = fs::read_to_string(&style.file_path).map_err(|e| e.to_string())?;
        let matter = Matter::<YAML>::new();
        let mut parsed = matter.parse_with_struct::<serde_json::Value>(&content).unwrap();

        if let Some(data) = parsed.data.as_object_mut() {
            data["group"] = serde_json::Value::String(group);
        }

        let new_content = {
            let frontmatter_str = serde_yaml::to_string(&parsed.data)
                .map_err(|e| format!("Failed to serialize frontmatter to YAML: {}", e))?;
            format!("---\n{}---\n{}", frontmatter_str, parsed.content)
        };

        fs::write(&file_path, new_content).map_err(|e| e.to_string())?;
    }

    build_manifest_assets().map_err(|err| format!("failed to rebuild manifest: {}", err))
}

const REQUIRED_SECTIONS: [&str; 8] = [
    "## 1) Core Instruction & Likeness Mandate",
    "## 2) Canvas Strategy & Aspect Ratio Control",
    "## 3) Style Context & Material Authenticity",
    "## 4) Technical Method & Mark-Making",
    "## 5) Wardrobe, Props & Setting Conventions",
    "## 6) Safety & IP Constraints (Hard Rules)",
    "## 7) Composition & Lighting Patterns",
    "## 8) Typography & Text Integration (If Historically Present)",
];

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase", default)]
struct MultiSubjectMeta {
    allowed: bool,
    max_subjects: Option<u32>,
    layout_hint: Option<String>,
    identity_priority: Option<Vec<String>>,
}

#[derive(Debug, Deserialize, Default)]
#[serde(rename_all = "camelCase", default)]
struct StyleFrontmatter {
    id: Option<String>,
    group: Option<String>,
    display_name: Option<String>,
    artist: Option<String>,
    movement: Option<String>,
    style_scope: Option<String>,
    about: Option<String>,
    ratios: Option<Vec<String>>,
    modes: Option<Vec<String>>,
    safety_profile: Option<Vec<String>>,
    multi_subject: Option<MultiSubjectMeta>,
}

#[derive(Serialize)]
struct ManifestEntry {
    id: String,
    group: String,
    display_name: String,
    file: String,
    ratios: Vec<String>,
    modes: Vec<String>,
    safety_profile: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    multi_subject: Option<MultiSubjectMeta>,
    #[serde(skip_serializing_if = "Option::is_none")]
    about: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    artist: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    movement: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    style_scope: Option<String>,
    sections_index: BTreeMap<String, String>,
}

#[derive(Serialize)]
struct ManifestCollection {
    id: String,
    styles: Vec<String>,
}

#[derive(Serialize, Default)]
struct ManifestFile {
    collections: Vec<ManifestCollection>,
    styles: BTreeMap<String, ManifestEntry>,
}

fn build_manifest_assets() -> std::result::Result<(), String> {
    let root = std::env::current_dir().map_err(|e| e.to_string())?;
    let styles_root = root.join("styles");
    if !styles_root.exists() {
        return Err(format!(
            "styles directory not found at {}",
            styles_root.display()
        ));
    }
    let public_root = root.join("public");
    let public_styles_root = public_root.join("styles");
    let manifest_path = root.join("manifest.json");
    let public_manifest_path = public_root.join("manifest.json");

    let files = collect_style_files(&styles_root)?;
    if public_styles_root.exists() {
        fs::remove_dir_all(&public_styles_root).map_err(|e| e.to_string())?;
    }
    fs::create_dir_all(&public_styles_root).map_err(|e| e.to_string())?;

    let matter = Matter::<YAML>::new();
    let mut manifest = ManifestFile::default();
    let mut grouped: BTreeMap<String, BTreeSet<String>> = BTreeMap::new();
    let mut indexed = 0usize;
    let mut skipped = 0usize;

    for abs in files {
        let rel_from_root = abs
            .strip_prefix(&root)
            .unwrap_or(&abs)
            .to_string_lossy()
            .replace('\\', "/");
        let raw = fs::read_to_string(&abs).map_err(|e| e.to_string())?;
        let parsed = matter
            .parse_with_struct::<serde_json::Value>(&raw)
            .ok_or_else(|| format!("Failed to parse frontmatter for {}", rel_from_root))?;
        let frontmatter: StyleFrontmatter =
            serde_json::from_value(parsed.data).map_err(|e| e.to_string())?;

        let StyleFrontmatter {
            id,
            group,
            display_name,
            artist,
            movement,
            style_scope,
            about,
            ratios,
            modes,
            safety_profile,
            multi_subject,
        } = frontmatter;

        let id = match id {
            Some(value) if !value.trim().is_empty() => value,
            _ => {
                eprintln!("WARN: {} skipped (missing id)", rel_from_root);
                skipped += 1;
                continue;
            }
        };
        let group = match group {
            Some(value) if !value.trim().is_empty() => value,
            _ => {
                eprintln!("WARN: {} skipped (missing group)", rel_from_root);
                skipped += 1;
                continue;
            }
        };
        let display_name = match display_name {
            Some(value) if !value.trim().is_empty() => value,
            _ => {
                eprintln!("WARN: {} skipped (missing display_name)", rel_from_root);
                skipped += 1;
                continue;
            }
        };

        let rel_in_styles = abs
            .strip_prefix(&styles_root)
            .map_err(|e| e.to_string())?
            .to_path_buf();
        let manifest_file = format!(
            "styles/{}",
            rel_in_styles.to_string_lossy().replace('\\', "/")
        );

        let dest = public_styles_root.join(&rel_in_styles);
        if let Some(parent) = dest.parent() {
            fs::create_dir_all(parent).map_err(|e| e.to_string())?;
        }
        fs::write(&dest, raw.as_bytes()).map_err(|e| e.to_string())?;

        let entry = ManifestEntry {
            id: id.clone(),
            group: group.clone(),
            display_name,
            file: manifest_file,
            ratios: ratios.unwrap_or_default(),
            modes: modes.unwrap_or_default(),
            safety_profile: safety_profile.unwrap_or_default(),
            multi_subject,
            about,
            artist,
            movement,
            style_scope,
            sections_index: extract_sections_index(parsed.content.as_str()),
        };

        manifest.styles.insert(id.clone(), entry);
        grouped.entry(group).or_default().insert(id);
        indexed += 1;
    }

    manifest.collections = grouped
        .into_iter()
        .map(|(group, styles)| ManifestCollection {
            id: group,
            styles: styles.into_iter().collect(),
        })
        .collect();

    let manifest_json =
        serde_json::to_vec_pretty(&manifest).map_err(|e| format!("serialize: {}", e))?;
    fs::write(&manifest_path, &manifest_json).map_err(|e| e.to_string())?;
    fs::create_dir_all(&public_root).map_err(|e| e.to_string())?;
    fs::write(&public_manifest_path, &manifest_json).map_err(|e| e.to_string())?;

    println!(
        "Indexed: {}  Skipped: {}  Collections: {}",
        indexed,
        skipped,
        manifest.collections.len()
    );

    Ok(())
}

fn collect_style_files(root: &Path) -> std::result::Result<Vec<PathBuf>, String> {
    if !root.exists() {
        return Err(format!("styles directory missing at {}", root.display()));
    }
    let mut stack = vec![root.to_path_buf()];
    let mut files = Vec::new();

    while let Some(dir) = stack.pop() {
        for entry in fs::read_dir(&dir).map_err(|e| e.to_string())? {
            let entry = entry.map_err(|e| e.to_string())?;
            let path = entry.path();
            let name = entry.file_name();
            let name_str = name.to_string_lossy();
            if path.is_dir() {
                if name_str.starts_with('.') {
                    continue;
                }
                if path
                    .strip_prefix(root)
                    .map(|rel| rel.components().any(|c| c.as_os_str() == "archive"))
                    .unwrap_or(false)
                {
                    continue;
                }
                stack.push(path);
            } else if path.extension().map(|ext| ext == "md").unwrap_or(false) {
                if name_str.starts_with('_') {
                    continue;
                }
                if path
                    .strip_prefix(root)
                    .map(|rel| rel.components().any(|c| c.as_os_str() == "archive"))
                    .unwrap_or(false)
                {
                    continue;
                }
                files.push(path);
            }
        }
    }

    files.sort();
    Ok(files)
}

fn extract_sections_index(content: &str) -> BTreeMap<String, String> {
    let mut index = BTreeMap::new();
    for heading in REQUIRED_SECTIONS {
        if !content.contains(heading) {
            continue;
        }
        if let Some(stripped) = heading.strip_prefix("## ") {
            if let Some((number_part, title_part)) = stripped.split_once(')') {
                let digits = number_part.trim().to_string();
                index.insert(digits, title_part.trim().to_string());
            }
        }
    }
    index
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            store_nanobanana_api_key,
            load_nanobanana_api_key,
            clear_nanobanana_api_key,
            generate_nanobanana_image,
            import_styles,
            get_style_folders,
            save_styles
        ])
        .run(tauri::generate_context!())
        .expect("error while running MuseoMorph");
}
