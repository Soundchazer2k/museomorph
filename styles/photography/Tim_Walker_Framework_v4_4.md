---
id: tim_walker_fashion
group: "Photography"
movement: "Theatrical Editorial Photography (1995–Present)"
artist: "Tim Walker"
display_name: "Tim Walker — Theatrical Fashion & Narrative Photography"
style_scope: single-artist
ratios: ["3:4", "4:3", "16:9"]
ratios_status: approved
ratios_notes: >
  Portrait (3:4) supports editorial single/paired figures with elaborate backgrounds. Landscape (4:3, 16:9) enables environmental spectacle with monumental constructed sets. All ratios accommodate NanoBanana's native support with compositional flexibility for mode-specific framing strategies.

modes: ["FASHION_EDITORIAL", "ENVIRONMENTAL_SPECTACLE", "SURREAL_NARRATIVE"]

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
  layout_hint: "Primary figure left/center; secondary figure right or embedded in background. Maintain clear visual hierarchy—model(s) dominate narrative despite elaborate staging."
  identity_priority: ["silhouette", "gesture", "face-proportions", "wardrobe-character"]

hero_image: null

about: >
  Tim Walker (born 1970) is a British fashion photographer celebrated for transforming editorial photography into theatrical visual storytelling. Working primarily with film (Kodak Portra 400) and practical effects rather than digital manipulation, Walker constructs elaborate, often monumental sets that evoke fairytales, surrealism, and historical narratives. His photographs blend fashion with fine art, costume with character development, and environmental narrative with intimate portraiture. Since 1995, he has defined contemporary fashion photography through imaginative scope, meticulous craftsmanship, and a persistent sense of wonder—placing models within dreamlike scenarios that prioritize emotional resonance and artistic authenticity over commercial minimalism.

composition_constraints:
  max_subjects: 2
  subject_interaction: allowed
  crowd_scenes: false
  animals_allowed: true
  animal_types: ["domestic", "wild", "mythical"]
  max_animals: 2
  text_allowed: no

sections_index:
  '1': Core Instruction & Likeness Mandate
  '2': Canvas Strategy & Aspect Ratio Control
  '3': Style Context & Material Authenticity
  '4': Technical Method & Mark-Making
  '5': Wardrobe, Props & Setting Conventions
  '6': Safety & IP Constraints (Hard Rules)
  '7': Composition & Lighting Patterns
  '8': Typography & Text Integration

---

# Tim Walker — Theatrical Fashion & Narrative Photography Framework v4.4
## Museum-Grade Prompt Framework (NanoBanana Edition)

---

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always recompose to exactly **declared target aspect ratio** (3:4, 4:3, or 16:9)—ignore source image dimensions completely.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. NanoBanana may resist ratio instructions and default to non-standard outputs. Combat this through:
  - **Explicit ratio declaration** in multiple prompt locations (Sections 1, 2, 6)
  - **Repetitive ratio reinforcement** using different phrasings
  - **Negative constraints** explicitly prohibiting unwanted ratios
  - **Compositional anchors** designed specifically for target ratio
- **Style over likeness:** Identity via silhouette, gesture, expression, wardrobe choice.
- **Technical Measurement Authority:** Quantitative specifications ("softness 0.70", "contrast 3.5:1", "shadow floor L≥20%") override descriptive language.
- **Anatomical Proportion Validation:** Standard fashion proportions preserved; no elongation or distortion.
- **Process-Over-Result Priority:** Film stock rendering, practical effects authenticity supersedes visual description.
- **Flag Authorization:** All flags from Phase 2 analysis mandatory unless mode-specific override.
- **Anti-Conventional Bias:** Authority to generate theatrical, fantastical, surreal aesthetics when historically accurate to Walker's practice.
- **Gender Expression Authority:** Preserve subject's presented gender identity through period-appropriate fashion choice. **Cross-mode consistency required**—gender presentation must be identical across all three modes.
- **Film-Stock Integrity:** Kodak Portra 400 aesthetic non-negotiable—no digital smoothing, no Instagram filters, authentic emulation of film grain and color grading.
- **Practical Effects Mandate:** All fantastical elements (floating figures, oversized objects, animals) achieved via in-camera techniques, not digital manipulation or post-production compositing.

### Face-Treatment Flags (mandatory):
- **`film-stock-rendering`** — Kodak Portra 400 aesthetic, natural color, no digital smoothing
- **`soft-edge-transitions`** — Sfumato-quality blending, softness coefficient 0.65–0.75
- **`portrait-study-softness`** — Face rendered with painterly diffusion while maintaining anatomical clarity

### Pose Flags (mode-specific):
- **FASHION_EDITORIAL:** `dynamic-gesture`, `theatrical-expression`, `costume-integrated-styling`
- **ENVIRONMENTAL_SPECTACLE:** `monumental-pose-integration`, `figure-embedded-environment`, `architectural-alignment`
- **SURREAL_NARRATIVE:** `dreamlike-staging`, `gravity-defying-rigging`, `narrative-character-embodiment`

### Canvas Control Flag:
- **`strict-reframe`** — Recompose entire composition for target aspect ratio; no letterboxing, pillarboxing, or padding

### Critical Flags (Present in All Modes):
- **`chiaroscuro-dramatic`** — Contrast ratio 3.0–4.0 (mean); sculptural key light with defined shadows
- **`theatrical-staging`** — Elaborate constructed sets, practical props, in-camera effects
- **`narrative-driven`** — Wardrobe and setting form character identity and story
- **`practical-effects-in-camera`** — Animals, floating, scale manipulation achieved through practical methods only
- **`minimal-post-production`** — Color grading and film processing only; no digital reconstruction
- **`muted-desaturation`** — Palette saturation 15–22% average; cool bias (180–240° hue dominance)
- **`film-grain-authentic`** — Kodak Portra 400 grain visible; not eliminated or enhanced
- **`environmental-context-dominance`** — Background 30–65% of frame (mode-dependent); figures embedded, not isolated

---

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[3:4 / 4:3 / 16:9]** — ignore source image dimensions completely.
- **RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[chosen ratio]**. This is a hard requirement. If NanoBanana defaults to non-standard dimensions (e.g., 1632×640), reject output and regenerate with explicit ratio compliance.
- Redraw in **Tim Walker Fashion Photography** style for **[exact mode name]** mode.
- Identity via silhouette, gesture, expression, wardrobe character.
- **Gender Expression Mandate:** Preserve subject's presented gender identity through period-appropriate contemporary fashion styling. [If male] Male subjects remain masculine across all modes (clothing, posture, grooming). [If female] Female subjects remain feminine across all modes (clothing, posture, styling). Gender presentation must be consistent across FASHION_EDITORIAL, ENVIRONMENTAL_SPECTACLE, and SURREAL_NARRATIVE modes.
- **IP Safeguard Declaration:** Create original character designs avoiding copyrighted elements; no recognizable celebrity likenesses or branded costume elements.
- **Face-Treatment Flags:**
  - `film-stock-rendering` (Kodak Portra 400 aesthetic)
  - `soft-edge-transitions` (sfumato quality)
  - `portrait-study-softness` (painterly face treatment)
- **Pose Flag:** [mode-specific flag from above]
- **Canvas Control Flag:** `strict-reframe`
- **Critical Flags (Always Present):**
  - `chiaroscuro-dramatic`, `theatrical-staging`, `narrative-driven`, `practical-effects-in-camera`, `minimal-post-production`, `muted-desaturation`, `film-grain-authentic`, `environmental-context-dominance`
