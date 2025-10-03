# Universal Museum-Grade Anime Style Prompts v4.0 - Canvas Control Enhanced

## Studio Ghibli Style - Naturalistic Poetry

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 portrait** or **16:9 landscape** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Studio Ghibli's naturalistic animation** style for **[exact format specification]**." **Likeness (style-first):** Identity via silhouette/gesture/expression; integrate fully into hand-drawn cel animation medium; avoid photorealistic faces. **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `gestural-fluid` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** Ghibli's organic, flowing aesthetic rules override generic anime conventions. **Mode Selector:** Choose [Portrait] or [Environmental Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (character portrait focus)
- **16:9** (environmental storytelling)
- **3:4** (traditional illustration)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with atmospheric background expansion
- **Spatial Allocation:** Subject positioned within natural environmental context (rule-of-thirds)
- **Background Treatment:** Extend watercolor-influenced atmospheric elements (sky, foliage, distant landscapes) to fill new canvas space
- **Format Justification:** Ghibli's environmental storytelling tradition supports both intimate portraits and panoramic scenes

### 3) Artistic Style & Context

Studio Ghibli's signature approach (1985-present) combines **watercolor-influenced backgrounds** with **soft cel animation**, drawing from European fairy tale illustration and Japanese nature worship. Production method emphasizes **85-90% hand-drawn content** with minimal digital smoothing, maintaining organic imperfections that create warmth. Purpose spans environmental storytelling through intimate character portraits within **naturalistic fantasy settings**. Hallmark motifs include **flowing fabric physics, atmospheric perspective, detailed food rendering, architectural integration with nature,** and **Ma philosophy negative space**. Period framing encompasses **timeless pastoral aesthetics** with subtle technological anachronisms creating dreamlike temporal ambiguity.

### 4) Technical Execution

**Line:** Outer contours **0.8-1.2 pt** with gentle, organic curves; interior details **0.3-0.6 pt** following natural form flow. No harsh geometric angles except for architectural elements. Line density **8-15 lines/inch** for texture work, primarily in hair and fabric. **Color:** Earth-tone dominated palette at **70-85% saturation** comprising 60-70% total composition. Ghibli signature colors: sky blues (#176a90, #a3c5e0), forest greens (#74cc66), sunset oranges (#e2dd3f), warm browns (#8b4513). Avoid pure blacks or whites; use warm grays and cream tones. **Texture:** Watercolor-mimicking gradients with soft edge bleeding **2-4 px**. Atmospheric stippling **1-2 px** for distant elements. Natural fabric drape with gravity-influenced flow patterns. **Detail hierarchy:** Faces and hands receive highest detail attention, environmental elements simplified to impressionistic suggestions, food and mechanical objects rendered with loving precision. **Material simulation:** Traditional cel production artifacts with **±0.5 px registration** variance. Paint bucket fills with slight texture grain **85-95 LPI equivalent**. Subtle color vibration **±3-5% hue shift** mimicking hand-painted cels. **Canvas Adaptation Anchor:** Composition flows naturally within declared aspect ratio; background elements extend seamlessly to canvas edges.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** Flowing A-line silhouettes, hemlines mid-calf to ankle length, modest necklines (crew, boat, high collar), three-quarter to full sleeves, ornament scale **0-2** (simple jewelry, hair accessories); hair & makeup scale **0-1** (natural only); comfortable flats or low boots.
- **Adults (male-presenting):** Relaxed tailoring with natural drape, button-up shirts or vests, straight-leg trousers, minimal lapels if jackets present, simple caps or bare head; jewelry **0-1** pieces (watch, simple ring); **no formal business attire**.
- **Youth (girls/boys):** Simple dresses, overalls, or comfortable separates; **no form-fitting or revealing cuts**; sturdy shoes or bare feet; **no makeup**; **age-appropriate props only**.
- **Fabric behavior:** Natural drape emphasizing cotton, linen, wool textures; matte surfaces with minimal synthetic sheen. Gentle wrinkle patterns following body movement.

**Prop Selector**

```yaml
props:
  common: [wicker basket, watering can, simple book, clay pot, wooden spoon]
  occasional: [telescope, music box, hand mirror, seed packet]
  rare: [magical amulet, floating crystal, spirit mask]
  micro: [flower sprig, butterfly, acorn, small stone]
```

### 6) Constraints

**❌ Canvas Negatives:** "original aspect ratio", "source dimensions", "photorealistic preservation"; **NO photorealistic skin textures/pores**; **NO sharp digital artifacts**; **NO neon or synthetic colors**; **NO oversaturated vivid colors**. **✅ Canvas Positives:** "exactly [declared ratio]", "recomposed for naturalistic storytelling"; **Complete transformation into hand-painted Ghibli aesthetic**; **Natural atmospheric lighting**; **Organic line variation with hand-drawn imperfection**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Vertical emphasis with subject positioned lower-third, atmospheric background filling upper portion
- **For 16:9 Landscape:** Environmental panorama with character integrated naturally, Ma philosophy negative space
- **For 3:4:** Classical illustration balance with environmental context

**Staging:** Subjects positioned within **environmental context** showing relationship to natural world. **Background density:** Detailed but not competing with subject; **atmospheric perspective** with distant elements becoming softer and cooler. **Surface Context Anchor:** Traditional illustration paper or canvas surface appropriate to hand-drawn animation **Ratio Enforcement Anchor:** Composition designed specifically for declared ratio, extending Ghibli's environmental philosophy

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Ghibli animation style for static portraits; **omit all embedded text**. Ghibli films rely on pure visual storytelling.

------

## Naruto/Shonen Style - Dynamic Energy

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 poster format** or **3:4 portrait** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Naruto/Weekly Shonen Jump** battle manga animation style for **exact format specification**." **Face-Treatment Flag:** `poster-ink` **Pose Flag:** `power-stance` **Canvas Control Flag:** `strict-reframe` **Mode Selector:** Choose [Action Portrait] or [Power-Up Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (manga cover/poster format)
- **3:4** (character portrait)
- **16:9** (action sequence)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with dynamic action emphasis
- **Spatial Allocation:** Subject positioned for maximum heroic impact (lower-third for title space in poster mode)
- **Background Treatment:** Simplified energy backgrounds, speed lines extending to canvas edges
- **Format Justification:** Shonen manga cover traditions require vertical emphasis for dynamic character presentation

### 3) Artistic Style & Context

Weekly Shonen Jump's influential aesthetic (1968-present) emphasizes **bold character designs** supporting **dynamic action sequences** and **emotional intensity**. Production method combines **hand-drawn key animation** with **digital coloring and compositing**, maintaining manga's high-contrast line art translated to motion. Hallmark motifs include **gravity-defying hair designs, oversized eyes expressing determination, speed lines and impact frames, transformation sequences,** and **symbolic power auras**.

### 4) Technical Execution

**Line:** Bold outer contours **2.5-3.5 pt** with confident, angular strokes; interior details **0.8-1.5 pt** emphasizing feature definition. Sharp, geometric accent lines for impact moments. **Color:** High-saturation palette at **90-95% intensity** with maximum brightness reserved for power/emotional moments. Shonen signature colors: determination orange (#ff6b35), power blue (#4169e1), energy yellow (#ffd700). **Canvas Adaptation Anchor:** Dynamic composition optimized for declared aspect ratio with speed lines and energy effects extending to canvas boundaries.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** Practical combat wear or modified traditional garments, hemlines practical for movement, fitted but non-revealing tops with mesh/armor accents, functional accessories.
- **Adults (male-presenting):** Combat-ready clothing with layered complexity, high-collar jackets or open vests, cargo pants or wrapped leg gear, asymmetrical design elements.

**Prop Selector**

```yaml
props:
  common: [kunai knife, shuriken, scroll, headband, training weight]
  occasional: [chakra-infused weapon, summoning contract, soldier pill]
  rare: [legendary artifact, special clan weapon, tailed beast item]
```

### 6) Constraints

**❌ Canvas Negatives:** "original framing", "passive expressions", "modern civilian clothing"; **NO photorealistic rendering**; **NO melancholy expressions**. **✅ Canvas Positives:** "exactly [declared ratio]", "dynamic action composition"; **Bold color contrasts**; **Sharp shadow definition**; **Energetic hair movement**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Poster:** Vertical action emphasis with title space consideration
- **For 3:4 Portrait:** Character dominance with simplified energy background
- **For 16:9 Action:** Horizontal dynamic movement with environmental context

**Staging:** Subjects positioned in **dynamic action poses** showing readiness for challenge. **Background density:** Simplified to support character prominence with motion blur effects.

### 8) Typography & Text Integration

**Binary:** omit - **Not typically authentic** to anime portraits; **omit embedded text** unless creating manga-style panel.

------

## Masaaki Yuasa Style - Experimental Fluidity

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 experimental format** or **1:1 artistic square** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Masaaki Yuasa's experimental fluid animation** style for **exact format specification**." **Face-Treatment Flag:** `organic-flowing` **Pose Flag:** `gestural-fluid` **Canvas Control Flag:** `format-native` **Mode Selector:** Choose [Experimental Portrait] or [Fluid Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (cinematic experimental)
- **1:1** (artistic square composition)
- **3:4** (traditional with experimental treatment)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** format-native with experimental boundary breaking
- **Spatial Allocation:** Subject positioned with asymmetrical experimental emphasis
- **Background Treatment:** Flowing abstract elements that breathe and move organically
- **Format Justification:** Yuasa's experimental approach adapts fluidly to any canvas while maintaining organic authenticity

### 3) Artistic Style & Context

Masaaki Yuasa's revolutionary approach (1992-present) breaks **conventional animation boundaries** through **fluid organic movement**, **experimental color psychology**, and **reality-bending visual metaphors**. Production method emphasizes **hand-drawn experimental techniques** with **digital color experimentation**, **morphing character proportions**, and **psychological color coding**. Hallmark motifs include **fluid character deformation**, **experimental color temperature shifts**, **organic background breathing**, **reality-metaphor visual integration**, and **psychological landscape rendering**.

### 4) Technical Execution

**Line:** **Organic experimental weights** ranging **0.3-3.0 pt** with **fluid variation** based on **emotional intensity** and **scene psychology**. **Hand-drawn experimental quality** with **intentional imperfection** and **organic flow variation**. **Color:** **Experimental psychological palettes** with **unexpected color relationships** and **emotional temperature shifts**. **Reality-bending color coding** reflecting **character psychological states**. **Canvas Adaptation Anchor:** Experimental composition that organically adapts to any ratio while maintaining Yuasa's fluid authenticity.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Experimental clothing** that **flows and morphs** with **character emotion** and **scene psychology**
- **Organic fabric behavior** showing **reality-bending physics** and **emotional responsiveness**
- **Color choices** reflecting **psychological states** rather than **realistic fashion**

**Prop Selector**

```yaml
props:
  common: [fluid object, morphing tool, emotional artifact, reality anchor, experimental item]
  occasional: [psychological symbol, fluid technology, organic device]
  rare: [reality-bending object, experimental artifact]
```

### 6) Constraints

**❌ Canvas Negatives:** "conventional proportions", "static composition", "realistic physics"; **NO conventional anime limitations**; **NO static environmental elements**. **✅ Canvas Positives:** "exactly [declared ratio]", "experimental organic flow"; **Fluid character deformation**; **Experimental color psychology**; **Reality-bending visual integration**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9:** Cinematic experimental flow with organic boundary integration
- **For 1:1:** Radial experimental composition with central psychological focus
- **For 3:4:** Traditional format with experimental organic treatment

**Staging:** Subjects positioned within **experimental organic flow** showing **psychological authenticity** through **visual metaphor integration**.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Yuasa's experimental visual approach; **omit all embedded text**. Yuasa emphasizes **pure experimental visual storytelling**.

------

## Osamu Dezaki Style - Dramatic Expressionism

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 dramatic portrait** or **16:9 cinematic postcard** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Osamu Dezaki's dramatic postcard memory** style for **exact format specification**." **Likeness (style-first):** Identity via silhouette/intense emotional gesture/dramatic expression; integrate into painted-cel hybrid medium emphasizing psychological depth. **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `contrapposto` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** Dezaki's theatrical expressionism overrides naturalistic proportions, emphasizing emotional impact through visual drama. **Gender respect:** Honor presented gender while maintaining Dezaki's mature, psychologically complex character designs. **IP guardrail:** Archetypes only; no direct references to Ashita no Joe, Space Cobra, or other Dezaki properties. **Mode Selector:** Choose [Dramatic Portrait] or [Postcard Memory] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (dramatic portrait emphasis)
- **16:9** (cinematic postcard memory)
- **3:4** (traditional dramatic composition)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with dramatic atmospheric expansion
- **Spatial Allocation:** Subject positioned using dramatic lighting angles (off-center, chiaroscuro emphasis)
- **Background Treatment:** Extend architectural shadows and atmospheric effects to fill dramatic canvas space
- **Format Justification:** Dezaki's postcard memory technique adapts to any ratio through atmospheric extension and dramatic lighting

### 3) Artistic Style & Context

Osamu Dezaki's revolutionary approach (1963-2011) pioneered **"postcard memories" (tome-e)** technique, creating **pastel freeze-frames** lasting several seconds, transitioning from traditional cel animation to **detailed painted still images**. Production method emphasizes **dramatic camera work** with **Dutch angle compositions**, **multilayer scrolling backgrounds**, and **8fps limited animation** compensated by artistic still compositions. Purpose focuses on **psychological character exploration** through **visual metaphor** and **emotional symbolism**. Hallmark motifs include **dramatic chiaroscuro lighting, glass rose symbolism, split-screen internal monologues, architectural shadows,** and **atmospheric perspective shifts**. Period framing encompasses **adult-oriented drama** with **film noir influences** creating sophisticated visual storytelling.

### 4) Technical Execution

**Line:** Variable dramatic weights ranging **0.5-2.0 pt** based on lighting conditions and emotional intensity; interior details **0.3-0.8 pt** following form-defining shadows. **Angular, geometric accent lines** for dramatic emphasis. Selective **cross-hatching 18-28 lines/inch** for shadow work and psychological texture. **Color:** **Controlled palette** transitioning between **muted dramatic tones (40-60% saturation)** and **intense emotional peaks (80-95% saturation)**. Dezaki signature techniques: **warm/cool temperature contrasts**, **spotlight isolation effects**, **gradient washes** for atmospheric depth. **Postcard memory mode:** **desaturated pastels (30-50% saturation)** with **gouache-like opacity**. **Texture:** **Painterly surface treatment** with **visible brush stroke simulation**. **Atmospheric stippling 1-3 px** for mood establishment. **Glass and reflection effects** with **specular highlights** and **environmental reflections**. **Detail hierarchy:** **Bone structure and facial planes** receive maximum attention, **hands as emotional expression tools**, clothing simplified to **dramatic silhouette elements**, backgrounds **impressionistic but architecturally sound**. **Material simulation:** **Traditional-digital hybrid** with **painted overlay effects**. **Selective focus depth** with **±2-4 px blur gradients**. **Film grain texture 0.5-1%** for cinematic quality. **Canvas Adaptation Anchor:** Dramatic composition extends atmospheric elements seamlessly within declared aspect ratio, emphasizing emotional storytelling. **Renderer mapping hint:** Set stylization to 70-85%, chaos to 20-35%, CFG scale 8-11 for dramatic contrast balance.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** Sophisticated silhouettes with **dramatic collar/neckline elements**, hemlines varying for **visual flow and wind effects**, fitted sleeves showing **arm gesture definition**, ornament scale **1-3** (statement jewelry, scarves, artistic accessories); hair & makeup scale **1-2** (defined but not theatrical); **elegant heels or sophisticated flats**.
- **Adults (male-presenting):** **Structured tailoring** with **strong shoulder lines**, **high-contrast collar treatments**, **fitted but not restrictive cuts**, **dramatic coat/jacket elements**; jewelry **1-2** pieces (significant accessories, watches); **formal or artistic styling preferred**.
- **Youth (girls/boys):** **Age-appropriate formal wear** with **clean lines**; **no adult sophistication mimicry**; **practical footwear**; **minimal makeup**; **props supporting character development themes**.
- **Fabric behavior:** **Natural drape** with **attention to wind and movement effects**. **Realistic fabric physics** supporting **dramatic gesture emphasis**. **Texture variety** from smooth to roughly woven.

**Prop Selector**

```yaml
props:
  common: [glass rose, cigarette case, pocket watch, leather-bound book, wine glass]
  occasional: [vintage camera, classical instrument, art brush, chess piece]
  rare: [symbolic artifact, family heirloom, artistic masterpiece]
  micro: [match, coin, letter, small photograph]
  exclusions:
    - "no cute or childish items"
    - "no modern casual technology"
  dependencies:
    - "symbolic items require thematic relevance to character psychology"
```

### 6) Constraints

**❌ Canvas Negatives:** "original aspect ratio", "conventional anime proportions", "bright cheerful colors"; **NO cute or moe aesthetic elements**; **NO casual contemporary clothing**; **NO simplified rendering during emotional peaks**. **✅ Canvas Positives:** "exactly [declared ratio]", "dramatic atmospheric extension"; **Strong directional lighting** with **dramatic shadow play**; **Architectural backgrounds** supporting psychological mood; **Mature character proportions**; **Sophisticated color temperature control**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Dramatic vertical emphasis with chiaroscuro lighting, subject positioned for maximum emotional impact
- **For 16:9 Cinematic:** Postcard memory treatment with atmospheric depth and architectural context
- **For 3:4 Traditional:** Classic dramatic composition with psychological architectural support

**Staging:** Subjects positioned within **dramatic lighting scenarios** emphasizing **psychological state through environmental interaction**. **Camera/perspective:** **Dutch angles 15-45 degrees** for psychological tension; **low angles for character empowerment**; **high angles for vulnerability or contemplation**. **Background density:** **Architecturally detailed** but **atmospherically simplified** to support character psychology. **Surface Context Anchor:** Painted cel animation surface appropriate to dramatic artistic expression **Ratio Enforcement Anchor:** Dramatic atmospheric elements extend naturally to fill declared ratio while maintaining psychological focus.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Dezaki's cinematic approach for static portraits; **omit all embedded text**. Dezaki's technique relies on **pure visual storytelling** and **atmospheric composition**.

------

## Kyoto Animation Style - Moe Perfection

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 character portrait** or **16:9 slice-of-life** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Kyoto Animation's moe perfection** style for **exact format specification**." **Likeness (style-first):** Identity via distinctive silhouette/gentle gesture/expressive large eyes; integrate into ultra-refined cel animation medium emphasizing cuteness and emotional appeal. **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `candid-motion` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** KyoAni's moe aesthetic overrides realistic proportions, emphasizing youthful appeal and emotional expressiveness. **Gender respect:** Honor presented gender while maintaining KyoAni's signature character design philosophy of universal appeal. **IP guardrail:** Archetypes only; no direct references to K-On!, Haruhi, Violet Evergarden, or other KyoAni properties. **Mode Selector:** Choose [Character Portrait] or [Slice-of-Life Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (character focus with moe appeal)
- **16:9** (slice-of-life environmental storytelling)
- **4:5** (Instagram-style character portrait)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with gentle environmental expansion
- **Spatial Allocation:** Subject positioned for maximum moe appeal (centered or rule-of-thirds with gentle offset)
- **Background Treatment:** Extend detailed slice-of-life environments (schools, cafes, seasonal settings) with architectural precision
- **Format Justification:** KyoAni's detailed background philosophy supports any ratio through environmental extension while maintaining character focus

### 3) Artistic Style & Context

Kyoto Animation's meticulous approach (1981-present) perfected **"KyoAni face" moe aesthetics** through **gigantic expressive eyes** and **ultra-detailed character animation**. Production method emphasizes **full 24fps character movement** with **hand-drawn precision**, **in-house digital coloring** using **RETAS Paintman software**, and **cut-by-cut color adjustment** for optimal visual harmony. Purpose centers on **emotional slice-of-life storytelling** through **character micro-expressions** and **detailed environmental integration**. Hallmark motifs include **complex iris patterns with multiple highlights, soft fabric physics, detailed background architecture, seasonal lighting effects,** and **gentle comedy timing**. Period framing encompasses **contemporary Japanese settings** with **idealized daily life presentation** creating aspirational realism.

### 4) Technical Execution

**Line:** Ultra-refined outer contours **0.5-1.0 pt** with perfect curves and soft angles; interior details **0.25-0.5 pt** emphasizing facial feature definition and fabric flow. **Consistent line weight hierarchy** with no dramatic variations. Minimal hatching **8-12 lines/inch** only for subtle texture work. **Color:** **High-saturation harmony** at **70-85% intensity** maintaining **temperature consistency** throughout composition. KyoAni signature approach: **complex iris coloring with gradient effects**, **skin tones with subtle pink undertones**, **clothing colors supporting character personality**. **Environmental color matching** with character palette for **unified composition**. **Texture:** **Smooth cel-shading** with **gentle gradient transitions**. **Hair rendering** with **individual strand attention** and **natural volume physics**. **Fabric texture simulation** showing **material weight** and **drape characteristics**. **Background detail integration** at **architectural precision level**. **Detail hierarchy:** **Eyes receive maximum detail** with **complex iris patterns, multiple highlights (2-4 per eye), subtle sclera shading**, **facial features refined to perfection**, **hair volume and movement physics**, clothing **fabric behavior accuracy**. **Material simulation:** **Digital cel production** with **perfect registration**. **Color bucket fills** with **slight texture grain 90-100 LPI**. **Soft lighting effects** with **realistic shadow casting** and **environmental light reflection**. **Canvas Adaptation Anchor:** Composition maintains KyoAni's detailed environmental integration within declared aspect ratio, extending slice-of-life settings naturally. **Renderer mapping hint:** Set stylization to 75-85%, chaos to 5-15%, CFG scale 8-10 for precision and harmony balance.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Cute-sophisticated silhouettes** with **A-line or fit-and-flare shapes**, hemlines **knee-length to mid-calf**, **modest necklines (crew, boat, Peter Pan collar)**, **three-quarter to full sleeves**, ornament scale **1-2** (cute accessories, hair clips, simple jewelry); hair & makeup scale **0-1** (natural with possible **subtle eye emphasis**); **comfortable cute shoes or school-appropriate footwear**.
- **Adults (male-presenting):** **Clean, youthful tailoring** with **relaxed but neat fit**, **button-up shirts or casual sweaters**, **straight-leg casual pants**, **minimal formal elements**, **no harsh geometric styling**; jewelry **0-1** pieces (simple, understated); **casual-smart appearance**.
- **Youth (girls/boys):** **School uniforms or age-appropriate casual wear**; **no revealing cuts whatsoever**; **emphasis on comfortable, cute styling**; **flat shoes or sneakers**; **no makeup beyond natural appearance**; **school/hobby-related props only**.
- **Fabric behavior:** **Soft, natural drape** emphasizing **cotton, wool, and natural fiber textures**. **Gentle movement physics** showing **fabric weight and seasonal appropriateness**. **Minimal synthetic sheen** except for specific material accuracy.

**Prop Selector**

```yaml
props:
  common: [musical instrument, school bag, cute notebook, tea cup, small stuffed animal]
  occasional: [camera, art supplies, cooking utensil, book, handheld game]
  rare: [special hobby equipment, musical score, handmade craft]
  micro: [hair clip, pencil, small snack, button badge, keychain charm]
  exclusions:
    - "no weapons or aggressive items"
    - "no adult/mature themes"
    - "no overly complex mechanical items"
  dependencies:
    - "school items require appropriate age context"
    - "musical instruments must match character's implied skill level"
```

### 6) Constraints

**❌ Canvas Negatives:** "source image dimensions", "harsh angular designs", "aggressive themes"; **NO overly mature styling**; **NO photorealistic rendering that eliminates anime charm**; **NO dark or gritty environmental elements**. **✅ Canvas Positives:** "exactly [declared ratio]", "slice-of-life environmental extension"; **Gentle, soft lighting** with **warm color temperatures**; **Detailed background environments** supporting daily life; **Complex eye rendering**; **Soft fabric physics**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Character-focused with detailed environmental context support
- **For 16:9 Slice-of-Life:** Environmental storytelling with character naturally integrated
- **For 4:5 Portrait:** Instagram-style character focus with gentle background blur

**Staging:** Subjects positioned in **comfortable, relatable daily life scenarios** showing **natural interaction with environment**. **Camera/perspective:** **Eye-level to slightly low angles** maintaining **approachable, non-threatening viewpoints**. **Background density:** **Highly detailed** but **supporting character prominence**; **realistic environmental accuracy** with **idealized cleanliness and appeal**. **Surface Context Anchor:** High-quality cel animation surface appropriate to slice-of-life storytelling **Ratio Enforcement Anchor:** KyoAni's environmental detail philosophy extends naturally to fill declared ratio while maintaining character appeal.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to KyoAni animation style for static portraits; **omit all embedded text**. KyoAni focuses on **pure character expression** and **environmental storytelling**.

------

## Gainax Style - Experimental Dynamism (Yoshiyuki Sadamoto Focus)

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 technical portrait** or **16:9 professional scene** - ignore source image dimensions completely. **CRITICAL STYLE DOMINANCE:** Yoshiyuki Sadamoto's character design mastery overrides ALL photographic likeness and conventional anime simplification. **COMPLETE TECHNICAL PRECISION TRANSFORMATION REQUIRED.** **Redraw command:** "Transform subject into authentic **Yoshiyuki Sadamoto character design** for **exact format specification** - NOT photorealistic styling or generic anime." **Anti-Likeness Priority:** **NO photographic skin textures, bone structure proportions, or facial geometry.** **Completely redraw using Sadamoto's realistic anime proportions and technical precision.** Identity through **confident gesture and psychological depth only, NOT facial accuracy.** **Face-Treatment Flag:** `poster-ink` **Pose Flag:** `contrapposto` **Canvas Control Flag:** `strict-reframe` **Maximum Technical Precision:** **Subject must look like hand-drawn Sadamoto character design, not person with anime filter.** **Complete medium conversion to technical anime realism with psychological depth.** **Mode Selector:** Choose [Sadamoto Character Design], [Technical Portrait], or [Psychological Study] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (technical character design emphasis)
- **16:9** (professional environmental context)
- **3:4** (traditional with technical precision)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with technical precision emphasis
- **Spatial Allocation:** Subject positioned for professional competence display (confident positioning, technical environment integration)
- **Background Treatment:** Lived-in technical environments with personal touches and realistic wear patterns
- **Format Justification:** Sadamoto's professional character design requires precise framing that emphasizes technical competence and psychological authenticity

### 3) Artistic Style & Context

Yoshiyuki Sadamoto's character design mastery (1962-present) established **realistic anime proportions** through **technical precision** and **psychological depth**. Production method emphasizes **hand-drawn technical accuracy** with **detailed anatomical understanding**, **sophisticated line control**, and **realistic human imperfection integration**. Purpose focuses on **mature character development** through **confident presentation** and **psychological authenticity**. Hallmark motifs include **sharp angular facial features with subtle asymmetries, realistic 7-8 head proportions, complex iris detail work, individual hair strand definition,** and **lived-in environmental integration**. Period framing encompasses **contemporary Japanese settings** with **technical precision** and **psychological realism** creating **authentic mature anime character design**.

### 4) Technical Execution

**Line:** **Technical precision weights** ranging **0.8-1.5 pt** for **sharp character definition** with **controlled, confident strokes** and **hand-drawn variation ±0.2pt** for organic authenticity; interior details **0.4-0.8 pt** emphasizing **angular facial structure** and **anatomical accuracy**. **Sharp, geometric accent lines** for **feature definition** with **subtle imperfection integration**. **Color:** **Realistic skin tone palette** at **75-85% saturation** with **subtle temperature variations** and **natural color shifts** across facial planes. Sadamoto signature approach: **complex iris coloring with multiple color rings and detailed radial patterns**, **realistic hair color variation**, **sophisticated clothing color coordination**. **Natural lighting interaction** with **realistic shadow casting**. **Eyes (ENHANCED SADAMOTO SPECIFICATIONS):** **Subtle almond shapes with realistic corners** - not rounded anime eyes. **Complex iris internal structure** with **multiple color rings** and **detailed radial patterns**. **3-4 strategic highlights** positioned at **different angles** for depth. **Realistic eye socket shadowing** with **subtle asymmetry**. **Hair Physics (CRITICAL):** **Individual strand definition** with **natural separation patterns**. **Realistic weight distribution** causing **slight asymmetrical fall**. **Hand-drawn texture irregularities** - not digital smoothness. **Natural movement suggesting** recent head movement. **Subtle messiness** and **realistic imperfection**. **Canvas Adaptation Anchor:** Technical precision composition optimized for declared aspect ratio, emphasizing professional competence within appropriate format. **Renderer mapping hint:** Set stylization to 75-85%, chaos to 15-25%, CFG scale 9-12 for **technical precision** with **organic authenticity**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Sophisticated contemporary clothing** with **technical design precision**, **practical hemlines** for **confident professional movement**, **structured necklines** with **collar or technical details**, **fitted sleeves** showing **natural arm definition**, ornament scale **1-2** (technical accessories, sophisticated jewelry, professional items); hair & makeup scale **1-2** (defined features with **natural imperfection**, technical precision); **practical sophisticated footwear**.
- **Adults (male-presenting):** **Sharp tailoring** with **geometric design elements** and **realistic wear patterns**, **high-collar technical shirts** or **structured jackets**, **fitted pants** with **technical precision** and **natural fabric behavior**, **confident design choices** with **subtle asymmetrical elements**; jewelry **0-2** pieces (technical accessories, sophisticated items); **professional competence styling**.

**Prop Selector**

```yaml
props:
  common: [technical device, professional manual, communication equipment, analytical tool, personal item]
  occasional: [advanced interface, control device, research equipment, specialized gear]
  rare: [prototype technology, command insignia, advanced technical device]
  micro: [ID badge, personal token, technical accessory, cultural item]
  exclusions:
    - "no cute or childish items"
    - "no generic sci-fi without realism"
    - "choose-one: [technical device, professional tool, personal item]"
  dependencies:
    - "technical items require functional design logic"
    - "personal items must reflect character psychology"
    - "professional items match character competence and specialization"
```

### 6) Constraints

**❌ Canvas Negatives:** "photorealistic preservation", "generic anime simplification", "sterile perfection"; **NO passive or weak character presentation**; **NO conventional anime tropes without psychological justification**; **NO uniform lighting or perfect environments**. **✅ Canvas Positives:** "exactly [declared ratio]", "technical precision character design"; **Sharp angular facial features** with **realistic asymmetries**; **Technical precision** with **human authenticity**; **Confident character presentation** with **psychological depth**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Technical character design emphasis with professional competence focus
- **For 16:9 Scene:** Professional environmental integration with character psychological authenticity
- **For 3:4 Traditional:** Classic format with Sadamoto's technical precision treatment

**Staging:** Subjects positioned in **confident, technically precise poses** showing **professional competence** and **psychological authenticity** with **natural human warmth**. **Background density:** **Lived-in technical environments** with **personal touches** and **usage wear patterns**. **Atmospheric lighting variation** - not uniform corporate illumination. **Surface Context Anchor:** Technical animation production surface appropriate to professional character design **Ratio Enforcement Anchor:** Professional technical environments extend naturally within declared ratio while maintaining character psychological focus.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Sadamoto's character design approach for static portraits; **omit all embedded text**. Sadamoto emphasizes **pure technical character design** and **psychological visual storytelling**.

---

## Makoto Shinkai Style - Photorealistic Poetry

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 environmental panorama** or **2:3 character-environment** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Makoto Shinkai's photorealistic poetry** style for **exact format specification**." **Likeness (style-first):** Identity via **realistic silhouette/natural gesture/subtle expression**; integrate into **photorealistic background** with **anime character** hybrid medium emphasizing **environmental storytelling**. **Face-Treatment Flag:** `diffusion-soft` **Pose Flag:** `candid-motion` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** Shinkai's photorealistic environmental approach overrides conventional anime backgrounds while maintaining **subtle anime character stylization**. **Gender respect:** Honor presented gender while maintaining Shinkai's **realistic human proportions** and **natural character design**. **IP guardrail:** Archetypes only; no direct references to Your Name, Weathering With You, 5 Centimeters per Second, or other Shinkai properties. **Mode Selector:** Choose [Environmental Portrait] or [Atmospheric Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (environmental storytelling emphasis)
- **2:3** (character-environment integration)
- **21:9** (ultra-wide atmospheric panorama)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with photorealistic environmental expansion
- **Spatial Allocation:** Subject positioned within vast environmental context (environmental dominance with character integration)
- **Background Treatment:** Extend 4K-8K photorealistic environments (skies, urban landscapes, natural settings) with atmospheric depth
- **Format Justification:** Shinkai's environmental poetry philosophy supports wide formats for atmospheric storytelling while maintaining character connection to setting

### 3) Artistic Style & Context

Makoto Shinkai's distinctive approach (1996-present) combines **photorealistic backgrounds** with **subtle anime character integration** through **meticulous environmental detail** and **atmospheric lighting mastery**. Production method emphasizes **4K-8K background resolution** later downsampled, using **photo referencing** with **heavy digital painting overlay** and **custom brush creation** from **desaturated, inverted photographs**. Purpose focuses on **environmental storytelling** through **atmospheric mood** and **natural light behavior**. Hallmark motifs include **signature lens flares, blue-orange color contrasts, atmospheric glow effects, detailed cloud rendering,** and **natural light simulation following realistic physics**. Period framing encompasses **contemporary Japanese settings** with **idealized natural beauty** creating **aspirational environmental realism**.

### 4) Technical Execution

**Line:** **Minimal character outlining** at **0.3-0.7 pt** with **soft, organic curves** following **natural form**; **environmental elements** use **photorealistic edge definition** without **hard line work**. **Character integration** through **subtle outline work** that **doesn't break environmental realism**. **Color:** **Blue-orange dominated palette** at **70-80% saturation** with **signature color combinations**: **atmospheric blues (#6e7f80, #304451, #708090)**, **warm sunset oranges (#ff8c42, #ffa726)**, **natural skin tones** with **subtle pink undertones**. **Environmental color temperature shifts** following **realistic atmospheric perspective**. **Texture:** **Photorealistic background rendering** with **atmospheric glow effects** using **15-30% opacity layers** and **soft round brush techniques**. **Natural light simulation** with **rim lighting on clouds** and **color temperature gradients**. **Character skin** with **subtle realistic texture** avoiding **anime flatness**. **Detail hierarchy:** **Environmental backgrounds** receive **maximum photorealistic detail**, **character faces** with **realistic proportions** but **slightly enlarged eyes**, **clothing** with **realistic fabric behavior** and **environmental light reflection**. **Material simulation:** **4K-8K background detail** with **digital painting overlay**. **Screen blending modes** for **additive glow effects** along **horizons and light sources**. **Atmospheric perspective** through **color temperature shifts** and **detail reduction** with **distance**. **Canvas Adaptation Anchor:** Environmental photorealism extends seamlessly within declared aspect ratio, with character naturally integrated into atmospheric storytelling. **Renderer mapping hint:** Set stylization to 60-75%, chaos to 10-20%, CFG scale 8-11 for **realistic-anime balance**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Contemporary Japanese fashion** with **realistic proportions**, **practical hemlines** for **daily activities**, **natural necklines** without **anime exaggeration**, **seasonal appropriateness**, ornament scale **0-2** (realistic accessories, natural jewelry); hair & makeup scale **0-1** (natural, realistic styling); **practical footwear** appropriate to **environmental setting**.
- **Adults (male-presenting):** **Contemporary casual** or **business casual** wear with **realistic fit**, **seasonal appropriateness**, **minimal formal elements** unless **environmentally justified**; jewelry **0-1** pieces (realistic, understated); **natural styling** throughout.
- **Youth (girls/boys):** **School uniforms** or **age-appropriate casual wear** with **realistic proportions**; **no stylized anime elements**; **practical footwear**; **no makeup**; **age-appropriate environmental interaction**.
- **Fabric behavior:** **Realistic drape physics** following **actual material properties**. **Environmental interaction** showing **wind effects**, **weather influence**, and **realistic wear patterns**. **Natural material textures** with **photorealistic rendering**.

**Prop Selector**

```yaml
props:
  common: [smartphone, shoulder bag, umbrella, bicycle, camera, book]
  occasional: [musical instrument, art supplies, sports equipment, travel gear]
  rare: [professional equipment, specialized hobby gear]
  micro: [keychain, small accessory, personal item, seasonal object]
  exclusions:
    - "no fantasy or supernatural items"
    - "no anime-specific objects"
    - "no unrealistic proportions"
  dependencies:
    - "all props must match realistic contemporary Japanese life"
    - "seasonal items require appropriate environmental context"
```

### 6) Constraints

**❌ Canvas Negatives:** "original aspect ratio", "conventional anime exaggerations", "fantasy elements"; **NO unrealistic hair or eye colors**; **NO anime-specific clothing styles**; **NO hard cel-shading that breaks environmental realism**. **✅ Canvas Positives:** "exactly [declared ratio]", "photorealistic environmental integration"; **Natural atmospheric lighting** with **identifiable sources**; **Realistic human proportions**; **Natural color harmony**; **Atmospheric depth effects**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9 Environmental:** Maximum environmental storytelling with character naturally integrated
- **For 2:3 Character-Environment:** Balanced character-environment relationship with atmospheric context
- **For 21:9 Ultra-wide:** Panoramic atmospheric storytelling with vast environmental scope

**Staging:** Subjects positioned within **highly detailed photorealistic environments** showing **natural interaction** with **atmospheric conditions**. **Camera/perspective:** **Natural eye-level perspectives** with **slight environmental drama** through **atmospheric effects**. **Background density:** **Maximum photorealistic detail** with **atmospheric perspective** and **environmental storytelling priority**. **Surface Context Anchor:** Photorealistic digital painting surface appropriate to environmental poetry **Ratio Enforcement Anchor:** Environmental storytelling extends naturally within declared ratio while maintaining character-environment connection.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Shinkai's cinematic approach for static images; **omit all embedded text**. Shinkai emphasizes **pure visual environmental storytelling**.

------

## Satoshi Kon Style - Hyperrealistic Animation Psychology

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 cinematic frame** or **2:3 psychological study** - ignore source image dimensions completely. **CRITICAL ANIMATION MEDIUM DOMINANCE:** Satoshi Kon's hyperrealistic 2D animation aesthetic overrides ALL photorealistic rendering and digital painting approaches. **COMPLETE 2D ANIMATION WITH LIVE-ACTION DETAIL REQUIRED.** **Redraw command:** "Transform subject into authentic **Satoshi Kon hyperrealistic 2D animation character** for **exact format specification** - NOT photorealistic digital painting or 3D rendering." **Anti-Photorealism Priority:** **NO photorealistic 3D rendering, digital painting smoothness, or gradient lighting effects.** **Completely redraw using 2D cel animation medium with hyperrealistic detail within animation framework.** Identity through **psychological depth and cinematic composition only, NOT photographic accuracy.** **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `candid-motion` **Canvas Control Flag:** `strict-reframe` **Animation Medium Enforcement:** **Subject must look like hyperdetailed 2D animation cel, not digital painting or photograph.** **Complete conversion to cel animation medium with live-action quality detail.** **Mode Selector:** Choose [Psychological Portrait], [Cinematic Study], or [Urban Context] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (cinematic psychological framing)
- **2:3** (psychological character study)
- **3:4** (traditional with psychological depth)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with cinematic psychological emphasis
- **Spatial Allocation:** Subject positioned for psychological narrative impact (match-cut potential, reality-blend integration)
- **Background Treatment:** Hyperdetailed urban environments using flat color layering maintaining animation medium integrity
- **Format Justification:** Kon's cinematic animation requires precise framing that supports psychological storytelling and match-cut composition potential

### 3) Artistic Style & Context

Satoshi Kon's revolutionary approach (1963-2010) achieved **"hyperrealistic animation"** through **2D cel animation with live-action detail levels** and **psychological depth integration**. Production method emphasizes **clean animation line work** with **flat cel shading containing hyperrealistic detail**, **cinematic lighting within animation constraints**, and **psychological color coding**. Purpose centers on **adult psychological storytelling** through **cinematic composition** and **reality-fantasy visual integration**. Hallmark motifs include **clean animation lines with live-action detail, deep saturated psychological colors, flat cel backgrounds with architectural complexity, match-cut composition potential,** and **reality-blend visual layering within animation medium**. Period framing encompasses **contemporary urban Japanese settings** with **psychological complexity** creating **2D animation with cinematic sophistication**.

### 4) Technical Execution

**Line:** **Clean animation line weights** at **0.4-1.0 pt** with **precise cel animation quality** and **consistent outline definition**; interior details **0.2-0.6 pt** for **hyperrealistic detail within animation framework**. **Sharp, clean animation strokes** with **technical precision** but **NO photorealistic blending or soft gradients**. **Color:** **Deep saturated palette** at **80-95% intensity** with **psychological color coding** - **emotional reds for psychological tension (#dc143c)**, **urban blues for reality anchoring (#1e3a8a)**, **warm yellows for memory/fantasy (#ffd700)**. **Flat cel-shading** with **bold color temperature contrasts** and **clear color separation boundaries**. **NO gradient effects or realistic lighting simulation**. **Texture:** **Clean cel animation surface** with **hyperrealistic detail rendering within flat color areas**. **NO gradient smoothness or digital painting effects** - maintain **strict animation medium integrity** while achieving **live-action detail quality**. **Urban atmospheric complexity** through **strategic flat color layering**. **Detail hierarchy:** **Realistic bone structure and aging effects** within **animation character design**, **psychological expression complexity** through **cel animation techniques**, **hyperdetailed urban backgrounds** using **flat color layering**, **clothing** with **realistic wear patterns** rendered in **clean cel animation style**. **Material simulation:** **Pure cel animation production** with **hyperrealistic detail integration**. **Clean color fills** with **precise registration**. **Cinematic lighting effects** achieved through **strategic flat color placement** rather than **realistic gradient rendering**. **Urban environmental complexity** through **layered animation backgrounds only**. **Canvas Adaptation Anchor:** Hyperrealistic 2D animation composition optimized for declared aspect ratio with cinematic psychological storytelling emphasis. **Renderer mapping hint:** Set stylization to 70-85%, chaos to 5-15%, CFG scale 10-13 for **animation medium precision** with **hyperrealistic detail integration**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Contemporary Japanese professional wear** with **realistic aging and wear patterns**, **practical urban clothing** for **adult city life**, **sophisticated color coordination** supporting **psychological narrative**, ornament scale **1-2** (realistic accessories, urban professional items); hair & makeup scale **1-2** (realistic urban styling with **psychological significance**); **practical urban footwear** showing **realistic wear**.
- **Adults (male-presenting):** **Urban professional clothing** with **realistic fabric behavior** and **environmental wear**, **contemporary Japanese business or casual wear**, **color choices** reflecting **psychological state**; jewelry **0-1** pieces (realistic, psychologically significant); **mature urban professional aesthetic**.
- **Youth (girls/boys):** **Contemporary Japanese school** or **casual wear** with **age-appropriate realism**; **practical urban footwear**; **minimal makeup** appropriate to **urban contemporary context**; **age-appropriate psychological complexity**.
- **Fabric behavior:** **Realistic drape and wear patterns** rendered in **cel animation style**. **Environmental interaction** showing **urban life effects** on **clothing condition**. **Psychological color significance** in **fabric choices**.

**Prop Selector**

```yaml
props:
  common: [cell phone, urban transit card, coffee cup, cigarette pack, personal notebook]
  occasional: [camera, psychological artifact, mirror, photograph, urban technology]
  rare: [symbolic object, memory trigger, reality-blend item, psychological symbol]
  micro: [small personal item, urban detail, psychological anchor, reality marker]
  exclusions:
    - "no fantasy or supernatural items unless psychologically motivated"
    - "no cute or decorative objects inappropriate to urban adult themes"
    - "choose-one based on psychological narrative relevance"
  dependencies:
    - "all props must support psychological narrative depth"
    - "urban contemporary context required for authenticity"
    - "props should suggest character psychological state"
```

### 6) Constraints

**❌ Canvas Negatives:** "photorealistic 3D rendering", "digital painting smoothness", "gradient lighting simulation"; **NO cute or moe aesthetic elements inappropriate to adult psychological themes**; **NO fantasy elements without psychological justification**; **NO soft digital blending or photographic textures**. **✅ Canvas Positives:** "exactly [declared ratio]", "hyperrealistic 2D animation"; **Clean animation line work** with **hyperrealistic detail integration**; **Flat cel-shading** with **deep color saturation**; **Psychological depth through animation techniques**; **Cinematic composition**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9 Cinematic:** Cinematic framing supporting psychological narrative and match-cut potential
- **For 2:3 Psychological:** Character psychological study with urban environmental context
- **For 3:4 Traditional:** Classic format with Kon's hyperrealistic animation treatment

**Staging:** Subjects positioned within **cinematic framing** supporting **psychological narrative** and **match-cut composition potential**. **Camera/perspective:** **Cinematic angles** including **close-ups for psychological intensity**, **medium shots for character interaction**, **wide shots for urban environmental context**. **Background density:** **Hyperdetailed urban environments** using **flat color layering** maintaining **animation medium integrity** supporting **psychological narrative**. **Surface Context Anchor:** Hyperrealistic 2D animation production surface appropriate to psychological storytelling **Ratio Enforcement Anchor:** Cinematic psychological environments extend naturally within declared ratio while maintaining animation medium integrity.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Kon's cinematic animation approach for static portraits; **omit all embedded text**. Kon emphasizes **pure visual psychological storytelling** through **cinematic animation composition**.

------

# Production I.G Style - Cyberpunk Precision

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 environmental integration** or **2:3 character-environment** - ignore source image dimensions completely. **CRITICAL CEL ANIMATION DOMINANCE:** Production I.G's 2D cel animation with environmental integration overrides ALL digital painting, 3D rendering, and photorealistic approaches. **COMPLETE 2D CEL ANIMATION WITH ARCHITECTURAL PRECISION REQUIRED.** **Redraw command:** "Transform subject into authentic **Production I.G 2D cel animation character** for **exact format specification** - NOT digital painting, 3D rendering, or photorealistic illustration." **Anti-Digital-Painting Priority:** **NO digital painting smoothness, 3D rendered lighting, or photorealistic surface effects.** **Completely redraw using 2D cel animation medium with flat color fills and clean line work.** Identity through **character-environment integration and spatial awareness only, NOT photographic accuracy.** **Face-Treatment Flag:** `anime-precision` **Pose Flag:** `contrapposto` **Canvas Control Flag:** `format-native` **Animation Medium Enforcement:** **Subject must look like 2D cel animation character naturally embedded in architectural environment, not digital art or 3D render.** **Mode Selector:** Choose [Environmental Integration] or [Architectural Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (environmental integration emphasis)
- **2:3** (character-environment unity)
- **21:9** (ultra-wide architectural cityscape)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** format-native with character-environment unity emphasis
- **Spatial Allocation:** Subject naturally embedded within architectural environments (no figure/background separation)
- **Background Treatment:** Multi-plane cel animation backgrounds with architectural precision and flat color layering
- **Format Justification:** Production I.G's character-environment philosophy requires seamless integration where character feels naturally part of the animated world

### 3) Artistic Style & Context

Production I.G's influential approach (1987-present) pioneered **2D cel animation with architectural environmental integration** through **character-background unity** and **multi-plane animation techniques**. Production method emphasizes **traditional cel animation line work** with **flat color fills**, **architectural background research** with **photographic location reference translated to animation**, and **character-environment interaction** where figures naturally inhabit their animated spaces. Purpose focuses on **cyberpunk storytelling** through **environmental narrative** and **character spatial integration**. Hallmark motifs include **clean cel animation outlines**, **flat color backgrounds with architectural complexity**, **multi-plane scrolling depth**, **character environmental interaction**, **atmospheric perspective through color temperature only**, and **seamless figure-ground integration**. Period framing encompasses **cyberpunk animation** with **architectural authenticity** creating **2D animation environmental storytelling**.

### 4) Technical Execution

**Line:** **Clean cel animation weights** at **0.8-1.2 pt** for character outlines with **consistent animation line quality**; **architectural line work** at **0.3-0.8 pt** showing **precise geometric construction** but **maintaining cel animation aesthetic**. **NO variable line weights that suggest 3D depth or digital painting**. **Color:** **Flat cel animation color fills** at **75-85% saturation** with **clear color separation boundaries**. **Cool architectural blues** (#2e4057, #1a252f) for structural elements, **warm interior lighting** (#f4a261, #e76f51) for inhabited spaces, **character skin tones** within **anime color ranges** (#fdbcb4, #f8ad9d). **NO gradient effects, digital painting blending, or 3D lighting simulation**. **Texture:** **Pure cel animation surface** with **flat color areas** and **architectural detail through line work only**. **NO digital painting textures, 3D surface effects, or photorealistic material simulation**. **Environmental complexity** achieved through **flat color layering** and **line work precision**. **Detail hierarchy:** **Character integration priority** - figures must **feel naturally part of the animated environment** with **consistent lighting** and **spatial logic**. **Large anime eyes** with **flat color iris rendering**, **architectural backgrounds** with **cel animation line precision**, **character clothing** with **flat fabric colors** and **animation-appropriate folds**. **Material simulation:** **Traditional cel animation production** with **flat color fills** and **clean registration**. **Environmental depth** through **color temperature shifts** and **multi-plane arrangement** - **NO 3D depth simulation or digital painting effects**. **Canvas Adaptation Anchor:** Character-environment unity maintained through cel animation techniques within declared aspect ratio, emphasizing architectural storytelling. **Renderer mapping hint:** Set stylization to 85-95%, chaos to 5-15%, CFG scale 12-16 for **maximum cel animation authenticity** with **architectural precision**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Cyberpunk professional wear** with **clean cel animation color fills**, **structured blazers** in **flat color rendering**, **practical urban clothing** showing **animation fabric behavior**, ornament scale **1-2** (cel animation accessories, clean geometric jewelry); hair & makeup scale **1-2** (anime styling with **flat color application**); **professional footwear** rendered in **cel animation style**.
- **Adults (male-presenting):** **Corporate cyberpunk clothing** with **flat color fills** and **animation line work**, **structured professional wear** showing **cel animation fabric logic**; jewelry **0-1** pieces (geometric, animation-appropriate); **urban professional aesthetic** within **cel animation medium**.
- **Youth (girls/boys):** **School uniforms** or **casual wear** with **cel animation color fills**; **animation-appropriate styling**; **flat color rendering** throughout.
- **Fabric behavior:** **Cel animation fabric logic** with **flat color fills** and **animation-appropriate fold patterns**. **NO realistic fabric physics or digital material simulation**.

**Prop Selector**

```yaml
props:
  common: [communication device, ID badge, technical tablet, urban transport card, simple tool]
  occasional: [cyberpunk gadget, professional equipment, architectural element]
  rare: [advanced technology, environmental interface, cyberpunk artifact]
  micro: [access card, small device, personal item, urban detail]
  exclusions:
    - "no fantasy items inappropriate to cyberpunk setting"
    - "no 3D rendered or digitally painted objects"
    - "choose-one: [device, tool, accessory]"
  dependencies:
    - "all props must be rendered in cel animation style with flat colors"
    - "cyberpunk contemporary context required"
```

### 6) Constraints

**❌ Canvas Negatives:** "digital painting effects", "3D rendered lighting", "photorealistic materials"; **NO gradient lighting that breaks cel animation aesthetic**; **NO character-background isolation or figure separation**; **NO digital art smoothness or 3D surface rendering**; **NO realistic material physics inappropriate to animation medium**. **✅ Canvas Positives:** "exactly [declared ratio]", "authentic cel animation with environmental integration"; **Clean cel animation line work** with **flat color fills**; **Character-environment unity** through **animation techniques**; **Architectural precision** within **cel animation framework**; **Multi-plane background depth** through **color temperature and line work only**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9 Environmental:** Maximum character-environment integration with architectural cel animation storytelling
- **For 2:3 Character-Environment:** Character naturally embedded within cel animation architectural context
- **For 21:9 Ultra-wide:** Cyberpunk cityscape with character seamlessly integrated in animation style

**Staging:** Subjects **naturally embedded** within **cel animation architectural environments** showing **spatial integration** and **environmental belonging**. **Camera/perspective:** **Animation camera angles** emphasizing **character-environment relationship** within **cyberpunk urban contexts**. **Background density:** **Multi-plane cel animation backgrounds** with **architectural line precision** and **flat color complexity**. **Surface Context Anchor:** Traditional cel animation production surface appropriate to cyberpunk environmental storytelling **Ratio Enforcement Anchor:** Environmental cel animation extends naturally within declared ratio while maintaining character integration and animation medium authenticity.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Production I.G's cel animation approach; **omit all embedded text**. Production I.G emphasizes **environmental storytelling** through **character-environment integration** within **cel animation medium**.

---

## Studio Trigger Style - Neo-Kanada Energy

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **3:4 heroic portrait** or **16:9 explosive action** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Studio Trigger's Neo-Kanada energy** style for **exact format specification**." **Likeness (style-first):** Identity via **exaggerated heroic silhouette/explosive dynamic gesture/intense determined expression**; integrate into **high-energy experimental animation** medium emphasizing **kinetic power** and **geometric visual impact**. **Face-Treatment Flag:** `poster-ink` **Pose Flag:** `power-stance` **Canvas Control Flag:** `strict-reframe` **Style dominance:** Trigger's Neo-Kanada approach overrides conventional anime aesthetics, prioritizing **explosive geometric energy** and **heroic empowerment**. **Gender respect:** Honor presented gender while maintaining Trigger's **heroic character proportions** and **action-ready design philosophy**. **IP guardrail:** Archetypes only; no direct references to Kill la Kill, Little Witch Academia, Promare, or other Trigger properties. **Mode Selector:** Choose [Heroic Portrait] or [Dynamic Action] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **3:4** (heroic character empowerment)
- **16:9** (explosive action sequence)
- **2:3** (vertical heroic composition)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with explosive geometric energy emphasis
- **Spatial Allocation:** Subject positioned for maximum heroic impact (dramatic diagonal emphasis, power focal points)
- **Background Treatment:** Geometric energy fields with crystalline debris patterns and four-pointed star bursts
- **Format Justification:** Trigger's Neo-Kanada philosophy requires dynamic ratios that support explosive visual spectacle and heroic character empowerment

### 3) Artistic Style & Context

Studio Trigger's experimental approach (2011-present) represents **Neo-Kanada School evolution** through **explosive action animation** and **geometric visual spectacle**. Production method emphasizes **extreme kinetic energy** with **Kanada-style perspective distortion**, **wide-angle fish-eye camera work**, **dramatic low-angle heroic shots**, and **geometric debris explosion effects**. Purpose focuses on **heroic character empowerment** through **visual energy overload** and **optimistic determination themes**. Hallmark motifs include **four-pointed star energy bursts**, **crystalline geometric debris patterns**, **"snapping" character movements**, **fluorescent neon energy palettes**, **triangular speed lines**, and **heroic transformation sequences**. Period framing encompasses **contemporary magical realism** with **heroic fantasy elements** creating **empowering visual spectacle**.

### 4) Technical Execution

**Line:** **Ultra-bold angular weights** at **3.0-5.0 pt** for **heroic character outlines** with **sharp geometric breaks** and **angular corner emphasis**. **Kanada-style line snapping** - lines must show **directional energy breaks** rather than smooth curves. **Geometric accent lines** at **2.0-3.0 pt** creating **angular speed effects** and **energy direction indicators**. **Four-pointed star motifs** integrated as **sharp linear accent elements**. **Color:** **Maximum saturation fluorescent palettes** at **90-100% saturation** creating **energy overload** through **high-contrast geometric relationships**. **Electric heroic colors**: **hot magenta (#ff0080)**, **cyber cyan (#00ffff)**, **energy yellow (#ffff00)**, **power orange (#ff4500)**. **Bold tri-color schemes** with **geometric color blocking**. **Texture:** **Clean geometric cel-shading** with **extreme contrast boundaries** and **zero gradient smoothing**. **Crystalline shard pattern overlays** and **geometric explosion debris**. **Sharp-edge geometric pattern integration** throughout composition. **Detail hierarchy:** **Heroic silhouette maximum priority** - character must read clearly during **explosive action**. **Geometric energy effects** supporting **character empowerment**. **Four-pointed star accent placement** at **power focal points**. **Background simplified** to **geometric energy fields** that **amplify character presence**. **Material simulation:** **Pure geometric energy rendering** with **crystalline reflection patterns**. **Bold outline definition** with **perfect registration**. **Geometric debris physics** defying reality for **dramatic impact**. **Energy effect layering** with **additive bright compositing**. **Canvas Adaptation Anchor:** Explosive geometric composition optimized for declared aspect ratio with maximum heroic energy emphasis. **Renderer mapping hint:** Set stylization to 90-100%, chaos to 20-35%, CFG scale 12-16 for **maximum geometric boldness** and **heroic energy**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Heroic action costumes** with **geometric design elements**, **power-enhancing accessories**, **fitted action-ready silhouettes**, **asymmetrical heroic details**, ornament scale **3-4** (power symbols, heroic gear, transformation devices); hair & makeup scale **1-2** (bold heroic styling, possible **geometric face markings**); **action-ready heroic footwear** with **power enhancement design**.
- **Adults (male-presenting):** **Dynamic heroic uniforms** with **geometric power elements**, **high-collar heroic details**, **fitted heroic proportions**, **power-enhancing design features**; accessories **2-3** pieces (heroic symbols, power devices); **confident heroic aesthetic** emphasizing **action readiness**.
- **Youth (girls/boys):** **School uniforms** with **slight heroic modifications** or **casual heroic wear**; **age-appropriate power themes**; **heroic athletic footwear**; **minimal makeup** except **heroic symbols**; **age-appropriate heroic accessories**.
- **Fabric behavior:** **Heroic fabric dynamics** with **exaggerated wind effects** and **power aura interaction**. **Geometric fold patterns** and **energy-responsive material rendering**. **Bold color blocking** with **geometric pattern emphasis**.

**Prop Selector**

```yaml
props:
  common: [energy weapon, transformation device, power gauntlet, heroic emblem, magical focus]
  occasional: [heroic vehicle component, mystical artifact, power generator, action tool]
  rare: [legendary weapon, ultimate transformation device, heroic mech piece]
  micro: [power crystal, heroic badge, energy cell, four-pointed star charm]
  exclusions:
    - "no realistic mundane weapons"
    - "no passive decorative items"
    - "choose-one: [weapon, device, tool]"
  dependencies:
    - "heroic items require geometric power design"
    - "transformation items need four-pointed star integration"
```

### 6) Constraints

**❌ Canvas Negatives:** "original aspect ratio", "passive positioning", "muted colors"; **NO conventional anime proportions without heroic enhancement**; **NO static compositions lacking energy**; **NO realistic mundane elements**. **✅ Canvas Positives:** "exactly [declared ratio]", "explosive heroic energy composition"; **Explosive dynamic action poses**; **Geometric energy burst effects**; **Four-pointed star motif integration**; **Maximum color saturation**; **Crystalline debris patterns**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 3:4 Heroic:** Vertical empowerment emphasis with geometric energy bursts and heroic dominance
- **For 16:9 Explosive:** Horizontal action spectacle with crystalline debris and energy fields
- **For 2:3 Vertical:** Heroic transformation composition with four-pointed star integration

**Staging:** Subjects positioned in **explosive heroic action poses** with **dramatic power demonstration** and **triumphant energy themes**. **Camera/perspective:** **Extreme low angles** for **heroic empowerment**, **fish-eye perspective distortion** for **dynamic impact**, **dramatic Dutch tilts** for **energy emphasis**. **Background density:** **Simplified geometric energy environments** with **mandatory perspective distortion lines** converging toward **off-frame vanishing points**. **Crystalline debris patterns** following **forced perspective scaling** - larger fragments in **foreground**, smaller in **background**. **Four-pointed star energy bursts** positioned **asymmetrically** throughout composition. **Surface Context Anchor:** High-energy animation production surface appropriate to heroic spectacle **Ratio Enforcement Anchor:** Geometric energy effects extend naturally within declared ratio while maintaining heroic character empowerment focus.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Trigger's pure visual spectacle approach; **omit all embedded text**. Trigger emphasizes **wordless heroic inspiration** through **explosive geometric energy** and **empowering visual storytelling**.

------

## Studio Bones Style - Character-Driven Animation Excellence

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 character study** or **16:9 dynamic scene** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Studio Bones' character-driven animation excellence** style for **exact format specification**." **Likeness (style-first):** Identity via **distinctive character proportions/personality-driven gesture/emotionally authentic expression**; integrate into **high-quality animation** medium emphasizing **organic character life** and **dimensional personality**. **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `gestural-fluid` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** Bones' character-focused approach prioritizes **individual personality expression** and **organic animation feel** over **generic anime conventions**. **Gender respect:** Honor presented gender while maintaining Bones' **personality-driven design** and **dimensional character philosophy**. **IP guardrail:** Archetypes only; no direct references to Fullmetal Alchemist, My Hero Academia, Soul Eater, or other Bones properties. **Mode Selector:** Choose [Character Study] or [Dynamic Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (character personality focus)
- **16:9** (character-environment interaction)
- **3:4** (traditional with personality emphasis)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with organic character life emphasis
- **Spatial Allocation:** Subject positioned to express individual character personality through body language and environmental interaction
- **Background Treatment:** Atmospheric environments that live and breathe with character presence, supporting individual expression
- **Format Justification:** Bones' character-driven philosophy adapts to any ratio while maintaining individual personality authenticity and organic life representation

### 3) Artistic Style & Context

Studio Bones' distinctive approach (1998-present) emphasizes **character personality through design** with **organic animation principles** creating **dimensional characters** that feel **alive and individual**. Production method centers on **Yutaka Nakamura's dynamic impact sequences** featuring **crystalline geometric debris**, **personality-driven character proportions** varying by **individual character needs**, **fluid organic movement** even in **static compositions**, and **environmental atmospherics** that **breathe with character emotion**. Purpose focuses on **individual character authenticity** through **proportional personality expression** and **organic life representation**. Hallmark motifs include **Yutapon cube debris during action**, **organic character silhouettes**, **personality-driven proportional choices**, **atmospheric environmental integration**, **emotional micro-gesture emphasis**, and **living animation quality** in **static frames**. Period framing encompasses **character-driven narratives** where **individual personality** shapes **visual presentation** rather than **genre conventions**.

### 4) Technical Execution

**Line:** **Organic variable weights** reflecting **character personality**: **soft, flowing lines (1.0-1.5 pt)** for **gentle characters** versus **sharp, defined lines (1.5-2.5 pt)** for **strong personalities**. **Yutapon impact sequences** exploding into **geometric crystal debris** with **sharp angular fragments (3.0-5.0 pt)**. **Character-specific line quality** matching **individual personality traits**. **Color:** **Character-driven palettes** with **organic harmony**: **warm, lived-in tones (60-75% saturation)** creating **authentic atmosphere**. **Character colors** reflecting **personality depth** rather than **generic anime schemes**. **Environmental colors** that **breathe with character emotion** and **support individual presence**. **Texture:** **Organic animation texture** showing **life and dimensionality**. **Yutapon crystalline debris** creating **sharp geometric contrast** against **organic character forms**. **Atmospheric environmental texture** that **lives and breathes** rather than **static background rendering**. **Character clothing** showing **authentic wear patterns** and **personality-driven styling choices**. **Detail hierarchy:** **Large expressive anime eyes** with **individual character personality**. **Organic proportional systems** adapted to **character personality**: **elongated proportions** for **elegant characters**, **compact proportions** for **energetic characters**, **distinctive silhouettes** that **read clearly** from **distance**. **Personality-driven facial structure** over **generic anime templates**. **Material simulation:** **Living animation quality** where **characters feel organic** and **dimensional**. **Environmental elements** that **interact naturally** with **character presence**. **Clothing and hair** that **moves naturally** even in **static representations**. **Geometric debris effects** providing **dynamic contrast** to **organic character forms**. **Canvas Adaptation Anchor:** Character personality expression maintains organic authenticity within declared aspect ratio with living environmental integration. **Renderer mapping hint:** Set stylization to 75-90%, chaos to 15-30%, CFG scale 10-14 for **organic character life** with **dynamic action potential**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Personality-driven clothing choices** reflecting **individual character traits**, **organic fabric behavior** showing **natural wear patterns**, **practical styling** supporting **character activities** and **personal expression**, **distinctive color choices** matching **character personality**, ornament scale **1-3** (character-meaningful accessories, personal items); hair & makeup scale **1-2** (personality-authentic styling); **footwear reflecting character lifestyle**.
- **Adults (male-presenting):** **Character-specific clothing** showing **individual taste** and **personality expression**, **authentic fabric interaction** with **character movement**, **personal styling choices** over **generic anime conventions**; accessories **1-2** pieces (personality-meaningful items); **individual character aesthetic** over **template designs**.
- **Youth (girls/boys):** **Age-appropriate** but **personality-driven** clothing; **individual character expression** within **appropriate boundaries**; **practical choices** reflecting **character activities**; **personal styling** over **generic youth templates**.
- **Fabric behavior:** **Natural material interaction** with **character movement** and **environmental conditions**. **Realistic wear patterns** showing **character lifestyle** and **personality traits**. **Organic fabric flow** that **feels alive** rather than **static**.

**Prop Selector**

```yaml
props:
  common: [character tool, personal weapon, meaningful object, activity gear, identity marker]
  occasional: [specialized equipment, unique item, character artifact, story object]
  rare: [signature weapon, legendary tool, character-defining object]
  micro: [personal token, character charm, meaningful detail, identity piece]
  exclusions:
    - "props must reflect individual character personality"
    - "no generic items without character connection"
    - "choose-one based on character identity"
  dependencies:
    - "all props require character personality connection"
    - "individual character authenticity mandatory"
```

### 6) Constraints

**❌ Canvas Negatives:** "source image proportions", "generic anime templates", "static lifeless composition"; **NO character designs that could apply to anyone**; **NO environmental elements that feel lifeless or decorative**. **✅ Canvas Positives:** "exactly [declared ratio]", "organic character personality expression"; **Individual character personality** expressed through **proportions and design**; **Organic animation quality** even in **static images**; **Yutapon geometric debris** during **dynamic moments**; **Living environmental atmospherics**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Character:** Individual personality study with organic environmental support
- **For 16:9 Dynamic:** Character-environment interaction with personality-driven spatial relationships
- **For 3:4 Traditional:** Classic format with Bones' organic character life emphasis

**Staging:** Subjects positioned to **express individual character personality** through **body language** and **environmental interaction**. **Character-environment relationship** showing **authentic connection** rather than **decorative placement**. **Camera/perspective:** **Character-serving angles** that **enhance personality expression** and **individual authenticity**. **Background density:** **Atmospheric environments** that **live and breathe** with **character presence**, **supporting individual personality** rather than **overwhelming** or **generic decoration**. **Surface Context Anchor:** High-quality animation production surface appropriate to character-driven storytelling **Ratio Enforcement Anchor:** Character personality environments extend organically within declared ratio while maintaining individual authenticity and living atmospheric quality.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Bones' character-focused animation approaches; **omit all embedded text**. Bones emphasizes **individual character expression** through **organic visual storytelling** and **personality-driven design**.

------

## Sunrise Style (Bandai Namco Filmworks) - Clean Cel Animation Mastery

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 professional portrait** or **16:9 military scene** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Sunrise's clean cel animation mastery** style for **exact format specification**." **Likeness (style-first):** Identity via **clean geometric silhouette/professional confident gesture/determined heroic expression**; integrate into **"Sunrise Smooth" cel animation** medium emphasizing **flat color precision** and **bold outline definition**. **Face-Treatment Flag:** `anime-precision` **Pose Flag:** `power-stance` **Canvas Control Flag:** `strict-reframe` **Style dominance:** Sunrise's cel animation approach prioritizes **flat color philosophy** and **heavy black outline definition** over **gradient-heavy modern anime**. **Gender respect:** Honor presented gender while maintaining Sunrise's **professional heroic proportions** and **military-influenced character design**. **IP guardrail:** Archetypes only; no direct references to Gundam, Code Geass, Cowboy Bebop, or other Sunrise properties. **Mode Selector:** Choose [Professional Portrait] or [Military Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (professional military portrait)
- **16:9** (military environmental context)
- **3:4** (traditional with geometric precision)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with geometric precision emphasis
- **Spatial Allocation:** Subject positioned for professional military authority (confident geometric positioning, technical environment integration)
- **Background Treatment:** Geometrically precise military or technical environments with flat color rendering and heavy outline definition
- **Format Justification:** Sunrise's cel animation mastery requires precise framing that emphasizes professional competence and military geometric design

### 3) Artistic Style & Context

Sunrise's foundational approach (1972-present, now Bandai Namco Filmworks) established **traditional cel animation standards** through **"Sunrise Smooth" production quality** and **flat color mastery**. Production method emphasizes **heavy black outline definition** creating **clear character separation**, **flat cel-shading philosophy** minimizing **gradient usage**, **primary color dominance** using **bold red-blue-yellow schemes**, and **geometric precision** in **both character and mechanical design**. Purpose focuses on **professional heroic storytelling** through **clean animation craftsmanship** and **military precision aesthetics**. Hallmark motifs include **ultra-heavy black outlines**, **pure flat color fills**, **primary color faction coding**, **geometric character proportions**, **clean professional bearing**, and **technical environmental precision**. Period framing encompasses **military science fiction** and **professional heroic narratives** creating **clean, authoritative visual presentation**.

### 4) Technical Execution

**Line:** **Ultra-heavy black outlines** at **3.0-5.0 pt** providing **maximum edge definition** and **character separation**; **interior detail lines** at **1.5-2.5 pt** maintaining **geometric precision** and **structural clarity**. **No line weight variation** - **consistent bold outline emphasis** throughout. **Clean geometric stroke quality** with **sharp angular precision**. **Color:** **Pure flat color philosophy** at **85-100% saturation** featuring **bold primary colors**: **pure reds (#ff0000)**, **pure blues (#0000ff)**, **pure yellows (#ffff00)** for **faction identification**. **Zero gradient usage** - **solid color fills only**. **High contrast color separation** with **clean boundary definition**. **Military color coding** using **primary color schemes**. **Texture:** **Pure cel-shading technique** with **absolutely flat color fills** and **zero gradient work**. **Clean color registration** with **perfect boundary definition**. **No texture effects** that compromise **flat color philosophy**. **Geometric pattern emphasis** over **organic texture variation**. **Detail hierarchy:** **Large expressive anime eyes** with **clean geometric iris definition**. **Professional anime facial proportions** with **clean structural geometry**. **Military bearing emphasis** through **confident postural design**. **Clothing** showing **geometric fold patterns** and **military precision styling**. **Clean feature definition** without **organic softness**. **Material simulation:** **Traditional cel production standards** with **flat color mastery** and **heavy outline definition**. **Clean color fills** with **perfect registration**. **No modern digital effects** that compromise **classic cel animation aesthetics**. **Geometric debris** during **action sequences** maintaining **flat color approach**. **Canvas Adaptation Anchor:** Clean cel animation composition optimized for declared aspect ratio with geometric precision and military professional emphasis. **Renderer mapping hint:** Set stylization to 85-95%, chaos to 5-12%, CFG scale 11-14 for **maximum flat color precision** with **heavy outline definition**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Military uniforms** or **pilot suits** with **geometric design emphasis**, **clean structural lines** and **professional military styling**, **primary color schemes** for **faction identification**, **functional design** supporting **professional competence**, ornament scale **1-2** (military rank insignia, faction symbols); hair & makeup scale **0-1** (clean professional styling); **military-standard footwear** with **geometric design elements**.
- **Adults (male-presenting):** **Professional military uniforms** with **geometric tailoring**, **high-collar military styling**, **clean structural design** emphasizing **authoritative bearing**, **primary color faction coding**; accessories **0-1** pieces (military rank indicators, professional gear); **confident military professional aesthetic**.
- **Youth (girls/boys):** **Military cadet uniforms** or **training attire** with **clean geometric lines**; **age-appropriate military styling**; **professional bearing emphasis**; **no civilian casual elements**; **military training accessories**.
- **Fabric behavior:** **Crisp geometric fold patterns** with **clean angular creases**. **Military precision** in **fabric maintenance** and **structural presentation**. **Flat color fabric rendering** without **realistic texture variation**.

**Prop Selector**

```yaml
props:
  common: [military rank insignia, control device, technical manual, communication equipment, faction symbol]
  occasional: [beam weapon, shield device, tactical equipment, command authority item]
  rare: [prototype military technology, command insignia, advanced technical device]
  micro: [military badge, technical component, communication device, rank marker]
  exclusions:
    - "no civilian recreational items"
    - "no fantasy elements"
    - "choose-one: [weapon, device, equipment]"
  dependencies:
    - "military items require professional context"
    - "technical items need geometric design consistency"
```

### 6) Constraints

**❌ Canvas Negatives:** "original dimensions", "gradient shading", "soft organic styling"; **NO thin or variable line weights that reduce outline impact**; **NO realistic color schemes that dilute primary color emphasis**. **✅ Canvas Positives:** "exactly [declared ratio]", "clean cel animation precision"; **Ultra-heavy black outline definition**; **Pure flat color fills** with **primary color dominance**; **Geometric precision** in **character and environmental design**; **Military professional bearing**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Professional military authority with clean geometric character presentation
- **For 16:9 Military:** Environmental context with geometric precision and flat color rendering
- **For 3:4 Traditional:** Classic format with Sunrise's cel animation mastery treatment

**Staging:** Subjects positioned with **military professional authority** showing **confident competence** and **heroic determination**. **Clean geometric positioning** emphasizing **structural character presentation**. **Camera/perspective:** **Professional heroic angles** supporting **character authority** within **military technical contexts**. **Background density:** **Geometrically precise** military or **technical environments** with **flat color rendering** and **heavy outline definition**. **Surface Context Anchor:** Traditional cel animation production surface appropriate to military professional storytelling **Ratio Enforcement Anchor:** Military geometric environments extend naturally within declared ratio while maintaining professional authority focus and cel animation authenticity.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Sunrise's cel animation approach; **omit all embedded text**. Sunrise emphasizes **clean visual military storytelling** through **professional character bearing** and **geometric environmental precision**.

---

# Madhouse Style - Precision Animation Excellence

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 character study** or **3:4 portrait focus** - ignore source image dimensions completely. **CRITICAL CHARACTER DOMINANCE:** Madhouse's character-focused excellence overrides ALL environmental storytelling and background dominance approaches. **COMPLETE CHARACTER PRECISION WITH ATMOSPHERIC SUPPORT REQUIRED.** **Redraw command:** "Transform subject into authentic **Madhouse character-focused animation** for **exact format specification** - NOT environmental integration or Production I.G-style background dominance." **Anti-Environmental-Dominance Priority:** **NO environmental storytelling that competes with character focus, architectural precision that overwhelms character presence, or background complexity that reduces character impact.** **Completely prioritize character excellence with supportive but simplified backgrounds.** **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `contrapposto` **Canvas Control Flag:** `strict-reframe` **Animation Medium Enforcement:** **Subject must dominate composition as sophisticated anime character with film-quality detail, not environmental integration piece.** **Mode Selector:** Choose [Character Excellence] or [Psychological Portrait] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **2:3** (character psychological study)
- **3:4** (portrait excellence focus)
- **16:9** (cinematic character scene - character still dominates)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with character dominance emphasis
- **Spatial Allocation:** Subject positioned for maximum character impact (central prominence, psychological focus)
- **Background Treatment:** Simplified atmospheric environments that support but never compete with character excellence
- **Format Justification:** Madhouse's character-centric philosophy requires framing that emphasizes individual character sophistication and psychological depth over environmental storytelling

### 3) Artistic Style & Context

Madhouse's legendary approach (1972-present) established **character-focused animation excellence** through **individual character sophistication** and **psychological depth presentation**. Production method emphasizes **character detail priority** with **film-quality facial animation**, **sophisticated character proportions**, **mature character design**, and **atmospheric backgrounds that support without competing**. Purpose centers on **character psychological exploration** through **individual excellence** and **sophisticated character presentation**. Hallmark motifs include **mature character proportions with realistic anime anatomy**, **sophisticated facial detail and expression work**, **psychological depth in character design**, **film-quality character animation potential**, **atmospheric environmental support**, and **character-centric composition dominance**. Period framing encompasses **character-driven narratives** with **sophisticated visual presentation** creating **animation as character art medium**.

### 4) Technical Execution

**Line:** **Character-focused precision weights** ranging **0.6-1.5 pt** for **character definition with sophisticated detail control**. **Environmental line work** at **0.3-0.8 pt** maintaining **supportive but simplified approach**. **Character facial features** receive **maximum line precision** with **psychological expression emphasis**. **Color:** **Character-centric palettes** at **70-85% saturation** with **sophisticated character color harmony** and **environmental color support**. **Character skin tones** with **realistic anime color ranges** and **sophisticated shading**. **Background colors** remain **atmospherically supportive** without **competing for attention**. **Texture:** **Character surface excellence** with **sophisticated anime texture work** and **film-quality character detail**. **Environmental texture** kept **atmospheric and supportive** rather than **architecturally precise**. **Character clothing** with **realistic fabric behavior** and **sophisticated material rendering**. **Detail hierarchy:** **Character faces receive maximum attention** with **sophisticated anime facial proportions**, **psychological expression complexity**, **mature character anatomy**, and **film-quality character detail**. **Backgrounds simplified** to **atmospheric support** maintaining **character visual dominance**. **Material simulation:** **Character-focused rendering** with **sophisticated anime character techniques** and **film-quality character surface work**. **Environmental elements** kept **atmospherically supportive** without **competing material complexity**. **Canvas Adaptation Anchor:** Character excellence maintains dominance within declared aspect ratio with atmospheric environmental support that never competes. **Renderer mapping hint:** Set stylization to 70-80%, chaos to 10-20%, CFG scale 9-12 for **character excellence** with **atmospheric support**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Sophisticated contemporary styling** with **mature fashion sensibility**, **realistic contemporary silhouettes** supporting **character personality expression**, ornament scale **1-2** (sophisticated accessories supporting character depth); hair & makeup scale **1-2** (mature styling with **character personality reflection**); **sophisticated footwear** appropriate to **character psychology**.
- **Adults (male-presenting):** **Mature contemporary fashion** with **sophisticated tailoring** and **character personality expression**, **authentic contemporary styling** appropriate to **individual character depth**; accessories **0-2** pieces (psychologically meaningful, character-supporting); **sophisticated character aesthetic**.
- **Youth (girls/boys):** **Age-appropriate contemporary wear** with **character personality expression** and **sophisticated but appropriate styling**; **character-appropriate footwear**; **styling supporting individual character development**.
- **Fabric behavior:** **Sophisticated fabric physics** with **realistic contemporary material behavior** and **character personality support through clothing choices**.

**Prop Selector**

```yaml
props:
  common: [character-meaningful object, personal item, lifestyle tool, psychological artifact, identity marker]
  occasional: [specialized equipment, character hobby item, personal technology, meaningful accessory]
  rare: [character-defining object, narrative significance item, personal treasure]
  micro: [personal detail, character charm, psychological anchor, individual marker]
  exclusions:
    - "no environmental objects that compete with character focus"
    - "no complex mechanical items that distract from character excellence"
  dependencies:
    - "all props must support character psychology and individual depth"
    - "character authenticity and psychological relevance mandatory"
```

### 6) Constraints

**❌ Canvas Negatives:** "environmental storytelling dominance", "architectural precision competing with character", "background complexity overwhelming character presence"; **NO Production I.G-style environmental integration**; **NO environmental detail that reduces character impact**; **NO background elements competing for visual attention**. **✅ Canvas Positives:** "exactly [declared ratio]", "character excellence dominance"; **Sophisticated character detail** with **psychological depth**; **Film-quality character animation potential**; **Mature character proportions** with **realistic anime anatomy**; **Atmospheric environmental support** that **enhances rather than competes**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Character:** Character psychological study with maximum character focus and atmospheric support
- **For 3:4 Portrait:** Character excellence emphasis with sophisticated environmental context that supports
- **For 16:9 Cinematic:** Character-dominated scene with environmental context supporting character presence

**Staging:** Subjects positioned for **character excellence display** with **psychological depth emphasis** and **sophisticated character presentation**. **Background density:** **Atmospheric environmental support** that **enhances character presence** without **competing for attention** or **overwhelming character excellence**. **Surface Context Anchor:** Character-focused animation production surface appropriate to individual excellence **Ratio Enforcement Anchor:** Character excellence maintains dominance within declared ratio while atmospheric environments provide supportive context without competition.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Madhouse's character-focused animation approach; **omit all embedded text**. Madhouse emphasizes **character excellence** through **sophisticated individual presentation** and **psychological character depth**.

---

# MAPPA Style - Modern Cinematic Animation

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 modern cinematic** or **2:3 contemporary portrait** - ignore source image dimensions completely. **CRITICAL MODERN ANIMATION DOMINANCE:** MAPPA's modern cinematic animation overrides ALL digital illustration, over-rendered art, and realistic painting approaches. **COMPLETE MODERN CEL ANIMATION WITH SHARP DIGITAL PRECISION REQUIRED.** **Redraw command:** "Transform subject into authentic **MAPPA modern cinematic animation** for **exact format specification** - NOT digital illustration, realistic rendering, or over-polished art." **Anti-Digital-Illustration Priority:** **NO digital painting smoothness, over-rendered surfaces, or realistic illustration techniques that break animation aesthetic.** **Completely redraw using modern cel animation medium with sharp digital coloring and clean line work.** **Face-Treatment Flag:** `anime-precision` **Pose Flag:** `candid-motion` **Canvas Control Flag:** `strict-reframe` **Animation Medium Enforcement:** **Subject must look like modern cel animation character with sharp digital precision, not digital art or illustration.** **Mode Selector:** Choose [Modern Portrait] or [Cinematic Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (modern cinematic standard)
- **2:3** (contemporary character focus)
- **3:4** (modern portrait emphasis)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with modern cinematic language
- **Spatial Allocation:** Subject positioned using contemporary film techniques (character prominence with cinematic support)
- **Background Treatment:** Clean, modern backgrounds that support character without competing for attention
- **Format Justification:** MAPPA's modern approach requires cinematic framing that emphasizes contemporary character excellence with sophisticated but supportive environments

### 3) Artistic Style & Context

MAPPA's innovative approach (2011-present) represents **modern anime evolution** through **contemporary cinematic animation** and **sharp digital production excellence**. Production method emphasizes **clean modern cel animation** with **sharp digital coloring**, **contemporary character proportions**, **modern lighting design**, and **cinematic visual language**. Purpose focuses on **modern storytelling** through **contemporary animation techniques** and **cinematic character presentation**. Hallmark motifs include **sharp, clean line work**, **modern digital color precision**, **contemporary character proportions**, **cinematic framing techniques**, **sophisticated modern lighting**, and **clean animation aesthetics**. Period framing encompasses **contemporary settings** with **modern animation production values** creating **next-generation anime aesthetics**.

### 4) Technical Execution

**Line:** **Sharp modern animation weights** at **0.8-1.5 pt** with **clean digital precision** and **contemporary line quality**. **No over-rendering or illustration techniques** - maintain **sharp cel animation aesthetic**. **Character facial features** with **modern anime precision** and **clean geometric definition**. **Color:** **Modern digital palettes** at **80-90% saturation** with **sharp color separation** and **contemporary digital color grading**. **Clean color fills** with **modern anime color harmony**. **Sharp color boundaries** without **digital painting blending** or **over-rendered gradients**. **Texture:** **Clean modern cel animation surface** with **sharp digital precision** and **contemporary animation texture work**. **NO digital illustration textures or over-rendered surface effects**. **Modern fabric rendering** with **clean animation fold patterns**. **Detail hierarchy:** **Contemporary anime facial proportions** with **sharp feature definition** and **modern character design precision**. **Clean background rendering** that **supports without competing**. **Modern animation detail distribution** prioritizing **character excellence**. **Material simulation:** **Modern digital cel animation production** with **sharp color registration** and **clean animation techniques**. **Contemporary lighting models** within **animation framework** - **NO realistic material simulation that breaks animation aesthetic**. **Canvas Adaptation Anchor:** Modern animation composition optimized for declared aspect ratio with contemporary cinematic character focus. **Renderer mapping hint:** Set stylization to 80-90%, chaos to 5-15%, CFG scale 11-15 for **modern animation precision** with **sharp digital clarity**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Contemporary fashion** with **modern styling trends** and **clean animation rendering**, **current silhouettes** with **sharp digital color application**, ornament scale **1-2** (modern accessories, contemporary items); hair & makeup scale **1-2** (contemporary styling with **clean animation application**); **modern footwear** rendered in **sharp animation style**.
- **Adults (male-presenting):** **Contemporary masculine fashion** with **modern tailoring** and **clean animation rendering**, **current styling** appropriate to **modern character design**; accessories **0-2** pieces (contemporary, animation-appropriate); **modern urban aesthetic** within **clean animation medium**.
- **Youth (girls/boys):** **Contemporary youth fashion** with **modern styling** and **clean animation color application**; **modern footwear** rendered in **animation style**.
- **Fabric behavior:** **Modern animation fabric logic** with **clean fold patterns** and **contemporary material rendering** within **animation framework**.

**Prop Selector**

```yaml
props:
  common: [smartphone, modern headphones, contemporary bag, current technology, modern lifestyle item]
  occasional: [modern professional equipment, current hobby gear, contemporary tool, modern device]
  rare: [cutting-edge technology, modern specialized equipment, contemporary professional tool]
  micro: [modern accessory, current small tech, contemporary personal item, modern detail]
  exclusions:
    - "no over-rendered objects that break animation aesthetic"
    - "no realistic illustration elements inappropriate to animation medium"
  dependencies:
    - "all props must be rendered in clean modern animation style"
    - "contemporary technological accuracy required within animation framework"
```

### 6) Constraints

**❌ Canvas Negatives:** "digital illustration smoothness", "over-rendered surfaces", "realistic painting techniques"; **NO digital art over-polish that breaks animation aesthetic**; **NO environmental detail overwhelming character presence**; **NO illustration techniques inappropriate to modern animation**. **✅ Canvas Positives:** "exactly [declared ratio]", "modern cinematic animation"; **Sharp digital animation precision** with **clean color separation**; **Contemporary character excellence** with **modern animation proportions**; **Cinematic composition techniques** within **animation framework**; **Clean modern backgrounds** that **support character prominence**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9 Cinematic:** Modern cinematic framing with contemporary character prominence and clean background support
- **For 2:3 Contemporary:** Character focus with modern animation precision and clean environmental context
- **For 3:4 Modern:** Portrait emphasis with MAPPA's contemporary animation excellence

**Staging:** Subjects positioned using **modern cinematic techniques** showing **contemporary character presentation** within **clean, sophisticated environments**. **Background density:** **Clean modern environments** that **enhance character presence** without **competing for attention** or **overwhelming character excellence**. **Surface Context Anchor:** Modern digital animation production surface appropriate to contemporary storytelling **Ratio Enforcement Anchor:** Modern animation excellence maintains character focus within declared ratio while clean environments provide sophisticated support without competition.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to MAPPA's cinematic animation approach; **omit all embedded text**. MAPPA emphasizes **modern visual storytelling** through **contemporary animation techniques** and **cinematic character presentation**.

---

# Wit Studio Style - Dynamic Action Cinematography

> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

### 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **16:9 action cinematic** or **3:4 dynamic portrait** - ignore source image dimensions completely. **CRITICAL CLEAN ANIMATION DOMINANCE:** Wit Studio's kinetic animation excellence overrides ALL comic book illustration, superhero art, and over-rendered action effects. **COMPLETE CLEAN CEL ANIMATION WITH SPATIAL MASTERY REQUIRED.** **Redraw command:** "Transform subject into authentic **Wit Studio clean kinetic animation** for **exact format specification** - NOT comic book illustration, superhero art, or over-rendered action effects." **Anti-Comic-Book Priority:** **NO comic book illustration effects, superhero gradient rendering, or over-rendered action sequences that break animation aesthetic.** **Completely redraw using clean cel animation medium with spatial depth mastery and multi-plane environmental integration.** **Face-Treatment Flag:** `anime-precision` **Pose Flag:** `foreshortened-diagonal` **Canvas Control Flag:** `strict-reframe` **Animation Medium Enforcement:** **Subject must look like clean animation character with spatial awareness and kinetic potential, not comic book or illustration art.** **Mode Selector:** Choose [Action Portrait] or [Kinetic Scene] per image.

### 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:**

- **16:9** (action cinematography standard)
- **3:4** (dynamic character emphasis)
- **2:3** (vertical action composition)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with kinetic spatial emphasis
- **Spatial Allocation:** Subject positioned for maximum spatial depth and kinetic energy (multi-plane positioning, environmental interaction)
- **Background Treatment:** Multi-plane environments with clean animation depth and spatial relationship clarity
- **Format Justification:** Wit Studio's spatial mastery requires dynamic ratios supporting movement potential and environmental integration within clean animation framework

### 3) Artistic Style & Context

Wit Studio's distinctive approach (2012-present) pioneered **kinetic animation excellence** through **clean spatial depth mastery** and **multi-plane environmental integration**. Production method emphasizes **clean cel animation** with **3D space utilization**, **multi-plane background depth**, **realistic spatial relationships**, and **kinetic energy potential** within **traditional animation framework**. Purpose centers on **action storytelling** through **spatial dynamics** and **environmental interaction** using **clean animation techniques**. Hallmark motifs include **multi-plane scrolling depth**, **clean spatial relationship clarity**, **kinetic energy visualization through animation**, **environmental interaction emphasis**, **realistic spatial scaling**, and **clean animation movement potential**. Period framing encompasses **action-driven narratives** with **spatial visual language** creating **kinetic animation storytelling** within **clean cel animation medium**.

### 4) Technical Execution

**Line:** **Clean animation precision weights** ranging **0.8-1.8 pt** based on **spatial depth** and **kinetic emphasis** while maintaining **clean animation line quality**. **No comic book illustration line work or over-rendered action effects**. **Environmental line work** shows **spatial precision** with **clean geometric construction**. **Color:** **Clean cel animation color schemes** at **75-85% saturation** with **spatial depth color coding** and **multi-plane atmospheric perspective**. **Clean color separation boundaries** without **comic book gradient effects** or **superhero illustration rendering**. **Environmental color layering** for **spatial depth clarity**. **Texture:** **Clean cel animation surface** with **spatial texture variation** and **multi-plane environmental detail**. **NO comic book illustration textures, superhero effects, or over-rendered action sequences**. **Clean animation fabric behavior** and **environmental surface accuracy**. **Detail hierarchy:** **Clean anime character proportions** with **athletic action-ready emphasis** and **spatial relationship awareness**. **Multi-plane environmental backgrounds** with **clean animation precision** and **spatial depth clarity**. **Character positioning** shows **natural environmental interaction**. **Material simulation:** **Clean cel animation production** with **spatial depth mastery** and **multi-plane environmental integration**. **Clean animation lighting** with **spatial logic** - **NO comic book effects or illustration rendering**. **Canvas Adaptation Anchor:** Clean animation composition utilizes spatial depth principles optimized for declared aspect ratio with kinetic energy emphasis within animation framework. **Renderer mapping hint:** Set stylization to 75-85%, chaos to 15-25%, CFG scale 10-14 for **clean animation precision** with **spatial depth mastery**.

### 5) Fashion & Attire – Wardrobe Matrix + Prop Selector

**Wardrobe Matrix**

- **Adults (female-presenting):** **Action-ready clothing** with **clean animation rendering**, **movement-friendly cuts** and **practical styling**, **athletic proportions** supporting **dynamic activity** within **clean animation aesthetic**, ornament scale **1-2** (practical accessories, action gear); hair & makeup scale **0-1** (practical styling for **movement potential**); **athletic footwear** rendered in **clean animation style**.
- **Adults (male-presenting):** **Action-oriented fashion** with **clean animation precision**, **athletic styling** and **practical design elements** within **animation framework**; accessories **0-2** pieces (action gear, practical items); **athletic readiness aesthetic** using **clean animation techniques**.
- **Youth (girls/boys):** **Active wear** or **movement-friendly clothing** with **clean animation color application**; **athletic footwear** appropriate for **dynamic activity**; **practical styling** supporting **kinetic potential**.
- **Fabric behavior:** **Clean animation fabric logic** with **realistic movement physics** and **athletic fabric behavior** rendered in **animation style**.

**Prop Selector**

```yaml
props:
  common: [action equipment, athletic gear, dynamic tool, movement accessory, kinetic device]
  occasional: [specialized action equipment, dynamic technology, athletic enhancement gear]
  rare: [advanced action gear, kinetic mastery tool, dynamic specialization equipment]
  micro: [action detail, movement indicator, athletic accessory, dynamic element]
  exclusions:
    - "no comic book superhero props inappropriate to clean animation"
    - "no over-rendered objects that break animation aesthetic"
  dependencies:
    - "all props must be rendered in clean animation style"
    - "action readiness and movement potential required"
```

### 6) Constraints

**❌ Canvas Negatives:** "comic book illustration effects", "superhero gradient rendering", "over-rendered action sequences"; **NO comic book art style that breaks animation aesthetic**; **NO superhero illustration techniques inappropriate to animation medium**; **NO over-rendered effects that eliminate clean animation clarity**. **✅ Canvas Positives:** "exactly [declared ratio]", "clean kinetic animation"; **Clean cel animation precision** with **spatial depth mastery**; **Multi-plane environmental integration** within **animation framework**; **Kinetic energy potential** through **clean animation techniques**; **Spatial relationship clarity** with **environmental interaction**.

### 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION:**

- **For 16:9 Action:** Kinetic horizontal emphasis with multi-plane action potential and clean animation depth
- **For 3:4 Dynamic:** Dynamic vertical action with spatial depth integration and clean animation precision
- **For 2:3 Vertical:** Vertical action emphasis with kinetic energy focus within animation framework

**Staging:** Subjects positioned with **kinetic spatial emphasis** showing **action potential** and **environmental interaction** within **clean multi-plane animation environments**. **Background density:** **Multi-plane animation backgrounds** with **spatial depth precision** and **clean environmental integration**. **Surface Context Anchor:** Clean animation production surface appropriate to kinetic spatial storytelling **Ratio Enforcement Anchor:** Clean animation spatial dynamics extend naturally within declared ratio while maintaining kinetic character focus and environmental integration.

### 8) Typography & Text Integration

**Binary:** omit - **Not authentic** to Wit Studio's clean animation approach; **omit all embedded text**. Wit Studio emphasizes **spatial storytelling** through **clean kinetic composition** and **multi-plane environmental integration**.