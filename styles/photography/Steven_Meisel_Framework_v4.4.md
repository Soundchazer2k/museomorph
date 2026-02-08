---
id: steven_meisel
group: "Photography"
movement: "Studio Fashion Portraiture & Editorial"
artist: "Steven Meisel"
display_name: "Steven Meisel — Studio Fashion Photography & Model Direction (1985-2025)"
style_scope: single-artist
ratios: ["3:4","4:5","2:3"]
ratios_status: approved
ratios_notes: >
  Portrait-dominant ratios aligned with fashion editorial standards. 3:4 standard fashion magazine cover; 4:5 contemporary digital; 2:3 classic Vogue/Harper's Bazaar editorial proportions. All ratios emphasize vertical figure dominance (65-85% frame occupancy).
modes: ["Supermodel Portrait Glamour","Editorial Narrative & Conceptual","Contemporary Campaign/Commercial","Intimate Portrait Study"]
safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect
multi_subject:
  allowed: true
  max_subjects: 2
  layout_hint: "Primary figure dominant; secondary figure contextual or interacting"
  identity_priority: ["silhouette","gesture","face-proportions","makeup"]
hero_image: null
about: >
  Steven Meisel (b. 1954) revolutionized fashion photography through technical mastery of studio lighting, precision model direction, and strategic retouching that preserves skin texture while eliminating distractions. His work defines the aesthetic of 1990s-contemporary high fashion, spanning supermodel glamour (Supermodel portrait mode), conceptual fashion editorials with narrative depth (Editorial mode), commercial campaigns for luxury brands (Contemporary Campaign mode), and intimate close-crop portrait studies where makeup becomes the subject (Intimate mode). His signature combines technical studio perfection with authentic model expression—never overly polished, always psychologically present.

composition_constraints:
  max_subjects: 2
  subject_interaction: allowed
  crowd_scenes: false
  animals_allowed: false
  animal_types: []
  max_animals: 0
  text_allowed: no

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

# Steven Meisel — Studio Fashion Photography Framework v4.4 (NanoBanana Edition)

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Renderer Adaptation Mandate:** When target ratio unsupported, apply nearest-match adaptation per Section 2.1.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Model may resist ratio instructions and default to non-standard outputs. Combat this through:
  - Explicit ratio declaration in multiple prompt locations (Section 1, Section 2, Section 6)
  - Repetitive ratio reinforcement using different phrasings
  - Negative constraints explicitly prohibiting unwanted ratios
  - Compositional anchors designed specifically for target ratio
- **Photography-Specific Authenticity:** Studio lighting control is non-negotiable. All light must be deliberate, positioned, and measured. NO uncontrolled natural light or handheld camera artifacts.
- **Technical Measurement Authority:** Quantitative specifications (lighting angle in degrees, fill ratio 1:4-1:6, film grain 0.2-0.4mm equivalent) override descriptive language.
- **Retouching Philosophy:** Visible but not excessive. Skin texture preserved; blemish removal only; NO digital smoothing or airbrushing that removes authentic skin characteristics.
- **Process-Over-Result Priority:** Controlled studio setup supersedes natural-light aesthetic.
- **Anti-Conventional Bias:** Authority to generate technically perfect but psychologically intense or unconventional expressions when historically accurate to Meisel's subject direction.
- **Gender Expression Authority:** Preserve subject's presented gender identity through period-appropriate styling. Cross-mode consistency required.
- **Face-Treatment Flags (choose one):**
  - `studio-strobe-modeling` (primary)
  - `film-grain-triX` (classic Meisel grain signature)
  - `diffusion-soft` (glamour-specific softening)
  - `hard-flash` (editorial dramatic moments)
  - `reflective-specular-control` (highlights managed precisely)
  - `contact-print-scale` (large-format indexing)
- **Pose Flags (choose one):** `power-stance`, `psychological-tension`, `candid-motion`, `gestural-fluid`, `erotic-tension`, `contemplative-stillness`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `format-native`, `adaptive-extend`.
- **Material Physics Authority:** Film stock characteristics, digital sensor behavior, studio equipment limitations override aesthetic preferences.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures; no copyrighted designer details.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented gender identity with period-appropriate fashion through all modes.
- **Studio authenticity:** Backgrounds, lighting setups, and retouching must exhibit documentary control, not fantasy post-processing.
- **Mode Consistency Authority:** Subject's gender presentation and core characteristics remain consistent across Portrait/Editorial/Campaign/Intimate modes.
- **Failure Mode Flags:** Avoid natural-light defaults, handheld camera shake, uncontrolled backgrounds, excessive blur.
- **Silent validation:** Apply checklist, regenerate silently if fails.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary, explanations, historical context, or any content beyond Section 8.

---

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[3:4 OR 4:5 OR 2:3 ratio]** — ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[X:Y]**. This is a hard requirement. Ratio must appear in output filename as validation.
- **STUDIO FASHION PHOTOGRAPHY:** Redraw in Steven Meisel's studio fashion portraiture aesthetic for **[exact mode declaration: SUPERMODEL_PORTRAIT_GLAMOUR / EDITORIAL_NARRATIVE / CONTEMPORARY_CAMPAIGN / INTIMATE_STUDY]**.
- Identity via silhouette/gesture/expression/makeup-presentation.
- **Gender Expression Mandate:** Preserve subject's presented gender identity through period-appropriate fashion styling and makeup application. Cross-mode consistency required.
- **IP Safeguard Declaration:** Create original design avoiding copyrighted designer logos, real brand elements, or fashion house identifiers. Render garments without trademarks.
- **Face-Treatment Flag:** `studio-strobe-modeling` (primary) | `film-grain-triX` | `diffusion-soft` | `hard-flash`.
- **Pose Flag:** [Select from: `power-stance`, `psychological-tension`, `candid-motion`, `gestural-fluid`, `erotic-tension`, `contemplative-stillness`].
- **Canvas Control Flag:** `strict-reframe`.
- **Style Dominance:** Photography mode specific to mode declaration; maintain technical studio setup above all aesthetic considerations.
- **Mode Selector:** Mandatory mode declaration from 4 operational modes.
- **Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions. No pillarboxing, letterboxing, or padding.

---

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS (Native — No Adaptation Required):**

