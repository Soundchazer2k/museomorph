---
id: annie_leibovitz_fashion
group: "Photography"
movement: "Fashion & Celebrity Portraiture"
artist: "Annie Leibovitz"
display_name: "Annie Leibovitz — Fashion & Celebrity Photography"
style_scope: single-artist

ratios: ["3:4","4:5","16:9","4:3","1:1"]
ratios_status: approved
ratios_notes: >
  Leibovitz's work spans magazine covers (3:4, 4:5), editorial spreads (16:9), 
  theatrical compositions (4:3), and square fine art prints (1:1). All ratios 
  supported natively by NanoBanana for direct deployment.

modes: 
  - "Rolling Stone Era — Intimate Documentary Portraiture (1970–1983)"
  - "Vanity Fair Era — Theatrical Staged Narratives (1983–2000)"
  - "Commercial & Fashion Campaigns — Conceptual Brand Narratives (1990s–2010s)"
  - "Personal Work — Domestic Intimacy & Family Study (ongoing)"

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:
  allowed: true
  max_subjects: 4
  layout_hint: "Primary figure dominant, secondary figures supporting or framing narrative"
  identity_priority: ["silhouette","gesture","expression","clothing"]

composition_constraints:
  max_subjects: 4
  subject_interaction: required
  crowd_scenes: false
  animals_allowed: true
  animal_types: ["domestic","service"]
  max_animals: 2
  text_allowed: yes
  text_context: "Magazine mastheads, cover lines, bylines period-authentic to publication"

about: >
  Annie Leibovitz revolutionized celebrity portraiture by transforming it into 
  conceptual fine art. Moving beyond documentary snapshots, she crafted elaborate 
  staged narratives that reveal psychological depth, cultural moment, and emotional 
  vulnerability. Her signature technique combines theatrical lighting, meticulous 
  art direction, and intimate subject interaction to produce images that transcend 
  commercial work into museum-quality artistic statements. This framework captures 
  four distinct operational modes spanning her evolution from Rolling Stone's raw 
  documentary aesthetic to Vanity Fair's grand theatrical staging, commercial 
  campaigns' conceptual sophistication, and deeply personal intimate family work.

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

---

# Annie Leibovitz — Fashion & Celebrity Photography Framework v4.4
## (NanoBanana Edition — Fictional Subject Celebrity Treatment)

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Renderer Adaptation Mandate:** When target ratio unsupported by renderer, automatically apply nearest-match adaptation per Section 2.1.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control is prompt-based only. Combat model resistance through:
  - **Explicit ratio declaration** in multiple prompt locations (Section 1, Section 2, Section 6)
  - **Repetitive ratio reinforcement** using different phrasings
  - **Negative constraints** explicitly prohibiting unwanted ratios
  - **Compositional anchors** designed specifically for target ratio
