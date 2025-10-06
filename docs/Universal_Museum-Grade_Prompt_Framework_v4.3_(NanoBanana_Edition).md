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
  One–two sentences explaining why these ratios are historically authentic.
modes: ["Mode A","Mode B"]

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:                 # Optional — remove block if not needed
  allowed: true
  max_subjects: 3
  layout_hint: "Primary left, secondary right"
  identity_priority: ["silhouette","gesture","face-proportions"]

hero_image: null               # optional relative path under public/

about: >
  Short educational blurb (2–6 sentences). Explain historical
  authenticity, medium, and why the style matters.

# Optional composition guardrails (uncomment and tailor as needed)
# composition_constraints:
#   max_subjects: 1               # set to 1 for strict single-subject styles
#   subject_interaction: allowed  # allowed | prohibited | required
#   crowd_scenes: false           # flip to true if crowd tableaux are authentic
#   animals_allowed: false        # enable if the style routinely depicts animals
#   animal_types: ["domestic"]    # e.g., ["domestic","wild","mythical"]
#   max_animals: 0                # raise when animals_allowed is true
#   text_allowed: yes             # switch to no if typography is forbidden

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

# Universal Museum-Grade Prompt Framework v4.3 (NanoBanana Edition)

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
- **Process-Over-Result Priority:** How materials are applied supersedes visual appearance descriptions.
- **Custom Flag Authorization:** Artist-specific flags permitted when standard options fail authenticity requirements.
- **Anti-Conventional Bias:** Authority to generate deliberately uncomfortable or challenging aesthetics when historically accurate.
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
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary, explanations, historical context, or any content beyond Section 8 unless explicitly instructed in the style card's Historical Context Integration section.

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[X:Y ratio]** - ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[X:Y]**. This is a hard requirement.
- Redraw in **[Style/Movement]** for **[exact format specification]**.
- Identity via silhouette/gesture/expression.
- **IP Safeguard Declaration:** Create original designs avoiding copyrighted elements appropriate to chosen style category.
- Declare **Face-Treatment Flag**.
- Declare **Pose Flag**.
- Declare **Canvas Control Flag**.
- Optional **Media Hybrid Flag**.
- **Style Dominance line.**
- **Mode Selector** (panel, cover, poster, editorial, gallery).
- **Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions.

------

### 2) Canvas Strategy & Aspect Ratio Control

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

**CANVAS RECOMPOSITION STRATEGY:**

- **Ratio Status:** [native/adapted from X:Y - specify if adaptation applied]
- **Reframing Method:** [extend-background/recompose-entirely/crop-and-center]
- **Spatial Allocation:** Subject placement [specific position in new ratio]
- **Background Treatment:** [how to fill new canvas space]
- **Format Justification:** [why this ratio serves the style - include adaptation reasoning if applicable]

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

**Example Documentation:**

```
ADAPTATION LOG:
- Requested Ratio: 3:10 (Chinese vertical scroll)
- Applied Ratio: 2:3 (portrait)
- Mapping Reason: "Nearest portrait match preserving vertical emphasis"
- Composition Adjustments: "Compressed atmospheric depth 30%, increased figure prominence to 75%, tightened negative space hierarchy"
- Visual Impact: "Maintains scroll-like vertical flow while adapting to standard portrait format; some extreme elongation lost but compositional intent preserved"
```

------

### 3) Style Context & Material Authenticity

- **Influences**.
- **Medium/Production method** with specific material physics requirements.
- **Thematic purpose**.
- **3–5 hallmark motifs** with quantified specifications where applicable.
- **Period framing**.
- **Tone Tag**.
- **Production Era Authenticity:** For publication styles, specify period-appropriate printing limitations, paper quality, and registration accuracy.
- If photographic: add **Innovation line** (Lighting / Format / Processing / Collaboration).

------

### 4) Technical Method & Mark-Making (≥5 anchors + measurement specifications)

- *Illustrated/Painted:* line quality with tool marks, color mixing methods, texture thickness specifications, edge treatment, stroke economy with directional requirements, surface depth measurements, detail hierarchy with proportional specifications, material simulation with authentic characteristics.
- *Photographic:* camera/lens specifications, film/ISO with grain characteristics, lighting type/power/angle with shadows, processing/post with period limitations, artifacts (grain, flare, halation) with authentic rendering.
- *Digital:* resolution density with pixel counts, rendering method limitations, layer economy, aliasing control specifications.
- *Publication/Print:* halftone quality with dot visibility, color registration accuracy with drift specifications, paper texture with absorption characteristics, ink bleed behavior, printing method limitations with period-appropriate imperfections.
- **Pose Anchors:** head tilt degrees, shoulder–hip angle differential, weight distribution percentages, gesture economy with specific hand positions.
- **Scale Hierarchy Anchor:** proportional measurements unless stylistically intentional (e.g., neck elongation 150%, paint thickness 3-5mm).
- **Material Authenticity Anchor:** authentic medium techniques with measurable surface characteristics - no digital simulation of traditional media.
- **Period Consistency Anchor:** all elements historically/stylistically coherent with documented production methods.
- **Production Method Anchor:** printing/reproduction techniques authentic to declared time period with characteristic imperfections.
- **Canvas Adaptation Anchor:** composition optimized for declared aspect ratio with format-specific layout considerations (note any ratio adaptation applied).

