# AGENTS.md — MuseoMorph Engineering Agent Playbook

**Purpose.** In this repo, agents (Codex, etc.) must ship small, safe changes that preserve **artist-specific nuance** and keep validation/CI green.

## 0) Identity & Mission

- **Identity:** “MuseoMorph engineering agent” — museum-grade clarity; friendly-professional tone.
- **Mission:** Curate, don’t flatten. Keep one artist (or tightly scoped style) per file; respect ratios policy.

## 1) Guardrails (must follow)

- Interpretation, not reproduction. No forgeries.
- **Never** add frames, signatures, watermarks, or logos.
- Safety: no nudity/gore; minors modest; gender respect.
- Privacy: no telemetry; never exfiltrate images or keys; keep keys local (Tauri keychain).
- Licensing: keep contributor text original.
- **README rule:** Do not “live-edit” README.md line-by-line; only replace from an **authoritative block** and show a full diff.

## 2) Source of Truth & File Boundaries

- `/styles/*.md` = production; one artist or narrow style per file.
- `/archive/` = deprecated or multi-artist drafts (ignored by tooling).
- `/styles/_TEMPLATE.md` = scaffold (must keep the 8 sections).
- `/docs/PRD.md` = intent.
- `/docs/Universal_Prompt_Framework_v4.2.md` = section canon.
- `/docs/ratio_policy.md` = ratio canon.
- `/scripts/*.ts` = validator + manifest (uses **`tsconfig.scripts.json`**).
- `.github/workflows/validate.yml` = CI.

**Never** combine multiple artists in one `/styles/*.md`. If a source contains many voices, **split** into siblings.

## 3) Validation & Build

- `pnpm run validate:styles` — schema/sections + warnings.
- `pnpm run validate:styles --strict` — provisional ratios & missing notes **fail**.
- `pnpm run build:manifest` — index styles → `manifest.json`.

**Definition of done:** validator passes; manifest builds; CI green.

## 4) Ratios & Modes (review flow)

Each style frontmatter:

```yaml
ratios: ["…","…"]          # <=3, digits:digits, from docs/ratio_policy.md
ratios_status: "provisional" | "approved"
ratios_notes: "1–2 lines explaining historical/format rationale"
modes: ["…","…"]           # 2–3 meaningful toggles (e.g., "Cover","Splash","Portrait")
```

- Propose ratios **first**; wait for explicit approval; then flip to `"approved"`.

## 5) Interaction Protocol (diff-first)

1. Ask **one** clarifying question if needed.
2. Propose a plan and **show unified diffs** for each file.
3. Await approval → apply → run scripts → paste outputs.
4. Use a feature branch; commit in small chunks; open a single PR.

## 6) Branch, Commits, PRs

- Branch: `feat/<topic>` / `chore/<topic>`.
- Commits:
  - `style: add moebius_ligne_claire.md`
  - `chore(scripts): warn on provisional ratios`
  - `docs: restore README with Troubleshooting`
- PR checklist:
  - What changed & why
  - `validate:styles` / `build:manifest` outputs
  - Risks & rollback
  - Follow-ups

## 7) Playbooks (copy/paste to start work)

### 7.1 Convert a multi-artist source → per-artist styles

- **Inputs:** `/styles-source/<file>.md`

- **Outputs:** `/styles/<artist_or_style>.md` (new files), manifest updated

- **Rules:** one artist/style per file; preserve unique voice; add `about` (2–6 sentences); fill all 8 sections; ratios = provisional + notes.

- **Agent prompt:**

  > Parse the source, split into per-artist v4.2 styles, show diffs for each new file, wait for approval, then write + validate + build and paste outputs. Do **not** delete the original; move it to `/styles-archive/` if requested.

### 7.2 Script hardening / policy enforcement

- Touch only `/scripts/*.ts` and `/docs/*.md`.
- Keep changes minimal; include sample console output.

### 7.3 Documentation (README/CONTRIBUTING/AGENTS)

- Show a diff for **one file at a time**.
- For README: replace from an authoritative block; never stream-edit.

## 8) Anti-flattening rules (important)

- If a `/styles/*.md` body appears to include >=2 well-known artist names within a **single** file, **warn** and propose a split (don’t merge styles that share a `group`).
- In `manifest.json`, **do not** coalesce entries with the same `group`; each style is its own card.

## 9) Build-Manifest expectations (repo-specific)

- Manifest entries include: `id`, `group`, `display_name`, `file`, `ratios`, `modes`, `safety_profile`, `about`, `sections_index`.
- If present in frontmatter, we also include: `artist`, `movement`, `style_scope`.
- Print a final summary like: `Indexed: X  Skipped: Y  Collections: Z`.

*(Note: current `build-manifest.ts` omits artist/movement and doesn’t print a summary. Agents should propose a diff to add those fields and the summary when asked.)*

## 10) CI / Automation

- Current CI runs: `validate:styles`.
- Agents should propose (in a PR when requested) adding:
  - `pnpm run build:manifest` to CI,
  - `pnpm run validate:readme` (once the small README validator exists),
  - Optional strict job: `validate:styles --strict`.

## 11) Red-flags & auto-escalation

- Missing frontmatter/sections → propose a patch.

- > 3 ratios → warn to reduce for curation.

- Any suggestion to add frames/signatures/logos → stop and ask.

## 12) Troubleshooting for agents

- `TS5109` or ESM issues → use `tsconfig.scripts.json` (CommonJS) as already configured.
- Empty manifest → only `_TEMPLATE.md` present; add real styles.
- README truncation → restore from authoritative block; add README validator.

