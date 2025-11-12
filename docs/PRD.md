# MuseoMorph — Product Requirements Document (PRD)

### 1. Project Overview

MuseoMorph is a **playful art lab** delivered as a cross-platform desktop app (Windows, macOS, Linux) that transforms a submitted photograph into an artwork rendered in the visual language of a chosen artist, movement, or technique. Unlike generic style-transfer filters, MuseoMorph emphasizes *art-historical authenticity*. It uses structured Markdown prompt frameworks (e.g., Universal Museum-Grade Prompt Framework v4.4) to encode artist-specific characteristics such as pigments, brushwork, medium, palette constraints, and compositional strategies.

Users supply their own image generation API keys (starting with Google’s NanoBanana/Gemini) to locally generate results. The app presents a **museum-inspired interface** with curated collections, style detail pages, and optional educational blurbs, balancing fun, accessibility, and art appreciation.

------

### 2. Problem Statement

AI tools like NanoBanana often revert to **generic defaults** (plasticky, digital-looking, “stock filter” results) unless guided with very tight, detailed prompts. Current systems fail to capture the **granular historical authenticity** that makes an artist’s work recognizable beyond surface tropes.

MuseoMorph addresses this by structuring prompts with explicit anchors (ratios, flags, pigments, techniques, constraints), ensuring outputs feel like genuine interpretations of historical methods rather than shallow imitations. It reframes AI as a **respectful interpreter** of art history — playful, but not cheesy; educational, but not academic.

------

### 3. Goals & Objectives

- **Authenticity Benchmark:** ≥80% of styles meet internal rubric for palette fidelity, material simulation, and likeness preservation.
- **Style Coverage:** Ship ≥20 styles at launch, organized into collections (Comics, Dutch Golden Age, Impressionism, etc.). Expand iteratively.
- **Frictionless UX:** Casual users can go from photo → result in under 2 minutes.
- **Local-First:** $0 hosting cost; runs fully on desktop with user-supplied API keys.
- **Cross-Platform:** Tauri desktop app builds for Windows, macOS, Linux.
- **Museum-Style UX:** Landing page, curated collections, gallery-style detail pages.
- **Extensibility:** Drop-in Markdown style files with frontmatter; app auto-indexes and surfaces them.

------

### 4. Target Users

- **Primary:** Casual art enthusiasts and everyday users who want to see themselves in unusual art styles and share playful results.
- **Secondary:** Creative professionals (illustrators, educators, designers) who may use MuseoMorph as inspiration or teaching material.
- **User Characteristics:** Non-technical, curious, value fun and authenticity; drawn to museum-like presentation.

------

### 5. Key Features & Requirements

- **Markdown-Driven Styles:** Styles loaded from `styles/**/*.md`, parsed into manifest.json.
- **Universal Framework Compliance:** Sections 1–8 enforced with flags, ratios, constraints.
- **Photo Input:** Single or multiple images.
- **Face Detection & Subject Selection:** BlazeFace (MediaPipe, Apache 2.0) running on CPU/iGPU; manual face picker is default with optional auto pre-select toggle. Processor crops references to the target ratio before generation.
- **Multi-Subject Support:** Selector UI + “Multi-Subject Directive” injection in prompts.
- **Result Viewer:** Display result with option to save; metadata caption styled like museum label.
- **Security:** API keys stored in OS keychain (via Rust); all generation local.
- **Output Handling:** Request best resolution allowed by provider; no size selector in MVP.
- **Museum-Inspired UX:**
  - Landing page with curated collections.
  - Style detail pages show Markdown scaffold + controls.
  - Educational blurbs semi-mandatory (era, context, key figures).
- **Constraints Enforcement:**
  - No frames, no signatures/logos, no brand elements.
  - Respect age, gender, wardrobe guardrails.
  - Auto-regeneration offered as a user option (not default) to avoid wasting provider quota.

------

### 6. User Stories

