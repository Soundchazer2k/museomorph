# MuseoMorph — Engineering Notes

## 2025-11-12 — Collaboration Scope + Validator Updates

- Added `style_scope: "collaboration"` alongside existing `"single-artist"` and `"movement"` scopes.
- Validator now only warns on multi-artist `artist` strings when `style_scope` is `"single-artist"`.
- Updated three collaboration cards to use `style_scope: collaboration`:
  - `styles/psychedelic_art/mouse_kelley_psychedelic_collage.md`
  - `styles/record_covers/hipgnosis_surrealist_staging.md`
  - `styles/golden_age_comics/siegel_shuster_foundational_superhero.md`
- Path normalization fix in validator to avoid Windows false positives on group directories.
- Post-change status:
  - `pnpm run validate:styles` → All green.
  - `pnpm run build:manifest` → Indexed: 211, Skipped: 1, Collections: 32.

