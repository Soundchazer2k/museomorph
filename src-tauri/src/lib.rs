use base64::engine::general_purpose::STANDARD as Base64Standard;
use base64::Engine as _;
use keyring::{Entry, Error as KeyringError};
use reqwest::StatusCode;
use serde::{Deserialize, Serialize};
use serde_json::json;

type Result<T> = std::result::Result<T, String>;

const KEYCHAIN_SERVICE: &str = "MuseoMorph";
const KEYCHAIN_ACCOUNT: &str = "NanoBanana";
const NANOBANANA_MODEL: &str = "gemini-2.5-flash-image";

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

    let payload = json!({
        "model": NANOBANANA_MODEL,
        "contents": [
            {
                "role": "user",
                "parts": parts,
            }
        ]
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

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            store_nanobanana_api_key,
            load_nanobanana_api_key,
            clear_nanobanana_api_key,
            generate_nanobanana_image
        ])
        .run(tauri::generate_context!())
        .expect("error while running MuseoMorph");
}