- **Mode Selector:** [FASHION_EDITORIAL / ENVIRONMENTAL_SPECTACLE / SURREAL_NARRATIVE]
- **Style Dominance Line:** Fashion photography transcends editorial commerce; becomes fine art through meticulous practical staging, film stock integrity, and emotional narrative depth.
- **Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions. If renderer produces alternative ratio, regenerate immediately with explicit ratio mandate in negative constraints.

---

## 2) Canvas Strategy & Aspect Ratio Control

### NANOBANANA SUPPORTED RATIOS (Native — No Adaptation Required):

- ✅ `3:4` (portrait — 864×1184 or scaled equiv.) — **PRIMARY for FASHION_EDITORIAL mode**
- ✅ `4:3` (landscape — 1184×864 or scaled equiv.) — **Flexible across modes**
- ✅ `16:9` (widescreen — 1344×768 or scaled equiv.) — **PRIMARY for ENVIRONMENTAL_SPECTACLE mode**

### MANDATORY RATIO SELECTION:

Choose ONE exact specification from supported ratios above based on mode:

**FASHION_EDITORIAL Mode:** Use `3:4` (portrait) for optimal single/paired model framing with theatrical background integration.

**ENVIRONMENTAL_SPECTACLE Mode:** Use `16:9` (widescreen) to accommodate monumental constructed sets and forced perspective scale.

**SURREAL_NARRATIVE Mode:** Use `4:3` or `16:9` depending on narrative composition intent (enclosed dreamscape vs. sprawling fantastical environment).

### CANVAS RECOMPOSITION STRATEGY (Mode-specific):

#### **FASHION_EDITORIAL (3:4 Portrait Mandate)**
- **Ratio Status:** Native (no adaptation required)
- **Reframing Method:** Recompose entirely to vertical emphasis—place model full-length or seated with theatrical backdrop occupying 25-35% frame
- **Spatial Allocation:** Figure 65-75% frame area; background 25-35%
- **Background Treatment:** Elaborate constructed environment (interior, architectural, fantastical set)—color-coordinated to costume, depth-layered for narrative context
- **Format Justification:** Portrait orientation emphasizes figure elegance and facial expression while containing background within theatrical frame. Standard editorial fashion publication dimension.

#### **ENVIRONMENTAL_SPECTACLE (16:9 Widescreen Mandate)**
- **Ratio Status:** Native (no adaptation required)
- **Reframing Method:** Extend horizontally to showcase monumental constructed environment; figure becomes embedded within landscape rather than dominating frame
- **Spatial Allocation:** Figure 40-50% frame area; background 50-60% (architectural/environmental dominance)
- **Background Treatment:** Vast constructed set (palace, garden, impossible architecture) with atmospheric depth, forced perspective suggesting scale and grandeur
- **Format Justification:** Widescreen enables panoramic environmental narrative; figures scale themselves against monumental backdrops. Cinematic composition evoking theatrical stage photography.

#### **SURREAL_NARRATIVE (4:3 or 16:9 Flexible)**
- **Ratio Status:** Native (no adaptation required)
- **Reframing Method:** Recompose based on narrative intent—intimate enclosed space (4:3) or sprawling fantastical environment (16:9)
- **Spatial Allocation:** Figure 45-55% depending on ratio; background 45-55% (equal visual weight)
- **Background Treatment:** Dreamlike, often impossible environment (floating elements, gravity-defying props, animal integration, surreal color fields) with theatrical lighting
- **Format Justification:** Narrative-driven composition balances figure and environment as co-equal story elements. Ratio selection driven by dream logic rather than standard editorial convention.

---

## 3) Style Context & Material Authenticity

### Influences
- **Theatrical Stagecraft:** Elaborate constructed sets and practical effects over digital manipulation
- **Romantic Surrealism:** Fairytale narratives, dreamlike logic, emotional resonance
- **Fine Art Photography:** Large-format film stock, archival printing, compositional sophistication
- **Fashion Editorial:** Model styling as character development, wardrobe as narrative device
- **Art Direction:** Meticulous pre-production planning (weeks/months of conceptualization before shoot)

### Medium/Production Method
**Film-based fashion photography using practical effects and in-camera techniques.**
- **Primary camera:** Medium format film (Mamiya RZ67, Hasselblad) or 8×10 large format field camera
- **Film stock:** Kodak Portra 400 (standard) — known for fine grain, natural color palette, wide exposure latitude
- **Lighting:** Sophisticated multi-source (natural light + Arri continuous lights + Profoto strobes) with extensive reflectors and diffusers
- **Sets/Props:** Custom-built constructed environments using wood, metal, plaster, foam, antique furniture, taxidermy, oversized objects
- **Post-production:** Darkroom processing of film; minimal digital manipulation (color grading only); no reconstruction or heavy retouching
- **Printing:** Large-scale archival prints to emphasize painterly quality and dramatic impact

### Thematic Purpose
Transform fashion photography from commercial aspiration into emotional, narrative-driven fine art. Celebrate craftsmanship, imagination, and wonder through meticulous practical staging and film integrity rather than digital manipulation.

### 5 Hallmark Motifs (Quantified)

1. **Theatrical Constructed Sets** — Elaborate, monumental, often surreal backdrops occupying 25-65% of frame. Materials: painted canvas, built architecture, oversized props scaled 150-400% for forced perspective effect.

2. **Chiaroscuro Lighting** — Contrast ratio 3.0–4.5:1 with dramatic key light (typically top-left, 30-45° from camera axis). Shadow floor L≥20%, highlights L≤95%. Creates sculptural, painterly modeling on faces and fabrics.

3. **Soft-Edge Sfumato Rendering** — Face and figure edges rendered with softness coefficient 0.65–0.75 (blended transitions). No hard line separation; atmospheric diffusion characteristic of Portra 400 film.

4. **Emotional Expression & Dynamic Gesture** — Models pose with visible emotion, dynamic posture (shoulder rotation 15-40°), and theatrical energy. Poses never neutral; always communicate character and narrative intent.

5. **Narrative Wardrobe Integration** — Costume transcends fashion statement to become character identity. Silhouette, fabric, color, detail become visual storytelling elements. Wardrobe occupies 40-60% visual weight per figure.

### Period Framing
**Active practitioner: 1995–Present** (30-year continuous practice)
- Current work maintains consistent aesthetic despite evolution
- Film stock preference unchanged (Portra 400 since 1996)
- Theatrical philosophy constant; practical effects commitment unwavering
- Contemporary styling (modern wardrobe, current hair trends) appropriate to current shoots; no anachronism for work post-2000

### Tone Tag
**Theatrical, Imaginative, Dreamlike, Emotionally Resonant, Meticulously Crafted**

---

## 4) Technical Method & Mark-Making

### Universal Technique Anchors (Apply to All Modes)

**Facial Architecture Anchor:**
- **Gender-specific feature construction:** [If masculine] Angular jaw definition, broader forehead-to-chin proportion (1:1.3 ratio), eyebrow prominence, minimal lip definition. [If feminine] Refined jaw with softer angle, eye emphasis (28-30% face width), fuller lip rendering, cheekbone highlight prominence.
- **Lighting geometry:** Key light from 30-45° above and 20-30° left of camera axis. Rim light subtle but present (L=70-80% on edges).
- **Edge treatment:** Soft transitions (sfumato) on face boundaries; no crisp line definition. Blending coefficient 0.70 minimum.
- **Color rendering:** Kodak Portra 400 skin tones—warm flesh tones H=30-40°, S=25-40%, L=60-75%. Cool undertones in shadows (H=200-240°).

