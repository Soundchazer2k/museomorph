---
id: edward_steichen
group: "Photography"
movement: "Pictorialism → Straight Photography → Commercial Photography"
artist: "Edward Steichen"
display_name: "Edward Steichen – Pictorialist to Commercial Modernist Photography (1900–1973)"
style_scope: single-artist

ratios: ["3:4", "4:5", "2:3"]
ratios_status: approved
ratios_notes: >
  Portrait-dominant ratios reflect corpus distribution. 3:4 and 4:5 serve studio portrait
  intimacy (85% of work); 2:3 accommodates full-body editorial fashion. No 1:1 or landscape
  ratios authenticated in corpus. Steichen's studio practice prioritized vertical composition
  for magazine covers and gallery exhibition prints.

modes: 
  - "Studio Portrait – Vanity Fair Era (1920–1940)"
  - "Commercial/Editorial Fashion (1925–1940)"
  - "Documentary/Character Study (1940–1955)"

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
  layout_hint: "Single-subject focus mandatory; no multi-figure compositions"
  identity_priority: ["silhouette", "gesture", "face-proportions"]

hero_image: null

about: >
  Edward Steichen (1879–1973) revolutionized photography across three distinct careers:
  Pictorialist pioneer (soft-focus, handcrafted platinum prints); commercial modernist
  (Vogue/Vanity Fair, 1923–1938, establishing fashion photography as art); and documentary
  curator (MoMA director, "The Family of Man" 1955). His studio portraits synthesized fine
  art aesthetics with commercial precision, using sophisticated multi-light systems and
  psychological depth to elevate celebrity and fashion photography. His technical mastery—
  from darkroom chemistry to lighting design—and aesthetic authority established photography's
  legitimacy as a primary modern art form.

composition_constraints:
  max_subjects: 1
  subject_interaction: prohibited
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

---

# Edward Steichen Photography Framework v4.4 (NanoBanana Edition)

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio (3:4, 4:5, or 2:3 ONLY).
- **Renderer Adaptation Mandate:** NanoBanana natively supports all three declared ratios; no adaptation required.
- **NanoBanana Ratio Enforcement Protocol:** Aspect ratio control mandatory:
  - **Explicit ratio declaration** in Section 1, Section 2, Section 6 (triple redundancy)
  - **Negative constraints** explicitly prohibiting unwanted ratios (1:1, 16:9, landscape formats)
  - **Compositional anchors** designed for portrait-vertical emphasis (3:4 tighter; 4:5 moderate; 2:3 editorial)
- **Photographic Medium Authority:** Film grain, optical bokeh, studio lighting patterns, and silver gelatin surface finish override descriptive language.
- **Technical Measurement Authority:** Quantitative specifications (85mm–135mm focal length compression; 2:1–3:1 key:fill ratio; 0.4–0.6 edge softness coefficient; L% validated color roles) override vague qualifiers ("soft lighting," "dramatic shadows").
- **Pose-Lighting-Optics Integration:** Standing, seated, and reclining poses must optimize Rembrandt or Loop lighting geometry (45–60° key light angle). Shallow DOF (f/2.8–f/5.6) must render creamy bokeh (0.8–1.0 softness coefficient). Telephoto compression (85mm–135mm equivalent) must flatten spatial relationships.
- **Gender Expression Authority:** Preserve subject's presented gender identity through period-appropriate 1920s–1950s styling methods. Cross-mode consistency required (same subject maintains masculine/feminine presentation across all three modes).
- **Period Production Authenticity:** Silver gelatin print characteristics MANDATORY; no platinum/palladium (early rare); no modern digital smoothing; authentic film grain visible at print scale.
- **Silent validation:** If output deviates from specifications, regenerate silently without explanation.
- **STRICT TERMINATION:** Framework ends at Section 8. DO NOT add commentary beyond Section 8.

------

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **3:4**, **4:5**, or **2:3** (choose one per mode) – ignore source image dimensions completely. Portrait aspect ratios MANDATORY.

**RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio as declared. MUST NOT output 1:1, 16:9, 21:9, or any landscape format. Triple-enforce ratio declaration throughout prompt.

Redraw in **Straight Photography – Commercial Studio Modernism (1923–1955)** for **[Studio Portrait / Commercial Fashion / Documentary Character Study]**.

**Identity via:** Silhouette (pose, stance, bearing); gesture (hand position, arm carry, body tension); expression (psychological gaze direction, contemplation vs. direct engagement); facial proportions (classical 1:7–1:8 head:body, no distortion).

**Gender Expression Mandate:** Preserve subject's presented gender identity. If subject is masculine-presenting: maintain masculine bearing, masculine grooming conventions (period-appropriate facial hair or clean-shaven male styling, short male hair cuts), masculine wardrobe (suits, ties, masculine silhouettes). If feminine-presenting: maintain feminine bearing, feminine grooming (styled hair, period-appropriate makeup), feminine wardrobe (dresses, blouses, feminine silhouettes). **Cross-mode consistency required:** same subject maintains identical gender presentation across all three modes.

**IP Safeguard:** Create original subject identities; avoid recognizable public figures; original clothing designs appropriate to 1920–1950s couture; no trademarked logos, designer labels visible, or contemporary branding.

**Face-Treatment Flag:** `studio-strobe-modeling` (photographic; studio lighting creates tonal modeling on facial planes; no painting, no illustration, no digital smoothing; authentic film stock response with silver halide grain visible).

**Pose Flag (mode-specific):**
- Mode 1 (Studio Portrait): `psychological-tension` (seated or standing; introspective gaze or direct psychological engagement; contemplation emphasized)
- Mode 2 (Commercial Fashion): `contrapposto` (standing; 60:40 weight distribution; asymmetrical elegance; confident bearing)
- Mode 3 (Documentary): `candid-adjacent` (varied poses; standing, asymmetrical; psychological authenticity over glamour)

**Canvas Control Flag:** `strict-reframe` (Recompose subject to exact aspect ratio; no padding, letterboxing, or pillarboxing; intelligent spatial recomposition within portrait boundaries).

**Style Dominance:** Straight Photography aesthetic—sharp focus, directional studio lighting (45–60° key light angle), sophisticated multi-light systems, dramatic shadow modeling, classical composition, elegant restraint. **CRITICAL:** No pictorialist soft-focus diffusion, no painterly effects, no digital post-processing mimicking traditional media. Pure photographic authenticity.

**Mode Selector:** Choose exactly ONE:
- **Studio Portrait – Vanity Fair Era** (seated or standing; tight composition 40–50% subject dominance; psychological intensity; glamorous artificiality)
- **Commercial/Editorial Fashion** (full-body or head-to-knee; 4:5 or 2:3 ratio; fashion-forward couture emphasis; model-like confidence; professional elegance)
- **Documentary/Character Study** (wider framing 50–70%; environmental context; civilian dress; psychological authenticity; documentary mood)

**Final Ratio Confirmation:** Output MUST be exactly **[X:Y ratio as declared]**. NO EXCEPTIONS. Portrait orientation MANDATORY. No landscape, no square, no ultra-wide formats.

------

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA SUPPORTED RATIOS – All Native (No Adaptation):**

✅ `3:4` (portrait, 864×1184px) – Tight studio intimacy; subject-dominant framing (65–75% of frame)
✅ `4:5` (portrait, 896×1152px) – Balanced studio framing; moderate environmental context (40–50% subject)
✅ `2:3` (portrait, 832×1248px) – Editorial fashion vertical; full-body accommodation (head-to-knee framing possible)

**MANDATORY RATIO SELECTION:** Choose one ratio per generation. If user specifies unsupported ratio (1:1, 16:9, panoramic), apply nearest portrait adaptation: 1:1 → 3:4 (add vertical negative space); 16:9 → 2:3 (recompose for vertical editorial); landscape any → 3:4 (default portrait tight).

**CANVAS RECOMPOSITION STRATEGY – Mode-Specific:**

**Mode 1: Studio Portrait – Vanity Fair Era**
- **Ratio Status:** 3:4 (native, tight framing preferred) OR 4:5 (native, moderate framing)
- **Reframing Method:** Strict recomposition; subject repositioned to optimize Rembrandt/Loop lighting geometry within portrait boundaries
- **Spatial Allocation:** Subject occupies 65–75% of frame (dominant, psychologically intense); negative space 25–35% (usually background studio or graduated neutral tones)
- **Background Treatment:** Plain studio background (white, gray, or tonal neutral); minimal distraction; focus entirely on subject face and torso; background blur/falloff optional
- **Format Justification:** 3:4 ratio creates vertical emphasis for gallery and magazine presentation; tighter crop amplifies psychological intensity; historically authentic to Steichen's Vanity Fair cover photography

**Mode 2: Commercial/Editorial Fashion**
- **Ratio Status:** 4:5 (native, preferred) OR 2:3 (native, extended full-body possible)
- **Reframing Method:** Recompose for full-body or head-to-knee framing; subject positioned for elegant asymmetrical silhouette; garment drapery optimized for visual impact
- **Spatial Allocation:** Subject 50–65% (fashion-forward, garment is co-primary); background/environment 35–50% (can include studio set, draped fabric, or environmental context for fashion narrative)
- **Background Treatment:** Can be plain (focus on couture) or stylized set (coordinated with garment narrative); background must complement, not compete with clothing
- **Format Justification:** 4:5 or 2:3 accommodate full-body presentation required for fashion editorial; vertically oriented supports magazine layout standards (cover/spread); historically matches Vogue/Vanity Fair publication dimensions of 1920s–1930s

**Mode 3: Documentary/Character Study**
- **Ratio Status:** 2:3 (native, extended framing preferred) OR 4:5 (native, if tighter crop desired)
- **Reframing Method:** Recompose for environmental integration; subject positioned within context (indoor setting, architectural elements, civilian environment visible); asymmetrical psychological positioning
- **Spatial Allocation:** Subject 40–60% (character primary, but context participatory); environment 40–60% (setting reveals character, mood, or documentary moment)
- **Background Treatment:** Environmental integration MANDATORY; indoor architectural elements, furniture, or atmospheric context visible; background carries documentary narrative weight
- **Format Justification:** 2:3 vertical allows full-figure + environmental context; historically matches documentary photography exhibition standards; ratio emphasizes human-in-environment narrative

