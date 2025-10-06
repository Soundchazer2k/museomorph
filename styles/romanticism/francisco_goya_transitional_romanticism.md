---
id: francisco_goya_transitional_romanticism
group: Romanticism
movement: Transitional Romantic Period (1793-1814)
artist: Francisco Goya
display_name: Francisco Goya — Transitional Romanticism
style_scope: single-artist

ratios:
  - '4:3'
  - '3:4'
  - '5:4'
ratios_status: provisional
ratios_notes: >
  Goya staged war panoramas on 4:3 or 5:4 stretches and pivoted to 3:4 for
  tenebrist portraits; choose among those native canvases when transforming
  modern subjects into his Romantic period oil language.
modes:
  - War Scene
  - Tenebrism Portrait
  - Atmospheric Group Composition

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

composition_constraints:
  max_subjects: 6
  subject_interaction: required
  crowd_scenes: true
  animals_allowed: true
  animal_types:
    - domestic
    - wild
  max_animals: 2
  text_allowed: no

hero_image: null

about: >
  Transitional Goya turns modern sitters into searing Romantic oil studies—thick
  impasto highlights, theater-lit chiaroscuro, and political unease. This brief
  preserves his Napoleonic-era ratios, wardrobe mandates, and photo-to-painting
  alchemy.

sections_index:
  '1': Core Instruction & Likeness Mandate
  '2': Canvas Strategy & Aspect Ratio Control
  '3': Style Context & Material Authenticity
  '4': Technical Method & Mark-Making
  '5': Wardrobe, Props & Setting Conventions
  '6': Safety & IP Constraints (Hard Rules)
  '7': Composition & Lighting Patterns
  '8': Typography & Text Integration (If Historically Present)
---
# Francisco Goya - Transitional Romantic Period Framework (1793-1814)

```yaml
---
# CODEX METADATA - PROMPT CONFIGURATION
codex_version: "1.0"
prompt_framework: "Goya Romantic Period v1.0 (NanoBanana Edition)"
framework_date: "2025-10-03"
artist: "Francisco Goya"
period: "Transitional Romantic Period (1793-1814)"
excluded_periods: "Black Paintings (1819-1823), Early Rococo/Tapestry Period (pre-1793)"

# RENDERER CONFIGURATION - NanoBanana (Gemini 2.5 Flash Image)
renderer:
  model: "gemini-2.5-flash-image"
  api_endpoint: "via Claude API proxy"
  supported_ratios: ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
  default_ratio: "3:4"
  token_cost_per_image: 1290
  output_modalities: ["Text+Image"]
  
# CRITICAL USE CASE
integration_requirement: "Modern photographic subject into Goya's painted aesthetic"
hybrid_challenge: "Photo-to-painting transformation maintaining period authenticity"

# SAFETY & COMPLIANCE
safety_profile: ["no_nudity", "no_graphic_gore", "war_violence_acceptable_non_graphic", "modesty_required_all_genders", "period_appropriate_coverage"]
wardrobe_mandate: "High necklines, long sleeves, full coverage required for all genders"
war_violence_calibration: "Dramatic tension and action acceptable, no explicit wounds or graphic injury depiction"

# FRAMEWORK METADATA
framework_version: "1.0"
base_version: "Universal Museum-Grade v4.3 (NanoBanana Edition)"
validation_required: true
---
```

**Timeframe:** 1793-1814 (Post-deafness, Napoleonic Wars era, Pre-Black Paintings)

**Historical Context:** Goya's transitional period following his 1793 illness and deafness, encompassing the Napoleonic invasion of Spain (1808-1814). This period marks his evolution from court painter to critical commentator, characterized by psychological depth, dramatic chiaroscuro, and unflinching social observation while maintaining technical mastery and compositional sophistication.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Photo-to-Painting Integration Mandate:** Modern photographic subject must be transformed into Goya's oil painting aesthetic through:
  - Painterly edge treatment replacing photographic sharpness
  - Chiaroscuro lighting regime replacing photographic lighting
  - Period-appropriate wardrobe and props
  - Oil paint surface characteristics (visible brushwork, impasto highlights, canvas texture in shadows)
  - Atmospheric integration matching Goya's spatial logic
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Combat ratio resistance through:
  - Explicit ratio declaration in multiple prompt locations
  - Repetitive ratio reinforcement using different phrasings
  - Negative constraints explicitly prohibiting unwanted ratios
  - Compositional anchors designed specifically for target ratio
- **Face-Treatment Flag:** `oil-chiaroscuro-romantic` (Goya-specific custom flag)
  - Smooth blending in flesh tones with fine detail in features
  - Dramatic single-source lighting with sharp light-to-shadow transitions
  - Psychological expressiveness through subtle facial modeling
  - Naturalistic proportions (no elongation or caricature)
- **Pose Flags:** `contrapposto` (portraits), `psychological-tension` (war scenes), `candid-motion` (group compositions)
- **Canvas Control Flag:** `strict-reframe` (primary), `adaptive-extend` (atmospheric portraits only)
- **Style Dominance:** Goya's Transitional Romantic Period (1793-1814) oil painting aesthetic dominates; photographic subject transformed into painted figure maintaining period authenticity.
- **Technical Measurement Authority:** Quantitative specifications override descriptive language:
  - Impasto thickness: 2-4mm in peak highlights
  - Light-to-dark ratios: 25-45% illuminated (varies by genre)
  - Head-to-body ratio: 1:7.5 to 1:8 (naturalistic)
  - Contrapposto angle: 10-15° hip-shoulder differential
