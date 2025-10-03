# Universal Museum-Grade Prompt Framework v4.2 (Enhanced)

**Version:** 4.2
 **Purpose:** A comprehensive scaffold that enforces **face, pose, scale, surface, expression, composition, and canvas control logic**, alongside medium-specific anchors with enhanced IP protection and period-accurate production methods. Enhanced with technique-specific precision based on Expressionist research.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
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

------

## Framework Sections

### 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[X:Y ratio]** - ignore source image dimensions completely.
- Redraw in **[Style/Movement]** for **[exact format specification]**.
- Identity via silhouette/gesture/expression.
- **IP Safeguard Declaration:** Create original designs avoiding copyrighted elements appropriate to chosen style category.
- Declare **Face-Treatment Flag**.
- Declare **Pose Flag**.
- Declare **Canvas Control Flag**.
- Optional **Media Hybrid Flag**.
- **Style Dominance line.**
- **Mode Selector** (panel, cover, poster, editorial, gallery).

------

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION (choose one exact specification):**

**PORTRAIT FORMATS:**

- `3:4` (classical portrait)
- `4:5` (Instagram portrait / van Gogh preferred)
- `2:3` (poster/magazine cover / Kirchner urban scenes / Schiele elongated)
- `9:16` (social story format)
- `3:10` (Chinese scroll vertical)

**LANDSCAPE FORMATS:**

- `4:3` (classical landscape / Kokoschka psychological portraits)
- `16:9` (cinematic widescreen)
- `5:3` (panoramic view)
- `10:3` (Chinese scroll horizontal)
- `21:9` (ultra-widescreen)

**SQUARE FORMATS:**

- `1:1` (album cover/Instagram post)

**SPECIALTY FORMATS:**

- `2.5:3.5` (playing card)
- `2.75:3.75` (collectible card)
- `8.5:11` (US magazine/letter)
- `11:17` (tabloid magazine)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** [extend-background/recompose-entirely/crop-and-center]
- **Spatial Allocation:** Subject placement [specific position in new ratio]
- **Background Treatment:** [how to fill new canvas space]
- **Format Justification:** [why this ratio serves the style]

------

### 3) Artistic Style & Context

- **Influences**.
- **Medium/Production method** with specific material physics requirements.
- **Thematic purpose**.
- **3–5 hallmark motifs** with quantified specifications where applicable.
- **Period framing**.
- **Tone Tag**.
- **Production Era Authenticity:** For publication styles, specify period-appropriate printing limitations, paper quality, and registration accuracy.
- If photographic: add **Innovation line** (Lighting / Format / Processing / Collaboration).

------

### 4) Technical Execution (≥5 anchors + measurement specifications)

- *Illustrated/Painted:* line quality with tool marks, color mixing methods, texture thickness specifications, edge treatment, stroke economy with directional requirements, surface depth measurements, detail hierarchy with proportional specifications, material simulation with authentic characteristics.
- *Photographic:* camera/lens specifications, film/ISO with grain characteristics, lighting type/power/angle with shadows, processing/post with period limitations, artifacts (grain, flare, halation) with authentic rendering.
- *Digital:* resolution density with pixel counts, rendering method limitations, layer economy, aliasing control specifications.
- *Publication/Print:* halftone quality with dot visibility, color registration accuracy with drift specifications, paper texture with absorption characteristics, ink bleed behavior, printing method limitations with period-appropriate imperfections.
- **Pose Anchors:** head tilt degrees, shoulder–hip angle differential, weight distribution percentages, gesture economy with specific hand positions.
- **Scale Hierarchy Anchor:** proportional measurements unless stylistically intentional (e.g., neck elongation 150%, paint thickness 3-5mm).
- **Material Authenticity Anchor:** authentic medium techniques with measurable surface characteristics - no digital simulation of traditional media.
- **Period Consistency Anchor:** all elements historically/stylistically coherent with documented production methods.
- **Production Method Anchor:** printing/reproduction techniques authentic to declared time period with characteristic imperfections.
- **Canvas Adaptation Anchor:** composition optimized for declared aspect ratio with format-specific layout considerations.

------

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