- **As an art lover,** I want MuseoMorph’s homepage to feel like the Met or MoMA websites, so I feel immersed in an art experience.
- **As a casual user,** I want to browse curated collections (e.g., Dutch Golden Age, Comics) so I can easily explore without being overwhelmed.
- **As a first-time user,** I want to upload a photo and generate an artwork in one click, so I can enjoy the transformation with no setup.
- **As a group of friends,** we want to upload a photo with multiple faces and have all of us included, so we can generate a shared portrait.
- **As a casual user,** I want to save and share my results, so I can show others how I look in a Vermeer, a Jim Lee comic, or a fashion photo.
- **As a creative pro,** I want to read the style descriptions, so I can learn about techniques and use them for teaching or inspiration.

------

### 7. Success Metrics

- **Qualitative:** Users feel authenticity, delight, and fun; flows are frictionless; app feels like a playful art lab, not a technical tool.
- **Community Signals:** GitHub stars, style contributions, organic sharing of results.
- **Internal Rubric:** Developers validate authenticity with internal tests; framework evolves (v4.4 → future).
- **No User Burden:** No in-app surveys, ratings, or forced feedback loops.

------

### 8. Assumptions & Constraints

- **Assumptions:**
  - Non-commercial, leisure-focused; cost target = $0.
  - Users provide their own API keys; local-first runtime.
  - Markdown frameworks (e.g., Universal Prompt v4.4, NanoBanana Edition) serve as prompt source of truth.
- **Technical Constraints:**
  - Provider limits resolution, latency, fidelity.
  - Face detection = BlazeFace (MediaPipe), CPU-friendly with manual fallback.
  - Prompts must enforce framework guardrails; silent validation applies.
  - App must run on mid-tier laptops (no GPU required).
- **Operational Constraints:**
  - No frames, signatures, or logos in output (disclaimed if provider fails).
  - No telemetry beyond minimal error counts.
  - Iterative prompt framework updates required for authenticity improvements.

------

### 9. Dependencies & Risks

- **Dependencies:**
  - Provider APIs (NanoBanana/Gemini first).
  - BlazeFace (MediaPipe) for face detection and subject pre-selection.
  - Tauri + Rust ecosystem.
  - Structured Markdown frameworks.
- **Risks:**
  - Provider changes (resolution limits, quotas).
  - CPU performance variability.
  - Interpretive drift (sometimes feature, sometimes bug).
  - IP/cultural concerns if styles aren’t curated carefully.
  - User expectation mismatch (thinking results are “real” reproductions).
  - Complexity of maintaining prompt frameworks across all styles.

------

### 10. Open Questions (Resolved Directions)

1. **Educational Layer:** Semi-mandatory. Landing pages show era/context blurbs; artist pages provide deeper “click to know more” details.
2. **Interpretive Drift:** Framed as part of the experiment. Users encouraged to retry or log GitHub issues for prompt refinements.
3. **Face Detection Default:** Manual by default; auto available as toggle.
4. **Signatures/Logos:** Disclaimer in README; no auto-regeneration by default (user decides).
5. **Identity:** MuseoMorph is a **playful art lab** - fun-first, educational-second.

------

### 11. Style Data Model (Frontmatter & Validation)

MuseoMorph styles are Markdown files with YAML frontmatter. The validator enforces presence and ordering of sections (1–8) and lints frontmatter. Key fields:

- `id` (slug), `group`, `display_name`
- `artist` (string) and `movement` (string, optional)
- `style_scope`: one of
  - `"single-artist"` — individual artist voice; multi-artist names are discouraged and will trigger a validator warning.
  - `"movement"` — school/workshop/period styles (e.g., “Morris & Co. Workshop”, “Utagawa School”). Multi-artist strings are allowed.
  - `"collaboration"` — intentional duos/studios (e.g., “Mouse & Kelley”, “Hipgnosis”, “Siegel & Shuster”). Multi-artist strings are allowed.
- `ratios` (≤3), `ratios_status` (`"provisional"|"approved"`), `ratios_notes` (explain rationale)
- `modes` (2–3 meaningful toggles)
- `safety_profile` (from policy allowlist)
- `multi_subject` (optional block)
- `about` (2–6 sentence educational blurb)

Validator behavior updates (2025-11-12):

- Multi-artist `artist` strings only warn when `style_scope` is `"single-artist"`.
- Windows path normalization in group directory checks prevents false directory warnings.

Manifest expectations: manifest entries include `artist`, `movement`, and `style_scope` when present, plus `sections_index`, `ratios`, `modes`, and `safety_profile`.
