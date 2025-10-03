---
id: romanesque_manuscript_illumination
group: "Medieval Illumination"
movement: "Romanesque Monastic Scriptoria"
artist: "Romanesque Workshops"
display_name: "Romanesque Manuscript Illumination — Architectural Narrative"
style_scope: "movement"
hero_image: null
ratios: ["3:4", "1:1", "5:4"]
ratios_status: "provisional"
ratios_notes: "3:4 hosts historiated initials, perfect squares anchor carpet pages, and 5:4 panels capture nave-like story grids."
modes: ["Historiated Initial", "Narrative Panel"]
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
  layout_hint: "Stack scenes like bayed architecture with saints or prophets tiered under arcades."
  identity_priority: ["geometry", "gesture", "palette"]
about: >
  Romanesque monks engineered narrative walls of color and pattern, turning every initial into a miniature cloister.
  We preserve their masonry geometry and palette of mineral reds, lapis, and verdigris while scripting new visions.
---

**Version:** 4.2
 **Purpose:** A forensically-researched scaffold for generating authentic Romanesque manuscript illumination (11th-12th century) based on visual evidence analysis of surviving codices. Emphasizes monumental scale, architectural complexity, and abstract-symbolic representation over naturalistic rendering.

------

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Technical Measurement Authority:** Quantitative specifications ("2-3mm iron gall outlines", "1-2mm tempera thickness") override descriptive language ("bold", "thick paint").
- **Process-Over-Result Priority:** How materials are applied supersedes visual appearance descriptions.
- **Medieval Material Authenticity:** No digital photo filters, Instagram effects, or modern post-processing; surface must exhibit authentic 11th-12th century manuscript characteristics.
- **Anti-Renaissance Bias:** Authority to reject naturalistic perspective, atmospheric modeling, or Renaissance-level sophistication when historically inaccurate.
- **Face-Treatment Flags (choose one):**
  - `tempera-flat-linear`: Flat tempera application with 2-3mm iron gall outlines, no atmospheric modeling
  - `manuscript-symbolic`: Large eyes (25-30% oversized), minimal facial modeling, linear definition
  - `monumental-hieratic`: Frontal or 3/4 poses, gesture-based expression, symbolic scale proportions
- **Pose Flags (choose one):** `frontal-hieratic`, `three-quarter-symbolic`, `blessing-gesture`, `pointing-narrative`, `architectural-framed`, `mandorla-enclosed`.
- **Canvas Control Flags (choose one):** `manuscript-proportioned`, `architectural-framed`, `register-divided`.
- **Material Physics Authority:** 11th-12th century substrate, pigment, and binding agent specifications override aesthetic preferences.
- **Scale-Dependent Technique:** Monumental scale viewing requirements affect detail hierarchy and compositional emphasis.
- **Architectural Authenticity:** Romanesque forms (round arches, geometric capitals) take precedence over Gothic or Renaissance elements.
- **Text policy:** Only render text if Section 8 authorizes; use Caroline minuscule and period-appropriate abbreviations.
- **Safety/IP:** No nudity/gore; no modern logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Religious figures = period-appropriate vestments; secular figures = 11th-12th century attire.
- **Composition boundaries:** No frames outside the manuscript page; decorative borders must be period-authentic.
- **Failure Mode Flags:** Avoid Gothic naturalism, Renaissance perspective, Victorian medieval revival aesthetics.
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## Framework Sections

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **[X:Y ratio]** - ignore source image dimensions completely.
- Redraw in **Romanesque Manuscript Illumination** for **manuscript page format**.
- Identity via symbolic attributes, hierarchical scale, and gestural expression.
- **IP Safeguard Declaration:** Create original religious/narrative compositions avoiding copyrighted iconographic programs.
- Declare **Face-Treatment Flag**: `tempera-flat-linear`.
- Declare **Pose Flag**: `frontal-hieratic` or `three-quarter-symbolic`.
- Declare **Canvas Control Flag**: `manuscript-proportioned`.
- **Style Dominance line:** Romanesque abstract-monumental synthesis dominates over naturalistic representation.
- **Mode Selector:** manuscript page, initial letter, narrative cycle, devotional image.

