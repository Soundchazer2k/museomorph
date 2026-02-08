---
id: example_style              # unique, lowercase, no spaces (e.g., "vermeer", "moebius")
group: "Collection Name"       # e.g., "Dutch Golden Age", "Modern Comics"
movement: "Movement / School"  # optional, e.g., "Optical Baroque Painting"
artist: "Artist Name"          # optional (leave if multi-artist movement)
display_name: "Display Name — Subtitle"
style_scope: single-artist      # or "movement" / "workshop"

ratios: ["1:1","3:4","4:3"]
ratios_status: provisional      # provisional | approved
ratios_notes: >
  One—two sentences explaining why these ratios are historically authentic.
modes: ["Mode A","Mode B"]

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:                 
  allowed: true
  max_subjects: 3
  layout_hint: "Primary left, secondary right"
  identity_priority: ["silhouette","gesture","face-proportions"]

hero_image: null               

about: >
  Short educational blurb (2—6 sentences). Explain historical
  authenticity, medium, and why the style matters.


composition_constraints:
  max_subjects: 1               # set to 1 for strict single-subject styles
  subject_interaction: allowed  # allowed | prohibited | required
  crowd_scenes: false           # flip to true if crowd tableaux are authentic
  animals_allowed: false        # enable if the style routinely depicts animals
  animal_types: ["domestic"]    # e.g., ["domestic","wild","mythical"]
  max_animals: 0                # raise when animals_allowed is true
  text_allowed: yes             # switch to no if typography is forbidden

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

---

# Universal Museum-Grade Prompt Framework v4.4 (NanoBanana Edition)

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Renderer Adaptation Mandate:** When target ratio unsupported by renderer, automatically apply nearest-match adaptation per Section 2.1.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Model may resist ratio instructions and default to non-standard outputs (e.g., 1632×640). Combat this through:
  - **Explicit ratio declaration** in multiple prompt locations (Section 1, Section 2, Section 6)
  - **Repetitive ratio reinforcement** using different phrasings
  - **Negative constraints** explicitly prohibiting unwanted ratios
  - **Compositional anchors** designed specifically for target ratio
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Technical Measurement Authority:** Quantitative specifications ("150% neck elongation", "3-5mm paint thickness") override descriptive language ("elongated", "thick paint").
- **Anatomical Proportion Validation:** Stylization must serve aesthetic refinement, not distortion. Measurements should enhance grace rather than create unnatural proportions.
- **Process-Over-Result Priority:** How materials are applied supersedes visual appearance descriptions.
- **Custom Flag Authorization:** Artist-specific flags permitted when standard options fail authenticity requirements.
- **Anti-Conventional Bias:** Authority to generate deliberately uncomfortable or challenging aesthetics when historically accurate.
- **Gender Expression Authority:** Preserve subject's presented gender identity through period-appropriate styling methods. Cross-mode consistency required.

- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`, `impasto-sculptural`, `mixed-media-linear`, `nervous-animated`, `oil-fat-over-lean`, `alla-prima-direct`, `glazing-layers-buildup`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`, `linear-anatomical-destruction`, `scratched-surface`, `interrupted-contour`, `wet-on-wet-bleed`, `dry-brush-control`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`, `lithographic-psychological`, `woodcut-primitive`, `four-color-process`, `registration-drift`, `ink-bleed-authentic`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`, `gold-leaf-application`, `tempera-egg-based`, `gold-ground-luminous`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`, `pixel-perfect-aliasing`, `palette-limited-8bit`, `sprite-grid-locked`, `halftone-newsprint`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`, `silver-halide-grain`, `contact-print-scale`, `darkroom-timing-marks`, `medium-format-compression`, `studio-strobe-modeling`
  - *Cultural Specific:* `brush-loaded-single-stroke`, `ink-gradation-natural`, `silk-scroll-tension`, `manuscript-scale-precision`, `washi-absorbency`, `venetian-canvas-prep`, `amate-bark-texture`, `miniature-detail-magnification`
  - *Revolutionary Techniques:* `comfort-violation-authorized`, `aesthetic-rebellion-required`, `conventional-beauty-prohibited`, `psychological-attack-mode`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`, `psychological-tension`, `contorted-psychological`, `anatomical-rebellion`, `cultural-traditional`, `hieratic-formal`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Material Physics Authority:** Substrate, tool, and binding agent specifications override aesthetic preferences.
- **Scale-Dependent Technique:** Viewing distance requirements affect brushwork precision and detail hierarchy.
- **Cultural Production Authenticity:** Indigenous and traditional methods take precedence over modern interpretations.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented gender identity with period-appropriate methods across all modes.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Mode Consistency Authority:** Subject's gender presentation and core characteristics must remain consistent across Portrait/Mythological/Religious/Drawing modes.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary, explanations, historical context, or any content beyond Section 8.

------

### Framework Sections

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[X:Y ratio]** - ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[X:Y]**. This is a hard requirement.
- Redraw in **[Style/Movement]** for **[exact format specification]**.
- Identity via silhouette/gesture/expression.
- **Gender Expression Mandate:** Preserve subject's presented gender identity through period-appropriate styling. Male subjects remain masculine across all modes, female subjects remain feminine across all modes.
- **IP Safeguard Declaration:** Create original designs avoiding copyrighted elements appropriate to chosen style category.
- Declare **Face-Treatment Flag** (mode-specific if applicable).
- Declare **Pose Flag** (mode-specific if applicable).
- Declare **Canvas Control Flag**.
- Optional **Media Hybrid Flag**.
- **Style Dominance line.**
- **Mode Selector** (panel, cover, poster, editorial, gallery, study, religious, scientific - specify which mode).
- **Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions.

------

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS (Native - No Adaptation Required):**

- ✅ `1:1` (square - 1024×1024)
- ✅ `2:3` (portrait - 832×1248)
- ✅ `3:2` (landscape - 1248×832)
- ✅ `3:4` (portrait - 864×1184)
- ✅ `4:3` (landscape - 1184×864)
- ✅ `4:5` (portrait - 896×1152)
- ✅ `5:4` (landscape - 1152×896)
- ✅ `9:16` (vertical - 768×1344)
- ✅ `16:9` (widescreen - 1344×768)
- ✅ `21:9` (ultra-wide - 1536×672)

**HISTORICAL/SPECIALTY RATIOS (Require Adaptation - See Section 2.1):**

- ⚠️ `3:5` → adapts to `3:4`
- ⚠️ `5:7` → adapts to `4:5`
- ⚠️ `3:10` (Chinese scroll vertical) → adapts to `2:3`
- ⚠️ `5:3` (panoramic) → adapts to `16:9`
- ⚠️ `10:3` (Chinese scroll horizontal) → adapts to `21:9`
- ⚠️ `2.5:3.5` (playing card) → adapts to `3:4`
- ⚠️ `2.75:3.75` (collectible card) → adapts to `3:4`
- ⚠️ `8.5:11` (US magazine/letter) → adapts to `3:4`
- ⚠️ `11:17` (tabloid magazine) → adapts to `2:3`
- ⚠️ `2.35:1` (cinemascope) → adapts to `21:9`

**MANDATORY RATIO SELECTION:** Choose one exact specification from supported ratios above. If style traditionally uses unsupported ratio, proceed to Section 2.1 for adaptation protocol.

**CANVAS RECOMPOSITION STRATEGY (Mode-specific where applicable):**

- **Ratio Status:** [native/adapted from X:Y - specify if adaptation applied]
- **Reframing Method:** [extend-background/recompose-entirely/crop-and-center]
- **Spatial Allocation:** Subject placement [specific position in new ratio]
- **Background Treatment:** [how to fill new canvas space]
- **Format Justification:** [why this ratio serves the style - include adaptation reasoning if applicable]
- **Mode-Specific Ratio Considerations:** [If multi-mode: specify which ratios apply to which modes]

------

### 2.1) Ratio Compliance & Renderer Adaptation

**TRIGGER:** This section applies ONLY when historical/specialty ratio requested but unsupported by NanoBanana renderer.

**ADAPTATION PROTOCOL:**

**1. Nearest Match Selection Rules:**

Preserve three critical factors when mapping unsupported ratios:

- **Orientation** (portrait/landscape/square)
- **Figure dominance intent** (tight framing vs environmental context)
- **Cultural viewing tradition** (scroll proportions, card formats, publication standards)

**2. Standard Adaptation Mappings:**

**Portrait Adaptations:**

- `3:5` → `3:4` (nearest portrait ratio, minimal vertical compression)
- `5:7` → `4:5` (elongated portrait preserved)
- `3:10` (Chinese vertical scroll) → `2:3` (preserves vertical emphasis, acknowledges extreme elongation loss)
- `2.5:3.5`, `2.75:3.75` (card formats) → `3:4` (maintains card portrait proportions)
- `8.5:11` (magazine/letter) → `3:4` (document portrait standard)

**Landscape Adaptations:**

- `5:3` (panoramic) → `16:9` (cinematic landscape)
- `10:3` (Chinese horizontal scroll) → `21:9` (ultra-wide preserves panoramic intent)
- `2.35:1`, `25:9`, `32:9` (ultra-wide formats) → `21:9` (maximum available width)

**3. Composition Compensation Requirements:**

When adapting ratios, apply these adjustments:

- **Vertical Compression** (e.g., 3:10 → 2:3):
  - Tighten negative space efficiency
  - Compress atmospheric depth
  - Increase figure prominence percentage
  - Maintain hierarchical clarity despite reduced height
- **Horizontal Compression** (e.g., 10:3 → 21:9):
  - Focus central narrative elements
  - Reduce peripheral environmental spread
  - Strengthen compositional anchors
  - Preserve panoramic flow within tighter bounds
- **Format Shift** (e.g., card 2.5:3.5 → portrait 3:4):
  - Recalculate visual hierarchy zones
  - Adjust border/margin proportions
  - Maintain readability standards
  - Preserve design intent in new dimensions

**4. Strict Reframe Mandate:**

**PROHIBITED:**

- ❌ Letterboxing (black bars top/bottom)
- ❌ Pillarboxing (black bars left/right)
- ❌ Padding or borders to simulate original ratio
- ❌ Distortion or stretching to force fit

**REQUIRED:**

- ✅ Clean recomposition to supported ratio
- ✅ Intelligent spatial reorganization
- ✅ Authentic composition for chosen format
- ✅ No visual indication of adaptation

**5. Adaptation Documentation:**

When adaptation applied, document in composition strategy:

```
ADAPTATION LOG:
- Requested Ratio: [original ratio]
- Applied Ratio: [chosen supported ratio]
- Mapping Reason: "Nearest [orientation] match preserving [intent]"
- Composition Adjustments: [specific changes made]
- Visual Impact: [how adaptation affects final result]
```

------

## 3) Style Context & Material Authenticity

- **Influences**.
- **Medium/Production method** with specific material physics requirements.
- **Thematic purpose**.
- **3—5 hallmark motifs** with quantified specifications where applicable.
- **Period framing** with artist active dates [start year - end year].
- **Tone Tag**.
- **Production Era Authenticity:** For publication styles, specify period-appropriate printing limitations, paper quality, and registration accuracy.
- If photographic: add **Innovation line** (Lighting / Format / Processing / Collaboration).

------

## 4) Technical Method & Mark-Making

### Usage Notes
- Keep the H2 heading exactly as shown above; the renderer relies on it.
- Provide one structured block **per mode** immediately after an optional introductory paragraph.
- Each block must follow the schema below so validation cycles can target individual anchors predictably.

```
### MODE NAME (e.g., Early Rolling Stone Era – Raw Documentary Portraits)

#### Context
Two to four sentences describing aesthetic intent, historical constraints, and what the mode should feel like.

#### Measurements
- Bullet lines containing the quantitative baselines (luminance ranges, ratios, percentages, distances, etc.).
- Every bullet must include at least one numeric value or measurable constraint.

#### Technique
- Bullet list pairing equipment/geometry/process with the measurements above.
- Explicitly state angles, power levels, distances, tool sizes, stroke counts, etc.

#### Validation
- Bullet list of pass conditions the validator should check next cycle.
- Reference the same metric names used in *Measurements* so the pipeline can map results directly.