- **Wardrobe tracks** (adult fem/masc/androgynous/youth) with period-accurate construction methods.
- **Fabric behavior** (drape, sheen, period accuracy) with material physics considerations.
- **Accessory caps** (Minimalist 0–2 / Elaborate 3–4) with cultural authenticity.
- **Color palette** restrictions and period accuracy with dye technology limitations.
- **Wardrobe variation required:** Change primary garment colors/styles between iterations - cycle through period-appropriate palette avoiding identical repetition.
- **Props:** 1 hero + optional 1 micro (total ≤2) with cultural and period authenticity.
- **Coherence filter:** all elements support style/period with documented historical accuracy; fallback = clean scene.
- **YAML prop pools required** with cultural and temporal specificity.

------

### 6) Constraints

- **Canvas Negatives (≥2):** Include ratio-specific anti-patterns:
  - *For declared ratio:* "original aspect ratio", "source dimensions", "unmodified framing"
  - *Medium-specific:* Include anti-digital language for traditional media, anti-harmonious language for revolutionary techniques
  - *Publication-specific:* Include anti-modern printing language for historical publication styles
  - *Technique-specific:* Include constraints against conventional beauty for challenging artistic movements
- **Canvas Positives (≥2):** Include ratio enforcement:
  - *Required:* "exactly [declared ratio]", "recomposed for [format name]"
  - *Technique-specific:* Include authentic technique specifications with measurements
  - *Period-specific:* Include era-appropriate production method requirements with characteristic imperfections
  - *Process-specific:* Include material application methods and tool mark requirements
- **Vocabulary warnings:** Avoid "ornate," "ornament," "elaborate" if frame generation is unwanted. Avoid "harmonious," "pleasant," "beautiful" for revolutionary techniques.

------

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

- **For Portrait Ratios (3:4, 4:5, 2:3, 9:16):** Vertical emphasis, subject dominance ≥70%, hierarchical staging with format-specific considerations
- **For Landscape Ratios (4:3, 16:9, 5:3, 21:9):** Horizontal flow, environmental context ≥40%, panoramic staging with cultural viewing traditions
- **For Square (1:1):** Central balance, radial composition, equal weight distribution with format-specific layout rules
- **For Specialty Ratios:** Format-specific layout rules (card design, magazine hierarchy, scroll proportions, etc.)

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
- **Ratio Enforcement Anchor:** composition designed specifically for declared ratio, not adapted from different format

------

### 8) Typography & Text Integration

- **Binary:** omit or allow.
- **If allowed:**
  - **Ratio-Appropriate Zones:** Layout optimized for declared aspect ratio with period-appropriate hierarchy
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
- **Section 2:** Mandatory ratio selection + recomposition strategy + spatial allocation + background treatment + format justification
- **Section 3:** 5 fields + tone tag + production era authenticity (+ innovation if photo)
- **Section 4:** ≥5 anchors + measurement specifications + pose + scale + material authenticity + period consistency + production method + canvas adaptation
- **Section 5:** Wardrobe + YAML props + variation rules + cultural authenticity
- **Section 6:** ≥2 canvas negatives + ≥2 canvas positives + vocabulary warnings + technique-specific constraints
- **Section 7:** Ratio-specific composition + perspective/framing regime + figure:ground + density + lighting + detail:negative space + surface context + frame policy + production context + ratio enforcement anchor
- **Section 8:** Explicit text policy + ratio-appropriate layout + font rec + period accuracy + format-specific rules + production method integration
- **Canvas Control:** Exact ratio specified, recomposition strategy declared, original dimensions explicitly ignored
- **IP Protection:** Original design verified, appropriate safeguards applied per style category
- **Props ≤2:** fallback valid
- **Expression Anchor:** present if style depends on facial affect (deadpan, smile, solemn)
- **Material authenticity:** surface exhibits authentic medium characteristics with measurable specifications
- **Production authenticity:** printing/reproduction methods match declared period with characteristic imperfections
- **Composition boundaries:** no frames outside canvas
- **Period consistency:** all elements historically/stylistically coherent with documented methods
- **Ratio consistency:** all elements optimized for declared aspect ratio
- **Technical precision:** quantified measurements included where applicable
- **Process accuracy:** material application methods specified
- **Cultural authenticity:** indigenous and traditional methods respected
- **Revolutionary authorization:** challenging aesthetics permitted when historically accurate
- **Distinctiveness:** validated; no generic drift