- ✅ `3:4` (portrait - 864×1184) — Standard fashion editorial
- ✅ `4:5` (portrait - 896×1152) — Contemporary digital standard
- ✅ `2:3` (portrait - 832×1248) — Classic magazine proportion

**MANDATORY RATIO SELECTION:** Choose one exact specification from supported ratios above (all three are fashion-editorial native).

**CANVAS RECOMPOSITION STRATEGY (Mode-specific):**

### SUPERMODEL_PORTRAIT_GLAMOUR Mode

- **Ratio Status:** native (all three ratios supported)
- **Reframing Method:** source-respect (figure-centered composition preserved, background extended if necessary)
- **Spatial Allocation:** Subject occupies 70-85% of frame vertically; head positioned in upper third (rule-of-thirds placement); face occupies 25-35% of total frame height
- **Background Treatment:** Neutral studio background (white, cream, or soft gray); zero environmental context; background occupies 15-30% frame
- **Format Justification:** Glamour portraiture demands vertical emphasis and face dominance; chosen ratio supports model-centric composition with breathing room above head

### EDITORIAL_NARRATIVE & CONCEPTUAL Mode

- **Ratio Status:** native
- **Reframing Method:** adaptive-extend (narrative context added when source is tight; spatial depth extended)
- **Spatial Allocation:** Primary figure 60-75% frame; secondary figure or contextual element 15-25%; background narrative 20-30%
- **Background Treatment:** Styled background, props, or architectural context; compositional depth 2-4 layers
- **Format Justification:** Conceptual narratives require horizontal breathing room and environmental storytelling; portrait ratios accommodate multi-figure or environmental integration

### CONTEMPORARY_CAMPAIGN Mode

- **Ratio Status:** native
- **Reframing Method:** strict-reframe (product or brand context integrated compositionally)
- **Spatial Allocation:** Figure 60-70% of frame; product/context 20-30%; strategic negative space 10-15%
- **Background Treatment:** Clean, purpose-built background (color-coordinated, branded aesthetic, or minimalist); zero clutter
- **Format Justification:** Commercial photography requires balanced composition; portrait ratios optimize for digital platform display and print campaign standards

### INTIMATE_STUDY Mode

- **Ratio Status:** native
- **Reframing Method:** strict-reframe (extreme closeup; makeup and facial feature emphasis)
- **Spatial Allocation:** Face occupies 60-80% of frame; extreme cropping below chin or mid-shoulder; makeup detail fully visible
- **Background Treatment:** Soft bokeh or neutral background (texture blurred); background occupies 20-40% only for context
- **Format Justification:** Intimate study mode emphasizes macro detail; cropping aggressive; portrait ratios support tight framing with vertical emphasis

---

## 3) Style Context & Material Authenticity

**Influences:** 
Irving Penn's studio control and typological precision; Richard Avedon's psychological model direction and retouching honesty; fashion photography tradition of technical studio mastery; 1980s-2000s high-fashion editorial aesthetic; contemporary digital photography evolution.

**Medium/Production Method:**
- Phase 1 (1985-1995): Large-format film (Hasselblad, Mamiya RB67); Tri-X or color film stock; natural and strobe hybrid lighting; optical viewfinder precision; chemical darkroom retouching
- Phase 2 (1995-2010): Digital capture (Canon EOS, Phase One); studio strobes exclusively; RAW post-processing; selective skin retouching; texture preservation mandatory
- Phase 3 (2010-present): High-end digital capture; LED and strobe hybrid systems; computational photography; retouching discipline unchanged; skin texture preserved; makeup as subject
- **Material Physics:** Professional-grade studio lighting (Profoto, Elinchrom strobes); color-corrected modifiers; reflectors and diffusion; precise fill ratios; no handheld equipment

**Thematic Purpose:**
Fashion authority and model elevation. Meisel's work positions models as powerful, psychologically complex figures—not objects. Photography serves fashion narrative while centering human presence, expression, and directorial vision.

**3-5 Hallmark Motifs with Quantified Specifications:**

1. **Perfect Technical Studio Setup** — Measured 100% on all test cycles; strobes positioned 45-60° from camera axis; fill ratio 1:4 to 1:6 (shadow luminance 1.8-2.2:1 compared to key); all lighting deliberate and controlled
2. **Skin Texture Preservation** — Quantified: blemish removal only; zero digital smoothing; pore texture visible at print scale; retouching limited to 10-15% of surface area
3. **Makeup as Protagonist** — When present: makeup occupies 30-40% of face luminosity variation; eye rendering includes iris detail, specular highlights, and upper-lid shadow; lip color saturated (S: 60-80%) and precise
4. **Expression Range Controlled Intensity** — Expressions vary from serene to intense to confrontational; always psychologically present; never neutral or vacant; eye contact or deliberate gaze direction strategic
5. **Zero Background Compromise** — Backgrounds clean and intentional; white (L: 92-96%), cream (L: 85-90%), gray (L: 60-70%), or styled context; zero accidental clutter or environmental distraction

**Period Framing:** Steven Meisel active 1985-present (40 years documented work). Style divisions: Early Phase (1985-1992 experimental), Classic Phase (1992-2005 supermodel era), Contemporary Phase (2005-present digital transition).

**Tone Tag:** Psychologically intense, technically immaculate, fashion-authoritative, model-elevating.

**Production Era Authenticity:**
- Film era (pre-2000): Characteristic grain 0.3-0.6mm equivalent; color rendering tied to specific film stocks (Kodak Portra warmth, Fujifilm Provia saturation); soft focus through optical diffusion, not digital blurring; skin tones warm (H: 15-35°)
- Digital era (2000-present): Precise color grading; noise-free capture; skin texture priority over smoothness; makeup as technical subject; retouching discipline applied surgically

---

## 4) Technical Method & Mark-Making

### SUPERMODEL_PORTRAIT_GLAMOUR Mode

#### Context
Defines 1990s fashion supermodel photography. Soft studio lighting emphasizes facial geometry and bone structure. Subject positioned for maximum flattery and power. Makeup elevated to technical perfection. Backgrounds eliminated entirely—pure focus on face and shoulders. This mode produces the iconic portrait aesthetic associated with Vogue covers and editorial spreads from the peak supermodel era.