**Pose Integrity Anchor:**
- **Shoulder-hip counter-rotation:** 15-40° differential (theatrical, contrapposto-influenced, not neutral)
- **Head tilt:** 8-25° tilt typical (communicates personality, not stiffness)
- **Gesture economy:** Limbs positioned to suggest motion, emotion, or narrative action. No static standing; always implies story.
- **Weight distribution:** Off-center stance (55-65% weight on one leg) maintains dynamic tension despite careful composition.

**Scale Hierarchy Anchor:**
- **Head-to-body ratio:** Standard fashion proportion (1:7 to 1:8). No elongation, no compression.
- **Anatomical stylization limits:** Zero distortion for dramatic effect. Elegance derives from pose and lighting, not proportion manipulation.
- **Feature proportions:** Eye 26-30% of face width; mouth 30-35% of face width; nose 18-22% of face width. All measurements within human biological range.

**Material Authenticity Anchor:**
- **Wardrobe texture authenticity:** Silks, cottons, wools, linens rendered with accurate drape physics, weight differentiation, and surface sheen. No synthetic fabric simulation.
- **Surface characteristic:** Film grain visible throughout (Portra 400 signature—approximately 0.1-0.3mm apparent grain at viewing distance). Grain never eliminated; sometimes enhanced in printing for painterly effect.
- **Set/prop rendering:** All constructed elements photographed practically—paint brushstrokes visible, wood grain legible, metal surfaces show reflection. No digital rendering or 3D simulation.

**Period Consistency Anchor:**
- **Contemporary wardrobe:** All clothing appropriate to post-1995 fashion. No historical costume unless conceptually justified by narrative (fairytale character, historical reference shoot).
- **Equipment visibility:** Modern cameras, lighting rigs, set construction techniques typical of 1995–Present photography practice.
- **Post-production methodology:** Darkroom film development (if applicable) or digital color grading. No heavy retouching, no digital compositing.