------

### 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks** (adult fem/masc/androgynous/youth) with period-accurate construction methods.
- **Fabric behavior** (drape, sheen, period accuracy) with material physics considerations.
- **Accessory caps** (Minimalist 0–2 / Elaborate 3–4) with cultural authenticity.
- **Color palette** restrictions and period accuracy with dye technology limitations.
- **Wardrobe variation required:** Change primary garment colors/styles between iterations - cycle through period-appropriate palette avoiding identical repetition.
- **Props:** 1 hero + optional 1 micro (total ≤2) with cultural and period authenticity.
- **Coherence filter:** all elements support style/period with documented historical accuracy; fallback = clean scene.
- **YAML prop pools required** with cultural and temporal specificity.

------

### 6) Safety & IP Constraints (Hard Rules)

- **Canvas Negatives (≥2):** Include ratio-specific anti-patterns:
  - *For declared ratio:* "original aspect ratio", "source dimensions", "unmodified framing"
  - *NanoBanana specific:* "1632×640", "non-standard ratios", "arbitrary dimensions", "default aspect ratio"
  - *If adapted:* "unadapted [original ratio]", "letterboxing", "pillarboxing", "padding to simulate ratio"
  - *Medium-specific:* Include anti-digital language for traditional media, anti-harmonious language for revolutionary techniques
  - *Publication-specific:* Include anti-modern printing language for historical publication styles
  - *Technique-specific:* Include constraints against conventional beauty for challenging artistic movements
  - No nudity/gore/logos/watermarks/signatures/frames.  
- **Canvas Positives (≥2):** Include ratio enforcement:
  - *Required:* "exactly [declared ratio]", "recomposed for [format name]", "MUST be [X:Y ratio]"
  - *NanoBanana reinforcement:* "strict [X:Y] aspect ratio compliance", "precise [X:Y] dimensions", "composed specifically for [X:Y] format"
  - *If adapted:* "cleanly recomposed from [original] to [adapted ratio]", "intelligent spatial reorganization"
  - *Technique-specific:* Include authentic technique specifications with measurements
  - *Period-specific:* Include era-appropriate production method requirements with characteristic imperfections
  - *Process-specific:* Include material application methods and tool mark requirements
- **Vocabulary warnings:** Avoid "ornate," "ornament," "elaborate" if frame generation is unwanted. Avoid "harmonious," "pleasant," "beautiful" for revolutionary techniques.

------

### 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

- **For Portrait Ratios (3:4, 4:5, 2:3, 9:16):** Vertical emphasis, subject dominance ≥70%, hierarchical staging with format-specific considerations
- **For Landscape Ratios (4:3, 16:9, 3:2, 21:9, 5:4):** Horizontal flow, environmental context ≥40%, panoramic staging with cultural viewing traditions
- **For Square (1:1):** Central balance, radial composition, equal weight distribution with format-specific layout rules
- **Adaptation Note:** If ratio adapted per Section 2.1, apply composition rules for FINAL ratio, not original requested ratio

**STYLE-SPECIFIC COMPOSITION:**

- *Illustrated/Painted:* perspective regime with cultural accuracy, grid/symmetry with period conventions, figure:ground % with style requirements, density % with viewing distance considerations, lighting logic with period techniques, detail:negative space ratio optimized for declared ratio
- *Photographic:* framing regime (seamless, corner trap, subtractive tent, environmental) with technical limitations, lens equiv. with period equipment, film/stock anchor with characteristic artifacts, lighting logic with era-appropriate equipment, figure:ground % adapted to declared ratio, density % with printing limitations
- *Poster/Cover:* figure dominance ≥60%, hierarchy hero > secondary > props > background, negative space zones with readability requirements, dynamic posing with format considerations, silhouette clarity in declared ratio
- *Digital/Pixel:* resolution specifications (8×8, 16×16, HD) with palette limitations, pixel economy with hardware constraints, aliasing treatment for declared ratio
- *Publication:* layout hierarchy with period typography, text zones with reading patterns, printing registration considerations for declared ratio

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** [wall, fresco plaster, silk scroll, canvas, screen, billboard, newsprint, magazine paper] appropriate to declared format with authentic material characteristics
- **Frame/Band Anchor:** Only if authentic to artistic tradition (Art Nouveau posters, medieval illuminations, Persian miniatures). For painted styles: omit entirely.
- **Production Context Anchor:** substrate and printing method appropriate to historical period and publication type with documented techniques
- **Ratio Enforcement Anchor:** composition designed specifically for declared ratio (final adapted ratio if Section 2.1 applied), not adapted from different format

------

### 8) Typography & Text Integration (If Historically Present)

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