**Mode-Specific Ratio Considerations:**
- If same subject across multiple modes: Mode 1 uses tighter 3:4; Modes 2 & 3 use extended 2:3 or 4:5 for environmental context
- Aspect ratio MUST match declared mode (do not use 3:4 for Mode 3 which requires environmental context)
- No mixed ratios within single generation; commit to one ratio per mode per generation

------

## 3) Style Context & Material Authenticity

**Movement/School:** Straight Photography (modernist shift away from Pictorialism); Commercial Photography (advertising/editorial); Photojournalism (documentary mode).

**Influences:** Photo-Secession pictorialist aesthetics (early, soft-focus influence); European Modernism (Cubism, Constructivism observed but not adopted in photography); Precisionist commercial modernism; German New Objectivity (sharp, graphic sensibility); American commercial pragmatism.

**Medium/Production Method:** Photography (film-based, NOT digital). Silver gelatin prints (primary, 1920–1955). Kodak Tri-X 400 or equivalent film stock (high-contrast, fine grain visible at print). Large-format view cameras (8×10 inch, large negatives for detail) transitioning to Graflex (portable, faster focusing). Hand-sensitized platinum/palladium paper (early Pictorialist work, rare in commercial period). Darkroom chemistry: developer precision critical (D-76, HC-110 typical). Contact printing or enlargement; dodging and burning employed for tonal refinement. **NO digital filters, NO Instagram effects, NO modern post-processing simulating traditional media.** Surface must exhibit authentic silver halide grain (visible 0.3–0.8mm equivalent at print scale).

