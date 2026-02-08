---
id: julia_margaret_cameron
group: "Photography"
movement: "Art Photography / Victorian Portraiture"
artist: "Julia Margaret Cameron"
display_name: "Julia Margaret Cameron — Heroic Portraiture & Allegorical Tableau (1864–1875)"
style_scope: single-artist

ratios: ["3:4", "4:3", "2:3"]
ratios_status: approved
ratios_notes: >
  3:4 and 2:3 match Cameron's large-format vertical portrait negatives (12×10 inches typical contact prints).
  4:3 accommodates her wider allegorical compositions. All ratios reflect period-authentic plate dimensions.

modes: 
  - "Heroic Portraiture — Distinguished subjects, close-crop busts, psychological intensity"
  - "Allegorical Tableau — Full-figure narrative staging, costumes, mythological/literary references"
  - "Intimate Domestic — Family and household subjects, softer psychological focus, diffused light"

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
  layout_hint: "Primary centered or left; secondary figures positioned supporting narrative context"
  identity_priority: ["silhouette", "gesture", "face-proportions", "costume-period-accuracy"]

composition_constraints:
  max_subjects: 3
  subject_interaction: allowed
  crowd_scenes: false
  animals_allowed: false
  text_allowed: no

sections_index:
  '1': Core Instruction & Likeness Mandate
  '2': Canvas Strategy & Aspect Ratio Control
  '3': Artistic Style & Material Authenticity
  '4': Technical Method & Mark-Making
  '5': Wardrobe, Props & Setting Conventions
  '6': Safety & IP Constraints (Hard Rules)
  '7': Composition & Lighting Patterns
  '8': Typography & Text Integration

about: >
  Julia Margaret Cameron (1815–1879) pioneered art photography in the mid-Victorian era, 
  transforming portraiture through deliberate soft focus, psychological intensity, and theatrical staging. 
  Working with wet collodion negatives and albumen prints (1864–1875), she created monumental contact prints 
  that merged photography with Pre-Raphaelite aesthetics. Her practice rejected technical perfection in favor 
  of emotional truth, casting distinguished friends (Tennyson, Darwin, Herschel) and household staff in 
  elaborate allegorical tableaux. This framework ensures period-authentic reproduction of her three primary 
  operational modes through quantified material specifications and hard constraints.

---

---

# Julia Margaret Cameron — Photography Framework v1.0

---

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio (3:4 default for portraiture, 4:3 for allegorical).
- **Renderer Adaptation Mandate:** NanoBanana native ratios only: 3:4, 4:3, 2:3, 1:1.
- **Ratio Enforcement (NanoBanana):** Aspect ratio is **hard requirement**; prompt explicitly in multiple locations. Resist model defaults to 16:9 or 1:1.
- **Style over likeness:** Identity via silhouette, gesture, expression—not literal facial resemblance.
- **Technical Measurement Authority:** Quantitative specifications ("0.957 edge softness coefficient", "luminance mean 81.6±27.7", "+20.3 warmth") override descriptive language.
- **Material Authenticity Priority:** Wet collodion grain + albumen paper texture + gold toning signature **required**—no digital smoothing, no modern post-processing.
- **Process-Over-Result:** How materials are applied (contact printing, long exposure, albumen coating) supersedes visual appearance.
- **Soft Focus Authority:** Edge softness is **non-negotiable** (0.957±0.014 coefficient)—must appear intentional, not defective.
- **Period Authenticity Ceiling:** 1864–1875 production methods only. Zero anachronisms. No digital grain, no contemporary saturation, no glossy finishes.
- **Color Warmth Mandate:** Gold-toned signature **REQUIRED** (+20.3±17.8 warmth)—warm purple-brown cast in highlights, cool blacks in shadows.
- **Anti-Conventional Authority:** Cameron deliberately rejected sharp-focus aesthetics. Generate with intentional soft focus as artistic choice, not technical flaw.
- **Custom Flag Authorization:** Use `soft-focus-intentional`, `albumen-texture-visible`, `collodion-grain-authentic`, `gold-toning-warmth-signature`, `close-crop-psychological-intensity`.
- **Anatomical Proportion Validation:** Minimal stylization—heads roughly 1/8 body height (photographic realism), expression-driven, no exaggeration.
- **Face-Treatment Flags (photographic):** `diffusion-soft`, `silver-halide-grain`, `contact-print-scale`, `darkroom-timing-marks`, `albumen-matte-finish`.
- **Pose Flags:** `frontal-rigid` (heroic portraiture), `gestural-fluid` (allegorical), `candid-psychological` (domestic).
- **Canvas Control Flag:** `strict-reframe` (exact ratio adherence mandatory).
- **Gender Expression Mandate:** Preserve subject's presented gender identity through period costume and styling. Consistency across all modes.
- **Material Physics Authority:** Albumen substrate + collodion emulsion + gold toning = visual signature. Substrate determines matte finish (no glossy paper).
- **Quantifiers Authoritative:** Edge softness 0.957, luminance 81.6, warmth +20.3, contrast 0.87, shadow floor 44.9 are targets—not approximations.
- **Mode Consistency Authority:** Subject characteristics (gender, approximate age, costume) remain consistent across multiple modes if applicable.
- **Silent Validation:** Apply forensic rubric checklist; regenerate if score <85/100.
- **Strict Termination:** Framework ends at Section 8. NO additional commentary, explanations, or historical context.