#### Measurements
- **Studio Setup:** Strobes positioned 45-50° from camera axis; key light intensity 1500±300 nits; fill ratio 1:5 (shadow luminance L=25-35, key luminance L=75-85)
- **Film Grain:** 0.3-0.5mm equivalent (Tri-X or digital equivalent); visible but not distracting; characteristic 1990s photographic signature
- **Skin Rendering:** Base skin tone H=15-35° (warm), S=20-40% (muted), L=65-75%; freckles/moles preserved; blemish removal only; texture visible
- **Eye Rendering:** Iris occupies 25-30% of eye width; pupil shows double specular highlights from dual key/fill strobes; upper eyelid shadow (L: 40-50); eye whites maintain subtle warmth (L: 90-95)
- **Makeup Intensity:** When present: base coverage full (95%+); eye shadow 2-3 colors blended across lid (L range: 30-70); liner sharp (black, L: 5-10); lip color saturated (S: 70-85%, L: 50-65)
- **Hair Rendering:** Hair shows directional light catch (highlights L: 85-92); individual strand texture visible; no blur; density 85-95% coverage of scalp
- **Background:** Neutral studio white (L: 94-96%) or cream (L: 88-92%); pure gradient or featureless; occupies 15-25% of frame below shoulders
- **Figure Occupancy:** Head 25-35% frame height; shoulders to crop (3:4 ratio ends at lower shoulder); vertical emphasis 75-85% total frame
- **Lighting Ratio Variance:** Glamour fills strongly (1:5 ratio softens shadows); result: flattering, not dramatic; shadow floor luminance L≥25

#### Technique
- **Key Light Setup:** 45-50° angle from camera axis; positioned 18-24 inches above eye line; reflector or second strobe as fill at 1:5 ratio; result: defined cheekbones without harsh shadows
- **Strobe Characteristics:** Professional studio strobes (Profoto Acute heads or equivalent); color temperature 5500-5600K; flash synchronization 1/250s; no ambient light contamination
- **Retouching Protocol:** Selective blemish removal (1-2 pass maximum); zero skin smoothing; texture preservation mandatory; eye whites brightened by 1-2 units (L: to 93-95); teeth whitened by 2-3 units if visible
- **Makeup Application Rendering:** Foundation seamless (H consistency across face); contouring visible as tonal gradation, not color shift; blush as warm undertone (H: 10-20°) blended 1-2 inches from cheekbone; eyes layered (lid shadow + liner + highlight); lips precisely rendered with defined edge
- **Hair Light:** Optional hair light at 60-90° angle creates rim catch on hair edges; lift luminance by 5-10 units above key light; halo effect subtle, not blown-out
- **Canvas Positioning:** Face centered vertically (slightly above optical center); head room 2-3 inches above frame; horizontal centering within 5%

#### Validation
- Hair texture clearly visible; individual strand definition present
- Eye specular highlights appear as dual dots (key + fill strobe signature)
- Skin tone warm (H: 15-35°) and consistent across face
- Background exactly white (L: 94-96%) or cream (L: 88-92%), zero environmental context
- Face occupies 25-35% of frame height
- Blemish removal executed; zero digital smoothing artifacts
- Makeup, if present, sharp-edged and saturated (S: 70-85%)
- Shadow floor luminance L≥25 (readable detail in darkest zones)

#### Automated Corrections
- [Cycle 1 baseline — no prior corrections]

---

### EDITORIAL_NARRATIVE & CONCEPTUAL Mode

#### Context
Multi-figure or environmental composition. Fashion narrative extends beyond individual portrait to include conceptual context, props, or secondary figures. Lighting more dramatic than glamour mode—directional and purposeful. Makeup may be conceptual or experimental. Backgrounds become compositional partners rather than elimination targets. This mode characterizes conceptual editorials from Vogue, W Magazine, and European fashion publications where fashion serves narrative intent.

#### Measurements
- **Studio Setup:** Strobes positioned 30-60° range (wider variation than glamour); key light intensity 1200-1800 nits (more variation); fill ratio 1:4 to 1:8 (deeper shadows acceptable); shadow luminance L=20-40
- **Composition Depth:** 2-4 distinct depth layers (foreground figure, midground context, background); environmental context occupies 25-35% of frame
- **Skin Rendering:** Varies by narrative intent: base tone H=10-40° (wider hue range), S=15-45%, L=55-80% (broader L range for psychological effect); texture preserved; aging details may be emphasized for narrative
- **Eye Rendering:** Variable intensity; from intimate (pupil detail visible, specular highlights dual) to distant (minimal eye detail); iris size 20-35% of eye width depending on narrative distance
- **Makeup:** Conceptual application acceptable; color saturation S: 50-85% (lower if narrative-driven desaturation); liner style variable (sharp or soft depending on mode); lips may shift from natural to experimental
- **Hair Rendering:** May show movement blur (1-3 pixels) if narrative includes motion; directional catch consistent with key light; texture visible at primary subject resolution
- **Background:** Styled environment (architectural, interior, conceptual); includes props, secondary figures, or environmental elements; detail density 40-60% of background area; atmospheric depth (3-5 value zones creating recession)
- **Figure Occupancy:** Primary figure 50-70%; secondary figure/context 20-35%; compositional balance asymmetrical but intentional
- **Lighting Ratio Variance:** Editorial allows deeper shadows (fill ratio 1:4 to 1:8); result: more dramatic, moodier; shadow floor luminance L≥20 (may approach crushed blacks for effect)

#### Technique
- **Key Light Positioning:** 30-60° angle range; height variation (sometimes below eye line for uplighting effect); directional intensity creates psychological mood
- **Fill Strategy:** Reduced fill ratio (1:4-1:8) creates shadow depth; shadows may show color cast from fill source (cool or warm depending on narrative)
- **Environmental Integration:** Background lit separately from figure; may be brighter or darker depending on narrative; depth established through value gradient (background lighter or darker than midtone figure)
- **Makeup Rendering:** Conceptual makeup may include color shifts, asymmetrical application, or experimental textures; rendered with precision matching applied intent
- **Motion Considerations:** If narrative includes gesture or implied motion: arm or hair may show subtle motion blur (1-3 pixels); primary face remains sharp; movement direction consistent with lighting and pose
- **Secondary Figure Rendering:** If present: slightly lower resolution/detail than primary figure; same lighting logic; interplay between figures creates composition tension
- **Prop Rendering:** Props sharp and detailed; material authenticity preserved (fabric weight, surface sheen, worn characteristics); positioned to support narrative without overwhelming primary subject

