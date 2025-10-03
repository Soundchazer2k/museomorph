# Steampunk - Style Analysis

# Victorian Engraving Portrait Style

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio
- **Style over likeness:** Likeness via silhouette/gesture/expression
- **Technical Measurement Authority:** Quantitative specifications override descriptive language
- **Face-Treatment Flag:** `engrave-hatch` - Steel engraving cross-hatching with precise parallel lines, 0.5-1mm spacing, classical tonal gradation
- **Pose Flag:** `frontal-rigid` - Formal Victorian portrait positioning, three-quarter view preferred, scholarly dignified stance
- **Canvas Control Flag:** `strict-reframe` - Recompose entirely for Victorian portrait conventions
- **Material authenticity:** Authentic steel engraving line work, no digital simulation
- **Period Production Authenticity:** 1840-1890s steel engraving printing methods with characteristic engraving precision
- **Quantifiers authoritative:** Line spacing, cross-hatch density, tonal range measurements are targets
- **Text policy:** Only render if Section 8 authorizes
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures
- **Composition boundaries:** No frames outside canvas; no artificial borders or credits

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **2:3 ratio** (portrait format) - ignore source image dimensions completely
- Redraw subject entirely from scratch in **Victorian steel engraving style (1840s-1890s)** for **museum-quality technical illustration reproduction**
- Preserve likeness through **meticulous cross-hatched line work** and classical idealization typical of 19th-century scientific documentation
- **IP Safeguard Declaration:** Create original Victorian-era inspired character design avoiding copyrighted costume elements or modern steampunk fantasy without historical precedent
- **Face-Treatment Flag:** `engrave-hatch`
- **Pose Flag:** `frontal-rigid`
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Technical precision and scholarly documentation aesthetic supersedes photographic likeness
- **Mode Selector:** Technical illustration / Scientific documentation portrait

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO:** `2:3` (classical Victorian portrait print format)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** recompose-entirely for Victorian portrait conventions
- **Spatial Allocation:** Subject centered with 15-20% headroom, classical portrait framing
- **Background Treatment:** Extend period-appropriate Victorian workshop/laboratory setting or neutral technical illustration background
- **Format Justification:** 2:3 ratio matches standard Victorian book illustration and scientific plate dimensions (1840-1890)

------

## 3) Style Context & Material Authenticity

**Artistic Style:** Victorian steel engraving technical illustration capturing scholarly precision and industrial-age documentation aesthetic (1840s-1890s)

**Medium/Production Method:** Steel engraving on paper - burin-incised copper plates with precise cross-hatching, parallel line technique, classical intaglio printing process

**Thematic Purpose:** Scientific documentation and scholarly illustration for educated Victorian audiences; technical mastery demonstration

**Hallmark Motifs:**

- Cross-hatched tonal gradation with 0.5-1mm line spacing
- Precise mechanical detail rendering (gears, instruments measured to 2-3mm accuracy)
- Classical proportion idealization (Victorian dignity standards)
- Technical apparatus integration (scientific instruments, precision tools)
- Scholarly environmental context (laboratories, workshops)

**Period Framing:** Peak steel engraving period (1840-1890), British and European technical illustration tradition

**Tone Tag:** Dignified scholarly precision, Victorian technical mastery, refined documentation aesthetic

**Production Era Authenticity:** Steel plate engraving with burin tools, copper plate preparation, traditional intaglio printing on cotton rag paper

------

## 4) Technical Method & Mark-Making

**Line Work Specifications:**

- Cross-hatching at 45-90° angles, 0.5-1mm spacing between parallel lines
- Burin tool marks visible, tapering line ends characteristic of steel engraving
- Minimum 3-layer cross-hatch for mid-tones, 5+ layers for deepest shadows
- Directional hatching follows anatomical forms (curved lines for facial contours)

**Tonal Range Measurements:**

- 8-12 distinct tonal values through line density variation
- Highlight preservation (pure white paper) 10-15% of composition
- Deep blacks (maximum cross-hatch density) 5-10% of composition
- Mid-tone gradation occupies 75-80% with precise line control

**Surface Depth:**

- Ink sits on paper surface, no impasto
- Plate impression visible as embossed border (optional, 2-3mm depth)

**Detail Hierarchy:**

- Facial features: maximum precision (individual eyelash lines visible)
- Costume elements: medium detail (fabric weave suggested through hatching patterns)
- Background: simplified linear treatment (30% detail reduction from foreground)

**Edge Treatment:**

- Clean, precise line terminations
- No feathered or soft edges - all transitions through line density

**Pose Anchors:**

- Head tilt: 5-15° maximum deviation from vertical
- Shoulder angle: subtle contrapposto, 10-20° rotation acceptable
- Weight distribution: formal standing 50/50 or seated upright
- Hand positions: scholarly gestures - holding instruments, demonstrative poses

**Scale Hierarchy:** Classical proportions unless Victorian idealization requires subtle refinement

**Material Authenticity:** Pure steel engraving technique - no wash effects, no tone plates, line work only

**Period Consistency:** All elements match 1840-1890 technical illustration standards

------

## 5) Wardrobe, Props & Setting Conventions

**Adult Masculine:**

- Primary: Victorian formal frock coat (black/dark grey), high collar white shirt, cravat/bow tie
- Secondary: Scientific expedition clothing - leather apron over vest, rolled sleeves
- Tertiary: Technical workwear - heavy wool jacket, brass-buttoned vest

**Adult Feminine:**

- Primary: Victorian high-necked dress with mutton sleeves, corseted bodice
- Secondary: Modified expedition dress - practical skirt, leather accessories
- Tertiary: Technical workshop attire - protective apron, simplified dress

**Fabric Behavior:**

- Heavy wools render through dense cross-hatching
- Leather shows parallel line highlights
- Brass/metal elements: precise geometric hatching

**Accessory Cap:** Elaborate (3-4 items)

- Pocket watch on chain (technical detail essential)
- Brass instruments (compass, measuring tools)
- Technical goggles (leather/brass construction)
- Mechanical tools (precision rendered)

**Color Palette:** Monochromatic - pure line work only, no tinting

**Wardrobe Variation:** Cycle through Victorian formal, expedition, and technical workshop attire

**Props (≤2):**

```yaml
victorian_technical_hero:
  - brass_compass: "6cm diameter, precision engraved details"
  - pocket_chronometer: "ornate case, visible mechanism"
  - scientific_journal: "leather bound, technical diagrams"
  - precision_caliper: "brass construction, measurement marks"
  
victorian_technical_micro:
  - monocle: "wire frame, chain attached"
  - technical_pen: "brass nib visible"
  - small_gears: "2-3cm, precise teeth rendering"
```

**Coherence Filter:** All elements authentic to 1840-1890 scientific/technical professions

------

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "digital effects", "photographic rendering", "smooth gradients"
- "modern steampunk fantasy", "anachronistic elements", "contemporary design"
- "soft edges", "blurred lines", "wash effects", "tonal plates"

**✅ Canvas Positives:**

- "exactly 2:3 ratio", "recomposed for Victorian portrait print"
- "pure steel engraving line work", "burin tool marks visible"
- "precise cross-hatching 0.5-1mm spacing", "classical tonal gradation"
- "1840-1890 technical illustration authenticity", "scholarly precision"

**Vocabulary Warnings:** Avoid "ornate" (triggers unwanted decorative frames); avoid "smooth," "soft," "blended" (incompatible with engraving technique)