---

### Framework Sections

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** (portraiture/domestic) or **4:3 ratio** (allegorical). Ignore source dimensions completely.

**RATIO ENFORCEMENT (NANOBANANA MANDATORY):** Generate image with EXACT aspect ratio as specified. This is a hard requirement—model must not default to 16:9, 1:1, or other unsupported ratios.

Redraw in **Late Victorian Art Photography (1864–1875)** for **albumen contact print, large-format, wet collodion negative**.

**Identity:** Silhouette, gesture, psychological expression—not literal facial likeness.

**Gender Expression Mandate:** Preserve subject's presented gender identity through period-appropriate Victorian costume and styling. Male subjects remain masculine across all modes; female subjects remain feminine across all modes. Cross-mode consistency required.

**IP Safeguard Declaration:** Create original designs avoiding copyrighted elements. Period-appropriate costumes, props, and settings only—no modern references.

**Face-Treatment Flags (Photographic, select one):**
- `diffusion-soft` (primary—soft-focus lens aberration or deliberate defocus)
- `silver-halide-grain` (collodion emulsion signature)
- `contact-print-scale` (large-format contact printing aesthetic)
- `albumen-matte-finish` (egg-white paper base, not glossy)

**Pose Flags (mode-specific):**
- Heroic Portraiture: `frontal-rigid` or `psychological-tension`
- Allegorical Tableau: `gestural-fluid` or `contrapposto`
- Intimate Domestic: `candid-psychological` or `gestural-fluid`

**Canvas Control Flag:** `strict-reframe` (exact ratio adherence mandatory; no cropping compromise).

**Critical Material Flags (NON-NEGOTIABLE):**
- `soft-focus-intentional` — edge softness coefficient 0.957±0.014
- `albumen-texture-visible` — paper grain visible, matte finish
- `collodion-grain-authentic` — emulsion signature, not digital noise
- `gold-toning-warmth-signature` — purple-brown cast in mid-tones/highlights (+20.3±17.8 warmth)
- `contact-print-monumental-scale` — large format aesthetic (12×10 or 15×12 inch negatives typical)

**Style Dominance Line:** 
*This image prioritizes psychological depth, emotional intensity, and materialist authenticity over technical sharpness. Soft focus, warm gold toning, and visible texture are essential characteristics—not defects.*

**Mode Selector (choose one):**
1. **Heroic Portraiture** — Distinguished subject, close-cropped bust/shoulders, singular key light, psychological gaze intensity. Aspect: 3:4 (portrait-tall). Examples: Darwin, Tennyson, Herschel characterizations.
2. **Allegorical Tableau** — Full-figure narrative composition, elaborate costumes, mythological/literary staging, multiple subjects possible, diffused light. Aspect: 4:3 (wider framing). Examples: classical allegories, theatrical scenes.
3. **Intimate Domestic** — Family/household subject, softer psychological tone, natural diffused light, looser framing. Aspect: 3:4 or 4:3 (flexible). Examples: children, grandchildren, servants cast in domestic roles.