#### Validation
- Environmental context visible and compositionally integrated (background occupies 25-35%)
- Skin tone varied appropriately to mood/lighting (H: 10-40°)
- Shadow detail retained (shadow floor L≥20)
- Makeup, if present, matches conceptual intent precisely
- Multi-figure composition (if applicable) shows intentional interaction or positioning
- Atmospheric depth present (3-5 distinct value zones in background)
- Lighting drama appropriate to narrative (may include rim light, uplighting, or color-cast fill)

#### Automated Corrections
- [Cycle 1 baseline — no prior corrections]

---

### CONTEMPORARY_CAMPAIGN Mode

#### Context
Commercial fashion campaign photography. Subject positioned for product/brand integration. Lighting optimized for commercial clarity and model flattery. Makeup applied to commercial standards (elevated but not experimental). Backgrounds styled to brand aesthetic or minimalist commercial context. This mode characterizes luxury brand advertising, contemporary editorial campaigns, and commercial beauty/fashion work.

#### Measurements
- **Studio Setup:** Strobes positioned 40-55° (standard commercial angle); key light intensity 1600-2000 nits (bright, clear aesthetic); fill ratio 1:3 to 1:5 (balanced, not deep shadows); shadow luminance L=30-40
- **Composition Brightness:** Overall scene luminance L≥65 (bright commercial aesthetic); face region L≥70; no deep shadows competing with subject
- **Skin Rendering:** Clean, bright aesthetic; base tone H=15-35° (warm), S=25-45%, L=70-80% (higher L than editorial mode); blemish removal only; texture subtle but present
- **Eye Rendering:** Iris 25-30% of eye width; dual specular highlights prominent (commercial hallmark); eye whites bright (L: 94-97%); upper lid shadow soft (L: 50-60)
- **Makeup:** Commercial application standards; foundation seamless; contouring subtle (tonal gradation, not color); blush natural-warm (H: 15-25°, S: 40-60%); eyes defined but not experimental (neutrals, warm tones, or brand-signature colors); lips saturated and precise (S: 70-85%, edge sharp)
- **Hair Rendering:** Shiny, healthy appearance; individual strands visible; highlights bright (L: 88-94); texture shows movement or controlled styling
- **Background:** Clean and brand-appropriate; white (L: 95-98%, brightest tier), cream, or brand color; may include subtle texture or gradient; occupies 20-30% of frame; zero clutter
- **Figure Occupancy:** Subject 65-75% of frame; balanced composition; product (if present) integrated without competing with face; negative space 15-25% strategically positioned
- **Lighting Ratio Variance:** Commercial fill strong (1:3-1:5 ratio); result: flattering without dramatic shadows; bright, approachable aesthetic; shadow floor luminance L≥30

#### Technique
- **Key Light Setup:** 40-55° angle; positioned 16-20 inches above eye line; commercial strobes (high output, color-corrected 5500K); synchronization precise; no spill onto background unless intentional brand integration
- **Fill Strategy:** Bright fill (1:3-1:5 ratio) from reflector or dedicated fill strobe; fill catch on cheek and eye is visible and intentional; results in friendly, approachable lighting
- **Background Lighting:** Background lit slightly brighter than midtone figure (commercial brightness standard); creates separation and product visibility; gradient or fade to pure white at edges acceptable
- **Makeup Rendering:** Foundation seamless; contouring rendered as subtle luminance variation (L range: 3-5 units) rather than color shift; blush natural and warm; eyes enhanced but commercial (not conceptual); lips precise and brand-appropriate if specified
- **Hair:** Styled with commercial grooming; shine evident; movement subtle or controlled; no flyaways unless intentional to brand aesthetic
- **Product Integration:** Product (if jewelry, clothing, etc.) rendered with material authenticity; metal surfaces reflective; fabric shows weight and drape; no blur or secondary rendering
- **Post-Processing Signature:** Clean and bright; retouching surgical (blemish removal, slight eye brightening); zero digital smoothing or Instagram filters; authentic skin texture preserved

#### Validation
- Overall scene bright (L≥65)
- Face luminance bright (L≥70)
- Background clean and brand-appropriate (L: 95-98% if white)
- Makeup commercial standard (enhanced, not experimental)
- Product, if present, sharp and material-authentic
- Negative space balanced and strategic (15-25%)
- Shadow floor bright (L≥30, no crushed blacks)
- Skin texture visible; zero digital smoothing

#### Automated Corrections
- [Cycle 1 baseline — no prior corrections]

---

### INTIMATE_STUDY Mode

#### Context
Extreme closeup portraiture. Makeup and facial feature detail become the primary subject. Lighting soft and diffused to emphasize texture and color rather than drama. Cropping aggressive—often below chin or mid-shoulder. Backgrounds blurred or minimal. This mode characterizes close-crop editorial beauty, makeup-focused photography, and intimate portrait studies where the human face is explored rather than flattered.

#### Measurements
- **Framing Extreme:** Face occupies 60-80% of frame; crop often below chin; close enough that skin pore texture is visible at intended display scale
- **Studio Setup:** Softer modifiers (large softbox 3-5 feet wide); diffusion across strobe output; key light 35-50° angle positioned high to emphasize cheekbones; minimal fill (fill ratio 1:6 to 1:8 acceptable for mood)
- **Skin Rendering:** Texture emphasized, not hidden; pore size visible; fine hair (peach fuzz) may be rendered; color variation (rosacea, freckles, age spots) preserved; blemish removal minimal or none depending on narrative; base tone H=15-40° (broad range), S=20-50%, L=60-75%
- **Eye Rendering:** Iris occupies 30-40% of eye width (magnified by close crop); pupil detail visible including light refraction; upper lid shadow emphasized (L: 35-50); eye lashes individually rendered; tear duct shadow included
- **Makeup Detail:** Individual makeup elements magnified; foundation blending visible; eye shadow blending shown across lid; liner applied to lash line (sharp); lip texture visible (not perfectly smooth); makeup edges visible, not smudged
- **Hair Rendering:** Only hair immediately surrounding face visible; individual strands distinct; hair texture (wave, curl, shine) emphasized; hair does not dominate crop (max 15-20% of frame)
- **Background:** Soft bokeh (out-of-focus background) or neutral; background occupies 20-40% of frame only; colors soft and desaturated if visible; focus entirely on face
- **Lighting Quality:** Diffused and soft to emphasize texture; no hard shadows under nose or jaw; shadows show color (not pure black); result: intimate and vulnerable, not flattering studio glamour
- **Tonal Range:** Full tonal range compressed to face/neck area; shadow floor luminance L≥20; highlights on cheekbone or nose bridge bright (L: 85-92)