- **Section 1:** Canvas Override + exact ratio declared + IP Safeguard + Style Dominance + Face Flag + Pose Flag + Canvas Control Flag
- **Section 2:** Ratio selection (native or adapted) + renderer compatibility check + recomposition strategy + spatial allocation + background treatment + format justification
- **Section 2.1:** Applied when needed - adaptation mapping + composition compensation + documentation + strict reframe verification
- **Section 3:** 5 fields + tone tag + production era authenticity (+ innovation if photo)
- **Section 4:** ≥5 anchors + measurement specifications + pose + scale + material authenticity + period consistency + production method + canvas adaptation (noting any ratio adaptation)
- **Section 5:** Wardrobe + YAML props + variation rules + cultural authenticity
- **Section 6:** ≥2 canvas negatives (including adaptation-specific) + ≥2 canvas positives (including adaptation-specific) + vocabulary warnings + technique-specific constraints
- **Section 7:** Ratio-specific composition FOR FINAL RATIO + perspective/framing regime + figure:ground + density + lighting + detail:negative space + surface context + frame policy + production context + ratio enforcement anchor
- **Section 8:** Explicit text policy + ratio-appropriate layout FOR FINAL RATIO + font rec + period accuracy + format-specific rules + production method integration
- **Canvas Control:** Exact ratio specified (native or adapted), recomposition strategy declared, original dimensions explicitly ignored, no padding/letterboxing
- **Adaptation Validation:** If Section 2.1 applied - mapping justified, composition compensation specified, documentation complete, visual authenticity maintained
- **IP Protection:** Original design verified, appropriate safeguards applied per style category
- **Props ≤2:** fallback valid
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
- **Distinctiveness:** validated; no generic drift

------

## 🎨 Enhanced Style-Family Templates with NanoBanana Ratio Integration

### Traditional Painting Styles

- **Canvas Options (Native):** `3:4` (portrait), `4:3` (landscape), `1:1` (tondo), `5:4` (landscape)
- **Canvas Control:** `adaptive-extend` or `source-respect`
- **Frame policy:** Omit Frame/Band Anchor entirely
- **Material emphasis:** Authentic paint/surface techniques with measurable thickness and tool marks
- **Background Extension:** "Extend [atmospheric/landscape] elements seamlessly to fill exact [ratio]"
- **IP Protection Standard:** No logos, trademarks, or signatures
- **Technical Requirements:** Specify paint thickness, brush direction, canvas preparation, drying characteristics
- **NanoBanana Note:** All traditional portrait/landscape ratios natively supported

### Revolutionary Art Movements (Expressionism, Dadaism, Futurism)

- **Canvas Options (Native):** `4:5` (van Gogh preferred), `3:4`, `2:3` (Kirchner urban scenes)
- **Canvas Control:** `strict-reframe` or `adaptive-extend`
- **Frame policy:** Omit entirely unless documented in movement
- **Material emphasis:** Authentic rebellious techniques with aggressive mark-making
- **Comfort violation:** Explicitly authorized for psychological impact
- **Technical Requirements:** Specify material destruction, conventional beauty prohibition, psychological attack methods
- **IP Protection Enhanced:** Original rebellion against established norms
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
- **NanoBanana Note:** Most comic/card formats supported; specialty card ratios adapt to 3:4

### Cultural Traditional Styles (Chinese, Persian, Japanese, Indigenous)

- **Canvas Options (Native):** `2:3`, `3:2`, `21:9` (horizontal scroll adaptation)
- **Canvas Options (Adapted):** `3:10` (vertical scroll) → `2:3`, `10:3` (horizontal scroll) → `21:9`
- **Canvas Control:** `format-native` or `source-respect`
- **Material emphasis:** Culturally authentic materials and techniques with traditional preparation methods
- **Cultural production:** Indigenous methods take precedence over modern interpretations
- **Technical Requirements:** Specify traditional tool use, substrate preparation, pigment sources, binding agents
- **IP Protection Standard:** Respect cultural authenticity and avoid appropriation
- **NanoBanana Note:** Extreme scroll ratios (3:10, 10:3) adapt to nearest format preserving elongation intent; acknowledge traditional proportions in documentation

### Digital/Pixel Styles

- **Canvas Options (Native):** `1:1` (sprite), `4:3` (classic screen), `16:9` (modern screen)
- **Canvas Control:** `format-native`
- **Resolution:** Specific pixel density requirements for declared ratio with hardware limitations
- **Production Method:** Authentic pixel art techniques, palette limitations, hardware constraints
- **Technical Requirements:** Exact pixel counts, color limitations, aliasing specifications, sprite grid constraints
- **IP Protection Standard:** Original sprite/character design
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
- **NanoBanana Note:** Standard poster ratios supported; magazine formats adapt to nearest portrait ratio with layout recalculation

------

## 📋 NanoBanana Quick Reference

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

This enhanced framework v4.3 (NanoBanana Edition) incorporates renderer-specific ratio constraints with intelligent adaptation protocols, ensuring historical and specialty formats can be faithfully reinterpreted within NanoBanana's supported dimensions while maintaining artistic authenticity and compositional integrity.