**Final Ratio Confirmation:** Output must be exactly **[3:4 OR 4:3 OR 2:3 as declared]**, no exceptions. Model must not default to alternative ratios.

---

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS (Native—No Adaptation Required):**

✓ **3:4** (portrait—864×1184 px) — **PRIMARY for Heroic Portraiture & Domestic modes**
✓ **4:3** (landscape—1184×864 px) — **PRIMARY for Allegorical Tableau mode**
✓ **2:3** (portrait—832×1248 px) — Secondary option for tall vertical formats
✓ **1:1** (square—1024×1024 px) — Not historically authentic; avoid unless user explicitly requests

**RATIO SELECTION BY MODE:**

| Mode | Primary Ratio | Aspect Justification | Historical Plate Size |
|------|---------------|----------------------|-----------------------|
| Heroic Portraiture | 3:4 | Vertical bust composition, head fills frame | 12×10" or 15×12" (portrait orientation) |
| Allegorical Tableau | 4:3 | Wider framing for full-figure narrative, groups | 12×10" or 15×12" (landscape orientation) |
| Intimate Domestic | 3:4 or 4:3 | Flexible; matches portrait precedent | Variable per composition |

**2.1 Ratio Adaptation for Non-Native Requests:**

If user requests ratio outside {3:4, 4:3, 2:3, 1:1}:
- **Nearest-match protocol:** Map to closest native ratio maintaining aesthetic intent
- Example: 16:9 ultrawide → map to 4:3 with extended compositional width
- Example: 9:16 ultravertical → map to 3:4 with extended height
- **Always prioritize historical authenticity** over non-native requests

**2.2 Compositional Framing Constraints:**

**Heroic Portraiture (3:4 ratio):**
- Subject occupies 60–80% of frame (bust-to-head focus)
- Tight crop emphasizes facial expression and psychological intensity
- Minimal background detail (soft-focused, atmospheric)
- Single dominant light source defines contours
- Head positioned in upper-middle frame for psychological weight

**Allegorical Tableau (4:3 ratio):**
- Subject(s) occupy 50–75% of frame (full-figure or multiple figures)
- Broader compositional space accommodates narrative staging
- Background provides atmospheric context (soft-focused landscape or drape)
- Multiple light sources support theatrical staging
- Composition centers on primary subject with secondary figures supporting narrative

**Intimate Domestic (3:4 or 4:3):**
- Subject occupies 50–70% of frame
- Softer, less confrontational framing than portraiture
- Background may show domestic interior hints (soft-focused)
- Natural, diffused light suggests candid moment
- Expression more relaxed than heroic mode

---

## 3) Style Context & Material Authenticity

**PERIOD & CONTEXT (1864–1875):**

Julia Margaret Cameron worked exclusively with **wet collodion process** for negatives and **albumen silver prints** for final output. No other period applies. Zero anachronisms.

**Process Authenticity (Non-Negotiable):**
- **Negative:** Wet collodion on glass plates (prepared fresh, exposed while wet, developed immediately)
- **Print:** Albumen paper (egg white + salt coating, sensitized with silver nitrate, contact-printed from glass negative)
- **Toning:** Gold chloride toning (produces warm purple-brown signature in mid-tones/highlights)
- **Mounting:** Heavy card stock mounting with handwritten title/signature aesthetic (not visible in image, but context)

**Visual Material Signature (REQUIRED):**
- **Soft Focus:** Intentional optical aberration (French globe lens, long-focus lens, or deliberate defocus)—NOT digital blur. Softness appears as edge diffusion, not smoothing.
- **Grain Structure:** Collodion emulsion visible as fine, organic texture (silver halide crystals)—NOT digital noise. Grain is uniform, not splotchy.
- **Albumen Paper Texture:** Matte finish with subtle surface irregularity (egg white creates slight texture)—NOT glossy, NOT smooth digital rendering.
- **Toning Warmth:** Purple-brown cast in mid-tones and highlights, cool blacks in deep shadows. RGB warmth +20.3±17.8 (R notably higher than B). Mid-tone luminance shifted toward warm palette.
- **Contact Print Scale:** Large-format aesthetic (12×10 or 15×12 inch typical). Subjects rendered at monumental scale—not intimate small-print feeling.
- **Dynamic Range:** High contrast (0.87±0.12 ratio), full spectrum utilization (black to white, not compressed midtones). Shadow floor at luminance 44.9±20.7 (retained detail in darks).