#### Automated Corrections
- `_auto-generated quantitative adjustments_`
- Phase 4 appends additional bullets here, e.g. `- **Cycle 3 | Facial Architecture:** narrative + numeric update`.
```

### Universal Technique Anchors (apply to all modes)
- **Facial Architecture Anchor:** Specify gender-specific feature construction with concrete measurements and lighting geometry.
- **Pose Integrity Anchor:** Shoulder/hip angle differential, head tilt, gesture economy with numeric tolerances.
- **Scale Hierarchy Anchor:** Anatomical stylization limits (e.g., head-to-body ratios) that favor refinement over distortion.
- **Material Authenticity Anchor:** Medium/texture requirements with measurable surface characteristics; prohibit digital simulacra when inappropriate.
- **Period Consistency Anchor:** Production methods, tooling, and artifacts authentic to the documented era.
- **Production Method Anchor:** Reproduction/printing specifications with characteristic imperfections and calibration limits.
- **Canvas Adaptation Anchor:** Composition adjustments required for the declared aspect ratio (reference Section 2 for ratio mapping).
- **Gender Expression Consistency Anchor:** Styling mandates that preserve the subject’s presented gender identity across all modes.

------

## 5) Wardrobe, Props & Setting Conventions

**TEMPORAL WARDROBE MANDATE:**

- **Artist active period:** [start year - end year] - ALL wardrobe elements must predate this period
- **CRITICAL PROHIBITION:** No modern clothing retention from source images
- **Eyewear anachronism guard:** Eyeglasses only if historically appropriate (invented ~1286, but rare/expensive until 1700s+). For most historical periods: REMOVE all eyeglasses entirely.
- **Complete wardrobe replacement required:** Subject must be fully redressed in period-accurate costume - no modern elements survive transformation

**ANACHRONISM VIOLATION EXAMPLES (MUST AVOID):**

- ❌ Modern t-shirts, jeans, sneakers, hoodies in historical settings
- ❌ Contemporary eyeglasses/sunglasses in pre-1700 periods
- ❌ Modern hairstyles (undercuts, fades, contemporary women's cuts)
- ❌ Contemporary accessories (watches, modern jewelry, baseball caps)
- ❌ Synthetic fabrics (polyester, nylon, spandex) in any historical period
- ❌ Modern undergarments visible (sports bras, modern bra straps)
- ❌ Anachronistic footwear (modern shoes, athletic wear)
- ❌ Contemporary makeup styles or cosmetics
- ❌ Modern body modifications visible (recent tattoo styles, piercings in non-period locations)

**MODE-SPECIFIC WARDROBE TRACKS:**
Each mode requires complete period-accurate costume with gender-appropriate construction:

**[Mode A Name] - Wardrobe:**

- **Adult feminine:** [Specific garment construction for this mode and period with fabric types available in declared period, gender-appropriate silhouette and modesty standards, period-specific undergarments and layering]
- **Adult masculine:** [Specific garment construction for this mode and period with fabric types available in declared period, gender-appropriate silhouette and social status markers, period-specific accessories and headwear]
- **Androgynous/Religious:** [When appropriate to artistic tradition - period-specific religious or allegorical garments]

**[Mode B Name] - Wardrobe:**

- **Adult feminine:** [Distinct wardrobe specifications for this mode]
- **Adult masculine:** [Distinct wardrobe specifications for this mode]
- **Androgynous/Religious:** [When appropriate to this mode]

*(Repeat for each mode declared in style card)*

**Fabric behavior:** 

- Authentic drape physics for period materials only
- [Specific fabric types with period]: [characteristic draping, sheen, weight behavior]
- NO synthetic fabric characteristics (static cling, athletic stretch, modern sheen)
- Period-appropriate dyeing limitations (natural dyes only pre-1856)

**Temporal color palette restrictions:**

- Pre-1817: No cadmium pigments (cadmium yellow, orange, red)
- Pre-1704: No Prussian blue
- Pre-1856: No synthetic aniline dyes (bright magentas, purples)
- [Artist period]: Only natural dye colors - earth tones, plant-based dyes, mineral pigments
- NO electric, neon, or fluorescent colors in historical periods

**Gender-Differentiated Accessory specifications:**

- Minimalist 0-2 / Elaborate 3-4 with **STRICT period authentication**
- Male accessories [period]: [specific items with temporal verification]
- Female accessories [period]: [specific items with temporal verification]
- **REMOVE modern accessories:** watches, contemporary jewelry, modern bags, tech devices

**Wardrobe variation required:** 

- Change primary garment colors/styles between iterations
- Cycle through period-appropriate palette avoiding identical repetition
- Vary garment construction details (necklines, sleeves, trim) within period constraints
- Maintain gender-appropriate silhouettes throughout all variations

**HAIR TREATMENT - MANDATORY PRESERVATION AND PERIOD ADAPTATION:**

**CRITICAL PRESERVATION REQUIREMENTS:**

- **Hair length MUST be preserved:** Short hair remains short, medium remains medium, long remains long
- **Hair color MUST be preserved:** Maintain subject's natural hair color exactly
- **Baldness MUST be preserved:** Bald or balding subjects remain bald/balding in period-appropriate manner
- **Facial hair presence MUST be preserved:** If subject has NO facial hair (clean-shaven), DO NOT add beards, mustaches, or stubble

**PERIOD STYLING ADAPTATION (Preserving length/color/presence):**

- **Modern hairstyle removal:** Contemporary cuts, fades, undercuts, modern women's layers MUST be restyled to period conventions WHILE MAINTAINING LENGTH
- **Short hair → period short styles:** [Era-appropriate short styling methods by gender]
- **Medium hair → period medium styles:** [Era-appropriate medium styling methods by gender]
- **Long hair → period long styles:** [Era-appropriate long styling methods by gender]
- **Bald/balding → period baldness presentation:** [Appropriate head coverings or natural presentation by era]

**MODE-SPECIFIC HAIR TREATMENT (Maintaining preservation requirements across all modes):**

**[Mode A Name] - Hair Styling:**

- **Male styling:** [Period-appropriate styling for short/medium/long hair maintaining subject's actual length]
- **Female styling:** [Period-appropriate styling for short/medium/long hair maintaining subject's actual length]
- **Headwear conventions:** [When culturally appropriate for this mode]

**[Mode B Name] - Hair Styling:**

- **Male styling:** [Distinct period-appropriate styling for this mode while preserving length]
- **Female styling:** [Distinct period-appropriate styling for this mode while preserving length]
- **Headwear conventions:** [Different from Mode A if applicable]

*(Repeat for each mode declared)*

**Facial Hair Mandate:**

- If subject is clean-shaven: maintain clean-shaven appearance (period-appropriate grooming)
- If subject has facial hair: style to period conventions (beard shapes, mustache styles of era)
- DO NOT add facial hair where none exists
- DO NOT remove facial hair that exists

**MODE-SPECIFIC GENDER-DIFFERENTIATED PROP POOLS:**

```yaml
[mode_a_name]:
  male_props: [period-verified items with temporal annotations]
  female_props: [period-verified items with temporal annotations]
  micro_props: [small details appropriate to period and gender]
  temporal_notes: "Historical context for gendered prop access in this mode"