- **Style over likeness:** Likeness via silhouette/gesture/expression/costume; fictional subject receives star treatment photoshoot aesthetic.
- **Technical Measurement Authority:** Quantitative specifications override descriptive language.
- **Process-Over-Result Priority:** How light/materials are applied supersedes appearance descriptions.
- **Photography Methodology:** Simulate professional photoshoot conditions—multiple lighting setups, controlled environment, deliberate posing direction, film/digital production quality.
- **Theatrical Authority:** Elaborate staging, conceptual art direction, and narrative embedding are core, not peripheral.
- **Gender Expression Authority:** Preserve subject's presented gender identity through styling appropriate to chosen mode.
- **Lighting Flag (choose one):** `chiaroscuro-dramatic`, `golden-hour-warm`, `polarized-daylight`, `diffuse-ambient`, `rimlight-contour`, `candlelit-lowkey`, `studio-strobe-modeling`, `reflective-specular-control`
- **Texture Flag (choose one):** `film-grain-triX`, `digital-painted`, `color-surge`, `studio-strobe-precision`, `film-stock-kodak-portra`, `darkroom-timing-marks`, `medium-format-compression`, `high-resolution-archival`
- **Composition Flag (choose one):** `rule-of-thirds`, `golden-spiral`, `off-center-dynamic`, `vortex-composition`, `hierarchical-scaling`, `empty-negative-dominance`, `panoramic-sweep`
- **Palette Flag (choose one):** `high-saturation-contrast`, `muted-desaturation`, `split-complementary`, `warm-undertone-dominant`, `cool-shadow-accents`, `cinematic-color-grading`
- **Production Context Flag (choose one):** `magazine-editorial-spread`, `portrait-session-studio`, `fashion-campaign-conceptual`, `intimate-family-moment`, `theatrical-staged-narrative`
- **Pose Flag (choose one):** `contrapposto`, `power-stance`, `candid-motion`, `psychological-tension`, `gestural-fluid`, `seated-throne`, `leaning-casual`, `foreshortened-diagonal`
- **Face-Treatment Flag:** `studio-strobe-modeling`, `diffusion-soft`, `diffusion-glam`, `medium-format-compression`, `high-resolution-archival`, `skin-retouching-painterly`, `color-corrected-cinematic`
- **Canvas Control Flag (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`
- **Material Physics Authority:** Film stock, lighting equipment, and post-production methods override aesthetic preferences.
- **Period Production Authenticity:** For specified era (Rolling Stone, Vanity Fair, Commercial, Personal), use era-appropriate camera technology, film stock, lighting systems, and post-production methods with documented period characteristics.
- **Quantifiers authoritative:** Numeric anchors are validation targets (luminance ranges, proportions, background density percentages).
- **Text policy:** Render period-authentic text only if Section 8 authorizes (magazine mastheads, cover lines, bylines).
- **Safety/IP:** No real celebrity likenesses; no copyrighted logos/watermarks/signatures; fictional subjects only.
- **Age & wardrobe guardrail:** Subjects default to adult styling unless explicitly stated as minors (minimum modest wardrobe).
- **Mode Consistency Authority:** Subject's gender presentation must remain consistent across all portrait iterations.
- **Failure Mode Flags:** Avoid documentary blur, casual snapshot aesthetic, amateur lighting, flat commercial photography defaults.
- **Silent validation:** Apply checklist, regenerate silently if fail.
- **STRICT TERMINATION:** Framework ends at Section 8. NO commentary, NO historical context, NO content beyond Section 8.

------

## 1) Core Instruction & Likeness Mandate

Photograph a **fictional character/subject** as if they were a **major celebrity** receiving **Annie Leibovitz's treatment**. This is a professional **celebrity portrait session** styled in one of four operational modes (see Mode Selector below).

**CANVAS OVERRIDE:** Recompose to exactly **[X:Y ratio]** — ignore source dimensions completely.

**RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio of **[X:Y]**. This is a hard requirement.

**MANDATORY SPECIFICATIONS (All Modes):**
- **Lighting Architecture:** Multi-strobe studio setup with intentional key light direction (angle specification per mode)
- **Film Stock Aesthetic:** Kodak Portra 160/400 color negative rendering OR high-resolution digital color grading with archival quality
- **Retouching Approach:** Painterly skin refinement (not hyper-realistic smoothing; subtle imperfections preserved for authenticity)
- **Composition Sophistication:** Narrative embedding—subject positioned within conceptual context that reveals personality/cultural moment
- **Expression Authenticity:** Subject appears genuinely engaged, not posed awkwardly; psychological depth visible
- **Background Intentionality:** Environment chosen to support narrative, never random or decorative
- **Tonal Range:** Full luminance spectrum from deep blacks (L≥20) through mid-tones to bright highlights (L≤90), with distinct separation
- **Color Saturation:** Warm undertones dominant in flesh/highlights; cool accents in shadows; cinematic color grading throughout
- **Edge Quality:** Soft transitions in shadows and background; crisp definition on subject; selective focus depth of field
- **Surface Finish:** Photographic texture (film grain equivalent or digital artifact authenticity); NOT digital smoothness; archival print quality

**MANDATORY RATIO DECLARATION:** Output must be exactly **[X:Y ratio]**, no exceptions. Declare ratio at start and end of generation.

**GENDER EXPRESSION MANDATE:** Preserve subject's presented gender identity through period-appropriate styling and grooming across all modes.

**Celebrity Treatment Declaration:** Subject receives A-list celebrity photoshoot protocol—professional hair/makeup, wardrobe coordination, optimized lighting for flattery, psychological direction for compelling expression.

**Mode Selector (choose ONE):**
- `rolling_stone_era` — Intimate, raw documentary aesthetic (1970–1983)
- `vanity_fair_era` — Theatrical, elaborately staged narrative (1983–2000)
- `commercial_fashion_campaign` — Conceptual brand narrative (1990s–2010s)
- `personal_work_intimate` — Domestic, family-focused moment (ongoing personal projects)

**Declare selected mode explicitly at start of generation.**

**Critical Flags (ALL MODES must include these):**
- `studio-strobe-modeling` — Professional lighting setup with intentional direction
- `medium-format-compression` — Tonal and color characteristics of high-resolution film/digital medium format
- `high-resolution-archival` — Print quality suitable for exhibition and collection preservation
- `color-corrected-cinematic` — Color grading meets contemporary archival photographic standards

**Mode-Specific Flag Requirements:**
- **Rolling Stone Era:** `film-grain-triX`, `candid-motion`, `psychological-tension`, `off-center-dynamic`
- **Vanity Fair Era:** `chiaroscuro-dramatic`, `theatrical-staged-narrative`, `golden-spiral`, `vortex-composition`, `high-saturation-contrast`
- **Commercial/Fashion:** `split-complementary`, `conceptual-brand-narrative`, `rule-of-thirds`, `panoramic-sweep`, `fashion-campaign-conceptual`
- **Personal Work:** `diffusion-soft`, `intimate-family-moment`, `gestural-fluid`, `empty-negative-dominance`, `cool-shadow-accents`

**Style Dominance Line:**
Generate subject in **professional celebrity portrait session aesthetic**—Leibovitz's signature combination of theatrical staging, meticulous lighting control, psychological depth, and narrative sophistication. This is MANDATORY across all modes.

**Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions.

------

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS (Native — No Adaptation Required):**

- ✅ `1:1` (square — 1024×1024) — Fine art exhibition prints, Instagram gallery
- ✅ `3:4` (portrait — 864×1184) — Magazine covers, celebrity portraits
- ✅ `4:5` (portrait — 896×1152) — High-fashion editorial, vertical posters
- ✅ `4:3` (landscape — 1184×864) — Theatrical narrative spreads, environmental context
- ✅ `16:9` (widescreen — 1344×768) — Editorial fashion spreads, cinematic compositions
- ✅ `21:9` (ultra-wide — 1536×672) — Panoramic campaigns, ensemble theatrical narratives

**MANDATORY RATIO SELECTION:** Choose one exact specification from supported ratios above.

**CANVAS RECOMPOSITION STRATEGY (Mode-Specific):**

### Rolling Stone Era — Intimate Documentary Portraiture

**Ratio Status:** native (all supported ratios functional; prefer 3:4, 4:5 for intimacy)

**Reframing Method:** `strict-reframe` — Tighten negative space; subject occupies 60–75% of frame; minimal environmental distraction

**Spatial Allocation:** Subject positioned left-center or right-center (off-axis); eye-line leading into negative space; psychological openness to frame edge

**Background Treatment:** Minimal—plain or softly blurred; focus entirely on subject's face and upper torso; documentary neutrality with warmth

**Format Justification:** Portrait ratios (3:4, 4:5) emphasize face and intimate connection; tight framing creates psychological proximity; Rolling Stone magazine standard dimensions

**Mode-Specific Ratio Considerations:** 
- **3:4 preferred** — Classic Rolling Stone magazine cover proportion; intimate head-and-shoulders framing
- **4:5 secondary** — Extended vertical emphasis for full-body seated portraits
- **1:1 acceptable** — Fine art exhibition context; square framing for iconic status

### Vanity Fair Era — Theatrical Staged Narratives

**Ratio Status:** native (all supported ratios functional; prefer 4:3, 16:9, 1:1 for theatrical scope)

**Reframing Method:** `adaptive-extend` — Expand background to theatrical scale; subject 40–60% of frame; environmental narrative critical to composition

**Spatial Allocation:** Subject positioned according to compositional archetype (golden spiral, rule of thirds, vortex); surrounded by conceptual props, set pieces, or environmental context; theatrical framing

**Background Treatment:** Elaborate and intentional—custom sets, architectural elements, conceptual objects, dramatic lighting on background; background equals subject importance

**Format Justification:** Landscape ratios (4:3, 16:9) accommodate theatrical staging with multiple narrative elements; square (1:1) emphasizes conceptual balance; Vanity Fair spread and cover standards

**Mode-Specific Ratio Considerations:**
- **4:3 preferred** — Classical theatrical proportion; accommodates full-body figure with elaborate environment
- **16:9 secondary** — Panoramic narrative spread; multiple elements framed horizontally
- **1:1 tertiary** — Conceptual balance; symmetrical staging; iconic status

### Commercial & Fashion Campaigns — Conceptual Brand Narrative

**Ratio Status:** native (landscape ratios preferred; all functional)

**Reframing Method:** `format-native` — Compose directly for declared ratio; no adaptation; commercial composition standards apply

**Spatial Allocation:** Subject 45–65% of frame; product/fashion element 15–30% (if applicable); negative space 20–30% for brand integration; compositional hierarchy: subject > product > environment

**Background Treatment:** Brand-appropriate context—studio white/neutral, or conceptual environmental integration; clean, professional, deliberate; secondary to subject

**Format Justification:** Landscape ratios (16:9, 4:3) accommodate fashion/product integration; commercial publication standards; campaign poster dimensions

**Mode-Specific Ratio Considerations:**
- **16:9 preferred** — Panoramic campaign spread; horizontal composition for brand layout
- **4:3 secondary** — Editorial fashion spread; balanced composition
- **1:1 tertiary** — Square campaign poster; social media adaptation

### Personal Work — Domestic Intimacy & Family Study

**Ratio Status:** native (all ratios functional; prefer 4:5, 1:1, 4:3 for domestic scale)

**Reframing Method:** `adaptive-extend` — Include domestic environment; subject 50–70% of frame; context (home, family members, pets) 30–50%; intimate but expansive

**Spatial Allocation:** Subject positioned naturally within domestic space; relaxed pose; family members or intimate context integrated; no theatrical staging; authentic domestic moment

**Background Treatment:** Real domestic environment—home interior, garden, intimate space; warm, personal; lighting natural or subtly supplemented; background supports intimacy

**Format Justification:** Portrait/square ratios (4:5, 1:1) emphasize emotional connection; landscape ratios (4:3) for family group framing; intimate publication standards

**Mode-Specific Ratio Considerations:**
- **4:5 preferred** — Vertical intimate framing; emotional emphasis
- **1:1 secondary** — Square domestic snapshot; balanced intimacy
- **4:3 tertiary** — Family group composition; environmental context

------

## 3) Style Context & Material Authenticity

**Historical Influences:**

Leibovitz emerged from 1970s documentary photojournalism tradition (influenced by photographers like W. Eugene Smith, Diane Arbus, Irving Penn), but revolutionized celebrity portraiture by embedding narrative sophistication and theatrical art direction. Her style bridges photojournalism's authenticity with fine art's conceptual ambition. Key influences: surrealist staging (Man Ray), theatrical lighting (studio portrait tradition), fashion photography conceptualization (Irving Penn, Patrick Demarchelier), and intellectual rigor (Susan Sontag's theories on image-making).

**Medium/Production Method:**

- **Film Era (1970–2000):** Hasselblad medium format (500 series bodies), Mamiya RZ67, Nikon 35mm cameras; Kodak Portra 160/400 color negative stock; Broncolor and Profoto strobe systems with complex light modifier setups (softboxes, beauty dishes, grids, reflectors); darkroom developing with meticulous print control and dodging/burning; baryta papers for fine art quality; manual focus, precise exposure metering, multiple takes per shot
- **Digital Era (2000–present):** Canon EOS series (5D, 1Ds, R5, R3) and Phase One medium format digital backs; RAW capture workflow; tethered shooting on set with digital technician managing files; Adobe Photoshop post-production with color correction, selective retouching, dodging/burning simulation; high-resolution archival printing on metallic/baryta papers; maintains film stock aesthetic in digital color grading

**Thematic Purpose:**

Lebovitz's work transforms celebrity portraiture from documentation into cultural narrative and psychological revelation. Each portrait answers implicit question: "What does this person reveal about our cultural moment?" Her staging and lighting serve emotional truth-telling, not flattery. Narrative embedding creates layered meaning—props, environment, pose, expression all contribute to character study. Work blurs boundaries between photojournalism, fine art, and commercial photography.

**5 Hallmark Motifs with Quantified Specifications:**

1. **Theatrical Key Lighting Setup (Mandatory)**
   - Key light positioned 45-60° from camera axis, elevated 30-40° above subject's eye level
   - Key light intensity: 1500-2000 nits (Vanity Fair/Commercial) or 800-1200 nits (Rolling Stone/Personal)
   - Fill light ratio: 1:4 to 1:8 (creates shadow definition; not flat)
   - Shadow floor luminance: L≥20 (preserves detail; prevents crush)
   - Specular highlights on eyes/jewelry: L=85-95 (catchlights present, not blown)
   - Contrast ratio: 1:6 to 1:8 (dramatic, not documentary flat)

2. **Skin Tone Rendering with Warm Undertone Dominance**
   - Flesh tone primary: H=15-35° (warm yellows/oranges), S=25-50% (saturated but natural), L=60-75% (well-lit, not burned out)
   - Flesh tone secondary/shadow: H=10-30° (warmer ochre), S=15-35%, L=40-55% (shadow depth while maintaining warmth)
   - Percentage of face area: 35-50% in primary flesh tone range
   - Cheek/lip emphasis: slight saturation boost (S+5-10%) and luminance lift (L+5) for vitality
   - NO flat or desaturated skin; warmth is MANDATORY across all modes

3. **Background Separation & Atmospheric Depth**
   - Background luminance: L≤40 for Vanity Fair/Rolling Stone (dark, separated), L=45-65 for Commercial/Personal (brighter)
   - Background blur coefficient: 0.6-0.8 (soft focus; subject definitively separated)
   - Depth layers: minimum 2-3 (foreground subject, mid-ground environment, background blur)
   - Color shift in background: cool undertones (H=200-280°) contrasting warm subject
   - Environmental detail density (if visible): 20-40% of background area occupied by recognizable objects/architecture

4. **Retouching Approach: Painterly Authenticity (NOT Hyper-Real Smoothing)**
   - Skin texture: subtle, preserved; pore structure visible at normal viewing distance
   - Blemish treatment: selective removal of temporary imperfections (acne, scratches); permanent features (moles, scars, age lines) preserved or enhanced
   - Dodge/burn implementation: visible but refined; mimics darkroom technique, not digital filter
   - Color correction scope: 10-20% of image pixels modified; 80-90% camera capture retained
   - Surface finish: appears photographed, not digitally processed; archival film quality or high-end digital aesthetic

5. **Narrative Embedding & Conceptual Props**
   - Props per frame: 1-5 objects (Rolling Stone) to 3-8 objects (Vanity Fair/Commercial), each serving narrative purpose
   - Prop placement logic: balanced asymmetry; objects frame or support subject, not distract
   - Wardrobe integration: 60-80% of subject visible; clothing chosen to reveal personality/status/mood
   - Pose sophistication: body language communicates psychological state; contrapposto or complex posing preferred; never rigid/formal (except when intentional)
   - Expression authenticity: genuine engagement visible; micro-expressions of vulnerability, confidence, or contemplation

**Period Framing (Artist Active Dates):** 1970–present (current)

**Tone Tag:** `theatrical-psychological-intimate` — combines grand staging with emotional depth; documentary authenticity with conceptual art direction; celebrity glamour with human vulnerability

**Production Era Authenticity:**
- **Rolling Stone Era (1970–1983):** Film stock grain visible; warm Kodachrome characteristics; darkroom printing artifacts visible; sometimes grainy/soft focus as stylistic choice; hand-printed quality with dodging/burning marks; magazine halftone dot patterns authentic to 1970s-80s newsprint
- **Vanity Fair Era (1983–2000):** Transition from film to early digital; higher contrast than Rolling Stone; cleaner but not overly smooth; color saturation increased; professional lab printing; magazine glossy paper quality; photoshop retouching era emergence (2000s+)
- **Commercial/Fashion Campaigns (1990s–2010s):** High-end commercial printing standards; color grading sophisticated; digital retouching evident but refined; campaign poster/billboard resolution; luxury brand aesthetic
- **Personal Work (ongoing):** Blends all periods; often returns to film aesthetic or deliberately aged finish; intimate scale; personal project freedom allows experimental approaches

**Innovation:** Leibovitz pioneered narrative portraiture—transforming celebrity documentation into storytelling. Her integration of theatrical staging, sophisticated lighting, conceptual props, and intimate subject interaction created a new category of celebrity portrait photography that elevated commercial work into museum-quality fine art. Her hybrid approach (film + digital, commercial + personal, documentation + staging) established her methodology as gold standard for editorial and advertising portraiture.

------

## 4) Technical Method & Mark-Making

### UNIVERSAL TECHNIQUE ANCHORS (All Modes)

**Facial Architecture Anchor (Gender-Differentiated):**

**Female Subjects:**
- Eye placement: 42-46% of face width apart; orbital volume generous (22-26% of facial area)
- Eye size: 25-28% of face height; iris diameter 8-12mm equivalent at normal viewing distance
- Nose width: 25-30% of face width at bridge; refined tip (not bulbous)
- Mouth width: 35-42% of face width; lip fullness natural to subject (not over-emphasized except intentional glamour mode)
- Cheekbone prominence: subtle to moderate (not gaunt unless intentional); highlighted by key light at 45-60° angle
- Jaw line: soft or defined depending on subject; not exaggerated masculine angularity
- Skin luminance: L=62-72% (well-lit, youthful vitality maintained)
- Lighting geometry: key light at 45° to camera axis, elevated 30-35°, creates flattering shadow under cheekbone

**Male Subjects:**
- Eye placement: 40-44% of face width apart; orbital volume moderate (20-24% of facial area)
- Eye size: 22-25% of face height; iris smaller than female baseline; intensity of gaze emphasized
- Nose width: 28-35% of face width; stronger bridge definition
- Mouth width: 38-45% of face width; lip definition subtle to moderate
- Jaw line: defined or angular depending on subject; can be emphasized by side-lighting
- Cheekbone prominence: moderate (natural to male anatomy); highlighted by key light to show structure
- Skin luminance: L=55-68% (can be darker than female; masculine tone acceptable)
- Lighting geometry: key light at 45-50° to camera axis, elevated 35-40°, emphasizes jaw and cheekbone structure

**Pose Integrity Anchor:**
- Head tilt: 0-25° from vertical (engaged, not stiff; slight tilt conveys openness)
- Shoulder/hip differential: 10-20° counter-rotation (contrapposto or power stance preferred; never symmetrical/rigid)
- Hand positioning: intentional gesture (hands never awkwardly empty or rigidly at sides); holding props or positioned to frame body
- Weight distribution: 70% on one leg (contrapposto) or balanced (power stance); body language communicates confidence/vulnerability
- Expression authenticity: micro-expressions visible; genuine engagement with camera/environment; not frozen smile
- Pose complexity: 2-3 body zones active (hands, torso rotation, head tilt create spatial interest); static poses avoided

**Scale Hierarchy Anchor (Anatomical Proportions - MANDATORY):**
- Head-to-body ratio: 1:7 to 1:8 (classical anatomy; no distortion)
- Limb proportions: arm length 38-42% of torso; leg length 50-55% of body
- Feature scale: eyes 25-28% of face height, nose 30-35% of face height, mouth 20-25% of face height (NO exaggeration; elegant proportions maintained)
- NO overcorrection: Anatomical stylization serves refinement, not distortion; all measurements emphasize grace, not unnaturalness

**Material Authenticity Anchor (Mode-Specific Film/Digital Characteristics):**
- **Rolling Stone Era:** Film grain visible (equivalent to ISO 400 Tri-X or Kodak Portra 400); warm color cast (slight yellow/magenta shift); occasional dust specs; darkroom print characteristics evident (slight unevenness in tone); edge softness natural to era (L=L medium format)
- **Vanity Fair Era:** Film stock aesthetic maintained (Kodak Portra 160 characteristics); color saturation increased but natural; grain minimal but visible under magnification; print surface matte or slight sheen; clean but not digital-perfect
- **Commercial/Fashion:** High-end digital color grading; minimal grain (or artistic grain application); maximum color accuracy; metallic or glossy paper finish simulation; flawless technical execution; luxury brand aesthetic
- **Personal Work:** Hybrid approach allowed; can mimic film grain, vintage color casts, or digital precision depending on narrative intent; painterly retouching evident; artistic choice over technical perfection

**Period Consistency Anchor (Production Methods Matching Era):**
- **Rolling Stone (1970–1983):** Hasselblad or Nikon cameras; Kodak Portra film stock characteristics; Broncolor strobe systems (recognizable light quality); darkroom contact sheet evidence; printed on baryta paper; hand-cropped aesthetic visible
- **Vanity Fair (1983–2000):** Medium format or 35mm SLR; transition to digital backend (1990s); sophisticated lighting rigs with multiple strobes; digital color correction emergence; magazine glossy or matte paper finish
- **Commercial (1990s–2010s):** High-end digital (Canon 5D series, Phase One backs); RAW workflow standard; Photoshop color grading sophisticated; billboard/poster resolution; luxury market presentation standards
- **Personal (ongoing):** Blended methods; often deliberately aged or returns to film aesthetic; experimental retouching allowed; personal project freedom

**Production Method Anchor (Camera + Lighting + Post-Production):**
- **Camera System:** Mode-appropriate (Hasselblad for Rolling Stone authenticity, Canon/Phase One for Vanity Fair/Commercial, hybrid for Personal)
- **Lighting Setup:** Multi-strobe configuration with intentional modifier choice (softbox for wraparound light, beauty dish for dramatic modeling, grid for spotlight accent, umbrella for fill)
- **Exposure Strategy:** Multiple takes (5-15 per pose); minor adjustments to pose/expression; captures peak moment within controlled environment
- **Post-Production:** Darkroom or digital equivalent; color correction for mood; selective retouching for authenticity (NOT hyper-smoothing); dodging/burning for dimension; final output archival-quality print

**Canvas Adaptation Anchor (Ratio-Specific Composition - FOR FINAL RATIO):**
- **3:4 Portrait:** Subject 65-75% of frame; tight head-and-shoulders framing; vertical emphasis emotional intimacy
- **4:5 Portrait:** Subject 60-70% of frame; allows more full-body inclusion; extended vertical storytelling
- **4:3 Landscape:** Subject 45-60% of frame; environmental context 40-55%; horizontal narrative balance
- **16:9 Panoramic:** Subject 40-55% of frame; panoramic storytelling; multiple narrative elements accommodated
- **1:1 Square:** Subject 50-70% of frame; conceptual balance; central or off-axis positioning; icon-appropriate composition

**Gender Expression Consistency Anchor (Cross-Mode Requirement):**
- Subject's gender presentation (masculine/feminine/androgynous) remains consistent across all portrait iterations
- Wardrobe and styling choices respect period and mode while maintaining gender authenticity
- Facial hair presence/absence preserved across modes (if subject is clean-shaven, maintain throughout; if bearded, maintain beard styling appropriate to mode)
- Hair length, color, and basic style maintained across modes with era-appropriate variations
- Behavioral cues (posture, gesture, expression) appropriate to subject's gender identity and cultural context

**Anatomical Proportion Validation Anchor (MANDATORY - NO DISTORTION):**
- All measurements serve elegant refinement, NOT unnaturalness
- Head-to-body ratio: 1:7–1:8 ONLY (no elongation, no compression)
- Feature proportions: facial features scale authentically; no exaggeration
- Limb ratios: arms/legs follow classical anatomy with 3-5% variation tolerance (refinement only)
- Pose sophistication: contrapposto or complex posing creates visual interest WITHOUT anatomical impossibility

---

### ROLLING STONE ERA — Intimate Documentary Portraiture (1970–1983)

#### Context
Raw, intimate celebrity portraiture capturing authentic personality rather than polished image. Minimal styling; natural or subtle lighting emphasizing genuine connection between photographer and subject. Documentary photojournalism aesthetic with psychological depth. Subject appears vulnerable, real, often caught between public persona and private self. Work defined *Rolling Stone* magazine's visual identity and established Leibovitz's signature approach to celebrity.

#### Measurements
- **Key light intensity:** 800–1200 nits (natural-seeming, not theatrical)
- **Key light angle:** 30–45° to camera axis, elevated 25–30° (flattering, not dramatic)
- **Shadow fill ratio:** 1:4 to 1:6 (definition visible; not flat documentary)
- **Shadow floor luminance:** L≥22 (readable shadow detail; atmospheric)
- **Flesh tone primary:** H=15–35°, S=25–40%, L=62–70% (warm, natural, youthful)
- **Flesh tone shadow:** H=10–30°, S=15–30%, L=45–55% (warm ochre; minimal cool undertone)
- **Subject occupancy:** 65–75% of frame (tight, intimate framing)
- **Background luminance:** L=25–40 (darker, separated; minimal environmental detail)
- **Depth perception:** 1–2 layers (subject sharp, background soft blur; minimal middle ground)
- **Visible grain equivalent:** ISO 320–400 (Kodak Portra 400 or Tri-X characteristics)
- **Tonal steps per face:** 5–7 distinct value zones (subtle modeling, not extreme contrast)
- **Color saturation (overall):** S=40–55% (moderate; not oversaturated; photojournalistic restraint)

#### Technique
- **Lighting approach:** Single key light + ambient fill (available light often supplemented with portable strobe); emphasis on subject's natural features rather than sculpting
- **Camera system:** Nikon 35mm or Hasselblad medium format; fast film stock (Tri-X, Portra 400) enabling natural-light priority
- **Lens selection:** 50mm, 85mm, or 100mm prime lenses; shallow depth of field (f/4–f/5.6) isolates subject from background
- **Subject direction:** Conversational; Leibovitz builds rapport; minimal posing direction; captures candid moments within intentional framing
- **Multiple takes:** 8–12 variations per subject; minor expression adjustments; finds peak moment of authentic engagement
- **Film stock rendering:** Visible grain structure; warm color cast inherent to Kodak Portra/Ektachrome; slight softness in shadows
- **Darkroom process:** Contact sheets reviewed; final image selected; hand-printed on baryta paper; dodging/burning for shadow/highlight balance
- **Retouching scope:** Minimal (10% of image pixels); blemish removal only; skin texture preserved; era-authentic restraint

#### Validation
- ✓ Subject's expression communicates genuine engagement (not forced smile; micro-expressions of vulnerability/confidence visible)
- ✓ Key light direction creates flattering shadow under cheekbone (defines face structure without harshness)
- ✓ Shadow floor readable (L≥22; eye detail visible in shadow)
- ✓ Flesh tone warm (H=15–35°); no cool/desaturated skin
- ✓ Film grain equivalent visible (ISO 320–400 appearance; not digital smoothness)
- ✓ Tonal separation present (5–7 value zones; not posterized, not muddy)
- ✓ Background separated (L≤40; blur coefficient 0.6+; subject definitively primary)
- ✓ Composition tight (subject 65–75% of frame; intimate framing maintained)
- ✓ No theatrical staging (minimal props; authentic environment or neutral background)
- ✓ Gender expression consistent (clothing/grooming appropriate; hair, facial hair presence maintained)

#### Automated Corrections
*(Phase 4 corrections append here after test cycles)*

---

### VANITY FAIR ERA — Theatrical Staged Narratives (1983–2000)

#### Context
Elaborate, conceptually sophisticated celebrity portraits embedding narrative meaning through theatrical staging, complex lighting, and intentional props. Subject positioned within conceptual context revealing psychological depth or cultural significance. Dramatic chiaroscuro or sculptural key lighting. Grand scale; often multi-figure or complex environmental compositions. Fashion and accessories integral to narrative. This era revolutionized celebrity portraiture by transforming it into fine art photography within commercial publication.

#### Measurements
- **Key light intensity:** 1500–2000 nits (theatrical, sculptural; dramatic modeling)
- **Key light angle:** 45–60° to camera axis, elevated 35–40° (creates prominent shadow; sculpts form)
- **Shadow fill ratio:** 1:6 to 1:8 (deep shadows; high contrast; dramatic separation)
- **Shadow floor luminance:** L≥20 (dark enough for drama; detail preserved)
- **Specular highlights:** L=85–92 (bright but not blown; eye catchlights present)
- **Flesh tone primary:** H=15–40°, S=30–50%, L=65–78% (warm, saturated; glamorous vitality)
- **Flesh tone shadow:** H=5–30°, S=20–40%, L=38–50% (cool undertones in shadow; color temperature contrast)
- **Background luminance:** L=25–45 (separated; often darkness; dramatic)
- **Subject occupancy:** 40–60% of frame (accommodates elaborate environment/props)
- **Environmental detail density:** 20–40% of background area occupied by recognizable objects/architecture/props
- **Depth perception:** 3–4 distinct layers (foreground subject, mid-ground elements, background blur or architectural detail)
- **Visible grain:** Minimal (ISO 100–160 equivalent; clean aesthetic; or artistic grain application)
- **Color saturation (overall):** S=50–70% (vivid; theatrical; cinematic color grading)
- **Tonal steps per face:** 6–9 distinct value zones (dramatic modeling; high contrast between light/shadow)

#### Technique
- **Lighting approach:** Multi-strobe setup with intentional modifiers (softboxes for wraparound light, beauty dishes for dramatic key, grids for accent, reflectors for fill strategy); lighting "sculpts" subject and environment
- **Camera system:** Hasselblad medium format (500 series bodies with 80mm, 150mm lenses) or early high-end digital; Kodak Portra 160 color negative preferred; tripod-mounted; deliberate composition
- **Studio setup:** Controlled environment (studio or rented location); sets designed/built to support narrative concept; wardrobe styled; hair/makeup professional; props curated
- **Subject direction:** Extensive direction (posing, expression, emotional tone); Leibovitz communicates conceptual intent; subject guided toward psychological authenticity within theatrical frame
- **Multiple takes:** 15–30 variations per setup; pose refinement, lighting micro-adjustments, expression tracking; peak moment captured within elaborate production
- **Color grading:** Enhanced color correction (15–25% of image pixels modified for mood/narrative); warm key light, cool shadow accents, cinematic color palette
- **Retouching scope:** Moderate (20–30% of pixels; skin refinement for glamour while maintaining character; selective blemish removal; NO hyper-smoothing)
- **Print finish:** High-gloss or matte archival paper; large format (often 16x20" or larger); museum-quality presentation

#### Validation
- ✓ Theatrical key lighting present (45–60° angle, elevated 35–40°; dramatic chiaroscuro modeling visible)
- ✓ Shadow depth communicates drama (L≥20; dark enough for emotional weight; detail preserved)
- ✓ Flesh tone saturated and warm (H=15–40°, S=30–50%; glamorous vitality evident)
- ✓ Background strategically lit or selected (L=25–45; separated from subject; narrative-supporting)
- ✓ Environmental context evident (3–4 depth layers; props/architecture visible; conceptual embedding)
- ✓ Tonal separation sophisticated (6–9 value zones; dramatic but not posterized; film stock aesthetic)
- ✓ Composition accommodates theatrical staging (subject 40–60% of frame; environment visible; conceptual balance)
- ✓ Color grading cinematic (saturated but authentic; warm/cool contrast; visual storytelling)
- ✓ Narrative embedding present (props/environment reveal something about subject; not random)
- ✓ Gender expression maintained (wardrobe/styling appropriate to subject's identity; consistent across iterations)

#### Automated Corrections
*(Phase 4 corrections append here after test cycles)*

---

### COMMERCIAL & FASHION CAMPAIGNS — Conceptual Brand Narrative (1990s–2010s)

#### Context
High-end commercial photography for advertising campaigns, fashion editorials, and luxury brands (American Express, Louis Vuitton, etc.). Conceptual sophistication applied to commercial context; subject and product (if present) integrated within branded narrative. Color grading polished; retouching refined but evident; technical perfection required. Scale ambitious; often shot for billboard, poster, or multi-page editorial spread. Blurs distinction between commercial and fine art photography.

#### Measurements
- **Key light intensity:** 1500–2000 nits (commercial polish; professional studio standard)
- **Key light angle:** 40–55° to camera axis, elevated 30–38° (sculpts subject while maintaining commercial appeal)
- **Shadow fill ratio:** 1:4 to 1:6 (definition present; not flat commercial standard; not overly dramatic)
- **Shadow floor luminance:** L≥25 (readable detail; commercial lighting standard)
- **Specular highlights:** L=85–95 (bright, present; eye catchlights professional)
- **Flesh tone primary:** H=15–40°, S=35–55%, L=68–80% (warm, saturated, luminous; commercial flattery)
- **Flesh tone shadow:** H=10–35°, S=20–45%, L=45–60% (subtle cool shift; maintains flattery)
- **Subject occupancy:** 45–65% of frame (accommodates product/brand context)
- **Product/brand element occupancy (if present):** 15–30% of frame (visible but not dominant; subject prioritized)
- **Background luminance:** L=50–70 (bright commercial aesthetic; often white, neutral, or conceptual)
- **Color saturation (overall):** S=50–70% (vivid, professional; commercial color grading)
- **Tonal steps per face:** 6–8 distinct value zones (polished; professional; not extreme contrast)
- **Retouching evidence:** Visible but refined (skin luminosity boosted, blemishes removed, selective burning/dodging; maintains photography aesthetic)

#### Technique
- **Lighting approach:** Multi-strobe commercial setup with professional modifiers; emphasis on flattering subject while showcasing product (if applicable); meticulous power/positioning
- **Camera system:** High-end digital (Canon 5D series, Phase One medium format backs); RAW capture; tethered shooting on set; digital technician manages files/color profile
- **Studio/location:** Controlled commercial environment or scouted location; professional production with gaffer, grip, stylist, prop master, hair/makeup
- **Wardrobe & props:** Commercial styling with brand/campaign aesthetic; wardrobe chosen for visual impact and brand alignment; props enhance narrative without distraction
- **Subject direction:** Professional direction for commercial appeal; Leibovitz communicates campaign concept; subject engaged but polished (not vulnerable as in Rolling Stone)
- **Multiple takes:** 20–40 variations; pose refinement, expression optimization for commercial appeal, lighting micro-adjustments
- **Color grading:** Sophisticated digital color correction (20–30% of image pixels modified); campaign color palette established; brand consistency maintained
- **Retouching scope:** Moderate to extensive (25–40% of pixels; skin refinement for premium aesthetic; selective detail removal for polish; maintains photography credibility, not hyper-real)
- **Print finish:** High-gloss, metallic, or specialty papers; large format (poster/billboard resolution); luxury brand aesthetic

#### Validation
- ✓ Professional lighting present (sculpts subject; commercial polish evident; 1:4–1:6 fill ratio)
- ✓ Shadow detail readable (L≥25; commercial standard maintained)
- ✓ Flesh tone warm and saturated (H=15–40°, S=35–55%; luminous commercial flattery)
- ✓ Color grading sophisticated (warm key, cool accents, cinematic palette; campaign aesthetic)
- ✓ Composition accommodates brand context (subject 45–65% of frame; product visible if applicable)
- ✓ Retouching refined (evident but not hyper-real; maintains photography credibility)
- ✓ Technical execution flawless (sharp focus, accurate exposure, color accuracy)
- ✓ Narrative embedding present (subject and brand integrated conceptually; campaign story evident)
- ✓ Gender expression maintained (wardrobe appropriate; consistency across iterations)

#### Automated Corrections
*(Phase 4 corrections append here after test cycles)*

---

### PERSONAL WORK — Domestic Intimacy & Family Study (Ongoing)

#### Context
Intimate, family-focused portraits integrating personal relationships, domestic spaces, and psychological vulnerability. Often combines celebrity portraits with candid family moments (inspired by "A Photographer's Life" project). Hybrid aesthetic—may employ film grain, vintage color casts, or contemporary digital precision depending on narrative intent. Less polished than commercial work; emotional authenticity prioritized over technical perfection. Subject often appears unguarded; moments of tenderness, humor, or contemplation captured.

#### Measurements
- **Key light intensity:** 600–1200 nits (natural-seeming; intimate scale; not theatrical)
- **Key light angle:** 30–45° to camera axis, elevated 25–35° (flattering but natural; not sculptural)
- **Shadow fill ratio:** 1:3 to 1:5 (gentle modeling; readable shadow detail; intimate softness)
- **Shadow floor luminance:** L≥25 (readable; atmospheric; intimate mood)
- **Flesh tone primary:** H=15–40°, S=25–45%, L=62–75% (warm, natural; intimate vitality)
- **Subject occupancy:** 50–70% of frame (accommodates family members/domestic context)
- **Family/companion occupancy:** 10–30% of frame (integrated into composition; narrative support)
- **Domestic environment visibility:** 20–40% of frame (home interior/garden; warm, personal context)
- **Background luminance:** L=40–65 (warm, domestic; real environment, not backdrop)
- **Color saturation (overall):** S=40–60% (moderate; natural or subtly enhanced; personal aesthetic)
- **Tonal steps per face:** 5–8 distinct value zones (subtle to moderate modeling; natural lighting suggested)
- **Visible grain/texture:** Mode-dependent (film grain if intentional; digital noise acceptable; imperfect aesthetic allowed)

#### Technique
- **Lighting approach:** Natural light supplemented with subtle strobe/reflector, or available light only; emphasis on authentic domestic moment; minimal equipment intrusion
- **Camera system:** Hybrid (35mm film for nostalgic projects, high-end digital for archival; choice depends on emotional intent)
- **Location:** Real domestic spaces (family home, garden, intimate locations); no artificial set; subject in authentic environment
- **Wardrobe:** Casual, authentic clothing; personal style rather than styled wardrobe; no costume/artificial presentation
- **Subject direction:** Minimal direction; conversation; capture authentic interaction rather than pose; family dynamics visible
- **Multiple takes:** 10–20 variations; moments of genuine interaction captured; emotion prioritized over technical perfection
- **Color grading:** Natural or intentionally nostalgic (film stock aesthetic, vintage color cast); personal project freedom allows experimentation
- **Retouching scope:** Minimal (5–15% of pixels; blemish removal optional; skin texture and authenticity preserved; imperfection acceptable)
- **Print finish:** Variable (archival paper for exhibition; personal project prints may employ experimental finishes; personal aesthetic priority)

#### Validation
- ✓ Intimate lighting present (natural or subtly supplemented; emotional warmth evident; not theatrical)
- ✓ Family/domestic context visible (20–40% of frame; personal space evident; intimacy supported)
- ✓ Flesh tone warm (H=15–40°; natural, not glamorous; intimate authenticity)
- ✓ Expression authentic (genuine interaction visible; not posed; emotional truth present)
- ✓ Composition includes relational context (family members visible; domestic space integrated; narrative of intimacy)
- ✓ Technical approach authentic to intent (imperfections acceptable; film grain or digital artifacts support intimacy)
- ✓ Retouching minimal (skin texture preserved; authenticity prioritized; not polished/commercial)
- ✓ Gender expression maintained (wardrobe natural and consistent; family relationship roles evident)

#### Automated Corrections
*(Phase 4 corrections append here after test cycles)*

---

## 5) Wardrobe, Props & Setting Conventions

**TEMPORAL WARDROBE MANDATE:**

Wardrobe choices reflect subject's contemporary cultural moment. For fictional subjects, styling defaults to contemporary professional/fashion aesthetic unless mode specifies otherwise.

- **Contemporary (2020s forward):** Modern professional, fashion-forward, or personal style appropriate to subject's character/status
- **NO anachronistic elements:** No historical period costumes unless explicitly part of campaign concept (vintage fashion shoots allowed; communicate intent clearly)

**MODE-SPECIFIC WARDROBE TRACKS:**

### Rolling Stone Era — Wardrobe (1970–1983)

**Adult Feminine:**
- Natural fabrics (cotton, linen, silk); authentic 1970s-80s construction
- Silhouette: relaxed, body-conscious, or bohemian depending on subject personality
- Color palette: earth tones, jewel tones, pastels (authentic to era)
- Minimal jewelry; personal accessories (rings, watch, simple chains)
- Hair: natural texture or period-appropriate styling (feathered, straight, curled depending on subject)
- Makeup: minimal visible retouching; natural skin tone with subtle enhancement
- Footwear visible: period boots, sandals, or barefoot

**Adult Masculine:**
- Natural fabrics (cotton, denim, linen); 1970s-80s tailoring or casual wear
- Silhouette: fitted, relaxed, or bohemian; jeans standard; shirts/sweaters over bare chest acceptable
- Color palette: earth tones, jewel tones, blacks, natural colors
- Minimal accessories; watch optional, no visible jewelry expected
- Hair: natural texture or period styling (shag, straight, curly; facial hair acceptable)
- Facial hair presence: if subject typically has beard/mustache, include it; if clean-shaven, maintain
- Footwear visible: boots, casual shoes, or barefoot

### Vanity Fair Era — Wardrobe (1983–2000)

**Adult Feminine:**
- High-fashion garments; designer labels implied through quality (no actual logos rendered)
- Silhouette: theatrical, sculptural, or luxury casual depending on campaign
- Fabrics: silk, satin, velvet, leather; tactile quality emphasized
- Color palette: bold jewel tones, blacks, whites, metallics, or campaign-specific palette
- Jewelry statement: bold, intentional (not minimal); often custom or luxury pieces
- Hair: professionally styled; voluminous, sophisticated, or avant-garde
- Makeup: evident but refined; smoky eyes, bold lips, or campaign-specific aesthetic
- Wardrobe occupancy: 60-80% of subject visible (garment showcased; skin visible at neckline, arms, or décolletage)

**Adult Masculine:**
- High-fashion menswear; tailored, designer-implied quality
- Silhouette: power suit, luxury casual, or conceptual avant-garde
- Fabrics: fine wool, linen, leather, silk; luxury texture
- Color palette: blacks, whites, jewel tones, or campaign palette
- Accessories: statement watch, rings, intentional styling choices
- Hair: professionally styled; groomed; facial hair groomed or intentionally absent
- Wardrobe occupancy: 60-80% visible (torso/arms/face exposed for full portrait impact)

### Commercial & Fashion Campaigns — Wardrobe (1990s–2010s)

**Adult Feminine:**
- Fashion-forward or brand-aligned garments; luxury aesthetic mandatory
- Silhouette: contemporary fashion aesthetic; flattering to subject
- Fabrics: premium (silk, cashmere, leather); visible texture quality
- Color palette: brand guidelines or campaign color story
- Jewelry: curated luxury; brand-complementary
- Hair: professional salon styling; polished, on-trend
- Makeup: professional makeup artist standard; on-brand aesthetic
- Wardrobe occupancy: 50-75% visible (fashion element showcased; skin visible for polish)

**Adult Masculine:**
- Designer menswear or luxury casual appropriate to campaign
- Silhouette: contemporary, flattering, brand-aligned
- Fabrics: premium quality; luxury tactile appeal
- Color palette: campaign guidelines or brand aesthetic
- Accessories: luxury watch, intentional styling
- Hair: professional grooming; contemporary styling
- Wardrobe occupancy: 50-75% visible (shirt/jacket visible; chest/arms exposed for commercial appeal)

### Personal Work — Wardrobe (Ongoing)

**Adult Feminine:**
- Authentic casual clothing; personal style priority over styling
- Fabrics: everyday (cotton, linen, knitwear); comfortable
- Silhouette: relaxed, natural, unposed; home clothing
- Color palette: personal wardrobe authentic colors
- Minimal jewelry; personal accessories (watch, rings if subject wears them)
- Hair: natural state or casual styling; not salon-perfect
- Makeup: natural or minimal; authentic to daily appearance
- Wardrobe occupancy: 70-90% visible (full person often visible; intimate family context)

**Adult Masculine:**
- Authentic casual clothing; personal home aesthetic
- Fabrics: everyday (t-shirts, jeans, sweaters, casual wear)
- Silhouette: relaxed, comfortable, natural movement
- Color palette: personal wardrobe colors
- Minimal accessories; no jewelry expected
- Hair: natural; grooming casual or absent (bedhead acceptable)
- Facial hair: authentic to subject's grooming habits (beard if typical; clean-shaven if typical)
- Wardrobe occupancy: 70-90% visible (full figure visible; domestic context)

**Fabric Behavior (All Modes):**

- **Silk/satin:** Drapes fluidly; reflects light creating subtle sheen; color saturation enhanced by reflectivity
- **Cotton/linen:** Matte surface; natural wrinkles and texture visible; absorbs light evenly
- **Leather:** Specular highlights; strong contrast between lit and shadowed areas; sculptural form-following
- **Velvet:** Deep, soft texture; shadow areas appear darker; luxurious depth
- **Knitwear:** Visible texture; ribbing or knit pattern visible in side-lighting; wool specific loft visible
- NO synthetic fabric characteristics (no static cling, no athletic stretch, no modern polyester sheen in historical eras)

**Temporal Color Palette Restrictions:**

No anachronistic colors:
- Pre-1856: NO synthetic aniline dyes (neon magentas, electric purples)
- Pre-1704: NO Prussian blue (use cobalt/ultramarine alternatives)
- Pre-1817: NO cadmium pigments (cadmium yellow, orange, red)
- Contemporary/fictional subjects: ALL colors available (no restrictions); modern fashion palette full range

**MODE-SPECIFIC GENDER-DIFFERENTIATED PROP POOLS:**

### Rolling Stone Era — Props

```yaml
rolling_stone_intimate:
  male_props: 
    - musical_instrument (guitar, bass, harmonica implicit)
    - casual_accessories (cigarette, lighter, watch)
    - environment_objects (chair, doorway, wall texture)
    - personal_effects (rings, chain, informal jewelry)
  female_props:
    - personal_accessories (rings, earrings, watch, simple chains)
    - intimate_objects (cigarette, lighter, cup)
    - environment_integration (chair, fabric, window light)
    - lifestyle_markers (record album cover, concert ticket implicit)
  micro_props: 
    - cigarette/lighter (era authentic)
    - coffee cup or beverage container
    - musical instrument neck visible
    - fabric/textile (scarf, shawl, blanket)
  temporal_notes: "Rolling Stone 1970s-80s rock/music culture; props minimal, documentary-authentic; gender differentiation reflects cultural access patterns"

### Vanity Fair Era — Props

vanity_fair_theatrical:
  male_props:
    - luxury_accessories (designer watch, rings, intentional jewelry)
    - conceptual_objects (book, artwork, architectural element)
    - formal_or_theatrical_elements (chair, architectural feature, staged environment)
    - cultural_status_markers (high-fashion wardrobe element visible, branded object)
  female_props:
    - luxury_accessories (jewelry, designer bag, luxury watch)
    - conceptual_feminine_objects (flower, mirror, beauty product implied)
    - theatrical_elements (chair, fabric drape, architectural feature)
    - status_markers (high-fashion garment, beauty/grooming tools visible)
  micro_props:
    - jewelry element (necklace, earrings, rings)
    - fabric drape (scarf, shawl, clothing texture)
    - architectural detail or set element
    - luxury object (book, art, personal item)
  temporal_notes: "Vanity Fair 1983-2000; elaborate staging; gender differentiation reflects fashion/luxury industry norms of era; props support narrative, never purely decorative"

### Commercial & Fashion Campaigns — Props

commercial_fashion_brand:
  male_props:
    - luxury_accessories (designer watch, signature rings, branded element)
    - conceptual_campaign_objects (objects supporting brand narrative)
    - lifestyle_markers (objects revealing status/personality aligned with brand)
    - product_element (if campaign-specific; otherwise lifestyle objects)
  female_props:
    - luxury_accessories (jewelry, bags, watches, branded elements)
    - fashion_elements (handbag, scarf, grooming tools visible)
    - lifestyle_markers (objects supporting campaign narrative)
    - brand_aligned_objects (campaign-specific props supporting concept)
  micro_props:
    - luxury watch or jewelry
    - fashion accessory (bag, scarf, belt)
    - campaign-specific conceptual object
    - lifestyle element supporting brand alignment
  temporal_notes: "Commercial campaigns (1990s-2010s); gender differentiation reflects fashion/luxury marketing norms; all props serve brand narrative"

### Personal Work — Props

personal_intimate_family:
  male_props:
    - domestic_objects (book, coffee cup, personal item)
    - leisure_objects (instrument, hobby element, pet)
    - family_context (child, parent, partner visible or implied)
    - authentic_home_elements (furniture, architectural feature of home)
  female_props:
    - domestic_objects (book, tea cup, personal item)
    - family_markers (child, partner, family pet visible or implied)
    - leisure/hobby_element (craft, hobby, personal passion)
    - authentic_home_elements (furniture, home décor reflecting personality)
  micro_props:
    - coffee cup or beverage
    - book or reading material
    - personal hobby element (musical instrument, craft, game)
    - family marker (photo, child's object, shared item)
  temporal_notes: "Personal work ongoing; authentic domestic context; gender roles reflect actual family relationships; props support intimate narrative, not staged concept"
```

**Temporal Prop Validation:**

- All props authentic to mode's era and cultural context
- NO modern items in historical modes (no smartphones, no contemporary tech, no modern brand labels)
- Gender-differentiated access reflects historical/cultural norms of period
- Fallback strategy: When uncertain about prop authenticity, OMIT rather than risk anachronism

**Setting Authenticity (Mode-Specific):**

**Rolling Stone Era:**
- Natural locations (backstage, street, home, studio); authentic concert/music venues
- Minimal artificial set; documentary environmental authenticity
- Warm, lived-in aesthetic; imperfect lighting acceptable
- Architecture/background consistent with era (1970s-80s venue architecture, home décor)

**Vanity Fair Era:**
- Custom-designed sets or scouted architectural locations; theatrical elegance
- Professional lighting on environment; background equals subject importance
- Elaborate and intentional composition; cultural/architectural relevance
- Aesthetic luxury evident; fine art photography setting standards

**Commercial & Fashion Campaigns:**
- Studio or carefully scouted location; brand-aligned aesthetic
- Professional lighting throughout environment; commercial polish
- Clean, intentional background; supports brand narrative without overwhelming subject
- Luxury or contemporary commercial aesthetic

**Personal Work:**
- Real domestic spaces (home, garden, intimate locations)
- Authentic family environment; warm, personal aesthetic
- Natural lighting or subtly supplemented; intimacy prioritized
- Imperfect details acceptable; authentic home environment

**Coherence Filter:**

All elements (wardrobe, props, setting, lighting) support declared mode with documented historical/cultural authenticity. Cross-modal wardrobe variation required; subject recognizable across modes while respecting mode-specific aesthetic conventions.

---

## 6) Safety & IP Constraints (Hard Rules)

**Canvas Negatives (HARD PROHIBITIONS - ALL MODES):**

- NO real celebrity likenesses (fictional subjects only; no identifiable public figures)
- NO copyrighted logos, brand marks, or trademarked symbols (brands implied through aesthetic, not labeled)
- NO watermarks, signatures, or attribution marks on final image
- NO actual magazine mastheads (typography only; no real publication identifiers)
- NO nudity (risque per Gemini policy acceptable; covered/implied acceptable; direct nudity prohibited)
- NO gore, blood, or graphic violence
- NO racist, sexist, or discriminatory imagery
- NO modern eyeglasses in historical eras (pre-1700 subjects: eyeglasses prohibited; post-1700: allowed if period-appropriate)
- NO synthetic fabrics in historical modes (all fabrics must predate era or be period-accurate)
- NO modern clothing in historical eras (complete period costume replacement mandatory)
- NO anachronistic elements (modern tech, contemporary styling in historical contexts)
- NO children visible without modest, age-appropriate wardrobe
- NO source image dimensions respected (RECOMPOSE for declared ratio only; ignore original aspect ratio entirely)
- NO letterboxing, pillarboxing, or padding to simulate ratio (clean recomposition mandatory)
- NO unmodified original ratio (STRICT ratio override required)
- NO NanoBanana resistance defaults (1632×640, non-standard ratios, arbitrary dimensions: PROHIBITED)
- NO flat commercial photography defaults (theatrical direction, narrative embedding mandatory)
- NO documentary blur or casual snapshot aesthetic (professional photoshoot production quality required)
- NO digital perfection (film grain or era-appropriate texture required; not hyper-smooth digital render)
- NO generic celebrity treatment (Leibovitz-specific methodology required; signature lighting/composition)
- NO missing critical flags (mode-specific mandatory flags must be present in output)
- NO cross-mode contamination (Rolling Stone aesthetic ≠ Vanity Fair staging; technique ecosystem isolation required)

**Canvas Positives (MANDATORY REQUIREMENTS - ALL MODES):**

- MUST be exactly [X:Y ratio] (no exceptions; NanoBanana ratio enforcement required)
- MUST recompose intelligently from source dimensions to declared ratio
- MUST employ multi-strobe studio lighting setup (professional photoshoot production quality)
- MUST include narrative embedding (props, environment, conceptual context supporting psychological depth)
- MUST render era-appropriate film stock aesthetic (Kodak Portra rendering, film grain equivalent, or high-end digital archival quality)
- MUST demonstrate theatrical direction and subject psychology (genuine engagement visible; not posed awkwardly)
- MUST preserve gender expression consistency (wardrobe/grooming/styling reflects subject's identity; unchanged across iterations)
- MUST include period-appropriate wardrobe/props (no anachronisms; temporal authenticity required)
- MUST implement mode-specific lighting architecture (Rolling Stone: 800-1200 nits intimate key light; Vanity Fair: 1500-2000 nits theatrical; Commercial: 1500-2000 nits professional; Personal: 600-1200 nits natural)
- MUST achieve specific flesh tone ranges (H=15-40°, S=25-55%, L=60-80% depending on mode; warm undertones mandatory)
- MUST render shadow floor luminance (L≥20-25 depending on mode; readable detail preserved)
- MUST deliver archival print quality aesthetic (not commercial flatness; museum-quality tonal depth)
- MUST include mode-specific mandatory flags (Rolling Stone: intimate psychology + documentary feel; Vanity Fair: theatrical staging + dramatic lighting; Commercial: professional polish + brand integration; Personal: domestic intimacy + authentic emotion)
- MUST demonstrate Leibovitz-specific signature (sophisticated lighting, narrative embedding, psychological depth, color grading authenticity)

**NanoBanana Ratio Enforcement (CRITICAL):**

- `3:4` portrait — EXACTLY 864×1184 or proportional equivalent
- `4:5` portrait — EXACTLY 896×1152 or proportional equivalent
- `4:3` landscape — EXACTLY 1184×864 or proportional equivalent
- `16:9` widescreen — EXACTLY 1344×768 or proportional equivalent
- `1:1` square — EXACTLY 1024×1024
- `21:9` ultra-wide — EXACTLY 1536×672 or proportional equivalent
- **Prohibition:** NO arbitrary NanoBanana resistance defaults (1632×640, 1280×1024, or non-standard ratios)
- **Enforcement:** Explicit ratio declaration in multiple prompt locations; repetitive reinforcement; negative constraints prohibiting unwanted ratios

**AVOID/USE Vocabulary Optimization (NanoBanana Language):**

### AVOID (Ambiguous/Trigger Unwanted Defaults):
- "Ornate" (may trigger excessive framing/borders)
- "Dramatic" without specification (may trigger anime/unrealistic effects)
- "Beautiful" or "harmonious" (may trigger smoothness overrides)
- "Soft" without context (may trigger blur/focus loss)
- "Natural" without qualification (may trigger documentary defaults)
- "Smooth" in commercial context (may trigger hyper-real smoothing)
- "Professional" without technical spec (may trigger generic commercial flat lighting)
- "Elegant" without material specification (may trigger AI defaults)

### USE (Explicit, Measurable):
- "Multi-strobe studio setup" (instead of "dramatic lighting")
- "Theatrical key lighting at 45-60° angle" (instead of "dramatic")
- "Kodak Portra 400 film stock aesthetic" (instead of "beautiful")
- "Painterly skin retouching" (instead of "smooth")
- "Studio-strobe-modeling" flag (instead of "professional")
- "Chiaroscuro-dramatic" or mode-specific lighting flag (instead of "elegant")
- "Medium-format-compression aesthetic" (instead of "polished")
- "Archival print quality" (specific target; not vague)
- "Narrative embedding via props/environment" (instead of "conceptual")

**Triple Redundancy Protocol (Critical Specs):**

Mandatory specifications must appear in MINIMUM 3 sections:

**Example: Multi-Strobe Theatrical Lighting (Vanity Fair Era)**
1. **Section 1:** "Generate in Vanity Fair Era theatrical mode with multi-strobe studio setup and 1500-2000 nits key light intensity"
2. **Section 4:** "Lighting setup: Multi-strobe configuration with intentional modifiers; key light 1500-2000 nits at 45-60° angle; shadow fill 1:6-1:8"
3. **Section 6:** "MUST employ multi-strobe studio lighting setup" (positive constraint); "NO flat commercial photography defaults" (negative constraint)

**Example: Flesh Tone Warm Rendering (All Modes)**
1. **Section 1:** "Flesh tone primary: H=15-35°, S=25-50%, L=60-75% (warm undertones mandatory)"
2. **Section 4:** "Flesh tone primary: H=15-40°, S=30-50%, L=65-78% (warm, saturated; glamorous vitality)"
3. **Section 6:** "MUST achieve specific flesh tone ranges (H=15-40°, S=25-55%, L=60-80%); warm undertones mandatory"

---

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS (FOR FINAL RATIO):**

### Portrait Ratios (3:4, 4:5, 9:16)

**Rolling Stone Era (3:4, 4:5 preferred):**
- Vertical emphasis with subject 65-75% of frame
- Tight head-and-shoulders or full-torso framing
- Minimal background (L≤40); subject occupies nearly entire frame
- Eye-line leads into frame; psychological openness to edges
- Composition principle: intimate connection; viewer placed as confidant
- Empty space intentional; used for psychological effect (contemplation, vulnerability)

**Vanity Fair Era (4:5, 3:4 acceptable):**
- Vertical frame accommodating full-body figure with environmental context
- Subject 50-65% of frame; background/environment 35-50%
- Theatrical framing with compositional archetype (golden spiral, off-center dynamic)
- Environmental narrative visible; props, architecture, lighting on background
- Composition principle: theatrical staging with psychological depth; narrative embedding

**Commercial/Fashion (4:5, 3:4):**
- Subject 55-70% of frame; product (if present) integrated
- Environmental/brand context 30-45% of frame
- Composition balanced; hierarchy: subject > product > environment
- Professional clean framing; rule-of-thirds or golden spiral preferred
- Composition principle: brand integration while maintaining subject emphasis

**Personal Work (4:5, 3:4):**
- Subject 60-75% of frame; family/domestic context visible
- Environmental context 25-40% of frame (home interior, garden, intimate space)
- Natural framing; minimal formal composition rules
- Authentic interaction visible; family relationships evident
- Composition principle: intimacy and emotional authenticity prioritized

### Landscape Ratios (4:3, 16:9, 21:9)

**Rolling Stone Era (4:3 preferred):**
- Horizontal composition with subject slightly left or right of center
- Subject 60-70% of frame; minimal environmental distraction
- Background minimal but visible; context implied rather than explicit
- Compositional balance: subject primary; environment secondary
- Composition principle: intimate portrait within wider space; psychological isolation

**Vanity Fair Era (16:9 preferred; 4:3 secondary):**
- Panoramic theatrical narrative spanning frame
- Subject 45-60% of frame; environment 40-55%
- Multiple narrative elements visible; props, architecture, lighting integrated
- Compositional hierarchy: subject dominant but supported by theatrical environment
- Composition principle: grand staging with psychological and narrative depth; cinematic scope

**Commercial/Fashion (16:9 preferred):**
- Panoramic campaign composition with subject and product/context integrated
- Subject 45-60% of frame; brand context 40-55% of frame
- Professional clean composition; multiple elements arranged with intention
- Hierarchical arrangement: subject > product > environment
- Composition principle: brand storytelling; commercial visual hierarchy

**Personal Work (4:3, 16:9 acceptable):**
- Horizontal framing of domestic scene
- Subject 55-70% of frame; family members/environment 30-45%
- Natural framing; family arrangement evident; domestic authenticity
- Emotional composition; relational context visible
- Composition principle: family narrative; intimate domestic moment

### Square (1:1)

**All Modes (1:1 acceptable; used for fine art exhibition, iconic status):**
- Conceptual balance; central or off-axis positioning depending on intent
- Subject 50-70% of frame; environment/context balanced
- Symmetrical or deliberately asymmetrical depending on mode
- Iconic framing; square crop emphasizes subject as artwork
- Composition principle: exhibition-quality fine art; timeless framing

---

**STYLE-SPECIFIC COMPOSITION (Mode-Differentiated):**

### Rolling Stone Era — Composition

- **Framing regime:** Intimate documentary; subject fills frame; minimal environmental context
- **Grid/symmetry:** Asymmetrical; off-center framing creates psychological tension; contemplative emptiness
- **Figure:ground ratio:** 65-75% figure; 25-35% ground (negative space minimal but psychologically significant)
- **Density:** Sparse; empty space as character; not crowded
- **Lighting logic:** Single key light + ambient fill; creates intimate shadow; psychological depth via lighting
- **Detail:negative space ratio:** Detail concentrated on subject; background simplified; viewer focus undivided

### Vanity Fair Era — Composition

- **Framing regime:** Theatrical narrative staging; subject and environment equal importance
- **Grid/symmetry:** Golden spiral, rule of thirds, or vortex composition; intentional mathematical balance
- **Figure:ground ratio:** 45-60% figure; 40-55% ground (elaborate environment essential to narrative)
- **Density:** Busy; multiple narrative elements; conceptual complexity visible
- **Lighting logic:** Multi-strobe setup sculpts both subject and environment; dramatic chiaroscuro
- **Detail:negative space ratio:** Detail throughout; environment elaborate; layered visual information

### Commercial & Fashion — Composition

- **Framing regime:** Professional advertising standard; subject and brand/product integrated
- **Grid/symmetry:** Rule of thirds or golden ratio; balanced commercial aesthetic
- **Figure:ground ratio:** 45-65% figure; 35-55% ground (product/brand context visible if applicable)
- **Density:** Intentional; curated objects; no random elements
- **Lighting logic:** Professional multi-strobe with meticulous modifier placement; sculpts subject and product
- **Detail:negative space ratio:** Clean detail; commercial clarity; strategic empty space for brand integration

### Personal Work — Composition

- **Framing regime:** Natural, authentic domestic framing; family relationships visible
- **Grid/symmetry:** Asymmetrical; natural arrangement; family group positioning
- **Figure:ground ratio:** 50-70% figure; 30-50% ground (domestic context essential)
- **Density:** Moderate; family members/environment integrated; not sparse, not overcrowded
- **Lighting logic:** Natural or subtly supplemented; intimate emotional lighting
- **Detail:negative space ratio:** Natural detail; intimate objects; domestic authenticity; not styled

---

**UNIVERSAL COMPOSITION REQUIREMENTS:**

**Surface Context Anchor:** Professional photoshoot environment (studio, scouted location, or authentic domestic space); NOT casual snapshot context; technical production quality evident

**Frame/Band Anchor:** OMIT framing entirely for all modes (art photography standard; no borders, no decorative frames, no white mats)

**Production Context Anchor:** 
- **Rolling Stone:** Magazine photography production standards (1970-80s publication quality)
- **Vanity Fair:** Editorial/advertising production standards (glossy magazine, high-end lab printing)
- **Commercial:** High-end advertising production standards (luxury brand aesthetic, billboard/poster quality)
- **Personal:** Fine art/personal project standards (archival quality; experimental approach allowed)

**Ratio Enforcement Anchor:** Composition designed SPECIFICALLY for declared final ratio; not adapted from different format; recomposition intelligent and authentic to ratio

**Gender Expression Anchor:** Subject's gender presentation consistent across all portrait iterations; wardrobe/styling/grooming appropriate to gender identity; cultural respect maintained

**Mode-Specific Composition Anchor:** Each mode applies distinct compositional conventions; NOT interchangeable; Rolling Stone ≠ Vanity Fair; technique ecosystem isolation required

**Composition Validation Checklist (Background Reference):**
- ✓ Ratio-appropriate composition FOR FINAL RATIO (not adapted from different format)
- ✓ Mode-specific framing regime (Rolling Stone intimate vs. Vanity Fair theatrical vs. Commercial professional vs. Personal authentic)
- ✓ Figure:ground ratio in target range for mode
- ✓ Environmental detail density appropriate to mode
- ✓ Lighting logic supports narrative/emotional intent
- ✓ Gender expression consistent and culturally respectful
- ✓ NO frames outside canvas; no artificial presentation
- ✓ Subject recognizable; psychological depth evident
- ✓ Narrative embedding present (props/environment support storytelling)

---

## 8) Typography & Text Integration (If Historically Present)

**Binary:** Text allowed in Commercial & Fashion modes for magazine mastheads, cover lines, bylines; OMIT entirely for Rolling Stone documentarian aesthetic and Personal Work intimate authenticity.

**Rolling Stone Era — Text Policy:**
- OMIT text entirely (documentary photojournalism aesthetic; minimal or no typography)
- Rare exception: Byline or minimal credit if historically appropriate to Rolling Stone magazine publication standard; otherwise OMIT

**Vanity Fair Era — Text Policy:**
- OMIT text (focus on portrait; no magazine mastheads on final image)
- Rare exception: Byline or artist credit if historically appropriate; otherwise OMIT

**Commercial & Fashion — Text Policy:**
- ALLOW magazine mastheads, cover lines, campaign text if historically appropriate to commercial publication/campaign
- **Copy limits:** ≤6 words/line, ≤7 cover lines positioned for declared ratio with reading pattern considerations
- **Period-appropriate typography:** Fonts and typesetting methods authentic to campaign era (1990s-2010s commercial standards)
- **Ratio-appropriate zones:** Text layout optimized for declared aspect ratio (final adapted ratio if applicable) with professional hierarchy
- **Font recommendation:** 
  - Closest Google Font if ≥85% match to era-appropriate style
  - Otherwise cite professional typography family as inspiration
  - Example: *"Campaign Typography: Closest Google Font: Montserrat (sans-serif commercial, 90% match). Professional alternatives: Helvetica, DIN Next"*

**Personal Work — Text Policy:**
- OMIT text entirely (intimate family moment aesthetic; no commercial typography)
- Rare exception: Personal inscription or handwritten note if historically integral to project; otherwise OMIT

**Format-Specific Text Rules:**
- Magazine cover/campaign poster: Text integration follows commercial publication standards with aesthetic hierarchy
- Portrait session print: Omit text entirely
- Museum exhibition print: Omit text entirely

**Production Method Integration:** Typography rendered with period-appropriate printing limitations and registration quality with characteristic imperfections (halftone dot patterns for 1990s-2000s commercial printing).

---

**STRICT TERMINATION:** Framework ends here. NO additional commentary, NO historical context beyond this point, NO supplementary content.