#### Technique
- **Key Light Diffusion:** Large softbox or diffusion-modified strobe; key position 35-50° angle, often slightly high to emphasize cheekbone structure and reduce unflattering shadows
- **Fill Strategy:** Minimal or none; shadows allowed to deepen; result: moody and introspective; if fill present (1:6-1:8 ratio), may be single reflector showing subtle catch on cheek
- **Crop Positioning:** Frame cuts below lower lip or at mid-shoulder; horizontal centering allows slight off-axis positioning for psychological effect; eye line typically in upper third of frame
- **Makeup Rendering:** Every application layer visible; foundation coverage shows blending patterns; eye makeup layering (base, contour, highlight) visible; liner crisp; lip application sharp-edged; any powder, cream, or liquid medium texture apparent
- **Skin Texture Emphasis:** Pore size rendered; fine hair present; scars or marks included unless aesthetic intent specifies removal; color variation from blushing, chill, or natural skin tone variation included
- **Background Blur:** If visible background present: out-of-focus rendering; luminance soft (L: 60-80%); saturation muted (S: 20-40%) to recede from sharp face focus
- **Hair Texture:** Hair immediately framing face shows individual strand definition; shine/matte balance authentic to hair type; wave or curl pattern visible; hair styling intentional (not windblown)
- **Eye Intensity:** Pupils dilated or focused creating psychological presence; direct gaze or deliberate gaze direction strategically chosen; eye contact intimate or averted intentionally

#### Validation
- Face occupies 60-80% of frame (extreme closeup)
- Skin texture and pores visible; makeup layers distinguishable
- Eye detail magnified (iris 30-40% eye width)
- Background minimal and soft (bokeh or blurred, occupies max 40%)
- Crop below chin or mid-shoulder; head room absent or minimal
- Lighting soft and diffused (no hard shadows)
- Makeup edges visible; individual application elements present
- Hair texture visible; personal grooming detail evident
- Psychological intensity high; expression deliberately directed

#### Automated Corrections
- [Cycle 1 baseline — no prior corrections]

---

## 5) Wardrobe, Props & Setting Conventions

**TEMPORAL WARDROBE MANDATE:**

- **Artist Active Period:** 1985-present (40 years documented work)
- **CRITICAL PROHIBITION:** No anachronistic clothing; maintain period authenticity for mode context
- **Mode-Specific Wardrobe Requirements:** Fashion appropriateness varies by mode (Glamour = editorial elegance, Editorial = conceptual/fashion-forward, Campaign = brand-appropriate, Intimate = foundation garments or minimal)

**EYEWEAR PROTOCOL:**
- **Glasses ONLY if brand-critical:** Designer eyewear as fashion statement acceptable when mode-appropriate (especially Contemporary Campaign); otherwise omit
- **Sunglasses:** Only in outdoor/campaign contexts; never indoors during studio modes

**MODE-SPECIFIC WARDROBE TRACKS:**

### SUPERMODEL_PORTRAIT_GLAMOUR Mode

**Adult Feminine:**
- Classic tailoring with fashion authority: silk blouses, fitted blazers, turtlenecks emphasizing neck/jawline geometry
- Fabric types: silk charmeuse, cashmere, fine wool, linen
- Necklines: high neckline or boat neck emphasizing clavicle and neck structure; V-necks acceptable
- Color palette: neutrals (black, white, cream, gray, camel, navy), jewel tones (sapphire, emerald, deep burgundy)
- Jewelry: minimal (0-1 statement piece); gold or silver depending on skin undertone; no clutter
- Hairstyle: sleek and controlled (pulled-back, half-up, or tousled precision); shows face geometry; hair off face preferred
- Makeup: commercial to editorial standards (full coverage, defined eyes, precise lips, S: 60-85%)

**Adult Masculine:**
- Tailored and powerful: fitted shirts, structured blazers, turtlenecks
- Fabric types: fine cotton, silk blends, cashmere, wool suiting
- Necklines: high collar, crew neck, or open collar (top 2-3 buttons undone acceptable for power intimacy)
- Color palette: neutrals (white, cream, gray, black, navy, charcoal) or jewel tones in knitwear
- Jewelry: minimal (watch, signet ring, or chain optional); no clutter
- Facial hair: clean-shaven or precisely groomed stubble (1-2 day growth); beard sculpted if present
- Hairstyle: structured and controlled; off-face styling; shows face geometry
- Makeup: minimal (skin preparation only); beard definition enhanced if applicable

### EDITORIAL_NARRATIVE & CONCEPTUAL Mode

**Adult Feminine:**
- Fashion-forward and experimental: designer pieces, conceptual silhouettes, layered textures
- Fabric types: silk, linen, cotton, technical fabrics, mixed textures; may include prints or patterns serving narrative
- Necklines: variety acceptable (high, low, asymmetrical) depending on narrative intent
- Color palette: expanded (brights, jewel tones, blacks, whites, narrative-driven colors); saturation may be high or muted by narrative
- Styling: may be provocative, minimal, layered, or conceptually unusual; fashion authority paramount
- Jewelry: 0-3 pieces; may be sculptural or statement-making; integrated to narrative
- Hairstyle: variable by narrative (slicked-back, voluminous, textured, unconventional); serves concept
- Makeup: conceptual acceptable (asymmetrical, color-shifted, experimental); from natural to dramatic range