- **Material Authenticity:** Oil on canvas with authentic period techniques:
  - Alla prima (wet-on-wet) application
  - Thin glazes in shadows, thick impasto in highlights
  - Visible brushwork and canvas texture
  - No digital filters or modern post-processing
- **Safety Guardrails:**
  - No nudity - all figures fully clothed with period-appropriate modesty
  - War violence acceptable but non-graphic (no explicit wounds, gore, or graphic injury)
  - Distress conveyed through pose, expression, and dramatic lighting rather than graphic detail
- **Failure Mode Prevention:** Avoid:
  - Photographic lighting (HDR, modern photography look)
  - Digital smoothness (Instagram filters, beauty retouching)
  - Rococo lightness (pastels, decorative prettiness)
  - Black Paintings extremism (grotesque distortion, total despair)
  - Generic "old master" defaults (need Goya-specific characteristics)

------

## Framework Sections

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **[SELECT RATIO]** - ignore source photograph dimensions completely.

**RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[SELECT RATIO]**. This is a hard requirement.

Transform modern photographic subject into **Francisco Goya's Transitional Romantic Period oil painting aesthetic (1793-1814)**, maintaining the subject's identity through silhouette, gesture, and expression while fully converting photographic characteristics into Goya's painted language.

**Face-Treatment Flag:** `oil-chiaroscuro-romantic` - Smooth blending in flesh with dramatic single-source lighting, psychological expressiveness, sharp light-to-shadow transitions, naturalistic proportions.

**Pose Flag:** [SELECT: `contrapposto` / `psychological-tension` / `candid-motion`]

**Canvas Control Flag:** `strict-reframe`

**Style Dominance:** Goya's Transitional Romantic Period (1793-1814) painting technique completely dominates. Subject appears as if Goya painted them in oil during this period - visible brushwork, impasto highlights, canvas texture, dramatic chiaroscuro, atmospheric depth, period-accurate wardrobe and setting.

**Mode Selector:** [SELECT: `war-scene` / `tenebrism-portrait` / `atmospheric-portrait` / `group-composition`]

**Final Ratio Confirmation:** Output must be exactly **[SELECT RATIO]**, no exceptions.

------

## 2) Canvas Strategy & Aspect Ratio Control

**RATIO SELECTION BY GENRE:**

**War/Dramatic Scenes:**

- Primary: `4:3` (landscape - theatrical staging)
- Alternative: `16:9` (wide landscape - panoramic action)
- Justification: Horizontal format accommodates multiple figures, architectural backdrop, theatrical shallow space

**Tenebrism Portraits:**

- Primary: `3:4` (portrait - vertical emphasis)
- Alternative: `2:3` (portrait - taller format)
- Justification: Vertical format emphasizes isolated figure emerging from void darkness

**Atmospheric Portraits:**

- Primary: `3:4` (portrait - balanced figure-ground)
- Alternative: `2:3` (portrait - environmental context)
- Justification: Portrait format with room for landscape background

**Group Compositions:**

- Primary: `5:4` (near-square landscape - frieze arrangement)
- Alternative: `4:3` (landscape - horizontal rhythm)
- Justification: Wide format accommodates multiple figures in horizontal arrangement

**CANVAS RECOMPOSITION STRATEGY:**