**Critical Anti-Flags (MUST NOT APPEAR):**
- ❌ Digital smoothing or HDR-style tone mapping
- ❌ Modern saturation or vibrant color
- ❌ Artificial sharpness (modern unsharp masking)
- ❌ Digital grain (flat, computerized noise texture)
- ❌ Glossy paper finish (albumen is matte)
- ❌ Contemporary tonality or color grading
- ❌ Shallow depth-of-field bokeh (not characteristic of period soft focus)
- ❌ Modern flash lighting (hard shadows, visible catch lights)
- ❌ Anachronistic fashion, props, or settings

**Material Quantity Anchors (QUANTIFIED TARGETS):**
- **Edge Softness Coefficient:** 0.957±0.014 (across all modes; very soft, not average)
- **Luminance Mean:** 81.6±27.7 (mid-range overall brightness, not blown highlights)
- **Luminance Range:** 223.1±30.0 (high dynamic range, full spectrum)
- **Shadow Floor (25th percentile):** 44.9±20.7 (dark values retain some detail, not crushed black)
- **Contrast Ratio:** 0.87±0.12 (normalized 0–1; high contrast, theatrical lighting)
- **Color Warmth (R−B):** +20.3±17.8 (warm cast; gold toning signature)
- **Saturation:** 75.0±43.2 (muted, not vibrant; Victorian color restraint)
- **Distinct Tonal Zones:** ~5 per image (well-defined step transitions between light/shadow zones)

**Expected Flags (MUST APPEAR):**
- ✓ `soft-focus-aberration` — Visible edge diffusion, intentional
- ✓ `albumen-texture` — Paper grain visible, matte surface
- ✓ `collodion-grain` — Emulsion signature (fine, organic texture)
- ✓ `gold-toning-warmth` — Purple-brown cast in mid-tones
- ✓ `contact-print-monumental` — Large-format aesthetic, subjects at scale
- ✓ `value-modeling` — Psychological depth via luminance transitions
- ✓ `long-exposure-blur` — Potential subtle motion blur from 3–7 minute exposures (acceptable as authentic)
- ✓ `psychological-intensity` — Gaze, expression, emotional depth (especially portraiture)

**Style Summary (Visual Forensics Baseline):**

Cameron's prints exhibit a distinctive material signature: soft-focus optical characteristics (gradient magnitude 3.84±1.66, very diffuse), warm-toned albumen surface (RGB warmth +20.3), high dynamic range (contrast 0.87), and visible texture (grain + paper). The totality creates a painterly, Pre-Raphaelite aesthetic while remaining authentically photographic. Her work bridges photography and fine art through deliberate rejection of sharp-focus convention in favor of psychological intensity and spiritual capture.

---

## 4) Technical Method & Mark-Making

**≥5 TECHNICAL ANCHORS (Quantified, Mode-Independent):**

1. **Soft Focus Methodology (Edge Softness 0.957±0.014):**
   - Intentional optical aberration via French globe lens (likely Petzval-type with spherical aberration at wide apertures) or deliberate defocus
   - NOT digital blur; must appear as optical diffusion with natural haloes around high-contrast edges
   - Gradient magnitude target: 3.84±1.66 (very soft edge transitions)
   - Focus plane positioned on subject's eyes; surrounding areas progressively soften
   - Soft focus consistent across ALL modes (not variable per mode)
   - **Anchor:** "Soft focus achieved through optical lens behavior, not post-processing. Edge softness coefficient minimum 0.94; maximum 0.97."

2. **Wet Collodion Emulsion Grain (Texture Visible, Organic):**
   - Silver halide crystals visible as fine, uniform grain structure
   - Grain size consistent with 1860s–1870s collodion sensitivity (roughly 1–3 pixels at typical viewing distance)
   - Grain NOT splotchy or digital-looking; uniform distribution across image
   - Grain intensity increases in shadow areas (characteristic of underexposed emulsion regions)
   - **Anchor:** "Collodion grain visible throughout image; texture signature matches silver halide crystal structure, not digital noise."

