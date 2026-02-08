---
id: irving_penn
group: "Photography"
movement: "Commercial Fashion & Fine Art Photography (1943-2009)"
artist: "Irving Penn"
display_name: "Irving Penn — Studio Elegance & Psychological Portraiture"
style_scope: single-artist
ratios: ["3:4", "4:3", "1:1", "4:5"]
ratios_status: approved
ratios_notes: >
  Portrait ratios (3:4, 4:5) historically match fashion magazine covers and editorial spreads from Penn's Vogue era.
  Landscape (4:3) accommodates full-body fashion compositions. Square (1:1) supports accessory-focused and symmetrical celebrity portraits.
  All ratios natively supported by NanoBanana renderer.

modes: ["Fashion Editorial", "Celebrity Portrait — Corner Studio"]

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
  layout_hint: "Single figure dominates frame; props secondary"
  identity_priority: ["silhouette", "gesture", "face-proportions"]

hero_image: null

about: >
  Irving Penn (1917–2009) revolutionized fashion and portrait photography through meticulous studio discipline, minimalist aesthetics, and mastery of platinum/palladium printing. His work blurred boundaries between commercial photography and fine art, establishing new standards for psychological intensity and technical perfection. This framework captures his signature elegance: soft sfumato lighting, carefully controlled tonal ranges, refined anatomical proportions, and iconic studio environments—whether the austere flat backgrounds of fashion editorials or the psychologically charged corner studio where countless cultural figures were immortalized. Penn's prints remain archival masterworks, their tonal richness and surface quality impossible to achieve through conventional digital means. This framework honors both his commercial vision and his obsessive pursuit of the perfect print.

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
  '8': Typography & Text Integration

---

---

# Irving Penn Framework v4.4 (NanoBanana Edition)

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for exact declared target aspect ratio. When NanoBanana outputs non-standard dimensions (e.g., 1632×640), recompose to strict ratio specification.
- **Mode Isolation Mandate:** Fashion Editorial and Celebrity Portrait employ completely different studio environments, lighting geometries, and pose conventions. DO NOT cross-contaminate. Mode selector determines entire aesthetic ecosystem.
- **Printing Process Specification Authority:** Gelatin silver vs. platinum/palladium defines surface finish, tonal range, and edge quality. Texture must exhibit authentic medium characteristics—NO digital smoothing simulacra.
- **Lighting Geometry Precision:** Key light angle (measured in degrees from camera axis and horizontal plane) is HARD specification, not aesthetic suggestion. Ratio specifications override qualitative lighting descriptors.
- **Tonal Range Authority:** Minimum luminance floor (shadow crush point) and maximum ceiling (highlight retention) are quantified—not subjective "deep shadows" or "bright highlights."
- **Hex Color Authority:** Flesh tone midpoint MUST appear at specified hex value ±5% lightness. Color role (highlight, midtone, shadow) determines acceptable L% range; violations constitute failures.
- **Edge Quality Specification:** Sfumato softness coefficient (0-1 scale) and gradient transition distance override all descriptive language about "soft" or "subtle" edges.
- **Anti-Generic-Styling Safeguards:** Penn's work is NOT contemporary fashion photography, Instagram aesthetics, or HDR contemporary digital. Prohibit all modern post-processing signatures and digital perfection markers.
- **Gender Expression Authority:** Preserve subject's presented gender identity through period-appropriate styling. Cross-mode consistency required—no gender drift between modes.
- **Style Over Likeness:** Identity via silhouette, gesture, pose architecture—NOT facial photorealism (renderer cannot achieve Penn-level portraiture fidelity).

---

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE MANDATE:** Recompose to exactly **[SELECTED RATIO]** — ignore source image dimensions completely.

**RATIO ENFORCEMENT (NanoBanana):** Generate image with EXACT aspect ratio **[SELECTED RATIO]**. When NanoBanana defaults to non-standard outputs (1632×640 or similar), apply strict recomposition to **[SELECTED RATIO]** with no padding, letterboxing, or distortion.

Redraw in **Irving Penn Studio Photography** for **[exact format specification: Fashion Editorial / Celebrity Portrait — Corner Studio]**.

**Identity via Architecture:** Likeness established through silhouette, gesture language, pose proportions, and psychological presence—NOT photorealistic facial likeness (impossible with current renderers). Render must capture essential character through studio lighting, pose grammar, and tonal modeling.

**MANDATORY SPECIFICATIONS (Fashion Editorial Mode):**
- High-key studio fashion aesthetic: L_avg ≈ 65% scene
- Minimalist neutral background: L = 85-90%, flat paper or canvas substrate
- Soft sfumato portrait lighting: 45° key left, 30° above horizontal, diffuse source
- Tonal luxury: 5-6 distinct value zones per facial plane, L ≈ 93% highlight to L ≈ 18% shadow
- Flesh tone base: #7B7B7B (L = 48%), appearing as dominant midtone
- Fashion proportions: Head-to-body ≈ 1:7.5-8.5 (refined elegance, not exaggerated)
- Pose: Architectural gesture, contrapposto implied, hands positioned for compositional balance
- Printing: Gelatin silver aesthetic (fine grain, crisp edges, matte-to-semi-gloss finish)
- Surface: NO plastic sheen, NO digital smoothing, NO Instagram filters—authentic photographic grain and texture

**MANDATORY SPECIFICATIONS (Celebrity Portrait — Corner Studio Mode):**
- Psychological intensity lighting: L_avg ≈ 48% scene, darker contemplative aesthetic
- Corner studio environment: Two converging textured canvas walls (LEFT L ≈ 55%, RIGHT L ≈ 75%), V-shaped convergence
- Key light: 20-60° angle (variable by subject psychology), 2-4:1 fill ratio, more directional than fashion mode
- Tonal architecture: 5-8 distinct zones, shadow floor L ≈ 15-20%, highlights L ≈ 88-92%, full tonal scale preserved
- Flesh tone reference: #6B6B6B (L = 42%, slightly deeper than fashion mode)
- Full-body framing: Head ≈ 8% of frame, torso/pose dominant
- Pose: Seated, standing, or three-quarter angle; psychological vulnerability or authority conveyed through pose
- Props encouraged: Instruments, objects, garments that define subject's identity
- Printing: Platinum/palladium or gelatin silver (both acceptable); matte surface, paper weave visible
- Surface: Ultra-fine tonal gradation, no edge harshness, psychological depth through lighting geometry

**Cross-Mode Consistency Mandate:** Gender presentation, facial structure, and core anatomical proportions remain constant across both modes. Subject appearance evolves through pose/framing/lighting—NOT through anatomical distortion or gender drift.

**Face-Treatment Flag:**
- Fashion Editorial: `platinum-matte` or `gelatin-silver-fine-grain`
- Celebrity Portrait: `platinum-palladium-printing` or `gelatin-silver-photographic`

**Pose Flag:**
- Fashion Editorial: `contrapposto-implied` or `architectural-gesture`
- Celebrity Portrait: `psychological-presence` or `contemplative-authority`

**Canvas Control Flag:** `strict-reframe` (exact ratio compliance mandatory)

**Style Dominance Line:** "Studio photography by Irving Penn, 1943-2009. Fashion: high-key elegance, minimalist studio discipline. Portrait: psychological intensity, corner studio environment, fine art mastery of tone and surface. Render must capture essential character through lighting, pose, and tonal architecture—NOT photorealistic likeness."

**Mode Selector (MANDATORY):** **[FASHION EDITORIAL / CELEBRITY PORTRAIT — CORNER STUDIO]** — this choice determines ENTIRE technical ecosystem. No cross-mode contamination.

**Final Ratio Confirmation:** Output must be exactly **[DECLARED RATIO]**, no exceptions.

---

## 2) Canvas Strategy & Aspect Ratio Control

**NANOBANANA NATIVE RATIOS (No Adaptation Required):**

- ✅ `3:4` (portrait - 864×1184)
- ✅ `4:3` (landscape - 1184×864)
- ✅ `1:1` (square - 1024×1024)
- ✅ `4:5` (portrait - 896×1152)

**SELECTED RATIO:** **[X:Y]** — [Native / Adapted from X:Y]

### 2.1) Canvas Strategy by Mode

