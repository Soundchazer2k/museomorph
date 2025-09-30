---
id: sunrise_clean_cel
group: Anime
movement: Sunrise Cel Mastery
artist: Sunrise
display_name: Sunrise - Clean Cel Animation
style_scope: movement
ratios:
  - '2:3'
  - '3:4'
  - '16:9'
ratios_status: provisional
ratios_notes: >
  2:3 anchors military portraits, 3:4 suits promotional art, and 16:9 carries
  tactical scenes.
modes:
  - Professional portrait
  - Military scene
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
    Line up squad members by rank with geometric backdrops reinforcing faction
    colours.
  identity_priority:
    - silhouette
    - uniform-design
    - posture
about: >
  Sunrise built its reputation on crisp black outlines, flat primary palettes,
  and military precision. MuseoMorph adopts that clean cel discipline while
  inventing new insignia and keeping crews modest.
hero_image: null
---


# Sunrise Style (Bandai Namco Filmworks) - Clean Cel Animation Mastery


> **Renderer-Agnostic Adapter:** Sections 1→8 are hard constraints; canvas override mandatory; style over likeness; quantifiers are authoritative; text only if Section 8 allows; no nudity/gore/logos/watermarks; minors = age-appropriate, non-sexualized attire; honor presented gender; run validation checklist silently and regenerate on fail.

## 1) Core Instruction & Likeness Mandate

**CANVAS OVERRIDE:** Recompose to exactly **2:3 professional portrait** or **16:9 military scene** - ignore source image dimensions completely. **Redraw command:** "Redraw the subject in **Sunrise's clean cel animation mastery** style for **exact format specification**." **Likeness (style-first):** Identity via **clean geometric silhouette/professional confident gesture/determined heroic expression**; integrate into **"Sunrise Smooth" cel animation** medium emphasizing **flat color precision** and **bold outline definition**. **Face-Treatment Flag:** `anime-precision` **Pose Flag:** `power-stance` **Canvas Control Flag:** `strict-reframe` **Style dominance:** Sunrise's cel animation approach prioritizes **flat color philosophy** and **heavy black outline definition** over **gradient-heavy modern anime**. **Gender respect:** Honor presented gender while maintaining Sunrise's **professional heroic proportions** and **military-influenced character design**. **IP guardrail:** Archetypes only; no direct references to Gundam, Code Geass, Cowboy Bebop, or other Sunrise properties. **Mode Selector:** Choose [Professional Portrait] or [Military Scene] per image.

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:**

- **2:3** (professional military portrait)
- **16:9** (military environmental context)
- **3:4** (traditional with geometric precision)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with geometric precision emphasis
- **Spatial Allocation:** Subject positioned for professional military authority (confident geometric positioning, technical environment integration)
- **Background Treatment:** Geometrically precise military or technical environments with flat color rendering and heavy outline definition
- **Format Justification:** Sunrise's cel animation mastery requires precise framing that emphasizes professional competence and military geometric design

## 3) Style Context & Material Authenticity

Sunrise's foundational approach (1972-present, now Bandai Namco Filmworks) established **traditional cel animation standards** through **"Sunrise Smooth" production quality** and **flat color mastery**. Production method emphasizes **heavy black outline definition** creating **clear character separation**, **flat cel-shading philosophy** minimizing **gradient usage**, **primary color dominance** using **bold red-blue-yellow schemes**, and **geometric precision** in **both character and mechanical design**. Purpose focuses on **professional heroic storytelling** through **clean animation craftsmanship** and **military precision aesthetics**. Hallmark motifs include **ultra-heavy black outlines**, **pure flat color fills**, **primary color faction coding**, **geometric character proportions**, **clean professional bearing**, and **technical environmental precision**. Period framing encompasses **military science fiction** and **professional heroic narratives** creating **clean, authoritative visual presentation**.

## 4) Technical Method & Mark-Making

**Line:** **Ultra-heavy black outlines** at **3.0-5.0 pt** providing **maximum edge definition** and **character separation**; **interior detail lines** at **1.5-2.5 pt** maintaining **geometric precision** and **structural clarity**. **No line weight variation** - **consistent bold outline emphasis** throughout. **Clean geometric stroke quality** with **sharp angular precision**. **Color:** **Pure flat color philosophy** at **85-100% saturation** featuring **bold primary colors**: **pure reds (#ff0000)**, **pure blues (#0000ff)**, **pure yellows (#ffff00)** for **faction identification**. **Zero gradient usage** - **solid color fills only**. **High contrast color separation** with **clean boundary definition**. **Military color coding** using **primary color schemes**. **Texture:** **Pure cel-shading technique** with **absolutely flat color fills** and **zero gradient work**. **Clean color registration** with **perfect boundary definition**. **No texture effects** that compromise **flat color philosophy**. **Geometric pattern emphasis** over **organic texture variation**. **Detail hierarchy:** **Large expressive anime eyes** with **clean geometric iris definition**. **Professional anime facial proportions** with **clean structural geometry**. **Military bearing emphasis** through **confident postural design**. **Clothing** showing **geometric fold patterns** and **military precision styling**. **Clean feature definition** without **organic softness**. **Material simulation:** **Traditional cel production standards** with **flat color mastery** and **heavy outline definition**. **Clean color fills** with **perfect registration**. **No modern digital effects** that compromise **classic cel animation aesthetics**. **Geometric debris** during **action sequences** maintaining **flat color approach**. **Canvas Adaptation Anchor:** Clean cel animation composition optimized for declared aspect ratio with geometric precision and military professional emphasis. **Renderer mapping hint:** Set stylization to 85-95%, chaos to 5-12%, CFG scale 11-14 for **maximum flat color precision** with **heavy outline definition**.

## 5) Wardrobe, Props & Setting Conventions

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

## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:** "original dimensions", "gradient shading", "soft organic styling"; **NO thin or variable line weights that reduce outline impact**; **NO realistic color schemes that dilute primary color emphasis**. **✅ Canvas Positives:** "exactly [declared ratio]", "clean cel animation precision"; **Ultra-heavy black outline definition**; **Pure flat color fills** with **primary color dominance**; **Geometric precision** in **character and environmental design**; **Military professional bearing**.

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION:**

- **For 2:3 Portrait:** Professional military authority with clean geometric character presentation
- **For 16:9 Military:** Environmental context with geometric precision and flat color rendering
- **For 3:4 Traditional:** Classic format with Sunrise's cel animation mastery treatment

**Staging:** Subjects positioned with **military professional authority** showing **confident competence** and **heroic determination**. **Clean geometric positioning** emphasizing **structural character presentation**. **Camera/perspective:** **Professional heroic angles** supporting **character authority** within **military technical contexts**. **Background density:** **Geometrically precise** military or **technical environments** with **flat color rendering** and **heavy outline definition**. **Surface Context Anchor:** Traditional cel animation production surface appropriate to military professional storytelling **Ratio Enforcement Anchor:** Military geometric environments extend naturally within declared ratio while maintaining professional authority focus and cel animation authenticity.

## 8) Typography & Text Integration (If Historically Present)

**Binary:** omit - **Not authentic** to Sunrise's cel animation approach; **omit all embedded text**. Sunrise emphasizes **clean visual military storytelling** through **professional character bearing** and **geometric environmental precision**.

---

