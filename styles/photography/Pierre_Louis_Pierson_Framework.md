---
id: pierson_castiglione
group: "Photography"
movement: "Romantic-Era Studio Portraiture"
artist: "Pierre-Louis Pierson (1822-1913)"
display_name: "Pierre-Louis Pierson – Countess of Castiglione Studio Portraiture"
style_scope: single-artist

ratios: ["2:3","3:4","4:3"]
ratios_status: approved
ratios_notes: >
  Pierson's corpus spans portrait and landscape orientations reflecting large-format collodion plate dimensions (8x10 inch standard). Mean aspect ratio 0.888 (portrait-weighted) with authentic range 0.60-1.33. Primary ratios 2:3, 3:4, 4:3 preserve studio framing conventions and maintain psychological intensity of theatrical portraiture.
modes: ["MODE_1_intimate_headshot","MODE_2_dramatic_pose","MODE_3_psychological_tableau"]

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:
  allowed: false
  max_subjects: 1
  layout_hint: "Single subject focus per Nadar studio convention"
  identity_priority: ["silhouette","gesture","facial_identity","psychological_state"]

hero_image: null

about: >
  Pierre-Louis Pierson (1822-1913) was a French photographer and chief operator of Nadar's studio in Paris. His most significant achievement was a nearly four-decade collaboration with Countess of Castiglione (1837-1899), producing over 400 photographs characterized by theatrical intensity, dramatic lighting, and psychological depth. The Castiglione series pioneered performance photography, blurring boundaries between portraiture, conceptual art, and self-directed identity exploration. Pierson's work exemplifies wet collodion negative and albumen print aesthetics with gold chloride toning, hand-retouched refinement, and studio lighting mastery. The photographs remain canonical in photography history for their daring exploration of identity, narcissism, and the psychological dimensions of the photographic image.

composition_constraints:
  max_subjects: 1
  subject_interaction: prohibited
  crowd_scenes: false
  animals_allowed: false
  text_allowed: yes

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

# Pierre-Louis Pierson: Countess of Castiglione Studio Portraiture Framework

---

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio **2:3, 3:4, or 4:3**.
- **Likeness Preservation Authority:** Subject's silhouette, gesture, facial expression, and core physiognomy are preserved and recontextualized within period-authentic Pierson studio aesthetic. Likeness is NOT erased—it is authentically rendered to 1856-1899 collodion/albumen conventions.
- **Period Authenticity Authority:** Wet collodion/albumen material signatures supersede modern photographic conventions. NO digital filters, NO contemporary post-processing, NO modern camera effects.
- **Thermal/Color Enforcement:** Gold chloride toning is mandatory. RGB channels MUST follow strict hierarchy: R > G > B with small deltas (8-20 units). Warm bias +0.10 to +0.14 is non-negotiable.
- **Gender Expression Consistency:** Female subjects remain recognizably feminine across all modes. Male subjects remain recognizably masculine. Styling (costume, jewelry, hair arrangement) period-appropriate and gender-consistent. Identity hierarchy: physiognomy > silhouette > gesture > expression.
- **Grain/Texture Authority:** Collodion grain (45-85 characteristic signature) is inherent to medium, not applied noise. Albumen paper surface must show subtle retouching evidence (hand-refined, not algorithmic).
- **Lighting Ratio Enforcement:** Key light ratio 2.2-2.8 (drama, NOT flat). Shadow floor minimum luminance 35 (detail preservation). Highlight ceiling maximum 220 (albumen paper reflectivity).
- **Theatrical Psychology Authority:** Psychological state and conceptual intent expressed through period-authentic feminine or masculine presentation. Expressions range from introspective to narcissistic to feigned vulnerability—all rendered within gender-specific identity preservation.
- **Mode Consistency Authority:** Subject's gender presentation and core facial characteristics remain consistent and recognizable across all three modes.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary, explanations, or content beyond Section 8.

---

## 1) Core Instruction & Likeness Mandate

**Primary Directive:** Redraw subject in **Pierre-Louis Pierson wet collodion/albumen studio portraiture aesthetic** for **[exact format specification: MODE_1_intimate_headshot / MODE_2_dramatic_pose / MODE_3_psychological_tableau, aspect ratio 2:3 or 3:4 or 4:3]**.

**Likeness Authority:** Subject's silhouette, gesture, facial expression, and core physiognomy are preserved and authentically rendered to 1856-1899 studio portrait conventions. Likeness is recontextualized within period-authentic Pierson Nadar studio style—NOT erased. Gender identity is preserved through period-appropriate styling while maintaining facial recognition across all modes.

**Canvas Override:** Recompose to exactly **[X:Y ratio]** (2:3, 3:4, or 4:3 native ratios supported). Ignore any source image dimensions.

**Ratio Enforcement:** Generate image with EXACT aspect ratio of **[specified ratio]**. This is a hard requirement.

**Mode Selector:** Choose **one** of three operational modes:
- MODE_1_intimate_headshot (face-centric 60-75% frame, minimal costume fabric, dark supporting background, 31% corpus)
- MODE_2_dramatic_pose (full-length or three-quarter theatrical gesture, elaborate costume drape emphasized, 38% corpus)
- MODE_3_psychological_tableau (complex composition with props/mirrors, multi-layer costume, psychological narrative, 31% corpus)

**Gender Specification:** Subject is **[female / male / androgynous]**. Gender identity preserved and enhanced through period-appropriate styling, facial architecture emphasis, and costume construction (see Section 4 gender-specific technique and Section 5 wardrobe).

**Face-Treatment Flag:** `studio-strobe-modeling` (theatrical studio portrait, dramatic chiaroscuro, hand-retouched albumen)

**Pose Flag:** Mode-dependent and gender-specific - selected from: `contrapposto`, `psychological-tension`, `frontal-rigid`, `erotic-tension`, `gestural-fluid` (see Section 4 for gender-specific pose assignment)

**Canvas Control Flag:** `strict-reframe`

**Material Physics Authority:** Wet collodion → albumen print → gold chloride toning → hand-retouching mandatory. NO digital smoothing, NO modern emulsions, NO contemporary filters.

**Period Production Authenticity:** 1856-1899 period only. Albumen paper manufacturing, gold chloride availability, hand-retouching tools, natural studio lighting from skylights. NO electric lighting, NO modern fabrics, NO contemporary cosmetics.

**Style Dominance Line:** "Romantic-era theatrical studio portraiture, Nadar school, psychological intensity prioritized over documentary realism, collaborative between photographer-technician (Pierson) and director-performer (subject), subject's gender identity authentically expressed within period constraints."

**Final Ratio Confirmation:** Output must be exactly **[X:Y ratio]**, no exceptions.

---

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS (Native):**

- ✅ `2:3` (portrait - 832×1248)
- ✅ `3:4` (portrait - 864×1184)
- ✅ `4:3` (landscape - 1184×864)

**MANDATORY RATIO SELECTION:** Choose **exactly one** from above. No adaptation required.

**CANVAS RECOMPOSITION STRATEGY:**

**Ratio Status:** Native (no adaptation required)

**Reframing Method:** Compose-entirely-for-target-ratio

**Spatial Allocation:** 
- MODE_1: Face occupies 60-75% frame, upper-center positioning, negative space above head
- MODE_2: Full-length or three-quarter figure (head to waist/knees), asymmetrical classical framing
- MODE_3: Complex layered composition, multiple depth planes, head-to-full-body variable