**FASHION EDITORIAL (3:4 Portrait Ratio Preferred):**

**Ratio Selection:** `3:4` portrait format (historically matches Vogue magazine covers and editorial fashion pages)

**Recomposition Strategy:** `strict-reframe` — recompose entire background and subject placement for exact 3:4 portrait orientation

**Subject Placement:** Figure dominates 60-70% of frame; head positioned in upper-middle third; negative space 30-40% neutral background

**Background Extension:** Extend neutral gray/white paper background seamlessly to fill exact 3:4 canvas. Minimize visible transitions. Maintain L = 85-90% throughout background.

**Spatial Allocation:** 
- Head: Upper 25% of frame
- Torso/primary gesture: Center 50%
- Lower body/hands: Bottom 25%
- Negative space (background): Distributed around figure, minimum 30%

**Format Justification:** 3:4 portrait ratio historically authentic to Penn's Vogue work (1940s-1960s magazine dimensions). Vertical emphasis allows full-body fashion compositions with elegant negative space. NanoBanana native support ensures clean output.

---

**CELEBRITY PORTRAIT — CORNER STUDIO (4:3 Landscape or 1:1 Square Preferred):**

**Ratio Selection:** `4:3` landscape OR `1:1` square (corner studio geometry supports both; square emphasizes symmetric convergence)

**Recomposition Strategy:** `strict-reframe` — recompose converging walls to fill declared ratio exactly

**Converging Walls Geometry (4:3 format):**
- LEFT WALL: Textured canvas occupies left 40-45% of frame, gradient L ≈ 50-60% at edges
- CONVERGENCE POINT: Meets at subject's lower back/hip area (approximately 55-60% from left edge, 45-55% vertical)
- RIGHT WALL: Lighter textured canvas occupies right 55-60% of frame, gradient L ≈ 70-80%
- DEPTH ILLUSION: V-shaped convergence creates perspective without atmospheric recession

**Subject Placement:** 
- Seated/standing: Positioned at or slightly off convergence line
- Head: Upper-middle of frame (25-35% from top)
- Torso: Center (40-60% vertical)
- Full body visible: Feet at bottom edge or slightly cropped

**Square Ratio (1:1) Variant:**
- Convergence point shifts to exact center
- Perfect symmetry possible (for formal portraits)
- Alternative: Slight off-center convergence for psychological tension

**Format Justification:** 4:3 and 1:1 ratios accommodate corner studio's V-shaped geometry while maintaining authentic Penn studio proportions. Textured canvas walls require horizontal or square breathing room for full visibility.

---

## 3) Style Context & Material Authenticity

**Influences:** Modernist design, Bauhaus geometric clarity, Renaissance portraiture (sfumato modeling), sculpture (form through light/shadow), fine art printmaking (platinum/palladium revival)

**Production Method:** Large-format studio photography (8x10 Deardorff view cameras primarily), controlled studio lighting (softboxes/umbrellas), and precision darkroom processes including:
- Gelatin silver printing (fine-grain black & white emulsion, matte to semi-gloss finishes)
- Platinum/palladium printing (contact prints from large negatives, jewel-like tonal richness, archival permanence, matte surface with visible paper weave)
- Dye transfer printing (complex subtractive color process, luminous depth, unparalleled color saturation—if color mode applied)

**Period (Artist Active):** 1917–2009 (primary commercial work 1943-1970s; fine art/personal projects ongoing)

**Hallmark Motifs with Quantification:**

1. **Soft Sfumato Edge Modeling** (sfumato-edges flag): Gradient transitions with zero hard boundaries, softness coefficient 0.95-1.0, transition zones 2-4mm equivalent (fashion scale)
2. **Controlled Studio Lighting** (studio-controlled-lighting flag): Key light precisely positioned 45° horizontal from camera left, 30° elevation above horizontal plane; fill ratio 3:1 (fashion) to 2.5:1 (portrait)
3. **Tonal Luxury** (platinum-palladium-printing, renaissance-volumetric flags): 5-8 distinct luminance steps per form; no posterization; shadow floor preserved at L ≥ 15-20%
4. **Minimalist Studio Environments** (minimalist-background flag): Plain paper/canvas backdrops (white L=92%, gray L=65-75%, black L=5-8%); zero environmental narrative; pure geometric planes or corner studio walls
5. **Psychological Intensity** (psychological-intensity flag): Pose grammar, lighting geometry, and subject positioning convey emotional or conceptual depth; face expressions range from serene (fashion) to probing (portrait)

**Tone Tag:** Austere elegance (Fashion Editorial) / Introspective intensity (Celebrity Portrait)

**Production Era Authenticity:** All printing processes represent mid-20th century fine art photographic mastery. NO digital smoothing, NO contemporary Instagram aesthetic, NO HDR compression. Prints exhibit period-appropriate surface characteristics: fine grain structure, natural tonal gradation, authentic paper substrate visible.

**Innovation Line (Photography-Specific):**

- **Lighting Innovation:** Soft, diffuse studio lighting that eliminates harsh shadows while maintaining dramatic tonal modeling—departure from contemporary portrait harshness
- **Substrate Innovation:** Revival and perfection of platinum/palladium printing, elevating photography to museum-grade fine art status
- **Studio Innovation:** The "corner studio" (1948 onward): V-shaped convergent walls creating psychological intensity and compositional focus without environmental distraction
- **Format Innovation:** Large-format view camera discipline enabling unprecedented detail, perspective control, and tonal range
- **Printing Mastery:** Personal oversight of darkroom processes; hand-coating of platinum papers; perfectionist retouching standards; transformation of photographs into tactile art objects

---

## 4) Technical Method & Mark-Making

### Fashion Editorial Mode

#### CONTEXT

Fashion editorial represents Penn's commercial Vogue work (1943-1970s): elegant, high-key studio elegance emphasizing garments, compositional clarity, and aspirational beauty. The studio becomes an abstraction—pure white or neutral ground emphasizing silhouette and psychological refinement. Lighting is democratizing: the subject and garment share equal visual weight, neither brutalized by shadow or overexposed in highlight.

#### MEASUREMENTS

- **Flesh tone base hex:** #7B7B7B (HSL: 0°, 0%, 48%)
- **Flesh tone highlight hex:** #D4B5A0 (HSL: 26°, 42%, 68%) — used for cheekbone/forehead peaks ONLY (5-7% face area)
- **Flesh tone shadow hex:** #4A4A4A (HSL: 0°, 0%, 29%) — jaw/neck shadow zones
- **Background hex:** #E8E8E8 (HSL: 0°, 0%, 91%) — neutral gray-white studio paper
- **Key light angle:** 45° camera left, 30° above horizontal
- **Fill light angle:** 135° camera left, 15° above horizontal (subtle, ratio 3:1)
- **Overall scene luminance (L_avg):** 65% (bright, optimistic, commercial)
- **Shadow floor minimum (L_min):** 18% (shadows cast, not crushed; detail preserved)
- **Highlight ceiling maximum (L_max):** 93% (near-white, flesh tone peaks)
- **Contrast ratio:** Approximately 1:5.2 (highlight-to-shadow)
- **Head-to-body proportion:** 1:7.5 to 1:8.5 (refined elegance)
- **Face width:** 28-32% of head height
- **Tonal zones per facial plane:** 5-6 distinct steps (forehead: highlight → light midtone → midtone → shadow midtone → shadow; cheek: 4-5 zones; chin: 3-4 zones)
- **Edge softness coefficient:** 0.95-1.0 (nearly complete sfumato blending)
- **Skin texture granularity:** Sub-grain visible only at magnification; surface appears seamlessly smooth at normal viewing distance
- **Fabric rendering:** Silk/satin materials exhibit subtle highlight (L ≈ 75%) without plastic sheen; matte finish, no specular spike
- **Hand texture:** Delicate, individual fingers resolved; subtle knuckle definition via shadow (L ≈ 35-40%)
- **Background texture:** Paper weave imperceptible at normal viewing; substrate matte, non-reflective
- **Negative space percentage:** 30-40% of frame (visual breathing room)

#### TECHNIQUE