[mode_b_name]:
  male_props: [different period-verified items appropriate to this mode's context]
  female_props: [different period-verified items appropriate to this mode's context]
  micro_props: [mode-appropriate micro details]
  temporal_notes: "Historical context for this specific mode"

# Example structure for multi-mode styles:
portrait_mode:
  male_props: [leather_bound_book, sealed_letter, period_appropriate_gloves, signet_ring]
  female_props: [flower_appropriate_to_period, prayer_book, hand_mirror, jewelry_of_era]
  temporal_notes: "Renaissance women limited to domestic/devotional objects; men had access to scholarly/professional items"

religious_mode:
  male_props: [wooden_cross, chalice, bishop_staff, religious_manuscript]
  female_props: [rosary_beads, devotional_book, white_lily, saint_medallion]
  temporal_notes: "Religious mode emphasizes devotional objects; gender differentiation reflects period spiritual practice access"

study_mode:
  male_props: [drawing_compass, wooden_ruler, chalk_holder, manuscript_scroll]
  female_props: [simple_sketching_materials, domestic_drawing_tablet, religious_text]
  temporal_notes: "Formal artistic training male-dominated; women's study contexts limited to domestic/religious"

scientific_mode:
  male_props: [measuring_calipers, geometric_compass, anatomical_specimen, technical_manuscript]
  female_props: [herbal_specimen, domestic_medical_tools, midwifery_instruments]
  temporal_notes: "Women excluded from formal anatomical study; limited to domestic medical knowledge"
```

**Temporal prop validation:**

- Cross-reference ALL props against artist's active period [start year - end year]
- Verify technology level (no items requiring post-period invention)
- Confirm social appropriateness (gender + class + period conventions)
- Remove any modern objects from source images completely
- Mode-appropriate context (portrait props differ from scientific props)

**Setting authenticity:**

- Architecture must match declared period construction methods
- Furniture styles period-accurate to within 50 years
- Environmental details (windows, doors, fixtures) temporally consistent
- NO modern backgrounds retained from source images
- Mode-specific settings (workshop for study mode, church for religious mode, etc.)

**Coherence filter:** 

- All elements support declared style/period with documented historical accuracy
- Fallback = clean scene with minimal period-appropriate elements
- When uncertain about temporal accuracy: OMIT rather than risk anachronism

------

## 6) Safety & IP Constraints (Hard Rules)

- **Canvas Negatives (≥2):** Include ratio-specific anti-patterns:
  - *For declared ratio:* "original aspect ratio", "source dimensions", "unmodified framing"
  - *NanoBanana specific:* "1632×640", "non-standard ratios", "arbitrary dimensions", "default aspect ratio"
  - *If adapted:* "unadapted [original ratio]", "letterboxing", "pillarboxing", "padding to simulate ratio"
  - *Medium-specific:* Include anti-digital language for traditional media, anti-harmonious language for revolutionary techniques
  - *Publication-specific:* Include anti-modern printing language for historical publication styles
  - *Technique-specific:* Include constraints against conventional beauty for challenging artistic movements
  - *Gender-specific:* Include prohibition of cross-gender styling inappropriate to historical period
  - *Anatomical:* Include constraints against excessive distortion or unnatural proportions
  - *Temporal anachronism:* "modern clothing", "contemporary eyeglasses", "synthetic fabrics", "electric colors", "post-[year] materials"
  - No nudity/gore/logos/watermarks/signatures/frames.  
- **Canvas Positives (≥2):** Include ratio enforcement:
  - *Required:* "exactly [declared ratio]", "recomposed for [format name]", "MUST be [X:Y ratio]"
  - *NanoBanana reinforcement:* "strict [X:Y] aspect ratio compliance", "precise [X:Y] dimensions", "composed specifically for [X:Y] format"
  - *If adapted:* "cleanly recomposed from [original] to [adapted ratio]", "intelligent spatial reorganization"
  - *Technique-specific:* Include authentic technique specifications with measurements
  - *Period-specific:* Include era-appropriate production method requirements with characteristic imperfections
  - *Process-specific:* Include material application methods and tool mark requirements
  - *Gender-specific:* Include period-appropriate gender expression requirements and cross-mode consistency
  - *Anatomical:* Include elegant proportional refinement specifications
  - *Temporal authenticity:* "period-accurate [era] costume", "historically authentic [period] materials", "pre-[year] pigments only"
  - *Hair preservation:* "preserve hair length", "preserve hair color", "preserve baldness", "preserve facial hair presence"
- **Vocabulary warnings:** Avoid "ornate," "ornament," "elaborate" if frame generation is unwanted. Avoid "harmonious," "pleasant," "beautiful" for revolutionary techniques.

------

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

- **For Portrait Ratios (3:4, 4:5, 2:3, 9:16):** Vertical emphasis, subject dominance ≥70%, hierarchical staging with format-specific considerations
- **For Landscape Ratios (4:3, 16:9, 3:2, 21:9, 5:4):** Horizontal flow, environmental context ≥40%, panoramic staging with cultural viewing traditions
- **For Square (1:1):** Central balance, radial composition, equal weight distribution with format-specific layout rules
- **Adaptation Note:** If ratio adapted per Section 2.1, apply composition rules for FINAL ratio, not original requested ratio

**STYLE-SPECIFIC COMPOSITION (Mode-differentiated where applicable):**

**[Mode A Name] - Composition:**

- *Illustrated/Painted:* perspective regime with cultural accuracy, grid/symmetry with period conventions, figure:ground % with style requirements, density % with viewing distance considerations, lighting logic with period techniques, detail:negative space ratio optimized for declared ratio
- *Photographic:* framing regime (seamless, corner trap, subtractive tent, environmental) with technical limitations, lens equiv. with period equipment, film/stock anchor with characteristic artifacts, lighting logic with era-appropriate equipment, figure:ground % adapted to declared ratio, density % with printing limitations

**[Mode B Name] - Composition:**

- [Distinct compositional requirements for this mode]
- [Different spatial organization principles if applicable]

**UNIVERSAL COMPOSITION REQUIREMENTS:**

- *Poster/Cover:* figure dominance ≥60%, hierarchy hero > secondary > props > background, negative space zones with readability requirements, dynamic posing with format considerations, silhouette clarity in declared ratio
- *Digital/Pixel:* resolution specifications (8×8, 16×16, HD) with palette limitations, pixel economy with hardware constraints, aliasing treatment for declared ratio
- *Publication:* layout hierarchy with period typography, text zones with reading patterns, printing registration considerations for declared ratio

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** [wall, fresco plaster, silk scroll, canvas, screen, billboard, newsprint, magazine paper] appropriate to declared format with authentic material characteristics
- **Frame/Band Anchor:** Only if authentic to artistic tradition (Art Nouveau posters, medieval illuminations, Persian miniatures). For painted styles: omit entirely.
- **Production Context Anchor:** substrate and printing method appropriate to historical period and publication type with documented techniques
- **Ratio Enforcement Anchor:** composition designed specifically for declared ratio (final adapted ratio if Section 2.1 applied), not adapted from different format
- **Gender Expression Anchor:** Pose and gesture patterns appropriate to subject's gender using period-specific conventions and maintaining cross-mode consistency
- **Mode-Specific Composition Anchor:** Each mode applies distinct compositional conventions appropriate to its context and purpose

------

## 8) Typography & Text Integration (If Historically Present)

- **Binary:** omit or allow.
- **If allowed:**
  - **Ratio-Appropriate Zones:** Layout optimized for declared aspect ratio (final adapted ratio if applicable) with period-appropriate hierarchy
  - **Copy limits:** ≤6 words/line, ≤7 coverlines positioned for declared ratio with reading pattern considerations
  - **Period-Appropriate Typography:** fonts and typesetting methods authentic to declared time period with production limitations
  - **Font recommendation:**
    - Closest Google Font if ≥85% match.
    - Otherwise cite archival/pro family as inspiration.
    - e.g., *"Closest Google Font: Playfair Display (Didot analog, 85%). Better: HTF Didot."*
- **Format-Specific Text Rules:**
  - **Album cover mode:** mandatory 1:1 square, artist > title hierarchy with music industry conventions
  - **Magazine cover mode:** optimized for declared ratio, ≤7 elements, masthead positioning with newsstand visibility
  - **Poster mode:** text integration for declared ratio with viewing distance requirements
  - **Museum print:** omit text entirely
- **Historical accuracy:** fonts must match period/style with documented typography unless intentionally anachronistic.
- **Production Method Integration:** typography rendered with period-appropriate printing limitations and registration quality with characteristic imperfections.

------

## ✅ Enhanced Validation Checklist (background based, do not add to prompt)

- **Section 1:** Canvas Override + exact ratio declared + Gender Expression Mandate + IP Safeguard + Style Dominance + Face Flag + Pose Flag + Canvas Control Flag + Mode Selector
- **Section 2:** Ratio selection (native or adapted) + renderer compatibility check + recomposition strategy + spatial allocation + background treatment + format justification + mode-specific ratio considerations
- **Section 2.1:** Applied when needed - adaptation mapping + composition compensation + documentation + strict reframe verification
- **Section 3:** 5 fields + tone tag + production era authenticity + artist active dates (+ innovation if photo)
- **Section 4:** ≥5 anchors + measurement specifications + mode-conditional technique switching + pose + scale + material authenticity + period consistency + production method + canvas adaptation + gender expression consistency + anatomical proportion validation
- **Section 5:** Temporal wardrobe mandate + anachronism violation examples + eyewear guard + mode-specific wardrobe tracks + fabric behavior + temporal color restrictions + gender-differentiated accessories + wardrobe variation + hair preservation requirements (length/color/baldness/facial hair) + mode-specific hair treatment + mode-specific gender-differentiated prop pools + temporal prop validation + setting authenticity + coherence filter
- **Section 6:** ≥2 canvas negatives (including adaptation-specific, gender-specific, anatomical, temporal anachronism, hair preservation) + ≥2 canvas positives (including adaptation-specific, gender-specific, temporal authenticity, hair preservation) + vocabulary warnings + technique-specific constraints
- **Section 7:** Ratio-specific composition FOR FINAL RATIO + mode-differentiated style-specific composition + perspective/framing regime + figure:ground + density + lighting + detail:negative space + surface context + frame policy + production context + ratio enforcement anchor + gender expression anchor + mode-specific composition anchor
- **Section 8:** Explicit text policy + ratio-appropriate layout FOR FINAL RATIO + font rec + period accuracy + format-specific rules + production method integration
- **Canvas Control:** Exact ratio specified (native or adapted), recomposition strategy declared, original dimensions explicitly ignored, no padding/letterboxing
- **Adaptation Validation:** If Section 2.1 applied - mapping justified, composition compensation specified, documentation complete, visual authenticity maintained
- **IP Protection:** Original design verified, appropriate safeguards applied per style category
- **Props ≤2:** fallback valid with gender-appropriate specifications and mode-appropriate context
- **Expression Anchor:** present if style depends on facial affect (deadpan, smile, solemn)
- **Material authenticity:** surface exhibits authentic medium characteristics with measurable specifications
- **Production authenticity:** printing/reproduction methods match declared period with characteristic imperfections
- **Composition boundaries:** no frames outside canvas
- **Period consistency:** all elements historically/stylistically coherent with documented methods
- **Ratio consistency:** all elements optimized for FINAL aspect ratio (adapted if applicable)
- **Technical precision:** quantified measurements included where applicable
- **Process accuracy:** material application methods specified
- **Cultural authenticity:** indigenous and traditional methods respected
- **Revolutionary authorization:** challenging aesthetics permitted when historically accurate
- **Gender consistency:** cross-mode gender expression maintained with period-appropriate methods
- **Anatomical validation:** proportional refinement serves aesthetics without distortion
- **Mode isolation:** techniques and conventions properly separated between modes
- **Temporal authenticity:** all materials, techniques, props, wardrobe predate artist's death year
- **Anachronism prevention:** modern elements removed, period-accurate replacements applied
- **Hair preservation:** length, color, baldness, facial hair presence maintained with period styling
- **Distinctiveness:** validated; no generic drift

------

## 🎨 Enhanced Style-Family Templates with NanoBanana Ratio Integration (background based, do not add to prompt)

### Traditional Painting Styles

- **Canvas Options (Native):** `3:4` (portrait), `4:3` (landscape), `1:1` (tondo), `5:4` (landscape)
- **Canvas Control:** `adaptive-extend` or `source-respect`
- **Frame policy:** Omit Frame/Band Anchor entirely
- **Material emphasis:** Authentic paint/surface techniques with measurable thickness and tool marks
- **Background Extension:** "Extend [atmospheric/landscape] elements seamlessly to fill exact [ratio]"
- **IP Protection Standard:** No logos, trademarks, or signatures
- **Technical Requirements:** Specify paint thickness, brush direction, canvas preparation, drying characteristics
- **Gender Requirements:** Period-appropriate styling with cross-mode consistency, hair adaptation (preserving length/color/baldness/facial hair), gender-specific props
- **Anatomical Guidelines:** Elegant proportional refinement without distortion
- **Temporal Requirements:** All materials predate artist death year, remove modern clothing/eyewear, period-accurate costume
- **Hair Preservation:** Maintain subject's hair length, color, baldness, and facial hair presence with period styling
- **NanoBanana Note:** All traditional portrait/landscape ratios natively supported

### Revolutionary Art Movements (Expressionism, Dadaism, Futurism)

- **Canvas Options (Native):** `4:5` (van Gogh preferred), `3:4`, `2:3` (Kirchner urban scenes)
- **Canvas Control:** `strict-reframe` or `adaptive-extend`
- **Frame policy:** Omit entirely unless documented in movement
- **Material emphasis:** Authentic rebellious techniques with aggressive mark-making
- **Comfort violation:** Explicitly authorized for psychological impact
- **Technical Requirements:** Specify material destruction, conventional beauty prohibition, psychological attack methods
- **IP Protection Enhanced:** Original rebellion against established norms
- **Gender Requirements:** Revolutionary gender expression while maintaining subject recognition
- **Anatomical Guidelines:** Distortion serves artistic rebellion, not technical overcorrection
- **Temporal Requirements:** Period-accurate materials for movement era, remove anachronistic clothing
- **Hair Preservation:** Maintain length/color/baldness/facial hair with movement-appropriate styling
- **NanoBanana Note:** Expressionist preferred ratios natively supported

### Character-Centric Styles (Comics, Animation, Pin-up, Fantasy, Manga)

- **Canvas Options (Native):** `2:3` (comic cover), `4:5` (modern poster)
- **Canvas Options (Adapted):** `2.75:3.75` (collectible card) → `3:4`
- **Canvas Control:** `strict-reframe`
- **Layout:** Character-focused design hierarchy for exact format
- **IP Protection Enhanced:**
  - Original character design avoiding copyrighted costume elements
  - No recognizable superhero/villain iconography or symbols
  - Create distinct visual identity separate from existing properties
  - Avoid character names, locations, or terminology from copyrighted works
- **Production Authenticity:** Period-appropriate printing methods (halftone dots, color registration, newsprint texture) with documented imperfections
- **Gender Requirements:** Character gender expression with genre-appropriate styling, cross-format consistency
- **Anatomical Guidelines:** Stylization serves character design without excessive distortion
- **Temporal Requirements:** Comics era-appropriate printing technology, remove modern clothing from source
- **Hair Preservation:** Maintain length/color with genre-appropriate stylization
- **NanoBanana Note:** Most comic/card formats supported; specialty card ratios adapt to 3:4

### Cultural Traditional Styles (Chinese, Persian, Japanese, Indigenous)

- **Canvas Options (Native):** `2:3`, `3:2`, `21:9` (horizontal scroll adaptation)
- **Canvas Options (Adapted):** `3:10` (vertical scroll) → `2:3`, `10:3` (horizontal scroll) → `21:9`
- **Canvas Control:** `format-native` or `source-respect`
- **Material emphasis:** Culturally authentic materials and techniques with traditional preparation methods
- **Cultural production:** Indigenous methods take precedence over modern interpretations
- **Technical Requirements:** Specify traditional tool use, substrate preparation, pigment sources, binding agents
- **IP Protection Standard:** Respect cultural authenticity and avoid appropriation
- **Gender Requirements:** Traditional cultural gender expression methods with historical accuracy
- **Anatomical Guidelines:** Cultural proportion conventions with authentic stylization
- **Temporal Requirements:** Traditional period materials only, culturally appropriate costume replacement
- **Hair Preservation:** Maintain length/color/baldness with traditional cultural styling conventions
- **NanoBanana Note:** Extreme scroll ratios (3:10, 10:3) adapt to nearest format preserving elongation intent; acknowledge traditional proportions in documentation

### Digital/Pixel Styles

- **Canvas Options (Native):** `1:1` (sprite), `4:3` (classic screen), `16:9` (modern screen)
- **Canvas Control:** `format-native`
- **Resolution:** Specific pixel density requirements for declared ratio with hardware limitations
- **Production Method:** Authentic pixel art techniques, palette limitations, hardware constraints
- **Technical Requirements:** Exact pixel counts, color limitations, aliasing specifications, sprite grid constraints
- **IP Protection Standard:** Original sprite/character design
- **Gender Requirements:** Pixel-appropriate gender expression within technical constraints
- **Anatomical Guidelines:** Pixel grid limitations determine stylization boundaries
- **Temporal Requirements:** Era-appropriate palette and resolution (8-bit, 16-bit, etc.)
- **Hair Preservation:** Maintain length/color within pixel constraints
- **NanoBanana Note:** All standard digital display ratios natively supported

### Publication Styles (Magazines, Comics, Posters, Advertisements)

- **Canvas Options (Native):** `2:3` (standard poster), `16:9` (landscape poster)
- **Canvas Options (Adapted):** `8.5:11` (US magazine) → `3:4`, `11:17` (tabloid) → `2:3`
- **Canvas Control:** `strict-reframe`
- **Typography:** Essential integration with period-accurate typesetting and characteristic imperfections
- **Production Method Emphasis:**
  - **1940s-1960s:** Letterpress typography, halftone dots, color registration issues, newsprint texture
  - **1970s-1980s:** Photo-typesetting, improved color registration, coated paper stock
  - **1990s:** Early digital typesetting, high-quality offset printing
- **Technical Requirements:** Specific dot patterns, registration drift measurements, paper absorption characteristics
- **IP Protection Standard:** No trademarked logos, copyrighted imagery, or real brand elements
- **Gender Requirements:** Publication-appropriate gender representation with period-accurate styling conventions
- **Anatomical Guidelines:** Commercial illustration proportional standards without excessive distortion
- **Temporal Requirements:** Publication era-appropriate printing technology, remove modern clothing
- **Hair Preservation:** Maintain length/color/baldness/facial hair with commercial styling appropriate to publication era
- **NanoBanana Note:** Standard poster ratios supported; magazine formats adapt to nearest portrait ratio with layout recalculation

### Multi-Mode Artist Styles (Renaissance Masters, Academic Painters, etc.)

- **Canvas Options:** Vary by mode (Portrait: `3:4`, `4:5` / Religious: `4:3`, `3:2`, `16:9` / Study: `3:4`, `1:1` / Scientific: `4:3`, `3:4`)
- **Canvas Control:** Mode-dependent (`strict-reframe` for studies, `adaptive-extend` for portraits)
- **Mode Isolation:** Each mode has distinct technique ecosystem:
  - **Portrait Mode:** Oil painting techniques, sfumato, glazing
  - **Religious Mode:** Multi-figure narrative composition
  - **Study Mode:** Drawing media (chalk, charcoal, ink), sketch notation
  - **Scientific Mode:** Technical illustration precision, measurement notation
- **Wardrobe:** Mode-specific tracks (Portrait: elaborate costume / Study: working clothes / Religious: devotional garments)
- **Props:** Mode-specific gender-differentiated pools (Portrait: personal accessories / Study: drawing tools / Scientific: instruments)
- **Hair Treatment:** Mode-specific styling (Portrait: elaborate / Study: practical) while preserving length/color/baldness/facial hair
- **Technical Requirements:** Mode-conditional technique switching (oil glazing ≠ chalk hatching)
- **Temporal Requirements:** All modes share artist's active period constraints
- **Gender Requirements:** Cross-mode consistency in gender presentation with mode-appropriate styling
- **NanoBanana Note:** Each mode may prefer different ratios; specify in mode declarations

------

## 📋 NanoBanana Quick Reference (background based, do not add to prompt)

**Native Support (Use Directly):**

- Square: `1:1`
- Portrait: `2:3`, `3:4`, `4:5`, `9:16`
- Landscape: `3:2`, `4:3`, `5:4`, `16:9`, `21:9`

**Common Adaptations:**

- Card formats → `3:4`
- Magazine formats → `3:4` or `2:3`
- Chinese vertical scrolls → `2:3`
- Chinese horizontal scrolls → `21:9`
- Ultra-wide cinemascope → `21:9`
- Panoramic landscapes → `16:9`

**All images output at 1290 tokens regardless of ratio.**

------

## Quantitative Precision Addendum (background based, do not add to prompt)

## **QUANTITATIVE MEASUREMENT AUTHORITY**

When framework specifies numeric targets, these are **HARD REQUIREMENTS**, not suggestions:

### Color Specifications

- **Lightness values (L%)**: MUST match within ±5% of specified value
  - Example: "flesh L=89%" means L∈[84,94] acceptable, L<84 or L>94 = FAIL
- **Hex values**: Primary role colors MUST appear in specified roles
  - Example: "#F4E8D4 (flesh base)" means this EXACT color must be dominant flesh tone
- **Coverage percentages**: MUST achieve specified pixel coverage
  - Example: "flesh tones 15-25% of face area" means measure and verify

### Luminance Requirements (Mode-Specific Examples)

```yaml
# Vanity Fair Era (Theatrical) - EXPLICIT FLOORS
overall_scene: L≥60 (minimum scene brightness)
face_region: L≥65 (face must be well-lit)
shadow_floor: L≥25 (darkest shadows cannot crush below this)
highlight_ceiling: L≤85 (brightest highlights cap here)
flesh_tone_visibility: 15-25% face area in range H=15-35°, S=25-45%, L=55-75%

# Rolling Stone Era (Documentary) - DIFFERENT TARGETS
overall_scene: L≥45 (darker documentary aesthetic)
face_region: L≥50 (less theatrical, more natural)
shadow_floor: L≥15 (deeper shadows acceptable)
flesh_tone_visibility: 12-20% face area (similar range, less coverage)
```

### Spatial Composition

- **Environmental integration**: "45-60% frame area" = measure background pixels
- **Prop count**: "3-5 props minimum" = count distinct objects, not suggestion
- **Depth layers**: "2-4 depth layers" = foreground/midground/background separation required

### Anatomical Proportions

- **Head-to-body ratio**: "1:7.5" means head is 1/7.5 of total body height (±5% tolerance)
- **Elongation percentages**: "10-15% neck elongation" means measure vs standard anatomy
- **NO overcorrection**: If source neck is already long, DO NOT elongate further

### Surface Characteristics (When Measurable)

- **Grain size**: "0.3-0.8mm equivalent" for film grain visibility
- **Blend zones**: "1-2mm sfumato transitions" for edge softness
- **Relief height**: "3-5mm impasto" when texture specified

------

## **VALIDATION CHECKPOINTS (For AI Self-Assessment)**

Before finalizing output, verify:

### ✅ Color Validation

```javascript
// Pseudo-code for AI internal validation
if (framework_specifies_flesh_L89) {
  actual_flesh_L = measure_dominant_flesh_lightness();
  deviation = abs(actual_flesh_L - 89);
  if (deviation > 5) {
    ERROR: "Flesh tone L=" + actual_flesh_L + " outside ±5% of target L=89";
    ADJUST_EXPOSURE_UP or ADJUST_EXPOSURE_DOWN;
  }
}
```

### ✅ Luminance Validation (Mode-Aware)

```javascript
if (mode == "vanity_fair_era") {
  scene_L = measure_overall_luminance();
  face_L = measure_face_region_luminance();
  shadow_min = measure_darkest_5pct();
  
  if (scene_L < 60) ERROR: "Scene too dark (L=" + scene_L + ", need ≥60)";
  if (face_L < 65) ERROR: "Face underexposed (L=" + face_L + ", need ≥65)";
  if (shadow_min < 25) ERROR: "Shadow crushing (L=" + shadow_min + ", floor=25)";
}
```

### ✅ Composition Validation

```javascript
if (framework_specifies_environmental_45_60pct) {
  background_pct = measure_non_subject_pixels();
  if (background_pct < 45 || background_pct > 60) {
    ERROR: "Environmental area " + background_pct + "% outside 45-60% target";
    EXPAND_BACKGROUND or REDUCE_FIGURE;
  }
}
```

### ✅ Prop Count Validation

```javascript
if (framework_specifies_3_5_props) {
  props = count_distinct_objects_excluding_figure();
  if (props < 3) {
    ERROR: "Only " + props + " props, need minimum 3";
    ADD_MODE_APPROPRIATE_PROPS;
  }
}
```

------

## **CORRECTION LANGUAGE PRECISION**

When framework corrections reference metrics, use this format:

### ❌ VAGUE (DO NOT USE)

- "More dramatic lighting"
- "Increase theatrical staging"
- "Add more environmental integration"
- "Improve flesh tones"

### ✅ QUANTITATIVE (ALWAYS USE)

- "Increase key light intensity to 1500±300 nits, face region L≥65"
- "Add 3-5 props from mode-appropriate pool, background must occupy 45-60% frame"
- "Environmental integration: minimum 3 depth layers, 8-12ft depth behind subject"
- "Flesh tone MUST be H=15-35°, S=25-45%, L=55-75%, covering 15-25% of face area"

------

## **MODE-SPECIFIC NUMERIC ANCHORS**

### Lighting Intensity by Mode

```yaml
rolling_stone_era:
  key_light_nits: 800-1200
  scene_L_min: 45
  face_L_min: 50
  contrast_ratio: 1:4-1:6 (documentary realism)

vanity_fair_era:
  key_light_nits: 1500±300
  scene_L_min: 60
  face_L_min: 65
  contrast_ratio: 1:6-1:8 (theatrical drama)

personal_work:
  key_light_nits: 600-1000
  scene_L_min: 55
  face_L_min: 60
  contrast_ratio: 1:2-1:3 (intimate softness)

commercial_campaigns:
  key_light_nits: 1500-2000
  scene_L_min: 65
  face_L_min: 70
  contrast_ratio: 1:3-1:4 (commercial polish)
```

### Environmental Integration by Mode

```yaml
rolling_stone_era:
  background_pct: 30-50% (documentary tight framing)
  prop_count_min: 1-3 (minimal staging)
  depth_layers: 1-2 (shallow documentary depth)

vanity_fair_era:
  background_pct: 45-60% (theatrical environmental narrative)
  prop_count_min: 3-5 (elaborate staging)
  depth_layers: 2-4 (architectural depth)

personal_work:
  background_pct: 40-55% (domestic context)
  prop_count_min: 2-4 (family environment)
  depth_layers: 2-3 (intimate space)

commercial_campaigns:
  background_pct: 40-60% (brand narrative flexibility)
  prop_count_min: 3-5 (conceptual staging)
  depth_layers: 2-4 (commercial production value)
```

------

## **CRITICAL FAILURE PATTERNS & NUMERIC TRIGGERS**

### Luminance Collapse Detection

```
IF dominant_color_lightness < 40% 
AND flesh_tone_detection = 0% coverage
THEN: CRITICAL_FAIL "Severe underexposure"
FIX: Increase key light to mode minimum, adjust scene_L to mode floor
```

### Color Role Confusion Detection

```
IF color_hex_lightness < 30% 
AND specified_role = "highlight"
THEN: ERROR "Color too dark for highlight role"
FIX: Swap with appropriate lightness range (highlights L>75%)
```

### Environmental Integration Failure

```
IF background_pct < 30%
AND framework_specifies_theatrical_staging
THEN: FAIL "Insufficient environmental narrative"
FIX: Extend background to minimum specified % + add minimum prop count
```

### Grain Absence Detection

```
IF mode_requires_film_grain
AND surface_appears_digitally_smooth
THEN: FAIL "Missing period-appropriate texture"
FIX: Add grain_size specified in framework (e.g., 0.3-0.8mm equivalent)
```

------

## **NUMERIC TARGET PRECEDENCE RULES**

When multiple specifications conflict:

1. **Mode-specific numeric targets** override universal descriptions
2. **Explicit measurements** (L≥65, 45-60%) override qualitative flags
3. **Minimum/maximum bounds** are HARD LIMITS, not suggestions
4. **Range midpoints** are preferred targets when range given

Example:

```
Universal: "warm flesh tones"
Mode-specific: "flesh L=65-75%, H=15-35°"
→ APPLY: L∈[65,75], H∈[15,35] (mode-specific wins)
→ PREFER: L=70, H=25 (midpoint of ranges)
```

------

## **SELF-CORRECTION PROTOCOL**

If AI detects output deviating from numeric targets:

```
1. MEASURE deviation magnitude
2. IF deviation > tolerance threshold:
   a. IDENTIFY which specification failed
   b. CALCULATE correction magnitude needed
   c. APPLY adjustment to specific parameter
   d. RE-MEASURE to verify correction
3. DOCUMENT: "Adjusted [parameter] from [value] to [value] to meet [spec]"
```

Example:

```
DETECTED: Face luminance L=45 (target L≥65 for Vanity Fair mode)
DEVIATION: -20 units below minimum
CORRECTION: Increase key light intensity by 40%, adjust face region exposure +1.5 stops
VERIFIED: Face luminance now L=67 (within L≥65 requirement ✓)
```

------

## **INTEGRATION NOTES FOR LLM**

- These numeric targets are **VALIDATION CRITERIA**, not creative constraints
- Artistic authenticity achieved BY meeting metrics, not despite them
- When framework says "minimum 3 props", finding 2 props = incomplete execution
- Quantitative specifications enable objective success measurement
- Mode-specific values prevent cross-contamination between artistic contexts

**REMEMBER**: "Dramatic lighting" without L≥65 face minimum = incomplete. "Theatrical staging" without 45-60% background = insufficient. Numbers define the boundaries of authentic style execution.

---

This enhanced framework v4.4 (NanoBanana Edition) incorporates renderer-specific ratio constraints with intelligent adaptation protocols, comprehensive gender expression requirements, anatomical proportion validation, cross-mode consistency enforcement, mode isolation principles, mode-specific technique switching, mode-differentiated prop pools, temporal anachronism prevention, and mandatory hair preservation (length/color/baldness/facial hair presence), ensuring historical and specialty formats can be faithfully reinterpreted within NanoBanana's supported dimensions while maintaining artistic authenticity, gender authenticity, temporal accuracy, and compositional integrity across all declared modes. Isolation Mandate:** Each mode maintains distinct material techniques and compositional conventions. Portrait mode techniques DO NOT apply to Study mode. Religious mode compositions DO NOT default to Portrait conventions. Mode selector triggers complete technique ecosystem switch.