------

## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION (choose one exact specification):**

**MANUSCRIPT FORMATS:**

- `2:3` (standard manuscript page / folio proportion)
- `3:4` (deluxe manuscript proportion)
- `1:1` (initial letter / medallion format)
- `4:5` (portable book proportion)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** architectural-register-division
- **Spatial Allocation:** hierarchical zones with symbolic scale relationships
- **Background Treatment:** symbolic color fields with architectural framing elements
- **Format Justification:** manuscript page proportions serve monumental narrative presentation

------

## 3) Style Context & Material Authenticity

- **Influences:** Ottonian monumentality, Insular decorative complexity, Byzantine hieratic formalism, classical architectural revival.
- **Medium/Production method:** Egg tempera on animal parchment with iron gall ink outlines, gold leaf on red-stained gesso preparation.
- **Thematic purpose:** Religious narrative instruction, devotional contemplation, institutional prestige display.
- **3–5 hallmark motifs with quantified specifications:**
  - Romanesque architectural framing: round arches, geometric column capitals, 15-25mm border width
  - Hierarchical figure scaling: divine figures 15-20% larger than human figures
  - Interlaced border decoration: geometric knotwork patterns 10-15mm width
  - Mandorla/vesica piscis enclosures: oval frames for divine figures with 2-3mm outline weight
  - Inhabited vine scrolls: stylized foliage with animal/hybrid creatures integrated at 5-8mm scale
- **Period framing:** 11th-12th century, peak Romanesque monastery production.
- **Tone Tag:** Monumental-Abstract-Symbolic.
- **Production Era Authenticity:** Monastic scriptorium production with liturgical book standards, costly materials indicating institutional patronage.

------

## 4) Technical Method & Mark-Making

- **Line Quality with Tool Marks:** 2-3mm primary outlines in iron gall ink, 1-1.5mm secondary contours, consistent hierarchical weight system, no atmospheric line variation, structural definition only.
- **Color Mixing Methods:** Flat tempera fields with distinct boundaries, 1-2mm paint thickness, pigments suspended in egg yolk binder, no visible brushstrokes, sharp color transitions without blending.
- **Texture Thickness Specifications:** Smooth opaque coverage maintaining parchment texture visibility, raised gesso preparation for gold areas (3-4mm thickness), burnished gold leaf with directional tool marks.
- **Edge Treatment:** Bold linear separation between color fields, architectural outline definition, mandorla/frame emphasis through weight contrast.
- **Stroke Economy with Directional Requirements:** Minimal stroke economy favoring symbolic clarity, directional emphasis toward narrative focal points, gesture lines radiating from authority figures.
- **Surface Depth Measurements:** Flat symbolic space with register-based depth indication, architectural elements suggesting spatial containment without perspective recession.
- **Detail Hierarchy with Proportional Specifications:** Face details 25-30% oversized eyes, 15-20% enlarged hands for gesture emphasis, architectural details proportioned to symbolic rather than realistic scale.
- **Material Simulation with Authentic Characteristics:** Visible parchment texture, natural substrate color variations, ruled text lines, gold leaf application over red bole with characteristic tool burnishing marks.
- **Pose Anchors:** Frontal or 3/4 poses, symmetrical groupings around central figures, blessing/pointing gesture vocabulary, hierarchical scale relationships.
- **Scale Hierarchy Anchor:** 6-7 head height figure proportions, symbolic scaling by narrative importance, architectural proportions serving compositional rather than realistic requirements.
- **Material Authenticity Anchor:** 11th-12th century pigment palette (ultramarine, vermillion, verdigris, orpiment, red ochre, lead white), egg tempera binding, animal parchment substrate with preparation characteristics.
- **Period Consistency Anchor:** Romanesque architectural forms (round arches, geometric capitals), Caroline minuscule script integration, nomina sacra abbreviations.

------

## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:** Religious vestments (episcopal, monastic, clerical), secular nobility (Byzantine-influenced), royal regalia (crown, scepter, orb).
- **Fabric behavior:** Geometric drapery patterns with linear fold definition, fabric falls in abstract sculptural arrangements, heavy textile weight suggested through bold outline definition.
- **Accessory caps:** Minimalist 0-2 symbolic attributes (chalice, book, sword, crown), maximum focus on gesture and architectural setting.
- **Color palette restrictions:** 11th-12th century pigment limitations with symbolic color assignments (blue = divine, red = earthly power, gold = eternal light, purple = imperial authority).
- **Wardrobe variation required:** Cycle through clerical vestment colors and patterns, vary secular costume details while maintaining period authenticity.
- **Props:** 1 primary symbolic attribute + optional 1 secondary (total ≤2) with liturgical/narrative appropriateness.
- **Coherence filter:** All elements support Romanesque monumental presentation; fallback = architectural framing emphasis.

**YAML prop pools:**

```yaml
religious_props:
  primary: [chalice, gospel_book, cross_staff, crozier, thurible]
  secondary: [scroll, keys, palm_branch, crown, sword]
secular_props:
  primary: [sword, crown, scepter, orb, shield]
  secondary: [hunting_horn, falcon, scroll, purse, dagger]
architectural_elements:
  framing: [round_arch, column_capital, mandorla, arcade]
  decorative: [vine_scroll, interlace_knot, foliate_border]
```

------

## 6) Safety & IP Constraints (Hard Rules)

- **Canvas Negatives (≥2):**
  - "original aspect ratio", "source dimensions", "unmodified framing"
  - "Gothic pointed arches", "Renaissance perspective", "atmospheric modeling"
  - "naturalistic proportions", "chiaroscuro shading", "linear perspective recession"
  - "Victorian medieval revival", "Pre-Raphaelite interpretation", "Arts and Crafts styling"
- **Canvas Positives (≥2):**
  - "exactly [declared ratio]", "manuscript page proportioned"
  - "2-3mm iron gall outlines", "flat tempera color fields"
  - "Romanesque round arches", "hierarchical symbolic scaling"
  - "11th-12th century pigment palette", "egg tempera binding authentic"
- **Vocabulary warnings:** Avoid "naturalistic," "realistic proportions," "atmospheric depth," "Gothic elements," "Renaissance sophistication."

------

## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

- **For Manuscript Ratios (2:3, 3:4):** Hierarchical register division, architectural framing emphasis, 60-70% image to 30-40% text integration
- **For Square (1:1):** Central medallion composition, radial decorative border system, mandorla/vesica piscis framing
- **For Portrait (4:5):** Vertical figure emphasis with architectural canopy, border decoration integration

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Flat symbolic space with architectural register division, no linear perspective, hierarchical scaling by narrative importance
- **Grid/symmetry:** Architectural grid based on Romanesque proportional systems, symmetrical figure groupings around authority centers
- **Figure:ground ratio:** 60-70% figure dominance with architectural background support, symbolic color field backgrounds
- **Density percentage:** Moderate density allowing monumental figure presentation, decorative border complexity balanced with central clarity
- **Lighting logic:** No atmospheric lighting, symbolic light emanation from divine figures, gold background luminosity
- **Detail:negative space ratio:** Balanced for manuscript scale viewing, border decoration offsetting central composition weight

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Animal parchment prepared for deluxe manuscript production, visible ruled lines, natural texture variations
- **Frame/Band Anchor:** Decorative border system with interlaced geometric patterns, inhabited vine scrolls, 15-25mm width proportioned to page format
- **Production Context Anchor:** Monastic scriptorium environment, liturgical book standards, institutional patronage quality
- **Ratio Enforcement Anchor:** Composition designed specifically for manuscript page proportions with integrated text zone consideration

------

## 8) Typography & Text Integration (If Historically Present)

- **Binary:** Allow text integration for authentic manuscript page presentation.
- **If allowed:**
  - **Ratio-Appropriate Zones:** Text columns respecting architectural composition framework, Caroline minuscule script integration
  - **Copy limits:** Sacred texts, liturgical passages, narrative tituli positioned for manuscript reading patterns
  - **Period-Appropriate Typography:** Caroline minuscule for body text, decorated capitals 20-40mm height, nomina sacra abbreviations
  - **Font recommendation:** "Period-authentic Caroline minuscule (no modern equivalent). Reference: 11th-12th century monastery scripts."