**Background Treatment:** Dark textile or shadow (uniform, minimal detail for MODE_1; increasing complexity MODE_2→MODE_3). Supports subject, does not distract.

**Format Justification:** Pierson's corpus exhibits mean aspect ratio 0.888 (portrait-weighted), reflecting large-format collodion plate cutting (8x10 inch standard). Target ratios 2:3 (0.667), 3:4 (0.75), 4:3 (1.33) preserve authentic studio framing conventions. Primary target 2:3 and 3:4 maintain psychological intensity of theatrical portraiture by emphasizing vertical emphasis and figure dominance. Ratio choice guides compositional emphasis: 2:3 favors facial intimacy (MODE_1), 3:4 accommodates full-figure gesture (MODE_2), 4:3 allows landscape psychological tableaux (MODE_3).

**Mode-Specific Ratio Considerations:**
- MODE_1_intimate_headshot: 2:3 or 3:4 (portrait emphasis, face-centric, vertical framing)
- MODE_2_dramatic_pose: 3:4 or 4:3 (full-length accommodation, gesture emphasis, occasional landscape for dramatic recline)
- MODE_3_psychological_tableau: 2:3 or 3:4 (theatrical complexity within portrait frame, occasionally 4:3 for horizontal narrative spread)

---

## 3) Style Context & Material Authenticity

**Influences:** Romantic-era aesthetic theory (psychology, emotion, artifice), Parisian salon culture (Nadar's avant-garde circle), performance art tradition (subject's self-directed concepts), photographic pioneering (wet collodion mastery, dramatic lighting, hand-retouching as artistic expression).

**Medium/Production Method:** Wet collodion negative (gun cotton + iodides + bromides in ether-alcohol, sensitized with silver nitrate bath, developed with pyrogallic acid or ferrous sulfate). Large-format glass plates (8×10 inch typical). Albumen paper prints (egg white + salt base, glossy surface, superior detail retention). Gold chloride toning (purplish-brown warmth, archival stabilization). Hand-retouching with opaque paint or pencil on negative and prints (artistic refinement, softens skin, sharpens eyes, darkens backgrounds). Studio lighting from large skylights (natural source, north-facing preferred). No electric lighting (anachronistic).

**Thematic Purpose:** Exploration of identity construction through theatrical self-presentation within period-authentic feminine or masculine expression. Psychological portraiture transcending documentary realism. Narcissism, vulnerability, emotional states rendered as aesthetic forms. Collaborative between photographer-technician (Pierson) and director-performer (subject). Pioneering conceptual photography.

**Three Hallmark Motifs (Quantified):**

1. **Dramatic Side-Lighting with Facial Modeling** (Key light 45-60° lateral, 45-60° elevation): Creates strong facial contours, shadow beneath cheekbone/chin, highlight on forehead/nose/cheekbone. Light ratio 2.2-2.8. Gender-specific: female subjects emphasize cheekbone prominence and eye definition; male subjects emphasize jaw and brow structure. Consequence: Psychological intensity via sculptural form, enhanced gender-specific facial architecture.

2. **Rich Midtone Separation & Tonal Complexity** (Tonal zones 160-220, contrast ratio 1.8-3.2, shadow floor ≥35): Collodion negatives preserve distinct value zones. Albumen prints maintain midtone detail. Gold toning emphasizes tonal richness. Consequence: Romantic-era drama, NOT flat modern studio lighting. Preserves facial detail across gender presentations.