**Production Method Anchor:**
- **Film development:** Standard C-41 color negative processing; color grading via light table or digital color correction (RGB curves, saturation shifts).
- **Printing characteristics:** Large-format archival prints (minimum 11×14") with rich blacks, detailed highlights, full tonal range. If digital output: CMYK separation for magazine reproduction or inkjet fine art printing.
- **Artifact authenticity:** Film scratches, dust spots, or processing marks acceptable if authentic to period film stock (ruled out for clean commercial work, acceptable for artistic prints).

**Canvas Adaptation Anchor:**
- **Aspect ratio-specific composition:** [3:4 portrait] Vertical emphasis with figure occupying upper 2/3, background in lower 1/3. [4:3 landscape] Balanced thirds with environmental breadth. [16:9 widescreen] Panoramic environmental scale with figure(s) scale-shifted smaller.

**Gender Expression Consistency Anchor:**
- **Cross-mode requirement:** Subject's gender presentation identical across all three modes (FASHION_EDITORIAL, ENVIRONMENTAL_SPECTACLE, SURREAL_NARRATIVE). Wardrobe, hairstyle, facial presentation remain consistent. [If male] Maintained through consistent styling—facial hair presence/absence, silhouette, color palette, posture conventions. [If female] Maintained through consistent styling—hair length/styling, silhouette, makeup approach, accessories, posture conventions.
- **Gender-appropriate wardrobe:** Mode variations change silhouette or material (editorial gown vs. environmental workwear vs. surreal costume), but gender presentation stays constant.

---

### MODE 1: FASHION_EDITORIAL

#### Context
Single or paired model in elaborate theatrical interior or constructed set. Wardrobe-driven character development with emotional expression. Lighting soft yet sculpted; background integrated narrative element rather than distraction. Poses dynamic, gestures purposeful, expressions clear. Costume as primary visual storytelling device.

#### Measurements
- **Figure scale:** 65-75% of frame area; background 25-35%
- **Aspect ratio:** 3:4 (portrait orientation, 864×1184 standard)
- **Key light angle:** 30-40° above horizontal, 20-30° left of camera axis
- **Contrast ratio:** 1.8–2.5:1 (softer than other modes, emphasizing fashion detail)
- **Shadow floor:** L≥22% (readable shadow detail on costume fabrics)
- **Highlight ceiling:** L≤92% (controlled exposure, no blown-out details)
- **Face softness coefficient:** 0.68–0.75 (pronounced sfumato blending)
- **Edge frequency:** 0.10–0.15 (soft transitions dominant)
- **Tonal steps:** 3-4 distinct value zones per facial plane
- **Wardrobe texture visibility:** 60-80% of frame devoted to costume detail (seams, weave, sheen legible)
- **Background detail:** Soft focus (L-aperture equivalent blur) maintaining composition without overwhelming
- **Saturation (palette):** Average S=16-20% (muted, fashion-focused, not bold)
- **Dominant hue range:** Cool (180-240°) in shadows; warm (30-40°) in skin tones

#### Technique
- **Camera:** Medium format film (Hasselblad, Mamiya RZ67) or digital equivalent
- **Lens:** 80-120mm portrait lens (shallow depth of field, natural compression)
- **Lighting:** Primary key light from 35° above, 25° left (Arri 2.5K or Profoto strobe with silk diffuser). Fill light from camera axis (Reflector, 1-stop difference from key).
- **Film stock:** Kodak Portra 400; if digital: profile emulating Portra color science
- **Exposure:** Prioritize skin tone preservation over background (typical exposure L=65-75% for face)
- **Depth of field:** f/4-f/5.6 (face sharp, background softly rendered, not completely blurred)
- **Pose direction:** "Look toward window light, shoulder back 15°, let hand find your chest—express the emotion of the wardrobe"
- **Costume integration:** Wardrobe occupies frame edges and mid-ground; face occupies upper-middle frame (rule of thirds applied to vertical orientation)
- **Gesture specificity:** Hands visible and posed (not cropped); position hands to frame face or emphasize costume detail
- **Expression requirement:** Visible emotion (not neutral smile; could be pensive, surprised, playful, vulnerable—match costume narrative)
- **Post-production:** Color grading to maintain Portra palette (warm skin, cool shadows); zero retouching beyond light removal; no skin smoothing

#### Validation
- ✓ Face rendered with softness 0.68+ (sfumato blending evident)
- ✓ Wardrobe detail legible (seams, fabric weave, button detail visible)
- ✓ Background soft but compositionally integrated (suggests interior, not random blur)
- ✓ Shadow floor L≥22% (fabric color detail preserved in shadows)
- ✓ Gesture dynamic (pose communicates emotion or narrative, not static)
- ✓ Contrast ratio 1.8–2.5:1 (softer than surreal mode)
- ✓ Grain visible (Portra signature characteristic)
- ✓ Aspect ratio exactly 3:4 (portrait orientation confirmed)
- ✓ Gender expression consistent with source (if applicable, cross-mode consistency)

#### Automated Corrections
- **Cycle 1 | Facial Architecture:** [to be updated after first test generation]
- **Cycle 1 | Wardrobe Integration:** [to be updated after first test generation]
- **Cycle 1 | Lighting Quality:** [to be updated after first test generation]

---

### MODE 2: ENVIRONMENTAL_SPECTACLE

#### Context
Figure embedded within monumental constructed environment. Elaborate set design with forced perspective suggesting grandeur and scale. Figure scale-shifted smaller relative to architecture or landscape. Lighting sophisticated, emphasizing architectural volumes and atmospheric depth. Background 50-65% of frame; figure positioned using rule-of-thirds or golden spiral. Narrative conveyed through environmental integration rather than costume alone.

#### Measurements
- **Figure scale:** 40-50% of frame area; background 50-60%
- **Aspect ratio:** 16:9 (widescreen, 1344×768 standard)
- **Key light angle:** 40-50° above horizontal, variable left-right positioning (depends on architectural alignment)
- **Contrast ratio:** 2.2–3.5:1 (moderate; architectural detail visible)
- **Shadow floor:** L≥18% (maintains architectural shadow readability)
- **Highlight ceiling:** L≤94% (controlled, preserves set texture)
- **Face softness coefficient:** 0.62–0.72 (slightly crisper than Editorial for architectural clarity)
- **Background texture variance:** 60-85 (high variance from architectural complexity)
- **Depth layers:** 3-4 distinct recessive planes (foreground figure → mid-ground architecture → background landscape/sky)
- **Forced perspective scale:** Figure height 15-40% of tallest architectural element (creates grandeur illusion)
- **Atmospheric depth:** 20-30% lightness reduction from foreground to background (suggests distance)
- **Saturation (palette):** Average S=15-22% (architectural materials—grays, earth tones, cool accents)
- **Dominant hue range:** Cool (180-240°) + Earth tones (30-60°) for set materials

#### Technique
- **Camera:** Large format (8×10 Deardorff) or medium format with wide-angle lens
- **Lens:** 35-50mm equivalent (wide angle to capture monumental scale, include environmental context)
- **Lighting:** Multi-source approach—primary key light from 45° above (sun-like quality or Arri 5K), fill from opposite side, practical lights within set (lamps, windows, practical effects)
- **Film stock:** Kodak Portra 400 for natural color rendering across wide dynamic range
- **Exposure:** Meter for mid-tone architecture (L=50-60% for set primary surfaces); allow skin tone to fall naturally
- **Depth of field:** f/8-f/11 (sharp throughout to maintain architectural detail and figure clarity)
- **Composition:** Position figure using rule-of-thirds (off-center, not dead-center); allow background architecture to frame or balance figure
- **Set integration:** Figure occupies specific architectural pocket (within doorway, on platform, embedded in landscape)—not floating, but part of environmental logic
- **Gesture specificity:** Pose addresses architecture (leaning against wall, climbing steps, standing within frame) rather than camera
- **Expression:** Visible but secondary to environmental integration; expression reflects character's relationship to space
- **Post-production:** Color grading maintains Portra warmth; possible vignetting to emphasize central narrative; no architectural distortion correction (maintain dramatic perspective)

#### Validation
- ✓ Background occupies 50-60% frame (environmental dominance confirmed)
- ✓ Depth layers 3-4 distinct (atmospheric perspective evident)
- ✓ Figure scale-shifted within architecture (40-50% frame area, smaller relative to set)
- ✓ Shadow floor L≥18% (architectural texture preserved)
- ✓ Contrast ratio 2.2–3.5:1 (architectural detail legible)
- ✓ Forced perspective suggests scale and grandeur
- ✓ Composition uses rule-of-thirds or balanced thirds
- ✓ Aspect ratio exactly 16:9 (widescreen orientation confirmed)
- ✓ Gender expression consistent with source (if applicable, cross-mode consistency)

#### Automated Corrections
- **Cycle 1 | Environmental Integration:** [to be updated after first test generation]
- **Cycle 1 | Architectural Scale:** [to be updated after first test generation]
- **Cycle 1 | Depth Layering:** [to be updated after first test generation]

---

### MODE 3: SURREAL_NARRATIVE

#### Context
Dreamlike, fantastical composition. Elaborate practical effects (floating figures, oversized objects, animals, gravity-defying arrangements) achieved in-camera. Theatrical lighting with dramatic contrast. Narrative conveys through surreal logic rather than editorial convention. Wardrobe and setting merge as co-equal story elements. Expressions ethereal, poses impossible-yet-elegant. Suitable for fairytale imagery, fantastical character portrayal, conceptual fashion narratives.

#### Measurements
- **Figure scale:** 45-55% of frame area (equal visual weight with environment)
- **Aspect ratio:** 4:3 or 16:9 (depends on narrative composition—intimate (4:3) or sprawling (16:9))
- **Key light angle:** 35-50° above, variable horizontal (often directional spotlit quality)
- **Contrast ratio:** 3.0–5.5:1 (dramatic; shadow areas may approach L<10% for mystery)
- **Shadow floor:** L≥8% (acceptable to crush to near-black for surreal atmosphere; maintain highlight detail)
- **Highlight ceiling:** L≤96% (preserve surreal detail, not blown out)
- **Face softness coefficient:** 0.70–0.80 (very soft, painterly, dreamlike quality)
- **Edge frequency:** 0.08–0.12 (minimal hard edges; ethereal transitions)
- **Tonal steps:** 2-5 variable (may be fewer in shadow-heavy surreal scenes, more in lit areas)
- **Material texture visibility:** 50-70% (practical effects/props texture legible; costume detail may be silhouetted)
- **Surreal element integration:** 1-3 fantastical elements (floating, animals, scale manipulation, impossible architecture) clearly present
- **Saturation (palette):** Average S=16-25% (moody, cool-dominated, occasional color accents for narrative emphasis)
- **Dominant hue range:** Cool (180-240°) with occasional saturated accent (H=0-30° or H=240-360° for mood)

#### Technique
- **Camera:** Medium or large format film; multiple takes acceptable for capturing precise moment
- **Lens:** 50-85mm (moderate compression, balanced perspective for surreal composition)
- **Lighting:** Theatrical multi-source with spotlit key light (creating pools of illumination), rim lights on edges, background lights for separation. Shadows allowed to go deep (atmospheric mystery).
- **Film stock:** Kodak Portra 400; color grading toward moody, cool tones; possible push-processing for increased contrast (1 stop acceptable)
- **Exposure:** Meter for key-lit areas; allow deep shadows to crush naturalistically (L<12% acceptable in far background)
- **Depth of field:** f/5.6-f/8 (balance between face sharpness and background dream-blur)
- **Practical effects:** All surreal elements achieved in-camera—rigging for floating (suspension systems hidden), scale manipulation (forced perspective, oversized props), animal integration (trained animals, safe handling)
- **Pose direction:** "Float as if weightless, reach toward light—this is the moment between dreams and waking"
- **Gesture specificity:** Limbs arranged to suggest motion or levitation; hands extended or graceful; posture ethereal and physically impossible (legs tucked, arching back, sitting in air)
- **Expression:** Serene, surprised, contemplative, or emotionally complex (not neutral; surreal emotion)
- **Animal integration (if present):** Animals positioned naturally but within surreal context (bird perched on shoulder, rabbit appearing to whisper, etc.)—animals rendered authentically, not digitally enhanced
- **Post-production:** Color grading toward cool palette with possible color grading exaggeration (more blue, more shadow purple); surreal dream-like quality through color temperature shift; possibly subtle vignetting; zero digital compositing (all elements in-camera)

#### Validation
- ✓ Surreal element(s) clearly present (floating, scale, impossible architecture, animal integration)
- ✓ All effects achieved via practical in-camera methods (no digital compositing visible)
- ✓ Face rendered very soft (sfumato 0.70+, painterly)
- ✓ Contrast ratio 3.0–5.5:1 (dramatic, theatrical)
- ✓ Shadow floor allows L<15% for mystery (acceptable in surreal vs. editorial)
- ✓ Expression conveys emotion appropriate to surreal narrative
- ✓ Wardrobe and environment have equal visual weight
- ✓ Grain visible (Portra signature)
- ✓ Aspect ratio exactly 4:3 or 16:9 as specified
- ✓ Gender expression consistent with source (if applicable, cross-mode consistency)
- ✓ No visible digital artifacts or post-production compositing

#### Automated Corrections
- **Cycle 1 | Surreal Effect Quality:** [to be updated after first test generation]
- **Cycle 1 | Practical Rigging Authenticity:** [to be updated after first test generation]
- **Cycle 1 | Dreamlike Atmosphere:** [to be updated after first test generation]

---

## 5) Wardrobe, Props & Setting Conventions

### TEMPORAL WARDROBE MANDATE

- **Timeframe:** 1995–Present (contemporary fashion, no historical costume unless conceptually justified)
- **CRITICAL PROHIBITION:** No anachronistic wardrobe elements from source images—completely replace with period-contemporary costume
- **Eyewear Authenticity:** Modern eyewear acceptable (prescription glasses, sunglasses, fashion frames) if narratively justified; not required
- **Wardrobe Integration:** Costume is character—silhouette, fabric, color, detail form visual storytelling element equal to pose and lighting

---

### MODE-SPECIFIC WARDROBE TRACKS

#### **MODE 1: FASHION_EDITORIAL**

**Adult Masculine Wardrobe:**
- **Primary garment option:** Tailored suit jacket or structured shirt with visible collar detail; alternative: high-fashion menswear silhouette (draped fabric, interesting cut, designer approach)
- **Fabric types (period-authentic):** Cotton, wool, silk, linen, blends; contemporary synthetic acceptable if serving design intent
- **Color palette:** Cool tones (navy, charcoal, gray, slate, white, cream) or warm accent if narrative-driven (rust, olive, burgundy)
- **Accessories:** Minimal (0-1 piece)—scarf, watch, ring, or subtle jewelry; no logos or brands
- **Hair:** Contemporary styling appropriate to masculine gender expression (short, medium, or long depending on character—consistency across modes required)
- **Grooming:** Clean-shaven or well-maintained facial hair; contemporary approach

**Adult Feminine Wardrobe:**
- **Primary garment option:** Gown, dress, blouse with distinctive neckline, or structured fashion piece; contemporary high-fashion silhouette
- **Fabric types (period-authentic):** Cotton, wool, silk, satin, chiffon, tulle, blends; contemporary synthetics acceptable in design context
- **Color palette:** Cool tones (navy, charcoal, white, cream, lavender, powder blue, silver) with possible warm accent (blush, peach, gold) depending on narrative
- **Silhouette:** Fashion-forward—interesting necklines (asymmetrical, high collar, deep V, off-shoulder), sleeve treatment (puffed, draped, transparent), hemline variation
- **Accessories:** Minimal to moderate (0-2 pieces)—jewelry, belt, or subtle detail; no logos or brands
- **Hair:** Contemporary styling consistent across modes—length and styling must remain identical in FASHION_EDITORIAL, ENVIRONMENTAL_SPECTACLE, and SURREAL_NARRATIVE (preserving gender presentation consistency)
- **Makeup:** Contemporary approach with visible but natural appearance; color complements palette and lighting

---

#### **MODE 2: ENVIRONMENTAL_SPECTACLE**

**Adult Masculine Wardrobe (Distinct from Editorial):**
- **Primary garment option:** Practical fashion appropriate to monumental setting—workwear-inspired tailoring, utilitarian style, or architectural match to environment
- **Fabric types:** Weighted materials (linen, wool, canvas) suggesting scale and presence within grand setting
- **Color palette:** Earth tones (brown, tan, rust, gray) or cool architecture complements (slate, charcoal, cream)
- **Silhouette:** More structured than Editorial, suggesting ease within impressive environment (not struggling or overstated)
- **Accessories:** 0-1 piece if present (watch, belt, hat)—practical rather than ornamental
- **Hair:** Same length/styling as Editorial mode (consistency required)
- **Grooming:** Same as Editorial mode (consistency required)

**Adult Feminine Wardrobe (Distinct from Editorial):**
- **Primary garment option:** Garment appropriate to environmental scale—dramatic gown, flowing fabric, or costume suggesting character within monumental space (not casual; fashion-forward but contextual)
- **Fabric types:** Flowing materials (silk charmeuse, chiffon, crepe) suggesting movement within grand spaces; alternative: structured fabric suggesting architectural symmetry
- **Color palette:** Complements set architecture—if interior stone: cool tones (silver, slate, white); if garden: possible warmer tone (blush, gold) as accent
- **Silhouette:** Similar to Editorial but may emphasize vertical emphasis if surrounding architecture suggests height
- **Accessories:** 0-1 piece maximum; minimal jewelry if present
- **Hair:** Same length/styling as Editorial mode (consistency required)
- **Makeup:** Same approach as Editorial mode (consistency required)

---

#### **MODE 3: SURREAL_NARRATIVE**

**Adult Masculine Wardrobe (Distinct from Editorial & Environmental):**
- **Primary garment option:** Costume-like garment suggesting character or fairytale role—theatrical silhouette, unusual fabric, or decorative embellishment
- **Fabric types:** Interesting textures (velvet, lace, metallic, patterned, oversized knit) lending to surreal atmosphere
- **Color palette:** Saturated accent color possible in surreal mode (emerald, burgundy, peacock blue) while maintaining overall cool dominance
- **Silhouette:** Unconventional—exaggerated proportions (oversized sleeves, high collar, asymmetrical hem) suggesting dream logic rather than waking reality
- **Accessories:** 0-2 pieces—optional decorative element (crown, talisman, ornamental belt) reinforcing character/narrative
- **Hair:** Same length/styling as Editorial & Environmental modes (consistency required across all modes)
- **Grooming:** Same as Editorial mode (consistency required)

**Adult Feminine Wardrobe (Distinct from Editorial & Environmental):**
- **Primary garment option:** Fantastical costume—fairytale gown, surreal silhouette, or dreamlike garment; theatrical and imaginative
- **Fabric types:** Textured, layered, or unusual materials (organza, tulle layers, metallic, patterned, embroidered fabrics)
- **Color palette:** Cool tones dominant; surreal mode allows single saturated accent (emerald, sapphire, violet, burgundy) for narrative emphasis
- **Silhouette:** Theatrical and impossible—exaggerated elements (very full skirt, dramatic train, unusual neckline, sculptural sleeves) suggesting character and surreal context
- **Accessories:** 0-2 pieces optional—decorative jewelry, crown, tiara, or thematic ornament reinforcing narrative
- **Hair:** Same length/styling as Editorial & Environmental modes (consistency required across all modes)
- **Makeup:** Same as Editorial mode (consistency required)

---

### HAIR PRESERVATION MANDATE (Critical)

- **Hair length:** MUST be preserved exactly. If source hair is short, remain short. If medium, remain medium. If long, remain long.
- **Hair color:** MUST be preserved exactly. Maintain subject's natural hair color across all modes.
- **Baldness:** If source is bald or balding, preserve baldness in all modes (appropriate head coverings or natural presentation)
- **Facial hair:** If source is clean-shaven, maintain clean-shaven across modes. If source has facial hair, maintain facial hair presence (styling may adapt to period but presence required)

**MODE-SPECIFIC HAIR STYLING (Preserving Length/Color/Presence):**

**FASHION_EDITORIAL Hair:**
- Contemporary styling with visible care (brushed, textured, intentional arrangement)
- If long: styled waves, braids, updo, or down styles with movement
- If medium: contemporary cut with styling product, texture, or intentional arrangement
- If short: modern short styles (undercut, fade, pixie, modern crop) or classic short cuts
- Baldness: head presented naturally or with optional subtle hat/covering if narrative-appropriate

**ENVIRONMENTAL_SPECTACLE Hair:**
- Slightly more weathered or architectural than Editorial (as if standing outdoors)
- If long: windswept texture or romantic waves suggesting outdoor element
- If medium: practical styling suitable for grand indoor/outdoor setting
- If short: clean and contemporary (same as Editorial, weathering optional)
- Baldness: same as Editorial mode

**SURREAL_NARRATIVE Hair:**
- Dreamlike styling—may be disheveled, ethereal, or fantastical
- If long: floating effect suggested, elaborate braids, or romantic waves
- If medium: textured, possibly adorned with surreal elements (flowers, ribbons, branches)
- If short: contemporary short style maintained
- Baldness: same as other modes

**CROSS-MODE CONSISTENCY REQUIREMENT:** Hair length, color, and facial hair presence must remain identical across all three modes. Only styling (how it's arranged, weather effect, fantastical elements) varies by mode.

---

### MODE-SPECIFIC GENDER-DIFFERENTIATED PROP POOLS

```yaml
FASHION_EDITORIAL:
  male_props:
    - leather_bound_book
    - cigarette_or_cigar (if era-appropriate, unlit)
    - pocket_watch
    - signet_ring
    - period_appropriate_pen
    - folded_scarf
    - cufflinks
  female_props:
    - hand_mirror
    - pearl_necklace
    - vintage_letter (sealed, closed)
    - rose_or_flower_stem
    - decorative_fan
    - brooch_or_pendant
    - gloves (fabric, not rubber)
  temporal_notes: "Contemporary fashion photography allows flexible prop choices. Focus on elegance and narrative function rather than historical restriction."

ENVIRONMENTAL_SPECTACLE:
  male_props:
    - walking_stick_or_cane
    - binoculars_or_telescope
    - rope_or_chain (suggesting architectural climbing)
    - leather_satchel_or_bag
    - surveying_instrument (compass, drafting tool—optional, contextual)
    - pocket_handkerchief
    - hat_or_headwear
  female_props:
    - basket_or_decorative_vessel
    - shawl_or_wrap
    - sketchbook_or_journal
    - spyglass_or_telescope (suggests exploration)
    - ribbon_or_fabric_length
    - parasol_or_umbrella
    - decorative_urn_or_object
  temporal_notes: "Environmental mode emphasizes props that suggest interaction with monumental space—climbing, exploring, inhabiting. Avoid purely decorative props; prioritize functional/narrative purpose."

SURREAL_NARRATIVE:
  male_props:
    - ornamental_crown_or_headdress
    - scepter_or_staff (theatrical, not threatening)
    - elaborate_textile_or_fabric
    - decorative_mask_or_face_covering
    - jeweled_object_or_treasure
    - feather_or_wings (attached, suggesting magical nature)
    - elaborate_book_or_tome
  female_props:
    - crown_or_ornate_tiara
    - magical_object (crystal, orb, magical artifact—aesthetic, not realistic)
    - elaborate_fabric_or_veil
    - flowers_or_floral_garland
    - feather_or_wings (attached for surreal effect)
    - jeweled_object
    - ornamental_staff_or_wand
  temporal_notes: "Surreal narrative allows fantastical, costume-like props suggesting fairytale or dreamlike character. Prioritize visual richness and narrative symbolism over realism."

ANIMALS (when present):
  allowed_animals:
    - rabbits_or_hares
    - horses_or_ponies
    - birds (dove, raven, peacock, owl)
    - deer_or_fawn
    - foxes
    - cats_or_wild_cats
    - exotic_birds_feathers_or_perches
  animal_positioning:
    - "Integrated naturally but within surreal context—bird perched on shoulder (SURREAL), rabbit appearing docile (EDITORIAL), horse as architectural scale reference (ENVIRONMENTAL)"
  animal_authenticity: "All animals rendered authentically—no digital enhancement, no impossible anatomy. Animals appear calm and safely positioned."
  safety_notes: "Implied animal welfare priority—no animals in distress, no threatening interactions. Trainer presence implied but not visible."
```

---

### WARDROBE VARIATION REQUIRED

- **Change primary garment colors/styles between iterations** — Avoid identical costume repetition
- **Cycle through period-appropriate palette** — Maintain cool dominance but vary accents
- **Vary garment construction details** — Necklines, sleeves, trim, silhouette variations within mode
- **Maintain gender-appropriate silhouettes throughout** — Consistency in gender expression across iterations

---

### SETTING AUTHENTICITY

- **Contemporary interiors/exteriors:** Clean, well-maintained, reflecting post-1995 aesthetic
- **Constructed sets:** Theatrical but believable; elaborate yet physically possible (no impossible physics except in Surreal mode)
- **No anachronism:** No visible modern technology (smartphones, contemporary electronics) unless narrative justifies
- **Mood-appropriate:** Interior cool tones for Editorial refinement; Environmental scale and grandeur; Surreal dreamlike or fantastical

### COHERENCE FILTER

- **Wardrobe + setting + lighting form unified aesthetic**
- **All elements support declared style with documented authenticity**
- **Fallback:** Clean contemporary interior or outdoor setting with minimal period-specific elements when uncertain

---

## 6) Safety & IP Constraints (Hard Rules)

### Canvas Negatives (NanoBanana-Specific)

✗ Original aspect ratio (ignore source image dimensions completely)  
✗ Source image dimensions (recompose entirely for target ratio)  
✗ Unmodified framing (strict reframe mandate for aspect ratio)  
✗ 1632×640 or non-standard ratios (explicit prohibition for NanoBanana output defaults)  
✗ Letterboxing or pillarboxing (clean recomposition required)  
✗ Padding to simulate original ratio  
✗ Aspect ratio distortion or stretching  

**Adaptation-Specific Negatives:**  
✗ Unadapted from requested ratio  
✗ Visible letterbox black bars  
✗ Visible pillarbox side bars  
✗ Non-native ratio rendering  

**Medium-Specific Negatives:**  
✗ Digital smoothing on skin (HDR processing, AI enhancement filters)  
✗ Instagram or contemporary photo filter effects  
✗ Artificial bokeh (digital blur simulation overlaid on image)  
✗ Reconstructed background (digital in-painting, content-aware fill)  
✗ AI-removed blemishes or airbrushing  

**Gender & Anatomical Negatives:**  
✗ Cross-gender wardrobe or styling (if male, no feminine styling; if female, no masculine styling)  
✗ Gender presentation inconsistency across modes (must remain identical FASHION_EDITORIAL → ENVIRONMENTAL_SPECTACLE → SURREAL_NARRATIVE)  
✗ Excessive anatomical distortion (features 10%+ deviation from human proportion)  
✗ Impossible body geometry (limbs in physically unsustainable positions outside surreal context)  

**Temporal Anachronism Negatives:**  
✗ Modern clothing (t-shirts, jeans, hoodies, sneakers, contemporary athletic wear)  
✗ Contemporary eyeglasses/sunglasses (unless narrative justifies)  
✗ Modern hairstyles (undercuts, fades, contemporary women's cuts inconsistent with preserved length)  
✗ Contemporary makeup styles (modern contouring, trendy cosmetics)  
✗ Synthetic fabrics with modern sheen (polyester, nylon, spandex appearance)  
✗ Modern body modifications or piercings  
✗ Contemporary watches, phones, tech devices (unless conceptually relevant)  

**Process & Medium Negatives:**  
✗ Obvious digital compositing artifacts (color mismatch at seams, lighting inconsistency)  
✗ 3D rendering appearance (plastic, artificial sheen, impossible geometry)  
✗ Absence of film grain (if Portra 400 aesthetic mandated, grain must be visible)  
✗ Over-sharpness suggesting digital rather than photographic rendering  

**Narrative & Content Negatives:**  
✗ No nudity (all figures clothed appropriately)  
✗ No gore or violence  
✗ No explicit sexual content  
✗ No hateful or discriminatory imagery  
✗ No copyrighted logos or trademarks (no brand names visible on clothing, props, or background)  
✗ No celebrity likenesses (original character designs only)  
✗ No watermarks, credits, or text frames outside canvas  
✗ No visible artist signatures  

---

### Canvas Positives (Mandatory Requirements)

✓ Exactly [3:4 / 4:3 / 16:9] aspect ratio (must be specified ratio, not adapted)  
✓ Recomposed entirely for target aspect ratio (no source image dimension retention)  
✓ Strict reframe mandate applied (clean composition for declared format)  
✓ [Specified ratio] compliance confirmed and visible  

**Adaptation-Specific Positives (If applicable):**  
✓ Cleanly recomposed from [original] to [adapted ratio]  
✓ Intelligent spatial reorganization preserving composition intent  
✓ No visible adaptation artifacts (letterbox, pillarbox, padding)  
✓ Adapted ratio treated as native composition space  

**Medium-Specific Positives:**  
✓ Film stock rendering authentic (Kodak Portra 400 aesthetic present)  
✓ Film grain visible (not eliminated, not exaggerated; characteristic 0.1-0.3mm apparent grain)  
✓ Soft-edge sfumato transitions on face (softness coefficient 0.65–0.80 depending on mode)  
✓ No digital smoothing (natural surface texture, pores visible in skin if applicable)  
✓ Practical effects only (no digital compositing; all elements in-camera)  
✓ Minimal post-production (color grading and film processing only)  
✓ Material authenticity (wardrobe, props, set rendered with authentic textures)  

**Process & Technical Positives:**  
✓ Chiaroscuro lighting (contrast 1.8–5.5:1 depending on mode, sculptural key light present)  
✓ Theatrical staging evident (elaborate constructed environment or interior)  
✓ Narrative integration (wardrobe, pose, setting form cohesive story)  
✓ Color grading appropriate to film stock (Portra palette, cool-biased, muted saturation)  

**Gender & Expression Positives:**  
✓ Gender presentation preserved consistently across all three modes  
✓ Period-appropriate contemporary fashion styling (1995–Present wardrobe)  
✓ Hair length preserved exactly (if short, remain short; if long, remain long)  
✓ Hair color preserved exactly  
✓ Facial hair presence/absence preserved exactly  
✓ Wardrobe matches gender presentation (no cross-gender styling)  

**Anatomical & Proportion Positives:**  
✓ Standard fashion proportions maintained (head 1:7–1:8 body ratio)  
✓ Facial features within human biological range (no 10%+ distortion)  
✓ Elegant pose and lighting (grace derived from composition, not proportion manipulation)  

**Composition & Framing Positives:**  
✓ [Mode-specific composition] applied (see Section 7 for ratio-specific details)  
✓ Figure scale appropriate to mode (65-75% EDITORIAL, 40-50% ENVIRONMENTAL, 45-55% SURREAL)  
✓ Background occupies mode-appropriate frame % (25-35% EDITORIAL, 50-60% ENVIRONMENTAL, 45-55% SURREAL)  
✓ No visible frame edges, borders, or presentation frames outside canvas  

**Narrative & Content Positives:**  
✓ No nudity (all figures fully clothed in period-contemporary fashion)  
✓ No gore, violence, or explicit content  
✓ No recognizable copyrighted logos or brand names  
✓ No celebrity likenesses (original character design)  
✓ Gender respect maintained (presented gender honored through styling choice)  
✓ Animals treated with implied welfare priority (calm, safely positioned)  

---

### Vocabulary Warnings

**Avoid undermining language:**

✗ "Subtle" — Use instead "PRONOUNCED", "DISTINCT", "visible" for specifications  
✗ "Organic" without "grain" — Specify "film-grain-authentic" or "practical-texture-rich"  
✗ "Harmonious" or "beautiful" — Replace with "theatrical", "emotionally resonant", "meticulously composed"  
✗ "Soft focus" without measurement — Specify "softness coefficient 0.70", "sfumato-blended", "painterly diffusion"  
✗ "Dramatic" without specifications — Specify "contrast 3.5:1", "chiaroscuro-modeled", "key light 35° above"  

**Amplify critical terms:**

✓ "film-stock-rendering" (explicit, not "cinematic")  
✓ "chiaroscuro-dramatic" (explicit, not "moody")  
✓ "practical-effects-in-camera" (explicit, not "realistic")  
✓ "softness coefficient 0.70+" (quantified, not "soft edges")  
✓ "shadow floor L≥20%" (quantified, not "readable shadows")  
✓ "theatrical-staging" (explicit, not "elaborate")  

---

## 7) Composition & Lighting Patterns

### RATIO-SPECIFIC COMPOSITION REQUIREMENTS (Mode-Dependent)

#### **FASHION_EDITORIAL (3:4 Portrait)**

**Vertical Emphasis:**
- Figure occupies upper 60-70% of frame (full length seated or standing)
- Background (interior, constructed set, theatrical backdrop) occupies lower 30-40%
- Head positioned in upper third (rule of thirds applied vertically)
- Negative space above head 5-10% (breathing room without emptiness)

**Compositional Anchor:**
- **Primary subject placement:** Head at upper-third line, shoulders filling 50-60% frame width
- **Secondary framing:** Waist/costume detail occupying middle third
- **Background placement:** Lower third contains setting context (furniture, architectural element, color field)
- **Depth layering:** Figure sharp, background soft (f/4-f/5.6 creates separation)

**Figure:Ground Ratio:** 70:30 (figure dominant, background supporting)

**Density:** 60-70% visual information (moderate detail, not empty; not crowded)

**Lighting logic:** Top-left key light at 35° above, 25° left of camera axis (creates modeling on face and costume without harsh shadows)

**Detail:Negative Space Ratio:** 65:35 (rich costume detail balanced with breathing room)

---

#### **ENVIRONMENTAL_SPECTACLE (16:9 Widescreen)**

**Horizontal Expansiveness:**
- Environmental context occupies 50-60% of frame (architectural or landscape dominance)
- Figure scale-shifted smaller (40-50% frame area), embedded within environment
- Horizontal thirds used for composition (divide widescreen into thirds; place figure or key architectural element on intersection)
- Background layering 3-4 depth planes (foreground figure → mid-ground architecture → background landscape)

**Compositional Anchor:**
- **Primary subject placement:** Figure positioned off-center (left or right third line), not centered
- **Secondary anchor:** Architectural frame (doorway, landscape line, structural element) balances figure
- **Environmental context:** Buildings, landscapes, sky, or interior volumes occupy 50-60% frame
- **Depth layering:** Foreground figure clear, mid-ground architecture detailed, background atmospheric and recessive

**Figure:Ground Ratio:** 45:55 (environment dominant, figure embedded)

**Density:** 65-75% visual information (rich architectural or environmental detail, complex space)

**Lighting logic:** Sophisticated multi-source—key light from 40-50° above, possible secondary lights from sides or background to sculpt architecture

**Detail:Negative Space Ratio:** 70:30 (environmental detail balanced with sky or negative space)

---

#### **SURREAL_NARRATIVE (4:3 or 16:9 Flexible)**

**Balanced Visual Weight (4:3):**
- Figure and environment occupy near-equal frame percentages (45:55 split)
- Central composition or off-center placement depending on narrative
- Atmospheric depth and dreamlike layering (not necessarily linear perspective)
- Lighting creates pools of illumination emphasizing narrative focus

**Expanded Panoramic (16:9):**
- Sprawling fantastical environment with figure scale-shifted (similar to Environmental but with surreal logic)
- Composition may defy realistic perspective (impossible geometry acceptable in surreal context)
- Multiple focal points possible (figure + fantastical element + atmospheric light)

**Compositional Anchor:**
- **Primary subject:** Figure positioned to suggest narrative action or emotional state (not static, but dreamlike motion)
- **Surreal element:** Fantastical prop, floating element, or impossible architecture balances composition
- **Lighting anchor:** Spotlit key light creating dramatic emphasis, shadows allowed to be deep (L<10% acceptable)
- **Atmospheric layering:** Multiple depth planes with mood-appropriate transitions

**Figure:Ground Ratio:** 50:50 or context-dependent (equal visual weight; neither dominates)

**Density:** 60-75% visual information (rich detail with atmospheric spaces; dreamlike but legible)

**Lighting logic:** Theatrical and directional—key light from 35-50° above, possible rim lights, background lights for separation and mystery

**Detail:Negative Space Ratio:** 60:40 or 70:30 (balance between narrative detail and breathing atmospheric space)

---

### STYLE-SPECIFIC COMPOSITION (Mode-Differentiated)

**FASHION_EDITORIAL Composition:**
- Perspective regime: Linear, realistically proportioned interior or close environment
- Grid/symmetry: Avoid perfect symmetry; asymmetrical rule-of-thirds preferred
- Figure:ground ratio: 70:30 (figure-centric)
- Lighting: Soft, directional key light with visible fill (ratio 2:1 to 3:1)
- Detail:negative space: 65:35 (rich costume detail, breathing room)

**ENVIRONMENTAL_SPECTACLE Composition:**
- Perspective regime: Forced perspective suggests scale and grandeur
- Grid/symmetry: Architectural elements may use symmetry; figure positioned asymmetrically
- Figure:ground ratio: 45:55 (environment-centric)
- Lighting: Multi-source, sophisticated (natural + artificial), sculpts architectural volumes
- Detail:negative space: 70:30 (rich environmental narrative, sky or landscape space)

**SURREAL_NARRATIVE Composition:**
- Perspective regime: Dream logic—may defy realistic perspective, impossible angles acceptable
- Grid/symmetry: Varied; symmetry may suggest artificial dreamscape, asymmetry suggests movement
- Figure:ground ratio: 50:50 (equal visual weight)
- Lighting: Theatrical, spotlit, dramatic (contrast 3.0–5.5:1), pools of illumination
- Detail:negative space: 60:75% detail depending on narrative (balance between richness and atmosphere)

---

### UNIVERSAL COMPOSITION REQUIREMENTS

**Surface Context Anchor:**
- **Support material:** Photographic paper (archival print), magazine paper (newsprint/coated stock for publication), or digital display equivalent
- **Material characteristics:** Film grain visible; archive-quality rendering; not digitally smoothed or enhanced
- **Lighting interaction:** Surface responds authentically to key light and fill—no flat, digital appearance

**Frame/Band Anchor:**
- **Policy:** Omit frame entirely unless historically documented in Tim Walker's practice (he does not use ornamental frames in editorial work; no deviation)
- **Canvas boundary:** Image extends edge-to-edge; no borders, mattes, or presentation frames outside canvas

**Production Context Anchor:**
- **Substrate:** Archival photographic paper (for fine art), magazine coated stock (for editorial), or professional digital output
- **Printing method:** Darkroom or inkjet fine art printing; no digital artifacts
- **Color separation:** CMYK if magazine publication context; RGB if digital display
- **Registration quality:** Professional registration accuracy; registration drift absent (contemporary printing standard)

**Ratio Enforcement Anchor:**
- **Aspect ratio:** [specified ratio] composed as native format, not adapted from different ratio
- **Compositional design:** Specific to target ratio's spatial logic (vertical for 3:4, horizontal for 16:9)
- **No padding:** Canvas fills completely; no letterboxing, pillarboxing, or adaptation artifacts

**Gender Expression Anchor:**
- **Presentation consistency:** Subject's gender identity (as presented through wardrobe, styling, posture) remains identical across FASHION_EDITORIAL, ENVIRONMENTAL_SPECTACLE, and SURREAL_NARRATIVE modes
- **Wardrobe coherence:** Gender-appropriate clothing across all modes; cross-gender styling prohibited
- **Hair consistency:** Length and color preserved exactly across modes; styling may vary (arrangement, texture) but fundamental characteristics identical
- **Facial hair consistency:** Presence/absence preserved across modes; grooming style consistent

**Mode-Specific Composition Anchor:**
- **FASHION_EDITORIAL:** Portrait vertical emphasis, figure 70%, background 30%, soft edges, emotional expression
- **ENVIRONMENTAL_SPECTACLE:** Landscape horizontal spread, figure 45%, background 55%, architectural detail, scale manipulation
- **SURREAL_NARRATIVE:** Balanced visual weight, dreamlike logic, theatrical lighting, fantastical elements, equal figure-environment emphasis

---

## 8) Typography & Text Integration (If Historically Present)

**Binary Policy:** **Omit text entirely.** Tim Walker's fashion photography does not include visible mastheads, logos, or typography. Clean imagery without text overlays or embedded typography.

**Exception Policy:** If publication context requires masthead (e.g., magazine cover concept), text must be:
- Positioned outside main composition (top margin only, not overlapping subject)
- Minimal (magazine title only, ≤3 words)
- Contemporary sans-serif font (Helvetica, Gotham, or equivalent—no decorative fonts)
- Color: Black on white or white on dark background for contrast
- Not integrated into narrative (separate from image content)

**Standard requirement:** Clean image, no text. Typography integration not characteristic of Walker's fine art photography practice.

---