------

## 7) Composition & Lighting Patterns

**PORTRAIT RATIO COMPOSITION (2:3):**

- Vertical emphasis with subject dominance ≥75%
- Classical portrait framing - head and shoulders or three-quarter length
- Hierarchical staging - subject foreground, instruments mid-ground, setting background

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Classical single-point or two-point perspective
- **Grid/Symmetry:** Subtle symmetry in formal poses, technical precision in instrument rendering
- **Figure:Ground:** 70% subject, 30% environment/negative space
- **Density:** 60% coverage - precise line work with breathing room
- **Lighting Logic:** Single directed light source (studio lighting convention), cast shadows rendered through cross-hatching
- **Detail:Negative Space:** 65% detailed rendering, 35% clean paper preservation

**REQUIRED ANCHORS:**

- **Surface Context:** Victorian book illustration page or technical plate
- **Frame/Band:** OMIT - no decorative borders (clean edge bleed)
- **Production Context:** Cotton rag paper substrate, steel plate engraving, traditional intaglio printing
- **Ratio Enforcement:** Composition specifically designed for 2:3 Victorian portrait format

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Allow (optional Victorian technical labels)

**If Typography Included:**

**Ratio-Appropriate Zones:**

- Top margin: potential title placement (5% of height)
- Bottom margin: caption/description zone (10% of height)
- Side margins: measurement annotations possible

**Copy Limits:**

- ≤6 words per line
- Maximum 3 lines of text
- Technical labels: Latin nomenclature preferred

**Period-Appropriate Typography:**

- Classical Victorian serif letterforms
- Engraved letter quality (same line technique as illustration)
- **Font Recommendation:** "Closest Google Font: EB Garamond (85% match to Victorian book fonts). Better: Monotype Italian Old Style or Caslon"

**Format-Specific Rules:**

- Technical plate mode: labels integrated with illustration
- Scientific documentation: precise measurement annotations
- Museum print mode: minimal text, focus on image

**Historical Accuracy:** Typography must match 1840-1890 engraving standards

**Production Method Integration:** Text engraved using same cross-hatch technique, no separate type printing

---

# Imaginative Digital Painting Portrait Style

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio
- **Style over likeness:** Likeness via silhouette/gesture/expression enhanced with fantastical elements
- **Technical Measurement Authority:** Quantitative specifications override descriptive language
- **Face-Treatment Flag:** `digital-painted` - Contemporary digital painting with painterly brushwork, fantastical lighting effects, brass/copper atmospheric glow
- **Pose Flag:** `power-stance` - Dynamic heroic positioning with fantastical machinery interaction
- **Canvas Control Flag:** `strict-reframe` - Recompose for adventure poster aesthetics
- **Material authenticity:** Digital painting techniques authentic to 2000s-2020s steampunk art movement
- **Period Production Authenticity:** Contemporary digital art methods - Photoshop/Procreate brush engines, layer blending modes, digital lighting effects
- **Quantifiers authoritative:** Brush size percentages, color temperature values, atmospheric effect measurements are targets
- **Text policy:** Only render if Section 8 authorizes
- **Safety/IP:** No nudity/gore; no copyrighted steampunk franchises; original neo-Victorian character design
- **Composition boundaries:** No frames outside canvas; no artificial borders or credits

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **2:3 ratio** (poster format) - ignore source image dimensions completely
- Redraw subject entirely from scratch in **contemporary steampunk digital painting style (2000s-2020s)** for **fantasy art poster reproduction**
- Preserve likeness through **fantastical technological integration** and neo-Victorian aesthetic enhancement with heroic proportions
- **IP Safeguard Declaration:** Create original steampunk character design avoiding copyrighted elements from existing franchises (no recognizable airship designs, no trademarked mechanical styles, no specific literary character elements). Design unique fantastical technology and original neo-Victorian costume elements
- **Face-Treatment Flag:** `digital-painted`
- **Pose Flag:** `power-stance`
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Fantastical adventure aesthetic and imaginative technology supersedes photographic realism
- **Mode Selector:** Fantasy art poster / Character concept art

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO:** `2:3` (adventure poster / concept art format)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** recompose-entirely for dynamic heroic framing
- **Spatial Allocation:** Subject positioned for action - off-center dynamic placement with 10-20% headroom
- **Background Treatment:** Extend fantastical steampunk environment - Victorian architecture with impossible machines, brass cityscape, steam-filled atmosphere
- **Format Justification:** 2:3 ratio optimal for character-focused fantasy poster and modern digital art presentation (2000-2025)

------

## 3) Style Context & Material Authenticity

**Artistic Style:** Contemporary steampunk digital painting capturing fantastical technology and neo-Victorian romance of modern steampunk culture (2000s-2020s)

**Medium/Production Method:** Digital painting created with pressure-sensitive stylus on graphics tablet - Photoshop/Procreate/Clip Studio Paint with custom steampunk brush libraries, layer blend modes for atmospheric effects, digital color dodge/burn for brass highlights

**Thematic Purpose:** Fantasy adventure art celebrating alternative history technology and neo-Victorian aesthetic for contemporary fantasy art audiences

**Hallmark Motifs:**

- Rich brass and copper atmospheric glow (color temperature 3000-3500K)
- Fantastical mechanical integration (30-40% of costume/composition includes imaginative technology)
- Neo-Victorian costume with impossible additions (mechanical limbs, steam-powered accessories)
- Dynamic action poses with machinery interaction
- Atmospheric steam effects and magical lighting (bloom intensity 20-30%)

**Period Framing:** Contemporary digital art movement (2000-present), influenced by artists like Kazuhiko Nakamura and Brian Kesinger

**Tone Tag:** Adventurously fantastical, technologically optimistic, heroically romantic, imaginatively dramatic

**Production Era Authenticity:** Digital painting workflow - sketch layer, color blocking, detail rendering, atmospheric effects layers, color grading, final polish with digital brushes mimicking oil painting texture

------

## 4) Technical Method & Mark-Making

**Digital Painting Specifications:**

- **Brush work:** Variable pressure sensitivity, 15-40% opacity oil paint brushes, visible brush strokes 3-8mm equivalent scale
- **Blending method:** Color dodge for brass highlights, multiply layers for shadow depth, overlay for atmospheric steam
- **Edge treatment:** Soft edges for atmospheric elements (30% hardness), crisp edges for mechanical details (85-95% hardness)
- **Stroke economy:** 60-80% coverage with intentional negative space, directional strokes following form

**Color Temperature Measurements:**

- Warm highlights: 3000-3500K (brass, copper, golden steam)
- Cool shadows: 5500-6500K (blue atmospheric depth)
- Midtone balance: 4000-4500K

**Lighting Specifications:**

- Primary light: Warm directional (brass/copper source), 70% intensity
- Rim light: Cool atmospheric, 40% intensity, creates separation from background
- Fill light: Ambient steam glow, 25% intensity
- Specular highlights: Sharp brass reflections, 95-100% white value

**Atmospheric Effect Measurements:**

- Steam particle density: 20-30% opacity, variable size 2-15mm
- Volumetric lighting: 15-25% opacity light rays, directional from mechanical sources
- Depth fog: Exponential fade starting at 60% background depth

**Pose Anchors:**

- Head tilt: Dynamic 20-35° angles for heroic energy
- Shoulder-hip differential: 25-45° rotation for action poses
- Weight distribution: 70/30 asymmetric for dynamic stance
- Hand positions: Interaction with fantastical machinery, weapon grips, mechanical control gestures