3. **Gold-Toned Albumen Signature** (Warm bias +0.10-+0.14, saturation 0.28-0.35, hex #6d5944 ±15): Gold chloride toner shifts tone toward warm purplish-brown. R>G>B channel hierarchy (small deltas 8-20 units). Characteristic muted palette. Consequence: Period-authentic material response, instantly recognizable as 1850s-1890s albumen print. Toning applied universally; gender-specific faces rendered within universal material signature.

**Period Framing:** Pierre-Louis Pierson active **1856-1899**. Studio location: Nadar, Paris. Medium era: Peak wet collodion/albumen period before gelatin emulsion dominance (post-1880s Pierson gradually transitioned but maintained collodion mastery). Historical context: Second Empire and Belle Époque Paris, aristocratic salon culture, photographic avant-garde innovation.

**Tone Tag:** Theatrical. Psychological. Romantic. Narcissistic. Introspective. Defiant. Melancholic. Intimate. Complex. Conceptual.

**Innovation Line (Photographic):**
- **Lighting:** Dramatic chiaroscuro from studio key light, sculptural facial modeling emphasizing gender-specific facial architecture, psychological intensity via shadow/highlight
- **Format:** Large-format glass plates enabling superior detail, studio-bound work enabling meticulous control, sitter stability across lengthy exposures
- **Processing:** Hand-retouching on negative (opaque paint, pencil) and prints (toning variations, selective darkening, eye emphasis), integration of retouch as artistic expression
- **Collaboration:** Photographer as technical executor of subject's vision, subject's concepts and direction shaping aesthetic output

---

## 4) Technical Method & Mark-Making

### MODE_1: Intimate Headshot – Face-Centric Portrait Study

#### Context
Face-centric studies where physiognomic character dominates. Subject's face occupies 60-75% frame. Psychological intensity prioritized—direct gaze or introspective downward look. Expression ranges from contemplative to defiant. Subject's gender-specific facial architecture emphasized via dramatic side-lighting. Dark textile background, minimal detail, supporting role. Likeness preserved through facial recognition and gender-consistent styling.

#### Measurements (Universal to Gender)
- Head prominence ratio: 0.92-1.14 (upper-half luminance / lower-half luminance)
- Pose variance: 2-5 (asymmetry minimal, subtle pose inclination)
- Tonal zones: 160-200 (distinct value separation, moderate complexity)
- Fold ratio: 0.8-1.1 (minimal fabric complexity, shoulders/neck primary)
- Background uniformity: 40-55 (dark textile, minimal detail, supports subject)
- Aspect ratio: 2:3 or 3:4 (portrait emphasis)
- Light ratio: 2.2-2.8 (dramatic side-light, shadow-side readable but defined)
- Shadow floor luminance: 35-50 (preserves detail, prevents crushed blacks)
- Highlight ceiling: 210-225 (specular on highest points, slight bloom)
- Grain signature: 50-75 (fine collodion grain, visible at 100% crop but not noise)
- Warm bias: +0.10 to +0.14 (gold chloride toning, R>G>B)
- Saturation: 0.28-0.35 (muted, period-authentic albumen)

#### Technique – Female Subject

**Facial Architecture:** Refined aristocratic features (high cheekbones, defined jawline, proportionate nose, large eyes 8-12% face width). Inter-pupillary distance 30-35% face width. Head-to-body ratio 1:7-1:8 (refined, not exaggerated). Skin texture soft with subtle micro-detail visible at 100% crop (period albumen aesthetic, not airbrushed modern smooth).

**Lighting Setup:** Single dominant key light 45-60° lateral to camera-left or camera-right (position variable, must be stated), 45-60° elevation above subject. Positions cheekbone highlight and defines eye. Opposite cheek receives minimal fill (~30-40% key light intensity). Eyes receive subtle catchlight from key light, defining iris and creating psychological focus. Highlight emphasis on highest point of cheekbone, forehead, nose tip creates feminine facial modeling.

**Pose Direction:** Head erect or tilted slight (pose_variance 2-5). Frontal or slight three-quarter turn (preserves facial recognition and gender-specific cheekbone prominence). Expression: psychological intensity (introspection, defiance, melancholia, self-study, contempt). NOT smiling (era convention). Female expression conveys psychological state through subtle eye movement and mouth tension—refined, not exaggerated.

**Shoulder & Neck Positioning:** Shoulders relaxed, slight angle or erect. Neck visible and elongated (period feminine ideal). Clavicle visible. Head sits gracefully atop shoulders (refined posture, not stiff).

**Hair Styling:** Arranged period-appropriately (updo typical for 1860s-1890s studio portraiture). Hair contributes to face frame but does not obscure facial features. Hair texture subtle, not overly detailed (albumen print aesthetic).

**Costume Specificity:** Period gown bodice (1856-1899 fabric: silk, velvet, taffeta), neckline modest (collarbone to shoulder visible). Neck and shoulders visible to near-collarbone. Optional period jewelry (cameo brooch, pearl necklace, gold earrings—small scale, does not distract from face). Fold ratio 0.8-1.1 (minimal fabric complexity, bodice/bodice support primary).

**Retouching Aesthetic:** Hand-retouched negative/print visible as subtle skin refinement (soft transitions on cheeks, eye sharpened slightly, catchlight enhanced, background darkened toward edges). NOT airbrushed modern smooth. Surface texture readable at 100% crop. Evidence of artistic intention visible but refined.

**Validation – Female Mode 1:**
- Head_prominence in range 0.92-1.14
- Pose_variance in range 2-5 (minimal asymmetry)
- Tonal_zones count 160-200
- Cheekbone highlight presence verified (defines feminine facial modeling)
- Eye catchlight present and defined (psychological focus)
- Fold_ratio 0.8-1.1 (minimal costume complexity)
- Light_ratio 2.2-2.8 (dramatic side-light)
- Shadow_floor ≥35, highlight_ceil ≤225
- Grain_signature 50-75
- Warm_bias +0.10 to +0.14, saturation 0.28-0.35
- Aspect ratio locked to declared ratio (2:3 or 3:4)
- Gender-consistent feminine presentation confirmed (cheekbone emphasis, refined features, period-appropriate styling)

#### Technique – Male Subject

**Facial Architecture:** Defined masculine features (prominent jaw, brow ridge definition, angular cheekbones, proportionate nose, eye size 8-12% face width). Inter-pupillary distance 30-35% face width. Head-to-body ratio 1:7-1:8 (refined proportion). Skin texture with readable micro-detail (period albumen aesthetic).

**Lighting Setup:** Key light 45-60° lateral, 45-60° elevation above subject. Emphasizes jaw definition and brow ridge. Creates shadow beneath jaw (masculine angular feature). Opposite side shadow readable but defined. Eye catchlight defines iris, creates psychological focus. Highlight emphasis on highest points of brow, cheekbone, nose tip creates masculine facial modeling.

**Pose Direction:** Head erect or tilted slight (pose_variance 2-5). Frontal or slight three-quarter turn (preserves facial recognition and jaw prominence). Expression: psychological intensity rendered through masculine restraint (introspection as stoic, defiance as steely, melancholia as brooding). NOT smiling (era convention). Subtle eye and mouth tension conveys emotion within masculine reserve.

**Shoulder & Neck Positioning:** Shoulders broader emphasis (masculine silhouette). Neck visible, suggests strength. Position creates masculine frame for face.

**Hair Styling:** Period-appropriate masculine style (mid-to-long length typical 1850s-1880s, shorter by 1890s). Parted or swept back. Facial hair (beard/moustache) acceptable if historically appropriate to chosen decade within 1856-1899 range. Hair texture subtle, not overly detailed.

**Costume Specificity:** Period jacket, vest, or shirt visible (dark wool, tailored to period). White collar visible. Period necktie, cravat, or stock. Fold ratio 0.8-1.1 (jacket/shirt primary, minimal drapery). Facial features remain dominant in framing.

**Retouching Aesthetic:** Hand-retouched, subtle but present. Skin refined, eyes sharpened, jaw defined, background darkened. Evidence of artistic intention while maintaining masculine strength in features.

**Validation – Male Mode 1:**
- Head_prominence in range 0.92-1.14
- Pose_variance in range 2-5
- Tonal_zones count 160-200
- Jaw definition emphasized (masculine feature emphasis)
- Brow ridge lighting present (masculine facial modeling)
- Fold_ratio 0.8-1.1
- Light_ratio 2.2-2.8
- Shadow_floor ≥35, highlight_ceil ≤225
- Grain_signature 50-75
- Warm_bias and saturation within ranges
- Aspect ratio locked
- Gender-consistent masculine presentation confirmed (jaw emphasis, refined strength, period-appropriate styling)

#### Automated Corrections
- *(Phase 4 appends corrections here)*

---

### MODE_2: Dramatic Pose – Full-Length Theatrical Figure

#### Context
Full-length or three-quarter figures executing theatrical gestures. Head less dominant (head_prominence 0.85-1.05), body and costume drape emphasized. Subject's gender-specific silhouette enhanced through gesture and costume. Psychological state conveyed through pose and gesture—hand positions, torso angle, head tilt. Costume elaborate. Subject's facial identity preserved and emphasized within theatrical context. Balanced lighting emphasizes silhouette and emotional narrative.

#### Measurements (Universal to Gender)
- Head prominence ratio: 0.85-1.05
- Pose variance: 4-6 (deliberate pose, moderate asymmetry, gesture intensity)
- Tonal zones: 180-210
- Fold ratio: 1.0-1.4 (visible gown/jacket folds, drapery defined by lighting)
- Background uniformity: 45-60
- Aspect ratio: 3:4 or 4:3
- Light ratio: 2.2-2.8
- Shadow floor luminance: 35-55
- Highlight ceiling: 205-220
- Grain signature: 55-80
- Warm bias: +0.10 to +0.14
- Saturation: 0.28-0.35

#### Technique – Female Subject

**Facial Architecture:** Refined aristocratic features prominent in frame. High cheekbones, defined jaw, proportionate nose, large expressive eyes emphasized (eyes convey emotional narrative of theatrical gesture). Facial recognition priority: cheekbone and eye geometry clearly visible at distance. Lighting emphasizes feminine facial beauty while supporting theatrical emotion.

**Silhouette Emphasis:** Female silhouette emphasized through costume construction (crinoline, bustle, fitted waist). Curves of torso, hip, and shoulder visible. Gesture conveys feminine psychological state (supplication, defiance, melancholia, narcissism—all rendered through feminine body language and expression).

**Framing:** Full-length or three-quarter figure (head to waist/knees visible). Negative space distributed asymmetrically (head upper-center or off-center, body center, gesture extends into frame). Background occupies 40-50%.

**Lighting Setup:** Key light 45-60° lateral, 45-60° elevation OR top-light emphasis (above subject, creates silhouette definition of feminine form and costume texture). Light ratio 2.2-2.8. Opposite-side shadow readable, defines fabric folds and feminine body contours. Optional rim light on hair/shoulder edge (indicates studio sophistication). Highlight bloom on highest points (cheekbone, breast, hand if raised, costume edge).

**Pose Direction:** Standing, seated, or reclining. Gesture deliberate and intentional (hand raised—supplication or command, torso angle—vulnerability or strength, head incline—introspection or defiance). Pose_variance 4-6 (moderate asymmetry, psychological intensity evident in body language). Expression matches gesture (if hand raised in supplication, facial expression pleading; if reclining, expression melancholic; if standing proud, expression defiant). Feminine expression conveyed through subtle eye contact, mouth softness or tension, subtle head tilt.

**Costume & Props (Feminine):** Elaborate period gown (1856-1899), multiple fabric layers, silhouette emphasizes feminine form. Crinoline (1860s) creates full skirt volume. Bustle frame (1870s-1880s) emphasizes rear volume and fitted front. Tapered S-bend (1890s) cinches waist. Fold ratio 1.0-1.4 (visible folds, drapery pattern defined by lighting, fabric texture readable). Accessories (feathers, veils, hats, fans, shawls, gloves, symbolic props optional). Hair elaborate, period-styled, contributes to overall silhouette and psychological narrative.

**Retouching Aesthetic:** Hand-retouched, subtle but present. Skin refined, eyes sharpened and expressive, facial features emphasized within theatrical context. Background selectively darkened. Costume texture enhanced via retouching (folds emphasized, fabric shimmer suggested).

**Validation – Female Mode 2:**
- Head_prominence in range 0.85-1.05
- Pose_variance in range 4-6
- Tonal_zones count 180-210
- Feminine facial recognition maintained (cheekbone/eye prominence visible)
- Gesture-expression consistency verified (pose intent matches facial expression)
- Feminine silhouette evident (crinoline/bustle/tapered profile visible)
- Fold_ratio in range 1.0-1.4
- Light_ratio 2.2-2.8
- Costume authenticity verified (1856-1899 period only, no synthetics)
- Warm_bias and saturation within ranges

#### Technique – Male Subject

**Facial Architecture:** Masculine features prominent in frame (jaw definition, brow ridge, eye intensity). Facial recognition priority: jaw and brow geometry clearly visible. Lighting emphasizes masculine strength and character while supporting theatrical emotion conveyed through gesture.

**Silhouette Emphasis:** Male silhouette emphasized through jacket/coat construction. Broad shoulders, tapered waist, masculine posture. Gesture conveys masculine psychological state (defiance, introspection, steely determination—rendered through masculine body language and expression).

**Framing:** Full-length or three-quarter figure. Gesture extends into frame, creating compositional drama. Background supportive (40-50%).

**Lighting Setup:** Key light 45-60° lateral or top-light. Creates masculine silhouette and jaw definition. Emphasizes broad shoulders and tapered torso. Light ratio 2.2-2.8. Optional rim light on shoulder/edge. Highlight on highest points (brow, jaw angle, hand if gesture prominent).

**Pose Direction:** Standing or seated (reclining less common for masculine portraiture in era). Gesture deliberate (hand gesture, torso angle, head incline). Pose_variance 4-6. Expression matches gesture—subtle masculine restraint conveying intensity (steely determination, brooding introspection, commanding presence).

**Costume & Props (Masculine):** Period formal wear (tailcoat, waistcoat, jacket) or theatrical costume if appropriate to narrative. Fold ratio 1.0-1.4 (jacket folds, fabric drape). Neckwear (period-appropriate), possible accessories (walking stick, symbolic prop). Hair period-styled, possible facial hair (beard/moustache if historically appropriate to chosen decade).

**Retouching Aesthetic:** Hand-retouched, subtle. Skin refined, eyes intensified, jaw definition emphasized. Costume texture enhanced.

**Validation – Male Mode 2:**
- Head_prominence 0.85-1.05
- Pose_variance 4-6
- Tonal_zones count 180-210
- Masculine facial recognition maintained (jaw/brow prominence visible)
- Gesture-expression consistency verified
- Masculine silhouette evident (broad shoulders, tapered waist)
- Fold_ratio 1.0-1.4
- Light_ratio 2.2-2.8
- Costume authenticity verified
- Warm_bias and saturation within ranges

#### Automated Corrections
- *(Phase 4 appends corrections here)*

---

### MODE_3: Psychological Tableau – Complex Layered Composition

#### Context
Complex compositions with layered costume, props, architectural elements. Multiple depth planes. Head prominence variable (0.88-1.12). Subject's gender-specific facial identity PROMINENTLY preserved and emphasized within psychological narrative. Psychological narrative emphasized via tableau staging, props positioning, and subject's expression/gesture. Costume elaborate with multiple fabric layers. Subject's face remains recognizable as primary identity anchor within tableau complexity. Lighting creates atmosphere, depth, and psychological intensity while maintaining facial recognition.

#### Measurements (Universal to Gender)
- Head prominence ratio: 0.88-1.12 (variable, composition-dependent but face must be recognizable)
- Pose variance: 3-8 (range broader, complexity allows variation)
- Tonal zones: 190-220 (high complexity, multiple depth planes)
- Fold ratio: 1.2-1.8 (elaborate drapery, multi-layer costume)
- Background uniformity: 50-70 (higher detail, 6-12% edge activity in lower frame)
- Background detail percentage: 6-12%
- Aspect ratio: 2:3 or 3:4 (tableau within portrait frame)
- Light ratio: 2.2-2.8
- Shadow floor luminance: 35-60
- Highlight ceiling: 200-220
- Grain signature: 60-85
- Warm bias: +0.10 to +0.14
- Saturation: 0.28-0.35

#### Technique – Female Subject

**Facial Architecture:** Refined aristocratic features remain PRIMARY identity anchor within tableau. High cheekbones, defined jaw, large expressive eyes MUST be recognizable despite composition complexity. Eyes convey core psychological narrative (narcissism via direct gaze, melancholia via downward look, defiance via steely focus, vulnerability via softness). Facial geometry defined through lighting (cheekbone highlights, eye catchlights, subtle jaw shadowing). Composition emphasizes face as psychological focal point, even within complex staging.

**Psychological Narrative (Female):** Tableau expresses female psychological state via pose, props, costume interaction, facial expression, and lighting. Examples:
- "Narcissism": Mirror positioned near face, subject gazing at reflection or toward camera. Expression confident, slightly proud. Costume luxurious (jewels, elaborate drape). Lighting emphasizes facial beauty.
- "Melancholia/Vulnerability": Reclining or seated inward pose, hand to temple or across body. Expression downcast or pensive. Costume draped softly (veils, flowing fabrics). Lighting creates shadowed introspection.
- "Revenge": Standing proud, hand gesture commanding or grasping symbolic object (dagger). Expression intense, defiant. Costume dark, dramatic. Props symbolic (weapon, symbol of power). Lighting creates dramatic shadows emphasizing jaw and eye intensity.
- "La Folie" (Madness): Complex gesture, fragmented prop arrangement, theatrical costume. Expression wild or unfocused. Multiple symbolic elements. Lighting creates psychological disorientation via uneven highlight distribution.

**Silhouette & Costume (Female):** Multiple-layer elaborate costume emphasizes feminine form (crinoline, bustle, fitted bodice depending on decade). Costume complexity conveys psychological complexity. Fabrics (silk, velvet, taffeta, lace, transparent layers) create visual richness and shadow play. Fold ratio 1.2-1.8 (elaborate drapery, fabric folds prominent, texture readable). Accessories plentiful (multiple hats/crowns, veils, numerous symbolic props, jewelry). Hair extremely ornate (period-styled but maximalist, jewelry-adorned, contributes to psychological narrative). Overall silhouette feminine, elegant, complex.

**Framing & Composition:** Complex, layered composition. Head-to-full-body variable but FACE remains visually primary. Multiple subjects or sitter + props + architectural elements in single frame. Negative space distributed thoughtfully around composition. Foreground (face/upper body, sharp, detail-rich). Middle ground (hands, props, moderate detail). Background (textile, architectural elements, lower detail). Face positioned to maintain recognition despite background complexity.

**Lighting Setup:** Sophisticated multi-plane lighting. Key light 45-60° lateral or top-light. Fill from reflector/diffuser supporting but not overwhelming. Optional rim light on hair/shoulder edge. Possible secondary light on props (dagger glint, mirror reflection, symbolic element emphasis). Light ratio 2.2-2.8 maintained. Complexity justified by psychological tableau intent. Lighting hierarchy: face brightest/most detailed, then props/costume, then background. This visual hierarchy keeps facial identity primary despite compositional complexity.

**Props & Setting (Female):** Mirrors incorporated for self-reflection theme (double image possible, subject gazing at reflection or camera through reflected mirror). Symbolic props convey psychological content (dagger = revenge, crown = royalty/narcissism, flowers = melancholia/beauty, mask = identity exploration, chains = constraint, key = liberation). Architectural elements (columns, archways, draped backdrop) situate tableau in theatrical space. Setting appears conceptual/psychological, NOT realistic interior. Multiple depth planes created via prop positioning and background architectural suggestion.

**Retouching Aesthetic (Female):** Hand-retouched, visible but artistic. Skin refined emphasizing feminine beauty, eyes sharpened and expressive (psychological focus), facial features prominently emphasized within theatrical context, selective background darkening (face remains brightest/most detailed), costume texture enhanced via retouching (folds emphasized, symbolic props highlighted). Evidence of artistic intention and conceptual direction visible. Facial identity preserved as primary anchor despite complex composition.

**Validation – Female Mode 3:**
- Head_prominence 0.88-1.12 (must be visible and recognizable despite complexity)
- Pose_variance 3-8
- Tonal_zones count 190-220
- Feminine facial recognition MAINTAINED as primary identity (cheekbone/eye prominence visible, face brightest/most detailed area)
- Psychological narrative coherence verified (props, pose, expression, costume integrate meaningfully to convey female psychological state)
- Silhouette feminine and recognizable (crinoline/bustle/tapered profile evident)
- Fold_ratio 1.2-1.8
- Background_detail 6-12% (complex but not overwhelming face recognition)
- Light_ratio 2.2-2.8
- Face positioned as visual/psychological focal point within complex composition
- Costume authenticity verified
- Warm_bias and saturation within ranges

#### Technique – Male Subject

**Facial Architecture:** Masculine features remain PRIMARY identity anchor despite tableau complexity. Jaw definition, brow ridge, eye intensity MUST be recognizable. Eyes convey psychological state (determination, vulnerability, intensity, introspection). Facial geometry defined via lighting. Face remains psychological focal point within composition.

**Psychological Narrative (Male):** Tableau expresses male psychological state through masculine presentation:
- "Commanding Presence": Standing pose, controlled gesture, intense expression. Costume formal/authoritative. Lighting emphasizes jaw and brow. Props suggest power (walking stick, authoritative position).
- "Brooding Introspection": Seated or reclining, hand to face or inward gesture. Expression contemplative, intense. Costume dramatic. Props suggest intellectual/emotional depth.
- "Defiance/Intensity": Standing proud with commanding gesture, intense facial expression, dramatic costume. Props symbolic of strength or resistance. Lighting creates shadows emphasizing masculine features.

**Silhouette & Costume (Male):** Period formal or theatrical costume (tailcoat, jacket, vest, dramatic robes if narrative allows). Fold ratio 1.2-1.8 (complex jacket/costume draping). Multiple fabric layers create visual richness. Accessories (walking stick, symbolic prop, period hat, jewelry if appropriate). Hair elaborate (period-styled, possibly facial hair), contributes to psychological narrative. Overall silhouette masculine, composed, complex.

**Framing & Composition:** Complex composition with face positioned as PRIMARY identity anchor. Head-to-full-body variable. Props and architectural elements support narrative. Face remains most visible/detailed area. Multiple depth planes with face in foreground (sharp, detail-rich), props in middle ground, background supporting.

**Lighting Setup:** Multi-plane lighting maintaining face prominence. Key light 45-60° lateral or top-light. Fill supporting. Possible secondary light on symbolic prop. Light ratio 2.2-2.8. Hierarchy: face brightest/most detailed, props secondary, background supporting.

**Props & Setting (Male):** Symbolic props convey psychological content (walking stick = authority, weapon = strength/defiance, intellectual objects = contemplation, symbolic elements = narrative anchor). Architectural elements situate tableau. Setting conceptual/psychological.

**Retouching Aesthetic (Male):** Hand-retouched, subtle but artistic. Skin refined, eyes intensified and expressive (psychological focus), jaw and brow definition emphasized, facial strength conveyed, background selectively darkened (face remains brightest), props highlighted. Facial identity preserved as primary anchor within composition.

**Validation – Male Mode 3:**
- Head_prominence 0.88-1.12 (visible and recognizable)
- Pose_variance 3-8
- Tonal_zones count 190-220
- Masculine facial recognition MAINTAINED as primary identity (jaw/brow prominence visible, face brightest area)
- Psychological narrative coherence verified (male psychological state conveyed through props, pose, expression, costume)
- Masculine silhouette evident and recognizable
- Fold_ratio 1.2-1.8
- Background_detail 6-12%
- Light_ratio 2.2-2.8
- Face positioned as visual/psychological focal point
- Costume authenticity verified
- Warm_bias and saturation within ranges

#### Automated Corrections
- *(Phase 4 appends corrections here)*

---

### Universal Technique Anchors (All Modes, All Gender)

- **Facial Architecture Anchor (Gender-Specific):** Female subjects emphasize cheekbone prominence, refined jaw, eye size/expression, soft facial contours. Male subjects emphasize jaw definition, brow ridge, eye intensity, angular facial contours. Both genders: head-to-body ratio 1:7 to 1:8 (refined proportion, not exaggerated). Facial recognition priority maintained across all modes.
- **Pose Integrity Anchor (Gender-Specific):** Female pose conveys psychological state through gesture grace (hand position, torso flow, head incline). Male pose conveys state through controlled strength (hand position, torso angle, head bearing). Shoulder/hip angle differential 5-25° (modest asymmetry). Head tilt 0-20°. Gesture purposeful, not random.
- **Scale Hierarchy Anchor:** Anatomical stylization limits: head 12-15% of total frame area (MODE_1 higher ~15%, MODE_3 lower ~12%). Favors refinement over distortion. Face remains recognizable focal point across all compositions.
- **Material Authenticity Anchor:** Wet collodion/albumen mandatory. NO digital filters, NO modern post-processing, NO contemporary emulsions. Surface characteristics: grain texture (45-85), albumen paper sheen, hand-retouching evidence (subtle, artistic), face detail preserved.
- **Period Consistency Anchor:** 1856-1899 production methods only. Large-format glass plates, natural studio lighting (skylights), hand-retouching with paint/pencil, gold chloride toning, albumen paper. NO electric lighting, NO modern darkroom chemicals, NO digital tools.
- **Production Method Anchor:** Characteristic imperfections: minor vignetting (edge darkening), slight uneven toning, visible retouching evidence (artistic), variable highlight bloom (natural to albumen). NO digital perfection, NO algorithmic smoothing.
- **Canvas Adaptation Anchor:** Ratio locked to declared 2:3, 3:4, or 4:3 (native NanoBanana support). Reframe composition entirely to target ratio; do not crop or letterbox. Face remains recognizable focal point within reframed composition.
- **Gender Expression Consistency Anchor (CRITICAL):** Female subjects preserve feminine presentation across all modes. Facial features (cheekbone emphasis, eye expression), costume construction (fitted waist, period silhouette), jewelry (delicate, period-appropriate), hair styling (updo or period feminine style) remain consistently feminine. Male subjects preserve masculine presentation. Facial features (jaw, brow), costume construction (formal tailoring), accessories (authoritative), hair (masculine period style) remain consistently masculine. Subject's core identity recognizable across all three modes. Likeness preserved through consistent gender-specific facial and bodily presentation.

---

## 5) Wardrobe, Props & Setting Conventions

**TEMPORAL WARDROBE MANDATE:**

**Artist active period:** 1856-1899. ALL wardrobe elements must be period-accurate to this 43-year span. NO modern fashion, NO contemporary fabrics, NO anachronistic accessories.

**CRITICAL PROHIBITION:** No modern elements survive transformation. Complete wardrobe replacement required. Subject must be fully redressed in 1856-1899 costume—no contemporary pieces retain.

**ANACHRONISM VIOLATION EXAMPLES (MUST AVOID):**
- ❌ Modern hairstyles (undercuts, fades, contemporary women's cuts post-1900)
- ❌ Contemporary eyeglasses (modern frames anachronistic for pre-1850s-1890s periods)
- ❌ Synthetic fabrics (polyester, nylon, acrylic, spandex—ALL post-1930s, anachronistic)
- ❌ Modern undergarments visible (sports bras, modern bra straps)
- ❌ Anachronistic footwear (modern shoes, athletic wear)
- ❌ Contemporary makeup styles or cosmetics (modern makeup development post-1900s)
- ❌ Modern jewelry (plastic, clear plastic, contemporary alloys)
- ❌ Contemporary accessories (watches, modern hair clips)

**MODE-SPECIFIC WARDROBE TRACKS (Gender-Differentiated):**

**MODE_1: Intimate Headshot – Wardrobe**

**Adult Feminine:**
- Neckline: Modest (collarbone to shoulder visible), high at throat or slightly off-shoulder (period-appropriate variants)
- Bodice: Fitted period gown bodice (silk, velvet, or taffeta, 1856-1899 silhouette—crinoline 1860s tight corsetry, bustle 1870s-1880s rear emphasis, tapered S-bend 1890s)
- Shoulders: Visible, squared (1860s-1870s) or sloped/off-shoulder variants (theatrical)
- Sleeves: Short capped sleeve or sleeveless (neck/shoulder emphasis for portrait)
- Jewelry: Optional cameo brooch, pearl necklace, gold earrings—small scale, does NOT distract from face
- Hair: Arranged period-appropriately updo (typical for 1860s-1890s studio portraiture), hair-up with ringlets possible. Hair contributes to face frame but does NOT obscure facial features
- Makeup: Period-subtle (no modern makeup). Lip color acceptable if period-accurate red/brown pigment. NO modern makeup looks

**Adult Masculine:**
- Neckline: White collar visible (standard 19th century formal wear)
- Chest/Jacket: Period jacket or vest (dark wool, tailored to period), jacket/waistcoat primary
- Shoulders: Visible, squared (masculine tailoring emphasis)
- Neck Wear: Period necktie, cravat, or stock (varies by decade within 1856-1899)
- Hair: Period-appropriate masculine style (mid-to-long 1850s-1880s, shorter by 1890s). Parted or swept back. Facial hair (beard/moustache) acceptable if historically appropriate to chosen decade
- No jewelry typically (watch chain possible if period-appropriate)

---

**MODE_2: Dramatic Pose – Wardrobe**

**Adult Feminine:**
- Neckline: Variable (modest to theatrical—off-shoulder, sweetheart neckline, strategic drapery for artistic effect acceptable)
- Bodice: Elaborate period gown (silk, taffeta, velvet—multiple layers typical for theatrical effect)
- Silhouette: Crinoline (1860s) creates full skirt volume, bustle frame (1870s-1880s) emphasizes rear and fitted front, tapered S-bend (1890s) cinches waist and creates forward-tilted silhouette
- Sleeves: Variable (bell sleeves, dropped shoulders, off-shoulder, sleeveless—period-appropriate to decade and theatrical intent)
- Drapery: Elaborate, theatrical (veils, shawls, flowing fabrics create psychological narrative)
- Jewelry: Plentiful (brooches, necklaces, bracelets, earrings—period-accurate materials: gold, pearls, cameos, semi-precious stones)
- Accessories: Feathered hats, turbans, fans, gloves (kid leather or silk, long acceptable), shawls/wraps (cashmere or silk, luxurious drape), symbolic props integrated into costume
- Hair: Elaborate, period-styled (updo or down with ringlets, jewelry-adorned, contributes to overall silhouette and psychological narrative)
- Makeup: Period-subtle, NO modern makeup

**Adult Masculine:**
- Neckline/Chest: White collar visible, period neckwear (cravat, necktie, stock)
- Jacket/Coat: Formal tailcoat, waistcoat, or theatrical costume if appropriate to narrative
- Silhouette: Masculine (broad shoulders, tapered waist, structured jacket/coat silhouette)
- Drapery: Jacket/coat folds emphasized via lighting and pose
- Jewelry: Walking stick possible, pocket watch chain possible (period-appropriate)
- Accessories: Period hat if appropriate (top hat, formal hat), cane/walking stick (symbolic), possibly theatrical props if narrative warrants
- Hair: Period-styled masculine (length appropriate to decade), possible facial hair (beard/moustache if historically appropriate)

---

**MODE_3: Psychological Tableau – Wardrobe**

**Adult Feminine (Most Elaborate):**
- Costume Complexity: Multi-layer complex gown or theatrical costume (Cleopatra, Diana, maiden, widow, mythological figure, psychological archetype)
- Period Silhouette Mandatory: 1856-1899 base silhouette but theatrical interpretation allowed (elaborate crinoline, exaggerated bustle, complex S-bend tapers)
- Multiple Fabric Layers: Create visual richness, shadow play, psychological depth
- Drapery: Elaborate, flowing, theatrical (veils layered, shawls positioned dramatically, transparent fabrics creating translucency effects)
- Accessories: Plentiful (multiple hats stacked or adjacent, multiple veils, crowns possible, numerous symbolic props—dagger, flowers, mask, key, chains—chosen to convey psychological narrative)
- Jewelry: Abundant (brooches, necklaces layered or multiple, bracelets, earrings, rings—period-accurate materials)
- Hair: Extremely ornate (period-styled but maximalist, jewelry-adorned, elaborate braids possible, ringlets, height possible, contributes to psychological narrative and overall silhouette)
- Overall Construction: Costume complexity reflects psychological complexity. Dark dramatic layering for revenge theme, luxurious draping for narcissism theme, mournful drapery for melancholia theme

**Adult Masculine (If Multiple Subjects or Complex Narrative):**
- Costume: Period formal wear (tailcoat, waistcoat) or theatrical costume complementary to female subject or narrative
- Silhouette: Masculine (broad shoulders, tapered waist, formal or theatrical tailoring)
- Props: Symbolic (walking stick = authority, weapon = strength, intellectual objects = contemplation)
- Hair/Beard: Period-styled, elaborate if contributing to psychological narrative

---

**Fabric Behavior:**

- **Silk:** Lustrous, drapes with flowing curves, catches light on highlights, creates sheen characteristic of luxury fabrics. Deep jewel tones (purples, reds, greens, blacks, golds) typical
- **Velvet:** Matte surface with directional nap, creates texture visible in shadowed areas, absorbs light, luxurious appearance. Period velvet slightly stiff compared to modern, folds more geometric
- **Taffeta:** Crisp, structured, creates defined folds and texture pattern. Period taffeta silk-based, warm undertones
- **Linen:** Lighter weight, natural wrinkles and texture inherent, creates readable fold pattern. Period linen handwoven with visible irregularities
- **Lace:** Decorative overlay, creates shadow patterning via light transmission. Period lace hand-made or industrial (circa 1850s-1890s mechanical lace production steady)
- **Jewelry & Accessories:**
  - Brooches: Gold (common), cameo (popular), enamel, pearls, garnets (period gems)
  - Necklaces: Pearl strands (1860s-1890s fashion), gold chains, lockets (nostalgic, sentimental)
  - Earrings: Drop earrings (period-appropriate for women), pearls, gold, semi-precious stones
  - Bracelets: Gold bangles, cameo bracelets, pearl bracelets (period-common for women)
  - Headwear: Bonnets (1860s), turbans (theatrical), feathered hats (1880s-1890s especially), veils (ceremonial or theatrical)
  - Fans: Silk or paper, ornate handles, accessory of status and theatricality
  - Gloves: Kid leather or silk, long (elbow-length acceptable), white or colors matching dress
  - Shawls/Wraps: Cashmere or silk, luxurious drape, theatrical use in tableau

**Setting Conventions:**

- **Primary Setting:** Nadar studio, Paris. Large interior space with north-facing skylights (natural light source). Studio walls neutral (white or light gray), subject framed against dark textile backdrop (studio convention for portraiture)
- **Background Elements:** Dark textile backdrops (black, deep brown, charcoal—standard for studio). Occasionally painted theatrical backdrops (architectural elements, landscape suggested). Mirrors incorporated for self-reflection theme (especially MODE_3). Ornate furniture optional (chair, chaise, console tables—period-styled, Rococo revival typical for 1860s-1880s luxury studios). NO modern furniture, NO contemporary studio equipment visible
- **Atmospheric Quality:** Studio interior—controlled, refined, theatrical. NO outdoor setting, NO architectural exteriors. Interior intimacy emphasis. Light streaming from studio skylight (natural direction, creates modeling light). NO electric lighting visible (anachronistic for Pierson era)

---

## 6) Safety & IP Constraints (Hard Rules)

**ABSOLUTE PROHIBITIONS:**

1. **No Full Nudity:** Pierson's series includes partially draped studies. For NanoBanana generation: NO exposed genitalia or full nudity. Acceptable: shoulders, partial upper back, implied nudity via strategic drapery (classical aesthetic, artistic context)

2. **No Anachronisms:** Period constraint **1856-1899 MANDATORY**. Forbidden: electric lighting (post-1880s), contemporary smartphones/cameras, modern architecture, synthetic fabrics, modern eyeglasses (if absent, stay absent), contemporary hairstyles (post-1920s), modern makeup (post-1930s), contemporary jewelry styles

3. **No Offensive Stereotypes:** Subject's gender identity, ethnicity, social status treated with dignity consistent with period portraiture conventions. Romantic-era theatrical expression (feigned emotion, psychological states) acceptable; offensive stereotyping NOT

4. **No IP Violations:** Generated images must NOT replicate specific existing Pierson photographs (recognizable exact face positioning, identical pose, identical setting). Instead, synthesize NEW original compositions using learned forensic signatures. Intent: Create *authentic genre examples*, NOT derivative copies. Uniqueness required per output

5. **No Psychological Exploitation:** Psychological narratives (melancholy, rage, narcissism) expressed through artistic context (theatrical portraiture). Avoid fetishization, voyeurism, or explicit trauma representation

6. **No Text Violations:** Optional studio attribution permitted (Section 8 only). NO modern watermarks, NO contemporary labels, NO explanatory text. Only period-authentic studio marks acceptable

**HARD CONSTRAINTS (Renderer-Enforced):**

- Max aspect ratio: 1.35 (matches 4:3 native ratio)
- Min aspect ratio: 0.60 (matches portrait extremes)
- Medium: **Photographic ONLY** (wet collodion/albumen)
- Color mode: **RGB only** (albumen rendered as RGB)
- Resolution: **1200×1365 optimal** (±20% tolerance)
- Material authenticity: **NO digital filters, NO modern post-processing, NO Instagram effects**

**IP SAFEGUARD DECLARATION:** Generated images are original compositions inspired by Pierson's forensic style. NO exact replication of documented photographs. Each output is NEW artwork synthesizing learned patterns. Artistic intent: genre exemplar, not derivative

---

## 7) Composition & Lighting Patterns

**MODE_1: Intimate Headshot – Compositional Archetype**

- **Framing:** Face occupies 60-75% of frame. Hair, shoulders, partial neck visible. Upper-center positioning, slightly off-axis (asymmetrical classical framing)
- **Background:** Dark, minimal detail. Textile or shadow (uniform, supporting). Occupies 30-40% frame
- **Lighting Signature:** Single dominant key light 45-60° lateral, 45-60° elevation. Creates facial modeling emphasizing gender-specific facial architecture (feminine: cheekbone prominence; masculine: jaw definition)
- **Expression & Gender:** Psychological intensity rendered through gender-consistent presentation. Female: subtle eye movement, refined expression. Male: controlled masculine restraint, steely intensity
- **Emotion Temperature:** Cool (introspection) OR warm (narcissism, pride). Avoid neutral blandness
- **Composition Elements:** Negative space above head intentional. Shoulders frame face. Gown/jacket bodice visible, minimal fabric detail. Expression and eyes carry emotional weight. Face remains recognizable focal point

**MODE_2: Dramatic Pose – Compositional Archetype**

- **Framing:** Full-length or three-quarter figure (head to waist/knees visible). Negative space asymmetrically distributed
- **Body Position:** Standing, seated, or reclining. Gesture deliberate, theatrical. Gender-specific silhouette emphasized (feminine: crinoline/bustle curves; masculine: broad shoulders, tapered waist)
- **Background:** Dark textile or partially detailed (architectural element). Occupies 40-50% frame
- **Lighting Signature:** Key light 45-60° lateral OR top-light (emphasizes silhouette and costume drape). Light ratio 2.2-2.8. Shadows define garment folds, fabric texture
- **Costume Emphasis:** Elaborate gown/jacket visible, drapery pattern evident, fabric texture readable. Fold geometry dramatic
- **Gesture-Expression Coherence:** Hand position and facial expression convey consistent psychological narrative. Gender-consistent delivery (feminine grace, masculine controlled strength)
- **Compositional Narrative:** Multiple depth planes. Narrative coherence—pose, expression, costume tell psychological story within gender-specific presentation

**MODE_3: Psychological Tableau – Compositional Archetype**

- **Framing:** Complex, layered. Head-to-full-body variable. Multiple subjects or sitter + props + architectural elements. FACE remains recognizable focal point despite complexity. Negative space distributed thoughtfully. Foreground-middle-background layering
- **Composition Logic:** Theatrical staging expressing psychological state. Mirror possible (self-scrutiny). Props positioned meaningfully (dagger, crown, flowers, mask, symbolic to narrative). Multiple depth planes
- **Lighting Signature:** Multiple apparent light sources OR sophisticated single-source with reflectors. Key light 45-60° lateral or top-light. Optional rim light. Atmospheric effects permitted. Light ratio 2.2-2.8 maintained. Hierarchy: face brightest/most detailed, props secondary, background supporting
- **Gender-Specific Narrative:** Psychological content conveyed through gender-consistent presentation (feminine grace expressing psychological state, masculine strength expressing psychological state)
- **Props & Setting Integration:** Props symbolic (dagger = revenge, crown = narcissism/royalty, flowers = melancholia, mask = identity fluidity, mirror = self-scrutiny). Architectural elements situate tableau in conceptual/psychological space (NOT realistic interior). Gender-specific costume complexity (elaborate feminine gown or masculine formal/theatrical wear)
- **Psychological Focal Point:** Face remains PRIMARY psychological anchor within tableau complexity. Eyes convey core emotional content. Composition emphasizes face as emotional/narrative center while supporting theatrical elements

**UNIVERSAL LIGHTING PATTERNS (All Modes, Both Genders):**

- **Key Light Position:** Single dominant source at 45-60° lateral, 45-60° above subject. Creates facial modeling: feminine (cheekbone highlight, eye definition, soft contours), masculine (jaw emphasis, brow ridge, angular structure)
- **Intensity Ratio:** 2.2-2.8 (dramatic Romantic-era lighting)
- **Fill Light:** Minimal, from diffuser/reflector. Fills shadow side without erasing shadow detail
- **Highlight Behavior:** Specular highlights on highest points (forehead, cheekbone, nose, shoulder). Bloom slightly (NOT sharp, NOT crushed)
- **Background Rendering:** Uniformly dark textile (black, deep brown, charcoal). Uniformity 40-70. Supports subject, does NOT distract
- **Atmospheric Depth:** Foreground (face/body, primary focus, sharp/slightly diffused). Middle ground (hands, props, moderate focus). Background (textile, shadow, lower detail). Single-plane acceptable if intentional
- **Shadow Quality:** Readable but defined (NOT crushed black). Shadow detail in clothing, jewelry, hair texture preserved
- **Highlight Ceiling:** Specular highlights approach but do NOT exceed 220 (respects albumen paper ceiling). Slight bloom acceptable

---

## 8) Typography & Text Integration (If Historically Present)

**STUDIO MARK & ATTRIBUTION (Optional):**

Pierson's prints typically bore studio attribution. For NanoBanana generation:

- **Optional studio mark:** Bottom-right corner, subtle, period-authentic typography (serif font, 19th-century typeface style)
- **Text Placement:** Outside main compositional area (corner, margin, edge). Does NOT intrude on sitter or primary subject
- **Text Style:** Serif font (Garamond, Times Roman equivalent). Size 8-14pt (visible but subordinate). Color: mid-gray to dark gray (matches albumen paper tone, NOT pure black)
- **Text Content Examples:** "Nadar, Paris" | "Mayer et Pierson" | "Atelier Nadar" (period-accurate studio designations)
- **Historical Accuracy Validation:** If unsure of historical accuracy, omit text. Generated images without text ALWAYS acceptable

**MANDATORY CONSTRAINTS:**

- ❌ NO modern watermarks
- ❌ NO contemporary typography
- ❌ NO explanatory labels, artist signatures, or meta-text
- ❌ NO text overlaid on composition
- ✅ ACCEPTABLE: Period studio marks, period-accurate typography, corner attribution only

**TEXT PROHIBITION EXCEPTIONS:**

Text rendering ONLY if studio mark attribution included per specifications above. NO other text justified.

---

END FRAMEWORK

---

**APPENDIX: Corpus Statistics & Forensic Reference**

| Category | Metric | Mean | Std | Min | Max | Mode 1 | Mode 2 | Mode 3 |
|----------|--------|------|-----|-----|-----|--------|--------|--------|
| **1. Anatomical** | head_prominence | 1.00 | 0.09 | 0.85 | 1.14 | 0.92-1.14 | 0.85-1.05 | 0.88-1.12 |
| | pose_variance | 5.2 | 1.8 | 2.1 | 8.9 | 2-5 | 4-6 | 3-8 |
| **2. Edge Quality** | grain_signature | 62.8 | 12.4 | 42 | 85 | 50-75 | 55-80 | 60-85 |
| **3. Tonal** | tonal_zones | 187 | 18 | 160 | 220 | 160-200 | 180-210 | 190-220 |
| | contrast_ratio | 2.34 | 0.45 | 1.82 | 3.18 | 1.8-3.2 | 1.8-3.2 | 1.8-3.2 |
| | shadow_floor | 48 | 9 | 35 | 68 | 35-50 | 35-55 | 35-60 |
| **4. Color** | warm_bias | +0.122 | 0.04 | +0.078 | +0.168 | +0.10 to +0.14 | +0.10 to +0.14 | +0.10 to +0.14 |
| | saturation | 0.31 | 0.04 | 0.25 | 0.38 | 0.28-0.35 | 0.28-0.35 | 0.28-0.35 |
| **6. Lighting** | light_ratio | 2.46 | 0.38 | 1.89 | 3.28 | 2.2-2.8 | 2.2-2.8 | 2.2-2.8 |
| **7. Fabric** | fold_ratio | 1.18 | 0.34 | 0.78 | 1.82 | 0.8-1.1 | 1.0-1.4 | 1.2-1.8 |
| **8. Background** | aspect_ratio | 0.888 | 0.28 | 0.598 | 1.334 | 2:3/3:4 | 3:4/4:3 | 2:3/3:4 |
| | bg_detail_pct | 5.1 | 2.4 | 1.2 | 11.8 | 1-3% | 3-8% | 6-12% |

**Validation Thresholds (MuseoMorph Forensic Rubric v1.3):**
- Deviation tolerance: ≤15% from corpus mean = max points per category
- Deviation 15-25% = partial points
- Deviation >25% = zero points (failure, requires correction)
- **Composite score threshold: ≥85/100** (all 8 categories contributing)
- **Minimum per category: 10 points** (no single category failure)

---
