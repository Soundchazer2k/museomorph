---
id: kyoto_animation_moe
group: Anime
movement: Kyoto Animation Moe
artist: Kyoto Animation
display_name: Kyoto Animation - Moe Perfection
style_scope: movement
ratios:
  - '2:3'
  - '4:5'
  - '16:9'
ratios_status: provisional
ratios_notes: >
  2:3 serves character posters, 4:5 fits modern portrait feeds, and 16:9
  captures slice-of-life scenes.
modes:
  - Character portrait
  - Slice-of-life
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
  layout_hint: >-
    Arrange friends in gentle arcs with props bridging interactions; keep eye
    lines aligned.
  identity_priority:
    - eyes
    - silhouette
    - hairstyle
about: >
  Kyoto Animation pairs precise draftsmanship with soft lighting and heartfelt
  staging. Complex iris gradients, breezy fabric physics, and polished
  backgrounds deliver aspirational everyday life. MuseoMorph keeps that warmth
  while enforcing modern modesty and avoiding direct references to KyoAni
  franchises.
hero_image: null
---


# Kyoto Animation Style - Moe Perfection


> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 character portrait** or **16:9 slice-of-life** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Kyoto Animation's moe perfection** style for **exact format specification**." **Likeness (style-first):** Identity via distinctive silhouette/gentle gesture/expressive large eyes; integrate into ultra-refined cel animation medium emphasizing cuteness and emotional appeal. **Face-Treatment Flag:** `painterly-contour` **Pose Flag:** `candid-motion` **Canvas Control Flag:** `adaptive-extend` **Style dominance:** KyoAni's moe aesthetic overrides realistic proportions, emphasizing youthful appeal and emotional expressiveness. **Gender respect:** Honor presented gender while maintaining KyoAni's signature character design philosophy of universal appeal. **IP guardrail:** Archetypes only; no direct references to K-On!, Haruhi, Violet Evergarden, or other KyoAni properties. **Mode Selector:** Choose [Character Portrait] or [Slice-of-Life Scene] per image.

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:**

- **2:3** (character focus with moe appeal)
- **16:9** (slice-of-life environmental storytelling)
- **4:5** (Instagram-style character portrait)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with gentle environmental expansion
- **Spatial Allocation:** Subject positioned for maximum moe appeal (centered or rule-of-thirds with gentle offset)
- **Background Treatment:** Extend detailed slice-of-life environments (schools, cafes, seasonal settings) with architectural precision
- **Format Justification:** KyoAni's detailed background philosophy supports any ratio through environmental extension while maintaining character focus

## 3) Style Context & Material Authenticity

Kyoto Animation's meticulous approach (1981-present) perfected **"KyoAni face" moe aesthetics** through **gigantic expressive eyes** and **ultra-detailed character animation**. Production method emphasizes **full 24fps character movement** with **hand-drawn precision**, **in-house digital coloring** using **RETAS Paintman software**, and **cut-by-cut color adjustment** for optimal visual harmony. Purpose centers on **emotional slice-of-life storytelling** through **character micro-expressions** and **detailed environmental integration**. Hallmark motifs include **complex iris patterns with multiple highlights, soft fabric physics, detailed background architecture, seasonal lighting effects,** and **gentle comedy timing**. Period framing encompasses **contemporary Japanese settings** with **idealized daily life presentation** creating aspirational realism.

## 4) Technical Method & Mark-Making

**Line:** Ultra-refined outer contours **0.5-1.0 pt** with perfect curves and soft angles; interior details **0.25-0.5 pt** emphasizing facial feature definition and fabric flow. **Consistent line weight hierarchy** with no dramatic variations. Minimal hatching **8-12 lines/inch** only for subtle texture work. **Color:** **High-saturation harmony** at **70-85% intensity** maintaining **temperature consistency** throughout composition. KyoAni signature approach: **complex iris coloring with gradient effects**, **skin tones with subtle pink undertones**, **clothing colors supporting character personality**. **Environmental color matching** with character palette for **unified composition**. **Texture:** **Smooth cel-shading** with **gentle gradient transitions**. **Hair rendering** with **individual strand attention** and **natural volume physics**. **Fabric texture simulation** showing **material weight** and **drape characteristics**. **Background detail integration** at **architectural precision level**. **Detail hierarchy:** **Eyes receive maximum detail** with **complex iris patterns, multiple highlights (2-4 per eye), subtle sclera shading**, **facial features refined to perfection**, **hair volume and movement physics**, clothing **fabric behavior accuracy**. **Material simulation:** **Digital cel production** with **perfect registration**. **Color bucket fills** with **slight texture grain 90-100 LPI**. **Soft lighting effects** with **realistic shadow casting** and **environmental light reflection**. **Canvas Adaptation Anchor:** Composition maintains KyoAni's detailed environmental integration within declared aspect ratio, extending slice-of-life settings naturally. **Renderer mapping hint:** Set stylization to 75-85%, chaos to 5-15%, CFG scale 8-10 for precision and harmony balance.

## 5) Wardrobe, Props & Setting Conventions

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

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:** "source image dimensions", "harsh angular designs", "aggressive themes"; **NO overly mature styling**; **NO photorealistic rendering that eliminates anime charm**; **NO dark or gritty environmental elements**. **✅ Canvas Positives:** "exactly [declared ratio]", "slice-of-life environmental extension"; **Gentle, soft lighting** with **warm color temperatures**; **Detailed background environments** supporting daily life; **Complex eye rendering**; **Soft fabric physics**.

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Character-focused with detailed environmental context support
- **For 16:9 Slice-of-Life:** Environmental storytelling with character naturally integrated
- **For 4:5 Portrait:** Instagram-style character focus with gentle background blur

**Staging:** Subjects positioned in **comfortable, relatable daily life scenarios** showing **natural interaction with environment**. **Camera/perspective:** **Eye-level to slightly low angles** maintaining **approachable, non-threatening viewpoints**. **Background density:** **Highly detailed** but **supporting character prominence**; **realistic environmental accuracy** with **idealized cleanliness and appeal**. **Surface Context Anchor:** High-quality cel animation surface appropriate to slice-of-life storytelling **Ratio Enforcement Anchor:** KyoAni's environmental detail philosophy extends naturally to fill declared ratio while maintaining character appeal.

## 8) Typography & Text Integration (If Historically Present)

**Binary:** omit - **Not authentic** to KyoAni animation style for static portraits; **omit all embedded text**. KyoAni focuses on **pure character expression** and **environmental storytelling**.

------

