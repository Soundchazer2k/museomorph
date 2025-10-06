# Pre-Raphaelite Analysis

```yaml
---
# CODEX METADATA - PROMPT CONFIGURATION
codex_version: "1.0"
prompt_framework: "Universal Museum-Grade v4.3 (NanoBanana Edition)"
framework_date: "2025-01-09"
style_card_date: "2025-01-09"
artist: "John William Waterhouse"
style_period: "Pre-Raphaelite / Academic Classicism (1880s-1917)"

# RENDERER CONFIGURATION - NanoBanana (Gemini 2.5 Flash Image)
renderer:
  model: "gemini-2.5-flash-image"
  api_endpoint: "via Claude API proxy"
  supported_ratios: ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
  default_ratio: "3:4"
  token_cost_per_image: 1290
  output_modalities: ["Text+Image"]
  aspect_ratio_enforcement: "prompt_based_only"

# RATIO ADAPTATION SETTINGS
adaptation:
  strategy: "nearest_match_preserve_intent"
  strict_reframe: true
  preserve_orientation: true
  document_decision: true
  auto_apply: true

# FRAMEWORK METADATA
framework_version: "4.3"
base_version: "4.2 Enhanced"
artist_specific_version: "Waterhouse Pre-Raphaelite"

# EXECUTION PARAMETERS
validation_required: true
auto_regenerate_on_fail: true
silent_validation: true
logging_level: "standard"

# SAFETY & COMPLIANCE
ip_protection: true
copyright_safeguards: true
safety_profile: ["no_nudity", "modest_coverage", "classical_garments", "ankle_length_minimum"]
material_authenticity: true
period_production_authenticity: true
composition_boundaries: "no_external_frames"

# PROMPT ASSEMBLY
sections_required: [1, 2, 3, 4, 5, 6, 7, 8]
include_validation_checklist: false
include_historical_context: true
---
```

# John William Waterhouse - Pre-Raphaelite / Academic Classicism Framework

**Timeframe:** 1880s-1917
 **Historical Context:** British Pre-Raphaelite painter working in the late Victorian and Edwardian periods, known for romantic interpretations of literary and mythological subjects. Combined Academic painting technique with Pre-Raphaelite narrative sensibility and color palette. Works characterized by melancholic heroines from classical mythology, Arthurian legend, and Victorian poetry (Tennyson, Keats). Painted in traditional oil on canvas using extensive glazing techniques for luminous skin tones and atmospheric effects.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Combat model's resistance to ratio instructions through explicit ratio declaration in multiple prompt locations, repetitive ratio reinforcement, negative constraints prohibiting unwanted ratios, and compositional anchors designed specifically for target ratio.
- **Style over likeness:** Likeness via silhouette, gesture, expression, and Waterhouse's characteristic melancholic introspection.
- **Technical Measurement Authority:** Quantitative specifications ("110-120% neck elongation", "1-3mm paint thickness", "3-7 glazing layers") override descriptive language.
- **Process-Over-Result Priority:** Classical oil glazing technique supersedes visual appearance descriptions.
- **Face-Treatment Flag:** `oil-fat-over-lean` (extensive glazing for luminous skin)
- **Pose Flags:** `contrapposto`, `contemplative-seated`, `gestural-fluid`
- **Canvas Control Flag:** `adaptive-extend` or `source-respect`
- **Material Physics Authority:** Traditional oil painting on canvas with earth-tone grounds
- **Scale-Dependent Technique:** Gallery viewing distance (6-10 feet) informs brushwork precision
- **Quantifiers authoritative:** Numeric anchors are targets
- **Text policy:** Only render text if Section 8 authorizes
- **Safety/IP:** No nudity; no real logos/watermarks/signatures
- **Age & wardrobe guardrail:** All figures fully clothed in period-appropriate classical or medieval garments; ankle-length minimum coverage for adults, knee-to-ankle for youth
- **Gender expression:** **CRITICAL - Respect presented gender.** Masculine subjects = masculine wardrobe track (togas, tunics, armor). Feminine subjects = feminine wardrobe track (chitons, gowns, draped garments). Match styling to presented gender in source or user specification.
- **Material authenticity:** No digital photo filters or modern post-processing; authentic oil painting surface characteristics required
- **Composition boundaries:** No frames outside canvas; no artificial borders or watermarks
- **Failure Mode Flags:** Avoid generic Pre-Raphaelite drift, anime contamination, HDR smoothing
- **Silent validation:** Apply checklist, regenerate silently if fail
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary or content beyond Section 8.

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** - ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **3:4**. This is a hard requirement.
- Redraw in **John William Waterhouse Pre-Raphaelite Academic Classicism** for **museum gallery oil painting on canvas**.
- Identity via silhouette, gesture, melancholic expression, and romantic narrative context.
- **IP Safeguard Declaration:** Create original mythological/literary character designs avoiding copyrighted elements; classical and medieval subjects in public domain.
- **Face-Treatment Flag:** `oil-fat-over-lean` with extensive glazing for skin luminosity
- **Pose Flag:** `contrapposto` or `contemplative-seated` depending on narrative context
- **Canvas Control Flag:** `adaptive-extend`
- **Safety Mandate:** All figures fully clothed in period-appropriate garments with ankle-length minimum coverage, modest necklines.
- **Style Dominance:** Oil painting technique with 3-7 thin glazing layers for skin, soft diffused natural lighting from upper left 45°, melancholic introspective expression, earth tone backgrounds with jewel tone accent fabrics, elongated necks (110-120% proportion), slightly enlarged eyes (105-110%), romantic literary/mythological narrative. **CRITICAL: Respect presented gender - masculine subjects receive masculine styling and wardrobe; feminine subjects receive feminine styling and wardrobe.**
- **Mode Selector:** Gallery
- **Final Ratio Confirmation:** Output must be exactly **3:4 ratio**, no exceptions.

------

### 2) Canvas Strategy & Spatial Logic

**RATIO SELECTION:** `3:4` (portrait - 864×1184) - Native NanoBanana support, no adaptation required

**CANVAS RECOMPOSITION STRATEGY:**

- **Ratio Status:** Native 3:4 portrait format
- **Reframing Method:** Extend atmospheric background to fill vertical portrait composition
- **Spatial Allocation:** Figure occupies 60-75% of canvas height, head placement in upper third, groundline in lower 15-25%
- **Background Treatment:** Atmospheric perspective with 3-5 distinct spatial planes; natural settings (forest/water) extend seamlessly to canvas edges; interior settings show classical architecture with measured linear perspective
- **Format Justification:** 3:4 portrait ratio serves Waterhouse's single-figure narrative compositions, vertical emphasis suits standing/seated contemplative poses, allows environmental context while maintaining figure dominance

------

### 3) Artistic Style & Context

**Influences:** Pre-Raphaelite Brotherhood color palette and literary subjects; Academic Classicism painting technique; Victorian Romantic sensibility; Classical mythology and Arthurian legend; Tennyson and Keats poetry visualization

**Medium/Production Method:** Oil on canvas using traditional fat-over-lean technique. Canvas preparation with earth-tone ground (burnt sienna/raw umber) showing through in 60% of final surface. Extensive glazing (3-7 thin layers) for skin luminosity and fabric transparency. Wet blending for atmospheric effects. Brush-loaded single strokes for foliage suggestion. Paint thickness 1-3mm average, 5mm maximum in highlights. Varnish creates period-authentic high gloss finish.

**Thematic Purpose:** Romantic visualization of literary and mythological narratives emphasizing melancholic introspection, feminine contemplation, and poetic longing. Subjects typically represent moments of emotional complexity from classical mythology (Psyche, Pandora, nymphs), Arthurian legend (Lady of Shalott, Guinevere), or Victorian poetry (Ophelia, La Belle Dame).

**Hallmark Motifs with Quantified Specifications:**