**Thematic Purpose:** Celebrity portraiture (psychological documentation of public figures); fashion editorials (couture narrative, garment as co-protagonist); documentary character studies (universal human experience across cultures, anthropological lens); self-portraiture-as-aesthetic (Steichen's creative authority visible in lighting design, pose direction, print quality).

**Hallmark Motifs (3–5 per mode):**

**Mode 1: Studio Portrait – Vanity Fair Era**
1. **Rembrandt Lighting Geometry:** Key light 45–60° from camera axis; shadow side of face on camera-near side; triangle shadow under eye opposite key (signature classical pattern). Dramatic shadow modeling reveals facial structure; psychological intensity maximized. Key:fill ratio 2:1 to 3:1 (shadow detail readable but deep). Dual catchlights visible (key + fill reflection).
2. **Psychological Gaze Direction:** Subject looks directly at camera (intimate, confrontational) OR away (contemplative, introspective). Eyes express psychological state (yearning, defiance, weariness, confidence). Gaze carries emotional weight; portrait is psychological study as much as facial documentation.
3. **Shallow Depth of Field – Subject Isolation:** Background rendered soft/diffused (f/2.8–f/4.5 aperture typical); subject face sharp; body slightly softer. Bokeh character creamy, smooth, non-distracting. Spatial compression (85mm–135mm telephoto equivalent) flattens background, emphasizing psychological proximity.
4. **Tonal Modeling – Facial Planes:** Face divided into 6–8 distinct tonal zones (highlight, mid-light, mid-tone, mid-dark, shadow, deep shadow). Transition zones smooth (2–4mm edge softness coefficient 0.4–0.6); no harsh lines. Cheekbones, jawline, eye sockets revealed through lighting, not makeup. Skin texture visible but refined (not hyper-detailed, not plastic-smoothed).
5. **Elegant Restraint – Compositional Minimalism:** Simple background (neutral tone, no distraction). Tight framing (40–50% negative space). Subject centered or off-center (45° angle preferred). No props except occasionally hand-held objects (cigarette, fan, jewelry subtly visible). Portrait is distilled essence of subject.

**Mode 2: Commercial/Editorial Fashion**
1. **Garment-as-Primary-Subject:** Fashion couture is co-protagonist; lighting designed to reveal fabric texture (silk specularity, wool matte, velvet light-absorption). Drapery folds (5–10 primary folds) positioned for elegant visual weight; fabric drapes naturally with gravity logic. Seams, stitching, trim details visible. Couture house identity evident in garment construction (Vionnet's bias-cut visible, Chanel's simplicity apparent, etc.).
2. **Asymmetrical Contrapposto Pose:** Subject weight distributed 60% rear leg, 40% forward leg; hip tilt 5–8°, shoulder counter-rotation opposite; stance exudes confidence and elegance. Hand position refined (one hand on hip, one at side, or both integrated into silhouette). Posture elongated (chin extended 2–3 inches, neck lengthened visually).
3. **Compositional Elegance – Fashion Framing:** Full-body or head-to-knee presentation showcases silhouette; negative space integrated as design element (white space balances garment). Environmental background (studio set, draped fabric, architectural element) complements fashion narrative without competing. Rule-of-thirds positioning (subject slightly off-center).
4. **Textile Rendering – Material Authenticity:** Silk exhibits specular highlights (bright points); smooth drape geometry. Wool shows subtle texture, matte surface. Velvet absorbs light, no highlights, deep blacks possible. Linen matte, visible weave texture. **All fabrics pre-1940s natural materials only** (no synthetic polyester, nylon, spandex). Natural dye colors (earth tones, indigo, madder reds pre-1920; synthetic aniline dyes 1920–1940).
5. **Lighting for Garment Detail:** Key light positioned 30–45° (slightly forward-facing compared to Mode 1); 1.5:1 to 2:1 key:fill ratio (less dramatic than portraiture, more even illumination to show fabric detail). Side-light emphasis (light from side of garment) reveals texture and weave. Fill light prevents shadow areas from crushing; fabric detail must remain visible in shadow zones.

**Mode 3: Documentary/Character Study**
1. **Environmental Narrative – Setting as Context:** Subject positioned within indoor environment (home, workplace, architectural setting, cultural space). Background occupies 40–60% of frame; environment reveals character (profession, class, cultural identity, lived experience). Windows, doorways, furnishings visible. Lighting ambiguous between studio-controlled and environmental (hybrid approach).
2. **Authentic Pose Variety – Psychological Truth:** Subject not posed formally (unlike Modes 1 & 2); pose reveals natural bearing. Standing with asymmetrical weight; hand positions casual (in pocket, gesturing, holding object). Expression candid-adjacent (captured authenticity, not performed glamour). Slight awkwardness acceptable if authentic to subject personality.
3. **Naturalistic Lighting – Soft Environmental Key:** Key light often from window (natural) or soft studio fill (appearing natural). Ratio 1:1 to 2:1 (less dramatic than commercial portraiture); shadow areas have detail; no high-contrast drama. Lighting integrates subject into environment naturally.
4. **Cultural/Anthropological Perspective:** Subject documented as representative of cultural identity, profession, or human experience. Clothing period-authentic civilian dress (not couture). Props relevant to profession or identity (tools, books, artifacts). Compositional approach documentary rather than glamorous.
5. **Print/Presentation Humility:** Image presented plainly (no elaborate matting or presentation). Often smaller scale or contact-print quality. Emphasis on truthful documentation over aesthetic perfection (though executed with Steichen's technical precision).

**Period Framing:** Artist active 1900–1973; framework focuses 1920–1955 (commercial modernism peak, 35-year career arc). Early pictorialism (1900–1918) excluded (soft-focus, gum bichromate, art photography aesthetics fundamentally different). Late documentary/curatorial work (1956–1973) included but secondary. **Critical temporal constraint:** All references (fashion, technology, cultural context) must predate 1955 or remain period-neutral.

**Tone Tag:** Sophisticated restraint; psychological depth; commercial elegance; documentary authenticity; glamorous artificiality balanced against human truth.

**Production Era Authenticity:** Silver gelatin prints characteristic of commercial photography (1920–1955). No platinum/palladium (too artisanal, not commercial-scale). Printing methods reflect era: contact printing (full-size negatives), enlargement (for smaller originals), standard glossy or matte finishes (no modern fine-art textured papers invented post-1960). Darkroom dodging/burning visible as subtle tonal refinement (not heavy-handed). Print mounting standard archival mounting board (museum presentation standard).

**Innovation Line (Photography-Specific):**
- **Lighting:** Pioneering sophisticated artificial studio systems; multiple light sources (key, fill, backlight, rim); arc lamps and incandescent floodlights; reflector bounce technique refined; shadow modeling as primary creative tool
- **Format:** Large-format view cameras (8×10) for maximum negative detail; transitioning to Graflex single-lens reflex for faster portrait work; 35mm documentary late career
- **Processing:** Rigorous darkroom control; developer chemistry precision; tonal curve manipulation via dodging/burning; print finishing elevated to fine-art standard (not commercial commodity)
- **Aesthetic Shift:** Transition from Pictorialist soft-focus (early) to sharp "straight photography" (commercial) represents conscious artistic evolution reflecting WWI technical precision gained in aerial photography

------

## 4) Technical Method & Mark-Making

### Universal Technique Anchors (apply to all modes)

- **Facial Architecture Anchor – Gender-Differentiated Construction:**
  - **Masculine rendering:** Stronger jawline definition (shadow under mandible 4–6mm); wider forehead proportion (30–35% of face height); nose base broader (35–40% eye separation); eyebrow position lower (16–20° angle slope). Lighting emphasizes bone structure (cheekbones, jaw, brow ridge). Age-appropriate facial hair rendered if present (facial hair style period-authentic; clean-shaven = smooth male grooming, no stubble/shadow).
  - **Feminine rendering:** Softer jawline (shadow under mandible 2–4mm, diffused); narrower forehead (25–28% of face height); nose base narrower (40–45% eye separation); eyebrow position higher (lifted 18–25°). Lighting emphasizes cheekbones and eye prominence. Makeup subtle if visible (period-appropriate 1920–1950 cosmetics; no modern dramatic contouring).

- **Pose Integrity Anchor – Anatomical Angles (Degrees/Percentages):**
  - **Shoulder-hip counter-rotation:** Mode 1 (Portrait): 0–5° asymmetry (formal, minimal rotation); Mode 2 (Fashion): 15–25° counter-rotation (contrapposto elegance); Mode 3 (Documentary): 5–15° (natural asymmetry without formality)
  - **Head tilt:** Vertical (looking up/down): 0–15° range (slight vulnerability or aspiration); Lateral (ear-to-shoulder): 0–20° tilt (approachability, personality)
  - **Weight distribution (stance):** Mode 1 seated (weight supported by chair, tension in posture). Mode 2 standing (60:40 or 55:45 weight on rear leg). Mode 3 standing (natural 50:50 or 55:45, asymmetrical ease)
  - **Gesture economy:** Hand positions integrated, not separate from body; arm angle 20–45° from vertical (natural drop) or 90° (resting on lap/table); no aggressive gestures or awkward angles

- **Scale Hierarchy Anchor – Anatomical Proportions (Quantified):**
  - **Head-to-body ratio:** 1:7 to 1:8 (classical, flattering); NO elongation beyond 1:8.5 (distortion). Neck length 15–20% of head height (proportional, not giraffe-like).
  - **Face width ratio:** 1:1.3 to 1:1.4 (width-to-height typical). Eye separation 42–46% of face width (classical, not bug-eyed). Feature scale (eyes ~1/4 face width; mouth ~1/3 face width) maintains classical proportion.
  - **Stylization limits:** Steichen's work exhibits NO exaggeration (unlike expressionism or caricature). Refinement via lighting and pose, NOT proportion distortion. All measurements serve elegant elegance, not surrealism.

- **Material Authenticity Anchor – Photographic Grain & Surface:**
  - **Film grain signature:** Visible 0.3–0.8mm grain (monochromatic, organic noise consistent with Kodak Tri-X or equivalent). Grain present throughout image (not clumpy or absent). Grain size consistent across tonal zones (no excessive grain in highlights or shadows).
  - **Surface finish:** Matte to semi-glossy silver gelatin characteristics. NO plastic smoothing, NO modern digital sharpening artifacts, NO "beauty mode" skin perfection. Skin texture visible (pores, fine lines, character visible on mature subjects; soft skin texture on younger subjects, but never artificial smoothness).
  - **NO forbidden processing:** No Instagram filters, no HDR enhancement, no lens-flare effects, no digital vignetting, no modern bokeh simulation. Pure photographic authenticity.

- **Period Consistency Anchor – Temporal Authenticity (1920–1955):**
  - **Fashion:** Clothing styles, accessories, hair grooming, makeup all period-accurate to 1920–1950s (no 1960s mod, no contemporary trends). Women's silhouettes shift (1920s flapper straight, 1930s curves, 1940s structured shoulders); men's suits remain consistent (tailored, three-piece standard).
  - **Grooming:** Women's hair styled (finger waves, 1920s bob; later sets and curls) appropriate to decade. Men's hair cut short with visible part or taper (no undercuts, no fades, no contemporary barbering). Facial hair style period-accurate if present (no contemporary beard styles; Victorian-style mustaches, simple goatees if period-appropriate).
  - **Eyewear:** If eyeglasses present, style must be 1920s–1950s frames (wire-rimmed, cat-eye, heavy acetate frames of era). Sunglasses only if contextually appropriate (outdoor documentary mode, not studio portraits).
  - **Anachronism vigilance:** NO visible watches (except 1920s+ pocket watches on chain). NO modern jewelry. NO visible tech (cameras, phones). NO synthetic fabrics (polyester introduced 1950, so 1950 borderline; err on natural side).

- **Production Method Anchor – Darkroom & Printing Authenticity:**
  - **Negative preparation:** Large-format view camera (8×10 inch negatives primary; later Graflex smaller negatives). Exposure metering approximate (not digital meters; light estimation or selenium cell). Development in precision chemistry (D-76, HC-110 typical developers). Negative handling shows care (no dust spots visible in final, or minimal spotting acceptable as darkroom artifact).
  - **Printing technique:** Contact printing (full-size negative = full-size print, soft-focus characteristic edges). Enlargement printing (from smaller negatives; enlarged prints show slightly softer edges than contact prints). Dodging and burning visible as subtle tonal refinement (not heavy-handed shadows or highlights). Test prints evident in thought process (final chosen print shows clear aesthetic decision-making).
  - **Print finishing:** Glossy or matte paper choice reflected in final surface (glossy = higher contrast, more dynamic; matte = refined, gallery-appropriate). Toning optional but if present: selenium toning (cool, permanence enhancing), or light gold toning (warmth, vintage aesthetic). NO modern fine-art paper textures or contemporary coating effects.

- **Canvas Adaptation Anchor – Aspect Ratio Composition:**
  - **3:4 ratio (tight portrait):** Subject occupies 65–75% of frame vertically; negative space concentrated at sides (20–35% each side). Compositional tension created by vertical emphasis (height-to-width 1.33:1 scale).
  - **4:5 ratio (moderate portrait):** Subject occupies 55–65% of frame; more balanced negative space distribution. Slightly looser framing allows subtle environmental context (background 35–45%).
  - **2:3 ratio (editorial):** Subject occupies 40–65% (variable by mode). Extended vertical space allows full-body or environmental context. Compositional freedom greatest in this ratio; landscape-friendly for editorial layouts.

- **Gender Expression Consistency Anchor (Cross-Mode Mandate):**
  - **Same subject across modes must maintain:** If masculine-presenting in Mode 1 (Studio Portrait), maintain masculine bearing, masculine grooming, masculine wardrobe across Mode 2 (Fashion) and Mode 3 (Documentary). If feminine-presenting in one mode, maintain feminine styling across all modes.
  - **Styling elements consistency:** Hair length preserved (short remains short across all modes; long remains long). Hair color consistent (same subject, same color always). Facial hair presence/absence consistent (clean-shaven male stays clean-shaven; bearded male stays bearded, same style). Makeup level consistent (if subtle makeup in Mode 1, maintain similar level in other modes; don't shift to heavy makeup or no makeup).
  - **Wardrobe shift acceptable:** Fashion can change between modes (Mode 1 formal couture, Mode 2 editorial couture, Mode 3 civilian dress). But gender-coded wardrobe consistency required (masculine subject doesn't wear dresses; feminine subject doesn't wear men's suits unless explicitly documenting gender expression—not applicable to Steichen's corpus).

### Mode-Specific Technical Specifications

### MODE 1: Studio Portrait – Vanity Fair Era

#### Context
Portrait photography at its highest commercial and artistic synthesis (1923–1940). Subject is celebrity, public figure, or cultural icon. Studio environment entirely controlled. Psychological intensity prioritized. Glamorous artificiality applied consciously. Lighting design as creative act equal to subject selection. Intent: elevate subject to icon; reveal psychological essence through controlled artificiality; celebrate beauty and personality as cultural currency.

#### Measurements
- **Key light angle:** 45–60° from camera axis (Rembrandt pattern typical; light side of face 30–45% of face area)
- **Key light intensity:** 1200–1500 nits (studio strobe or arc lamp equivalent; powerful illumination)
- **Key:Fill ratio:** 2:1 to 3:1 (shadow side luminance 50–60% of highlight side)
- **Fill light modifier:** Soft reflector bounce (white card or fabric) OR secondary soft light (beauty dish or umbrella)
- **Shadow floor (minimum L%):** 25–35% (shadow zones have detail; no crushing)
- **Highlight ceiling (maximum L%):** 90–95% (slight blow-out acceptable; skin detail preserved)
- **Focal length:** 85mm–135mm equivalent (compression 1.5:1 to 3:1; background flattened, subject emphasized)
- **Aperture (DOF):** f/2.8 to f/4.5 (shallow DOF typical; background separated from subject)
- **Bokeh softness coefficient:** 0.7–0.9 (creamy, smooth; high-quality optics)
- **Flesh tone hex range:** #C8A599 to #D4B5A0 (warm golden undertones; saturation 25–35%)
- **Flesh tone lightness (L%):** 60–75% (well-lit, skin detail visible; no dark/sallow rendering)
- **Edge softness coefficient:** 0.4–0.6 (moderate; transition zones 2–4mm sfumato quality)
- **Tonal zones per face:** 6–8 distinct steps (rich modeling; mid-tone separation evident)
- **Subject frame dominance:** 65–75% (tight framing; psychological intensity maximized)
- **Pose shoulder-hip rotation:** 0–5° (formal, bilateral symmetry slight)
- **Head tilt (lateral):** 0–15° (subtle personality; not exaggerated)
- **Catchlight presence:** Two distinct specular reflections visible (key + fill signature)

#### Technique
- **Lighting setup:** Key light at 45–60° from camera (main modeling light); fill light opposite (reflector bounce at 10–15% fill intensity). Optional backlight (rim light, hair light) for separation if subject has dark hair. Goal: create Rembrandt triangle shadow on narrow side of face.
- **Camera positioning:** Perpendicular to subject face OR very slight 5–10° angle (frontal authority). Distance 4–8 feet (medium focal length framing). Height approximately at eye level OR very slight above (power differential subtle).
- **Focus point:** Iris-eye region (pupil plane sharp; skin falls away softly). DOF shallow enough that background reads as diffused tone, not detail.
- **Composition:** Subject centered or off-center (45° angle acceptable). Negative space (background) 25–35% of frame (plain neutral tone preferred; studio backdrop implied).
- **Tonal curve in darkroom:** Lift shadows slightly (shadow detail preserved); maintain highlights (skin detail retained); enhance contrast via dodging/burning (cheekbones, jaw, eye sockets emphasized via strategic shadow).
- **Print finishing:** Glossy or matte paper (glossy more dynamic, matte more refined); selenium toning optional (cool permanence); light gold toning optional (warmth, vintage).

#### Validation
- ✓ Rembrandt lighting pattern visible (triangle shadow on far side of face)
- ✓ Key:fill ratio 2:1 to 3:1 confirmed (shadow side approximately 50–60% of highlight brightness)
- ✓ Flesh tone L% in range 60–75% (not washed out, not sallow)
- ✓ Edge softness 0.4–0.6 (moderate; no razor-sharp edges, no diffusion blur)
- ✓ Catchlights dual (key + fill reflections visible in both eyes)
- ✓ Focal length compression apparent (background compressed, subject prominent)
- ✓ Background neutral/diffused (no distraction from subject face)
- ✓ Pose bilateral symmetry (shoulders level, minor asymmetry acceptable)
- ✓ Grain visible (0.3–0.8mm, consistent across tones)
- ✓ No modern digital smoothing (skin texture visible; pores/character lines show)

#### Automated Corrections
- **Cycle 1 baseline:** Establish key:fill ratio, check Rembrandt pattern, validate color role hex values
- **Cycle 2 refinement:** Adjust focal length compression if background underemphasizes subject; refine shadow floor (increase fill if crushing detected)
- **Cycle 3+ iteration:** Minor tonal curve adjustment (shadow detail), edge softness tuning, grain consistency verification

---

### MODE 2: Commercial/Editorial Fashion

#### Context
Fashion editorial for Vogue or Vanity Fair (1925–1940). Couture garment is co-protagonist. Lighting designed to reveal fabric texture and drapery elegance. Subject is professional model or socialite in fashion context. Pose conveys confidence and elegance. Environment can include studio set or architectural background. Intent: showcase couture design; elevate subject to fashion icon; integrate garment narrative into overall composition.

#### Measurements
- **Key light angle:** 30–45° from camera axis (slightly more frontal than Mode 1; garment texture prioritized)
- **Key light intensity:** 1000–1300 nits (less dramatic than portraiture; full-body garment detail visible)
- **Key:Fill ratio:** 1.5:1 to 2:1 (shadow areas have visible detail; garment construction legible in shadows)
- **Fill light modifier:** Broad soft light (umbrella, large softbox) OR reflector bounce; produces even illumination on garment
- **Shadow floor (minimum L%):** 30–40% (shadow detail essential for garment visibility)
- **Highlight ceiling (maximum L%):** 90–95% (skin detail preserved; fabric highlights controlled)
- **Focal length:** 70mm–100mm equivalent (less compression than Mode 1; environment slightly less flattened)
- **Aperture (DOF):** f/4 to f/5.6 (slightly deeper than Mode 1; full-body sharpness, background separated)
- **Bokeh softness coefficient:** 0.6–0.8 (creamy, smooth)
- **Flesh tone hex range:** #C8A599 to #D4B5A0 (same as Mode 1; consistency)
- **Flesh tone lightness (L%):** 62–75% (skin visible; garment not overshadowed)
- **Edge softness coefficient:** 0.4–0.6 (consistent with Mode 1)
- **Fabric rendering – silk:** Specular highlights visible (bright points at fabric peaks); smooth drape geometry (3–5 primary folds per garment)
- **Fabric rendering – wool/linen:** Subtle texture visible (matte surface); fold geometry natural (5–8 folds per garment)
- **Fabric rendering – velvet (if present):** Light-absorbing (no highlights); deep black tones possible; 5–10 folds rounded/soft
- **Subject frame dominance:** 50–65% (garment co-protagonist; environment 35–50%)
- **Pose shoulder-hip rotation:** 15–25° contrapposto (elegant asymmetry)
- **Weight distribution (standing):** 60:40 or 55:45 (rear leg bears weight; forward leg slightly relaxed)
- **Head tilt (lateral):** 10–20° (approachability; personality visible)
- **Hand position:** One hand on hip (defining garment silhouette) OR hands at sides (relaxed elegance) OR one hand on chest/fabric (gestural integration with garment)

#### Technique
- **Lighting setup:** Key light at 30–45° from camera (frontal emphasis); fill light opposite at higher intensity than Mode 1 (broader, more even illumination). Optional side-light (45° from subject side) to emphasize garment texture (sidelight reveals fabric weave, sheen differences).
- **Camera positioning:** Perpendicular to subject (frontal framing for symmetrical garment display) OR very slight 5–10° angle (environmental context visible). Distance 8–12 feet (full-body or head-to-knee framing). Height approximately at eye level OR very slight above.
- **Focus point:** Face area (eyes/nose sharp) with slight defocus allowance for full-body presentation (torso moderately sharp, feet slightly soft acceptable).
- **Composition:** Subject off-center OR centered (45° angle acceptable if asymmetrical garment); background can be plain studio OR styled set (architectural element, draped fabric, minimal environmental context). Rule-of-thirds placement preferred.
- **Garment emphasis:** Lighting positions light source to optimize garment texture visibility. Silk: sidelight reveals specularity. Wool: sidelight reveals matte texture. Velvet: minimize specularity, emphasize light absorption.
- **Tonal curve:** Highlight shadow detail (lift shadows 5–10% vs. Mode 1); maintain mid-tone separation; enhance garment folds via dodge/burn (shadow under folds deepened slightly; fold peaks brightened slightly).
- **Print finishing:** Glossy paper preferred for fashion (higher contrast, vibrant color if color printing). Matte secondary. No toning (maintain neutral color balance for garment accuracy).

#### Validation
- ✓ Key:fill ratio 1.5:1 to 2:1 confirmed (shadow detail visible, garment legible in shadows)
- ✓ Key light 30–45° position confirmed (full-body illumination even, garment detail visible)
- ✓ Garment texture rendered appropriately (silk specularity, wool matte, velvet absorption visible)
- ✓ Drapery geometry natural (folds follow gravity; no floating cloth)
- ✓ Focal length less compressed than Mode 1 (environment visible, subject not flattened)
- ✓ Pose contrapposto evident (weight distribution asymmetrical, elegant)
- ✓ Subject:background balance (subject 50–65%, environment 35–50%)
- ✓ Flesh tone consistent with Mode 1 (same subject maintains color across modes)
- ✓ Edge softness moderate (0.4–0.6)
- ✓ Grain visible and consistent (0.3–0.8mm)
- ✓ No plastic skin smoothing (texture, character visible)

#### Automated Corrections
- **Cycle 1 baseline:** Establish key:fill ratio, check garment texture rendering, validate color balance
- **Cycle 2 refinement:** Adjust shadow floor if garment detail lost; refine sidelight emphasis if present
- **Cycle 3+ iteration:** Fine-tune drapery fold geometry; enhance garment texture via tonal curve; verify consistency across modes if same subject

---

### MODE 3: Documentary/Character Study

#### Context
Documentary portraiture for photojournalism or "Family of Man" curatorial project (1940–1955). Subject positioned within environment (home, workplace, cultural context). Lighting ambiguous between studio-controlled and environmental (hybrid approach). Psychological authenticity prioritized over glamour. Pose reveals natural bearing. Intent: reveal human character through documentary lens; integrate subject into cultural/environmental context; celebrate universal human experience across cultures.

#### Measurements
- **Key light angle:** Variable; often from window (natural) or soft studio fill (appearing natural); 45–90° from camera axis acceptable
- **Key light intensity:** 600–1000 nits (softer than commercial portraiture; naturalistic quality)
- **Key:Fill ratio:** 1:1 to 2:1 (shadow areas have detail; no high-contrast drama)
- **Fill light modifier:** Reflector bounce (minimal fill) OR ambient room light (no secondary light added)
- **Shadow floor (minimum L%):** 30–50% (shadow detail essential; context remains visible)
- **Highlight ceiling (maximum L%):** 90–95% (naturalistic range maintained)
- **Focal length:** 50mm–85mm equivalent (minimal compression; environmental context visible, not flattened)
- **Aperture (DOF):** f/5.6 to f/8 (deeper DOF; environment and subject both in focus possible)
- **Bokeh softness coefficient:** 0.4–0.6 (softer than fashion; environmental focus acceptable)
- **Flesh tone hex range:** #C8A599 to #D4B5A0 (consistent with other modes)
- **Flesh tone lightness (L%):** 55–70% (naturalistic; may be slightly darker than studio modes due to ambient light)
- **Edge softness coefficient:** 0.3–0.5 (sharper than studio portraits; documentary precision)
- **Subject frame dominance:** 40–60% (subject primary, context participatory)
- **Environment frame dominance:** 40–60% (indoor setting, architecture, furniture, context visible)
- **Pose shoulder-hip rotation:** 5–15° (natural asymmetry; no formal bilateral symmetry)
- **Weight distribution (standing):** 50:50 or 55:45 (natural ease; not formal stance)
- **Head tilt (lateral):** 5–20° (approachability; personality evident, not stiff)
- **Hand position:** Natural (in pocket, at sides, holding object relevant to profession/identity); NOT posed formally
- **Catchlight presence:** Single or dual (natural window light typical; less studio-strobe signature)

#### Technique
- **Lighting setup:** Primary light source from environment (window light dominant) OR soft studio fill mimicking natural window. Optional fill reflector opposite window (minimal, preserving natural light quality). No harsh key light setup; goal is naturalistic illumination.
- **Camera positioning:** Varied angle (perpendicular, 30–45° angle acceptable); distance variable (depends on environmental context; 6–12 feet typical). Height flexible (at eye level OR varied to reveal environment).
- **Focus point:** Face area sharp (eyes/nose); full-body presentation possible (environment in soft focus acceptable, not required to be equally sharp).
- **Composition:** Subject off-center OR positioned within environment (environmental narrative visible). Negative space distributed naturally (no rule-of-thirds rigidity; documentary composition looser than commercial work).
- **Environmental context:** Architecture, furniture, personal artifacts visible in background (30–60% of frame). Setting reveals subject identity (profession, class, cultural context). No plain studio backdrop; environment is essential narrative component.
- **Tonal curve:** Naturalistic (minimal dodge/burn; tonal curves subtle); preserve ambient light quality; avoid high-contrast drama (Mode 1 style inappropriate for documentary).
- **Print finishing:** Matte or glossy (either acceptable); no toning; neutral color balance (documentary authenticity prioritized).

#### Validation
- ✓ Key:fill ratio 1:1 to 2:1 confirmed (shadow detail visible, naturalistic illumination)
- ✓ Lighting appears naturalistic (no studio-strobe signature obvious; window light or soft fill apparent)
- ✓ Environmental context visible (40–60% of frame; setting reveals subject character)
- ✓ Pose asymmetrical and natural (not formal contrapposto or bilateral symmetry)
- ✓ Focal length minimal compression (50mm–85mm; environment not dramatically flattened)
- ✓ DOF moderate to deep (environment focus possible; context legible)
- ✓ Edge softness slightly sharper than studio modes (0.3–0.5; documentary precision)
- ✓ Flesh tone consistent with other modes (same subject maintains color)
- ✓ Grain visible and consistent (0.3–0.8mm)
- ✓ No plastic smoothing (authentic texture, character visible)
- ✓ No glamorous artificiality (documentary authenticity prioritized)

#### Automated Corrections
- **Cycle 1 baseline:** Establish naturalistic lighting key:fill ratio, check environmental context visible, validate pose natural (not formal)
- **Cycle 2 refinement:** Adjust focal length if environment over/underemphasized; refine fill light naturalness if studio signature creeps in
- **Cycle 3+ iteration:** Fine-tune environmental detail visibility; verify cross-mode consistency if same subject across all three modes

------

## 5) Wardrobe, Props & Setting Conventions

**TEMPORAL WARDROBE MANDATE (Critical):**

**Artist Active Period:** Edward Steichen 1879–1973; Framework period 1920–1955 (commercial modernism peak). **ALL wardrobe elements must predate or be contemporary with 1955 (end date). NO POST-1955 clothing retention from source images. NO MODERN ELEMENTS.**

**CRITICAL PROHIBITION – Anachronism Elimination:**

❌ Modern t-shirts, jeans, sneakers, hoodies (all post-1960s)
❌ Contemporary eyeglasses/sunglasses (modern frame styles, polarized lenses invented 1936 but not common until 1950s+; avoid contemporary frames)
❌ Modern hairstyles (undercuts, fades, contemporary women's cuts; all pre-1920s bob hairstyles acceptable; 1920s–1950s waves/sets acceptable)
❌ Contemporary accessories (modern watches, contemporary jewelry, baseball caps, designer visible logos)
❌ Synthetic fabrics (polyester introduced 1950; nylon introduced 1935 but limited pre-1945; avoid nylon stockings in studio portraits; cotton, silk, wool, linen ONLY)
❌ Modern undergarments (sports bras, modern bra straps visible; period-appropriate undergarments worn, not visible except bra strap restraint typical of 1920s–1940s)
❌ Anachronistic footwear (modern shoes, athletic wear; period-appropriate shoes/heels only)
❌ Contemporary makeup (modern contouring, bold lip colors post-1960; subtle makeup 1920s–1950s acceptable)
❌ Modern body modifications (contemporary tattoo styles, contemporary piercing locations; period-appropriate jewelry only, NO nose rings, NO belly piercings)

**MODE-SPECIFIC WARDROBE TRACKS (1920–1955 Period-Accurate):**

### MODE 1: Studio Portrait – Vanity Fair Era

**Adult Masculine:**
- **1920s suit:** Three-piece (jacket, vest, trousers); navy, charcoal, or brown wool. Fitted, high waistband (natural waist placement, not low-slung contemporary cut). Tie (silk, understated pattern or solid color; bow-tie or necktie period-appropriate). White cotton dress shirt. Pocket watch chain visible if formal (gold or silver). Shoes: oxford leather (black or brown; polished). Hair: short sides with visible part (center or side part, not undercut). Facial hair optional: clean-shaven (standard), light mustache (period-acceptable), no full beard (too bohemian for 1920s formal).
- **1930s suit:** Jacket slightly looser (drop waist not yet prominent); vest still standard. Trousers creased crisply. Tie slightly wider (diagonal stripe acceptable). Shirt collared (spread collar emerging by 1930s). Hair: same as 1920s (short, parted).
- **1940s suit:** Jacket shoulders broader (masculine structure increasing); double-breasted optional. Trousers high-waisted still. Tie slightly narrower (wartime economy). Hair: short, slicked back or side part acceptable.
- **Casual masculine (1930s–1940s):** Cardigan sweater, no jacket; wool knit (charcoal, navy, cream). White shirt underneath. No tie. Relaxed formality. Hair same as formal.

**Adult Feminine:**
- **1920s flapper:** Straight chemise silhouette (no waist definition); dropped waistband (at hips). Knee-length hemline. Sleeveless or short-cap sleeves. Beaded or embroidered detail optional. Flat chest emphasized (binding common, not visible but structural). Hair: bob cut (chin-length, straight or waved). Makeup: defined eyebrows (thin, arched), kohl-lined eyes, bright red lips (iconic 1920s). Cloche hat optional (fabric, close-fitting).
- **1930s evening:** Bias-cut gown (clinging, elegant drape); longer hemline (ankle-length or mid-calf). Silk satin or crepe fabric. Backless or plunging neckline (daring, glamorous). Hair: longer, waved finger-waves or marcel waves. Makeup: same bold eyes/lips as 1920s, but slightly refined (less theatrical).
- **1940s wartime:** Shorter skirt (knee-length, fabric-conscious due to war rationing). Structured shoulders (built-in padding). Blouse + skirt rather than one-piece dress. Practical, tailored. Hair: rolled at sides (victory rolls emerging, though more 1943+ late-war), or waved styles. Makeup: still bold (lipstick morale boost).
- **Casual feminine (1930s–1940s):** Day dress (simple, waisted). Cotton print fabric (florals, stripes period-appropriate). Hem knee-length. Long sleeves or sleeveless. Cardigan or jacket over (light wool or cotton). Hair waved and set (permanent wave becoming standard 1930s+). Makeup subtle if daytime.

**Accessory Specifications – Gender-Differentiated:**

**Masculine accessories (1920–1955):**
- Watch: Pocket watch on chain (1920s–1930s formal) OR wrist watch (leather strap or metal band, becoming standard by 1940s). Face dial simple (Arabic or Roman numerals, no complications). Gold or silver case.
- Jewelry: Signet ring optional (gold, family crest or initial); wedding band if married (simple gold). Cufflinks at wrist (if visible); simple design, gold or silver. Tie clip/pin optional (gold, minimalist design).
- Hat: Fedora (optional for portraits; more common in environmental/documentary modes). Felt, black or gray. Brim 2–3 inches. Crown center crease. Remove hat for formal studio portrait typically (unless dandyism emphasized).
- Gloves: Leather gloves (optional, if formal context). White, black, or brown kid leather. Worn or held, not visible on hands in portrait.
- NO watches, rings, jewelry beyond above specs. NO designer visible logos. NO contemporary jewelry.

**Feminine accessories (1920–1955):**
- Jewelry: Earrings (simple drop or stud, gold or pearls). Necklace (long strand, pearls 1920s–1930s style OR shorter pendant 1930s–1940s). Bracelet (simple bangle or chain, gold or silver). Rings (1–2 maximum; wedding band, occasional decorative ring). Brooch optional (small, pinned to dress or lapel; gold or silver).
- Hat: Cloche (1920s–early 1930s); small hat with netting/veil (1930s–1940s formal); no hat typical for studio portrait (hair is focus).
- Gloves: Fabric or leather gloves (long elbow-length for formal 1920s–1930s evening; shorter wrist-length daytime). Held or worn, color matches dress/outfit. Remove for portrait typically.
- Shoes: Heels (1–2 inch, T-strap or Mary-Jane style 1920s; higher heel 1930s–1940s). Leather, black or brown.
- Purse: Small clutch or handbag (not visible in tight studio portrait; can be present in full-body fashion mode).
- NO multiple rings, excessive jewelry. NO watches visible (not typical for women 1920s–1940s). NO designer logos.

**Wardrobe Variation Required (across multiple generations of same subject):**

- Change primary garment color (Mode 1: repeat studio portrait with navy suit one time, charcoal suit another; repeat formal gown in black one time, cream another time)
- Cycle through period-appropriate accessories (tie style, jewelry, hat if included)
- Vary garment construction details (neckline type for women; lapel width for men) within period constraints
- Maintain gender-appropriate silhouettes throughout variations (masculine subject remains masculine; feminine subject remains feminine)

**HAIR TREATMENT – MANDATORY PRESERVATION & PERIOD ADAPTATION:**

**CRITICAL PRESERVATION REQUIREMENTS:**

✓ **Hair length MUST be preserved:** Short hair remains short; medium remains medium; long remains long
✓ **Hair color MUST be preserved:** Maintain subject's natural hair color exactly (no bleaching, no darkening)
✓ **Baldness MUST be preserved:** Bald or balding subjects remain bald/balding in period-appropriate manner (bald subject stays bald across all modes)
✓ **Facial hair presence MUST be preserved:** If subject has NO facial hair (clean-shaven), DO NOT add beards, mustaches, or stubble. If subject has facial hair, style to period conventions (NOT contemporary beard styles).

**PERIOD STYLING ADAPTATION (Preserving length/color/presence):**

**Short hair** (historically cut 2–4 inches):
- **1920s–1930s male:** Slicked back with part (center or side); pomade or hair tonic applied (wet-look characteristic). Sides closely cropped, back slightly longer. NOT undercut (undercuts contemporary, not period).
- **1920s flapper female:** Bob cut (chin-length, straight or waved via finger-waves or Marcel waves); no growth out beyond chin. Cloche hat optional covering hair partially.
- **1930s+ female short hair (rare):** Shoulder-length maximum; waved and set permanently (pin curls characteristic, not visible in final, but structure evident).

**Medium hair** (historically 4–10 inches):
- **1930s–1940s male (if medium):** Longer on top than sides, but still short by contemporary standards. Parted and combed back. Pomade applied (shiny, sculptural).
- **1930s–1940s female medium hair:** Shoulder-length, waved and set. Pin curls or permanent wave creating wave pattern throughout. Styled close to head (no flyaway, controlled).

**Long hair** (historically 12+ inches):
- **1920s–1930s female long hair (rare in studio portraits; more common documentary):** Pulled back into low bun or rolled knot (hair up, not flowing). Or waved and set at bottom (large barrel curls, pin-curled effect). NOT loose; always "set" for formal contexts.
- **1940s+ female long hair:** Still typically worn up (wartime practicality) or with waves/curls setting structure evident.

**Bald/balding subjects:**
- **Bald subject (complete baldness):** Remains bald across all modes. Bare scalp rendered naturally (lighting reveals head shape; no hair/wig added).
- **Balding subject (receding hairline, partial hair loss):** Hair loss pattern consistent across modes. Temple recession preserved; crown hair thinning if present. NO wig or implant added; NO growth of lost hair.

**Facial Hair Mandate:**
- **If subject is clean-shaven:** Maintain clean-shaven appearance (smooth jaw, no shadow/stubble visible). Period-appropriate male grooming (typical 1920–1955 standard = clean-shaven).
- **If subject has mustache:** Style to period conventions (thin lines, not bushy; no contemporary thick/styled mustaches). Twirled ends acceptable if era-appropriate (1920s–1930s style).
- **If subject has beard:** Rare in Steichen's commercial work; avoid unless explicitly documented. If present, trim neatly (not full wild beard; structured beard acceptable if period-documented).
- **DO NOT:** Add stubble/shadow to clean-shaven subjects. Do NOT remove facial hair that exists. DO NOT apply contemporary beard styles (thick, fade-trimmed, styled designer beards).

**MODE-SPECIFIC HAIR TREATMENT:**

**Mode 1 (Studio Portrait):**
- **Male:** Short, parted, slicked back with pomade (wet-look, sculptural). No hat. Hair immaculate (not a strand out of place; studio grooming standard).
- **Female:** Styled elaborate (waved, set, controlled). Hair close to head (no flyaway). Hat optional (if worn, cloche or small hat 1920s–1930s style; remove for portrait typically). Makeup applied (eyes defined, lips bold).

**Mode 2 (Commercial Fashion):**
- **Male:** Same as Mode 1 (consistency required). Hair grooming pristine.
- **Female:** Same wave/set as Mode 1; consistency required if same subject. Hair styled to complement couture garment neckline (hair up or down depending on dress cut; if dress backless, hair up; if dress has high neckline, hair can be down/waved around shoulders).

**Mode 3 (Documentary):**
- **Male:** Same hair preservation/styling as Modes 1 & 2 (consistency required). Grooming slightly more relaxed (allows authentic character, not studio perfection).
- **Female:** Same hair preservation as other modes. Styling can be slightly more relaxed (less perfect waves if documentary authenticity requires; but length/color/structure same).

**MODE-SPECIFIC GENDER-DIFFERENTIATED PROP POOLS:**

```yaml
mode_1_studio_portrait:
  male_props: 
    - cigarette (silver case or simple unbranded)
    - pocket_watch_on_chain (gold or silver, simple dial)
    - signet_ring (gold, minimal crest)
    - leather_gloves_held (if formal; white, black, or brown)
    - cufflinks_visible_at_wrist (gold or silver, simple)
    - no_other_props (portrait = face-focused; hand/pose integration only)
  female_props:
    - cigarette_in_holder (optional; 1920s–1930s glamorous accessory)
    - pearl_necklace_or_pendant (long strand or shorter drop, visible)
    - decorative_ring (gold or silver, minimal design)
    - bracelet (simple bangle or chain, visible)
    - fabric_gloves_held (if formal; remove for portrait typically)
    - small_flowers_held (lily, rose, orchid; 1930s–1940s romantic accessory)
    - decorative_comb_in_hair (art deco design optional, if visible)
    - hand_mirror_held (optional; introspective accessory)
    - no_excessive_props (portrait = face-focused; 1–2 props maximum)
  micro_props: 
    - visible_ring_detail
    - cufflink_glint
    - necklace_chain_texture
    - cigarette_smoke_optional
  temporal_notes: >
    Male props reflect 1920s–1950s executive/professional identity; pocket watch signature of era (pre-wristwatch dominance); cigarette acceptable (ubiquitous). Female props emphasize glamour and sophistication; jewelry visible and refined; flowers romantic tradition of era; no modern tech devices (phones, watches, contemporary accessories).

mode_2_commercial_fashion:
  male_props:
    - cigarette (optional; if worn fashionably, sophisticated prop)
    - signet_ring_or_wedding_band (visible if hand position prominent)
    - cufflinks_visible (if cuffs showing)
    - gloves_held (leather, fashionable accessory)
    - pocket_watch_on_chain (if visible in outfit context)
    - hat_held_or_worn (fedora, optional; fashion statement)
    - no_bulky_props (focus = garment, not subject accessories)
  female_props:
    - jewelry_prominent (earrings, necklace, bracelets visible; co-star with couture)
    - cigarette_or_cigarette_holder (optional; glamorous, sophisticated)
    - small_clutch_or_purse_held (fashion editorial context; designer name NOT visible)
    - decorative_comb_in_hair (art deco if period-appropriate)
    - flowers_held_or_corsage (small, elegant; complements garment)
    - hat_optional (cloche or small hat; fashion statement)
    - shawl_or_stole_over_shoulder (complements evening wear; silk or wool, period fabric)
    - no_bulky_props (focus = garment silhouette, not props)
  micro_props:
    - jewelry_glint_and_sheen
    - cigarette_smoke (if present)
    - fabric_texture_visible (shawl, stole if worn)
    - flower_detail
  temporal_notes: >
    Props selected to enhance couture narrative, not distract. Jewelry visible and refined (co-star with fashion). Cigarette and holder fashionable accessories (1920s–1940s). Hat optional but if worn, fashion-forward style. Flowers/corsage romantic accessory traditional to formal wear. Shawl/stole adds elegance and reveals additional fabric texture/drape.

mode_3_documentary_character:
  male_props:
    - cigarette (optional; if profession/context permits)
    - pocket_watch_or_simple_wristwatch (if profession context suggests; not prominent, naturalistic)
    - wedding_ring_or_signet_ring (if present, visible naturally; no emphasis)
    - gloves (if profession requires; work gloves or leather, worn or held)
    - hat (worn if profession/context requires; fedora, working hat, etc.; authentication via context)
    - work_tool_or_profession_artifact (carpenter's tool, artist's brush, writer's pen; if profession-defining)
    - newspaper_or_book_held (if intellectual or scholarly context)
    - no_glamorous_props (documentary authenticity prioritized)
  female_props:
    - wedding_ring_or_decorative_ring (if present, visible naturally)
    - simple_necklace_or_locket (if worn; no excess glamour)
    - apron_if_domestic_context (if household/domestic labor context)
    - shawl_or_cardigan (if worn for warmth/modesty; fabric authenticity)
    - book_or_needlework (if cultural/domestic context)
    - profession_artifact (artist's tool, musician's instrument if applicable)
    - flowers_in_hand (if cultural tradition; modest, authentic)
    - no_jewelry_excess (1–2 items maximum; authenticity over glamour)
    - no_fashion_statement (documentary context, not fashion editorial)
  micro_props:
    - ring_detail
    - necklace_simple_chain
    - fabric_drape (shawl, apron)
    - profession_artifact_detail
    - book_spine_text_readable (if present)
  temporal_notes: >
    Props reflect profession, class, and cultural identity. Cigarette acceptable if subject/era/context permit. Jewelry minimal and naturalistic (not glamorous stage props). Clothing-integrated props (apron, shawl) reveal domestic/work context. Work tools and profession artifacts authenticate character identity. Overall aesthetic documentary and anthropological; glamour removed, humanity foregrounded.
```

**SETTING AUTHENTICITY (Architecture, Furniture, Environmental Details):**

**Mode 1 (Studio Portrait):**
- **Architecture:** Studio backdrop (plain white, gray, or tonal neutral); implied but not detailed. No windows, doors, or architectural features visible (focus entirely on subject face). Clean, minimal environment.
- **Furniture:** Subject may be seated (studio chair implied by posture; chair not visible in tight crop). No other furniture visible in tight portrait framing.
- **Environmental details:** None (studio minimalism intentional). Lighting equipment never visible. Studio backdrop seamless.

**Mode 2 (Commercial Fashion):**
- **Architecture:** Studio backdrop (plain) OR stylized set (draped fabric, architectural element for fashion context; art deco or modernist aesthetic acceptable). Proportional 35–50% of frame.
- **Furniture:** Minimal (optional chair, pedestal, or platform for model positioning). Furniture integrated into fashion narrative (e.g., draped fabric on chair becomes dressing element).
- **Environmental details:** Sparse (focus on garment). If set included: art deco patterns, geometric designs, minimal ornamentation (period-authentic 1920s–1940s modernism).

**Mode 3 (Documentary/Character Study):**
- **Architecture:** Indoor environment mandatory (home, workplace, institutional setting). Walls visible (plain or patterned wallpaper period-authentic). Windows possible (revealing light source). Doorways, architectural features visible (defines character space).
- **Furniture:** Functional (bed, table, chair, desk visible if relevant to setting). Style period-authentic (1920s–1950s furniture). Quality reflects class/profession (working-class furniture plain wood; middle-class furniture slightly more refined; upper-class furniture more elaborate, but Steichen's subjects mixed class backgrounds).
- **Environmental details:** Artifacts revealing character (books on shelf, family photos on wall, tools on workbench, religious items if cultural context). Details authenticate identity and provide anthropological context.
- **Lighting fixtures:** Visible (room lamps, overhead light; authenticity of era). NO modern LED, NO contemporary fixtures.

**PERIOD-AUTHENTIC MATERIALS & COLORS (NO ANACHRONISMS):**

**Fabric Colors – Temporal Authenticity:**
- **Pre-1856:** Natural dyes only (earth tones ochre #8B4513, madder reds #C41E3A, indigo #4169E1, plant-based greens #556B2F). NO synthetic aniline dyes (no bright magentas, no artificial purples, no neon).
- **1856–1920:** Synthetic aniline dyes available but not yet saturated market. Muted colors dominate (burgundy #8B3A3A, teal #008080, muddy browns #6B4423). Bright colors possible but expensive (reserved for formal wear).
- **1920–1955 (Steichen framework period):** Synthetic aniline dyes ubiquitous. Color palette widens (jewel tones burgundy, emerald, sapphire acceptable). NO neon or electric colors (those 1960s+). NO pastels (pastels dominate 1950s+; muted jewel tones 1920–1950).

**Wallpaper & Decor Colors (Mode 3 Documentary):**
- **1920s–1930s:** Geometric patterns (art deco diamonds, chevrons), floral patterns (stylized flowers, not photorealistic). Colors: cream, soft green, soft blue, rust, gold. Bold pattern acceptable (not subtle).
- **1940s:** Smaller-scale patterns (wartime fabric conservation). Colors: cream, gray, muted green, rust.
- **1950s:** Beginning of pastels and larger patterns (mid-century modernism emerging). Colors: soft pink, soft blue, pale yellow, pale green. Pattern or plain (solid colors becoming fashionable).

**Footwear & Surface Details:**
- **Shoe materials:** Leather (primary, all eras). NO synthetic leather or plastic shoes. Suede optional (legitimate 1920s+). Rubber soles standard by 1930s. Canvas (athletic/casual) optional (1930s+).
- **Shoe styles:** Women: T-strap (1920s–1930s), Mary-Jane (1920s–1940s), heels (1–2 inch comfortable height 1920s–1940s). Men: oxford lace-up (standard, all eras), derby (alternative, all eras). NO modern sneakers, NO athletic footwear, NO contemporary shoe styles.

**COHERENCE FILTER (Temporal & Social Authenticity):**

All elements (wardrobe, props, hair, makeup, setting, furniture, accessories) must support declared style/period with documented historical accuracy. **Fallback if uncertain = omit rather than risk anachronism.** Example: If uncertain whether wristwatch or pocket watch appropriate for specific mode/era, use pocket watch (safe, period-documented). If uncertain about jewelry design, use simple gold or silver (minimalist, period-safe). If uncertain about shoe style, use oxford shoes (universal, safe).

**Gender-specific protocol:** Maintain masculine/feminine presentation consistency across all modes. If subject is masculine-presenting in Mode 1, maintain masculine wardrobe and grooming across Modes 2 & 3 (do not feminize styling or vice versa).

------

## 6) Safety & IP Constraints (Hard Rules)

**CANVAS NEGATIVES (≥2 required):**

Canvas-ratio-specific anti-patterns (triple enforcement):
- ❌ "original aspect ratio" (ignore source dimensions completely)
- ❌ "1:1 square format" (portrait-vertical MANDATORY)
- ❌ "16:9 widescreen" (no landscape; portrait only)
- ❌ "21:9 ultra-wide" (no panoramic; portrait-vertical)
- ❌ "unmodified framing from source" (recompose for 3:4, 4:5, or 2:3 ONLY)
- ❌ "letterboxing or pillarboxing" (no padding; intelligent recomposition required)

NanoBanana-specific anti-patterns:
- ❌ "1632×640 arbitrary dimensions" (NanoBanana native ratio ONLY)
- ❌ "default aspect ratio" (enforce exact 3:4, 4:5, 2:3 ratio)
- ❌ "non-standard ratios" (no custom ratios; three approved ratios only)

Medium-specific anti-patterns (photographic authenticity):
- ❌ "digital smoothing" (no plastic skin; no modern beauty filters; grain visible)
- ❌ "Instagram filters" (no vintage simulation, no fake VSCO filters, no artificial color grading)
- ❌ "modern post-processing effects" (no HDR simulation, no excessive contrast curves, no surreal tone mapping)
- ❌ "soft-focus pictorialism" (sharp focus required; no diffusion haze, no pictorialist blur)
- ❌ "animated or illustrated style" (pure photography; no painting, no illustration, no digital art)
- ❌ "anime or manga aesthetic" (photographic medium; no manga eyes, no anime coloring)
- ❌ "digital noise that looks like chroma artifacts" (film grain only; monochromatic luminance noise, NOT color noise)
- ❌ "modern sensor characteristics" (use film stock behavior; no digital capture signatures like aliasing artifacts)

Mode-specific anti-patterns:
- ❌ "Mode 1: environmental context distracting from face" (background secondary, subject dominant)
- ❌ "Mode 2: subject overwhelmed by background" (garment as co-protagonist; balance required)
- ❌ "Mode 3: studio artificiality" (documentary authenticity required; no artificial studio setup; environmental naturalism mandatory)

Period-authenticity anti-patterns (temporal anachronisms):
- ❌ "modern clothing" (1960s+ style NO; 1920–1955 ONLY)
- ❌ "contemporary eyeglasses" (modern frames NO; 1920–1950s frames ONLY)
- ❌ "synthetic fabrics" (polyester NO; cotton/silk/wool/linen ONLY; nylon post-1935 acceptable but not primary)
- ❌ "electric or neon colors" (1960s+ NO; pre-1960 colors ONLY)
- ❌ "post-1955 hairstyles" (contemporary undercuts NO; 1920–1950s waves/sets ONLY)
- ❌ "modern makeup styles" (contemporary contouring NO; 1920–1950s subtle-to-bold ONLY)
- ❌ "contemporary body modifications" (nose rings, belly piercings NO; 1920–1950s jewelry ONLY; period-appropriate piercings ears ONLY)

Anatomical anti-patterns:
- ❌ "extreme distortion" (head:body 1:9+ NO; 1:7–1:8 classical ONLY)
- ❌ "unnatural joint angles" (pose must be physically possible; no hyperextended limbs)
- ❌ "plastic proportions" (stylization must serve grace, not distortion; measurements enhance, not deform)

Gender-expression anti-patterns:
- ❌ "cross-gender styling inconsistency" (masculine subject in feminine dress NO; feminine subject in men's suit NO; unless explicitly cross-dressing documented, maintain consistent gender presentation)
- ❌ "gender expression drift between modes" (same subject across modes: maintain identical gender presentation; masculine stays masculine; feminine stays feminine)

**CANVAS POSITIVES (≥2 required):**

Ratio enforcement (triple redundancy):
- ✅ "EXACTLY 3:4 portrait aspect ratio" (strict enforcement)
- ✅ "EXACTLY 4:5 portrait aspect ratio" (strict enforcement)
- ✅ "EXACTLY 2:3 portrait aspect ratio" (strict enforcement)
- ✅ "recomposed for portrait-vertical emphasis" (no landscape orientation)
- ✅ "strict recomposition to declared ratio" (intelligent subject repositioning, no padding)
- ✅ "compose specifically for [X:Y] format" (format-native composition, not adapted)

Photographic authenticity (technical specifications with measurements):
- ✅ "film grain authentic to Kodak Tri-X or equivalent" (0.3–0.8mm visible, monochromatic luminance noise)
- ✅ "silver gelatin print characteristics: matte to semi-gloss finish" (no plastic smoothing; grain visible at print scale)
- ✅ "studio-strobe-modeling face treatment" (tonal modeling via directional light; no digital manipulation)
- ✅ "85mm–135mm focal length compression" (telephoto signature; background flattened; subject emphasized)
- ✅ "key light 45–60° from camera axis" (Rembrandt/Loop pattern, classical portrait lighting; Mode 1 spec)
- ✅ "key light 30–45° from camera axis" (frontal, garment-texture-revealing lighting; Mode 2 spec)
- ✅ "naturalistic lighting 1:1 to 2:1 ratio" (documentary soft light; Mode 3 spec)
- ✅ "shallow DOF f/2.8–f/4.5; creamy bokeh softness 0.7–0.9" (Mode 1: subject isolation; studio precision)
- ✅ "moderate DOF f/4–f/5.6; bokeh 0.6–0.8" (Mode 2: full-body sharpness; garment detail)
- ✅ "deeper DOF f/5.6–f/8; bokeh 0.4–0.6" (Mode 3: environmental context legible)
- ✅ "flesh tone hex #C8A599–#D4B5A0 with L% 60–75%" (warm golden undertones; well-lit skin; consistent across modes)
- ✅ "edge softness coefficient 0.4–0.6" (moderate transitions; 2–4mm sfumato-quality blending; no razor edges, no heavy diffusion)
- ✅ "tonal zones 6–8 per facial area" (rich mid-tone modeling; shadow floor ≥25% L; highlight ceiling ≤95% L)

Mode-specific technical requirements:
- ✅ "Mode 1: dual catchlights visible (key + fill reflection signature); Rembrandt triangle shadow on narrow side of face"
- ✅ "Mode 2: garment texture visible in shadow areas (shadow floor ≥30% L); fabric drape natural, gravity-responsive"
- ✅ "Mode 3: environmental context 40–60% of frame; naturalistic lighting apparent; shadow detail legible; no studio-strobe signature"

Period-authenticity specifications:
- ✅ "period-accurate 1920–1955 wardrobe MANDATORY" (no post-1955 clothing retention)
- ✅ "historically authentic fabric types only" (natural fibers; no synthetics pre-1945 except limited nylon post-1935)
- ✅ "hair length preserved, hair color preserved, baldness preserved, facial hair presence preserved" (cross-mode consistency; styling adapted to period, not altered fundamentally)
- ✅ "civilian dress period-authentic to 1920–1955" (no contemporary fashion; no anachronistic garment styles)
- ✅ "props appropriate to era" (cigarette acceptable; pocket watch yes; contemporary phones NO; modern jewelry NO)

Temporal authenticity (no anachronisms):
- ✅ "1920–1955 time period MANDATORY" (no post-1955 references; no pre-1920 pictorialist soft-focus)
- ✅ "no post-1955 technology visible" (television NO; contemporary technology NO; period-accurate lighting/props ONLY)
- ✅ "period-appropriate color palette" (1920–1955 color chemistry ONLY; no modern neon; no post-1960 pastels)

Hair preservation specifications:
- ✅ "preserve hair length: short remains short; medium remains medium; long remains long"
- ✅ "preserve hair color: maintain subject's natural hair color exactly across all modes"
- ✅ "preserve baldness: bald subjects remain bald; balding subjects maintain balding pattern"
- ✅ "preserve facial hair presence: clean-shaven subjects remain clean-shaven; bearded subjects maintain beard style (period-appropriate)"

Anatomical validation:
- ✅ "head:body ratio 1:7–1:8" (classical, flattering; no elongation)
- ✅ "proportional refinement via lighting + pose, NOT distortion" (stylization serves grace, not surrealism)
- ✅ "anatomical angles physically possible" (pose must be biomechanically valid; no hyperextension or impossible joint angles)

Gender-expression consistency:
- ✅ "gender presentation consistent across all three modes" (same subject maintains identical gender styling throughout all modes)
- ✅ "period-appropriate gender styling maintained" (masculine/feminine presentation consistent with 1920–1955 conventions)

**VOCABULARY WARNINGS (Ambiguous Terms – Avoid):**

Replace vague language with quantified specifications:

| Vague Term | Replace With |
|-----------|-------------|
| "soft lighting" | Key light 45–60°, 2:1–3:1 ratio; edge softness 0.4–0.6; DOF shallow f/2.8–f/4.5 |
| "dramatic shadows" | Shadow floor 25–35% L; key:fill 3:1 ratio; tonal zones 6–8 per face |
| "sharp focus" | Mode-specific aperture (f/2.8 Mode 1; f/4 Mode 2; f/5.6–f/8 Mode 3); bokeh softness 0.7–0.9 (Mode 1); 0.6–0.8 (Mode 2); 0.4–0.6 (Mode 3) |
| "glamorous perfection" | Studio-strobe-modeling face treatment; skin texture visible; grain 0.3–0.8mm; no plastic smoothing |
| "authentic grain" | Film grain monochromatic luminance noise 0.3–0.8mm equivalent; visible at print scale; not digital color noise; consistent across tonal zones |
| "dramatic contrast" | Key:fill ratio 2:1–3:1; highlight ceiling 90–95% L; shadow floor 25–35% L |
| "period-appropriate" | Specific year range (1920–1955) + garment type (e.g., "1930s bias-cut evening gown") + fabric (e.g., "silk satin, no synthetic") |
| "fashion-forward couture" | Specific designer era (Vionnet bias-cut, Chanel simplicity, 1940s structured shoulders) OR specific garment type (day dress, evening gown) with fabric behavior documented |
| "documentary authenticity" | Environmental context 40–60% of frame; naturalistic lighting 1:1–2:1 ratio; pose asymmetrical; no studio-glamour treatment |
| "psychological intensity" | Gaze direction documented (direct eye contact vs. away); expression reveals internal state (yearning, defiance, contemplation); lighting emphasizes facial structure |

---

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS (For Final Ratio Only):**

**Mode 1: Studio Portrait – Vanity Fair Era**

**3:4 Portrait Ratio (tight framing):**
- Vertical emphasis; subject dominance ≥70%; hierarchical staging: face 65–75%, neck/shoulders 20–30%, negative space background 10–20%
- Subject positioned center or off-center (45° angle acceptable); head positioned upper-middle frame (power balance); gaze directed at camera or introspectively away
- Background occupies lower 10–20% of frame (neutral tone, plain backdrop; studio implied)
- Compositional tension created via vertical emphasis; intimate psychological proximity
- Rule-of-thirds optional; compositional emphasis over mathematical rigor

**4:5 Portrait Ratio (moderate framing):**
- Balanced studio framing; subject dominance 60–70%; hierarchical staging: face 50–65%, shoulders/neck 25–35%, background 15–25%
- Subject centered OR off-center (45° angle); head mid-frame; environmental context subtle (studio set, draped fabric subtle)
- Background 15–25% of frame (more context than 3:4; can include studio furniture edge if relevant)
- Compositional balance: vertical emphasis moderate; psychological intensity slightly reduced vs. 3:4 (more breathing room)

**2:3 Portrait Ratio (editorial):**
- Extended vertical; subject dominance 50–65%; hierarchical staging: face 40–50%, shoulders/torso 30–40%, background 20–30%
- Subject off-center preferred (45° angle psychological tension); head positioned dynamically (not centered)
- Background 20–30% of frame (studio set elements visible; draped fabric, architectural element subtle)
- Compositional flow: vertical emphasis maximum; environmental integration beginning

**Mode 2: Commercial/Editorial Fashion**

**4:5 Portrait Ratio (preferred for fashion):**
- Moderate subject dominance; subject 50–65% of frame; garment co-protagonist
- Full-body or head-to-knee framing; subject off-center (45° angle for asymmetrical elegance)
- Background 35–50% of frame (can be plain studio OR styled set)
- Compositional emphasis: garment silhouette and drapery as visual focus; subject pose showcases couture
- Environmental context integrated as fashion narrative (if set included)

**2:3 Portrait Ratio (extended full-body):**
- Subject dominance 40–60%; garment fully visible (head-to-hem)
- Off-center positioning; asymmetrical contrapposto enhanced by composition
- Background 40–60% of frame (studio set or draped environment co-visual element)
- Compositional flow: fashion narrative prioritized; full silhouette visible; drapery geometry emphasized

**Mode 3: Documentary/Character Study**

**2:3 Portrait Ratio (preferred for documentary):**
- Subject dominance 40–60%; environmental context co-protagonist
- Subject positioned within environment (not centered; asymmetrical psychological positioning)
- Background 40–60% of frame (architecture, furniture, cultural artifacts visible; setting reveals character)
- Compositional emphasis: human-in-environment narrative; character identity integrated with context
- Environmental details carry documentary weight; setting is not backdrop but character indicator

**4:5 Portrait Ratio (if tighter documentary):**
- Subject dominance 50–65%; environment secondary but visible
- Subject off-center; environmental context integrated (not full background dominance)
- Background 35–50% of frame (less environmental detail than 2:3; more subject-focused)

**STYLE-SPECIFIC COMPOSITION (Mode-Differentiated):**

**Mode 1: Studio Portrait – Vanity Fair Era**

Photographic composition regime:
- **Perspective:** Perpendicular to subject face (frontal OR very slight 5–10° angle for personality variation); no extreme angles
- **Grid/Symmetry:** Bilateral symmetry approximate (shoulders level, minor asymmetry acceptable for psychological depth); not rigid geometric gridding
- **Figure:ground %:** Subject 70%+ (dominant); background 10–30% (secondary)
- **Density %:** Face 60–80% of subject area; neck/shoulders 20–40%; minimal body context (studio portrait tight framing)
- **Lighting logic:** Studio-controlled (key light 45–60°; fill light opposite; optional rim light for hair separation). Dramatic shadow modeling as artistic choice.
- **Detail:negative space ratio:** Detail concentrated in facial features (eyes, mouth, jawline emphasized via lighting); negative space secondary (background neutral allows focus drift to face only)

**Mode 2: Commercial/Editorial Fashion**

Photographic composition regime:
- **Perspective:** Perpendicular to subject (frontal, facing camera) OR slight 5–10° angle for asymmetrical garment display
- **Grid/Symmetry:** Asymmetrical by design (contrapposto 15–25° counter-rotation); symmetry avoided (dynamic energy)
- **Figure:ground %:** Subject 50–65% (fashion-forward, not overwhelming); background 35–50% (environment can participate in fashion narrative)
- **Density %:** Full-body or head-to-knee presentation; garment texture 60–80% of subject visual weight; face 30–40% (less dominant than Mode 1)
- **Lighting logic:** Directional studio light (30–45° key) optimized for garment texture rendering (fabric specularity, weave texture visible); fill light high (shadow detail essential)
- **Detail:negative space ratio:** Detail concentrated in fabric drapery, seaming, trim; negative space integrated as design element (white space balances garment)

**Mode 3: Documentary/Character Study**

Photographic framing regime:
- **Perspective:** Flexible (perpendicular OR angled 30–45° for environmental context); height flexible (at eye level OR varied to reveal setting)
- **Grid/Symmetry:** Asymmetrical natural (no forced balance; character authenticity over composition geometry); off-center psychological positioning
- **Figure:ground %:** Subject 40–60% (character primary, context participatory); environment 40–60% (setting reveals identity)
- **Density %:** Full-body presentation (head-to-feet) common; gesture integration with environment (sitting at table, standing in doorway, working)
- **Lighting logic:** Natural or naturalistic (window light primary OR soft studio fill mimicking natural quality); hybrid approach (environmental + supplemental lighting ambiguous)
- **Detail:negative space ratio:** Detail distributed (subject detail + environmental detail both significant); setting artifacts carry documentary weight (books, tools, furnishings reveal profession/identity)

**UNIVERSAL COMPOSITION REQUIREMENTS:**

**Surface Context Anchor (Photographic medium):**
- Print substrate: Silver gelatin (1920–1955 primary); matte or glossy finish (both period-appropriate). Surface exhibits authentic photographic characteristics (not digital; not painted; not illustrated).

**Frame/Band Anchor (Presentation):**
- NO matting, framing, or presentation border visible in image itself (image boundary = canvas boundary; no artificial frame). Gallery matting is post-production presentation choice, not visible in framework output.

**Production Context Anchor (Printing methodology):**
- Silver gelatin print: contact print (full-size negative) OR enlarged print (smaller original negative; slight edge softness characteristic). Dodging/burning visible as subtle tonal refinement (not heavy-handed). Print finishing: glossy or matte (both era-appropriate); optional toning (selenium cool, gold warm).

**Ratio Enforcement Anchor (Strict adherence):**
- Composition designed specifically for declared ratio (3:4 tighter; 4:5 moderate; 2:3 editorial). NO lazy cropping from different ratio; intelligent recomposition to final ratio MANDATORY. If source image wider/taller than target ratio, reposition subject and background to optimize target ratio (not pad/crop destructively).

**Gender Expression Anchor (Cross-mode consistency):**
- Subject's gender presentation consistent across all modes (same subject maintains identical masculine/feminine styling in Modes 1, 2, & 3). Wardrobe changes acceptable (Mode 1 formal couture → Mode 3 civilian dress); gender expression non-negotiable.

**Mode-Specific Composition Anchor:**
- **Mode 1:** Tight frame, face-dominant, psychological intensity maximized, background minimal/neutral
- **Mode 2:** Full-body/head-to-knee, asymmetrical contrapposto, garment silhouette prominent, environment supports fashion narrative
- **Mode 3:** Environmental integration, subject-in-context, setting reveals character, asymmetrical natural positioning, documentary authenticity

---

## 8) Typography & Text Integration (If Historically Present)

**Binary Policy:** OMIT text entirely. Edward Steichen's portrait photography contains no integrated typography. Text is not historically present in his studio portraits, fashion editorials, or documentary work (text appears on magazine covers/layout, not within image itself). Framework output requires pure image without typographic elements.

------

**FRAMEWORK ENDS AT SECTION 8. NO COMMENTARY, EXPLANATIONS, OR HISTORICAL CONTEXT BEYOND THIS POINT.**