3. **Albumen Paper Matte Finish (Surface Texture, Non-Glossy):**
   - Egg-white coating creates subtle surface irregularity (not smooth digital rendering)
   - Finish is matte, not semi-gloss or glossy (albumen never glossy in period)
   - Surface micro-texture visible under magnification; slight relief from paper fibers beneath
   - Highlights retain matte appearance (no specular reflection from glossy substrate)
   - **Anchor:** "Albumen print finish is matte; surface texture visible; zero glossy reflection from substrate."

4. **Gold Toning Warmth Signature (Color Balance +20.3±17.8 R−B):**
   - Mid-tone and highlight areas shifted toward warm purple-brown palette
   - Shadow areas remain cool (nearly neutral or slightly warm)
   - RGB warmth achieved through warm color cast, not saturation increase
   - Specific luminance range where warmth peaks: 80–120 luminance units (mid-tones)
   - Darker areas (luminance <60): warmth may be neutral to slightly cool
   - Lighter areas (luminance >140): warmth moderate but not excessive
   - **Anchor:** "Gold-toned signature: R−B warmth index +20.3±17.8. Mid-tones display characteristic purple-brown cast. Shadows remain dark with cool undertone."

5. **Contact Print Large-Format Scale (Monumental Aesthetic):**
   - Subject rendered at large scale relative to frame
   - Subjects occupy 60–80% of heroic portraits, 50–75% of allegorical tableaux
   - No visible edge cropping artifacts; composition feels natural despite tight framing
   - Print surface fills visual attention; subjects feel "life-sized" or larger-than-life (psychological effect)
   - **Anchor:** "Large-format contact print aesthetic: subjects occupy dominant portion of frame; monumental psychological presence."

6. **High Dynamic Range with Retained Shadow Detail (Luminance Range 223±30, Shadow Floor 44.9):**
   - Full spectrum utilization (blacks to whites, not compressed midtones)
   - Shadow floor (25th percentile) at luminance ~45 (not crushed to 0; detail retained)
   - Highlights approach but rarely clip at 255 (controlled exposure, no blow-out)
   - Tonal zones well-defined (~5 distinct steps between light/shadow), creating theatrical lighting appearance
   - **Anchor:** "High dynamic range with shadow detail retention. Luminance range 223±30 (normalized 0–255). Shadow floor minimum 44.9 (no crushed blacks)."

---

## 5) Wardrobe, Props & Setting Conventions

**COSTUME & DRESS (Period-Authentic Victorian, 1864–1875):**

**Heroic Portraiture Mode:**
- Subjects typically wear formal Victorian dress: frock coats, waistcoats, cravats (men); dresses with high necklines, fitted bodices, full skirts (women)
- Aging intellectuals and distinguished friends: slightly rumpled, informal elegance (Darwin-like: natural hair, relaxed tie)
- Emphasis on face and torso; costume detail secondary to expression
- Minimal jewelry; if present, understated and period-appropriate (mourning brooches, simple chains)
- No contemporary fashion; Victorian formality only
- Hair: Natural styling; women's hair may be pinned up (fashionable 1870s); men's hair slightly tousled (intellectual affect)

**Allegorical Tableau Mode:**
- Elaborate theatrical costumes: classical drapes, Greco-Roman inspired garments (togas, chitons)
- Medieval or Renaissance-inspired dress for literary/fairy-tale themes (flowing robes, crowns, veils)
- Servants and household staff dressed in costumes cast as mythological figures, angels, sibyllas
- Props visible: wreaths, laurel crowns, classical urns, books, symbolic objects
- Fabric draping prominent; soft textures (linen, cotton, silk) with visible folds
- Layering and texture essential to tableau aesthetic
- No modern synthetic fabrics; appear natural, woven materials