**Adult Masculine:**
- Fashion-forward tailoring or conceptual styling: designer pieces, varied silhouettes, layered looks
- Fabric types: mixed materials (cotton, linen, silk, technical); texture variety intentional
- Styling: may be minimal, layered, or conceptually distinctive; fashion narrative drives choices
- Necklines: open, high, asymmetrical depending on concept
- Color palette: expanded and narrative-driven; from neutrals to bold colors
- Jewelry: 0-2 pieces; may be conceptual or narrative-supporting
- Facial hair: variable (clean-shaven, stubble, beard); serves narrative intent
- Hairstyle: variable by concept (styled, tousled, unconventional); serves fashion/narrative

### CONTEMPORARY_CAMPAIGN Mode

**Adult Feminine:**
- Brand-appropriate luxury fashion: current-season designer pieces, tailored silhouettes, premium fabrics
- Necklines: varied (high, low, off-shoulder) based on brand aesthetic; showcases neck/shoulder geometry
- Color palette: brand-aligned colors; typically neutrals or signature brand hues; high saturation if brand-specific
- Styling: polished and aspirational; current-season appropriateness; no vintage or conceptual elements unless brand-driven
- Jewelry: 0-2 pieces; brand-appropriate; may include campaign-specific pieces (watches, handbags if product-tied)
- Hairstyle: on-trend and polished; movement or control depending on brand; shows face clearly
- Makeup: commercial beauty standards (polished, current-trend, brand-appropriate if cosmetics brand)

**Adult Masculine:**
- Brand-appropriate luxury fashion: tailored contemporary pieces, premium fabrics, current-season styling
- Necklines: varied by brand (open collar, crew, high); showcases neck/shoulder definition
- Color palette: brand-aligned; typically neutrals or signature brand colors
- Styling: polished and aspirational; current-season; no conceptual elements unless brand-driven
- Jewelry: 0-1 pieces; brand-appropriate watch or subtle accessories
- Facial hair: clean-shaven or precisely groomed (brand-dependent); no stubble unless brand aesthetic
- Hairstyle: on-trend, styled; shows face and bone structure clearly

### INTIMATE_STUDY Mode

**Adult Feminine:**
- Foundation garments or minimal clothing: tank top, strappy top, or bare shoulders acceptable for makeup focus
- Neckline: high or off-shoulder to showcase jawline and neck
- Fabric: simple (cotton, jersey, silk); texture minimal to focus on face
- Color: neutrals (black, white, gray) to avoid color competition with facial makeup
- Styling: minimal; no accessories; hair off face entirely
- Makeup: elevated and precise; may be experimental or highly detailed (this is the subject)

**Adult Masculine:**
- Minimal clothing: tank top, bare chest acceptable, or simple shirt
- Neckline: high or open to showcase jawline
- Fabric: simple and minimal
- Color: neutral to avoid competing with face/makeup focus
- Styling: minimal; no accessories; grooming elevated (facial hair sharp, skin prep visible)

**Fabric Behavior:**
- Silk: fluid drape, subtle sheen, responsiveness to movement
- Cashmere: soft surface, subtle pile texture, weight evident
- Wool: structural integrity, slight texture, formal or relaxed depending on weight
- Linen: natural texture, wrinkle honesty, breathable appearance
- Cotton: versatile, appropriate weight, natural finish

**Temporal Color Palette Restrictions:**
- All modes (1985-present): Modern color palette; no period restriction (contemporary photography context)
- Vivid colors acceptable; fluorescent/neon only if brand-appropriate

**Gender-Differentiated Accessory Specifications:**

| Mode | Feminine Accessories | Masculine Accessories |
|------|---------------------|----------------------|
| **Glamour** | 0-1 (necklace, ring, earring) | 0-1 (watch, chain) |
| **Editorial** | 0-3 (statement-making, narrative-supporting) | 0-2 (conceptual or subtle) |
| **Campaign** | 0-2 (brand-appropriate, product-tied if applicable) | 0-1 (brand-appropriate watch/subtle) |
| **Intimate** | 0 (foundation only) | 0 (minimal grooming only) |

**Wardrobe Variation Required:**
- Change garment styles/colors between iterations within same mode
- Maintain mode aesthetic while varying silhouette/color
- Cross-mode consistency: same subject wears gender-appropriate clothing across all modes

**HAIR TREATMENT — MANDATORY PRESERVATION AND PERIOD ADAPTATION:**

**CRITICAL PRESERVATION REQUIREMENTS:**
- **Hair length MUST be preserved:** Short hair remains short, medium remains medium, long remains long
- **Hair color MUST be preserved:** Maintain subject's natural hair color exactly
- **Baldness MUST be preserved:** Bald or balding subjects remain bald/balding
- **Facial hair presence MUST be preserved:** If subject has no facial hair, DO NOT add beards/mustaches

**PERIOD STYLING ADAPTATION (Preserving length/color/presence):**
Contemporary photography (1985-present) allows full range of modern hairstyles while preserving length/color/baldness/facial hair presence.

**MODE-SPECIFIC HAIR TREATMENT:**

**Glamour Mode - Hair Styling:**
- **Feminine:** Sleek and controlled (pulled-back, half-up, smooth); hair off face; shows jaw/neck geometry
- **Masculine:** Structured and precise; off-face styling; shows bone structure
- **Headwear:** Not typical; omit

**Editorial Mode - Hair Styling:**
- **Feminine:** Variable by narrative (smooth, voluminous, textured, unconventional); serves concept
- **Masculine:** Variable by concept (styled, tousled, unconventional); fashion-forward
- **Headwear:** Acceptable if narrative-appropriate (hat, headwrap, etc.)

**Campaign Mode - Hair Styling:**
- **Feminine:** On-trend and polished; shows face; may have movement or control per brand
- **Masculine:** On-trend and styled; shows face and bone structure
- **Headwear:** Omit unless brand-specific (hat with logo, etc.)

**Intimate Mode - Hair Styling:**
- **Feminine:** Pulled entirely off face; maximum face visibility; texture visible
- **Masculine:** Off face entirely; shows bone structure and jawline
- **Headwear:** Omit entirely

**Facial Hair Mandate:**
- If subject is clean-shaven: maintain clean-shaven appearance; grooming precise
- If subject has facial hair: style to contemporary grooming standards (beard sculpted, stubble even, mustache shaped)
- DO NOT add facial hair where none exists
- DO NOT remove facial hair that exists

