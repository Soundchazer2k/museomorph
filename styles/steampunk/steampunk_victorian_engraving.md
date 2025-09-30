---
id: steampunk_victorian_engraving
group: Steampunk
movement: Victorian Technical Illustration
artist: Steampunk Atelier
display_name: Steampunk Victorian Engraving Portrait
style_scope: movement
ratios:
  - '2:3'
ratios_status: provisional
ratios_notes: >
  Victorian scientific engravings were printed on tall 2:3 plates—keep that
  upright proportion for plate impressions and annotations.
modes:
  - Technical Illustration
safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect
about: >
  Victorian engravers etched burin lines into steel, turning inventors and
  apparatus into precise cross-hatched plates. This steampunk variant keeps the
  19th-century draftsmanship while threading in speculative gadgets and workshop
  ephemera.
hero_image: null
---

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