- **Film Format:** Large-format (8x10) negative, processed for full tonal range (no crushed blacks, detail-preserving shadows)
- **Camera:** Deardorff 8x10 view camera, allowing precise ground-glass composition and depth-of-field control
- **Lens Selection:** 210mm or 250mm (normal focal length for 8x10), renders perspective naturally without distortion
- **Lighting Apparatus:** 
  - Primary: Large softbox or umbrella (18x24 inches equivalent), positioned 45° left, 30° above horizontal, ~8-10 feet from subject
  - Fill: Secondary softbox or reflector, positioned 135° left (behind/side), 15° above, achieving 3:1 ratio
  - No rimlight; no edge separation kicker
- **Exposure:** Bracketed for maximum tonal range; negative developed for N-1 to N for slight compression of highlights
- **Printing Process (Gelatin Silver):**
  - Variable contrast paper (Grade 2-3) for smooth tonal transitions
  - Soft-focus enlarger lens or slight under-focus for sfumato effect
  - Dodge-and-burn technique to refine tonal zones: lighten cheekbones (+10-15% exposure time), deepen jaw shadow (-5-10%)
  - Wet mounting on museum-quality rag paper
  - Matte surface sealing (no gloss varnish)
- **Post-Processing (Darkroom Refinement):**
  - Intensive spotting and retouching: remove blemishes without falsification; enhance natural skin texture
  - Toning (optional): slight selenium toning for richness (adding L +2-3% at shadows, visual depth without color shift)
  - Final inspection: verify tonal range from L=18% shadow floor to L=93% highlight ceiling
- **Pose Mechanics:**
  - Three-quarter framing (not full profile, not frontal)
  - Shoulder rotation: 15-25° toward camera left
  - Head tilt: 10-15° camera right (contrapposto balance)
  - Hands positioned: Across body, fingers extended (not clenched), creating compositional triangles
  - Weight distribution: Implied (seated or standing with one leg forward) but not exaggerated
- **Compositional Anchors:**
  - Figure placement: Left third to center of frame (rule-of-thirds variant)
  - Head position: Upper-middle third, approximately 25-30% from top
  - Negative space: 30-40% around figure, predominantly right and bottom
  - Eye line: Horizontal or slightly downward (not staring directly; psychological distance maintained)
- **Material Authenticity Anchor:** Gelatin silver photograph rendered with period-authentic surface: fine grain structure (ISO equivalent 100-200), matte finish, paper weave barely perceptible, zero digital sharpening artifacts
- **Gender Expression Consistency Anchor:** Female subjects maintain soft feature definition, elegant proportions, and refined gesture throughout mode. Male subjects maintain structured face planes, authoritative posture, and psychological reserve.
- **Anatomical Proportion Validation Anchor:** Head-to-body 1:7.5-8.5 serves elegance refinement, not distortion. Features remain anatomically coherent; proportions enhance rather than exaggerate.
- **Period Consistency Anchor:** All materials, techniques, and aesthetic choices reflect 1943-1970 Vogue fashion photography (no post-1970 printing innovations; no contemporary digital post-processing; no Instagram era filters)

#### VALIDATION

- ✅ Flesh tone #7B7B7B appears as dominant midtone (verify coverage 12-18% of face area)
- ✅ Highlight #D4B5A0 visible at forehead/cheekbone peaks only (5-7% of face)
- ✅ Shadow #4A4A4A defines jaw/neck zones (10-12% of face)
- ✅ Background L ≈ 85-91% (verify neutral gray-white, flat, zero depth)
- ✅ Overall scene L_avg ≈ 65% (measure 30-point sample across frame)
- ✅ Shadow floor L ≥ 18% (no crushed blacks; shadow detail preserved)
- ✅ Highlight ceiling L ≤ 93% (highlights retain detail, not blown)
- ✅ Edge transitions sfumato-soft (zero hard boundaries; gradient zones 2-4mm equivalent)
- ✅ Tonal zones: 5-6 per facial plane (verify forehead: highlight, light mid, mid, shadow-mid, shadow; cheek: 4-5; chin: 3-4)
- ✅ Skin texture: Sub-grain visible at magnification only; seamless at normal distance
- ✅ Fabric detail: Subtle highlights (L ≈ 75%), matte finish, no plastic sheen
- ✅ Hand definition: Individual fingers resolved; knuckle shadows L ≈ 35-40%
- ✅ Head-to-body ratio: 1:7.5-8.5 (measure from crown to toe)
- ✅ Pose architecture: Three-quarter angle, 15-25° shoulder rotation, 10-15° head tilt
- ✅ Negative space: 30-40% of frame (no cramped framing)
- ✅ Printing aesthetic: Gelatin silver grain visible; matte surface; paper weave imperceptible
- ✅ Gender consistency: Female subjects maintain soft features/proportions (compare cross-mode if multi-mode tested)

#### AUTOMATED CORRECTIONS

- **Cycle 2 | Flesh Tone Accuracy:** If midtone measures outside #7B7B7B ±5% L, adjust scene exposure: +0.3 stops if L < 43%, -0.3 stops if L > 53%
- **Cycle 2 | Shadow Floor Collapse:** If L_min < 18%, increase fill light by 1 stop (adjust ratio to 2.5:1 from 3:1)
- **Cycle 2 | Edge Hardness:** If sfumato coefficient < 0.85, apply selective blur to transition zones (+5-10% Gaussian blur radius)
- **Cycle 3 | Background Flatness:** If background shows gradient or texture, regenerate with pure #E8E8E8 (L=91%) paper substrate

---

### Celebrity Portrait — Corner Studio Mode

#### CONTEXT

Celebrity portraiture in Penn's corner studio (1948-1970s) represents the intersection of commercial assignment and fine art intention. The studio environment—two converging walls forming a V-shape—becomes the subject's psychological arena. Lighting is less forgiving, more directional; shadows deepen; the tonal range expands to accommodate both darkness and revelation. The subjects themselves (Picasso, Armstrong, Dietrich, politicians, artists) bring psychological weight; Penn's role is architectural: create spatial/tonal conditions where character emerges.

#### MEASUREMENTS

- **Flesh tone base hex (portrait mode):** #6B6B6B (HSL: 0°, 0%, 42%) — deeper than fashion mode
- **Flesh tone highlight hex (portrait mode):** #C9A583 (HSL: 27°, 33%, 61%) — forehead/cheekbone peaks only
- **Flesh tone shadow hex (portrait mode):** #3A3A3A (HSL: 0°, 0%, 23%) — deep facial modeling
- **LEFT WALL hex (textured canvas):** #8B8B8B (HSL: 0°, 0%, 55%) — darker convergent wall
- **RIGHT WALL hex (lighter canvas):** #C0C0C0 (HSL: 0°, 0%, 75%) — lighter convergent wall
- **Convergence geometry:** Two walls meet at 100-120° angle; convergence point positioned at subject's lower back/hip (55-60% horizontal, 45-55% vertical)
- **Wall texture:** Visible fabric weave (canvas), matte, non-reflective
- **Key light angle:** 20-60° from camera axis (varies by subject psychology), 25-40° above horizontal
- **Fill light angle:** 150-170° from camera axis (side-fill or minimal), 10-20° above horizontal
- **Fill ratio:** 2:1 to 4:1 (more dramatic than fashion mode)
- **Overall scene luminance (L_avg):** 48% (darker, introspective, contemplative)
- **Shadow floor minimum (L_min):** 15-20% (deeper shadows, psychological weight)
- **Highlight ceiling maximum (L_max):** 88-92% (less blown-out than fashion; detail preserved)
- **Contrast ratio:** Approximately 1:4 to 1:5 (highlight-to-shadow)
- **Full-body framing:** Head ≈ 8% of frame; torso/pose dominates 70-85% of frame
- **Head-to-body proportion:** 1:8.5 (formal, authoritative scale)
- **Face width:** 25-28% of head height (narrower features, psychological intensity)
- **Tonal zones per facial plane:** 6-8 distinct steps (forehead: highlight → light-mid → mid → light-shadow → shadow-mid → shadow → deep-shadow; more granular than fashion)
- **Edge softness coefficient:** 0.85-0.95 (slightly more edge definition than fashion; character lines emphasized)
- **Skin texture granularity:** Fine wrinkles, age lines visible and integrated (NOT retouched away); authenticity paramount
- **Fabric rendering:** Wool, linen, silk all rendered with authentic texture (wool shows weave; silk shows subtle sheen; linen shows thread direction)
- **Hands texture:** Individual wrinkles, age spots, knuckle bones resolved; hands treated as sculptural elements
- **Props (if present):** Instruments, objects rendered with specular highlights and authentic material (trumpet: high specularity L=95%; cigarette: matte L=8%)
- **Background texture:** Canvas weave clearly visible; matte, atmospheric
- **Negative space percentage:** 45-55% of frame (walls provide environmental presence)
- **Convergence V-shape:** Visible perspective lines creating psychological depth without atmospheric recession