- **Format-Specific Text Rules:**
  - **Manuscript page mode:** Integrated text-image layout with ruled column structure
  - **Initial letter mode:** Text integration within decorated capital framework
  - **Narrative cycle:** Tituli and explanatory text positioned within architectural registers
- **Historical accuracy:** Script forms must match 11th-12th century manuscript standards with documented abbreviation systems.
- **Production Method Integration:** Text rendered with period-appropriate ink application, ruled line guidance, justified column alignment.

------

## Enhanced Validation Checklist (background based, do not add to prompt)

- **Section 1:** Canvas Override + exact ratio + IP Safeguard + Style Dominance + Face Flag + Pose Flag + Canvas Control Flag
- **Section 2:** Manuscript ratio selection + architectural register strategy + hierarchical allocation + symbolic background + format justification
- **Section 3:** 5 fields + tone tag + production era authenticity
- **Section 4:** ≥5 anchors + measurement specifications + pose + scale + material authenticity + period consistency
- **Section 5:** Wardrobe + YAML props + period variation + Romanesque coherence
- **Section 6:** ≥2 canvas negatives + ≥2 canvas positives + vocabulary warnings
- **Section 7:** Ratio-specific composition + perspective regime + figure:ground + density + symbolic lighting + surface context + frame policy + production context + ratio enforcement
- **Section 8:** Text integration policy + manuscript layout + script accuracy + period authenticity
- **Canvas Control:** Manuscript proportions specified, architectural division declared, original dimensions ignored
- **IP Protection:** Original religious composition, appropriate symbolic iconography
- **Material authenticity:** 11th-12th century techniques verified
- **Production authenticity:** Monastic scriptorium standards maintained
- **Composition boundaries:** Decorative borders only, no external frames
- **Period consistency:** Romanesque architectural elements throughout
- **Technical precision:** Quantified measurements for line weights, paint thickness, scale proportions
- **Anti-naturalism:** Symbolic representation enforced over realistic rendering

------

## Romanesque-Specific Technical Requirements

### Core Material Physics

- **Substrate:** Animal parchment with visible texture, natural color variations, ruled preparation lines
- **Primary Medium:** Egg tempera with documented 11th-12th century pigment palette
- **Outline System:** Iron gall ink at 2-3mm primary weight, 1-1.5mm secondary hierarchy
- **Gold Application:** Raised red-stained gesso preparation, burnished gold leaf with tool mark directionality

### Architectural Framework Specifications

- **Arch Forms:** Round arches only (no Gothic pointed arches)
- **Column Systems:** Geometric capitals with stylized foliage, proportional relationships
- **Framing Elements:** Mandorla/vesica piscis for divine figures, architectural canopies for earthly authority
- **Border Systems:** Interlaced geometric patterns, inhabited vine scrolls, measured proportional relationships

### Figure Treatment Standards

- **Scale Hierarchy:** Symbolic proportions (divine 15-20% larger than human)
- **Pose Vocabulary:** Frontal/3-4 hieratic positions, blessing/pointing gesture systems
- **Facial Features:** Enlarged eyes (25-30%), linear definition, minimal atmospheric modeling
- **Drapery Treatment:** Geometric fold patterns, abstract sculptural arrangements, bold outline definition

### Color and Surface Authenticity

- **Pigment Constraints:** Ultramarine, vermillion, verdigris, orpiment, red ochre, lead white only
- **Application Method:** Flat color fields with sharp transitions, no atmospheric blending
- **Surface Texture:** Smooth opaque coverage maintaining substrate visibility
- **Symbolic Color Logic:** Blue=divine, red=earthly power, gold=eternal light, purple=imperial authority

This framework enforces authentic Romanesque manuscript illumination characteristics while preventing contamination from Gothic, Renaissance, or modern revival interpretations.

---