- **Ratio Status:** [Native NanoBanana ratio selected]
- **Photo-to-Painting Integration:** Subject extracted from modern photographic context and recomposed into Goya's spatial logic and period environment
- **Reframing Method:** Strict reframe - subject repositioned according to Goya's compositional principles, period-appropriate background constructed
- **Spatial Allocation:** [Genre-specific placement following Goya's patterns]
- **Background Treatment:** [Genre-specific - void darkness / atmospheric landscape / theatrical architecture / interior space]
- **Format Justification:** Ratio serves Goya's [genre] compositional strategy from 1793-1814 period

------

## 2.1) Ratio Compliance & Renderer Adaptation

**NOT APPLICABLE** - All genre-appropriate ratios are natively supported by NanoBanana renderer. No adaptation required.

------

## 3) Style Context & Material Authenticity

**Primary Influences:**

- Diego Velázquez (complex realism, psychological portraiture)
- Rembrandt van Rijn (dramatic chiaroscuro, etching mastery, tenebrism)
- Direct observation of Spanish society and Napoleonic War trauma

**Medium & Production Method:**

- Oil paint on canvas
- Alla prima (wet-on-wet) technique with limited earth-tone palette
- Thin transparent glazes in shadows (bone black + earth tones)
- Heavy impasto in highlights (pure white lead, 2-4mm thickness)
- Visible directional brushwork following form
- Canvas texture sometimes visible through thin shadow passages
- Mixed on palette, applied directly (no optical color mixing)

**Thematic Purpose:** Psychological intensity, social critique, unflinching documentation of human suffering and folly, dramatic tension between light and darkness as metaphor for reason versus superstition, dignity in portraiture regardless of social class.

**Hallmark Motifs (Quantified):**

1. **Extreme Chiaroscuro/Tenebrism**
   - Light-to-dark ratio: 25-45% illuminated / 55-75% shadow (varies by genre)
   - Single dramatic light source (lantern, dawn light, directional daylight, candlelight)
   - Peak highlights: Pure white lead impasto adjacent to near-black voids
   - No gradual transition zones - sharp cutoff from light to shadow
   - Shadow depth: Transparent glazes retaining minimal detail or total void
2. **Psychological Expressiveness**
   - Direct eye contact engaging viewer (portraits)
   - Subtle facial modeling conveying inner state
   - Naturalistic proportions (1:7.5 to 1:8 head-to-body ratio)
   - Minimal head tilt (2-8° toward viewer)
   - Hands prominently lit and expressively positioned
   - Contrapposto stance (10-15° hip-shoulder angle) creating subtle dynamism
3. **Dramatic Spatial Compression**
   - Flattened theatrical space (war scenes)
   - Void backgrounds (tenebrism portraits - 50%+ pure black)
   - Atmospheric perspective (landscape portraits - tonal recession)
   - Shallow picture depth (2-3 figure depths maximum)
   - Foreground emphasis (70-90% of visual weight on figures)
   - Background abstraction (minimal detail, suggestive rather than descriptive)
4. **Period-Accurate Spanish Fashion (1793-1814)**
   - Empire/Regency silhouette (feminine, high-waisted, modest)
   - Napoleonic military uniforms (masculine military)
   - Late 18th-century Spanish civilian dress (tail coats, breeches, mantillas)
   - Maja style (Spanish middle class - fitted bodice, full skirt)
   - All wardrobe fully covering with period-appropriate modesty
5. **Restricted Earth-Tone Palette**
   - Foundation: Bone black, warm dark browns (#1a1612, #3d3226)
   - Mid-tones: Earth ochres, umbers (#8b7355, #8b7968)
   - Highlights: White lead, warm flesh tones (#e8d4b8, #dbb896, #f5f0e6)
   - Accents: Vermillion red, Prussian blue, gold ochre (≤15% of canvas)
   - Atmospheric greys: Blue-grey, warm grey (#4a5259, #6b5e4f)

**Period Framing:** Transitional Romantic Period, post-1793 deafness, encompassing Napoleonic Wars (1808-1814), characterized by psychological depth, social commentary, dramatic chiaroscuro, movement away from court painter Rococo toward critical modernity, bridge between Old Masters and modern art.

**Tone Tag:** Psychologically intense, dramatically lit, socially observant, dignified, unflinching, emotionally charged, atmospheric, period-authentic Spanish character.

------

## 4) Technical Method & Mark-Making

**EXPLICIT TEXTURE REQUIREMENTS - MANDATORY VISUAL CHARACTERISTICS:**

Paint surface MUST show individual brushstroke marks with distinct directional flow throughout the entire composition. NO smooth digital surfaces. NO airbrush gradients. NO blended perfection. Every area of the painting must provide visible evidence of physical brush contact with canvas.

**BRUSH APPLICATION SPECIFICATIONS:**

- **Stroke Width:** Individual visible strokes 3-8mm width in major areas, 1-3mm in detail areas
- **Stroke Density:** 8-15 distinct visible strokes per square inch in painted areas
- **Directional Flow:** Strokes follow form curvature - vertical on vertical surfaces, horizontal on horizontal planes, diagonal following fabric drape, radial around curved forms
- **Stroke Visibility:** Each brushstroke must remain distinguishable as individual mark, not melted into smooth blend
- **Application Method:** Dragged brush creates directional texture with visible start and end points, pressure variation creates thick-to-thin paint deposits within single stroke

**1. Oil Paint Application Anchor - MEASURABLE PAINT PHYSICS:**

**IMPASTO HIGHLIGHTS (REQUIRED - 15-20% of painted surface):**

- **White lead highlights:** 2-4mm thick paint ridges casting actual micro-shadows, applied with loaded brush in single directional stroke
- **Peak illumination points:** 3mm dimensional buildup on facial high points (forehead, nose bridge, cheekbones), white fabric folds, architectural light catches
- **Application texture:** Palette knife drag marks creating 1-2mm parallel ridges OR thick brush deposit showing individual brush hair separations (0.5mm furrows within stroke)
- **Physical relief:** Paint thickness creates measurable three-dimensional surface with height variation of 0-4mm across painting
- **Specific locations:** Facial highlights (forehead, nose, cheekbones, chin), hands (knuckles, fingertips), white clothing (shoulder tops, sleeve folds, collar edges), props catching light

**SHADOW GLAZES (REQUIRED - all shadow areas):**

- **Thickness:** Thin transparent layers 0.5-1mm allowing canvas weave texture to remain visible
- **Canvas visibility:** Woven canvas texture (1-2 threads per mm grid pattern) MUST show through shadow paint
- **Application method:** Thinned paint dragged across canvas with light pressure, not fully opaque coverage
- **Transparency test:** Canvas preparation tone must be visible through shadow glaze layers
- **Specific locations:** All areas in shadow - background voids, clothing folds in darkness, facial shadow sides, architectural elements in shade

**ALLA PRIMA WET-ON-WET METHOD:**

- Colors mixed on palette to target value/hue before application
- Single-session direct painting approach, NOT layered glazing buildup
- Adjacent wet paint areas can blend at contact edges but retain individual stroke identity
- Brush loaded with paint deposits full color in single stroke, not built up through multiple passes

**BRUSH ECONOMY WITH DIRECTIONAL REQUIREMENTS:**

- Maximum expressive effect with minimum strokes
- Each stroke purposeful and visible
- Stroke direction follows anatomical/fabric form:
  - **Flesh:** Curved strokes following muscle structure, radial around rounded forms
  - **Fabric:** Diagonal strokes following drape direction, perpendicular strokes at fold changes
  - **Hair:** Flowing directional strokes following hair fall, 5-12mm length
  - **Architecture:** Horizontal/vertical strokes following building planes
  - **Atmospheric background:** Loose gestural strokes 10-20mm length creating smoky texture

**EDGE TREATMENT (REQUIRED at all transitions):**

- **War scenes/Tenebrism:** Sharp light-to-shadow transitions with minimal blend zone (1-3mm)
- **Atmospheric portraits:** Softer transitions with broken edges (3-6mm blend zone)
- **Figure-to-background:** Dissolved edges where figure merges into atmosphere through reduced paint opacity and stroke direction changes
- **NO hard cutout edges:** All boundaries must show painterly brush marks, not vector-crisp contours
- **Edge texture:** Visible individual brush strokes at edges, not smooth gradients

**2. Chiaroscuro Lighting Anchor (GENRE-SPECIFIC):**

**War/Dramatic Scenes:**

- Single dramatic light source (lantern, dawn, dusk)
- 30% illuminated / 70% shadow ratio
- Concentrated white lead highlights (5-10% of canvas)
- Near-black void shadows, no detail retention
- Lightest whites directly adjacent to darkest blacks

**Tenebrism Portraits:**

- Single directional light from upper left
- 25% illuminated / 75% void background
- Face and hands receive maximum luminosity
- Background = absolute black void, no spatial definition
- Subtle gradations on flesh, sharp cutoff to darkness

**Atmospheric Portraits:**

- Diffused natural daylight, overcast quality
- 45% illuminated / 55% atmospheric shadow
- Softer, more graduated transitions
- Translucent shadows retaining form definition
- Three distinct value zones: highlight, mid-tone, shadow

**Group Compositions:**

- Multiple artificial light sources (candles, interior lamps)
- 40% illuminated / 60% shadow
- Distributed focal points across figures
- Warm ochre candlelight vs. cool shadow blues

**3. Brushwork & Surface Texture Anchor:**

- **Flesh Tones:** Smooth blending with fine detail in facial features, visible directional strokes in larger areas
- **Fabric Rendering:** Heavy impasto in white garments, thin glazes in dark clothing, rapid calligraphic strokes for lace/pattern
- **Hair:** Fluid directional strokes following form, minimal blending, economical marks
- **Backgrounds:** Thin uniform washes (void type), loose painterly suggestion (atmospheric type), gestural abstraction (architectural type)
- **Canvas Texture Visibility:** Apparent in thin shadow passages, obscured in thick highlights

**4. Color Mixing & Palette Anchor - GOYA'S EARTH-TONE SYSTEM WITH HEX SPECIFICATIONS:**

**FLESH TONE CONSTRUCTION (MANDATORY FORMULA):**

- **Base layer:** Warm ochre (#c9a876) + white lead (#f5f0e6) mixed to desired value
- **Rose undertone:** Add minimal vermillion (#c84530) or rose madder (#d4a5a5) for living warmth (5-10% of mixture)
- **Shadow system:** Earth tone shadows using burnt umber (#3d3226) + bone black (#1a1612), NOT grey
- **Deep shadows:** Pure bone black (#0d0f14) thinned as transparent glaze
- **Highlight peaks:** Pure white lead (#f5f0e6) with minimal ochre tint (#e8d4b8)
- **PROHIBITION:** NO grey shadows on flesh, NO cool shadows unless atmospheric portrait genre, shadows MUST be warm earth-based

**FABRIC COLOR SYSTEMS:**

**White/Cream Fabrics:**

- **Highlights:** Pure white lead (#f5f0e6) with 2-4mm impasto thickness
- **Mid-tones:** White + raw umber creating warm cream (#e8dcc8)
- **Shadows:** Warm grey created with white + burnt umber + minimal black (#c9b8a8), NOT cool grey
- **Deep folds:** Transparent umber glaze (#8b7355) over white base

**Dark Fabrics (Black, Brown, Navy):**

- **Base:** Bone black (#1a1612) or burnt umber (#2b1f15) or Prussian blue (#1e2838)
- **Highlights:** Base color + white lead creating mid-value (#3d3226 for black fabric, #8b4513 for brown)
- **Texture:** Thin paint 1-2mm showing canvas texture, NOT thick opaque coverage

**Red Fabrics:**

- **Base:** Vermillion (#c41e1e) or burnt sienna (#a0522d)
- **Highlights:** Base + white lead + yellow ochre (#e8856b)
- **Shadows:** Burnt umber (#3d3226) + minimal black, NOT darkened red
- **Deep shadows:** Transparent burnt umber glaze

**7. Pose & Gesture Anchor (GENRE-SPECIFIC):**

**War/Dramatic Scenes:**

- Diagonal tension lines 30-45° (victims in surrender/terror)
- Vertical rigidity (firing squad aggressors)
- Arms raised, crouched positions, fallen diagonals
- Dynamic action frozen at peak dramatic moment

**Portraits:**

- Standing: Contrapposto stance (10-15° hip-shoulder angle), slight S-curve
- Seated: Relaxed but alert, 3/4 turn common, pyramidal mass
- Head tilt: Minimal 2-8° toward viewer
- Hands: Gesturally expressive, holding props, prominently lit
- Eye contact: Direct, psychologically engaging viewer

**Group Compositions:**

- Horizontal frieze-like arrangement
- Multiple overlapping figures
- Varied poses creating visual rhythm
- Alternating standing/seated positions

------

## 5) Wardrobe, Props & Setting Conventions

**PERIOD:** Spanish fashion 1793-1814 (Empire/Regency era, Napoleonic Wars)

**CRITICAL SAFETY MANDATE:** All figures fully clothed with period-appropriate modesty. High necklines, long sleeves, full coverage required for all genders. No nudity under any circumstances.

**WARDROBE TRACKS:**

**Masculine Civilian (Late 18th-Early 19th Century Spanish):**

```yaml
garments:
  - tail_coat: ["dark brown", "black", "deep burgundy", "forest green"]
  - breeches: ["tan", "grey", "black", "cream"]
  - waistcoat: ["contrasting color to coat", "embroidered", "plain"]
  - white_shirt: ["high collar", "cravat", "linen"]
  - outerwear: ["cape", "cloak", "greatcoat"]
  - footwear: ["riding boots", "buckled shoes", "tall boots"]
  - headwear: ["tricorn hat", "bicorn hat", "top hat"]

fabric_behavior:
  - wool_broadcloth: "Structured, holds form, matte surface"
  - linen: "Crisp, slight sheen in highlights"
  - leather: "Smooth or grained, used for boots and belts"

construction: "Tailored, fitted through torso, functional buttons, period-accurate cut"
```

**Masculine Military (Napoleonic Wars Era):**

```yaml
garments:
  - military_jacket: ["red with gold braid", "blue with white trim", "green rifle uniform"]
  - breeches_or_trousers: ["white", "grey", "matching jacket"]
  - boots: ["tall black leather", "polished", "riding boots"]
  - headwear: ["bicorn hat", "shako", "infantry cap"]
  - accessories: ["red or gold sash", "sword belt", "cartridge box", "epaulettes"]

fabric_behavior:
  - wool_uniform_cloth: "Stiff, structured, holds crisp lines"
  - leather: "Polished boots, belts, military gear"
  - metal_trim: "Brass buttons, gold braid on officers"

construction: "Highly structured military tailoring, brass buttons, functional design, rank insignia appropriate"
```

**Feminine Upper Class (Empire/Regency Silhouette - MODEST VERSION):**

```yaml
garments:
  - empire_dress: ["white muslin with HIGH neckline", "ivory", "pale blue", "soft pink"]
  - spencer_jacket: ["dark colored short jacket", "long sleeves", "fitted"]
  - shawl_mantilla: ["Spanish lace", "silk", "covering shoulders"]
  - long_gloves: ["white", "ivory", "elbow or full length"]
  - headwear: ["bonnet", "hair ornaments", "small cap"]
  - footwear: ["closed-toe slippers", "ankle boots", "kid leather"]

modesty_requirements: "HIGH necklines (no décolletage), LONG sleeves (full coverage), opaque fabrics (no sheerness), full body coverage"

fabric_behavior:
  - muslin: "Lightweight but OPAQUE, drapes softly, modest flow"
  - silk: "Subtle sheen, smooth drape, structured"
  - lace: "Delicate pattern for shawls/trim, layered over opaque fabric"

construction: "Empire waist (just below bust), flowing full-length skirt, delicate construction, MODIFIED for full modesty coverage"
```

**Feminine Middle Class (Spanish Maja Style):**

```yaml
garments:
  - fitted_bodice: ["black", "dark brown", "deep red", "navy"]
  - full_skirt: ["red", "black", "striped", "patterned", "knee to ankle length"]
  - white_blouse: ["high modest neckline", "long sleeves", "cotton or linen"]
  - mantilla: ["black lace", "covering head and shoulders"]
  - apron: ["optional for working scenes", "white or colored"]
  - footwear: ["closed shoes", "boots", "practical"]

modesty_requirements: "Covered shoulders, high necklines, full skirts, no skin exposure"

fabric_behavior:
  - sturdy_cotton_wool: "Structured, less drape than muslin, working-class durability"
  - linen: "Crisp blouse fabric"

construction: "Fitted bodice, full gathered skirt, functional design, traditional Spanish construction"
```

**War Victims/Civilian Distress (SAFETY CALIBRATED):**

```yaml
garments:
  - simple_shirt: ["white", "torn but not exposing skin", "disheveled"]
  - breeches_trousers: ["earth tones", "worn", "peasant clothing"]
  - minimal_footwear: ["bare feet acceptable", "simple shoes", "worn boots"]

distress_markers: "Torn fabric (not exposing skin), dirt, disarray, blood staining (subtle, non-graphic dark marks), disheveled appearance"

safety_calibration: "NO GRAPHIC GORE - distress conveyed through pose, expression, lighting, and clothing disarray rather than explicit wounds"

fabric_behavior: "Simple linen or wool, rough texture, worn appearance"
```

**ACCESSORY CAPS:** Minimalist 0-2 / Elaborate 2-3 (based on social class and genre)

**COLOR PALETTE RESTRICTIONS:**

- Primary: Earth tones, blacks, browns, warm greys
- Secondary: White/cream (clothing highlights), military reds/blues
- Accents: Gold braid (military), red accents (maja style), minimal jewel tones
- Avoid: Bright pastels, saturated modern colors, Rococo palette
- Period accuracy: Natural dyes, limited color range, earth-dominant

**WARDROBE VARIATION REQUIRED:** Change primary garment colors/styles between iterations - cycle through period-appropriate palette avoiding identical repetition.

**PROPS (1 Hero + Optional 1 Micro, Total ≤2):**

**War/Dramatic Scenes:**

```yaml
hero_props: ["lantern", "musket", "sword", "military flag"]
micro_props: ["cartridge box", "bayonet", "canteen"]
environmental: ["rough ground", "simple architecture", "dawn/night sky"]
```

**Tenebrism Portraits:**

```yaml
hero_props: ["letter", "book", "fan", "walking stick"]
micro_props: ["jewelry (modest pendant/bracelet)", "gloves (held)", "handkerchief"]
environmental: ["void darkness (no environmental props needed)"]
```

**Atmospheric Portraits:**

```yaml
hero_props: ["parasol", "small dog (lap breed)", "letter", "fan"]
micro_props: ["hair ornament", "jewelry (modest)", "gloves"]
environmental: ["landscape background", "simple column", "atmospheric sky"]
```

**Group Compositions:**

```yaml
hero_props: ["candlestick", "playing cards", "wine glass", "easel/canvas"]
micro_props: ["snuffbox", "pocket watch", "quill and ink", "spectacles"]
furniture: ["wooden chairs", "table with cloth", "cabinet"]
```

**COHERENCE FILTER:** All wardrobe and props must support 1793-1814 Spanish period authenticity. Modern elements prohibited. Fallback = simplified period-appropriate scene.

------

## 6) Safety & IP Constraints (Hard Rules)

**CANVAS NEGATIVES (≥2 - Anti-Digital Language + Medium-Specific):**

**Ratio Violations:**

- ❌ "original photograph dimensions"
- ❌ "source image aspect ratio"
- ❌ "unmodified photographic framing"
- ❌ "1632×640" (NanoBanana non-standard default)
- ❌ "arbitrary dimensions"
- ❌ "non-standard ratios"
- ❌ "default aspect ratio"

**Digital Surface Violations (CRITICAL - Prevent AI Smoothness):**

- ❌ "smooth surface," "airbrush effect," "digital gradient," "blended smoothness"
- ❌ "enamel finish," "polished surface," "plastic sheen," "glossy surface"
- ❌ "flat paint," "uniform thickness," "even surface," "no texture"
- ❌ "photographic sharpness," "digital perfection," "HDR smoothness"
- ❌ "Instagram filter," "beauty retouching," "digital color grading"
- ❌ "lens effects," "bokeh," "depth of field blur," "lens flare"
- ❌ "hard cutout edges," "vector-crisp contours," "clean outline," "sharp boundaries"
- ❌ "modern photography look," "studio lighting," "ring light," "softbox lighting"

**Style Violations:**

- ❌ "Rococo lightness," "pastel colors," "decorative prettiness," "lighthearted tone"
- ❌ "Black Paintings grotesque," "extreme distortion," "total despair aesthetic"
- ❌ "witches and demons," "caricature," "comedic exaggeration"
- ❌ "generic old master," "any 19th century portrait," "unspecified period style"
- ❌ "neoclassical polish," "carefully modeled form," "academic smoothness"

**Technique Violations:**

- ❌ "invisible brushwork," "no visible strokes," "perfectly blended," "seamless gradients"
- ❌ "uniform paint thickness," "consistent surface," "even coverage"
- ❌ "hidden canvas texture," "obscured weave," "smooth underpainting"
- ❌ "grey shadows on flesh," "cool shadows on warm skin," "monochromatic shadows"
- ❌ "darkened local color shadows," "same hue shadows"

**Safety Violations:**

- ❌ "nudity," "exposed skin," "low necklines," "revealing clothing"
- ❌ "graphic gore," "explicit wounds," "visible injuries," "blood pools," "dismemberment"

**CANVAS POSITIVES (≥2 - Texture Enforcement + Goya-Specific):**

**Ratio Enforcement (Repetitive):**

- ✅ "exactly [SELECTED RATIO]"
- ✅ "recomposed for [SELECTED RATIO] format"
- ✅ "MUST be [X:Y ratio]"
- ✅ "strict [X:Y] aspect ratio compliance"
- ✅ "precise [X:Y] dimensions"
- ✅ "composed specifically for [X:Y] format"
- ✅ "FINAL OUTPUT RATIO: [X:Y] - NO EXCEPTIONS"

**Mandatory Texture Requirements (Multiple Redundant Phrasings):**

- ✅ "visible individual brushstrokes 3-8mm width with distinct directional flow following anatomical form"
- ✅ "impasto paint ridges 2-4mm thick in white highlights casting actual micro-shadows with measurable relief"
- ✅ "canvas weave texture (1-2 threads per mm grid pattern) MUST be visible through thin shadow areas 0.5-1mm thick"
- ✅ "paint surface height variation 0-4mm across painting creating three-dimensional tactile relief"
- ✅ "every square inch shows evidence of physical brush contact with varied pressure creating thick-to-thin deposits"
- ✅ "broken irregular edges with 3-8mm soft transition zones showing individual brush marks at boundaries"
- ✅ "palette knife drag marks creating 1-2mm parallel ridges in thick impasto areas"
- ✅ "brush hair separations visible in loaded brush deposits showing 0.5mm furrows within strokes"
- ✅ "directional stroke texture: vertical on vertical forms, horizontal on horizontal planes, diagonal following drape"
- ✅ "8-15 distinct visible brushstrokes per square inch in painted areas with individual stroke identity maintained"

**Goya Color System (Hex Code Enforcement):**

- ✅ "flesh base: warm ochre (#c9a876) + white lead (#f5f0e6) + rose undertone (#d4a5a5)"
- ✅ "flesh shadows: burnt umber (#3d3226) + bone black (#1a1612), NOT grey, NOT cool tones"
- ✅ "highlight peaks: pure white lead (#f5f0e6) with minimal ochre tint (#e8d4b8)"
- ✅ "deep shadows: transparent bone black glaze (#0d0f14) showing canvas texture"
- ✅ "war scene backgrounds: 70% deep blacks (#0d0f14, #1a1612), 20% warm browns (#3d3226), 10% earth ochres (#8b7355)"
- ✅ "tenebrism backgrounds: 75% pure black void (#0d0f14) with zero atmospheric variation"
- ✅ "atmospheric backgrounds: grey-blue (#4a5259), earth browns (#6b5e4f), warm ochres (#c9a876)"
- ✅ "accent colors maximum 15% canvas: vermillion (#c41e1e), Prussian blue (#1e3a5f), gold ochre (#b8914d)"

**Goya Lighting System (Measurable Ratios):**

- ✅ "war scenes: 30% illuminated / 70% shadow with 5-10% concentrated white lead highlights"
- ✅ "tenebrism portraits: 25% illuminated / 75% void background with face-and-hands emphasis"
- ✅ "atmospheric portraits: 45% illuminated / 55% atmospheric shadow with three-value zones"
- ✅ "single dramatic light source with NO ambient fill - symbolic illogical positioning"
- ✅ "lightest whites (#f5f0e6) directly adjacent to darkest blacks (#0d0f14) with 2-5mm transition maximum"
- ✅ "chiaroscuro creating psychological isolation through extreme value contrast"

**Goya Technical Specifications:**

- ✅ "oil on canvas with alla prima wet-on-wet direct application technique"
- ✅ "thin shadow glazes 0.5-1mm showing canvas weave, thick highlight impasto 2-4mm creating relief"
- ✅ "fabric receives MORE paint than flesh - academic method reversed"
- ✅ "maximum expressive effect with minimum stroke economy - each stroke purposeful and visible"
- ✅ "naturalistic anatomical proportions 1:7.5 to 1:8 head-to-body ratio without elongation"
- ✅ "contrapposto 10-15° hip-shoulder angle, head tilt 2-8°, asymmetrical weight distribution"
- ✅ "detail follows psychological importance not spatial logic - 10% maximum detail, 65% minimal detail"

**Period Authenticity:**

- ✅ "1793-1814 Romantic period aesthetic with post-deafness psychological intensity"
- ✅ "Spanish period wardrobe: Empire silhouette, Napoleonic uniforms, maja style, full modesty coverage"
- ✅ "period-accurate Spanish environment integration: theatrical architecture, atmospheric landscapes, void isolation"
- ✅ "photographic subject transformed into Goya's painted language maintaining identity through gesture and expression" **CANVAS POSITIVES (≥2 - Texture Enforcement + Goya-Specific):**

**Ratio Enforcement (Repetitive):**

- ✅ "exactly [SELECTED RATIO]"
- ✅ "recomposed for [SELECTED RATIO] format"
- ✅ "MUST be [X:Y ratio]"
- ✅ "strict [X:Y] aspect ratio compliance"
- ✅ "precise [X:Y] dimensions"
- ✅ "composed specifically for [X:Y] format"
- ✅ "FINAL OUTPUT RATIO: [X:Y] - NO EXCEPTIONS"

**Mandatory Texture Requirements (Multiple Redundant Phrasings):**

- ✅ "visible individual brushstrokes 3-8mm width with distinct directional flow following anatomical form"
- ✅ "impasto paint ridges 2-4mm thick in white highlights casting actual micro-shadows with measurable relief"
- ✅ "canvas weave texture (1-2 threads per mm grid pattern) MUST be visible through thin shadow areas 0.5-1mm thick"
- ✅ "paint surface height variation 0-4mm across painting creating three-dimensional tactile relief"
- ✅ "every square inch shows evidence of physical brush contact with varied pressure creating thick-to-thin deposits"
- ✅ "broken irregular edges with 3-8mm soft transition zones showing individual brush marks at boundaries"
- ✅ "palette knife drag marks creating 1-2mm parallel ridges in thick impasto areas"
- ✅ "brush hair separations visible in loaded brush deposits showing 0.5mm furrows within strokes"
- ✅ "directional stroke texture: vertical on vertical forms, horizontal on horizontal planes, diagonal following drape"
- ✅ "8-15 distinct visible brushstrokes per square inch in painted areas with individual stroke identity maintained"

**Goya Color System (Hex Code Enforcement):**

- ✅ "flesh base: warm ochre (#c9a876) + white lead (#f5f0e6) + rose undertone (#d4a5a5)"
- ✅ "flesh shadows: burnt umber (#3d3226) + bone black (#1a1612), NOT grey, NOT cool tones"
- ✅ "highlight peaks: pure white lead (#f5f0e6) with minimal ochre tint (#e8d4b8)"
- ✅ "deep shadows: transparent bone black glaze (#0d0f14) showing canvas texture"
- ✅ "war scene backgrounds: 70% deep blacks (#0d0f14, #1a1612), 20% warm browns (#3d3226), 10% earth ochres (#8b7355)"
- ✅ "tenebrism backgrounds: 75% pure black void (#0d0f14) with zero atmospheric variation"
- ✅ "atmospheric backgrounds: grey-blue (#4a5259), earth browns (#6b5e4f), warm ochres (#c9a876)"
- ✅ "accent colors maximum 15% canvas: vermillion (#c41e1e), Prussian blue (#1e3a5f), gold ochre (#b8914d)"

**Goya Lighting System (Measurable Ratios):**

- ✅ "war scenes: 30% illuminated / 70% shadow with 5-10% concentrated white lead highlights"
- ✅ "tenebrism portraits: 25% illuminated / 75% void background with face-and-hands emphasis"
- ✅ "atmospheric portraits: 45% illuminated / 55% atmospheric shadow with three-value zones"
- ✅ "single dramatic light source with NO ambient fill - symbolic illogical positioning"
- ✅ "lightest whites (#f5f0e6) directly adjacent to darkest blacks (#0d0f14) with 2-5mm transition maximum"
- ✅ "chiaroscuro creating psychological isolation through extreme value contrast"

**Goya Technical Specifications:**

- ✅ "oil on canvas with alla prima wet-on-wet direct application technique"
- ✅ "thin shadow glazes 0.5-1mm showing canvas weave, thick highlight impasto 2-4mm creating relief"
- ✅ "fabric receives MORE paint than flesh - academic method reversed"
- ✅ "maximum expressive effect with minimum stroke economy - each stroke purposeful and visible"
- ✅ "naturalistic anatomical proportions 1:7.5 to 1:8 head-to-body ratio without elongation"
- ✅ "contrapposto 10-15° hip-shoulder angle, head tilt 2-8°, asymmetrical weight distribution"
- ✅ "detail follows psychological importance not spatial logic - 10% maximum detail, 65% minimal detail"

**Period Authenticity:**

- ✅ "1793-1814 Romantic period aesthetic with post-deafness psychological intensity"
- ✅ "Spanish period wardrobe: Empire silhouette, Napoleonic uniforms, maja style, full modesty coverage"
- ✅ "period-accurate Spanish environment integration: theatrical architecture, atmospheric landscapes, void isolation"
- ✅ "photographic subject transformed into Goya's painted language maintaining identity through gesture and expression"

**Vocabulary Warnings:** Avoid "smooth," "polished," "blended," "seamless," "perfect," "clean," "pristine" which contradict Goya's expressive directness. Avoid "harmonious," "pleasant," "beautiful," "decorative" which contradict his psychological intensity. Emphasize "dramatic," "psychological," "expressive," "atmospheric," "direct," "unflinching," "intense," "economical."

------

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

**For War/Dramatic Scenes (4:3 or 16:9 Landscape):**

- Horizontal flow emphasizing theatrical staging
- Low horizon line (lower 1/3 of canvas)
- Figures occupy 70-80% of picture plane depth
- Architectural backdrop flattened to decorative element
- Diagonal tension lines (30-45°) vs. vertical barriers
- Figure dominance ≥70% of visual weight
- Negative space used dramatically (darkness = threat)
- Shallow theatrical platform spatial logic

**For Tenebrism Portraits (3:4 or 2:3 Portrait):**

- Vertical emphasis with figure emerging from darkness
- No background spatial markers - pure void
- Figure placement slightly off-center for tension
- 25% illuminated / 75% void background ratio
- Figure dominance 85-90% of visual interest
- Subject floats in undefined black space
- Focal point: Face at upper 1/3 intersection
- Strong vertical axis with subtle S-curve (contrapposto)

**For Atmospheric Portraits (3:4 or 2:3 Portrait):**

- Vertical emphasis with landscape background
- Horizon at middle to upper-middle of canvas
- Figure in front of (not within) landscape
- 45% illuminated / 55% atmospheric shadow
- Figure dominance 60-70% of visual weight
- Landscape elements suggested through tonal recession
- Color temperature shift (warm to cool) creating depth
- Figure anchored to ground plane

**For Group Compositions (5:4 or 4:3 Landscape):**

- Horizontal frieze-like arrangement
- Shallow interior perspective (2-3 figure depths)
- Eye-level to slightly elevated viewpoint
- 40% illuminated / 60% shadow
- Figure dominance 80% of canvas
- Multiple distributed focal points
- Alternating light/dark figures creating rhythm
- Furniture/architecture defines interior space

**STYLE-SPECIFIC FRAMING REGIME:**

**Perspective System:**

- **War Scenes:** Flattened/compressed theatrical space, psychological rather than geometric logic
- **Tenebrism Portraits:** No perspective - void space, timeless isolation
- **Atmospheric Portraits:** Atmospheric perspective with minimal linear perspective, figure-ground separation
- **Group Compositions:** Shallow interior perspective, horizontal organization

**Figure:Ground Relationship:**

- Detail follows psychological/narrative importance, not spatial logic
- Foreground sharp, background dissolved
- Maximum detail in faces and hands (10-15% of canvas)
- Moderate detail in primary garments and props (25-35%)
- Minimal detail in backgrounds and periphery (50-65%)

**Lighting Logic:**

- Single dramatic light source (lantern, dawn, directional daylight, candlelight)
- Extreme value contrast (lightest whites adjacent to darkest blacks)
- Shadows: transparent or void (no reflected light fill)
- Highlights: concentrated white lead applications
- Illogical symbolic lighting (not natural source within scene)

**Required Anchors:**

**Surface Context Anchor:** Oil on canvas with visible texture - canvas weave apparent in thin shadow passages, obscured in thick impasto highlights. Period-appropriate linen canvas preparation.

**Frame/Band Anchor:** OMIT ENTIRELY - no decorative frames, no borders, no external presentation elements. Composition extends to canvas edges following Goya's practice.

**Production Context Anchor:** Oil painting created 1793-1814 in Spain. Direct painting method (alla prima), limited earth-tone palette, dramatic single-source lighting, psychological intensity, social commentary, period authenticity in all elements.

**Ratio Enforcement Anchor:** Composition designed specifically for [SELECTED RATIO] following Goya's spatial logic for that format type. Subject recomposed from photographic origin into period-appropriate painted environment.

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** OMIT

Francisco Goya's Transitional Romantic Period paintings (1793-1814) contained no text, titles, or typography within the painted image. All text (when present) appeared as separate inscriptions or in accompanying print series captions, never integrated into the oil painting itself.

For photographic subject integration maintaining period authenticity, no text should appear within the painted composition.

**END OF FRAMEWORK - NO ADDITIONAL CONTENT BEYOND SECTION 8**