**MODE-SPECIFIC GENDER-DIFFERENTIATED PROP POOLS:**

```yaml
glamour_mode:
  feminine_props: [designer_handbag, silk_scarf, luxury_watch, statement_necklace]
  masculine_props: [luxury_watch, leather_briefcase, designer_sunglasses, signet_ring]
  context: Studio backdrop; zero environmental props; focus entirely on figure and face

editorial_conceptual:
  feminine_props: [conceptual_sculpture, art_book, fashion_accessory, narrative_object, experimental_prop]
  masculine_props: [architectural_element, conceptual_prop, fashion_object, narrative_artifact]
  context: Narrative-driven; props support fashion/conceptual story

contemporary_campaign:
  feminine_props: [brand_product_if_applicable, luxury_handbag, designer_accessory, lifestyle_prop]
  masculine_props: [brand_product_if_applicable, luxury_watch, lifestyle_prop]
  context: Brand-aligned; product integration if applicable

intimate_study:
  feminine_props: [] (none; makeup is the subject)
  masculine_props: [] (none; face/grooming is the subject)
  context: Zero props; face and makeup/grooming focus only
```

**Temporal Prop Validation:**
- All props contemporary to photography era (1985-present)
- No anachronistic items
- Props serve fashion narrative, not distraction

**Setting Authenticity:**

| Mode | Setting | Characteristics |
|------|---------|-----------------|
| **Glamour** | Studio | White, cream, or neutral background; featureless; professional |
| **Editorial** | Styled Set or Location | Architectural context, props, environmental narrative |
| **Campaign** | Studio or Branded Location | Clean, purposeful; brand-aligned aesthetics |
| **Intimate** | Studio or Minimal | Bokeh background or neutral; focus entirely on face |

**Coherence Filter:**
- All elements support mode and fashion narrative
- No modern technical artifacts (unless documented in contemporary photography)
- Wardrobe, props, setting, and makeup unified

---

## 6) Safety & IP Constraints (Hard Rules)

**Canvas Negatives (≥2):**
- "source image dimensions" / "original aspect ratio" / "unmodified framing"
- "1632×640" / "non-standard ratios" / "arbitrary dimensions" / "default aspect ratio"
- "pillarboxing" / "letterboxing" / "padding to simulate ratio"
- "handheld camera shake" / "uncontrolled natural light" / "ambient light contamination"
- "digital blur" / "out-of-focus composition" / "handheld focus errors"
- "generic fashion photography" / "conventional studio lighting" / "standard headshot"
- "brand logos" / "trademarked designer labels" / "copyrighted imagery" / "real fashion house identifiers"
- "overly smoothed skin" / "digital airbrushing" / "Instagram filter aesthetic" / "excessive retouching"
- "uncontrolled background clutter" / "distracting environmental elements"
- "generic expression" / "vacant stare" / "psychologically absent" / "lifeless eyes"

**Canvas Positives (≥2):**
- "exactly [declared ratio]" / "recomposed for [format]" / "MUST be [X:Y] aspect ratio"
- "strict [X:Y] aspect ratio compliance" / "precise [X:Y] dimensions" / "composed specifically for [X:Y]"
- "studio photography controlled light" / "deliberate strobe positioning" / "professional studio setup"
- "film grain visible" / "photographic texture authentic" / "Tri-X grain signature 0.3-0.5mm"
- "skin texture preserved" / "blemish removal only" / "zero digital smoothing"
- "psychologically present expression" / "controlled model direction" / "authentic eye contact or deliberate gaze"
- "technical retouching honesty" / "Meisel signature retouching discipline" / "texture preservation mandatory"
- "period-appropriate styling" / "contemporary fashion context" / "brand-aligned aesthetic"
- "makeup rendered precisely" / "makeup layers distinguishable" / "makeup application authentic to mode"

**Vocabulary Warnings:**
- Avoid "soft focus" unless diffusion explicitly applied (use "diffused lighting" instead)
- Avoid "polished" if implying digital smoothing (use "clean" or "bright" for commercial modes)
- Avoid "natural" lighting in studio modes (all light is deliberate and controlled)
- Avoid "airbrushed" or "flawless" (use "technically precise" or "retouching discipline")
- Avoid "magazine cover" if background should be studio (specify "editorial portrait" instead)

**No Nudity/Gore/Logos/Watermarks/Signatures/Frames**

**Gender Expression Consistency:** Subject's gender presentation maintained across all modes with period-appropriate styling

**Hair Preservation:** Length, color, baldness, and facial hair presence maintained; styling adapted to mode/period

---

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS (All modes):**

### Portrait Ratios (3:4, 4:5, 2:3)
- Vertical emphasis, subject dominance 65-85%
- Hierarchical staging: face primary, shoulders secondary, background tertiary
- Head room 2-5% of frame (minimal); crop positioning deliberate

**STYLE-SPECIFIC COMPOSITION:**

### SUPERMODEL_PORTRAIT_GLAMOUR — Composition (3:4 / 4:5 / 2:3)

- **Illustrated/Painted Logic:** N/A (photography mode)
- **Photographic Framing:** Seamless studio background; subject centered horizontally within 5%; face positioned slightly above optical center (upper third placement)
- **Lens Equivalent:** 85-105mm equivalent (fashion portrait standard); compression flatters facial geometry; shallow depth-of-field (aperture f/2.8-f/4) if film-era simulation
- **Film/Stock Anchor:** Tri-X or color negative simulation (grain 0.3-0.5mm, color warmth H: 15-35°)
- **Lighting Logic:** 45-50° key light angle; fill ratio 1:5; result: flattering, not dramatic; face luminance L: 75-85
- **Figure:Ground %:** 75-85% figure occupancy; 15-25% background
- **Density %:** Background featureless (0-5% detail); zero environmental clutter; visual weight entirely on figure
- **Detail:Negative Space Ratio:** All detail concentrated on face/shoulders; no competing elements; pure portrait focus