------

## 🎨 Enhanced Style-Family Templates with Precision Requirements

### Traditional Painting Styles

- **Canvas Options:** `3:4` (portrait), `4:3` (landscape), `1:1` (tondo)
- **Canvas Control:** `adaptive-extend` or `source-respect`
- **Frame policy:** Omit Frame/Band Anchor entirely
- **Material emphasis:** Authentic paint/surface techniques with measurable thickness and tool marks
- **Background Extension:** "Extend [atmospheric/landscape] elements seamlessly to fill exact [ratio]"
- **IP Protection Standard:** No logos, trademarks, or signatures
- **Technical Requirements:** Specify paint thickness, brush direction, canvas preparation, drying characteristics

### Revolutionary Art Movements (Expressionism, Dadaism, Futurism)

- **Canvas Options:** Artist-specific ratios based on historical documentation
- **Canvas Control:** `strict-reframe` or `adaptive-extend`
- **Frame policy:** Omit entirely unless documented in movement
- **Material emphasis:** Authentic rebellious techniques with aggressive mark-making
- **Comfort violation:** Explicitly authorized for psychological impact
- **Technical Requirements:** Specify material destruction, conventional beauty prohibition, psychological attack methods
- **IP Protection Enhanced:** Original rebellion against established norms

### Character-Centric Styles (Comics, Animation, Pin-up, Fantasy, Manga)

- **Canvas Options:** `2:3` (comic cover), `2.75:3.75` (collectible card), `4:5` (modern poster)
- **Canvas Control:** `strict-reframe`
- **Layout:** Character-focused design hierarchy for exact format
- **IP Protection Enhanced:**
  - Original character design avoiding copyrighted costume elements
  - No recognizable superhero/villain iconography or symbols
  - Create distinct visual identity separate from existing properties
  - Avoid character names, locations, or terminology from copyrighted works
- **Production Authenticity:** Period-appropriate printing methods (halftone dots, color registration, newsprint texture) with documented imperfections

### Cultural Traditional Styles (Chinese, Persian, Japanese, Indigenous)

- **Canvas Options:** Format-dependent on cultural tradition with documented proportions
- **Canvas Control:** `format-native` or `source-respect`
- **Material emphasis:** Culturally authentic materials and techniques with traditional preparation methods
- **Cultural production:** Indigenous methods take precedence over modern interpretations
- **Technical Requirements:** Specify traditional tool use, substrate preparation, pigment sources, binding agents
- **IP Protection Standard:** Respect cultural authenticity and avoid appropriation

### Digital/Pixel Styles

- **Canvas Options:** `1:1` (sprite), `4:3` (classic screen), `16:9` (modern screen)
- **Canvas Control:** `format-native`
- **Resolution:** Specific pixel density requirements for declared ratio with hardware limitations
- **Production Method:** Authentic pixel art techniques, palette limitations, hardware constraints
- **Technical Requirements:** Exact pixel counts, color limitations, aliasing specifications, sprite grid constraints
- **IP Protection Standard:** Original sprite/character design

### Publication Styles (Magazines, Comics, Posters, Advertisements)

- **Canvas Options:** `2:3` (standard poster), `8.5:11` (magazine), `16:9` (landscape poster)
- **Canvas Control:** `strict-reframe`
- **Typography:** Essential integration with period-accurate typesetting and characteristic imperfections
- **Production Method Emphasis:**
  - **1940s-1960s:** Letterpress typography, halftone dots, color registration issues, newsprint texture
  - **1970s-1980s:** Photo-typesetting, improved color registration, coated paper stock
  - **1990s:** Early digital typesetting, high-quality offset printing
- **Technical Requirements:** Specific dot patterns, registration drift measurements, paper absorption characteristics
- **IP Protection Standard:** No trademarked logos, copyrighted imagery, or real brand elements

------

This enhanced framework v4.2 incorporates the critical lessons learned from Expressionist research: technical measurement authority, process-over-result priority, custom flag authorization, and anti-conventional bias for historically accurate reproduction of challenging artistic movements.