1. **Neck Elongation:** 110-120% standard proportion creating graceful vertical emphasis with 5-10° forward tilt
2. **Melancholic Expression:** Downward gaze option, 8-15° head tilt, relaxed facial muscles with slight frown, creating introspective psychological depth
3. **Atmospheric Water Environments:** Deep blue-green water tones (#1C4966, #2F5F7F) with visible depth layering and wet stone reflections
4. **Auburn Hair Option:** Warm reddish-brown tones (#8B4513, #A0522D) with naturalistic flow and individual strand suggestion, or dark hair (#3C2415, #4A3728)
5. **Classical Drapery Physics:** Fabric behavior follows gravitational logic with pipe folds, diaper folds, spiral twists, half-lock, and cascade variations; glazing creates transparency in 2-4 layers

**Period Framing:** Late Victorian/Edwardian Academic painting (1880s-1917), exhibited at Royal Academy, collected by industrial magnates, bridging Pre-Raphaelite romanticism with academic technical mastery

**Tone Tag:** Melancholic, romantic, introspective, narrative-driven, literary

------

### 4) Technical Execution

**Painting Technique Anchors:**

1. **Glazing Layering Method:** 3-7 thin transparent oil layers for skin rendering, building from earth-tone underpainting through warm peachy tones (#F5DEB3, #E8C5A5) to final luminosity. Each layer 0.3-0.5mm thickness, allowing ground color to contribute to overall warmth. Shadow areas receive cool blue-violet glazes for temperature contrast.
2. **Brushwork Visibility Hierarchy:** Face rendering with minimal stroke visibility - highly blended wet-on-wet technique with lost-and-found edges. Fabric rendering shows moderate stroke visibility following drape structure, directional application visible in fold valleys. Background execution variable - visible brushwork in foliage suggestion, atmospheric blending in sky/water recession.
3. **Lighting Logic - Diffused Natural Source:** Primary light from upper left 45° angle option, creating soft shadow edges with 5-10mm gradient transitions at form boundaries. Shadow density transparent - detail remains visible in shadow areas. Highlight placement selective on facial features, fabric peaks, metallic objects; intensity controlled at 85-95% value, rarely pure white. Chromatic shift: warm highlights on skin, cool highlights on fabric.
4. **Atmospheric Perspective Treatment:** Background saturation 50-70% vs foreground saturation 70-85%. Color shift warm-to-cool with distance. Value shift 20-30% lighter in far background. Edge treatment: sharp foreground detail, progressively softer recession through 3-5 distinct spatial planes with 15-25% canvas depth transition zone.
5. **Fabric Transparency Rendering:** 2-4 glazes for sheer materials, mixing body tone color + fabric color to create visible composite. Gauze/silk transparency shows anatomical forms through maximum 2 layers. Edge treatment soft at transparent boundaries. Compression points clearly defined at waist, shoulder, elbow with tension lines visible as subtle value shifts.

**Pose Anchors:**

- **Contrapposto Standing:** Weight on one leg, 15-25° hip angle shift, shoulders counter-rotated 10-20°, creating elegant S-curve through torso
- **Contemplative Seated:** Relaxed torso rotation 10-20°, head tilt 8-15° average, hands deliberately positioned touching objects (lyres, vessels, flowers)
- **Head Position:** Varied gaze directions including downward contemplative, profile view, or direct gaze; contributes to introspective melancholic quality

**Scale Hierarchy Anchor:** Neck elongation 110-120% standard proportion, eyes slightly enlarged 105-110%, hands naturalistic 95-100% with fingers elongated 100-105%. All other proportions naturalistic within visible frame. Paint thickness measured: 1-3mm average, 5mm maximum in impasto highlights.

**Material Authenticity Anchor:** Traditional oil painting surface characteristics required - canvas weave texture subtle, varnish creates period-authentic high gloss finish, no digital smoothing or modern post-processing effects. Underpainting visible through glaze layers in portions of surface.

**Period Consistency Anchor:** All technical methods authentic to 1880s-1917 Academic oil painting practice - fat-over-lean layering, natural hair brushes, traditional pigments, linen canvas preparation with earth-tone grounds.

**Canvas Adaptation Anchor:** Composition optimized for 3:4 portrait ratio with figure occupying 60-75% canvas height, head in upper third, environmental context in remaining 25-40% with purposeful negative space allocation.

------

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Tracks - SAFETY CALIBRATED FOR NO NUDITY:**

**CRITICAL: Gender Expression Respect - Match wardrobe track to presented gender in source image or user specification.**

**Adult Feminine:**

- **Classical Greek:** Full-length chiton (ankle-length minimum) in white linen (#F5F5DC, #EEE8DC) or jewel-tone silk (deep red #8B3A3A, blue #4682B4, green #556B2F). Peplos with shoulder pinning, proper draping creating pipe folds and diaper compression. Fabric behavior: linen shows crisp folds with sharp highlights, silk shows fluid drape with high sheen.
- **Medieval/Arthurian:** Floor-length gowns in rich fabrics - burgundy wool (#8B3A3A), forest green (#556B2F), deep blue (#4682B4). Long sleeves, modest necklines, fitted bodices with flowing skirts. Fabric weight creates heavy drape with soft folds.
- **Romantic/Poetic:** Layered gauze and silk combinations maintaining full opacity through multiple layers. Flowing sleeves, draped sashes, ankle-length hemlines. Strategic use of hair as additional coverage element while maintaining naturalistic flow.

**Adult Masculine:**

- **Classical Greek/Roman:** Full-length toga or himation (ankle-length) in white linen or deep earth tones. Draped over one shoulder leaving other arm free. Tunic beneath with proper draping. For warriors: tunic with leather cuirass, greaves, classical helmet.
- **Medieval/Arthurian:** Knee-length to floor-length tunics in deep colors (burgundy #8B3A3A, forest green #556B2F, midnight blue #4682B4). Fitted at shoulders, belted at waist. Long cloaks draped over shoulders. For knights: period-accurate armor over tunic, surcoat, chainmail visible.
- **Romantic/Poetic:** Loose linen shirts (white, cream) with open collars, dark breeches or trousers, long cloaks or robes in rich fabrics. Boots or barefoot depending on setting.

**Youth (Any Gender):**

- Simple tunic or chiton in light colors, knee to ankle length depending on activity
- Modest coverage appropriate to age and historical context
- Natural, age-appropriate styling

**Fabric Behavior Physics:**

- **Linen:** Crisp folds, matte finish, sharp highlight edges, holds form
- **Silk:** Fluid drape, complex fold patterns, high sheen with cool highlights, follows curves
- **Wool:** Heavy drape, soft rounded folds, matte to slight sheen, substantial weight
- **Gauze:** Transparent when single layer, opaque when doubled, delicate structure, minimal weight

**Accessory Caps:** Elaborate 3-4 items maximum

- **Belts:** Cord, jeweled, or metal at natural waist - defines compression point for drapery
- **Headwear:** Floral wreaths (roses, laurel), jeweled headbands, veils (transparent but decorative)
- **Jewelry:** Minimal to moderate - simple bracelets, necklaces, earrings in gold or bronze
- **Footwear:** Barefoot or simple sandals

**Color Palette Restrictions:** Earth tone backgrounds (#8B7355, #A0826D, #6B5D4F) with jewel tone fabric accents. Desaturated color approach - avoid pure saturated primaries. Skin tones warm peachy (#F5DEB3, #E8C5A5). Auburn hair dominance (#8B4513, #A0522D) 75% frequency.

**Wardrobe Variation Required:** Change primary garment colors/styles between iterations - cycle through white linen, deep red silk, forest green wool, deep blue classical draping. Avoid identical color repetition.

**Props:** 1 hero + optional 1 micro (total ≤2)

**Hero Props (choose 1):**

```yaml
mythological_vessels:
  - amphora (bronze/ceramic with decorative patterns)
  - krater (wide-mouth mixing vessel, gold/bronze)
  - hydria (water vessel with three handles)
  - chalice (ritual cup, metallic sheen)

musical_instruments:
  - lyre (precise string detail, wood and metal construction)
  - harp (larger scale, multiple strings visible)
  - pan pipes (reed construction, held to lips)

literary_objects:
  - mirror (polished metal, hand-held, reflective surface suggested)
  - book/scroll (medieval or classical manuscript)
  - sword (Arthurian context, historically accurate to period)

natural_elements:
  - flower_bouquet (roses, lilies, wildflowers - botanically accurate)
  - laurel_wreath (individual leaf detail, classical symbolism)
  - single_dramatic_flower (oversized rose or lily as narrative focus)
```

**Micro Props (optional, choose 0-1):**

```yaml
scattered_elements:
  - petals_on_ground (roses, lilies - 5-10 individual petals)
  - small_stones (river rocks, textured surfaces)
  - water_plants (reeds, lily pads at water's edge)
  - jewelry_detail (single bracelet, small earrings)
```

**Coherence Filter:** All elements support Pre-Raphaelite romantic narrative with classical/medieval historical accuracy. If props don't serve literary/mythological storytelling, default to clean scene with environmental elements only (flowers, stones, water, foliage).

------

### 6) Constraints

**Canvas Negatives (≥2):**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "1632×640", "non-standard ratios", "arbitrary dimensions", "default aspect ratio"
- "nudity", "exposed skin", "revealing garments", "short hemlines", "low necklines"
- "modern fashion", "contemporary clothing", "digital smoothing", "HDR processing"
- "anime style", "manga influence", "graphic novel aesthetic"
- "harsh lighting", "studio flash", "artificial spotlight"
- "vibrant saturation", "pure primary colors", "neon tones"
- "visible canvas texture simulation", "digital brush presets"

**Canvas Positives (≥2):**

- "exactly 3:4 portrait ratio", "recomposed for vertical academic canvas format", "MUST be 3:4 ratio"
- "strict 3:4 aspect ratio compliance", "precise 3:4 dimensions", "composed specifically for 3:4 portrait format"
- "full-length classical garments", "ankle-length coverage minimum", "modest period-appropriate clothing"
- "extensive oil glazing technique", "3-7 thin transparent layers for skin luminosity"
- "soft diffused natural light from upper left 45°", "atmospheric perspective with cool recession"
- "melancholic introspective expression", "downward contemplative gaze"
- "earth tone backgrounds with jewel tone fabric accents", "desaturated romantic color palette"
- "elongated neck 110-120% proportion", "graceful vertical emphasis"
- "physically accurate fabric draping", "gravitational fold logic"
- "literary narrative context", "mythological storytelling"

**Vocabulary Warnings:**

- Avoid "ornate", "ornament", "elaborate" if frame generation unwanted - use "period-authentic detail" instead
- Avoid "nude", "bare", "exposed" - use "classically draped", "modestly covered", "full-length garment"
- Avoid "photographic", "realistic", "lifelike" - use "painterly", "oil glazed", "academically rendered"

------

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (3:4 Portrait Format):**

- Vertical emphasis with figure dominance ≥60% canvas height
- Head placement in upper third (25-35% from top edge)
- Hierarchical staging: foreground figure detail, midground environmental context, background atmospheric recession
- Groundline at 75-85% canvas height, allowing 15-25% for lower environmental detail
- Negative space 20-30% of composition in upper sky/atmospheric zone

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective Regime:** Classical linear perspective for interiors (columns, arches, tessellated floors with measured recession). Atmospheric perspective for natural settings (3-5 distinct spatial planes, warm-to-cool color shift, progressive edge softening).
- **Figure:Ground Ratio:** Figure 60-75% of canvas height in portrait orientation, environmental context 25-40%, creating narrative integration rather than isolated portraiture
- **Density Distribution:** Foreground high detail (individual leaves, flower petals, fabric fold precision), midground medium detail (mass and form definition), background low detail (atmospheric fade, soft edges), transition zone 15-25% of canvas depth
- **Lighting Logic:** Soft diffused natural light from upper left 45° (60% frequency), creating transparent shadows with detail visible, highlight placement selective on facial features and fabric peaks, chromatic shift warm on skin/cool on fabric
- **Detail:Negative Space Ratio:** 70% detailed narrative elements, 30% atmospheric negative space for compositional breathing room and melancholic mood

**ENVIRONMENTAL SETTINGS:**

**Natural Settings (preferred for 3:4 portrait):**

- **Forest:** Deep atmospheric perspective with dappled light through canopy, individual foreground leaves/flowers visible, mass definition in midground trees, soft atmospheric fade in background, earth tone dominance (#6B5D4F, #4A3C2E) with green accents (#556B2F, #6B8E23)
- **Waterscape:** Rivers, ponds, or sea with visible depth layering, foreground wet stones with highlight reflections, midground water surface with gentle ripples, background atmospheric horizon, deep blue-green tones (#1C4966, #2F5F7F, #4682B4)
- **Garden:** Cultivated flora with botanical accuracy (roses, lilies), classical architectural elements (urns, low walls, fountains), measured spatial recession, selective foreground flower detail with background atmospheric treatment

**Interior Settings:**

- **Classical Architecture:** Doric/Ionic/Corinthian columns with capital detail, rounded or Gothic arches, tessellated floor patterns with precise linear perspective, natural light from window openings creating soft ambient glow
- **Furnishings:** Period-accurate couches, chairs, tables with appropriate construction, fabric draping on furniture following same physics as garments
- **Windows:** Gothic or Romanesque arched openings showing landscape beyond, creating depth and light source justification

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil painting on linen canvas with earth-tone ground showing through glaze layers
- **Frame/Band Anchor:** OMIT ENTIRELY - no decorative frames, borders, or bands (violates Waterhouse academic painting convention)
- **Production Context Anchor:** Traditional Academic oil painting technique authentic to 1880s-1917 British gallery exhibition standard
- **Ratio Enforcement Anchor:** Composition designed specifically for 3:4 portrait ratio - vertical emphasis suits standing/seated contemplative figures with environmental narrative context, head in upper third, groundline in lower quarter, atmospheric background fills remaining vertical space

------

### 8) Typography & Text Integration

**Binary:** OMIT

John William Waterhouse's Academic paintings contained no typography or text elements. All narrative content communicated through visual imagery, pose, expression, and environmental symbolism. Museum gallery presentation format requires clean canvas with no text, titles, or captions.

**Historical Accuracy:** Period exhibition practice showed paintings in ornate gilt frames with separate wall plaques for titles - never text integrated into painted surface.

------

```yaml
---
# CODEX METADATA - PROMPT CONFIGURATION
codex_version: "1.0"
prompt_framework: "Universal Museum-Grade v4.3 (NanoBanana Edition)"
framework_date: "2025-01-09"
style_card_date: "2025-01-09"
artist: "Dante Gabriel Rossetti"
style_period: "Pre-Raphaelite Brotherhood (1848-1882)"

# RENDERER CONFIGURATION - NanoBanana (Gemini 2.5 Flash Image)
renderer:
  model: "gemini-2.5-flash-image"
  api_endpoint: "via Claude API proxy"
  supported_ratios: ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
  default_ratio: "3:4"
  token_cost_per_image: 1290
  output_modalities: ["Text+Image"]
  aspect_ratio_enforcement: "prompt_based_only"

# RATIO ADAPTATION SETTINGS
adaptation:
  strategy: "nearest_match_preserve_intent"
  strict_reframe: true
  preserve_orientation: true
  document_decision: true
  auto_apply: true

# FRAMEWORK METADATA
framework_version: "4.3"
base_version: "4.2 Enhanced"
artist_specific_version: "Rossetti Pre-Raphaelite Brotherhood"

# EXECUTION PARAMETERS
validation_required: true
auto_regenerate_on_fail: true
silent_validation: true
logging_level: "standard"

# SAFETY & COMPLIANCE
ip_protection: true
copyright_safeguards: true
safety_profile: ["no_nudity", "modest_coverage", "medieval_classical_garments", "floor_length_minimum"]
material_authenticity: true
period_production_authenticity: true
composition_boundaries: "no_external_frames"

# PROMPT ASSEMBLY
sections_required: [1, 2, 3, 4, 5, 6, 7, 8]
include_validation_checklist: false
include_historical_context: true
---
```

# Dante Gabriel Rossetti - Pre-Raphaelite Brotherhood Framework

**Timeframe:** 1848-1882
 **Historical Context:** The Pre-Raphaelite Brotherhood was a revolutionary movement founded in London in 1848 by seven young artists who sought to overthrow academic conventions descended from Raphael. They championed "truth to nature" through microscopic observation, embraced literary and medieval themes with psychological realism, and pioneered the white ground painting technique that created unprecedented jewel-like color luminosity. Dante Gabriel Rossetti was a founding member and key figure, known for his distinctive female archetype—languid, psychologically intense figures with voluminous red-blonde hair—and his integration of visual art with poetry (sonnets accompanying paintings). The Brotherhood received formal training at Royal Academy Schools but consciously rebelled against academic formulas, painting outdoors (en plein air), using innovative 19th-century pigments, and committing to "painful" application of microscopic detail throughout every element of their compositions.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Combat model's resistance through explicit ratio declaration in multiple locations, repetitive reinforcement, negative constraints, and compositional anchors designed for target ratio.
- **Style over likeness:** Likeness via Rossettian archetype (enigmatic interiority, psychological intensity, idiosyncratic features).
- **Technical Measurement Authority:** Quantitative specifications ("110-120% lip fullness", "Chinese White priming", "microscopic detail commitment") override descriptive language.
- **Process-Over-Result Priority:** White ground technique and microscopic observation supersede visual appearance descriptions.
- **Face-Treatment Flag:** `white-ground-luminosity` (revolutionary priming technique)
- **Pose Flags:** `psychological-tension`, `languid-intensity`, `gestural-narrative`
- **Canvas Control Flag:** `strict-reframe` or `adaptive-extend`
- **Material Physics Authority:** Oil on canvas with Chinese/Permanent White priming; watercolour with bodycolour (gouache) for opacity
- **Detail Philosophy:** "Truth to nature" = microscopic observation throughout - studying limb for limb, hand for hand, finger for finger
- **Quantifiers authoritative:** Numeric anchors are targets
- **Text policy:** Only render text if Section 8 authorizes
- **Safety/IP:** No nudity; no real logos/watermarks/signatures
- **Age & wardrobe guardrail:** All figures fully clothed in period-appropriate medieval/classical garments; floor-length minimum coverage
- **Gender expression:** **CRITICAL - Respect presented gender.** Masculine subjects = medieval/classical masculine wardrobe. Feminine subjects = medieval/classical feminine wardrobe. Match styling to presented gender.
- **Material authenticity:** No digital filters; authentic oil/watercolour surface with white ground luminosity
- **Composition boundaries:** No frames outside canvas
- **Failure Mode Flags:** Avoid idealized Raphaelesque beauty, theatrical staging, generalization, conventional prettiness
- **Silent validation:** Apply checklist, regenerate silently if fail
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add content beyond Section 8.

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** - ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **3:4**. This is a hard requirement.
- Redraw in **Dante Gabriel Rossetti Pre-Raphaelite Brotherhood style** for **museum gallery oil painting on canvas with white ground technique**.
- Identity via Rossettian archetype: enigmatic psychological interiority, idiosyncratic features over idealized beauty, languid intensity.
- **IP Safeguard Declaration:** Create original literary/medieval character designs from public domain sources (Dante, Keats, Tennyson, Bible, Arthurian legend).
- **Face-Treatment Flag:** `white-ground-luminosity` - Chinese/Permanent White priming with transparent glazes
- **Pose Flag:** `psychological-tension` or `languid-intensity`
- **Canvas Control Flag:** `strict-reframe`
- **Safety Mandate:** All figures fully clothed in period-appropriate medieval/classical garments with floor-length coverage, modest necklines.
- **Style Dominance:** White ground oil technique creating jewel-like luminosity, microscopic detail commitment throughout (every leaf, finger, fabric fold individually studied), Rossettian female archetype (languid psychological intensity, voluminous red-blonde/auburn hair, full lips 110-120%, enigmatic gaze), delirious scarlet lilies color palette, literary/medieval narrative, rejection of idealized Raphaelesque beauty, truth to nature through painful observation. **CRITICAL: Respect presented gender - masculine/feminine subjects receive appropriate period wardrobe.**
- **Mode Selector:** Gallery
- **Final Ratio Confirmation:** Output must be exactly **3:4 ratio**, no exceptions.

------

### 2) Canvas Strategy & Spatial Logic

**RATIO SELECTION:** `3:4` (portrait - 864×1184) - Native NanoBanana support, no adaptation required

**CANVAS RECOMPOSITION STRATEGY:**

- **Ratio Status:** Native 3:4 portrait format
- **Reframing Method:** Tight figure framing or flat patterned background extension
- **Spatial Allocation:** Figure dominates frame (minimal negative space for single figures, dense crowding for multiple figures)
- **Background Treatment:** Medieval tapestry-like flat patterns with meticulous symbolic elements OR naturalistic detail with microscopic botanical accuracy - both approaches equally valid
- **Format Justification:** 3:4 portrait ratio serves PRB's tight psychological compositions, vertical emphasis suits commanding figure presence, allows either intimate proximity or dense narrative complexity

------

### 3) Artistic Style & Context

**Influences:** Rebellion against post-Raphaelesque academic art; Early Italian masters (Orcagna, Campo Santo frescoes); Northern Renaissance (Jan van Eyck's Arnolfini Portrait - minute exactitude, layered symbolism); Sandro Botticelli (graceful movement, avoidance of conventional beauty - Rossetti's personal rediscovery); Literary sources (Dante, Keats, Tennyson, Chaucer); Medieval manuscript illumination

**Medium/Production Method:** Oil on canvas OR watercolour with bodycolour (gouache) for opacity. **REVOLUTIONARY WHITE GROUND TECHNIQUE:** Canvas/board primed with brilliant Chinese White (zinc oxide) or Permanent White. Light passes through transparent/semi-opaque paint layers, reflects from white ground, radiates back creating jewel-like luminosity impossible with traditional dark grounds. This optical innovation is the foundational Pre-Raphaelite technical breakthrough. Meticulous blending with fine sable brushes for faces (invisible brushstrokes). Mix of smooth glazes and textured bodycolour for drapery. Scratching-out technique for highlights (Rossetti innovation). Gum Arabic added to heighten color intensity. Tools: sable brushes (detail), hog's hair brushes (texture/bodycolour), scratching implements. Additives: ox gall (watercolour flow), watercolour megilp (oil-paint texture in watercolour), Rouget's fixative (charcoal/pencil fixing). Enthusiastic adoption of new 19th-century pigments despite some fugitivity concerns.

**Thematic Purpose:** Revolutionary commitment to "truth to nature" through microscopic observation as moral/philosophical imperative. Literary and medieval themes rendered with modern psychological realism. Rejection of theatrical academic staging and idealized beauty in favor of idiosyncratic character and intense emotional interiority. Breaking barriers between visual art and literature (Rossetti wrote sonnets accompanying paintings).

**Hallmark Motifs with Quantified Specifications:**

1. **White Ground Luminosity:** Chinese/Permanent White priming creates optical light reflection through paint layers, producing jewel-like color intensity unmatched by contemporaries using traditional dark grounds
2. **Rossettian Female Archetype:** "Languid, flesh and bones figures - most desirable and most frightening" with voluminous cascading red-blonde/auburn hair, strong defined jawline, full lips (110-120% standard proportion), large heavy-lidded eyes, enigmatic distant gaze creating psychological interiority
3. **Microscopic Detail Commitment:** "Painful" application studying every element individually - limb for limb, hand for hand, finger for finger, including natural "accidents" (wind damage, rain effects, imperfections)
4. **Delirious Scarlet Lilies Palette:** Brilliant jewel-tone reds (Madder Carmine, Vermilion #DC143C, #E34234), pure greens with unexpected reflections (Oxide of Chromium #2F4F2F, #3CB371), deep blues (Cobalt, French Ultramarine #00008B, #4169E1), gold metallics for medieval illumination effects
5. **Symbolic Literary Narrative:** Every element carries meaning - no decorative filler; backgrounds as flat medieval patterns OR meticulous natural detail, both approaches symbolic and narrative-driven

**Period Framing:** Pre-Raphaelite Brotherhood founding (1848) through Rossetti's mature period (1860s-1882), Royal Academy training consciously rejected, en plein air outdoor painting for natural authenticity, studio use of lay figures for complex poses, pioneering white ground technique and 19th-century pigment innovation

**Tone Tag:** Psychologically intense, enigmatically interior, symbolically rich, microscopically detailed, anti-academic

------

### 4) Technical Execution

**Painting Technique Anchors:**

1. **White Ground Revolutionary Technique:** Prime canvas/board with brilliant Chinese White (zinc oxide) or Permanent White creating luminous foundation. Apply oil paint in transparent to semi-opaque layers allowing light to pass through, reflect from white ground, and radiate back creating jewel-like luminosity. This optical effect is impossible with traditional dark grounds and defines PRB color intensity. Gum Arabic added to colors to heighten intensity and create varnish-like sheen.
2. **Microscopic Detail Philosophy - Truth to Nature:** Commit to "painful" application studying every element individually. Method documented by Frederic George Stephens: "studying them one after the other, limb for limb, hand for hand, finger for finger, noting each inflection of joint, or tension of sinew." Foreground receives maximum individual texture rendering. Midground maintains detail without simplification. Background receives equal commitment whether flat symbolic pattern OR meticulous natural observation - both approaches microscopically detailed. Include naturalistic "accidents": wind and rain effects on foliage, subtle reflections on water and polished surfaces, complex natural color variations.
3. **Face Rendering - Invisible Brushwork:** Use fine sable brushes with meticulous wet-on-wet blending creating smooth surface with minimal to invisible brushstrokes. Multiple thin transparent glazes for skin translucency and luminosity. Microscopic precision: individual eyelash definition, iris color variation visible, lip contour individually studied. Reject idealized Raphaelesque beauty - embrace idiosyncratic, character-filled features reflecting particularity of real individuals.
4. **Drapery and Fabric Physics:** Mix smooth transparent glazes with opaque bodycolour (Chinese White mixed with colors). Each fabric fold individually studied and rendered following gravitational logic. Build sheen through multiple glazes for silk. Use opaque bodycolour for matte fabrics. Gold powder or gold shells for metallic details (armor, halos) emulating medieval manuscript illumination. Scratching-out technique: physically remove paint layers with tools to create highlights in watercolour and bodycolour work.
5. **19th-Century Pigment Innovation:** Enthusiastically adopt new brilliant pigments despite some fugitivity concerns. Reds: Madder Carmine, Vermilion, Extract of Vermilion. Yellows: Cadmium Yellow, Strontium Yellow, Chrome Yellow (fugitive but used for brilliance). Blues: Cobalt Blue, Antwerp Blue, French Ultramarine (synthetic replacement for expensive lapis). Greens: Oxide of Chromium (stable ready-mixed green). Metallics: Gold Powder, Gold Shells, Aluminium Cakes. These pigments on white ground create "fascinating quality of colour" with unprecedented brightness.

**Pose Anchors:**

- **Psychological Tension Externalized:** Poses convey internal emotional states through precise physical detail. Example: "The Awakening Conscience" method - lips drawn, nostrils retracted and expanded, cheek hard-set, hands clutched so tightly trinkets drive into flesh. Every gesture psychologically motivated by narrative, never theatrical or artificially graceful.
- **Languid Rossettian Intensity:** Female archetype displays relaxed posture with psychological weight, distant enigmatic gaze not engaging viewer, body language self-contained and mysteriously interior rather than animated or performative
- **Hand Articulation - Primary Psychological Vehicle:** Individual finger articulation visible, joint inflection precisely rendered, tension manifesting internal conflict. Hands never passive - always narratively and psychologically motivated.

**Scale Hierarchy Anchor:** Rossettian female proportions: lips 110-120% standard fullness, eyes large and heavy-lidded for psychological intensity, jawline strong and defined (not delicate classical ideal), chin pronounced (avoiding conventional beauty), neck 100-110% standard (substantial not fragile). Hair volume exceptional with individual strand definition in foreground. Male figures idealized but psychologically present when depicting medieval/literary archetypes.

**Material Authenticity Anchor:** Oil on canvas with white ground priming OR watercolour with bodycolour on Whatman paper (hot-pressed for detail). No digital smoothing or modern post-processing. Surface exhibits authentic medium characteristics: white ground luminosity, gum Arabic sheen, scratching-out highlight texture, invisible face brushwork contrasting with visible drapery strokes.

**Period Consistency Anchor:** All technical methods authentic to 1848-1882 Pre-Raphaelite practice including white ground innovation, 19th-century pigment adoption, en plein air outdoor painting for natural subjects, microscopic detail commitment throughout, rejection of academic dark ground and idealized beauty conventions.

**Canvas Adaptation Anchor:** Composition optimized for 3:4 portrait ratio with either tight figure framing (minimal negative space, commanding presence) OR dense multi-figure crowding (medieval manuscript influence, overlapping forms). Background as flat medieval pattern OR naturalistic detail - both microscopically rendered.

------

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**CRITICAL: Gender Expression Respect - Match wardrobe track to presented gender in source image or user specification.**

**Wardrobe Tracks - SAFETY CALIBRATED FOR NO NUDITY:**

**Adult Feminine:**

- **Medieval Literary:** Floor-length robes and gowns in jewel-tone silks and velvets - deep crimson (#DC143C), rich green (#2F4F2F), royal blue (#00008B). Complex drapery with individually studied folds. Modest necklines, varied sleeves (long, flowing, or fitted). Fabric behavior: silk shows high sheen through multiple glazes, velvet shows matte richness through bodycolour opacity.
- **Classical Draped:** Full-length chitons and peplos with complete coverage, proper Greek/Roman draping physics. White linen or jewel-tone silk. Shoulder pinning, waist belts creating compression points for authentic fold patterns.
- **Arthurian/Chaucerian:** Medieval gowns with fitted bodices, flowing skirts to floor, long sleeves, modest coverage. Rich fabric colors enhanced by white ground luminosity.

**Adult Masculine:**

- **Medieval/Arthurian:** Knee-to-floor length tunics in rich colors (burgundy, forest green, deep blue). Long cloaks, hoods. For knights: period-accurate armor with gold metallic details (gold powder/shells), surcoats, chainmail visible. Hose and boots.
- **Classical:** Full-length togas or himations draped over tunics. White linen or rich earth tones. Proper Roman/Greek draping.
- **Dante/Literary:** Poet/scholar robes, long tunics, rich fabrics appropriate to literary archetype.

**Youth (Any Gender):**

- Simple tunics or robes, knee to floor length depending on age
- Modest period-appropriate styling
- Rich colors but simpler construction

**Fabric Behavior Physics:**

- **Silk:** High sheen through transparent glazes, fluid complex folds, jewel-tone colors intensified by white ground
- **Velvet:** Matte rich surface through opaque bodycolour, heavy drape, deep saturated colors
- **Linen:** Crisp folds, matte to slight sheen, typically white or natural tones
- **Brocade/Embroidered:** Gold metallic threads using gold powder/shells, complex patterns individually detailed

**Accessory Caps:** Elaborate 3-4 items maximum - every element symbolic

- **Jewelry:** Necklaces, bracelets, rings, crowns - gold metallic rendering, gemstones in jewel tones, symbolic narrative function
- **Headwear:** Crowns, circlets, veils, medieval hoods - rich materials, gold details
- **Hair Ornament:** Flowers woven into hair (botanically accurate species), ribbons, jeweled pins
- **Footwear:** Period-appropriate or barefoot

**Color Palette Restrictions:** Jewel-tone dominance from white ground luminosity - delirious scarlet reds, pure vivid greens, deep intense blues, gold metallics. Reject muted or pastel tones. Embrace "fascinating quality of colour" from 19th-century pigments on white ground.

**Wardrobe Variation Required:** Change primary garment colors between iterations - cycle through crimson silk, emerald velvet, sapphire draping, gold brocade. Every element individually studied and symbolically meaningful.

**Props:** 1 hero + optional 1 micro (total ≤2) - all symbolic

**Hero Props (choose 1):**

```yaml
literary_symbolic:
  - book_manuscript (illuminated medieval, every letter/decoration detailed)
  - scroll (parchment texture, calligraphy precision)
  - letter (narrative significance, handwriting visible)
  - mirror (polished metal, symbolic self-reflection)

natural_symbolic:
  - single_flower (rose, lily, poppy - botanically accurate, symbolic meaning)
  - fruit (apple, pomegranate - narrative/symbolic function)
  - branch_with_flowers (individual petal/leaf detail)

musical_poetic:
  - lute (medieval construction detail, string precision)
  - harp (ornate decoration, functional accuracy)
  - bells (gold metallic rendering)

medieval_objects:
  - chalice (gold metallic, jeweled decoration)
  - sword (Arthurian context, blade detail)
  - crown (gold filigree, gemstone precision)
  - reliquary (ornate medieval craftsmanship)
```

**Micro Props (optional, choose 0-1):**

```yaml
scattered_symbolic:
  - flower_petals (individual botanical accuracy, 3-5 petals)
  - small_bird (symbolic dove, robin - feather detail)
  - butterfly (wing pattern precision)
  - ivy_tendril (leaf vein detail, natural growth)
```

**Coherence Filter:** All elements serve literary/symbolic narrative function derived from Dante, Keats, Tennyson, Chaucer, Bible, or Arthurian legend. If props don't advance symbolic story, default to clean scene with rich fabric and background focus.

------

### 6) Constraints

**Canvas Negatives (≥2):**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "square composition", "1:1 ratio", "equal width and height", "1632×640", "non-standard ratios"
- "nudity", "exposed skin", "revealing", "short hemlines", "low necklines"
- "idealized Raphaelesque beauty", "classical perfection", "conventional prettiness"
- "theatrical staging", "artificial poses", "pyramidal composition", "academic formula"
- "generalized forms", "simplified detail", "atmospheric fade", "loose suggestion"
- "dark ground", "brown underpainting", "muted colors", "desaturated palette"
- "digital smoothing", "HDR processing", "photographic realism", "modern post-processing"

**Canvas Positives (≥2):**

- "exactly 3:4 portrait ratio", "strict 3:4 aspect ratio compliance", "MUST be 3:4 ratio"
- "Chinese White priming", "white ground luminosity", "light reflection through transparent layers"
- "microscopic detail commitment", "painful application throughout", "every element individually studied"
- "truth to nature observation", "natural accidents included", "limb for limb precision"
- "Rossettian female archetype", "languid psychological intensity", "enigmatic interiority"
- "voluminous red-blonde auburn hair", "full lips 110-120%", "strong defined jawline"
- "delirious scarlet lilies palette", "jewel-tone brilliance", "pure vivid colors on white ground"
- "medieval literary narrative", "symbolic elements throughout", "Dante Keats Tennyson sources"
- "floor-length garments", "modest medieval classical coverage", "rich fabric complexity"
- "idiosyncratic features over conventional beauty", "psychological tension externalized"
- "flat medieval pattern OR naturalistic detail", "both approaches microscopically rendered"

**Vocabulary Warnings:**

- Avoid "pretty", "beautiful", "idealized" - use "enigmatic", "psychologically intense", "idiosyncratically compelling"
- Avoid "simple", "suggested", "atmospheric" - use "microscopically detailed", "individually studied", "painfully observed"
- Avoid "muted", "soft", "pastel" - use "jewel-tone", "delirious scarlet", "pure vivid"

------

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (3:4 Portrait Format):**

- Vertical emphasis with figure commanding frame
- Single figure: tight framing with minimal negative space, large dominant scale
- Multiple figures: dense crowding with overlapping forms, medieval manuscript compression
- Shallow picture plane - figures pressed forward toward viewer creating psychological immediacy
- Head placement: centered to slightly off-center for psychological intensity
- Negative space: minimal for single figures (10-20%), filled with symbolic/narrative elements

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective Regime:** Deliberate perspective scale planned to "conceive the thing as it really must have happened" (documented method for Ecce Ancilla Domini!). Measured believable space but reject theatrical academic staging. Intimate claustrophobic proximity creates psychological immediacy.

- **Figure:Ground Ratio:** Single figures dominate frame at 80-90% canvas occupation with minimal background. Multiple figures create dense crowded compositions with 90%+ figure occupation, shallow compressed space, medieval manuscript influence.

- **Background Treatment - Two Equally Valid Approaches:**

  **FLAT MEDIEVAL PATTERN (Anti-Academic Rejection of Depth):**

  - Tapestry-like repeating motifs against dark or gold ground
  - Individual flowers/stars/decorative elements microscopically detailed
  - Every element symbolic and narratively meaningful
  - Gold metallic details using gold powder/shells
  - Rejection of atmospheric perspective in favor of symbolic flattening

  **NATURALISTIC MICROSCOPIC DETAIL (Truth to Nature):**

  - Painted en plein air outdoors for authenticity
  - Botanical accuracy: species-specific leaf shapes, individual petal rendering
  - Natural "accidents" deliberately included: wind damage, rain effects, growth imperfections
  - No atmospheric fading or simplification - equal detail throughout depth
  - Every blade of grass individually observed and rendered
  - Water reflections, polished surface effects, complex natural color variations

- **Detail Hierarchy:** NO HIERARCHY - microscopic commitment throughout all spatial planes. Foreground, midground, background all receive individual study. "Painful" application of detail as moral/philosophical imperative, not decorative choice.

- **Lighting Logic:** Natural light supporting white ground luminosity. Soft to moderate intensity preserving jewel-tone color brilliance. Avoid harsh theatrical lighting or academic chiaroscuro. Light serves symbolic narrative and color intensity, not dramatic modeling.

**ENVIRONMENTAL SETTINGS:**

**Flat Symbolic Backgrounds:**

- Medieval tapestry patterns with repeating floral/stellar motifs
- Dark grounds (#1A1A1A to #2F4F2F) or gold metallics
- Individual symbolic elements: roses, lilies, stars, vines - each microscopically detailed
- Compression of space - anti-academic flattening
- Every element carries literary/symbolic meaning (no decorative filler)

**Naturalistic Detailed Settings:**

- **Medieval Interiors:** Gothic/Romanesque architecture with measured perspective, domestic objects as narrative clues (Van Eyck influence), symbolic furnishings, natural light from windows
- **Gardens/Forests:** Botanical accuracy throughout, individual leaf vein detail, natural growth patterns with imperfections, en plein air observation, wind/rain effects visible
- **Domestic Victorian:** Contemporary settings with same microscopic detail as historical subjects, social commentary through precise object rendering

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on canvas with white ground priming OR watercolour with bodycolour on Whatman paper
- **Frame/Band Anchor:** OMIT ENTIRELY - no decorative frames or bands (violates PRB anti-academic stance)
- **Production Context Anchor:** Pre-Raphaelite Brotherhood revolutionary technique (1848-1882) with white ground luminosity, microscopic detail commitment, rejection of theatrical staging
- **Ratio Enforcement Anchor:** Composition designed for 3:4 portrait ratio with tight figure dominance OR dense crowding, vertical emphasis, psychological immediacy through compressed space

------

### 8) Typography & Text Integration

**Binary:** CONDITIONAL - Rossetti integrated text with art through sonnets and inscriptions

**If Literary Context Requires Text Integration:**

- **Inscription Style:** Medieval manuscript lettering, gold metallic rendering, integrated into composition as symbolic element
- **Sonnet Fragments:** Short poetic phrases (≤6 words) in archaic script, positioned as narrative/symbolic enhancement
- **Copy Limits:** Maximum 1-2 short inscriptions if narratively essential
- **Font Approach:** Closest approximation to medieval manuscript hand-lettering; avoid modern typography
- **Historical Accuracy:** Text integration only when authentic to literary/symbolic narrative function

**Default for Most Compositions:** OMIT - Pure visual narrative without text, allowing symbolic elements and psychological intensity to carry meaning. Rossetti's practice of writing accompanying sonnets was separate from painted canvas.

**Museum Gallery Standard:** Clean canvas with no typography unless specific literary subject demands integrated inscription for symbolic completeness.

---



```yaml
---
# CODEX METADATA - PROMPT CONFIGURATION
codex_version: "1.0"
prompt_framework: "Universal Museum-Grade v4.3 (NanoBanana Edition)"
framework_date: "2025-01-09"
style_card_date: "2025-01-09"
artist: "John Everett Millais"
style_period: "Pre-Raphaelite Brotherhood Period (1848-1856)"

# RENDERER CONFIGURATION - NanoBanana (Gemini 2.5 Flash Image)
renderer:
  model: "gemini-2.5-flash-image"
  api_endpoint: "via Claude API proxy"
  supported_ratios: ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
  default_ratio: "4:5"
  token_cost_per_image: 1290
  output_modalities: ["Text+Image"]
  aspect_ratio_enforcement: "prompt_based_only"

# RATIO ADAPTATION SETTINGS
adaptation:
  strategy: "nearest_match_preserve_intent"
  strict_reframe: true
  preserve_orientation: true
  document_decision: true
  auto_apply: true

# FRAMEWORK METADATA
framework_version: "4.3"
base_version: "4.2 Enhanced"
artist_specific_version: "Millais Pre-Raphaelite Pictorial Ecosystem"

# EXECUTION PARAMETERS
validation_required: true
auto_regenerate_on_fail: true
silent_validation: true
logging_level: "standard"

# SAFETY & COMPLIANCE
ip_protection: true
copyright_safeguards: true
safety_profile: ["no_nudity", "modest_coverage", "naturalistic_realism", "floor_length_minimum"]
material_authenticity: true
period_production_authenticity: true
composition_boundaries: "no_external_frames"

# PROMPT ASSEMBLY
sections_required: [1, 2, 3, 4, 5, 6, 7, 8]
include_validation_checklist: false
include_historical_context: true
---
```

# John Everett Millais - Pre-Raphaelite Brotherhood Framework

**Timeframe:** 1848-1856 (Early Pre-Raphaelite Period)
 **Historical Context:** John Everett Millais was a co-founder of the Pre-Raphaelite Brotherhood (established 1847), revolutionizing British art through rejection of academic conventions. His signature innovation: "pictorial ecosystems"—self-contained hyper-realistic worlds where environment receives 80-90% detail intensity of foreground (vs. academic 20-30%), creating uniform focus across depth planes. Figures and botanical elements achieve near-equal precision throughout the canvas. Trained at Royal Academy Schools, he consciously rebelled against idealized beauty, theatrical staging, and atmospheric background blur. Technical analysis reveals: fine closely-woven canvas (25 threads/cm with visible slubs), double priming (calcium carbonate base + lead white with red ochre tint creating warm luminous ground), thinly applied paint with selective impasto highlights, 19th-century pigment innovations (chrome yellow, cadmium yellow, emerald green, cobalt blue), chemical instabilities causing transparency increases over time through saponification. Poses narrative-driven with physical tension externalizing psychological states.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **NanoBanana Ratio Enforcement Protocol:** Combat resistance through explicit ratio declaration in multiple locations, repetitive reinforcement, negative constraints, compositional anchors.
- **Style over likeness:** Likeness via naturalistic anatomy (100-105% standard proportions) and narrative-driven poses, not idealized beauty.
- **Technical Measurement Authority:** Quantitative specifications ("80-90% background detail intensity", "25 threads/cm canvas", "uniform saturation across depth") override descriptive language.
- **Process-Over-Result Priority:** Uniform detail distribution and botanical accuracy supersede visual shortcuts.
- **Face-Treatment Flag:** `oil-fat-over-lean` with double-primed warm ground
- **Pose Flags:** `narrative-tension`, `naturalistic-strain`, `psychological-externalization`
- **Canvas Control Flag:** `strict-reframe` or `adaptive-extend`
- **Detail Philosophy:** CRITICAL - "Pictorial ecosystem" = 80-90% background detail vs foreground, rejecting academic 20-30% diminishment
- **Material Physics Authority:** Oil on fine canvas (25 threads/cm), double priming (calcium carbonate + lead white/red ochre), thin paint with selective impasto
- **Quantifiers authoritative:** Numeric anchors are targets
- **Text policy:** Only render text if Section 8 authorizes
- **Safety/IP:** No nudity; no logos/watermarks/signatures
- **Age & wardrobe guardrail:** All figures fully clothed in period-appropriate naturalistic garments; floor-length minimum
- **Gender expression:** **CRITICAL - Respect presented gender.** Match wardrobe to presented gender with naturalistic historical accuracy.
- **Material authenticity:** No digital filters; authentic oil surface with warm ground showing through thin layers
- **Composition boundaries:** No frames outside canvas (arched tops acceptable as period format)
- **Failure Mode Flags:** Avoid blurred backgrounds, atmospheric fade, generalized foliage, idealized beauty, depth-of-field blur
- **Silent validation:** Apply checklist, regenerate silently if fail
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add content beyond Section 8.

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **4:5 ratio** - ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **4:5**. This is a hard requirement.
- Redraw in **John Everett Millais Pre-Raphaelite Brotherhood pictorial ecosystem style** for **museum gallery oil painting on fine canvas with double warm ground**.
- Identity via naturalistic anatomy (100-105% standard proportions), narrative-driven poses with physical tension, and environmental integration.
- **IP Safeguard Declaration:** Create original narrative scenes from public domain literature (Shakespeare, Tennyson, biblical subjects, medieval legends).
- **Face-Treatment Flag:** `oil-fat-over-lean` with double priming (calcium carbonate + lead white/red ochre warm ground)
- **Pose Flag:** `narrative-tension` or `naturalistic-strain`
- **Canvas Control Flag:** `strict-reframe`
- **Safety Mandate:** All figures fully clothed in historically accurate period garments with floor-length coverage minimum.
- **Style Dominance:** Pictorial ecosystem with 80-90% background detail intensity (vs academic 20-30%), uniform saturation across depth planes rejecting atmospheric fade, botanical accuracy throughout all spatial layers, naturalistic anatomy 100-105% standard proportions rejecting idealization, narrative-driven poses with visible physical tension/strain externalizing psychological states, fine canvas (25 threads/cm) with double warm ground (calcium carbonate + lead white/red ochre), thinly applied paint with selective impasto highlights, 19th-century pigment palette creating rich saturated colors maintained throughout depth. **CRITICAL: Respect presented gender - masculine/feminine subjects receive appropriate period wardrobe with naturalistic historical accuracy.**
- **Mode Selector:** Gallery
- **Final Ratio Confirmation:** Output must be exactly **4:5 ratio**, no exceptions.

------

### 2) Canvas Strategy & Spatial Logic

**RATIO SELECTION:** `4:5` (portrait - 896×1152) - Native NanoBanana support, no adaptation required

**ALTERNATIVE RATIOS FOR ENVIRONMENTAL DOMINANCE:**

- `3:2` (landscape - 1248×832) for Ophelia-style environmental immersion
- `16:9` (landscape - 1344×768) for multi-figure narrative scenes

**CANVAS RECOMPOSITION STRATEGY:**

- **Ratio Status:** Native 4:5 portrait format (or 3:2 landscape for environmental dominance)
- **Reframing Method:** Integrate figure into environment as embedded participant, not imposed subject
- **Spatial Allocation:** Portrait mode: Figure 60-70%, environment 30-40% (both highly detailed). Landscape mode: Figure 30-40%, environment 60-70% (pictorial ecosystem balance).
- **Background Treatment:** Botanical accuracy with 80-90% detail intensity of foreground - individual leaf rendering, species-specific flora, microscopic observation throughout depth
- **Format Justification:** 4:5 portrait serves tight figure-environment integration with both elements detailed. 3:2 landscape serves environmental immersion where nature equals narrative importance (Ophelia model).

------

### 3) Artistic Style & Context

**Influences:** Rebellion against post-Raphaelesque academic idealization; Early Italian and Flemish precision; Botanical illustration scientific accuracy; Literary narrative (Shakespeare, Tennyson, medieval romance); Working-class social realism (Christ in carpenter shop controversy)

**Medium/Production Method:** Oil on fine closely-woven canvas (25 threads/cm with prominent slubs - texture subtly visible through thin paint). **DOUBLE PRIMING TECHNIQUE:** First layer calcium carbonate with some lead white (thick), second layer lead white tinted with red ochre creating warm luminous ground. Thinly applied oil paint (linseed oil, P/S ratio ~1) allowing ground luminosity to influence colors. Purchased Roberson's medium (oil + mastic/copal resins) altering handling properties. Selective impasto white paint for bright textured highlights (jewels, light peaks). Transparent wash glazing for depth and candlelit effects. Pencil grid transfer from preparatory drawing (graphite lines sometimes visible where paint failed to wet). **Chemical authenticity:** Saponification of lead white/zinc white with fatty acids creates transparency increase and darkening over time - simulate aged surface with subtle underlying layer visibility.

**Thematic Purpose:** Revolutionary "truth to nature" through microscopic uniform observation rejecting academic hierarchy. Literary and historical narratives rendered with uncompromising realism causing contemporary controversy (working-class Holy Family). Environmental elements as active narrative participants, not passive backdrops. Psychological states externalized through physically strained poses.

**Hallmark Motifs with Quantified Specifications:**

1. **Pictorial Ecosystem Balance:** Environment receives 80-90% detail intensity of foreground (measured in Ophelia: distant trees show individual leaf masses vs academic generalized blur). Figure-environment integration: landscape mode 30-40% figure / 60-70% environment, both microscopically detailed.
2. **Uniform Detail Across Depth:** Background botanical accuracy equals foreground precision - individual species identification possible throughout spatial planes. Reject atmospheric desaturation, depth-of-field blur, generalized masses. Maintain color saturation richness from foreground through background.
3. **Naturalistic Anatomical Proportions:** 100-105% standard human proportions rejecting classical idealization. Face: eyes 100-105%, nose 100%, lips 100-110%, natural variation preserved. Body: neck 100-105%, all other proportions 100% standard. Idiosyncratic character over uniform beauty.
4. **Narrative-Driven Physical Tension:** Poses show visible strain externalizing psychological states - Huguenot embrace with diagonal instability and conflicting head directions, Mariana backward arch 30-40° creating physical discomfort = yearning, Ophelia horizontal surrender with no tension = acceptance.
5. **19th-Century Pigment Richness:** Chrome yellow, cadmium yellow (bright but fugitive), emerald green, cobalt blue, ultramarine blue, vermilion, red lakes creating saturated colors maintained uniformly across depth. Earth tones (red ochre, umber, yellow ochre) for naturalistic elements.

**Period Framing:** Pre-Raphaelite Brotherhood founding (1847-1848) through Millais's stylistic divergence (mid-1850s), Royal Academy training consciously rejected, outdoor observation for botanical accuracy, studio lay figures for complex pose holding, double warm ground innovation, 19th-century industrial pigment adoption

**Tone Tag:** Uncompromising naturalistic, botanically precise, narratively intense, environmentally integrated, anti-academic

------

### 4) Technical Execution

**Painting Technique Anchors:**

1. **Double Warm Ground Foundation:** Prime fine canvas (25 threads/cm with visible slubs) with first thick layer calcium carbonate + some lead white, then second thin layer lead white tinted with red ochre. This warm luminous ground influences all subsequent color layers, reflecting light back through thinly applied paint creating characteristic glow. Canvas texture subtly visible where paint thinnest.
2. **Uniform Detail Distribution - Pictorial Ecosystem Mandate:** Apply 80-90% background detail intensity compared to foreground (vs academic 20-30% diminishment). Botanical accuracy throughout all depth planes: distant trees show individual leaf masses and branch structures, midground vegetation receives species-specific rendering, foreground elements get microscopic petal/blade precision. **CRITICAL:** Constrain AI attention mechanism to reject conventional depth-of-field - apply near-uniform detail resolution across entire composition avoiding blur at distance.
3. **Thin Paint Application with Selective Impasto:** Apply oil paint in thin layers allowing warm ground to glow through, creating luminosity and color richness. Reserve impasto (thick textured application) for selective bright highlights: jewel facets, light peaks on metallic surfaces, peak fabric folds. Use transparent wash glazing (thinned paint) for depth effects and candlelit atmospheres. Paint thickness: primarily 1-2mm, impasto highlights 3-5mm maximum.
4. **Botanical and Material Precision:** Render every natural element with species-specific accuracy - identifiable flower types (roses, poppies, forget-me-nots, willow, reeds), leaf venation patterns visible, individual grass blades distinguishable. Fabric and material surfaces show authentic behavior: velvet matte richness, silk sheen, embroidery pattern detail, metallic armor reflections. Study each element individually before rendering.
5. **Chemical Aging Authenticity (Optional Simulation):** Simulate saponification effects where lead white/zinc white reacts with oil binder fatty acids: subtle transparency increase in white-rich areas revealing warm ground beneath, slight darkening of hue, underlying pencil grid occasionally visible where paint didn't wet graphite lines. This creates aged Pre-Raphaelite surface character.

**Pose Anchors:**

- **Narrative Tension Externalized:** Physical strain = psychological state. Huguenot model: tense embrace with diagonal body angles creating instability, woman's hands on man's chest showing resistance, heads tilted in conflicting directions = visual separation within physical contact
- **Naturalistic Strain:** Mariana model: backward spinal arch 30-40° reaching toward window, physically uncomfortable position = emotional yearning and frustration, sustained pose showing endurance
- **Surrender/Acceptance:** Ophelia model: horizontal floating with complete body relaxation, no muscular tension, open hands releasing not grasping = psychological resignation

**Scale Hierarchy Anchor:** Naturalistic proportions 100-105% standard - neck subtle elongation in some figures (100-105%), all other anatomy 100% accurate. Hands 100-105% with detailed finger joint articulation. Reject idealized elongation, classical contrapposto, or uniform stylization. Preserve individual human variation and character-specific features.

**Material Authenticity Anchor:** Fine canvas weave (25 threads/cm) texture subtly visible, double warm ground (red ochre tint) showing through thin paint, oil binding medium authentic handling, selective impasto highlights, transparent glazing, no digital smoothing or modern post-processing.

**Period Consistency Anchor:** All methods authentic to 1848-1856 Pre-Raphaelite practice: double priming innovation, thin oil application, 19th-century pigment palette, outdoor botanical observation, narrative literary sources, rejection of academic idealization and atmospheric blur.

**Canvas Adaptation Anchor:** Composition optimized for declared ratio with figure-environment balance: portrait 4:5 for 60-70% figure integration, landscape 3:2 for 30-40% figure environmental immersion. Both formats maintain 80-90% background detail intensity.

------

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**CRITICAL: Gender Expression Respect - Match wardrobe track to presented gender with naturalistic historical accuracy.**

**Wardrobe Tracks - SAFETY CALIBRATED FOR NO NUDITY:**

**Adult Feminine:**

- **Medieval/Elizabethan:** Floor-length gowns with fitted bodices, flowing skirts, long sleeves or puffed sleeves. Rich velvets (#1A1A1A, #2C2C2C), silk embroidery patterns individually rendered. White collars/cuffs (#F5F5DC). Period-accurate construction with authentic drape.
- **Victorian/Contemporary (1850s):** Floor-length day dresses, modest necklines, long sleeves, rich fabric colors (deep blues #4B0082, burgundy #8B3A3A, forest green #2F4F2F). Embroidery and pattern detail individually studied.
- **Classical/Romantic:** Flowing robes to floor, draped fabric with authentic gravitational physics, muted earth tones or jewel tones, modest coverage throughout.

**Adult Masculine:**

- **Medieval/Renaissance:** Knee-to-floor tunics, hose, boots, rich velvets and brocades. For nobility/knights: period-accurate armor with detailed metallic rendering, surcoats, cloaks.
- **Victorian (1850s):** Frock coats, waistcoats, trousers, period-accurate tailoring. Working class: simple shirts, work clothes with authentic wear/texture.
- **Classical/Historical:** Robes, tunics appropriate to narrative period, authentic construction and draping.

**Youth (Any Gender):**

- Period-appropriate simple garments, knee-to-floor length
- Naturalistic historical accuracy
- Modest coverage appropriate to age and narrative

**Fabric Behavior Physics:**

- **Velvet:** Matte rich surface, heavy drape, deep saturated colors (#1A1A1A blacks, #4B0082 purples)
- **Silk:** High sheen through glazing, fluid complex folds, embroidery pattern detail individually rendered
- **Linen:** Crisp folds, matte to slight sheen, white/cream tones (#F5F5DC)
- **Wool:** Heavy natural drape, earth tone colors, authentic period weave texture

**Accessory Caps:** Minimal 0-2 items - naturalistic integration

- **Jewelry:** Simple period-appropriate pieces with impasto highlight rendering
- **Headwear:** Period caps, crowns, wreaths - historically accurate
- **Footwear:** Often barefoot (100% natural proportions), or period shoes/sandals

**Color Palette:** Earth tones + rich saturated jewel tones maintained across depth - greens (#2D5016, #4A7C2F, #6B9B4C), blues (#1E4D6B, #4682B4), reds (#8B3A3A, vermilion), yellows (chrome/cadmium), blacks (#1A1A1A). **CRITICAL:** Maintain color saturation uniformly - no atmospheric desaturation at distance.

**Wardrobe Variation Required:** Cycle through period-appropriate colors and styles avoiding identical repetition.

**Props:** 1 hero + optional 1 micro (total ≤2) - narrative function

**Hero Props (choose 1):**

```yaml
botanical_natural:
  - individual_flower_species (rose, poppy, lily, forget-me-not - botanically accurate)
  - flowering_branch (species-specific leaf/petal detail)
  - laurel_wreath (individual leaf rendering)
  
narrative_objects:
  - book_manuscript (period binding, page texture)
  - mirror (reflective surface with impasto highlights)
  - sword_dagger (metallic detail, period-accurate)
  - chalice_vessel (metallic or ceramic with surface precision)
  
environmental_integration:
  - lantern_candlelight (glazed glow effect)
  - musical_instrument (lute, harp - construction detail)
```

**Micro Props (optional, choose 0-1):**

```yaml
scattered_elements:
  - flower_petals (3-5 individual botanically accurate petals)
  - small_fauna (bird, butterfly - detailed rendering)
  - ivy_tendril (leaf venation visible)
```

**Coherence Filter:** All elements serve narrative literary function (Shakespeare, Tennyson, biblical, medieval legend). Botanical accuracy throughout. If props don't advance story, default to environmental botanical detail focus.

------

### 6) Constraints

**Canvas Negatives (≥2):**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "square composition", "1:1 ratio", "1632×640", "arbitrary dimensions"
- "nudity", "exposed skin", "revealing", "short hemlines"
- "blurred background", "atmospheric fade", "depth-of-field blur", "soft focus distance", "hazy distance"
- "generalized foliage", "simplified masses", "vague tree shapes", "indistinct distant elements"
- "pale atmospheric blue", "misty background", "faded horizon", "washed out distance"
- "desaturated background", "muted distant colors", "atmospheric perspective color shift", "color fade with distance"
- "20-30% background detail", "diminished distant elements", "reduced far detail", "background blur"
- "idealized beauty", "classical perfection", "elongated proportions", "stylized anatomy"
- "theatrical staging", "contrapposto", "academic poses", "pyramidal composition"

**Canvas Positives (≥2):**

- "exactly 4:5 portrait ratio", "strict 4:5 aspect ratio compliance", "MUST be 4:5 ratio"
- "80-90% background detail intensity", "uniform detail across depth planes", "pictorial ecosystem"
- "botanical accuracy throughout all spatial layers", "species-specific rendering background to foreground"
- "individual leaf masses in distant trees", "microscopic petal detail", "grass blade precision"
- "uniform color saturation across depth", "no atmospheric desaturation", "rich colors maintained throughout"
- "naturalistic anatomy 100-105% proportions", "reject idealization", "individual human variation"
- "narrative-driven poses with physical tension", "visible strain externalizing psychology"
- "double warm ground (calcium carbonate + lead white/red ochre tint)", "thin paint with selective impasto"
- "fine canvas 25 threads/cm", "warm ground showing through thin layers"
- "floor-length period garments", "historically accurate modest coverage"
- "literary narrative sources", "Shakespeare Tennyson biblical medieval"

**Vocabulary Warnings:**

- Avoid "blurred", "soft focus", "atmospheric", "generalized" - use "uniformly detailed", "botanically precise", "individually rendered"
- Avoid "idealized", "perfect", "classical beauty" - use "naturalistic", "character-specific", "idiosyncratic"
- Avoid "background fade", "diminished detail" - use "pictorial ecosystem", "uniform intensity", "equal precision"

------

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

**For 4:5 Portrait Format:**

- Vertical emphasis with figure 60-70% canvas occupation
- Environment 30-40% but receives 80-90% detail intensity of figure
- Integration: figure embedded in botanical context, not imposed on backdrop
- Head placement upper third, environmental detail surrounds and interacts

**For 3:2 Landscape Format (Environmental Dominance):**

- Horizontal emphasis with figure 30-40% canvas occupation
- Environment 60-70% as equal narrative participant (Ophelia model)
- Integration: figure immersed in detailed natural world
- Botanical accuracy throughout depth - distant trees individually rendered

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective Regime:** Realistic linear perspective with measured spatial recession. Environment tangible and believable but maintains detail throughout depth. Reject academic atmospheric blur - sustain botanical precision foreground to background.
- **Figure:Ground Relationship - Pictorial Ecosystem:** Portrait mode: 60-70% figure, 30-40% environment (both highly detailed). Landscape mode: 30-40% figure, 60-70% environment (figure embedded as ecosystem participant). **CRITICAL:** Environment not backdrop - active narrative element with 80-90% detail intensity.
- **Uniform Detail Distribution Mandate:** Foreground: microscopic precision (individual flower petals, grass blades, fabric embroidery stitches). Midground: maintained precision (species-specific foliage, submerged vegetation structure). Background: 80-90% detail intensity (distant tree leaf masses visible, branch patterns distinguishable, far bank botanical elements rendered). **Reject depth-of-field blur, atmospheric generalization, simplified masses.**
- **Color Saturation Uniformity:** Maintain rich saturated colors throughout depth planes. Greens (#2D5016 to #8FBC5E), blues (#1E4D6B to #4682B4), florals (whites #E8E8E8, purples #C8B4D6, yellows #B8860B) - all colors sustain intensity from foreground through background. **Reject atmospheric desaturation.**
- **Lighting Logic:** Natural outdoor light or candlelit interior creating authentic shadows and highlights. Light serves botanical detail revelation, not dramatic chiaroscuro obscuring. Selective impasto highlights on light peaks (water reflections, metallic surfaces, peak fabric folds).

**ENVIRONMENTAL SETTINGS:**

**Natural Outdoor (Preferred for Pictorial Ecosystem):**

- **Riverbank/Waterscape:** Individual water plant species (reeds, irises, water lilies with leaf structure detail), submerged vegetation visible, bank flora botanically accurate, distant trees show leaf mass patterns, floating flowers individually rendered (Ophelia model)
- **Forest/Garden:** Individual tree species identifiable, leaf venation visible on foreground elements, branch structures throughout depth, botanical ground cover with species accuracy, ivy showing individual leaf shapes
- **Meadow/Field:** Grass types distinguishable, wildflower species accurate (poppies, daisies, forget-me-nots), individual blade rendering foreground, maintained detail to horizon

**Interior Settings:**

- **Medieval/Gothic:** Stone texture detail, stained glass with pattern precision, wooden furnishings showing grain/construction, candlelight glazed glow, architectural elements measured perspective
- **Victorian Domestic:** Pattern wallpaper detail, furnishing fabric rendering, floor tile/wood precision, window views showing outdoor botanical detail beyond
- **Workshop/Utilitarian:** Working-class realism with tool detail, material texture (wood shavings, fabric scraps), authentic period construction

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on fine canvas (25 threads/cm) with double warm ground (calcium carbonate + lead white/red ochre)
- **Frame/Band Anchor:** OMIT decorative frames OR use period-authentic arched top format (medieval/religious reference)
- **Production Context Anchor:** Pre-Raphaelite 1848-1856 technique with uniform detail distribution, botanical accuracy, double priming, thin paint/selective impasto
- **Ratio Enforcement Anchor:** Composition designed for declared ratio with figure-environment balance optimized (portrait 60-70% figure integration, landscape 30-40% figure ecosystem immersion), both formats maintaining 80-90% background detail intensity

------

### 8) Typography & Text Integration

**Binary:** OMIT

John Everett Millais's Pre-Raphaelite paintings contained no integrated typography. All narrative content communicated through visual precision, botanical symbolism, and literary reference. Museum gallery presentation requires clean canvas.

**Historical Accuracy:** Period exhibition practice: paintings in ornate frames with separate wall plaques for titles - never text on painted surface.

------

```yaml
---
codex_version: 1.0
prompt_framework: Universal Museum-Grade v4.3 (NanoBanana Edition)
framework_date: 2025-01-09
artist_framework: William Holman Hunt - Pre-Raphaelite Brotherhood
analysis_date: 2025-10-04
renderer:
model: gemini-2.5-flash-image
api_endpoint: via Claude API proxy
supported_ratios:
- 1:1
- 2:3
- 3:2
- 3:4
- 4:3
- 4:5
- 5:4
- 9:16
- 16:9
- 21:9
default_ratio: 4:3
aspect_ratio_enforcement: prompt_based_only
framework_metadata:
style_period: 1848-1870s
movement: Pre-Raphaelite Brotherhood
primary_medium: Oil on Canvas/Linen
technique_signature: Wet-White-Ground Application
genre_support:
religious_narrative: true
domestic_moral_scenes: true
pastoral_romantic: true
portrait: true
multi_genre_framework: true
safety_compliance:
safety_profile:
- no_nudity
- extended_coverage_religious
- victorian_modesty
- anatomical_intensity_preserved
ip_protection: true
period_authenticity: 1848-1870s
composition_constraints:
max_subjects: 3
subject_interaction: allowed
crowd_scenes: true
animals_allowed: true
animal_types:
- sheep
- goats
- donkeys
- cattle
max_animals: 12
text_allowed: false
primary_ratios:
- 4:3
- 5:4
- 3:4
---
```

# Holman Hunt - Pre-Raphaelite Brotherhood Framework (1848-1870s)

**Timeframe:** 1848-1870s (Pre-Raphaelite Brotherhood founding through major exhibition period)

**Historical Context:** Founding member of the Pre-Raphaelite Brotherhood (P.R.B., 1848), revolutionary movement rejecting Royal Academy conventions and Raphaelesque idealization in favor of microscopic naturalism, brilliant color, and moral/religious symbolism. Hunt was characterized as "the most intractable of the Pre-Raphaelites" for his lifelong commitment to the movement's original principles of "truth to nature" and anti-academic rebellion.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Combat resistance through explicit ratio declaration in multiple locations (Section 1, 2, 6), repetitive reinforcement, negative constraints against unwanted ratios, and ratio-specific compositional anchors.
- **Style over likeness:** Likeness via silhouette/gesture/expression, never photographic reproduction.
- **Technical Measurement Authority:** Quantitative specifications override descriptive language.
- **Process-Over-Result Priority:** Material application methods (wet-white-ground technique, copal medium, transparent glazing) supersede visual appearance descriptions.
- **Anti-Conventional Bias:** Authority to reject classical idealization and academic beauty standards when historically accurate to Pre-Raphaelite anti-establishment rebellion.
- **Face-Treatment Flag (choose one):** `oil-fat-over-lean`, `glazing-layers-buildup`, `wet-white-ground-luminous` (Hunt-specific)
- **Pose Flags (choose one):** `psychological-tension`, `devotional-prayer`, `contrapposto`, `candid-motion`, `frontal-rigid`
- **Canvas Control Flags:** `strict-reframe` (primary), `adaptive-extend` (pastoral/landscape only)
- **Material Physics Authority:** Wet-white-ground technique, copal varnish medium, transparent color glazing specifications override aesthetic preferences.
- **Scale-Dependent Technique:** Microscopic detail precision regardless of viewing distance - resist conventional detail hierarchy.
- **Cultural Production Authenticity:** Middle Eastern travel studies and reconstructed Palestinian sets for religious subjects; English countryside plein-air studies for pastoral subjects; period-accurate Victorian interiors for domestic scenes.
- **Quantifiers authoritative:** Numeric anchors are targets.
- **Text policy:** Section 8 prohibits text integration.
- **Safety/IP:** No nudity; extended coverage for religious figures; Victorian modesty standards; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral; religious figures = waist-minimum coverage with anatomical intensity maintained through visible torso/arm musculature.
- **Gender expression:** Respect presented.
- **Material authenticity:** Authentic oil painting surface characteristics with period-appropriate aging artifacts (copal yellowing, vermilion darkening, minimal cracking); no digital filters or modern post-processing.
- **Period Production Authenticity:** 1840s-1870s oil painting techniques with documented material limitations (adulterated pigments, copal varnish deterioration, handkerchief linen emergency supports).
- **Composition boundaries:** No frames outside canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid Raphaelesque idealization, academic generalization, impressionistic brushwork, dark murky atmospheric effects, simplified compositions, HDR smoothing.
- **Silent validation:** Apply checklist, regenerate silently if fail.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary, explanations, historical context, or any content beyond Section 8.

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

**MULTI-GENRE FRAMEWORK - SELECT ONE:**

**[RELIGIOUS NARRATIVE MODE]**

- **CANVAS OVERRIDE:** Recompose to exactly **4:3 landscape ratio** - ignore source dimensions completely.
- **RATIO ENFORCEMENT:** Generate image with EXACT aspect ratio of **4:3**. This is a hard requirement.
- Redraw in **Pre-Raphaelite Brotherhood style (William Holman Hunt, 1848-1870s)** for **religious narrative painting** with archaeological Middle Eastern authenticity.
- Identity via individual model features, psychological complexity, anti-idealized realism.
- **IP Safeguard Declaration:** Original biblical scene composition avoiding copyrighted interpretations; historically authentic Palestinian settings and costumes.
- **Face-Treatment Flag:** `wet-white-ground-luminous` with microscopic anatomical detail (visible pores, facial hair, individual eyelash rendering).
- **Pose Flag:** `devotional-prayer` or `psychological-tension` (ambiguous emotional states: surrender/ecstasy/spiritual crisis).
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Pre-Raphaelite Brotherhood anti-academic realism overrides all classical beauty conventions - individual model features preserved, hyper-muscular anatomy with visible sinew/veins, "truth to nature" mandate, rejection of Raphaelesque idealization.
- **Psychological Expression Mandate:** Expression must convey 2-3 simultaneous emotional states readable in face (devotion + doubt, confidence + vulnerability, solemnity + ecstasy). Avoid simple single emotions (happy, sad, neutral, pleasant). Gaze intensity: direct viewer engagement with psychological weight, not vacant pleasantness. Facial muscle micro-tensions: slight asymmetry in eyebrow position, mouth corner tension differences, eye focus intensity variations. NOT commercial portrait placidity or conventional beauty smile. REQUIRED: intellectual engagement, moral seriousness, spiritual intensity readable in expression.
- **Mode:** Religious narrative gallery painting.
- **Final Ratio Confirmation:** Output must be exactly **4:3 landscape ratio**, no exceptions.

**[DOMESTIC MORAL NARRATIVE MODE]**

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 portrait ratio** - ignore source dimensions completely.
- **RATIO ENFORCEMENT:** Generate image with EXACT aspect ratio of **3:4**. This is a hard requirement.
- Redraw in **Pre-Raphaelite Brotherhood style (William Holman Hunt, 1848-1870s)** for **domestic moral narrative painting** with Victorian interior authenticity.
- Identity via psychological complexity, gesture, ambiguous emotional crisis (awakening/realization/moral tension).
- **IP Safeguard Declaration:** Original Victorian domestic scene avoiding copyrighted narrative elements; period-accurate interior decoration and costume.
- **Face-Treatment Flag:** `wet-white-ground-luminous` with microscopic detail rendering.
- **Pose Flag:** `psychological-tension` (figure caught in moment of moral awakening or emotional crisis).
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Pre-Raphaelite obsessive detail density, ornamental Victorian interior maximalism, mirror/window secondary narrative devices, symbolic object loading.
- **Psychological Expression Mandate:** Expression must convey 2-3 simultaneous emotional states (awakening + confusion, moral realization + fear, intimacy + reservation). Facial muscle micro-tensions showing conflicted internal state. NOT simple pleasant expression or vacant neutrality. REQUIRED: moment of psychological crisis or moral awakening readable in facial tension patterns.
- **Mode:** Domestic narrative gallery painting.
- **Final Ratio Confirmation:** Output must be exactly **3:4 portrait ratio**, no exceptions.

**[PASTORAL ROMANTIC MODE]**

- **CANVAS OVERRIDE:** Recompose to exactly **5:4 landscape ratio** - ignore source dimensions completely.
- **RATIO ENFORCEMENT:** Generate image with EXACT aspect ratio of **5:4**. This is a hard requirement.
- Redraw in **Pre-Raphaelite Brotherhood style (William Holman Hunt, 1848-1870s)** for **pastoral romantic painting** with English countryside botanical precision.
- Identity via naturalistic working-class features, chaste intimacy, peasant/shepherd authenticity.
- **IP Safeguard Declaration:** Original pastoral composition with species-specific botanical rendering; historically accurate English agricultural context.
- **Face-Treatment Flag:** `wet-white-ground-luminous` with sun-weathered skin texture.
- **Pose Flag:** `candid-motion` or `contrapposto` (relaxed reclining intimacy, harvest labor postures).
- **Canvas Control Flag:** `adaptive-extend` (extend natural landscape elements)
- **Style Dominance:** Pre-Raphaelite botanical fidelity (leaf-by-leaf rendering), sheep flock presence, microscopic wildflower detail, hyper-natural color saturation.
- **Psychological Expression Mandate:** Expression conveys contentment + weariness, intimacy + reservation, or pastoral simplicity without vacant pleasantness. Working-class fatigue or agricultural labor evidence in facial features. NOT idealized happiness or commercial beauty. REQUIRED: authentic working-class character readable in expression and skin weathering.
- **Mode:** Pastoral landscape gallery painting.
- **Final Ratio Confirmation:** Output must be exactly **5:4 landscape ratio**, no exceptions.

**[PORTRAIT MODE]**

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 portrait ratio** - ignore source dimensions completely.
- **RATIO ENFORCEMENT:** Generate image with EXACT aspect ratio of **3:4**. This is a hard requirement.
- Redraw in **Pre-Raphaelite Brotherhood style (William Holman Hunt, 1848-1870s)** for **formal portrait** with psychological intensity.
- Identity via direct confrontational gaze, microscopic facial detail, restrained ambiguous expression.
- **IP Safeguard Declaration:** Original character design with period-accurate formal attire and minimal symbolic props.
- **Face-Treatment Flag:** `wet-white-ground-luminous` with maximum pore/hair/eyelash precision.
- **Pose Flag:** `frontal-rigid` (direct viewer engagement, three-quarter turn maximum).
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Pre-Raphaelite hyper-detail facial rendering, dark atmospheric backgrounds, rich fabric texture microscopic precision, specific side-lighting technique described in Section 7.
- **Psychological Expression Mandate:** Expression conveys intellectual seriousness + restrained emotion, confidence + vulnerability, or formal composure + underlying complexity. Direct confrontational gaze with psychological weight. Facial asymmetries and micro-tensions present. NOT commercial portrait pleasantness or vacant neutrality. REQUIRED: intellectual presence and moral seriousness readable in direct gaze and facial character.
- **Mode:** Portrait gallery painting.
- **Final Ratio Confirmation:** Output must be exactly **3:4 portrait ratio**, no exceptions.

------

### 2) Canvas Strategy & Spatial Logic

**NANOBANANA NATIVE RATIOS (Hunt-Appropriate Selections):**

- ✅ **4:3 landscape** (religious narratives, pastoral scenes)
- ✅ **5:4 landscape** (pastoral romantic, horizontal compositions)
- ✅ **3:4 portrait** (domestic narratives, portraits, single-figure devotional)
- ✅ **4:5 portrait** (alternative portrait format)

**MANDATORY RATIO SELECTION:** Choose one exact ratio from above based on selected genre mode.

**CANVAS RECOMPOSITION STRATEGY:**

**[RELIGIOUS NARRATIVE - 4:3 Landscape]**

- **Ratio Status:** Native 4:3 landscape
- **Reframing Method:** Recompose entirely for horizontal narrative flow with multiple figure arrangement
- **Spatial Allocation:** Central figures occupy canvas width with spatial compression creating shallow relief-like arrangement
- **Background Treatment:** Extend Palestinian architectural elements (stone walls, carved woodwork, textile hangings) or Dead Sea landscape with sharp distant detail
- **Format Justification:** 4:3 landscape accommodates crowded religious scenes with multiple figures and complex symbolic environment

**[DOMESTIC MORAL NARRATIVE - 3:4 Portrait]**

- **Ratio Status:** Native 3:4 portrait
- **Reframing Method:** Recompose for vertical interior compression with psychological claustrophobia
- **Spatial Allocation:** Figures occupy height with tight interior framing and ornamental density
- **Background Treatment:** Extend Victorian interior surfaces (wallpaper, carved furniture, gilt frames, patterned textiles, mirror/window secondary perspectives)
- **Format Justification:** 3:4 portrait creates vertical compression enhancing psychological tension; maximizes ornamental Victorian surface detail visibility

**[PASTORAL ROMANTIC - 5:4 Landscape]**

- **Ratio Status:** Native 5:4 landscape
- **Reframing Method:** Adaptive extend natural landscape with botanical precision
- **Spatial Allocation:** Figures occupy foreground, extended horizon line with possible sheep flock middleground, sharp distant landscape
- **Background Treatment:** Extend English countryside elements (wheat fields, tree canopies, wildflower meadows, distant agricultural structures) with species-specific botanical rendering
- **Format Justification:** 5:4 landscape provides gentle horizontal expansion for pastoral scenes while maintaining figure prominence; accommodates flock animals and botanical foreground density

**[PORTRAIT - 3:4 Portrait]**

- **Ratio Status:** Native 3:4 portrait
- **Reframing Method:** Recompose for tight three-quarter or half-length crop with direct confrontation
- **Spatial Allocation:** Figure occupies canvas, minimal background suggestion (atmospheric void or single architectural element)
- **Background Treatment:** Dark atmospheric grounds (forest green, umber, near-black) with subtle tonal variation; or single symbolic architectural fragment
- **Format Justification:** 3:4 portrait standard provides classical proportions for formal portraiture while emphasizing facial detail and rich fabric rendering

------

### 3) Artistic Style & Context

**Influences:**

- **Primary Counter-Influence:** Rejection of Royal Academy conventions and Raphaelesque idealization (Hunt's foundational rebellion against academic "rote" training and generalized beauty standards)
- **Technical Innovation:** Wet-white-ground painting technique adapted from early Flemish and Italian methods (applying oil color into wet flake-white ground for luminous transparency)
- **Naturalist Commitment:** John Ruskin's "truth to nature" philosophy applied to microscopic botanical and geological observation
- **Archaeological Accuracy:** Middle Eastern travel studies (Dead Sea journey for landscape authenticity, Palestinian costume and architectural research)
- **Moral Symbolism:** Dense object loading influenced by medieval allegorical traditions and Victorian moral narrative painting

**Medium/Production Method:**

- **Support:** Oil on fine linen or cotton canvas (120-180 threads per inch, smooth white ground preparation); occasional emergency use of "handkerchief linen from Arab bazaar" for on-site work
- **Paint Application:** Commercial tube oil colors from Roberson colorman applied into **wet flake-white oil paint ground** (not priming layer) using fine sable brushes (1-3mm width)
- **Binding Medium:** Amber varnish composed of **copal resin and drying oil** (Hunt's preferred medium for permanence, causes characteristic yellowing and embrittlement over time)
- **Brushwork Characteristics:** Invisible stroke absorption into smooth enamel-like surface; precise controlled application following form contours; no expressive deviation
- **Paint Thickness:** Thin transparent glazes over opaque white ground, 0.5-2mm total thickness, 2-5 color layers
- **Tool Arsenal:** Flexible palette knife, metal-ferruled flat brushes (Victorian-era innovations), fine detail sables
- **Drying Characteristics:** Extended cure time from copal medium, occasional drying wrinkles in thick passages

**Thematic Purpose:**

- **Religious Mission:** Bringing biblical narratives to life through archaeological accuracy and psychological realism, stripping away classical idealization to reveal human spiritual struggle
- **Moral Instruction:** Victorian domestic scenes as cautionary tales or moral awakenings, every object symbolically loaded to guide viewer interpretation
- **Pastoral Idealization:** Working-class romantic escape with naturalistic botanical precision, celebrating English countryside beauty
- **Portrait Psychology:** Capturing individual character through microscopic detail and ambiguous emotional restraint

**Hallmark Motifs:**

1. **Wet-White-Ground Luminosity:** Universal consistency across all work - light reflecting from white substrate through transparent color layers creating internal glow quality; colors appear to emit light rather than merely reflect it with pure hue saturation at 85-95%; darker passages maintain translucency with light penetrating and reflecting back; overall illumination 120-150% brighter than photographic naturalism
2. **Microscopic Detail Density:** Foreground elements must achieve detail saturation where botanical specimens show individual leaf vein networks (primary, secondary, tertiary veins distinguishable), fabric weave shows warp/weft thread intersections, wood grain displays growth ring striations and tool mark impressions, architectural carving shows chisel marks and surface texture; middleground elements at 10-20 feet maintain near-foreground precision; background elements preserve sharp focus contradicting atmospheric perspective expectations
3. **Symbolic Object Loading:** Multiple props per composition with every element morally/theologically/narratively significant - designed for prolonged intellectual "reading" rather than immediate visual consumption
4. **Anti-Idealized Anatomical Realism:** Minimal deviation from photographic human proportions, individual model features preserved; facial rendering includes visible skin pores, individual facial hair strands distinguishable, skin texture variations, at least 2-3 facial asymmetries (uneven eyebrows, ear size variation, nose deviation, jawline asymmetry); exposed flesh shows visible vein networks, tendon/sinew definition, individual body hair strands; hands sometimes enlarged for narrative emphasis with individual finger joints, nail beds, knuckle wrinkles, palm creases rendered microscopically
5. **Psychological Ambiguity:** Facial expressions conveying complex emotional states (awakening/realization/spiritual crisis/moral tension/ecstasy/surrender/doubt) rather than simple emotions; varied gaze direction balancing direct viewer address with internal scene focus

**Period Framing:** 1848-1870s Pre-Raphaelite Brotherhood revolutionary movement through Hunt's major exhibition period; Victorian England with Middle Eastern research travel for religious subject authenticity; rebellion against Royal Academy establishment and High Renaissance idealization

**Tone Tag:** Obsessive naturalistic precision, psychological complexity, moral seriousness, spiritual intensity, anti-academic rebellion, microscopic "truth to nature" commitment, luminous color with internal glow quality, symbolic density, claustrophobic detail saturation

------

### 4) Technical Execution (≥9 Anchors + Measurement Specifications)

**1. Wet-White-Ground Luminosity Anchor (Defining Technical Signature):**

- **Method:** Apply transparent oil colors directly into wet flake-white oil paint ground (not dry priming layer)
- **Effect:** Light reflects from white substrate through transparent color layers creating characteristic luminous quality
- **Intensity Measurement:** 120-150% heightened beyond photographic naturalism - highlights 20-50% brighter, mid-tones 15-30% brighter, shadows 10-20% brighter than camera exposure would capture
- **Consistency:** Universal application across all compositions - Pre-Raphaelite technical identifier
- **Surface Quality:** Paint surface exhibits reflective sheen characteristic of multiple thin glaze layers; zero visible brushstroke texture - surface appears continuous without directional marks; light reflection from surface is specular (mirror-like) not diffuse (matte); canvas weave texture suppressed to near-invisibility; surface reads as polished rather than textured when viewed at oblique angles
- **Color Transparency:** Alizarin crimson, ultramarine blue, viridian green applied as thin glazes (0.3-0.8mm thickness) over opaque white for maximum luminosity
- **Aging Artifacts:** 10-20% warm yellow shift in white areas from copal varnish deterioration; adulterated orange vermilion darkening to brown-black from red lead contamination

**2. Microscopic Detail Precision Anchor:**

**Botanical Detail Standard:**

- Leaf vein networks: Primary, secondary, and tertiary veins distinguishable
- Leaf margins: Serration patterns or smooth edges rendered accurately for species
- Petal structure: Individual petal overlap visible, surface texture (smooth/papery/velvety) differentiated
- Stem characteristics: Node positions, leaf attachment points, surface texture (smooth/hairy/ridged) present

**Textile Detail Standard:**

- Fabric weave: Warp and weft thread intersections visible at close inspection
- Thread count: Individual threads distinguishable in plain weave fabrics
- Pattern precision: Decorative motifs (paisley, florals, geometric) maintain exact repeat accuracy
- Dimensional texture: Pile fabrics (velvet) show individual fiber directionality; embroidery threads show raised dimensional presence

**Wood Detail Standard:**

- Grain patterns: Growth ring striations following wood species characteristics
- Tool marks: Plane marks, saw cuts, chisel facets visible where appropriate
- Surface aging: Wear patterns, color variation from handling/exposure rendered
- Joint construction: Mortise-tenon joints, dovetails, nails/pegs visible where carpentry exposed

**PROHIBITED DETAIL FAILURES:**

- ❌ Fabric rendered as solid color fields without weave structure
- ❌ Hair rendered as smooth masses without individual strand separation
- ❌ Skin rendered as airbrushed/smoothed surfaces without pore texture
- ❌ Embroidery suggested through color variation rather than thread-by-thread rendering
- ❌ Wood grain implied through tonal variation rather than linear striations
- ❌ Background elements softened through atmospheric blur rather than maintaining sharp focus

**3. Anti-Idealized Anatomical Realism Anchor:**

**REQUIRED IMPERFECTION MARKERS:**

- At least 2-3 facial asymmetries: uneven eyebrows, ear size variation, nose deviation, jawline asymmetry
- Visible skin texture at 100% zoom: pore visibility, fine wrinkles, surface irregularities
- Non-uniform skin tone: flushed cheeks, blue undertones in temples, warmth variations
- Individual eyelash separation: no mascara-clumped effect, sparse areas acceptable
- Beard/eyebrow individual hair directionality: not uniform combed appearance

**Facial Rendering Requirements:**

- Visible pores at close inspection distance
- Individual facial hair strands (beard, eyebrow, eyelash) distinguishable
- Skin texture variations in facial close-ups
- Facial asymmetries preserved from model reference

**Exposed Flesh Requirements:**

- Visible veins, sinew, tendon definition
- Body hair individual strands where anatomically present
- Sweat droplets, moisture effects (particularly religious subjects)
- Muscle striations in exposed flesh

**Hand Treatment:**

- Hands sometimes enlarged for narrative gesture importance
- Individual finger joints, nail beds, knuckle wrinkles, palm creases rendered microscopically

**Skin Tone Naturalism:**

- Non-idealized flesh tones with visible color variations (flushed cheeks, blue vein undertones, sun-weathered tanning, shadow warmth)
- Middle Eastern subjects rendered with bronzed authenticity rejecting European idealization

**PROHIBITED IDEALIZATION MARKERS:**

- ❌ Porcelain-smooth skin without visible texture
- ❌ Perfectly symmetric facial features
- ❌ Uniform skin tone without color variation
- ❌ Clumped/painted hair without strand separation
- ❌ Classical nose profiles (straight bridges, refined tips)

**4. Jewel-Tone Color Saturation Anchor:**

- **Palette Intensity:** Deep crimsons (#8B1A1A, #DC143C), forest greens (#228B22, #2E8B57), royal blues (#191970, #4169E1), goldenrod (#DAA520, #B8860B) at maximum intensity
- **Color Mixing Method:** Minimal palette mixing preserving individual pigment intensity - layered transparent glazes rather than pre-mixed opacity
- **Shadow Treatment:** Transparent colorful shadows maintaining luminosity in shadow areas - never dead black; shadow colors complement/contrast base hues creating vibrant darkness
- **Highlight Precision:** Sharp reflective highlights on eyes (corneal catchlights), metal surfaces, water, polished wood, jewelry - pure white or pale tints at maximum value
- **Aging Consideration:** Account for yellow shift from copal varnish deterioration in color relationships (original blues appear slightly green-shifted, whites appear cream)

**5. Pose Psychological Complexity Anchor:**

- **Religious Pose Patterns:** Devotional prayer hands (clasped, raised, reaching) with head tilt variations; cruciform arm extensions with psychological ambiguity (surrender/ecstasy/agony); body angles creating tension
- **Domestic Pose Patterns:** Psychological awakening gestures (hand to chest, sudden rising, defensive positioning); body rotation suggesting interrupted action; mirror-gazing reflection with complex layered perspectives
- **Pastoral Pose Patterns:** Reclining intimacy at various angles to ground plane; chaste physical proximity (hands touching, embracing, leaning); working-class postures (bent backs, rolled sleeves, often barefoot)
- **Portrait Pose Patterns:** Frontal confrontation with direct viewer gaze; three-quarter seated positioning; hands prominently displayed with specific gestures (holding symbolic objects, relaxed formal placement)
- **Gesture Economy:** Significant hand gestures carrying narrative weight; eye direction split between direct viewer address and internal scene focus
- **Expression Restraint:** Ambiguous emotional complexity over simple emotions - faces convey multiple simultaneous states (doubt/faith, awakening/confusion, intimacy/reservation, solemnity/ecstasy)

**6. Hard-Edge Precision Anchor:**

- **Contour Definition:** Sharp precise boundaries predominate - minimal atmospheric blending except intentional distance effects
- **Figure Separation:** Clear silhouette distinction between figures and backgrounds through contour precision rather than value contrast alone
- **Object Boundaries:** Microscopic edge rendering on props, architectural elements, botanical specimens maintaining sharpness contradicting soft-focus expectations
- **Brushwork Invisibility:** Stroke marks absorbed into smooth surface through controlled wet-into-wet technique; no visible impasto, no expressionist gesture evidence; zero visible brushstroke texture creating continuous surface
- **Line Quality:** Implicit rather than explicit - edges created through color/value adjacency with razor precision rather than drawn contour lines

**7. Heightened Naturalistic Lighting Anchor:**

- **Source Logic:** Single-point naturalistic sources - harsh desert sunlight (religious exteriors), window daylight flooding (domestic interiors), dappled tree-canopy light (pastoral), specific side-lighting (portraits described in Section 7)
- **Intensity Amplification:** Brightness heightened beyond photographic naturalism - spiritual/dramatic illumination effect at 120-150% camera exposure
- **Cast Shadow Precision:** Architecturally accurate shadow geometry following light physics; varying edge qualities appropriate to light source and distance
- **Backlighting Effects:** Silhouette halos, atmospheric haze through curtains, rim-lighting on hair/fabric edges where appropriate
- **Time-of-Day Markers:** Midday to late afternoon golden hour bias in pastoral scenes; variable interior lighting with identifiable window direction; harsh noon sun in Middle Eastern religious exteriors

**8. Material Aging Authenticity Anchor:**

- **Copal Varnish Yellowing:** Warm yellow-amber shift in all white/light areas as authentic aging characteristic (not defect)
- **Vermilion Darkening:** Adulterated orange vermilion (red lead contamination) shifts to brown-black in aged passages - documented historical pigment failure
- **Surface Characteristics:** Minimal cracking due to thin paint application; occasional drying wrinkles in thicker passages; overall smooth finish maintained
- **Canvas Texture Suppression:** Smooth ground preparation minimizes visible weave - most surface appears panel-like rather than textile-textured
- **Period-Appropriate Imperfections:** Accept/incorporate documented material failures as authenticating features rather than modern perfection

**9. Fabric Material Physics Anchor (Victorian Portrait Mode):**

**Velvet Rendering Requirements:**

- Individual pile fiber directionality visible at close inspection
- Pile depth 2-3mm creating light absorption in folds vs. reflection on raised surfaces
- Nap direction showing stroke patterns from historical wear/pressing
- NOT: Solid color field with gradient shading to suggest texture
- NOT: Soft blur to imply pile depth
- REQUIRED: Hair-like individual fiber rendering creating actual pile texture

**Embroidery/Gold Thread Requirements:**

- Individual metallic thread paths traceable across pattern
- Thread dimension: raised 0.5-1mm above base fabric surface
- Metallic highlight reflections on thread curves showing dimensional roundness
- Stitch entry/exit points visible at thread terminations
- Pattern repeats maintaining exact geometric precision across garment
- NOT: Painted gold color suggesting embroidery through tonal variation
- REQUIRED: Actual dimensional thread rendering with light physics interaction

**Book Cover Gilt Decoration Requirements:**

- Tooled leather impressions showing depth (0.3-0.5mm recessed patterns)
- Gold leaf application showing characteristic cracking/wear patterns at corners and spine
- Individual decorative motif precision (florals, geometric borders, title lettering)
- Leather grain texture visible between gilt decorated areas
- NOT: Flat painted gold pattern on solid brown rectangle
- REQUIRED: Dimensional surface with material interaction (gilt + leather + wear)

------

### 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**GENRE-SPECIFIC WARDROBE TRACKS:**

**[RELIGIOUS NARRATIVE WARDROBE]**

- **Male Biblical Figures (Adult):**
  - **SAFETY CALIBRATION:** Loincloth coverage extended to waist-minimum (historically accurate coverage was mid-thigh but adapted for modern safety constraints)
  - **Fabric:** Unbleached linen or rough wool drapery with authentic textile weave rendering; earth tone palette (ochre #DAA520, umber #8B4513, cream #FFFAF0, dusty rose #C89876)
  - **Construction:** Simple wrapped/draped garments with visible fold physics; frayed edges, dust accumulation, sweat staining for authenticity
  - **Accessories:** Leather belt/rope cincture, head covering (keffiyeh, prayer shawl), sandals or barefoot
  - **Anatomical Emphasis:** Maintain hyper-muscular intensity through visible torso/arm musculature - sinew, veins, sun-weathered skin texture compensating for extended coverage
- **Female Biblical Figures (Adult):**
  - **Coverage:** Full ankle-length robes, head coverings (veils, shawls), long sleeves
  - **Fabric:** Rich textiles for Mary figures (deep blue #191970, crimson #8B1A1A, gold-embroidered); simpler weaves for servants/peasants
  - **Construction:** Layered garments (under-tunic, over-robe, shawl/veil) with authentic drape physics
  - **Accessories:** Jewelry (rings, bracelets, earrings with symbolic significance), pottery vessels, weaving implements
  - **Color Palette:** Royal blue (#191970), crimson (#8B1A1A), gold (#B8860B), white (#FFFAF0)
- **Period Details:** First-century Palestinian costume based on archaeological research; textile patterns authentic to region/era; avoid anachronistic European medieval elements

**[DOMESTIC MORAL NARRATIVE WARDROBE]**

- **Female Victorian Figures (Adult):**
  - **Coverage:** Full Victorian modesty - high necklines (to collarbone), long sleeves (to wrist), floor-length skirts with trains
  - **Fabric Complexity:** Rich textiles requiring microscopic rendering - silk taffeta, velvet, brocade, lace overlays, embroidered trim
  - **Garment Layers:** Chemise, corset (suggested through silhouette, never visible), petticoats, over-dress, shawl/jacket
  - **Accessories:** Jewelry (brooches, lockets, rings), fans, prayer books, handkerchiefs, hair combs
  - **Color Palette:** Rich jewel tones - crimson (#8B1A1A), forest green (#228B22), gold (#DAA520), white (#FFFAF0)
  - **Pattern Rendering:** Paisley shawls, striped fabrics, lace detail, embroidery stitches all rendered with microscopic fidelity
- **Male Victorian Figures (Adult):**
  - **Coverage:** Full formal attire - high collared shirts, cravats, waistcoats, jackets, full-length trousers
  - **Fabric:** Wool suiting, velvet collars, silk cravats with precise fabric drape physics
  - **Accessories:** Pocket watches, canes, books, symbolic objects relevant to moral narrative
  - **Color Palette:** Dark formal tones - navy (#191970), forest green (#228B22), burgundy (#8B1A1A), black, white shirts

**[PASTORAL ROMANTIC WARDROBE]**

- **Working-Class Female Figures (Adult):**
  - **Coverage:** Modest working attire - ankle-length skirts, long-sleeved blouses, sun hats, aprons
  - **Fabric:** Simpler textiles - cotton, linen, wool homespun with naturalistic wear patterns (dust, grass stains, sun-fading)
  - **Construction:** Practical garments allowing movement - rolled sleeves (to elbow), tucked-up skirts (to mid-calf for field work), often barefoot
  - **Accessories:** Straw hats, baskets, wildflower bouquets, pastoral props (shepherdess crook, harvest implements)
  - **Color Palette:** Natural earth tones - white (#FFFAF0), cream (#FFF8DC), dusty rose (#E8B896), forest green (#2E8B57), sky blue (#1E90FF)
- **Working-Class Male Figures (Adult):**
  - **Coverage:** Peasant/shepherd attire - knee-length breeches or full trousers, long-sleeved shirts (often rolled to elbow), vests, wide-brimmed hats
  - **Fabric:** Rough homespun wool, linen work shirts, leather vests with authentic wear texture
  - **Construction:** Practical labor garments - loose fit allowing movement, visible repairs/patches, sometimes barefoot
  - **Accessories:** Shepherd's crook, musical pipes, harvest tools, leather pouches
  - **Color Palette:** Earth tones - brown (#8B4513), ochre (#DAA520), cream (#FFFAF0), forest green (#228B22)

**[PORTRAIT WARDROBE]**

- **Formal Victorian Attire (Gender-Appropriate):**
  - **Coverage:** Maximum formality - full Victorian convention adherence
  - **Fabric Emphasis:** Rich materials showcasing Hunt's textile rendering mastery - velvet, silk brocade, fur trim, gold embroidery, jeweled ornaments
  - **Color Palette:** Dark atmospheric backgrounds necessitate rich jewel-tone garment colors - teal (#008B8B), crimson (#8B1A1A), gold (#B8860B), forest green (#228B22), black with white collar/cuff accents
  - **Accessories:** Symbolic objects held/displayed - artist's tools (brushes, palette), books, religious symbols, scientific instruments
  - **Texture Rendering Priority:** Maximum microscopic fabric detail - individual fur hairs, embroidery thread paths, pattern repeats on brocade

**FABRIC BEHAVIOR SPECIFICATIONS:**

- **Silk:** High sheen with directional light reflection; crisp folds with sharp creases; thin drape conforming to body contours
- **Velvet:** Deep pile texture absorbing light in folds, reflecting on raised surfaces; heavy drape with rounded fold forms
- **Linen/Cotton:** Matte finish; crisp angular folds with visible weave texture; wrinkle patterns from wear
- **Wool:** Matte to slight sheen; soft rounded folds; visible nap texture in close inspection
- **Lace:** Transparent overlay with microscopic hole patterns; stiff structure maintaining shape; shadow casting through openwork
- **Period Accuracy:** 1840s-1870s construction methods - hand-stitching visible in close inspection, natural fiber characteristics, period-appropriate fasteners (hooks, buttons, ties)

**WARDROBE VARIATION REQUIREMENT:**

- **Color Cycling:** Change primary garment colors between iterations avoiding identical repetition
- **Pattern Variation:** Rotate between solid fabrics, stripes, paisleys, brocades, embroidered elements
- **Accessory Diversity:** Select different symbolic props from YAML pools maintaining genre coherence
- **Period Palette Constraint:** All colors must be achievable with 1840s-1870s natural and early synthetic dyes

**PROPS SPECIFICATION:**

**Religious Narrative Props (Select 1 hero + 0-1 micro, total ≤2 per figure):**

```yaml
hero_props:
  - Carpenter's tools (plane, saw, hammer) with wood shavings
  - Pottery vessels (water jars, oil lamps) with authentic glazing
  - Agricultural implements (sickle, wheat sheaf, grinding stones)
  - Devotional objects (prayer shawl, incense burner, scroll)
  - Symbolic animals (lamb, dove) rendered with species precision
  - Musical instruments (harp, lyre) with string detail
  
micro_props:
  - Coins, jewelry fragments, small tools
  - Food items (bread, dates, pomegranates)
  - Textile fragments, rope coils
  - Small pottery shards, stones
```

**Domestic Moral Narrative Props (Select 1 hero + 0-1 micro, total ≤2 per figure):**

```yaml
hero_props:
  - Musical instruments (piano with visible keys, sheet music with readable notes)
  - Books (specific titles painted on spines, prayer books with gilt edges)
  - Mirrors (gilt frames with secondary perspective reflections)
  - Furniture (carved chairs, ornate tables with pattern detail)
  - Decorative objects (vases, clocks, candlesticks with symbolic significance)
  - Needlework (embroidery hoops, knitting, lace-making tools)
  
micro_props:
  - Jewelry (rings, lockets, brooches)
  - Letters, calling cards, handkerchiefs
  - Tea service, decorative boxes
  - Flowers in vases with species identification
```

**Pastoral Romantic Props (Select 1 hero + 0-1 micro, total ≤2 per figure):**

```yaml
hero_props:
  - Shepherd's crook (wood grain visible)
  - Harvest implements (scythe, rake, pitchfork)
  - Baskets (woven detail) filled with fruit/flowers
  - Musical pipes (finger holes detailed)
  - Agricultural products (wheat sheaves, fruit bundles)
  - Sheep or goats (wool texture, individual facial features)
  
micro_props:
  - Wildflower bouquets (species-specific rendering)
  - Small tools, rope, leather pouches
  - Bread, cheese, simple food
  - Water vessels, wooden cups
```

**Portrait Props (Select 1 hero + 0-1 micro, total ≤2):**

```yaml
hero_props:
  - Artist's tools (brushes, palette with paint dabs, canvas)
  - Books (scholarly volumes with readable spines)
  - Scientific instruments (globe, compass, measuring tools)
  - Religious symbols (cross, prayer book)
  - Professional tools (relevant to sitter's occupation)
  
micro_props:
  - Writing implements, letters
  - Jewelry, decorative objects
  - Flowers (single bloom or small arrangement)
  - Symbolic objects (hourglass, skull, mirror)
```

**PROP RENDERING REQUIREMENTS:**

- **Material Authenticity:** Wood grain, metal patina, ceramic glazing, textile weave all microscopically precise
- **Symbolic Loading:** Every prop carries narrative/moral/theological significance - avoid purely decorative selection
- **Period Accuracy:** Objects authentic to 1840s-1870s or biblical/historical setting; no anachronisms
- **Detail Hierarchy:** Hero prop receives maximum detail attention; micro prop rendered with equal precision but smaller scale
- **Cultural Authenticity:** Middle Eastern objects for religious scenes; Victorian manufactured goods for domestic scenes; agricultural implements for pastoral scenes; professional tools for portraits

**COHERENCE FILTER:**

- All wardrobe and props must support declared genre and historical period
- Symbolic significance takes precedence over decorative appeal
- If prop selection becomes incoherent or anachronistic, fallback = clean scene with reduced prop count
- Maximum 2 props total per figure maintains Hunt's compositional focus on figure psychology and environment over object proliferation

------

### 6) Constraints

**CANVAS NEGATIVES (≥2) - Anti-Patterns to Avoid:**

**Ratio-Specific Negatives:**

- "Original aspect ratio", "source dimensions", "unmodified framing"
- "1632×640", "non-standard ratios", "arbitrary dimensions", "default aspect ratio" (NanoBanana resistance patterns)
- "Letterboxing", "pillarboxing", "padding to simulate ratio"

**Pre-Raphaelite Anti-Academic Negatives (CRITICAL):**

- "Raphaelesque idealized features", "classical beauty standards", "generalized faces"
- "Academic formula composition", "Royal Academy conventional training"
- "Smooth porcelain skin", "perfect symmetry", "idealized proportions"
- "Simplified background", "atmospheric softening", "conventional perspective blurring"
- "Dark murky shadows", "black shadows", "chiaroscuro without color"
- "Loose brushwork", "visible expressive strokes", "impressionistic handling"
- "Minimal detail", "generalized objects", "suggested rather than rendered"

**Medium-Specific Negatives:**

- "Digital photo filters", "HDR smoothing", "Instagram effects", "modern post-processing"
- "Photographic focus blur", "depth-of-field softening", "bokeh effects"
- "Impasto texture", "thick expressive paint", "palette knife application"
- "Watercolor transparency", "gouache opacity", "acrylic flatness" (oil painting only)

**Period-Production Negatives:**

- "Modern synthetic pigments", "acrylic medium", "contemporary varnishes"
- "Perfect color registration", "digital color accuracy", "contemporary printing methods"
- "Pristine surface", "no aging artifacts", "museum-restored perfection"

**Technique-Specific Negatives:**

- "Dry brush", "scumbling", "wet-into-dry layering" (contradicts wet-white-ground technique)
- "Harmonious conventional beauty", "pleasant idealization", "comfortable aesthetics" (Hunt's psychological tension mandate)
- "Minimal symbolism", "decorative objects only", "non-narrative props"

**CANVAS POSITIVES (≥2) - Required Constraints:**

**Ratio Enforcement (CRITICAL for NanoBanana):**

- "Exactly [declared X:Y ratio]", "MUST be [X:Y ratio]", "strict [X:Y] aspect ratio compliance"
- "Recomposed for [format name]", "precise [X:Y] dimensions", "composed specifically for [X:Y] format"
- "Intelligent spatial reorganization for [ratio]", "cleanly recomposed to exact [ratio]"

**Pre-Raphaelite Technical Mandates:**

- "Wet-white-ground luminous technique", "transparent color glazes over opaque white substrate"
- "Copal varnish medium authentic aging", "10-20% yellow shift in whites", "vermilion darkening characteristic"
- "Microscopic detail density foreground through background", "botanical fidelity species-specific rendering"
- "Anti-idealized individual model features", "visible surface anatomy (pores, veins, sinew)"
- "Heightened naturalistic lighting 120-150% intensity", "transparent colorful shadows maintaining luminosity"
- "Jewel-tone color saturation", "hard-edge precision sharp contours"

**Process-Specific Requirements:**

- "Oil paint thin transparent glazes 0.5-2mm thickness", "fine sable brush invisible strokes"
- "Smooth reflective surface finish glass-like", "minimal canvas weave visibility"
- "2-5 color layers over white ground", "light reflection through transparent passages"

**Symbolic Density Mandates:**

- "Multiple symbolically loaded objects", "every element narratively significant"
- "Prolonged intellectual reading designed", "hidden secondary narratives present"
- "Dense moral/theological/romantic symbolism", "objects chosen for meaning over decoration"

**Period-Production Requirements:**

- "1840s-1870s oil painting techniques authentic", "fine linen canvas 120-180 threads per inch"
- "Period-appropriate aging artifacts present", "copal medium deterioration visible"
- "Roberson colorman pigments with documented adulterations", "red lead vermilion darkening"

**VOCABULARY WARNINGS:**

- Avoid "ornate," "ornament," "elaborate" if unwanted frame generation risk (use "detailed," "intricate," "complex" instead)
- Avoid "harmonious," "pleasant," "beautiful" for psychological tension subjects (use "complex," "ambiguous," "psychologically charged")
- Avoid "soft," "atmospheric," "dreamy" contradicting Hunt's sharp detail mandate (use "precise," "microscopic," "crystalline")

------

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

**For Landscape Ratios (4:3, 5:4):**

- **Religious Narrative (4:3):** Horizontal narrative flow with multiple figure arrangement; figures occupy canvas width with spatial compression creating shallow relief-like arrangement (figures in near-plane clustering with minimal depth recession); sharp distant detail resisting atmospheric softening
- **Pastoral Romantic (5:4):** Gentle horizontal expansion accommodating flock animals and botanical foreground density; figures occupy foreground with extended horizon line, possible sheep middleground, sharp distant landscape detail; dappled tree-canopy light with golden hour bias

**For Portrait Ratios (3:4, 4:5):**

- **Domestic Moral Narrative (3:4):** Vertical compression creating psychological claustrophobia; figure height dominance with tight interior framing; ornamental Victorian surface density filling all available space; mirror/window devices showing alternate perspectives in many compositions
- **Portrait (3:4):** Vertical emphasis with strong subject dominance; minimal background (atmospheric void or single architectural element); tight three-quarter or half-length crop; direct confrontational framing with psychological intensity

**STYLE-SPECIFIC COMPOSITION:**

**Religious Narrative Composition:**

- **Perspective Regime:** Compressed shallow relief arrangement with figures in near-plane clustering; minimal depth recession contradicting conventional linear perspective
- **Figure:Ground:** Figure/architectural dominance with remaining symbolic environment
- **Density:** Maximum foreground detail, substantial middleground, background detail resisting atmospheric softening
- **Lighting Logic:** Harsh desert sunlight or single oil lamp creating sharp-edged architectural shadows; heightened spiritual illumination intensity
- **Symbolic Layering:** Multiple props with theological significance; hidden narratives in background scenes, architectural details, costume elements
- **Archaeological Accuracy:** Palestinian architecture (stone walls, carved wooden screens, textile hangings); Dead Sea landscapes with geological precision; period-accurate vessels, tools, costume based on research travel

**Domestic Moral Narrative Composition:**

- **Perspective Regime:** Tight interior compression with Victorian ornamental density; every surface (walls, floors, furniture, ceiling) detailed to maximum capacity
- **Figure:Ground:** Figure dominance with highly detailed environment
- **Density:** Maximum everywhere - all compositional zones saturated; psychological claustrophobia through detail saturation
- **Lighting Logic:** Window daylight flooding interior creating backlighting effects, silhouette halos, atmospheric haze through curtains; heightened realism
- **Mirror/Window Devices:** Many compositions include reflective surfaces showing alternate perspectives, hidden narratives, symbolic secondary scenes
- **Victorian Authenticity:** Period-accurate furniture construction (every nail, joint, carved detail rendered); wallpaper patterns microscopically precise; gilt frame ornament detail; textile pattern repeats on upholstery, carpets, curtains

**Pastoral Romantic Composition:**

- **Perspective Regime:** Extended atmospheric depth with visible horizon lines; conventional linear perspective with sharp distant focus contradicting normal aerial perspective softening
- **Figure:Ground:** Balanced figures and landscape with botanical precision
- **Density:** Maximum foreground botanical detail (individual grass blades, wildflower species, leaf structures), substantial middleground (sheep wool texture if present, tree bark detail), maintained background sharpness (distant landscape detail)
- **Lighting Logic:** Natural sunlight with dappled tree-canopy effects; golden hour late afternoon bias; heightened natural illumination
- **Animal Presence:** Sheep flocks with individual wool texture and facial features appropriate to pastoral context; cattle, goats rendered with species precision
- **Botanical Fidelity:** Species-specific wildflowers, grasses, trees allowing botanical identification from rendering accuracy; "minute, botanical fidelity" as compositional priority

**Portrait Composition:**

- **Perspective Regime:** Minimal depth - atmospheric void backgrounds or single architectural fragment suggestions
- **Figure:Ground:** Strong figure dominance with minimal dark atmospheric background
- **Density:** Maximum facial detail rendering (every pore, hair, eyelash); rich fabric texture microscopic precision; minimal prop detail but equally precise
- **Lighting Logic - Single Point Side Illumination:** Light source positioned 45-60° to subject's left or right, 15-30° above eye level; one side of face receives full illumination, opposite side transitions through mid-tone to shadow; illuminated cheek on shadow-side creates characteristic triangular highlight beneath eye (formed by nose shadow boundary meeting cheek illumination); light-to-shadow transition occurs gradually across face width not as abrupt edge; shadow areas maintain luminosity never dead black - transparent colorful darkness with warm undertones; single sharp highlight reflection in each eye positioned at 10-11 o'clock (left light) or 1-2 o'clock (right light); light source creates subtle graduated illumination on background from light-source side fading to deep shadow on opposite side
- **Framing Tightness:** Three-quarter length or half-length crops; direct confrontational positioning with minimal head rotation
- **Background Treatment:** Forest green (#1a3a1a to #0d1f0d), umber (#3a2a1a to #1f150d), or near-black atmospheric voids with subtle tonal variation suggesting spatial depth through colorful transparent darkness; warm undertones from copal varnish aging creating slight yellow-amber shift with olive-tinged depths; very subtle tonal variations (2-5% value fluctuations) preventing flat color-field appearance; OR single architectural element (column capital, wall corner edge, door frame) rendered with full foreground detail precision receiving same lighting as figure

**REQUIRED ANCHORS:**

**Surface Context Anchor:**

- Religious: Palestinian stone architecture, plastered walls, carved wooden screens, textile hangings; Dead Sea desolate landscapes
- Domestic: Victorian interior walls (patterned wallpaper, wainscoting, picture rails); polished wood floors or patterned carpets
- Pastoral: English countryside grass, wildflower meadows, wheat fields, tree canopies; natural earth and vegetation
- Portrait: Atmospheric void or minimal architectural suggestion; studio-controlled non-specific environment

**Frame/Band Anchor:**

- **OMIT ENTIRELY** - Pre-Raphaelite paintings do not feature integrated decorative frames within picture plane
- Hunt's work exhibited in external gallery frames only; internal composition extends to canvas edge without borders

**Production Context Anchor:**

- Oil on fine linen canvas (120-180 threads per inch) with smooth white ground preparation
- Wet-white-ground technique application visible through luminous transparency
- Copal varnish medium aging artifacts (10-20% yellow shift, vermilion darkening)
- Period 1840s-1870s production methods authentic to Pre-Raphaelite technical innovations

**Ratio Enforcement Anchor:**

- Composition designed specifically for declared aspect ratio (4:3 landscape religious, 5:4 landscape pastoral, 3:4 portrait domestic/portrait)
- All spatial allocations, figure placements, environmental extensions optimized for chosen format
- No evidence of adaptation from different source ratio - native composition for target format

------

### 8) Typography & Text Integration

**BINARY:** Omit entirely.

**JUSTIFICATION:** William Holman Hunt's Pre-Raphaelite paintings do not feature integrated typography or text within the picture plane. While Victorian narrative paintings occasionally included text elements (book spines, sheet music, letters), Hunt's work prioritizes visual symbolism over textual narrative. Any readable text in reference images exists as environmental props (book titles, music scores) rendered with microscopic detail but not designed as typographic elements.

For authentic Pre-Raphaelite style replication, all narrative communication occurs through visual symbols, gesture, expression, and compositional arrangement rather than text integration.

**FORMAT-SPECIFIC TEXT RULES:** Not applicable - all modes prohibit text integration.

------