**Anchors Required:**
- **Surface Context Anchor:** White, cream, or neutral studio background (featureless); professional studio setup; pure gradient or flat tone
- **Frame/Band Anchor:** Omit entirely (pure portrait, no design frame)
- **Production Context Anchor:** Professional studio photography; strobe lighting; controlled environment; 1990s-contemporary aesthetic
- **Ratio Enforcement Anchor:** Composition designed for declared ratio (3:4, 4:5, or 2:3); face centered horizontally, upper-third placement vertically
- **Gender Expression Anchor:** Styling appropriate to subject's gender; cross-mode consistency in gender presentation
- **Mode-Specific Composition Anchor:** Glamour mode emphasizes face over environment; maximum simplicity; portrait focus paramount

---

### EDITORIAL_NARRATIVE & CONCEPTUAL — Composition (3:4 / 4:5 / 2:3)

- **Illustrated/Painted Logic:** Multi-figure or environmental composition; narrative depth established through props, secondary figures, or architectural context
- **Photographic Framing:** Varied (figure-centric, wide-angle for context, close-crop for detail); asymmetrical balance acceptable; compositional tension intentional
- **Lens Equivalent:** 50-85mm range; depth-of-field variable by narrative (may be shallow or deeper depending on context visibility needed)
- **Film/Stock Anchor:** Varied (can be color or B/W simulation depending on narrative era); grain or texture appropriate to concept
- **Lighting Logic:** 30-60° angle range; more dramatic than glamour; fill ratio 1:4-1:8; directional lighting creates psychological mood; shadow floor L: 20-40
- **Figure:Ground %:** 50-70% figure occupancy; 30-50% contextual background; environmental storytelling integrated
- **Density %:** Background 40-60% detail density; atmospheric depth 2-4 layers creating recession; visual interest supporting narrative without competing
- **Detail:Negative Space Ratio:** Figure detail prioritized; background detail serves narrative support; asymmetrical weighting

**Anchors Required:**
- **Surface Context Anchor:** Styled background appropriate to narrative; may include architectural elements, props, or secondary figures; professional set design if applicable
- **Frame/Band Anchor:** Omit unless narrative-critical (conceptual editorials typically omit design frames)
- **Production Context Anchor:** Professional fashion editorial photography; controlled set or location; lighting serves narrative intent
- **Ratio Enforcement Anchor:** Composition designed for declared ratio; multi-figure or environmental integration within constraints; vertical emphasis maintained
- **Gender Expression Anchor:** Gender presentation consistent with glamour mode; styling may be experimental but gender-appropriate
- **Mode-Specific Composition Anchor:** Editorial mode balances figure with environmental narrative; compositional depth and tension support conceptual intent

---

### CONTEMPORARY_CAMPAIGN — Composition (3:4 / 4:5 / 2:3)

- **Illustrated/Painted Logic:** N/A (photography mode)
- **Photographic Framing:** Clean and brand-appropriate; subject positioned for commercial clarity; product integration if applicable (balanced, not competing)
- **Lens Equivalent:** 50-85mm (commercial standard); depth-of-field shallow to moderate (f/2.8-f/5.6) for subject isolation
- **Film/Stock Anchor:** Contemporary digital or film simulation; clean color rendering; bright and clear aesthetic; minimal grain
- **Lighting Logic:** 40-55° key angle; bright commercial aesthetic; fill ratio 1:3-1:5; result: flattering and approachable; face luminance L: 70+; shadow floor L: 30+
- **Figure:Ground %:** 65-75% figure occupancy; 25-35% background
- **Density %:** Background 10-20% detail density; minimal clutter; brand-aligned aesthetic; clean lines
- **Detail:Negative Space Ratio:** Figure detail fully rendered; background minimal but intentional; negative space strategic and brand-supporting

**Anchors Required:**
- **Surface Context Anchor:** Clean, brand-appropriate background; may be white (L: 95-98%), color-coordinated, or minimalist; studio or carefully controlled location
- **Frame/Band Anchor:** Omit unless brand-standard (most contemporary campaigns omit design frames)
- **Production Context Anchor:** Professional commercial photography; studio lighting; brand aesthetic paramount; contemporary production values
- **Ratio Enforcement Anchor:** Composition designed for declared ratio; commercial clarity optimized for digital and print deployment; product placement (if applicable) balanced
- **Gender Expression Anchor:** Gender presentation appropriate to subject and brand; styling contemporary and brand-aligned
- **Mode-Specific Composition Anchor:** Campaign mode prioritizes commercial clarity and brand integration; visual hierarchy: figure > product (if applicable) > background

---

### INTIMATE_STUDY — Composition (3:4 / 4:5 / 2:3)

- **Illustrated/Painted Logic:** N/A (photography mode)
- **Photographic Framing:** Extreme closeup; face occupies 60-80% of frame; crop often below chin or mid-shoulder
- **Lens Equivalent:** 85-135mm (macro/portrait range for magnification); shallow depth-of-field (f/2.0-f/2.8) to blur background while keeping face sharp
- **Film/Stock Anchor:** Contemporary or classic film simulation; texture prominent; grain or digital noise visible if appropriate to mood
- **Lighting Logic:** Diffused (large softbox or diffusion); 35-50° angle (often high to emphasize cheekbones); minimal fill (1:6-1:8) for introspective mood; shadow detail visible (L: 20+)
- **Figure:Ground %:** 60-80% face occupancy; 20-40% soft background
- **Density %:** Background 0-10% detail (bokeh or neutral); focus entirely on face
- **Detail:Negative Space Ratio:** Macro-level detail (pores, makeup layers, eye refraction); negative space minimal and soft

**Anchors Required:**
- **Surface Context Anchor:** Minimal background; soft bokeh or neutral; out-of-focus rendering; color/saturation muted
- **Frame/Band Anchor:** Omit entirely (extreme closeup format precludes design frames)
- **Production Context Anchor:** Studio photography with diffused lighting; macro detail capture; intimate aesthetic paramount
- **Ratio Enforcement Anchor:** Composition designed for declared ratio; extreme crop optimized for vertical emphasis; minimal head room
- **Gender Expression Anchor:** Gender presentation consistent; grooming detail emphasized (facial hair, makeup precision)
- **Mode-Specific Composition Anchor:** Intimate mode magnifies face and facial features; psychological intensity high; background entirely secondary

---

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Omit entirely. Steven Meisel photography does not integrate typography into the photograph itself.

**Production Note:** If gallery context or editorial layout requires text (masthead, caption, or publication credit), text is applied in post-layout design, not rendered in the photograph. The photographic image itself contains no typography.