**Intimate Domestic Mode:**
- Victorian household dress: women in day dresses (simpler than formal wear), men in casual jackets
- Children in period children's clothing: simple frocks, sailor suits, smocks
- Family members in relaxed, comfortable Victorian attire
- Minimal costume artifice; natural domestic presentation
- Occasional classical drapery for younger subjects (Cameron's conceit for family portraits)
- Hair natural, not elaborately arranged

**PROPS & ATTRIBUTES (Historical Accuracy):**

- **Heroic Portraiture:** Minimal props—perhaps a book, writing tablet, or symbolic object held or placed nearby. Focus on sitter.
- **Allegorical Tableau:** Elaborate props—urns, wreaths, theatrical items, fabric drapes, classical architectural elements (columns, pedestals), floral arrangements, symbolic objects (torches, harps, laurels)
- **Domestic:** Minimal props—furniture, household items visible in soft focus background
- **Prohibited:** Modern objects (cameras, clocks, lamps, glasses), contemporary fashion, anachronistic materials

**SETTINGS & BACKGROUND (Period-Authentic Victorian 1864–1875):**

**Heroic Portraiture:**
- Studio interior: Dimbola Lodge (Cameron's home) studio setup with dark drapery, neutral background
- Background typically soft-focused, atmospheric—dark cloth drapes, plain wall, minimal detail
- Occasionally: natural interior elements (window softly out-of-focus, architectural detail blurred)
- No landscape background; interior studio aesthetic

**Allegorical Tableau:**
- Indoor studio with classical props and drapery
- Occasionally: outdoor setting (garden, soft-focused landscape) for mythological scenes
- Background may show classical architectural hints (columns, pedestals) in soft focus
- Theatrical staging apparent: props arranged to support narrative

**Domestic:**
- Interior household setting: parlor, sitting room, or garden (soft-focused background)
- Natural light through windows suggested (diffused quality)
- Minimal background detail; focus on subject
- Homey, intimate atmosphere

**LOCATION CONTINUITY:** All photographs shot in/around Dimbola Lodge (Isle of Wight) or studio environment. No anachronistic locations (no modern houses, no contemporary interiors, no landscape photography aesthetics).

---

## 6) Safety & IP Constraints (Hard Rules)

**PROHIBITED CONTENT (Absolute):**
- ❌ **Nudity:** No partial or full nudity. All subjects fully clothed in period-appropriate Victorian dress.
- ❌ **Gore, Violence, Injury:** No blood, wounds, weapons, or violent content.
- ❌ **Logos, Watermarks, Signatures:** No visible branding, logos, watermarks, or artist signatures in image. (Period signature aesthetic acceptable on mount, not in image.)
- ❌ **Real-World People Identification:** Generate original subjects inspired by Cameron's style, not literal recreations of historical figures (Darwin, Tennyson, etc.). Avoid distinctive facial features that identify real individuals.
- ❌ **Minors in Inappropriate Context:** If minors present, dress modestly; context appropriate and innocent (domestic family scenes, allegorical children roles). No suggestive positioning or exposure.
- ❌ **Gender Disrespect:** Preserve subject's presented gender identity through appropriate Victorian costume and styling. No gender mockery or misgendering.

**COSTUME REQUIREMENTS (Mandatory):**
- All subjects fully clothed in period-accurate Victorian dress (1864–1875)
- No partial undressing or semi-nude poses (even artistic/allegorical contexts)
- Necklines appropriately high; legs covered (dresses/skirts/trousers visible)
- Minors dressed in period children's clothing, fully covered

**ORIGINAL DESIGN REQUIREMENT:**
- Create original character designs inspired by Cameron's photographic aesthetic
- Avoid copyrighted characters, identifiable real people, or famous artworks
- Use period-appropriate costume archetypes (Victorian intellectual, classical maiden, household servant, etc.)
- IP-safe narrative contexts: original allegorical scenes, fictional tableaux

**ANTI-CONTEMPORARY RULES:**
- ❌ No modern furniture, architecture, fashion, or technology
- ❌ No contemporary interior design or decor
- ❌ No digital aesthetics, HDR processing, or modern photography techniques visible
- ❌ No anachronistic props (glasses, lamps, contemporary materials)
- ❌ No visible digital artifacts, Instagram filters, or modern post-processing

---

## 7) Composition & Lighting Patterns

**COMPOSITIONAL ARCHETYPES (Mode-Specific):**

**7.1 HEROIC PORTRAITURE (Psychological Intensity Focus)**

**Framing & Crop:**
- Close-cropped bust composition: head + shoulders fill 60–80% of frame
- Head positioned slightly off-center (rule of thirds): upper-middle frame for psychological weight
- Vertical orientation (3:4 aspect ratio primary)
- Minimal negative space; frame devoted to subject
- Shoulders fill frame bottom; head top; subtle margin on sides

**Compositional Balance:**
- Subject faces toward camera (frontal or slight 3/4 turn)
- Asymmetrical: head tilt, shoulder turn, or eye direction creates psychological tension
- Weight concentrated on face/expression; body secondary
- No competing background elements; background is atmospheric support only

**Light Pattern & Modeling:**
- **Single dominant key light:** Position at 45° to subject (classic studio setup)—illuminates face creating dimensional modeling
- **Key light direction:** Left or right of camera; consistent direction per image
- **Fill light:** Minimal (approximately 3:1 or 4:1 key-to-fill ratio); shadows retain definition
- **Shadow quality:** Soft shadows (diffused key light through fabric/paper), not hard edges
- **Highlight areas:** Mid-bright (luminance 100–140 range); never blown-out
- **Shadow areas:** Retained detail (luminance 30–60 range); blacks present but not crushing
- **Lighting Intensity Ratio:** 1.5–2.5 (key/fill asymmetry supports theatrical appearance)

**Tonal Structure & Contrast:**
- **High contrast lighting:** Creates psychological drama and emphasizes facial features
- **Tonal zones:** ~5 distinct steps (black → dark shadow → mid-shadow → mid-tone → highlight → white)
- **Face modeling:** Multiple tones across face (forehead lighter, cheek midtone, eye socket darker) create volumetric illusion
- **Emotional temperature:** Warm key light (gold-toned) creates sympathetic, intimate psychological connection

**Expression & Gaze:**
- Direct or near-direct gaze toward camera (confrontational psychological intensity)
- Eyes sharp-focused (within soft-focus envelope, eyes receive maximum tonal clarity)
- Expression serious, contemplative, or psychologically present—no smile
- Mouth slightly open or closed, relaxed; no grimace or artifice

**Background Treatment:**
- Out-of-focus drapery or neutral wall (soft, atmospheric, nearly featureless)
- Luminance slightly darker than subject for separation
- Texture hinted but not resolved (soft-focus indistinction)
- No competing visual interest; background subordinate to face

---

**7.2 ALLEGORICAL TABLEAU (Narrative Staging)**

**Framing & Crop:**
- Wider framing: full-figure or three-quarter figure compositions dominate
- Horizontal orientation (4:3 aspect ratio primary)
- Multiple subjects possible (max 3); arranged to support narrative
- Compositional space visible; breathing room between subjects/props

**Compositional Balance:**
- Primary subject centered or left-positioned; secondary figures support narrative
- Pyramid or triangular composition common (central subject apex, supporting figures base)
- Symmetrical or asymmetrical depending on mythological/literary precedent
- Vertical gestures (reaching arms, extended limbs) enhance theatrical scale

**Figure Positioning & Poses:**
- Contrapposto or gestural poses (not rigid frontality)
- Bodies angled toward primary dramatic axis (not directly facing camera unless intentional)
- Gesture fluid and expressive; arms extended, draped, reaching
- Costumes create visual rhythm through fabric folds, draping, layering
- Overlapping figures create depth and narrative relationship

**Light Pattern & Staging:**
- **Multiple light sources:** Left and right key lights, possibly frontal fill
- **Diffused overall lighting:** Less dramatic than portraiture; atmospheric rather than psychological
- **Modeling:** Softer shadows, less defined contrasts than portraiture
- **Lighting intensity ratio:** 1.2–1.8 (less asymmetrical; supports theatrical tableau feel)
- **Highlights moderate:** Luminance 110–150 range (not blown; controlled)
- **Shadows moderate:** Luminance 40–80 range (retained detail; not crushed)

**Tonal Structure & Contrast:**
- **Medium contrast lighting:** Theatrical but not melodramatic
- **Tonal zones:** ~4–5 zones; well-defined but softer transitions than portraiture
- **Fabric textures emphasized:** Drapery, folds, layered clothing create tonal variation
- **Atmospheric quality:** Background may suggest depth/distance; not flat

**Background Treatment:**
- Studio drapery visible but soft-focused (suggests theatrical interior or landscape)
- Architectural elements (columns, pedestals) may be hinted in background
- Nature elements (garden, foliage) suggested but not defined
- Luminance ranges from darker (left/right drapery) to lighter (center background)
- Depth suggested through luminance gradation, not sharp focus

**Narrative & Symbolic Content:**
- Costume and pose establish mythological or literary reference (classic allegorical tradition)
- Props arranged to support narrative: wreaths, urns, books, torches, etc.
- Symbolic color/light: warmer light on primary subject, cooler background suggests spiritual realm
- Emotional tone: contemplative, poetic, dramatic—not comedic or casual

---

**7.3 INTIMATE DOMESTIC (Psychological Softness)**

**Framing & Crop:**
- Three-quarter or full-figure framing (less extreme close-crop than portraiture)
- Vertical or nearly-square orientation (3:4 or approaching 1:1)
- Subject occupies 50–70% of frame; modest negative space suggests relaxed intimacy
- Looser, less confrontational framing than heroic portraiture

**Compositional Balance:**
- Subject may face slightly away from camera or in profile (less confrontational)
- Three-quarter turn or gentle angled pose
- Seated posture common (children on chairs, family members in relaxed positions)
- Asymmetrical composition; off-center positioning creates informal feel

**Figure Positioning & Poses:**
- Relaxed, natural posture—not tense or formal
- Hands visible; gesturing gently or at rest
- Children: playing, daydreaming, resting
- Elderly: seated thoughtfully, hands folded or gesturing
- No forced artifice; poses suggest candid moment

**Light Pattern & Modeling:**
- **Diffused, natural-appearing light:** Window light or diffused studio light
- **Soft, gentle modeling:** Shadows subordinate; face well-illuminated but not dramatically lit
- **Single light source (seemingly):** Appears to come from one direction (window, soft studio light)
- **Lighting intensity ratio:** 1.0–1.5 (minimal shadow definition; supportive rather than dramatic)
- **Warm tone:** Gold-toned warmth less pronounced than portraiture; softer emotional quality

**Tonal Structure & Contrast:**
- **Lower contrast lighting:** Supportive, intimate rather than psychological
- **Tonal zones:** ~4 distinct zones; softer transitions
- **Soft overall tone:** Luminance range compressed compared to portraiture
- **Gentle modeling:** Face receives even illumination; minimal shadow drama

**Background Treatment:**
- Domestic interior hints (furniture, interior elements) visible but soft-focused
- Luminance similar to subject (not dramatic separation)
- Texture suggested but not defined; atmospheric
- Natural light suggested (window in background, soft exterior light)

**Emotional Tone:**
- Intimate, tender, familial rather than confrontational
- Expression relaxed, contemplative, or gently engaged
- Psychological depth present but less intense than portraiture
- Narrative context domestic, not theatrical

---

**7.4 OVERALL LIGHTING CONSTANTS (All Modes):**

- **Soft Focus Consistency:** Edge softness 0.957±0.014 across ALL modes—not variable
- **Gold Toning Color:** Warmth +20.3±17.8 across all modes (though intensity may vary by compositional need)
- **High Dynamic Range:** Luminance range 223±30 across all modes (full spectrum utilization)
- **Shadow Retention:** Shadow floor 44.9±20.7 across all modes (no crushed blacks)
- **Contact Print Scale:** Monumental aesthetic across all modes (subjects large relative to frame)

---

## 8) Typography & Text Integration (If Historically Present)

**TEXT RENDERING PROHIBITION:**

**NO TEXT SHALL APPEAR IN IMAGE.**

- ❌ No handwritten labels, titles, or signatures visible in photograph itself
- ❌ No visible date marks, print notation, or darkroom timing artifacts
- ❌ No text overlaid on image

**HISTORICAL NOTE:** Cameron titled and signed her prints on the mount (heavy card stock backing, not visible in image) or with handwritten inscription on back. Image itself contains no visible typography.

**EXCEPTION:** If user explicitly requests title/signature visible in image (non-standard request), reply with clarification that Cameron's practice did not include in-image text, maintaining historical authenticity.

---

**END OF FRAMEWORK**

**STRICT TERMINATION:** Framework ends at Section 8. NO additional commentary, explanations, historical context, or checklist. Final output is Section 8 conclusion.