**Scale Hierarchy:** Heroic proportions - subtle idealization (105-110% normal proportions), emphasize power and adventure capability

**Material Authenticity:** Authentic digital painting techniques - no photo overlays, hand-painted texture rendering, brush-based atmospheric effects

**Period Consistency:** All elements reflect 2000s-2020s digital fantasy art standards with steampunk aesthetic integration

------

## 5) Wardrobe, Props & Setting Conventions

**Adult Masculine:**

- Primary: Neo-Victorian coat with brass mechanical augments, leather harness with gear accessories, modified waistcoat with impossible pockets
- Secondary: Adventurer's outfit - practical leather jacket with steam vents, brass-buttoned shirt, mechanical arm attachments
- Tertiary: Engineer's gear - protective leather apron with built-in tools, brass goggles with multiple lenses

**Adult Feminine:**

- Primary: Modified Victorian dress with mechanical bustle, brass corset with functional gears, leather accessories with steam power
- Secondary: Adventurer's ensemble - practical split skirt with gear trim, modified bodice with mechanical elements, brass jewelry
- Tertiary: Engineer's attire - streamlined dress with tool integration, protective leather elements, functional mechanical accessories

**Fabric Behavior:**

- Heavy leather: Matte texture with brass stud highlights, crease shadows 40% darker
- Brass/copper: Specular highlights 95% value, oxidation patina in shadows
- Steam-resistant fabrics: Slight sheen, warm color shifts near steam sources

**Accessory Cap:** Elaborate (3-4 items) - fantastical integration essential

- Brass goggles with impossible lens arrays (multiple magnification elements)
- Mechanical limb enhancements (gear-driven joints, steam-powered mechanisms)
- Technical weapons (brass ray guns, gear-blade combinations, impossible devices)
- Neo-Victorian jewelry with functional elements (gear-work necklaces, compass rings)

**Color Palette:**

