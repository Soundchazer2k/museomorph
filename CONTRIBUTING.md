# Contributing to MuseoMorph

First off, thank you! 🎉 MuseoMorph is a **playful art lab** that lives and breathes through community style packs, prompt refinements, and small UX improvements.

This guide explains how to:

- Add a **new style** using Markdown (the source of truth)
- Validate that your file works end-to-end
- Open a clear PR that we can merge quickly

------

## Table of Contents

1. [Project Principles](#project-principles)
2. [Add a New Style (Markdown)](#add-a-new-style-markdown)
3. [Frontmatter Schema](#frontmatter-schema)
4. [Required Sections (1→8)](#required-sections-18)
5. [Safety & Guardrails](#safety--guardrails)
6. [Local Dev & Validation](#local-dev--validation)
7. [Pull Request Checklist](#pull-request-checklist)
8. [Commit & PR Conventions](#commit--pr-conventions)
9. [License & Attribution](#license--attribution)

------

## Project Principles

- **Interpretation, not reproduction.** No signatures, logos, brand marks, or presentation frames in outputs.
- **Respect for artists & history.** Each style should include a short educational blurb (era, figures, themes).
- **Markdown is the source of truth.** The app parses styles from `styles/**/*.md` and builds a manifest.
- **Frictionless for users.** Keep options minimal; encode complexity in the prompt scaffold.
- **Open source, privacy-first.** Runs locally; users bring their own API key.

------

## Add a New Style (Markdown)

1. Decide which `group` your style belongs to (matches the `group` frontmatter). Create or reuse the folder slug under `styles/`, then add your file:

   ```
   /styles/<group_slug>/<your_style_id>.md
   ```

   Example:

   ```
   /styles/dutch_golden_age/rembrandt_chiaroscuro_portrait.md
   /styles/modern_age_comics/jim_lee_crosshatch_superhero.md
   ```

   > **Tip:** slugify the folder name (lowercase, `_` between words). If you introduce a brand-new `group`, create the matching folder before saving the style.

2. Start with **frontmatter** (YAML) followed by the **Required Sections** (see below).

3. Keep your tone *museum-grade but approachable*. Avoid slang or subjective claims—focus on verifiable technique, materials, composition, and guardrails.

4. **Educational blurb is semi-mandatory.** Add 2–6 sentences that help a curious reader understand the style/movement/artist.

5. Refer to `/docs/Universal_Museum-Grade_Prompt_Framework_v4.3_(NanoBanana_Edition).md` for full section definitions and constraints. Use `/styles/_TEMPLATE.md` as your working scaffold.
   - Need ratios for stained glass, murals, Orphism, or new comic eras? See the freshly expanded tables in `/docs/ratio_policy.md` before locking your list.

------

## Frontmatter Schema

Each style **must** include the following keys. Optional keys have sensible defaults.

```yaml
---
id: vermeer                      # unique, lowercase, no spaces
group: "Dutch Golden Age"        # collection/family shown in UI
display_name: "Johannes Vermeer — Optical Light Master"

# UI controls derive from these:
ratios: ["3:4","4:5","4:3","1:1"]          # allowed aspect ratios
modes: ["Intimate Portrait","Room Interior"]# curated mode names

# Safety controls (enforced in composer/validation):
safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

# Multi-subject hints (optional, recommended):
multi_subject:
  allowed: true
  max_subjects: 3
  layout_hint: "Primary left, secondary right, soft overlap"
  identity_priority: ["silhouette","gesture","face-proportions"]

# Short educational blurb (required; 2–6 sentences):
about: >
  Mid-17th century Dutch painting emphasizing optical light, quiet interiors,
  and material subtlety. Vermeer’s approach balances luminous glazing,
  camera obscura-like optics, and restrained palette choices.

# (Optional) notes for maintainers:
notes: >
  Avoid modern “HDR” sheen; reinforce glazing, grounded pigments, and linen canvas texture.
---
```

**Frontmatter tips**

- Keep `id` stable; changing it breaks links/manifests.
- `modes` should be meaningful, not synonyms (e.g., “Studio vs. Street” is better than “Mode A vs. Mode B”).
- `about` is user-facing. Think museum label: short, factual, inviting.

------

## Required Sections (1→8)

Your Markdown body follows the frontmatter and **must** include these H2 headings, in order. The exact titles matter (the parser keys on them).

```md
## 1) Core Instruction & Likeness Mandate
(Style-first re-draw command; how likeness is preserved without copying IP.)

## 2) Canvas Strategy & Aspect Ratio Control
(How to recompose to the selected ratio; framing, negative space, scale.)

## 3) Style Context & Material Authenticity
(Materials: pigments, medium, paper/canvas/stock; historical cues.)

## 4) Technical Method & Mark-Making
(Brush/pen/line behavior; texture; stroke direction; print/photographic process.)

## 5) Wardrobe, Props & Setting Conventions
(Period-appropriate clothing; props; background motifs; avoid logos/brands.)

## 6) Safety & IP Constraints (Hard Rules)
(No nudity/gore/logos/signatures/frames; minors modest; gender respect; re-gen if violated.)

## 7) Composition & Lighting Patterns
(Preferred angles, depth, focal hierarchy, light keys; subject placement.)

## 8) Typography & Text Integration (If Historically Present)
(Only if authentic to the style—e.g., posters/comics. Otherwise say “No text.”)
```

> If a section is not applicable, include it anyway and write **“Not applicable for this style.”** (The app expects all 8.)

------

## Safety & Guardrails

- **No frames, signatures, logos, or brand marks** in the generated image.
- **Respect age & gender presentation**; minors modest; avoid sexualization.
- **Violence/gore**: avoid unless historically essential *and* within policy; default is **disallow**.
- **Multiple subjects**: when selected, each subject must remain distinct (no face-merging).
- **Interpretive drift** happens. The app may suggest a retry; users can open an issue if it persists.

------

## Local Dev & Validation

> You don’t need to be a coder—just follow these steps.

1. **Install prerequisites**

   - Node 18+, Rust + Cargo, pnpm/npm, (optional) Git.

2. **Build the style manifest**

   ```bash
   pnpm install          # or npm install
   pnpm run build:manifest
   ```

  This scans `styles/**/*.md` and generates `manifest.json`. Fix any reported schema/section errors.

3. **Run the app (dev)**

   ```bash
   pnpm run dev          # Vite frontend
   # in another terminal
   cargo tauri dev       # Tauri backend (Rust)
   ```

4. **Self-check**

   - Your new style appears in the **Collections** grid.
   - The style detail page renders your Markdown with all 8 sections.
   - Ratios/modes show up as controls.
   - Generate a test image (bring your API key).

5. **Prompt snapshot test (optional, recommended)**

   - Some contributors run a test script that composes the final prompt and compares it to a stored snapshot:

     ```bash
     pnpm run test:prompts
     ```

   - If the snapshot differs, inspect changes (may be intentional).

------

## Pull Request Checklist

Before opening a PR, verify:

-  File added under `styles/<group_slug>/<id>.md` with valid **frontmatter**
-  All **8 sections** present and in order (see above)
-  **Educational blurb** (`about`) included (2–6 sentences)
-  **Safety constraints** are explicit in Section 6
-  Uses **neutral, museum-grade language** (no slang, no brand claims)
-  No external frames/signatures/logos appear in examples or text
-  `pnpm run build:manifest` passes with **no errors**
-  (Optional) Prompt snapshot tests pass
-  PR description explains the style’s intent + any special notes

------

## Commit & PR Conventions

**Commit style** (loose, human-friendly is fine):

- `style: add vermeer optical light master`
- `docs: add educational blurb to impressionism`
- `fix: reinforce no-logo rule in comics section 6`

**PR template** (use this text in your PR description):

```
### What’s added
- New style: <Display Name> (<id>)
- Group: <Collection>

### Educational blurb
<2–6 sentence blurb>

### Notable constraints
- (e.g.) No captions; enforce linen canvas texture; restrict palette to earths+lead white

### Testing
- build:manifest ✅
- dev run ✅ (Windows/macOS/Linux)
- prompt snapshot (optional) ✅/N/A
```

------

## License & Attribution

By contributing, you agree that your submissions are licensed under the repo’s open-source licenses (MIT/Apache-2.0). Please:

- Ensure **style texts are your own writing** (no copy-pastes from copyrighted sources).
- Credit upstream tools when relevant (e.g., citing a public pigment chart you derived *in your own words*).
- Avoid adding third-party assets (images, fonts) unless their licenses allow redistribution in open source (and include proper attribution).

------

### Questions?

Open an Issue with `[question]` in the title, or start a Discussion. We’re friendly. 😊

------

