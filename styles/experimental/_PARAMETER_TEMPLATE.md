---
# MuseoMorph Parameter-Driven Style Format v1.0
# Technical specifications for illustration styles - portable across AI platforms

# Identity (for UI display and reference - NOT included in prompts by default)
id: style-identifier
artist: "Original Artist Name"           # Reference only, not in prompt
display_name: "Style Name — Descriptive Subtitle"
genre: "Art Category"
group: "Collection Name"
era: "YYYY-YYYY"
ratios: ["2:3", "3:4"]

# API Configuration
api:
  thinkingLevel: "HIGH"
  aspectRatio: "2:3"

# ═══════════════════════════════════════════════════════════════════════════════
# TECHNICAL PARAMETERS - These define the style without artist name
# ═══════════════════════════════════════════════════════════════════════════════

technique:
  # Foundation Layer
  foundation_medium: "airbrush | oil wash | watercolor | gouache | digital"
  foundation_color: "#HEX"               # Base tone hex code
  foundation_opacity: "transparent | semi-opaque | opaque"

  # Detail Layer
  detail_medium: "colored pencil | oil paint | acrylic | pastel | ink"
  detail_tool: "brush type, pencil brand, or tool description"
  stroke_width: "0.1-5mm"                # Visible stroke size
  stroke_direction: "hatching | crosshatch | stipple | blended | directional"

  # Surface
  surface_type: "canvas | board | paper | digital"
  surface_texture: "smooth | cold-press | hot-press | linen | rough"
  surface_finish: "matte | semi-gloss | gloss | varnished"

composition:
  # Structure
  structure_type: "pyramid | diagonal | rule-of-thirds | centered | asymmetric"
  focal_position: "center | upper-third | golden-ratio"
  depth_layers: 1-5                      # Number of distinct depth planes

  # Figure Handling
  figure_scale: "percentage of frame height (e.g., 60-70%)"
  figure_crop: "full-body | three-quarter | bust | close-up"
  figure_pose: "heroic | candid | dynamic | contemplative"

  # Background Treatment
  background_type: "montage | atmospheric | environmental | abstract | minimal"
  montage_pattern: "radial | linear | clustered | scattered"   # If montage
  depth_fade: "sharp-to-soft | uniform | layered"

lighting:
  # Key Light
  key_direction: "upper-left | upper-right | front | side | back"
  key_angle: "0-90°"                     # Degrees from horizontal
  key_temperature: "2800-6500K"          # Color temperature
  key_quality: "hard | soft | diffused"

  # Fill Light
  fill_ratio: "2:1 | 3:1 | 4:1 | 5:1"   # Key to fill ratio
  fill_temperature: "2800-6500K"

  # Accent Lights
  rim_light: true | false
  rim_temperature: "2800-6500K"
  rim_intensity: "subtle | moderate | dramatic"
  backlight_glow: true | false

  # Overall
  contrast_ratio: "1.5:1 to 8:1"         # Highlight to shadow ratio
  shadow_depth: "L% luminance minimum"   # Darkest acceptable shadow

color:
  # Palette Type
  palette_type: "complementary | analogous | triadic | monochromatic | split-complementary"

  # Color Ranges (hex codes)
  primary_range: "#HEX1 to #HEX2"
  secondary_range: "#HEX1 to #HEX2"
  accent_color: "#HEX"

  # Qualities
  saturation: "low (20-40%) | medium (40-60%) | high (60-80%) | vivid (80%+)"
  temperature_bias: "warm | cool | neutral"
  value_key: "low-key | mid-key | high-key"

rendering:
  # Detail Levels
  face_rendering: "photorealistic | stylized | abstracted | minimal"
  face_idealization: "none | subtle | moderate | heroic"
  body_rendering: "detailed | suggested | simplified"
  background_rendering: "detailed | atmospheric | minimal | abstract"

  # Edge Treatment
  focal_edge: "sharp | crisp | defined"
  background_edge: "soft | diffused | lost"
  edge_softness_range: "0.0 (razor) to 1.0 (completely soft)"

  # Texture
  texture_visibility: "smooth | subtle | visible | pronounced"
  medium_artifacts: "brush strokes | pencil marks | grain | none"
---

# Prompt Assembly Template

## Style Direction

[Subject]: {figure_pose} portrait of the subject
[Composition]: {structure_type} composition, figure at {figure_scale} frame height
[Technique]: {foundation_medium} foundation in {foundation_color} tones, {detail_medium} detail layer with {stroke_direction} marks
[Surface]: Rendered on {surface_type}, {surface_texture} {surface_finish} finish
[Lighting]: {key_quality} key light from {key_direction} at {key_angle}°, {key_temperature}K. {fill_ratio} fill ratio. {rim_light ? "Rim lighting at " + rim_temperature + "K" : ""}
[Color]: {palette_type} palette, {saturation} saturation, {temperature_bias} bias
[Rendering]: {face_rendering} face with {face_idealization} idealization, {texture_visibility} {medium_artifacts}

## Example Assembled Prompt

Portrait of [subject] in heroic pose, central pyramid composition with figure at 65% frame height. Airbrush foundation in warm sepia (#8B7355), colored pencil detail with directional strokes. Rendered on illustration board, hot-press matte finish. Soft key light from upper-left at 45°, 3200K warm. 3:1 fill ratio. Dramatic rim lighting at 6500K cool with backlight glow. Complementary palette, high saturation, warm bias. Photorealistic face with heroic idealization, visible pencil texture on focal areas.

---

# Parameter Reference

## Common Values

### Lighting Temperatures
- 2800K: Candlelight/warm tungsten
- 3200K: Tungsten/incandescent
- 4000K: Neutral fluorescent
- 5500K: Daylight/flash
- 6500K: Overcast/cool daylight
- 7500K: Blue sky shade

### Saturation Ranges
- Low: 20-40% (muted, desaturated)
- Medium: 40-60% (natural)
- High: 60-80% (vivid, cinematic)
- Vivid: 80%+ (hyper-saturated)

### Contrast Ratios
- 1.5:1: Flat, even (high-key fashion)
- 2:1: Low contrast (soft, flattering)
- 3:1: Medium (natural, balanced)
- 4:1: Moderate (dimensional)
- 5:1: High (dramatic)
- 8:1: Very high (noir, chiaroscuro)

### Edge Softness Scale
- 0.0-0.2: Sharp, crisp edges
- 0.3-0.5: Defined but not harsh
- 0.6-0.8: Soft, atmospheric
- 0.9-1.0: Lost edges, blending into background