- Dominant: Brass (#B8860B), Copper (#B87333), Bronze (#CD7F32)
- Accent: Deep burgundy (#800020), Forest green (#228B22), Midnight blue (#191970)
- Atmospheric: Golden steam (#FFD700 at 30% opacity), Blue shadows (#4682B4 at 40%)

**Wardrobe Variation:** Cycle through adventurer, engineer, and aristocrat neo-Victorian variants with different mechanical augmentations

**Props (≤2):**

```yaml
steampunk_fantasy_hero:
  - impossible_weapon: "brass ray-gun with visible gear mechanism, steam exhaust ports, 25cm length"
  - mechanical_device: "handheld control panel with moving gears, glowing indicators, 15cm diameter"
  - fantastical_tool: "multi-function brass instrument, impossible mechanical complexity"
  
steampunk_fantasy_micro:
  - gear_pendant: "working mechanism visible, 5cm diameter, brass construction"
  - steam_vial: "glowing liquid, brass cap, 8cm length"
  - mechanical_compass: "multiple needles, impossible readings, ornate brass case"
```

**Coherence Filter:** All elements support fantastical steampunk adventure aesthetic; no purely historical accuracy required - imagination encouraged

------

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "photorealistic", "documentary photography", "historical accuracy without fantasy"
- "modern technology without Victorian aesthetic", "digital photography effects", "Instagram filters"
- "flat lighting", "minimal detail", "realistic proportions only"
- "copyrighted steampunk franchises", "recognizable character elements", "trademarked designs"

**✅ Canvas Positives:**

- "exactly 2:3 ratio", "recomposed for adventure poster format"
- "digital painted fantastical integration", "painterly brush strokes visible"
- "brass atmospheric glow 3000-3500K", "heroic proportions 105-110%"
- "imaginative mechanical elements 30-40% integration", "neo-Victorian adventure aesthetic"
- "original steampunk character design", "unique fantastical technology"

**Vocabulary Warnings:** Avoid "realistic," "historically accurate," "documentary" (incompatible with fantastical enhancement); avoid "copyrighted characters," "franchise elements" (IP violation risk)

------

## 7) Composition & Lighting Patterns

**PORTRAIT RATIO COMPOSITION (2:3):**

- Vertical emphasis with subject dominance ≥70%
- Dynamic action framing - subject positioned for movement and energy
- Heroic staging - subject elevated or empowered position

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Dramatic low angle or dynamic three-quarter view for heroic impact
- **Figure:Ground:** 65% subject with mechanical elements, 35% fantastical environment
- **Density:** 75% coverage - rich detail with atmospheric breathing room
- **Lighting Logic:** Multi-source fantastical lighting - brass glow, steam illumination, magical energy sources
- **Detail:Negative Space:** 70% detailed rendering, 30% atmospheric fade areas

**Environmental Elements:**

- Fantastical Victorian architecture (impossible clockwork buildings, brass spires)
- Imaginative machinery (floating gear platforms, steam-powered impossible devices)
- Alternative history atmosphere (airships in distance, mechanical cities, brass sky)

**REQUIRED ANCHORS:**

- **Surface Context:** Digital art canvas optimized for screen display and poster printing
- **Frame/Band:** OMIT - no decorative borders (modern fantasy art convention)
- **Production Context:** Digital painting workflow with layer-based rendering, suitable for gallery print or digital portfolio
- **Ratio Enforcement:** Composition specifically designed for 2:3 adventure poster format with dynamic subject placement

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Allow (optional for poster variant)

**If Typography Included:**

**Ratio-Appropriate Zones:**

- Top 15%: Title/character name placement potential
- Bottom 20%: Subtitle/tagline zone
- Integrated with composition: Technical labels for mechanical elements

**Copy Limits:**

- ≤6 words per line
- Character name: 1-3 words maximum
- Tagline: ≤7 words
- No extensive body copy

**Period-Appropriate Typography:**

- Neo-Victorian decorative fonts with steampunk flair
- Integration with brass/copper color scheme
- **Font Recommendation:** "Closest Google Font: Cinzel (neo-Victorian serif, 90% match). Alternative: Playfair Display. Better: Custom steampunk display fonts like Gaslight or Airship"

**Format-Specific Rules:**

- Character poster mode: Name prominent, heroic presentation
- Concept art mode: Technical annotations, mechanical labels
- Gallery print mode: Minimal or no text, pure visual focus

**Historical Accuracy:** Typography reflects contemporary steampunk aesthetic (2000s-2020s), not historical Victorian

**Production Method Integration:** Digital typography with brass texture overlay, gear ornamental elements, steam effect integration

---

# Gothic Ink Wash Portrait Style (Steampunk Dark Romanticism)

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio
- **Style over likeness:** Likeness via atmospheric rendering with Gothic mood enhancement
- **Technical Measurement Authority:** Quantitative specifications for wash density, contrast ratios, shadow percentages override descriptive language
- **Face-Treatment Flag:** `brush-wash` - Controlled ink wash with selective detail preservation in facial features, atmospheric blending in shadows, dramatic chiaroscuro effects
- **Pose Flag:** `psychological-tension` - Dramatic Gothic positioning with mysterious industrial interaction
- **Canvas Control Flag:** `adaptive-extend` - Creative extension using atmospheric ink wash techniques
- **Material authenticity:** Authentic ink wash on paper with water-based blending, no digital effects
- **Period Production Authenticity:** Gothic Revival era (1840-1910) ink wash illustration methods with romantic atmosphere
- **Quantifiers authoritative:** Wash opacity percentages, contrast measurements, shadow depth specifications are targets
- **Text policy:** Only render if Section 8 authorizes
- **Safety/IP:** No nudity/gore; original Gothic steampunk interpretation
- **Composition boundaries:** No frames outside canvas; atmospheric edges part of composition

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** (Gothic portrait format) - ignore source image dimensions completely
- Redraw subject entirely from scratch in **Gothic steampunk ink wash style (1840s-1910s Gothic Revival)** for **atmospheric dark romantic portrait reproduction**
- Preserve likeness through **dramatic chiaroscuro** with facial features maintained through selective detail preservation, atmospheric mood dominates overall composition
- **IP Safeguard Declaration:** Create original Gothic steampunk character with dark Victorian romantic aesthetic. Include mysterious industrial elements, Gothic costume details, and atmospheric mechanical props. No copyrighted Gothic literature characters or modern horror elements
- **Face-Treatment Flag:** `brush-wash`
- **Pose Flag:** `psychological-tension`
- **Canvas Control Flag:** `adaptive-extend`
- **Style Dominance:** Gothic atmospheric mystery and dramatic shadow play supersede photographic clarity while preserving essential facial likeness
- **Mode Selector:** Gothic romantic illustration / Dark Victorian art print

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO:** `3:4` (Gothic portrait / dark romantic illustration format)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with atmospheric ink wash elements
- **Spatial Allocation:** Subject positioned with 15-25% headroom, dramatic off-center placement for Gothic tension
- **Background Treatment:** Extend using atmospheric ink washes, mysterious industrial shadows, Gothic architectural elements fading into darkness
- **Format Justification:** 3:4 ratio optimal for Victorian Gothic illustration and dark romantic portraiture (1840-1910)

------

## 3) Style Context & Material Authenticity

**Artistic Style:** Gothic steampunk ink wash capturing atmospheric mystery and industrial Gothic darkness of Victorian dark romanticism (1840s-1910s) with selective detail preservation

**Medium/Production Method:**

- Water-based ink wash on heavyweight paper
- Brush application with controlled blending
- Selective detail rendering in facial features
- Atmospheric wash gradation in backgrounds
- Dramatic shadow pooling with ink concentration
- Sepia or black ink with water dilution 10-90% opacity

**Thematic Purpose:** Gothic romantic illustration emphasizing industrial mystery, dark Victorian atmosphere, and steampunk melancholy for collectors of atmospheric dark art

**Hallmark Motifs:**

- Dramatic chiaroscuro with 70-80% shadow coverage
- Selective facial detail preservation (eyes, key features rendered with 60-80% detail retention)
- Atmospheric ink wash backgrounds (20-40% opacity gradations)
- Gothic industrial elements emerging from shadows
- Mysterious mechanical apparatus suggestion (40-60% visibility)

**Period Framing:** Gothic Revival industrial period (1840-1910), influenced by Romantic movement darkness and Victorian Gothic literature

**Tone Tag:** Mysteriously atmospheric, dramatically shadowed, romantically dark, industrially Gothic, hauntingly beautiful

**Production Era Authenticity:** Traditional ink wash techniques - brush-loaded application, water dilution control, paper absorption effects, atmospheric blending

------

## 4) Technical Method & Mark-Making

**Ink Wash Specifications:**

- **Facial rendering:** 60-80% detail preservation through controlled wash density, features emerge from atmospheric darkness
- **Shadow areas:** 70-90% opacity ink wash, dramatic pooling in non-essential areas
- **Highlight preservation:** 10-20% of composition remains pure white paper
- **Mid-tone gradation:** 8-12 distinct tonal values through dilution control

**Brush Application Measurements:**

- **Detail brush:** 2-4mm width for facial features, precise line control
- **Wash brush:** 15-30mm width for atmospheric effects, fluid blending
- **Dry brush technique:** 40-60% coverage for textural industrial elements
- **Wet-on-wet blending:** Atmospheric transitions with 30-50% edge softness

**Chiaroscuro Specifications:**

- **Light source:** Single dramatic directional light, 80% intensity
- **Shadow depth:** Deep blacks 90-100% ink concentration
- **Atmospheric haze:** 20-40% opacity wash creating Gothic mood
- **Contrast ratio:** 1:8 minimum (highlights to shadows)

**Detail Hierarchy:**

- **Facial features:** Maximum preservation - eyes, nose, mouth rendered with selective precision
- **Costume elements:** 50-70% visibility through atmospheric wash
- **Industrial props:** 40-60% suggestion emerging from shadows
- **Background:** 20-40% atmospheric indication, mysterious depth

**Pose Anchors:**

- **Head tilt:** Dramatic 20-35° angles for Gothic tension
- **Shoulder rotation:** 25-45° off-axis for mysterious positioning
- **Weight distribution:** Asymmetric 70/30 creating psychological unease
- **Hand positions:** Dramatic gestures interacting with shadow play, mysterious object manipulation

**Scale Hierarchy:** Subtle elongation acceptable (105-115% vertical extension) for Gothic atmosphere

**Material Authenticity:**

- Genuine ink wash on paper, water-based blending
- No digital gradients or airbrush effects
- Authentic brush texture and water bloom patterns

**Period Consistency:** All elements reflect 1840-1910 Gothic Revival illustration techniques with steampunk industrial integration

------

## 5) Wardrobe, Props & Setting Conventions

**Adult Masculine:**

- Primary: Gothic Victorian coat with brass industrial fastenings, high collar with mysterious accessories, dark dramatic layers
- Secondary: Industrial mourning attire - black leather with brass details, protective work clothing with Gothic elements
- Tertiary: Mysterious engineer costume - dark workshop attire with occult-looking technical apparatus

**Adult Feminine:**

- Primary: Gothic Victorian dress with industrial corsetry, dramatic high neck with brass choker, flowing dark fabrics
- Secondary: Widow's attire with mechanical modifications - black dress with brass mourning jewelry, industrial veil elements
- Tertiary: Dark laboratory costume - Victorian dress with mysterious technical accessories, occult scientific elements

**Fabric Rendering Through Ink Wash:**

- **Heavy fabrics:** Dense 70-90% opacity wash with selective highlights
- **Lace/delicate elements:** 30-50% opacity with atmospheric blending
- **Leather:** Deep blacks 85-95% with sharp highlight edges
- **Brass/metal:** Reserved highlights (pure white) against dark backgrounds

**Accessory Cap:** Elaborate (3-4 items) - Gothic steampunk integration

- Gothic jewelry with industrial elements (brass crucifix with gears, mourning lockets with mechanical interior)
- Mysterious technical apparatus (occult-looking scientific instruments, dark brass devices)
- Victorian mourning accessories with steampunk modification (black lace with brass elements)
- Industrial Gothic adornments (gear brooches, mysterious mechanical pendants)

**Color Palette:**

- **Primary ink:** Black or sepia (rich brown)
- **Wash dilution:** 10-90% opacity range
- **Highlight areas:** Pure white paper (10-15% of composition)
- **Shadow pools:** 90-100% ink concentration (60-70% of composition)

**Wardrobe Variation:** Cycle through Gothic mourning, mysterious engineer, and dark romantic attire with industrial Victorian elements

**Props (≤2):**

```yaml
gothic_steampunk_hero:
  - mysterious_apparatus: "occult-looking scientific device, brass with dark patina, partially shadowed 40-60% visibility"
  - gothic_instrument: "Victorian medical/scientific tool with sinister appearance, 50-70% illumination"
  - industrial_artifact: "mysterious mechanical object emerging from shadows, dramatic lighting"

gothic_steampunk_micro:
  - brass_key: "ornate Victorian key with mysterious purpose, high contrast rendering"
  - dark_vial: "scientific vessel with unknown contents, atmospheric lighting"
  - occult_gear: "mechanical component with mysterious markings, selective detail"
```

**Coherence Filter:** All elements support Gothic industrial mystery aesthetic with dramatic atmospheric rendering

------

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "bright cheerful lighting", "high-key illumination", "even exposure"
- "photographic clarity", "digital gradients", "airbrush effects"
- "complete facial detail without atmosphere", "lacking shadow mystery", "conventional portrait lighting"
- "modern horror elements", "copyrighted Gothic characters", "generic darkness"

**✅ Canvas Positives:**

- "exactly 3:4 ratio", "recomposed for Gothic portrait format"
- "dramatic chiaroscuro 70-80% shadow coverage", "selective facial detail preservation 60-80%"
- "authentic ink wash 10-90% opacity range", "atmospheric blending with paper texture"
- "1840-1910 Gothic Revival authenticity", "Victorian industrial mystery integration"
- "brush-loaded atmospheric effects", "water bloom patterns", "controlled wash gradation"

**Vocabulary Warnings:** Avoid "bright," "cheerful," "clear" (incompatible with Gothic atmosphere); avoid "generic horror," "modern darkness" (not period Gothic aesthetic)

------

## 7) Composition & Lighting Patterns

**PORTRAIT RATIO COMPOSITION (3:4):**

- Vertical emphasis with subject dominance ≥65%
- Dramatic off-center positioning for Gothic psychological tension
- Mysterious staging with atmospheric shadow integration

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Dramatic angles creating psychological unease
- **Figure:Ground:** 65% subject emerging from shadows, 35% atmospheric darkness
- **Density:** 75% coverage - heavy shadows with strategic light preservation
- **Lighting Logic:** Single dramatic source from side/above, creating deep cast shadows and Gothic mood
- **Detail:Negative Space:** 40% selective detail (facial features, key costume elements), 60% atmospheric wash and shadow mystery

**Environmental Elements:**

- Gothic industrial architecture (shadowy Victorian machinery, mysterious mechanical environments)
- Atmospheric smoke/steam effects (20-30% opacity wash)
- Dark romantic settings (abandoned workshops, mysterious laboratories, Gothic industrial spaces)

**REQUIRED ANCHORS:**

- **Surface Context:** Heavyweight watercolor or illustration paper with absorbent quality for ink wash
- **Frame/Band:** OMIT - no decorative borders (atmospheric edges fade naturally)
- **Production Context:** Traditional ink wash on paper, brush application, water-based blending technique
- **Ratio Enforcement:** Composition specifically designed for 3:4 Gothic portrait format

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Allow (optional Gothic labeling)

**If Typography Included:**

**Ratio-Appropriate Zones:**

- Integrated with atmospheric shadows
- Typography emerges from darkness like subject
- No rigid placement zones

**Copy Limits:**

- ≤6 words total if included
- Single dramatic phrase or title
- Gothic romantic language

**Period-Appropriate Typography:**

- Gothic Revival decorative fonts
- Hand-lettered atmospheric integration
- **Font Recommendation:** "Closest Google Fonts: Cinzel Decorative for Gothic capitals, UnifrakturMaguntia for blackletter drama, MedievalSharp for industrial Gothic. Better: Custom Gothic Revival display fonts with Victorian industrial elements"

**Format-Specific Rules:**

- Gallery art mode: Minimal text, atmospheric focus
- Gothic illustration mode: Dramatic title integration with ink wash
- Museum print: Omit text entirely

**Historical Accuracy:** Typography reflects 1840-1910 Gothic Revival aesthetic with industrial Victorian integration

**Production Method Integration:** Text rendered through ink wash technique, integrated with atmospheric shadow effects, hand-lettered quality

---

# Physical Mixed Media Assemblage Portrait Style

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio
- **Style over likeness:** Likeness via photographic base integration with physical materials
- **Technical Measurement Authority:** Material thickness measurements, shadow depth specifications, adhesive edge visibility override descriptive language
- **Face-Treatment Flag:** `photo-illustration-collage` - Photographic portrait base with physical material assemblage overlay, maintaining facial recognition through dimensional layering
- **Pose Flag:** `gestural-fluid` - Natural photographic pose adapted to assemblage environment
- **Canvas Control Flag:** `adaptive-extend` - Creative extension using physical material techniques
- **Media Hybrid Flag:** `photo-illustration-collage` - Mandatory integration of photographic and physical elements
- **Material authenticity:** Genuine physical assemblage with real dimensional materials, authentic aging, patina, and wear
- **Period Production Authenticity:** Contemporary assemblage/collage art techniques (1960s-present) with visible construction process
- **Quantifiers authoritative:** Shadow depth measurements, material thickness, adhesive visibility specifications are targets
- **Text policy:** Only render if Section 8 authorizes
- **Safety/IP:** No nudity/gore; original assemblage using non-copyrighted materials
- **Composition boundaries:** No frames outside canvas; dimensional edges natural to assemblage process

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **4:5 ratio** (contemporary art print format) - ignore source image dimensions completely
- Redraw subject entirely from scratch in **physical mixed media assemblage style (1960s-present)** for **contemporary collage art reproduction**
- Preserve likeness through **photographic portrait base** with authentic physical steampunk materials assembled on top - functional mechanical components, Victorian industrial apparatus, scientific instruments with real dimensional depth integrated into costume/environment
- **IP Safeguard Declaration:** Create original physical assemblage artwork using photographically-based steampunk portrait. Subject must wear authentic Victorian industrial costume (brass goggles, mechanical accessories, technical apparatus integrated into clothing). Use original photographic portrait as base with functional steampunk materials showing purpose and mechanical context
- **Face-Treatment Flag:** `photo-illustration-collage`
- **Pose Flag:** `gestural-fluid`
- **Canvas Control Flag:** `adaptive-extend`
- **Media Hybrid Flag:** `photo-illustration-collage`
- **Style Dominance:** Functional steampunk integration and authentic material properties supersede decorative elements
- **Mode Selector:** Contemporary steampunk assemblage art / Industrial portrait collage

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO:** `4:5` (modern assemblage art format)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with physical material assemblage
- **Spatial Allocation:** Photographic portrait centered with 10-15% margin, steampunk materials integrated into portrait composition rather than peripheral decoration
- **Background Treatment:** Extend using aged technical papers, patent diagrams, scientific documents as substrate rather than decorative backdrop
- **Format Justification:** 4:5 ratio optimal for contemporary steampunk assemblage art presentation and gallery display (1960s-2025)

------

## 3) Style Context & Material Authenticity

**Artistic Style:** Physical mixed media assemblage combining photographic steampunk portrait base with functional mechanical components and Victorian industrial apparatus, capturing tactile construction process of contemporary collage art with emphasis on purposeful steampunk integration (1960s-present)

**Medium/Production Method:**

- **Steampunk photographic base:** Portrait showing subject wearing Victorian industrial costume (brass goggles, mechanical corsetry, technical apparatus)
- **Functional mechanical integration:** Gears connected as working systems, steam gauges with visible connections, pressure valves with piping
- **Industrial apparatus:** Scientific instruments, measuring devices, technical tools showing purpose and context
- **Dimensional assembly:** 3-5mm material thickness creating authentic shadows and mechanical depth
- **Technical documentation:** Victorian patent papers, engineering diagrams, scientific manuscripts as substrate
- **Environmental context:** Workshop/laboratory atmosphere suggested through technical ephemera

**Thematic Purpose:** Contemporary assemblage art exploring steampunk themes through physical material combination and dimensional construction for gallery exhibition and collector acquisition

**Hallmark Motifs:**

- Steampunk portrait base (60-70% of composition) showing subject in Victorian industrial costume with brass goggles, mechanical corsetry, technical apparatus
- Functional mechanical systems (8-15 connected components) - gears with visible drive trains, steam gauges with piping, pressure systems
- Industrial apparatus integration - scientific instruments, measuring devices, technical tools showing purpose and mechanical context
- Victorian technical documentation (patent diagrams, engineering drawings, scientific manuscripts) as authentic substrate
- Mixed material textures creating workshop/laboratory atmosphere with functional steampunk integration

**Period Framing:** Contemporary assemblage art movement (1960s-present), influenced by Robert Rauschenberg, Joseph Cornell, and steampunk maker culture

**Tone Tag:** Physically constructed, authentically aged, dimensionally layered, industrially romantic, tactilely engaging

**Production Era Authenticity:**

- Contemporary assemblage studio methods
- Hand-collection and curation of materials
- Physical construction with adhesives and mounting techniques
- Patina development through authentic aging processes

------

## 4) Technical Method & Mark-Making

**Photographic Base Specifications:**

- **Portrait foundation:** 60-70% of composition, clear facial features visible
- **Photographic quality:** Slight vintage treatment, may show age or processing artifacts
- **Integration method:** Physical mounting on substrate, visible edges 1-2mm thickness

**Physical Material Specifications:**

- **Metal components:** 8-15 brass/copper gears, 10-25mm diameter, authentic patina and oxidation
- **Paper elements:** Aged vintage papers, 0.2-0.5mm thickness, authentic yellowing and foxing
- **Fabric integration:** Leather, lace, or period textiles with realistic fiber texture
- **Dimensional depth:** 3-8mm material thickness creating authentic cast shadows

**Construction Technique Markers:**

- **Adhesive visibility:** Glue edges, tape residue, mounting evidence 15-25% of edges
- **Shadow casting:** Authentic directional shadows 2-4mm depth from dimensional elements
- **Material boundaries:** Sharp edges where materials meet, no seamless blending
- **Surface irregularity:** Bumps, wrinkles, raised areas from physical assembly

**Aging and Patina Specifications:**

- **Metal oxidation:** Green/blue-green copper patina, 20-40% coverage
- **Paper aging:** Brown/yellow foxing, edge wear, authentic vintage discoloration
- **Adhesive aging:** Yellowed tape, glue discoloration, mounting stains
- **Surface wear:** Scratches, dents, handling marks from actual use

**Lighting Integration:**

- **Multiple sources:** Different lighting from various photographic/material origins
- **Inconsistent shadows:** Directional conflicts from assembled disparate elements
- **Surface reflection:** Metallic components showing authentic light reflection patterns
- **Depth indication:** Clear shadow casting proving dimensional construction

**Pose Anchors:**

- **Head position:** Natural photographic pose, unforced positioning
- **Material integration:** Physical elements respond to underlying photographic form
- **Dimensional adaptation:** Materials follow and enhance portrait contours
- **Construction evidence:** Assembly process visible in final composition

**Scale Hierarchy:** Photographic proportions maintained as base, materials added proportionally

**Material Authenticity:**

- Genuine physical materials with authentic aging
- Real patina development processes
- Actual wear patterns from handling and time
- No digital simulation of material properties

**Period Consistency:** All elements reflect contemporary assemblage art practices (1960s-2025) with authentic construction techniques

------

## 5) Wardrobe, Props & Setting Conventions

**Photographic Portrait Base:**

- **Adult Masculine:** Portrait wearing steampunk industrial costume - brass goggles, technical vest with gauges, mechanical accessories integrated into clothing
- **Adult Feminine:** Portrait in Victorian industrial dress - brass corsetry with functional elements, technical jewelry, mechanical hat or headpiece
- **Costume integration:** Subject must appear as Victorian inventor/engineer with functional steampunk apparatus

**Functional Mechanical Integration:**

- **Connected gear systems:** Gears showing mechanical relationships, drive trains, working connections rather than random placement
- **Industrial apparatus:** Steam gauges with visible piping, pressure valves with connections, technical instruments showing purpose
- **Scientific equipment:** Measuring devices, optical instruments, mechanical calculators integrated contextually
- **Workshop environment:** Technical tools and apparatus suggesting inventor's laboratory or engineering workspace

**Material Rendering Authenticity:**

- **Functional context:** All mechanical elements appear to serve purpose in larger system
- **Industrial atmosphere:** Workshop/laboratory environment through technical documentation and apparatus
- **Costume integration:** Steampunk elements as part of subject's attire and professional identity
- **Environmental coherence:** Technical papers and instruments creating inventor/engineer context

**Accessory Cap:** Elaborate (8-15 items) - functional steampunk apparatus essential

- Brass goggles with multiple lenses and adjustment mechanisms (worn or hanging)
- Steam pressure gauges with visible piping connections showing functional purpose
- Mechanical tools and scientific instruments contextually integrated into portrait
- Technical apparatus suggesting inventor/engineer profession and workshop environment

**Props (≤2):**

```yaml
steampunk_assemblage_hero:
  - functional_gauge_system: "steam pressure gauge with connecting pipes, brass construction, 30-40mm diameter, showing mechanical purpose"
  - technical_instrument_cluster: "optical device or measuring instrument with brass fittings, suggesting scientific/engineering work"
  - mechanical_apparatus: "working mechanism visible, gear connections apparent, functional steampunk device"

steampunk_assemblage_micro:
  - brass_connection: "mechanical coupling or valve, 15-20mm, showing purpose in larger system"
  - technical_component: "precision instrument part, suggesting measurement or calculation function"
  - industrial_element: "small apparatus with visible mechanical purpose, workshop context"
```

**Coherence Filter:** All physical materials show functional steampunk integration, creating inventor/engineer workshop atmosphere with authentic construction evidence

------

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "decorative gears", "random mechanical elements", "non-functional steampunk props"
- "wooden frame substrate", "mounting board", "craft project presentation", "bulletin board aesthetic"
- "seamless blending", "photorealistic integration", "digital filter effects"
- "hobby craft construction", "decorative assemblage", "non-contextual mechanical elements"

**✅ Canvas Positives:**

- "exactly 4:5 ratio", "recomposed for assemblage art format"
- "photographic portrait base 60-70% visible", "authentic physical materials"
- "dimensional depth 3-8mm", "real shadows from layered construction"
- "genuine patina and aging patterns", "visible construction techniques"
- "authentic material boundaries", "adhesive evidence", "mounting artifacts"

**Vocabulary Warnings:** Avoid "seamless," "smooth," "digital blending" (incompatible with physical assemblage); avoid "new materials," "perfect condition" (not authentic assemblage aesthetic)

------

## 7) Composition & Lighting Patterns

**PORTRAIT RATIO COMPOSITION (4:5):**

- Vertical emphasis with photographic portrait dominance ≥60%
- Physical materials extending and enhancing portrait rather than obscuring
- Dimensional construction visible through authentic shadows and depth

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Photographic base perspective maintained, materials adapted to portrait form
- **Figure:Ground:** 65% portrait with integrated materials, 35% substrate and background materials
- **Density:** 80% coverage with dimensional materials while preserving portrait clarity
- **Lighting Logic:** Mixed source lighting from different material origins creating authentic inconsistencies
- **Detail:Negative Space:** 70% material integration, 30% breathing space showing substrate

**Environmental Elements:**

- Aged substrate backgrounds (vintage papers, metal sheets, fabric backing)
- Physical texture surfaces showing authentic wear and aging
- Mixed material foundations supporting dimensional construction

**REQUIRED ANCHORS:**

- **Surface Context:** Heavy art paper or canvas substrate capable of supporting dimensional materials (no wooden frames or mounting boards)
- **Frame/Band:** OMIT entirely - no wooden frames, mounting hardware, or display board elements
- **Production Context:** Contemporary assemblage studio techniques, hand-assembly on art substrate, authentic material integration without craft presentation
- **Ratio Enforcement:** Composition designed for 4:5 gallery presentation with sophisticated assemblage construction

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Allow (optional assemblage text elements)

**If Typography Included:**

**Ratio-Appropriate Zones:**

- Integrated as physical paper elements within assemblage
- Vintage document fragments with authentic aging
- Technical diagrams with period-appropriate text

**Copy Limits:**

- Text appears on authentic aged materials only
- Fragmentary text acceptable (torn documents, partial visibility)
- No modern digital typography overlay

**Period-Appropriate Typography:**

- Authentic vintage document text
- Technical drawing annotations
- Patent document fragments
- **Material Integration:** "Text must appear on physically authentic aged paper elements, not digital overlay. Use vintage document fragments, technical diagrams, or patent papers with period-appropriate typography showing authentic aging and wear"

**Format-Specific Rules:**

- Gallery assemblage mode: Text only on authentic material fragments
- Contemporary art mode: Minimal text, focus on material construction
- Mixed media integration: Typography as collaged physical element

**Historical Accuracy:** Text elements reflect authentic document sources with period-appropriate aging and wear

**Production Method Integration:** Text appears only on genuine aged paper materials physically mounted in assemblage, showing authentic foxing, wear, and construction evidence

----

# Steampunk Tintype Portrait Style (Victorian Photography with Industrial Elements)

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio
- **Style over likeness:** Likeness via authentic Victorian photographic rendering
- **Technical Measurement Authority:** Quantitative specifications for grain, exposure, plate characteristics override descriptive language
- **Face-Treatment Flag:** `silver-halide-grain` - Authentic wet plate collodion rendering with characteristic grain pattern, limited dynamic range 4-5 stops, ethereal soft focus quality
- **Pose Flag:** `frontal-rigid` - Formal Victorian portrait pose required due to historical exposure time constraints
- **Canvas Control Flag:** `strict-reframe` - Recompose for Victorian photographic plate conventions
- **Material authenticity:** Authentic wet plate collodion characteristics, tintype metal texture, daguerreotype mirror-like surface
- **Period Production Authenticity:** 1850s-1890s wet plate photography methods with characteristic imperfections
- **Quantifiers authoritative:** Exposure time implications, tonal range 4-5 stops, grain size measurements are targets
- **Text policy:** Only render if Section 8 authorizes
- **Safety/IP:** No nudity/gore; no modern elements; authentic Victorian photography aesthetic only
- **Composition boundaries:** No frames outside canvas; period-appropriate presentation only

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** (carte de visite format) - ignore source image dimensions completely
- Redraw subject entirely from scratch in **Victorian wet plate photography style with steampunk elements (1855-1890s)** for **steampunk tintype portrait reproduction**
- Preserve likeness through **authentic photographic rendering** with characteristic wet plate collodion ethereal quality enhanced by Victorian industrial/steampunk costume and apparatus
- **IP Safeguard Declaration:** Create period-authentic Victorian photographic portrait WITH steampunk elements. Subject must wear Victorian-era steampunk costume (brass goggles, mechanical accessories, technical apparatus). Include period-appropriate scientific instruments and industrial props authentic to 1850s-1890s technology
- **Face-Treatment Flag:** `silver-halide-grain`
- **Pose Flag:** `frontal-rigid`
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Authentic Victorian photographic characteristics with steampunk costume/props integration - embrace historical photography limitations while showcasing industrial-era innovation
- **Mode Selector:** Steampunk historical photograph / Victorian inventor portrait

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO:** `3:4` (carte de visite / cabinet card format)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** recompose-entirely for Victorian portrait photography conventions
- **Spatial Allocation:** Subject centered with minimal headroom (5-10%), tight formal framing typical of 1860s-1890s portraits
- **Background Treatment:** Simple dark backdrop or minimal Victorian studio setting, avoid environmental complexity
- **Format Justification:** 3:4 ratio matches standard Victorian carte de visite (2.5"x4") and cabinet card (4.25"x6.5") formats

------

## 3) Style Context & Material Authenticity

**Artistic Style:** Victorian wet plate collodion photography with steampunk costume and industrial apparatus, capturing authentic tintype/daguerreotype aesthetic of 1850s-1890s portrait photography combined with Victorian-era scientific instruments and mechanical accessories

**Medium/Production Method:**

- **Tintype (Ferrotype):** Wet plate collodion on thin enameled iron sheet, creates underexposed negative appearing as positive on dark backing
- **Daguerreotype:** Direct positive on silver-plated copper, mirror-like surface, laterally reversed
- **Wet Collodion Process:** Glass plate coated with collodion emulsion, exposed while wet, developed immediately with characteristic ethereal rendering

**Thematic Purpose:** Authentic historical portrait photography documenting Victorian-era inventors, engineers, and scientists with their industrial apparatus; timeless archival quality showcasing early steampunk aesthetic (before the term existed)

**Hallmark Motifs:**

- Monochromatic sepia tones (2700-3200K warmth) or neutral black/white
- Limited dynamic range (4-5 stops maximum)
- Ethereal soft focus quality (light hair appears dark, blue eyes intensely bright)
- Characteristic grain pattern (0.1-0.3mm silver halide crystals visible)
- Subtle vignetting (10-20% edge darkening)
- Mirror-like reflective quality (daguerreotype) or matte metal surface (tintype)

**Period Framing:** Victorian photography era (1850-1900), American and European portrait studio tradition

**Tone Tag:** Hauntingly timeless, solemnly dignified, ethereally preserved, historically authentic

**Production Era Authenticity:**

- Wet plate preparation on-site in portable darkroom
- Exposure times 3-60 seconds requiring head restraint devices
- Chemical development immediately after exposure
- Fixing in sodium thiosulfate solution
- Optional hand-tinting with transparent oils

**Innovation Line:**

- **Lighting:** Daylight studio with diffusion scrims, no artificial lighting
- **Format:** 3:4 ratio carte de visite or cabinet card size
- **Processing:** Wet plate collodion immediate development
- **Collaboration:** Subject immobility required, photographer as chemical technician

------

## 4) Technical Method & Mark-Making

**Photographic Specifications:**

- **Camera:** Large format 4x5" or 8x10" view camera equivalent
- **Lens:** Petzval portrait lens f/3.5-f/5.6, characteristic swirly bokeh, soft vignetting
- **Film/Plate:** Wet collodion on iron (tintype) or silvered copper (daguerreotype), ISO equivalent 1-6
- **Exposure:** 5-30 second equivalent creating slight motion blur potential

**Tonal Range Measurements:**

- **Highlights:** Clipped at 95-100% (metallic shine for daguerreotype, matte white for tintype)
- **Shadows:** Crushed below 5-10% (metal showing through on tintype, mirror reflection on daguerreotype)
- **Mid-tones:** Compressed into 4-5 distinct values
- **Contrast:** High contrast with abrupt transitions between tones

**Grain Characteristics:**

- Silver halide crystal visibility: 0.1-0.3mm apparent size
- Random distribution pattern, more visible in mid-tones
- Slight directional streaking from collodion flow during coating

**Lighting Specifications:**

- **Primary:** Diffused north-facing daylight, 60-70% intensity
- **Fill:** Reflected daylight from white card, 20-30% intensity
- **Modeling:** Single directional source, creates dramatic shadow definition
- **Quality:** Soft due to large diffused source, harsh shadows from long exposure

**Processing Artifacts:**

- Chemical staining (5-10% of surface area)
- Uneven collodion coating (visible flow marks)
- Edge darkening/vignetting (15-25% intensity increase toward edges)
- Emulsion imperfections (1-3 visible spots per portrait)

**Pose Anchors:**

- **Head tilt:** 0-5° maximum (head brace required for long exposure)
- **Shoulder angle:** Minimal rotation, 5-10° maximum
- **Weight distribution:** Rigid seated or standing, 50/50 balance
- **Hand positions:** Resting on lap, holding chair back, completely still
- **Expression:** Neutral to slight severity (smiling causes blur)

**Scale Hierarchy:** True-to-life proportions, no idealization due to documentary nature

**Material Authenticity:**

- Metal plate texture visible through image (tintype)
- Mirror-like reflectivity (daguerreotype)
- Authentic wet plate collodion rendering characteristics

**Period Consistency:** All elements authentic to 1850-1900 photographic portrait conventions

------

## 5) Wardrobe, Props & Setting Conventions

**Adult Masculine:**

- Primary: Victorian formal suit with technical modifications - brass-buttoned waistcoat, leather work apron over formal wear, engineer's collar
- Secondary: Scientific expedition clothing - heavy wool jacket with brass instruments attached, leather tool harness
- Tertiary: Technical workshop attire - protective leather apron, rolled sleeves with brass arm guards

**Adult Feminine:**

- Primary: Victorian formal dress with industrial modifications - high-necked dress with brass fastenings, leather corset with technical apparatus
- Secondary: Scientific attire - modified dress for laboratory work, protective leather elements, brass jewelry with functional elements
- Tertiary: Engineering costume - practical Victorian dress with tool integration, brass goggles, mechanical accessories

**Fabric Behavior in Wet Plate Photography:**

- Dark fabrics: Appear nearly black, minimal detail
- Light fabrics: Can blow out to pure white
- Patterns: Often lost in tonal compression
- Velvet/Silk: Creates slight sheen in highlights

**Accessory Cap:** Elaborate (3-4 items) - steampunk/industrial elements essential for style

- Brass goggles (worn on head or around neck, period-accurate design)
- Technical instruments (compass, calipers, measuring devices)
- Pocket watch with exposed mechanism (brass chain visible)
- Scientific apparatus (small brass instruments, leather tool pouches)

**Color Palette:**

- Monochromatic sepia: warm brown tones (2700-3200K)
- Alternative: neutral black/white (daguerreotype)
- Optional hand-tinting: brass/copper elements highlighted with transparent oils, 20-30% opacity

**Wardrobe Variation:** Cycle through formal scientist, field engineer, and workshop inventor Victorian attire with steampunk accessories (1850-1890)

**Props (≤2):**

```yaml
steampunk_tintype_hero:
  - scientific_instrument: "brass microscope, telescope, or technical apparatus on table, period 1850-1890"
  - mechanical_device: "exposed gear mechanism, steam gauge, or precision tool in hand"
  - technical_book: "leather-bound scientific journal with brass clasps, visible on surface"
  
steampunk_tintype_micro:
  - brass_gear: "visible mechanical component, 3-6cm, attached to costume"
  - lens_apparatus: "monocle or magnifying glass with brass frame"
  - technical_badge: "engineer's insignia or scientific society emblem"
```

**Coherence Filter:** All elements authentic to 1850-1900 Victorian scientific/engineering professions - proto-steampunk aesthetic

------

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "unmodified framing"
- "digital clarity", "modern sharpness", "expanded dynamic range"
- "modern steampunk elements", "fantastical additions", "anachronistic costume"
- "color photography", "high contrast digital", "HDR effects"
- "perfect focus", "motion-free rendering", "contemporary retouching"

**✅ Canvas Positives:**

- "exactly 3:4 ratio", "recomposed for carte de visite format"
- "wet plate collodion authentic rendering", "silver halide grain 0.1-0.3mm"
- "4-5 stop dynamic range", "characteristic ethereal soft focus"
- "1855-1890 photographic authenticity", "tintype/daguerreotype aesthetic"
- "chemical processing artifacts", "period-appropriate imperfections"

**Vocabulary Warnings:** Avoid "sharp," "clear," "high-resolution" (incompatible with wet plate limitations); avoid "colorful," "vibrant" (monochromatic medium only)

------

## 7) Composition & Lighting Patterns

**PORTRAIT RATIO COMPOSITION (3:4):**

- Vertical emphasis with subject dominance ≥85%
- Tight formal framing typical of Victorian studio portraiture
- Centered composition with minimal environmental context

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Straight-on eye level, single point perspective
- **Figure:Ground:** 85% subject, 15% simple background
- **Density:** 40% coverage - significant negative space due to vignetting
- **Lighting Logic:** Single diffused daylight source, dramatic shadow modeling
- **Detail:Negative Space:** 50% visible detail (limited by exposure latitude), 50% tonal compression/vignetting

**Environmental Elements:**

- Simple painted backdrop (dark neutral or cloudy sky pattern)
- Minimal Victorian studio furniture (posing chair, column prop)
- Plain dark or medium toned background (avoids distracting detail)

**REQUIRED ANCHORS:**

- **Surface Context:** Metal plate (tintype) or silvered copper (daguerreotype) with characteristic reflectivity
- **Frame/Band:** Period-appropriate case presentation (optional) - leather or wood case with velvet lining for viewing
- **Production Context:** Wet plate collodion on metal substrate, chemical processing, studio daylight exposure
- **Ratio Enforcement:** Composition specifically designed for 3:4 Victorian photographic format

------

## 8) Typography & Text Integration (If Historically Present)

**Binary:** OMIT typography (pure photographic portrait)

**Historical Context:** Victorian photographs rarely included text within the image itself. Any labeling was external (studio stamps on card backing, handwritten notes on reverse).

**If Typography Required (exceptional cases):**

- Studio imprint on mount card (not on photograph itself)
- Embossed studio name on presentation case
- Handwritten identification on reverse (not visible in image)

**Format-Specific Rules:**

- Museum archival print: No text
- Historical reproduction: Studio information on separate mount
- Period presentation: Text only on case/frame exterior

**Historical Accuracy:** No text integration within photographic image - maintain pure Victorian portrait photography conventions