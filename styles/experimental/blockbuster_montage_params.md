---
# Blockbuster Montage Poster Style
# Parameter-driven definition - no artist name in prompt

id: blockbuster-montage-poster
artist: "Drew Struzan"                   # Reference only, not in prompt
display_name: "Blockbuster Montage — Heroic Cinema Illustration"
genre: "Movie Poster Illustration"
group: "Movie Posters"
era: "1975-2008"
ratios: ["2:3"]

api:
  thinkingLevel: "HIGH"
  aspectRatio: "2:3"

# ═══════════════════════════════════════════════════════════════════════════════
# TECHNICAL PARAMETERS
# ═══════════════════════════════════════════════════════════════════════════════

technique:
  foundation_medium: "airbrush"
  foundation_color: "#8B7355"            # Warm sepia-ochre
  foundation_opacity: "semi-opaque"

  detail_medium: "colored pencil"
  detail_tool: "wax-based colored pencils (Prismacolor type)"
  stroke_width: "0.5-1.5mm"
  stroke_direction: "directional, following form contours"

  surface_type: "board"
  surface_texture: "hot-press"
  surface_finish: "matte"

composition:
  structure_type: "pyramid"
  focal_position: "center, apex at upper third"
  depth_layers: 3                        # Foreground figure, midground action, background atmosphere

  figure_scale: "60-70%"
  figure_crop: "three-quarter to bust"
  figure_pose: "heroic"

  background_type: "montage"
  montage_pattern: "radial"              # Elements emanate from center
  depth_fade: "sharp-to-soft"

lighting:
  key_direction: "upper-left"
  key_angle: "45°"
  key_temperature: "3200K"               # Warm tungsten
  key_quality: "soft"

  fill_ratio: "3:1"
  fill_temperature: "4500K"              # Neutral

  rim_light: true
  rim_temperature: "6500K"               # Cool daylight
  rim_intensity: "dramatic"
  backlight_glow: true

  contrast_ratio: "4:1"
  shadow_depth: "L≥15%"

color:
  palette_type: "complementary"
  primary_range: "#D4A574 to #8B4513"    # Ochre to sienna (warm)
  secondary_range: "#4169E1 to #191970"  # Royal blue to midnight (cool)
  accent_color: "#FFD700"                # Gold highlights

  saturation: "high (65-80%)"
  temperature_bias: "warm"
  value_key: "mid-key"

rendering:
  face_rendering: "photorealistic"
  face_idealization: "heroic"            # Luminous skin, slightly idealized proportions
  body_rendering: "detailed"
  background_rendering: "atmospheric"

  focal_edge: "sharp"
  background_edge: "soft"
  edge_softness_range: "0.2 on faces, 0.7 on backgrounds"

  texture_visibility: "visible"
  medium_artifacts: "pencil strokes on focal areas, airbrush gradients on backgrounds"
---

## Prompt Assembly (No Artist Name)

Portrait of [subject] as heroic movie protagonist in confident three-quarter pose.
Central pyramid composition with figure at 65% frame height, apex at upper third.
Radial montage of action vignettes emanating outward: vehicles, explosions,
supporting characters at smaller scales in the background.

**Technique:** Airbrush foundation wash in warm sepia-ochre (#8B7355) tones creating
ethereal glowing background. Wax-based colored pencil detail layer with directional
strokes following form contours on face, hair, and costume. Rendered on hot-press
illustration board with matte finish.

**Lighting:** Soft key light from upper-left at 45°, warm 3200K tungsten quality.
3:1 fill ratio. Dramatic cool rim lighting at 6500K creating separation and
backlight glow halo effect around the figure.

**Color:** Complementary palette with high saturation (70%). Warm ochres and siennas
(#D4A574 to #8B4513) in the golden explosion/glow center. Cool royal blues to
midnight (#4169E1 to #191970) in sky and shadows. Gold accent highlights.

**Rendering:** Photorealistic face with heroic idealization - luminous skin,
confident expression. Visible pencil texture on focal areas (face, costume details).
Soft atmospheric edges on background montage elements. Sharp foreground,
progressively softer toward edges.

---

## Condensed Prompt (for testing)

Portrait of [subject] as heroic movie protagonist, central pyramid composition
with figure at 65% frame height. Airbrush foundation in warm sepia-ochre tones,
colored pencil detail layer with visible directional strokes on face and costume.
Radial montage background with action vignettes emanating outward. Soft key light
from upper-left at 45°, warm 3200K. Dramatic cool rim lighting at 6500K with
backlight glow halo. Complementary palette: warm ochres/siennas against cool blues,
high saturation. Photorealistic face with heroic idealization, visible pencil
texture on focal areas, soft atmospheric background edges. Traditional illustration
on board, matte finish.

**Word count: ~95 words**

---

## Notes

This style captures the technique of classic 1980s Hollywood blockbuster poster
illustration without naming specific artists. The combination of:
- Airbrush ethereal glow + colored pencil precision
- Warm-cool complementary palette
- Central heroic pyramid with radial montage
- Dramatic rim lighting with backlight halo

...is distinctive enough to evoke the aesthetic through technical specification alone.