#### TECHNIQUE

- **Film Format:** Large-format (8x10 to 11x14) negative, processed for extended tonal scale (shadows retained, highlights preserved)
- **Camera:** Deardorff 8x10 or 11x14 view camera, for maximum detail and tonal control
- **Lens Selection:** 210mm or 250mm for 8x10 (slightly longer focal length for flattering perspective)
- **Lighting Apparatus:**
  - Primary: Directional softbox or umbrella (18x24 or larger), positioned 20-60° horizontally, 25-40° above horizontal
  - Fill: Side-fill reflector or subtle secondary light, positioned 150-170°, 10-20° above
  - NO rimlight; NO edge separation (character emerges through core modeling, not rim)
- **Exposure:** Bracketed for maximum shadow detail; negative developed for N to N+1 (slight highlight compression acceptable)
- **Printing Process (Platinum/Palladium):**
  - Contact print from full-size negative (negative = final print size)
  - Hand-coated platinum/palladium paper (custom formula; often Penn's personal recipe)
  - UV exposure carefully calibrated for optimal clearing
  - Development in potassium oxalate, careful timing to achieve specific tonal range
  - Clearing in dilute hydrochloric acid (removes residual iron), then water washing
  - Final toning (optional): potassium dichromate or copper salts for subtle color shift (warming or cooling)
- **Printing Process (Alternative—Gelatin Silver):**
  - Variable contrast paper (Grade 2-3)
  - Soft-focus enlarger lens for gradual edge transitions
  - Extensive dodge-and-burn: model facial planes individually (cheekbones +15%, jaw -10%, forehead +5%)
  - Final toning: selenium for richness and visual depth
- **Post-Processing (Darkroom Refinement):**
  - Minimal retouching (Penn's philosophy: character lines = authenticity, not "flaws")
  - Spot removal only for dust/defects, NOT aging lines or expression wrinkles
  - Paper selection: Matte rag paper (Arches, Saunders Waterford) for authenticity
  - Final inspection: verify extended tonal range (L=15-20% shadow floor to L=88-92% highlight)
- **Pose Mechanics:**
  - Seated OR standing (depends on psychological intent)
  - Body angled toward camera left or right (asymmetry creates psychological tension)
  - Head position: Three-quarter turn or profile (rarely full-frontal; never looking directly at camera)
  - Shoulder rotation: 30-45° (more turned than fashion mode)
  - Hand placement: Gestural, intentional (holding object, resting on knee, gesturing)
  - Weight distribution: Asymmetrical (one foot forward, unequal weight—psychological imbalance creates depth)
  - Expression: Contemplative, neutral, or probing (NOT smiling; emotional reserve)
- **Compositional Anchors:**
  - Subject positioned at convergence line or slightly off-center (psychological tension)
  - Converging walls frame subject without environmental narrative
  - Head position: Upper-middle of frame (25-35% from top)
  - Torso: Center of frame (40-60% vertical)
  - Feet: At bottom edge or slightly cropped (full body readable)
  - V-shaped convergence: Clear perspective geometry without distortion
- **Material Authenticity Anchor (Platinum/Palladium specific):** Matte surface with visible paper weave, tonal scale from L=15-20% (shadow floor) to L=88-92% (highlight), absolutely NO digital perfection; platinum particles visible at microscopic inspection
- **Gender Expression Consistency Anchor:** Male subjects maintain structured faces, authoritative posture, psychological reserve throughout mode. Female subjects maintain refined features, emotional depth, psychological complexity.
- **Anatomical Proportion Validation Anchor:** Full-body framing maintains 1:8.5 head-to-body ratio; individual features remain anatomically coherent; aging, character, personality emerge through authentic rendering, not distortion
- **Period Consistency Anchor (Photography-Specific):** Platinum/palladium printing represents 1948-1970 fine art mastery; gelatin silver alternative reflects same era; NO post-1970 printing innovations; NO contemporary digital post-processing
- **Corner Studio Anchor (CRITICAL):** Two textured canvas walls visible and properly converged; LEFT L≈55%, RIGHT L≈75%; convergence point at subject's lower back/hip; NO flat backgrounds; NO studio collapse; walls ARE the environment

#### VALIDATION

- ✅ Flesh tone #6B6B6B appears as dominant midtone (verify coverage 15-20% of face area)
- ✅ Highlight #C9A583 visible at forehead/cheekbone peaks (5-7% of face, slightly less prominent than fashion)
- ✅ Shadow #3A3A3A defines facial planes (jaw, eye sockets, temple; 15-18% of face)
- ✅ LEFT WALL L ≈ 55% (textured canvas, darker convergent wall visible)
- ✅ RIGHT WALL L ≈ 75% (lighter convergent canvas, visible perspective lines)
- ✅ Convergence geometry: V-shape visible, walls meet at subject's lower back (±5% positioning tolerance)
- ✅ Overall scene L_avg ≈ 48% (darker than fashion mode; measure 30-point sample across frame)
- ✅ Shadow floor L ≥ 15-20% (shadow detail preserved; no crush)
- ✅ Highlight ceiling L ≤ 92% (highlights retain character definition; not blown)
- ✅ Edge transitions: 0.85-0.95 softness coefficient (slightly firmer than fashion; character lines visible)
- ✅ Tonal zones: 6-8 per facial plane (forehead: 7 zones; cheek: 6; chin: 5—more granular than fashion)
- ✅ Skin texture: Age lines, wrinkles visible and integrated (authenticity preserved)
- ✅ Fabric authenticity: Wool shows weave; silk shows subtle sheen; material differentiation visible
- ✅ Hand definition: Wrinkles, age spots, bone structure visible; hands as sculptural elements
- ✅ Prop detail: Instruments rendered with authentic specularity (trumpet L=95%, cigarette L=8%)
- ✅ Full-body framing: Head ≈ 8% of frame; torso/pose dominates 70-85%
- ✅ Head-to-body ratio: 1:8.5 (measure crown to toe)
- ✅ Pose architecture: Asymmetrical, three-quarter angle, 30-45° shoulder rotation
- ✅ Printing aesthetic: Platinum/palladium matte surface visible; paper weave integrated; OR gelatin silver with fine grain and authentic toning
- ✅ Gender consistency: Male/female subjects maintain presented gender characteristics (compare with Fashion Editorial mode if multi-mode)
- ✅ Corner studio presence: Both walls visible; convergence line clear; psychological intensity via environment

#### AUTOMATED CORRECTIONS

- **Cycle 2 | Flesh Tone (Portrait):** If midtone measures outside #6B6B6B ±5% L, adjust scene exposure: +0.5 stops if L < 37%, -0.5 stops if L > 47%
- **Cycle 2 | Wall Color Imbalance:** If LEFT WALL L ≠ 55% ±5%, regenerate left wall with corrected canvas tone; if RIGHT WALL L ≠ 75% ±5%, regenerate right wall
- **Cycle 2 | Convergence Collapse:** If walls do not converge at subject's hip region (±5% tolerance), regenerate wall geometry with explicit convergence point specification
- **Cycle 2 | Shadow Floor Crush:** If L_min < 15-20%, increase fill light by 1.5 stops (adjust ratio to 2:1 from current)
- **Cycle 3 | Edge Hardness:** If softness coefficient < 0.80, apply selective blur to facial contours (+8-12% Gaussian blur)
- **Cycle 3 | Texture Absence:** If skin appears too smooth (age lines/wrinkles missing), re-render with explicit authenticity requirement: "Preserve all aging characteristics, wrinkles, and facial texture as character definition"

---

## 5) Wardrobe, Props & Setting Conventions

### Fashion Editorial Mode

**TEMPORAL WARDROBE MANDATE:**

- **Artist active period:** 1917–2009 (primary work 1943-1970s)
- **Wardrobe constraints:** All garments must predate or be contemporary with 1943-1970 (Vogue era)
- **NO modern elements:** No post-1970 synthetic fabrics, contemporary cuts, modern eyeglasses, or contemporary styling
- **Complete replacement required:** Subject must be fully redressed in period-accurate fashion; no modern clothing retention from source images

**MODE-SPECIFIC WARDROBE TRACKS (1943-1970 Vogue Era):**

**Adult Feminine Track:**
- **Primary garment:** Couture or high-fashion ready-to-wear piece (Chanel, Dior, Vogue-featured designers)
  - Silhouettes: 1940s structured (peplum waist, shoulder definition), 1950s elegant (full skirt, defined waist), 1960s mod or shift (minimal structure, clean lines)
  - Necklines: Modest (no cleavage exposure); boat neck, jewel neck, or modest V-neck authentic to period
  - Sleeves: Full-length, three-quarter, or sleeveless with shoulder definition (never contemporary athletic/contemporary cuts)
  - Length: Knee-length or midi (1940s-50s); mini skirts emerged late 1960s but remain modest in Penn's work
  - Fabric: Natural fibers only (silk, wool, linen, cotton, cashmere)—NO synthetic materials (polyester, nylon, spandex not available/used until 1970s+)
- **Accessories (0-2 maximum):** 
  - Earrings: Pearl studs, simple drop (gold or silver, period-appropriate design)
  - Necklace or brooch: Vintage-appropriate (no modern jewelry design; no contemporary brand items)
  - Gloves (optional): Kid leather or silk, wrist or elbow-length, adds elegance
  - Hat (optional): Pillbox, wide-brim, or fascinator (period-specific millinery)
  - NO modern watches, NO contemporary eyeglasses, NO modern handbags visible
- **Hair styling:** Period-appropriate to 1943-1970 (waves, rolls, updos for 1940s-50s; straight/bob for 1960s; always polished, never contemporary cuts)
- **Makeup:** Subtle, period-authentic (defined eyebrows, matte lips, no contemporary contouring; heavy lid makeup for 1960s era)
- **Undergarments:** Structured corsetry visible in silhouette if appropriate (1940s-50s); no modern sports bra visible
- **Color palette:** Earth tones (beige, brown, cream), jewel tones (emerald, sapphire, ruby), black, white, gray—NO electric/neon/contemporary colors
- **Period-specific restrictions:**
  - Pre-1950: NO plastic zippers (metal only); natural fiber exclusively
  - 1950s: Synthetic blend tolerance (early polyester blends emerged late 1950s); keep under 20% synthetic content
  - 1960s: Mod synthetic permitted (vinyl for specific pieces); keep natural fiber majority
  - NO post-1970 silhouettes, NO contemporary fashion trends, NO modern styling

**Adult Masculine Track:**
- **Primary garment:** Business suit or formal wear (1943-1970)
  - Suit cut: Single-breasted (contemporary standard); shoulder construction structured (1940s-50s power shoulders; 1960s slimmer)
  - Jacket length: Traditional (covers 80% of hip)
  - Pants: Tailored, standard waistband (no contemporary low-rise); break at shoe (period-accurate)
  - Shirt: White or pale blue cotton, simple collar (no contemporary floral, patterns, or fitted styles)
  - Tie (if present): Silk, conservative width (1940s-50s wide; 1960s narrower), neutral or subtle pattern
  - Fabric: Wool, linen, cotton blend—NO synthetic suiting (polyester not standard until 1970s)
- **Accessories (0-2 maximum):**
  - Wristwatch (vintage-appropriate, understated)
  - Pocket square or tie pin (optional, adds refinement)
  - Cufflinks (if visible; simple, metal, period-design)
  - NO contemporary branding, NO modern sunglasses, NO modern jewelry
- **Hair styling:** Period-appropriate (pomaded waves 1940s-50s; shorter, cleaner 1960s; always groomed, never contemporary cuts)
- **Facial hair:** If subject is clean-shaven, maintain clean-shaven (period grooming); if stubble/beard present, style period-appropriately (NOT contemporary stubble-chic)
- **Color palette:** Dark suits (navy, charcoal, black), white/pale blue shirts, neutral ties—NO contemporary patterns or bright colors
- **Period-specific restrictions:**
  - 1940s: Military influence acceptable (structured shoulders, masculine silhouette)
  - 1950s: Conservative business standard (no deviation)
  - 1960s: Slim tailoring permitted (narrower lapels, shorter jacket); color/pattern slightly more adventurous by late 1960s
  - NO post-1970 silhouettes, NO contemporary fashion trends, NO modern styling

**Fabric Behavior (Both Genders):**
- Authentic drape physics for period materials only:
  - Silk: Smooth drape, modest movement, subtle sheen; NO plastic-like contemporary silk blends
  - Wool: Structured drape, minimal movement, matte surface; shows weave at macro scale
  - Linen: Textured drape, visible creasing (realistic period behavior); NO uniform flat appearance
  - Cotton: Natural drape, variable by weave density; authentic texture visible
- NO synthetic fabric characteristics: NO static cling, NO athletic stretch, NO digital-perfect surface
- Period-accurate dyeing (natural dyes pre-1856, synthetic aniline dyes post-1856; NO neon/electric colors in any period)

**Temporal Color Palette Restrictions:**
- NO cadmium pigments pre-1850 (cadmium yellow, orange, red unavailable)
- NO Prussian blue pre-1704
- NO synthetic aniline dyes pre-1856 (bright magentas, purples unavailable)
- NO fluorescent or neon colors in 1943-1970 (not manufactured; not used in fashion)
- Authentic period color palette: Earth tones, jewel tones, pastels (for late 1960s), black, white, gray

---

### Celebrity Portrait — Corner Studio Mode

**TEMPORAL WARDROBE MANDATE:**

- **Artist active period:** Same as Fashion Editorial (1917–2009; primary 1943-1970s)
- **Wardrobe function:** Reveal subject's identity, profession, personality through clothing choice
- **Complete replacement:** Subject fully redressed in period-appropriate attire; no modern clothing retention

**MODE-SPECIFIC WARDROBE TRACKS (Celebrity Context):**

**Adult Feminine Track (Celebrity Portrait):**
- **Primary garment:** Reflects subject's profession/status
  - Artist/Intellectual: Simple, elegant dress (black dress for intensity; structured for authority); NO fashion emphasis
  - Performer/Cultural figure: Distinctive garment (signature style piece; era-appropriate elegance)
  - Society/Political figure: Conservative dress (dark suit-dress, modest neckline, formal bearing)
  - Silhouette: Variable by subject context (NOT fashion-magazine glamour; authenticity paramount)
- **Accessories (0-3 maximum, context-dependent):**
  - Subject-identifying objects encouraged (artist's brush, musician's instrument accessory, political insignia)
  - Jewelry: Minimal (wedding ring, simple earrings); NO fashion statement pieces
  - Hat or head covering (if culturally appropriate): Adds personality
- **Hair styling:** Subject's authentic style (NOT artificially styled); if modern, adapt to period equivalent (preserve length/color, apply period styling)
- **Color palette:** Subject-authentic; NO fashion-magazine color trends; muted, sophisticated, personality-revealing

**Adult Masculine Track (Celebrity Portrait):**
- **Primary garment:** Subject's identity-defining attire
  - Artist (Picasso): Studio clothing (worn jacket, reflective of work environment); worn appearance acceptable (authenticity paramount)
  - Musician (Armstrong): Formal suit (concert wear) OR casual studio attire (context-dependent)
  - Intellectual/Writer: Conservative suit or cardigan (comfortable, worn-in appearance acceptable)
  - Political figure: Formal suit, authority-bearing
- **Accessories (0-3 maximum):**
  - Subject's professional tools (trumpet, paintbrush, etc.) encouraged as props
  - Simple jewelry (watch, ring); NO contemporary fashion pieces
  - Hat or head covering (if characteristic to subject)
- **Hair styling:** Subject's authentic appearance; preserve existing characteristics (baldness, hair length, facial hair)
- **Facial hair:** If subject's characteristic feature (beard, mustache), render with period-appropriate grooming (NOT contemporary styling)
- **Color palette:** Dark, sophisticated, personality-driven; NOT fashion-magazine chromatics

**PROPS ARCHITECTURE (Both Modes):**

**Fashion Editorial Props:**

```yaml
fashion_editorial:
  female_props: [handbag_1950s_structured, silk_scarf, pearl_necklace, elegant_shoe, kid_gloves, vintage_compact_mirror, costume_jewelry_period, small_clutch]
  male_props: [leather_briefcase, pocket_watch, cigar_or_cigarette_vintage, leather_gloves, fedora_hat, silk_pocket_square, vintage_cufflinks]
  micro_props: [flower_corsage, brooch_pin_period, hair_comb, lipstick_case_1950s, cigarette_case_silver, lighter_zippo_style]
  temporal_notes: "Fashion editorial emphasizes garment and silhouette. Props secondary, period-authentic only. No modern objects from source images. Wardrobe variation required between iterations."
  color_palette: [cream, beige, black, white, navy, emerald, sapphire, ruby, burgundy]
  prohibited: [modern_handbags, contemporary_jewelry, post_1970_eyeglasses, modern_shoes, athletic_wear, synthetic_fabrics, neon_colors]
```

**Celebrity Portrait Props:**

```yaml
celebrity_portrait:
  male_props_musician: [trumpet, saxophone, violin, harmonica, baton, sheet_music, vintage_microphone, recording_device]
  male_props_artist: [paintbrush_set, palette, wooden_sculptor_tool, sketchbook, charcoal_stick, chisel, mallet]
  male_props_intellectual: [leather_bound_book, manuscript_scroll, fountain_pen, eyeglasses_period_appropriate, magnifying_glass, telescope, globe]
  female_props_artist: [paintbrush, sketchbook, palette_knife, sculpture_tool, artist_apron_worn]
  female_props_musician: [violin, sheet_music, conductor_baton, music_score, microphone_vintage]
  female_props_intellectual: [book_period_binding, manuscript, fountain_pen, reading_glasses_period, globe]
  micro_props: [cigarette_pack_vintage, lighter_period, watch_wristband, rings_simple, bracelet_modest, necklace_simple]
  temporal_notes: "Celebrate subject's profession through carefully chosen props. Authenticity paramount. Props enhance psychological portrait, not distract. One or two key props maximum; avoid cluttering frame."
  prop_logic: "Subject identity defines prop choice. Musician carries instrument. Artist carries tools. No arbitrary 'styling props'. Worn appearance of props acceptable (reveals use, authenticity)."
  prohibited: [modern_instruments, contemporary_eyeglasses, modern_cigarettes, post_1970_objects, anachronistic_items]
```

**Setting Authenticity (Fashion Editorial):**

- **Background:** Plain studio paper or canvas (white L≈92%, light gray L≈85%, charcoal gray L≈55%)
- **Lighting:** Studio lights (umbrellas, softboxes), controlled and visible in negative space
- **Props staging:** Minimal (one chair OR standing setup; no environmental context)
- **Temporal coherence:** Pure studio aesthetic, no location work visible; ALL elements contemporary with 1943-1970 Vogue production

**Setting Authenticity (Celebrity Portrait):**

- **Background:** Corner studio walls (LEFT L≈55% textured canvas, RIGHT L≈75%) — MANDATORY
- **Studio setup:** V-shaped converging walls, visible perspective geometry
- **Props placement:** At subject's hand/lap (trumpet held, book in lap); integrated into pose, not staged
- **Environmental detail:** Minimal (walls themselves are primary environment); focus on subject-in-space psychology
- **Temporal coherence:** Corner studio represents 1948-1970s fine art portraiture; timeless quality (ageless studio)

**Coherence Filter:**

- All elements (garment, props, accessories, hair, background) support declared period and mode with documented historical accuracy
- No anachronistic objects survive transformation
- Gender-differentiated prop pools reflect period social/professional realities (women's access to tools/instruments limited pre-1970s; noted in prop descriptions)
- When uncertain about temporal accuracy: OMIT rather than risk anachronism
- Fallback = minimal context (plain background + period-authentic clothing; props omitted if uncertain)

---

## 6) Safety & IP Constraints (Hard Rules)

**NO PROHIBITED CONTENT:**
- ✗ Nudity (full or partial exposure)
- ✗ Gore or graphic violence
- ✗ Real-world logos, trademarks, or watermarks (brand names on garments, company insignia)
- ✗ Real artist signatures or photographer watermarks
- ✗ Modern frames, borders, or artificial presentation framing
- ✗ Anachronistic elements (post-1970 fashion, modern eyeglasses, synthetic fabrics, contemporary aesthetics)
- ✗ Anatomical impossibilities or excessive distortion
- ✗ Contemporary eyeglasses on pre-1700 subjects (eyeglasses rare before 1700; rare before 1900)

**CANVAS NEGATIVES (Fashion Editorial Mode - ≥2 required):**

1. **Ratio Enforcement Negative:** "NOT original aspect ratio, NOT unmodified source dimensions, NOT unadapted framing, NOT [non-native ratio], NOT 1632×640, NOT arbitrary dimensions, NOT default aspect ratio, NOT unmodified canvas source"

2. **Printing Negatives:** "NOT digital photograph filter, NOT contemporary Instagram effect, NOT HDR smoothing, NOT digital perfection marker, NOT plastic sheen, NOT synthetic surface sheen, NOT digital blur effect"

3. **Anatomy Negatives:** "NOT excessive feature distortion, NOT unnatural proportions, NOT head-to-body exaggeration, NOT impossible pose geometry, NOT anatomical hallucination"

4. **Period Negatives:** "NOT modern clothing, NOT post-1970 garments, NOT contemporary eyeglasses, NOT synthetic fabrics, NOT neon colors, NOT electric pigments, NOT modern makeup styles, NOT contemporary jewelry, NOT post-1970 silhouettes"

5. **Composition Negatives:** "NOT cramped framing (require minimum 30% negative space), NOT environmental cluttering, NOT modern background intrusion, NOT contemporary studio aesthetics"

6. **Technical Negatives:** "NOT flat lighting (require 3:1 minimum ratio), NOT color cast excessive, NOT tonal crushing (shadow floor L≥18%), NOT blown highlights (L≤93%), NOT hard edges (require 0.95-1.0 sfumato)"

7. **Gender Negatives:** "NOT cross-gender styling, NOT gender expression drift between modes, NOT period-inappropriate gender presentation, NOT anatomically inconsistent gender characteristics"

---

**CANVAS NEGATIVES (Celebrity Portrait — Corner Studio Mode - ≥2 required):**

1. **Ratio Enforcement Negative:** "NOT unadapted source ratio, NOT 1632×640 default, NOT arbitrary dimensions, NOT non-native aspect ratio, NOT unmodified framing"

2. **Studio Negatives:** "NOT flat background, NOT absence of corner studio, NOT collapsed convergence, NOT missing textured walls, NOT plain paper backdrop (require canvas V-shape convergence), NOT studio geometry failure"

3. **Printing Negatives:** "NOT digital smoothing, NOT contemporary post-processing, NOT plastic surface, NOT artificial perfection, NOT HDR aesthetic, NOT Instagram filter aesthetic"

4. **Anatomy Negatives:** "NOT excessive retouching (require visible age/wrinkles/character), NOT anatomically impossible, NOT distorted proportions beyond 1:8.5 H:B, NOT feature hallucination"

5. **Period Negatives:** "NOT modern clothing, NOT post-1970 garments, NOT contemporary fashion trends, NOT synthetic suiting, NOT modern eyeglasses, NOT anachronistic props"

6. **Composition Negatives:** "NOT cramped framing, NOT subject floating without environment, NOT converging walls absent or invisible, NOT psychological intensity loss"

7. **Technical Negatives:** "NOT flat lighting (require 2:1 minimum ratio), NOT shadow crush below L=15-20%, NOT blown highlights above L=92%, NOT edge hardness below 0.85 softness coefficient"

8. **Gender Negatives:** "NOT cross-gender styling, NOT gender presentation inconsistency, NOT period-inappropriate gender characteristics, NOT anatomical gender confusion"

---

**CANVAS POSITIVES (Fashion Editorial Mode - ≥2 required):**

1. **Ratio Requirement:** "MUST be exactly [DECLARED RATIO], MUST recompose from source dimensions, MUST maintain strict ratio compliance, MUST ignore source aspect ratio entirely, MUST apply NanoBanana ratio-specific composition"

2. **Printing Process:** "MUST exhibit period-authentic gelatin silver or platinum surface, MUST show fine grain structure (ISO 100-200 equivalent), MUST maintain matte finish (no gloss), MUST preserve paper texture authenticity, MUST demonstrate authentic photographic surface (NO digital perfection)"

3. **Lighting:** "MUST employ soft sfumato modeling (0.95-1.0 softness), MUST position key light 45° camera left, MUST maintain 3:1 fill ratio, MUST preserve shadow detail (L≥18%), MUST prevent highlight blow-out (L≤93%)"

4. **Flesh Tone Accuracy:** "MUST render flesh tone base as #7B7B7B (L=48%), MUST present highlights as #D4B5A0 (L=68%), MUST define shadows as #4A4A4A (L=29%), MUST achieve skin tonal zones 5-6 per plane"

5. **Anatomical Refinement:** "MUST maintain 1:7.5-8.5 head-to-body ratio, MUST preserve elegant proportions, MUST position figure with 30-40% negative space, MUST execute contrapposto gesture with 15-25° shoulder rotation"

6. **Background:** "MUST render neutral background L=85-90%, MUST maintain flat, textureless studio paper, MUST prevent depth/atmosphere in background, MUST compose entire frame at exact [DECLARED RATIO]"

7. **Period Authenticity:** "MUST apply 1943-1970 Vogue-era wardrobe, MUST remove all modern clothing retention, MUST prevent anachronistic elements, MUST preserve hair length/color with period styling, MUST maintain gender-appropriate presentation"

8. **Hair Preservation:** "MUST preserve hair length (maintain short/medium/long as original), MUST preserve hair color (no artificial coloring), MUST preserve baldness if present, MUST apply period-appropriate styling within length constraints, MUST NOT add facial hair where none exists"

---

**CANVAS POSITIVES (Celebrity Portrait — Corner Studio Mode - ≥2 required):**

1. **Ratio Requirement:** "MUST be exactly [DECLARED RATIO], MUST compose for corner studio geometry, MUST maintain strict aspect ratio, MUST reframe converging walls for exact ratio, MUST ignore source dimensions"

2. **Corner Studio Presence:** "MUST render textured canvas walls (LEFT L≈55%, RIGHT L≈75%), MUST create visible V-shaped convergence, MUST position convergence at subject's lower back (±5%), MUST show canvas weave texture, MUST establish psychological environment through geometry alone"

3. **Printing Process:** "MUST exhibit platinum/palladium matte surface OR gelatin silver authenticity, MUST demonstrate extended tonal range (L=15-20% to L=88-92%), MUST show paper weave integration, MUST avoid digital perfection markers, MUST render with period-authentic printing characteristics"

4. **Lighting:** "MUST employ directional key light (20-60° variable angle), MUST maintain 2-4:1 fill ratio (darker than fashion mode), MUST preserve shadow detail while deepening drama, MUST achieve 6-8 tonal zones per facial plane"

5. **Flesh Tone Accuracy (Portrait):** "MUST render flesh tone base as #6B6B6B (L=42%), MUST present highlights as #C9A583 (L=61%), MUST define shadows as #3A3A3A (L=23%), MUST maintain deeper portrait palette (vs. fashion mode)"

6. **Authenticity (Non-Retouching):** "MUST preserve age lines, wrinkles, and character definition, MUST render skin with realistic texture (not airbrushed), MUST show fabric weave/material authenticity, MUST integrate worn appearance as psychological depth"

7. **Anatomical Integrity:** "MUST maintain 1:8.5 head-to-body ratio, MUST keep head ≈8% of frame, MUST achieve full-body readability, MUST render asymmetrical pose (psychological tension), MUST preserve gender-appropriate proportions"

8. **Period Authenticity:** "MUST apply 1943-1970 period-appropriate wardrobe, MUST integrate subject-defining props (instrument, tools, objects), MUST prevent anachronistic elements, MUST maintain gender-consistent presentation across modes"

9. **Hair Preservation:** "MUST preserve hair length (short/medium/long as original), MUST maintain hair color authenticity, MUST preserve baldness if characteristic, MUST retain facial hair if present, MUST apply period styling within constraints"

---

**VOCABULARY OPTIMIZATION FOR NANOBANANA:**

**USE (Specific, Technical, Effective):**
- "Soft sfumato transitions"
- "Platinum-matte surface finish"
- "Studio-controlled three-point soft lighting"
- "Architectural gesture and pose"
- "Converging corner walls with textured canvas"
- "High-key fashion aesthetic"
- "Celebrity portrait psychological intensity"
- "Refined 1:7.5-8.5 head-to-body proportion"
- "45° key light from camera left"
- "3:1 lighting ratio (key to fill)"
- "Flesh tone #7B7B7B appearing as dominant midtone"
- "Fine grain gelatin silver surface"
- "Extended tonal range L=15-20% to L=92%"
- "Zero hard edges throughout composition"

**AVOID (Ambiguous, Vague, Renderer-Confusing):**
- ✗ "Soft focus" (triggers generic blur)
- ✗ "Beautiful lighting" (subjective; renderer may interpret as overexposed)
- ✗ "Professional quality" (vague; renderer may over-sharpen)
- ✗ "Glamorous" (subjective; may trigger contemporary fashion interpolation)
- ✗ "Subtle" (ambiguous; could minimize critical specifications)
- ✗ "Elegant lighting" (non-technical; renderer may misinterpret)
- ✗ "Photorealistic" (impossible to achieve with current renderers; sets unrealistic expectations)
- ✗ "Dreamy aesthetic" (triggers soft-focus damage)
- ✗ "Contemporary photography" (contradicts Penn's era)
- ✗ "Modern portrait" (triggers contemporary aesthetics)
- ✗ "Fashion magazine glossy" (triggers plastic sheen)

**TECHNIQUE-SPECIFIC CONSTRAINTS (Triple Redundancy):**

- **Constraint 1 (Positives):** "MUST maintain 1:7.5-8.5 H:B ratio" (Section 1)
- **Constraint 2 (Measurements):** "Head-to-body proportion 1:7.5-8.5 (refined elegance, not exaggerated)" (Section 4 Measurements)
- **Constraint 3 (Validation):** "✅ Head-to-body ratio 1:7.5-8.5 verified" (Section 4 Validation)

- **Constraint 1 (Negatives):** "NOT excessive feature distortion, NOT unnatural proportions, NOT head-to-body exaggeration" (Section 6 Negatives)
- **Constraint 2 (Positives):** "MUST preserve elegant proportions" (Section 6 Positives Fashion Editorial)
- **Constraint 3 (Technique):** "Scale hierarchy anchor: anatomical stylization limits (e.g., head-to-body ratios) favor refinement over distortion" (Section 4 Context / Anchor section)

---

## 7) Composition & Lighting Patterns

### Fashion Editorial Mode

**RATIO-SPECIFIC COMPOSITION (3:4 Portrait — Primary):**

**Vertical Emphasis:** Subject fills 60-70% of frame; elegant negative space surrounds

**Subject Placement:**
- Head: Upper third of frame (25-30% from top)
- Shoulders: Upper-middle (35-45% from top)
- Waist/primary gesture: Center (45-60%)
- Lower body/hands: Bottom third (60-85%)
- Negative space: Right side (25-35% of frame), bottom (15-20%), subtle left edge (10-15%)

**Compositional Hierarchy:**
1. Face: Primary focal point (eyes, expression, psychological presence)
2. Garment/silhouette: Secondary (fashion context, material rendering)
3. Hands/gesture: Tertiary (compositional anchor, elegance extension)
4. Background: Tertiary (pure support, zero distraction)

**Perspective Regime:** Shallow depth-of-field (implied by tonal modeling, not explicit focus blur); all planes rendered with equal sharpness; psychology emerges through lighting/pose, NOT through photographic focus simulation

**Grid/Symmetry:** Off-center composition (not dead-center); asymmetry creates visual tension while maintaining elegance

**Figure-to-Ground:** 60-70% figure, 30-40% negative space

**Density:** Minimal (single figure, zero environmental clutter, pure studio)

**Lighting Logic:** Studio-controlled; key light visible in tone modeling (face illumination pattern); fill light subtle (maintains psychological presence)

**Detail-to-Negative-Space Ratio:** Optimized for declared ratio; no cropping at edges; complete composition readable within frame boundaries

---

**UNIVERSAL COMPOSITION REQUIREMENTS (Fashion Editorial):**

**Surface Context Anchor:** White or neutral-gray studio paper background, pure geometric plane (no texture, no depth, no atmospheric effect)

**Frame/Band Anchor:** OMIT ENTIRELY — no decorative frame, no border, no vignette (authentic to 1943-1970 studio photography; no ornamental treatment)

**Production Context Anchor:** Gelatin silver print substrate (matte paper, museum-quality rag paper); no contemporary digital substrate markers; paper weave imperceptible at normal viewing distance but present at macro inspection

**Ratio Enforcement Anchor:** Composition designed specifically for declared 3:4 portrait ratio (or 4:3 landscape if selected). Entire frame composition reframed from source image. No padding, no letterboxing, no artificial ratio simulation.

**Gender Expression Anchor:** Female subjects maintain refined facial feature definition, elegant proportions, soft gesture language. Male subjects maintain structured face planes, confident posture, reserved expression. Cross-mode consistency required (same subject appears as same gender in both modes).

**Mode-Specific Composition Anchor (Fashion Editorial):** High-key aesthetic (L_avg≈65%), neutral background dominance (40% negative space), fashion-silhouette emphasis, psychological elegance through pose and light modeling.

---

**STYLE-SPECIFIC COMPOSITION (Fashion Editorial):**

**Illustrated/Painted Digital Equivalent (Photography to Illustration Logic):**

- **Perspective regime:** Single vanishing point (implied one-point perspective through figure geometry; no architectural environment; pure studio)
- **Grid/Symmetry:** Asymmetrical balance (rule-of-thirds variant; off-center focal point)
- **Figure:Ground %:** 60-70% figure, 30-40% neutral background
- **Density %:** Minimal (single figure, zero environmental detail; background density 0%)
- **Lighting logic:** Studio soft-box + fill (visible in facial tonal modeling)
- **Detail:Negative Space Ratio:** High detail (skin texture, fabric weave, hand articulation) in figure; zero detail in negative space (pure background)

---

### Celebrity Portrait — Corner Studio Mode

**RATIO-SPECIFIC COMPOSITION (1:1 Square or 4:3 Landscape — Primary):**

**V-Shaped Geometry Emphasis:** Two converging walls define space; subject positioned within convergence

**Subject Placement (1:1 Square):**
- Head: Upper-middle third (25-35% from top)
- Shoulders/torso: Center (40-60%)
- Full body: Bottom edge at 90% (slight crop of feet acceptable)
- LEFT WALL: Occupies left 40-45% of frame
- RIGHT WALL: Occupies right 55-60% of frame
- Convergence point: At subject's lower back/hip (~55% horizontal, 50% vertical)

**Subject Placement (4:3 Landscape):**
- Head: Upper-middle (25-35% from top)
- Torso: Center (45-60%)
- Full body: Bottom edge at 85-90%
- LEFT WALL: Left 40% of frame (textured canvas)
- RIGHT WALL: Right 60% of frame (lighter canvas)
- Convergence: Subject positioned slightly off-center (psychological tension)
- Negative space: 45-55% of frame (walls themselves provide environment)

**Compositional Hierarchy:**
1. Subject (pose, gesture, expression): Primary
2. Corner studio walls (V-shaped convergence): Secondary (environment defines psychology)
3. Hands/props (if present): Tertiary
4. Background detail (wall texture): Subtle support

**Perspective Regime:** Two-point perspective implied (left and right walls converge forward); creates psychological depth without atmospheric recession

**Asymmetry:** Off-center subject placement; asymmetrical pose (one foot forward, unequal weight distribution)

**Figure-to-Ground:** 55-65% figure, 45-55% corner studio environment (walls visible, convergence obvious)

**Density:** Minimal environmental (walls only; zero clutter; pure studio geometry)

**Lighting Logic:** Directional key light (20-60° variable); fills illuminate corner, creating volumetric space through lighting

**Detail-to-Negative-Space:** High detail in figure; moderate detail in wall texture (weave visible); minimal additional detail

---

**UNIVERSAL COMPOSITION REQUIREMENTS (Celebrity Portrait):**

**Surface Context Anchor:** Textured canvas walls (LEFT L≈55%, RIGHT L≈75%), worn and lived-in appearance (NOT pristine; authenticity paramount)

**Frame/Band Anchor:** OMIT ENTIRELY — corner studio walls are the frame; no decorative treatment; no border

**Production Context Anchor:** Platinum/palladium OR gelatin silver print substrate; matte surface with paper weave visible (larger visible substrate texture than fashion mode); no contemporary digital markers

**Ratio Enforcement Anchor:** Composition designed for declared ratio (1:1 or 4:3). Converging walls recomposed to fill exact frame boundaries. No compression or distortion; clean V-shape geometry.

**Gender Expression Anchor:** Male subjects maintain structured faces, formal bearing, psychological presence. Female subjects maintain refined features, emotional complexity, psychological depth. Gender consistent across modes (same subject appears as same gender in both modes).

**Mode-Specific Composition Anchor (Celebrity Portrait):** Darker psychological aesthetic (L_avg≈48%), corner studio dominance (walls visible and functional), full-body framing (head ≈8% of frame), asymmetrical pose creating tension.

---

**STYLE-SPECIFIC COMPOSITION (Celebrity Portrait):**

- **Perspective regime:** Two-point implied perspective (converging walls create depth)
- **Asymmetry:** Off-center subject; unequal weight distribution; psychological imbalance
- **Figure:Ground %:** 55-65% figure, 45-55% corner studio environment
- **Density %:** Minimal environmental clutter (walls define space; zero extraneous detail)
- **Lighting logic:** Directional key light (20-60° angle variable); fill maintains shadow mystery
- **Detail:Negative Space Ratio:** High detail (face, hands, clothing) in figure; moderate detail (canvas weave) in walls; minimal additional detail

---

**REQUIRED ANCHORS (Both Modes):**

1. **Surface Context Anchor:** [Fashion: White/gray studio paper / Portrait: Textured canvas walls] appropriate to mode with authentic material characteristics
2. **Frame/Band Anchor:** Omit entirely (authentic to 1943-1970 studio photography; no decorative borders)
3. **Production Context Anchor:** [Fashion: Gelatin silver / Portrait: Platinum OR gelatin silver] substrate with period-authentic surface characteristics and visible paper/substrate texture
4. **Ratio Enforcement Anchor:** Composition designed specifically for declared final ratio (adapted if applicable); no padding, letterboxing, or distortion; intelligent spatial reorganization
5. **Gender Expression Anchor:** Pose and styling patterns appropriate to subject's gender; cross-mode consistency maintained; period-appropriate gender presentation; anatomical coherence
6. **Mode-Specific Composition Anchor:** Fashion = high-key fashion elegance / Portrait = psychological intensity through environment

---

## 8) Typography & Text Integration (If Historically Present)

**TEXT POLICY:** OMIT ENTIRELY

Irving Penn's photography stands without typography. His images are fine art objects, not magazine layouts. No signature, no watermark, no text overlay, no mastheads.

**Exception (if historical accuracy requires):** If reproducing specific Vogue magazine cover context, typography may be integrated as period-appropriate masthead and coverline placement (rare; typically avoided). If implemented:

- **Typography policy:** Publication-era appropriate (serif fonts 1940s-50s; sans-serif modern by 1960s)
- **Typeface:** Closest Google Font if 85%+ match; otherwise cite archival family as inspiration
- **Placement:** Minimal (masthead top 5%, coverlines bottom 10-15%)
- **Visibility:** Text does NOT obscure subject; secondary to image
- **Color:** Black (#000000) or white (#FFFFFF) only; NO color text
- **Integration:** Text appears on photograph as printed magazine context, not as overlay

**Current Framework:** Typography PROHIBITED (Penn's fine art aesthetic, not magazine design)

---

