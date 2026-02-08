# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MuseoMorph is a cross-platform desktop app (Tauri 2 + React 18 + TypeScript) that transforms user photos into artwork inspired by historical artists and movements. It uses Markdown-driven style definitions parsed into structured prompts sent to Google's Gemini/NanoBanana image generation API. The app runs locally; users bring their own API key (stored in OS keychain via Tauri).

## Commands

```bash
# Frontend dev server (Vite, port 5173)
pnpm run dev

# Full desktop app (Tauri + Vite together)
pnpm run tauri:dev

# Run tests (Vitest)
pnpm run test

# Validate style files against Zod schema + section order
pnpm run validate:styles
pnpm run validate:styles:strict   # fails on provisional ratios

# Rebuild manifest.json from styles/**/*.md (also runs validate)
pnpm run build:manifest

# Production builds
pnpm run build          # frontend only
pnpm run tauri:build    # desktop release binary
```

**Package manager:** pnpm (v10.17.0). Do not use npm or yarn.

**Prerequisites:** Node 18+, Rust + Cargo, pnpm.

**CI** (`.github/workflows/validate.yml`): runs `validate:styles` + `build:manifest` on every push/PR.

## Architecture

```
src/                    React frontend (TypeScript)
├── App.tsx             Main component — all UI logic lives here
├── components/         ApiKeyModal, StyleImporterModal
└── lib/
    ├── prompt/         Prompt building pipeline
    │   ├── parseStyle.ts    Parse MD frontmatter (gray-matter) + 8 sections
    │   ├── buildPrompt.ts   Assemble final prompt from style + user options
    │   ├── imagePadding.ts  Ratio-based canvas padding calculations
    │   └── types.ts         Shared interfaces (ManifestStyleEntry, PromptBuildOptions, etc.)
    └── nanobanana/     Image generation integration
        ├── client.ts        IPC bridge → Tauri invoke('generate_nanobanana_image')
        ├── apiKey.ts        Keychain (Tauri) / localStorage (web) key management
        └── ratios.ts        Aspect ratio constants, resolution mapping, orientation logic

src-tauri/              Rust backend (Tauri v2)
└── src/lib.rs          API key storage (keyring), Gemini API calls, style import,
                        manifest building — all Tauri command handlers

scripts/                Node/TS build utilities (use tsconfig.scripts.json, CommonJS)
├── build-manifest.ts   Scan styles/**/*.md → manifest.json + copy to public/styles/
├── validate-style.ts   Zod schema + section order validation
└── schema.ts           Zod schemas for style frontmatter

styles/                 Production style definitions (one artist/style per file)
├── _TEMPLATE.md        Scaffold for new styles (8 required sections)
└── <group_slug>/       Collection directories (e.g., anime/, dutch_golden_age/)
    └── <style_id>.md   Individual style files

styles-source/          Research & drafting material (ignored by build tooling)
```

### Data Flow

1. `styles/**/*.md` → `scripts/build-manifest.ts` → `manifest.json` + `public/styles/*.md`
2. React loads `manifest.json` at startup to populate collections/styles UI
3. User picks style + ratio + mode → `parseStyleMarkdown()` → `buildPrompt()` → prompt string
4. React calls `generateArtwork()` → Tauri IPC → Rust makes Gemini API request with prompt + base64 images
5. Rust returns base64 result image → React renders it

### IPC Convention

TypeScript uses camelCase; Rust uses snake_case. Serde handles conversion automatically. All Tauri commands are async.

## Style File Format

Each style is a Markdown file with YAML frontmatter + exactly 8 numbered H2 sections (in order):

**Required frontmatter:** `id`, `group`, `display_name`, `ratios` (≤3), `modes` (2–3), `safety_profile`, `about`
**Optional frontmatter:** `artist`, `movement`, `style_scope`, `ratios_status`, `ratios_notes`, `multi_subject`, `sections_index`

**Required sections:**
1. Core Instruction & Likeness Mandate
2. Canvas Strategy & Aspect Ratio Control
3. Style Context & Material Authenticity
4. Technical Method & Mark-Making
5. Wardrobe, Props & Setting Conventions
6. Safety & IP Constraints (Hard Rules)
7. Composition & Lighting Patterns
8. Typography & Text Integration

If a section doesn't apply, include it with "Not applicable for this style."

**`style_scope`** values: `"single-artist"`, `"movement"`, `"collaboration"` (duos/studios like Hipgnosis, Siegel & Shuster).

**Ratios:** propose as `ratios_status: "provisional"` with `ratios_notes` explaining historical rationale. See `docs/ratio_policy.md`.

## Key Conventions

- **One artist per file.** Never combine multiple artists in a single style file. Multi-artist sources must be split into separate files.
- **No frames, signatures, watermarks, or logos** in generated output — this is a hard guardrail.
- **Museum-grade language** in style files: neutral, factual, educational. No slang or subjective claims.
- **Interpretation, not reproduction.** Styles guide artistic reinterpretation, not copying.
- Scripts under `scripts/` use `tsconfig.scripts.json` (CommonJS for ts-node). Frontend uses ESNext modules.
- Definition of done for style changes: `validate:styles` passes, `build:manifest` succeeds, CI green.

## Commit Conventions

- `style: add <style_id>` — new style file
- `chore(scripts): <description>` — tooling changes
- `docs: <description>` — documentation
- `fix: <description>` — bug fixes
- Branch naming: `feat/<topic>` or `chore/<topic>`

## Key Reference Docs

- `AGENTS.md` — Engineering agent playbook (guardrails, validation flow, playbooks)
- `CONTRIBUTING.md` — Public style contribution guide
- `docs/ratio_policy.md` — Aspect ratio guidelines per art form
- `docs/PRD.md` — Product requirements
- `styles/_TEMPLATE.md` — Scaffold for creating new styles
