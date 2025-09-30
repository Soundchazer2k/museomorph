# Expressionist Analysis

------

# Edvard Munch

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **3:4 ratio** - ignore source image dimensions completely.
- Redraw in **Norwegian Symbolist-Expressionist painting** for **oil on canvas psychological portrait**.
- Identity via psychological gesture/tormented expression/symbolic distortion.
- **IP Safeguard Declaration:** Create original psychological composition avoiding copyrighted elements appropriate to Symbolist-Expressionist tradition.
- **Face-Treatment Flag:** `painterly-contour`
- **Pose Flag:** `psychological-tension`
- **Canvas Control Flag:** `adaptive-extend`
- **Style Dominance:** Munch's symbolic distortion and color psychology override naturalistic representation.
- **Mode Selector:** psychological portrait

## 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:** `3:4` (classical portrait)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with atmospheric psychological space
- **Spatial Allocation:** Subject dominance 70% with symbolic environmental elements
- **Background Treatment:** Extend swirling, undulating patterns and non-naturalistic color fields to fill vertical canvas space
- **Format Justification:** 3:4 portrait ratio serves Munch's intimate psychological inquiry and symbolic intensity

## 3) Artistic Style & Context

- **Influences:** Van Gogh's expressive brushwork, Gauguin's symbolic color, Norwegian folk art, medieval spirituality
- **Medium/Production method:** Oil on canvas with thick impasto and flowing, undulating brushstrokes
- **Thematic purpose:** Externalization of internal psychological states, universal human anxiety, death, love, isolation
- **5 hallmark motifs:** Swirling, wavy lines mirroring emotional turbulence; non-naturalistic color expressing psychological states; simplified, mask-like faces; diagonal compositions creating visual anxiety; symbolic landscapes reflecting inner torment
- **Period framing:** 1890s-1910s Norwegian Symbolist-Expressionist transition period
- **Tone Tag:** Existential melancholy with spiritual intensity
- **Production Era Authenticity:** Traditional oil painting techniques with Post-Impressionist color innovation and Symbolist psychological content

## 4) Technical Execution

- **Line:** Flowing, undulating contours that mirror psychological states; wavy, unstable horizons; diagonal tension lines
- **Color:** Non-naturalistic psychological palette - fiery orange-reds for anguish, sickly greens for psychological distress, deep blues for melancholy
- **Texture:** Visible brushstrokes with moderate impasto; smooth psychological transitions between color fields
- **Edge:** Soft, dissolved edges for psychological uncertainty; sharp contrasts for emotional intensity
- **Stroke economy:** Deliberate, flowing brushwork that follows emotional rather than anatomical logic
- **Surface depth:** Flattened perspective with symbolic rather than realistic spatial relationships
- **Detail hierarchy:** Simplified forms focusing on essential psychological elements over naturalistic detail
- **Material simulation:** Authentic oil painting surface with visible canvas texture
- **Pose Anchors:** Psychological tension expressed through body language - hands to head, distant gaze, angular positioning
- **Scale Hierarchy Anchor:** Symbolic scale - figures may be enlarged or diminished based on psychological significance
- **Material Authenticity Anchor:** Traditional oil on canvas techniques with visible brushwork and paint texture
- **Period Consistency Anchor:** 1890s Norwegian painting methods with Symbolist color theory
- **Production Method Anchor:** Hand-mixed oil pigments applied with traditional brushes on primed canvas
- **Canvas Adaptation Anchor:** Composition designed for 3:4 vertical format emphasizing psychological verticality

## 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**WARDROBE TRACKS:**

- **Adult masculine:** Simple dark suits, white shirts, minimal bourgeois clothing reflecting Munch's own style
- **Adult feminine:** Flowing white or red dresses, simplified forms emphasizing symbolic rather than fashionable elements
- **Androgynous:** Flowing robes or simplified garments that emphasize universal human form

**FABRIC BEHAVIOR:** Simplified drapery that follows emotional rather than gravitational logic; fabrics may appear to flow with psychological energy

**ACCESSORY CAPS:** Minimalist 0-1 (symbolic objects only)

**COLOR PALETTE:** Restricted to psychological primaries - white for innocence/death, red for passion/blood, black for despair, with Munch's characteristic non-naturalistic hues

**WARDROBE VARIATION REQUIRED:** Cycle through white, red, and black primary garments with simplified, flowing forms

**PROPS:** Maximum 1 symbolic object (skull, flower, mirror, book) that serves psychological narrative

**COHERENCE FILTER:** All elements support symbolic-psychological narrative; eliminate decorative details

**YAML PROP POOLS:**

```yaml
symbolic_objects:
  death_symbols: [skull, wilted_flower, empty_chair, mirror]
  psychological_items: [letter, book, medicine_bottle, cigarette]
  relationship_symbols: [ring, photograph, broken_object]
```

## 6) Constraints

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "photographic realism"
- "decorative Art Nouveau elements", "ornate details", "Vienna Secession gold"
- "bright cheerful colors", "naturalistic lighting", "academic precision"
- "stable horizontal lines", "realistic depth", "detailed naturalistic features"

**✅ Canvas Positives:**

- "exactly 3:4", "recomposed for portrait intensity", "psychological vertical emphasis"
- "flowing undulating brushwork", "symbolic color psychology", "existential melancholy"
- "authentic oil painting techniques", "visible canvas texture", "Norwegian Symbolist tradition"
- "dramatically simplified archetypal forms", "unstable tilted perspectives", "visual anxiety through diagonal discord"

**Vocabulary warnings:** Avoid "ornate," "decorative," "cheerful" to prevent generation of inappropriate stylistic elements

## 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (3:4 Portrait):**

- **Vertical emphasis:** Subject dominance ≥70% with psychological environmental context
- **Hierarchical staging:** Central figure with symbolic background elements supporting psychological narrative

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Flattened, symbolic space with wavy, unstable horizon lines
- **Grid/symmetry:** Diagonal tension creating psychological unease
- **Figure:ground:** 70% figure dominance with 30% symbolic atmospheric background
- **Density:** Simplified forms with essential psychological elements only
- **Lighting logic:** Non-naturalistic, expressive lighting serving psychological mood
- **Detail:negative space ratio:** Minimal detail, maximum psychological impact optimized for 3:4 vertical format

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on canvas with visible weave texture and traditional priming
- **Frame/Band Anchor:** Omit entirely (authentic to painting tradition)
- **Production Context Anchor:** 1890s Norwegian studio painting on traditional canvas support
- **Ratio Enforcement Anchor:** Composition designed specifically for 3:4 portrait format emphasizing psychological verticality and intimacy

## 8) Typography & Text Integration

**BINARY:** Omit entirely

**IF ALLOWED:** N/A - Munch's psychological paintings exclude text integration

**HISTORICAL ACCURACY:** Pure painting tradition without typographic elements

**PRODUCTION METHOD INTEGRATION:** N/A - focus remains on painted surface

------

# Egon Schiele

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **2:3 ratio** - ignore source image dimensions completely.
- Redraw in **Viennese Expressionist raw figuration** for **oil on canvas psychological portraiture**.
- Identity via angular distortion/raw vulnerability/psychological exposure.
- **IP Safeguard Declaration:** Create original psychological figure study avoiding copyrighted elements appropriate to Viennese Expressionist tradition.
- **Face-Treatment Flag:** `angular-distorted`
- **Pose Flag:** `psychological-vulnerability`
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Schiele's angular distortion and psychological rawness override conventional beauty standards.
- **Mode Selector:** psychological figure study

## 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:** `2:3` (elongated vertical for psychological tension)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with elongated vertical emphasis
- **Spatial Allocation:** Figure dominance 80% with minimal background context
- **Background Treatment:** Stark, often empty backgrounds with subtle color washes to emphasize psychological isolation
- **Format Justification:** 2:3 elongated vertical ratio serves Schiele's intense psychological focus and angular figure distortion

## 3) Artistic Style & Context

- **Influences:** Gustav Klimt's linear elegance, Vienna Secession rebellion, medieval manuscript intensity, primitive art directness, psychological analysis
- **Medium/Production method:** Mixed media on paper with gouache, watercolor, and aggressive linear drawing techniques creating drawing-painting hybrid approach
- **Thematic purpose:** Uncompromising psychological truth, raw sexuality, death obsession, moral critique of bourgeois hypocrisy
- **5 hallmark motifs:** Sharp, angular and febrile lines defining form; distorted, elongated body proportions; stark psychological isolation; raw, unidealized sexuality; morbid fascination with decay and death
- **Period framing:** 1910s Viennese Expressionist rebellion against Art Nouveau decoration
- **Tone Tag:** Raw psychological intensity with morbid introspection
- **Production Era Authenticity:** Early 20th century Viennese painting with Expressionist psychological directness

## 4) Technical Execution

- **Line:** Sharp, angular, febrile lines that define psychological rather than anatomical truth
- **Color:** Raw, unmodulated colors often applied directly; sickly greens, flesh tones, stark contrasts
- **Texture:** Relatively smooth application with emphasis on linear definition over painterly surface
- **Edge:** Hard, sharp edges creating psychological tension and anatomical distortion
- **Stroke economy:** Economical, precise marks that serve psychological expression over decorative beauty
- **Surface depth:** Flattened space emphasizing figure over environmental context
- **Detail hierarchy:** Hyper-focus on hands, faces, and sexually charged body parts
- **Material simulation:** Authentic oil and gouache techniques with linear precision
- **Pose Anchors:** Psychological tension through contorted poses, introspective gestures, vulnerable positioning
- **Scale Hierarchy Anchor:** Distorted proportions serving psychological rather than naturalistic truth
- **Material Authenticity Anchor:** Traditional oil and gouache on canvas with linear clarity
- **Period Consistency Anchor:** 1910s Viennese painting methods with Expressionist psychological approach
- **Production Method Anchor:** Precise brushwork and drawing techniques combined with raw color application
- **Canvas Adaptation Anchor:** Composition designed for 2:3 elongated format emphasizing psychological verticality and isolation

## 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**WARDROBE TRACKS:**

- **Adult masculine:** Simple shirts, often partially unbuttoned or removed; minimal, revealing clothing
- **Adult feminine:** Simple undergarments, flowing fabric, often partially draped or removed
- **Androgynous:** Flowing robes or minimal clothing emphasizing vulnerable human form

**FABRIC BEHAVIOR:** Simplified drapery that emphasizes body contours and psychological states rather than fashion

**ACCESSORY CAPS:** Minimalist 0-1 (symbolic objects only)

**COLOR PALETTE:** Muted earth tones, flesh colors, stark whites and blacks, with occasional symbolic reds

**WARDROBE VARIATION REQUIRED:** Cycle through minimal clothing arrangements emphasizing psychological vulnerability rather than fashion

**PROPS:** Maximum 1 symbolic object serving psychological narrative (mirror, flower, book, personal item)

**COHERENCE FILTER:** All elements support psychological intensity and raw human truth

**YAML PROP POOLS:**

```yaml
schiele_objects:
  psychological_symbols: [mirror, wilted_flower, personal_letter, artistic_materials]
  intimacy_objects: [simple_jewelry, fabric_draping, personal_clothing]
  mortality_symbols: [dried_flowers, skull_studies, medical_items]
```

## 6) Constraints

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "decorative Art Nouveau elements"
- "idealized beauty", "classical proportions", "ornate details"
- "cheerful colors", "romantic sentimentality", "bourgeois propriety"
- "soft curves", "harmonious color relationships", "pleasant compositions", "naturalistic anatomy"

**✅ Canvas Positives:**

- "exactly 2:3", "recomposed for elongated psychological tension", "vertical figure dominance"
- "brutally sharp febrile lines", "psychological distortion", "raw uncompromising truth"
- "authentic oil and gouache techniques", "brutal linear precision", "Viennese Expressionist rebellion"
- "stark psychological isolation", "anatomical destruction", "tortured emotional intensity"

**Vocabulary warnings:** Avoid "beautiful," "decorative," "elegant" to prevent idealized or ornamental qualities

## 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (2:3 Elongated Vertical):**

- **Vertical emphasis:** Figure dominance 85% of vertical space with minimal environmental context
- **Cropping strategy:** Crop at unexpected points - mid-thigh, mid-torso, or cutting through limbs to create visual anxiety
- **Positioning specifications:** Eyes positioned 1/3 higher than normal portrait placement; figures positioned to violate comfortable viewing expectations

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Dramatically flattened space with figure pressed against picture plane
- **Grid/symmetry:** Asymmetrical compositions that create psychological unease through off-balance positioning
- **Figure:ground:** 85% figure dominance with 15% stark, psychologically oppressive empty background
- **Density:** Concentrated psychological intensity with complete elimination of decorative elements
- **Lighting logic:** Harsh, unforgiving lighting that reveals every psychological flaw and physical imperfection
- **Detail:negative space ratio:** Intense focus on elongated necks (150% normal), unnaturally long bony fingers, jutting shoulder blades, visible rib cages through skin optimized for 2:3 vertical format

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Paper substrate with pencil foundation visible through transparent watercolor washes
- **Frame/Band Anchor:** Omit entirely (authentic to drawing-painting hybrid tradition)
- **Production Context Anchor:** 1910s Viennese mixed media technique with aggressive pencil work as foundation
- **Ratio Enforcement Anchor:** Composition designed specifically for 2:3 elongated format with 85% vertical figure dominance and strategic cropping creating psychological discomfort

## 8) Typography & Text Integration

**BINARY:** Omit entirely

**IF ALLOWED:** N/A - Schiele's psychological paintings exclude text integration

**HISTORICAL ACCURACY:** Pure painting tradition focused on psychological figure studies

**PRODUCTION METHOD INTEGRATION:** N/A - emphasis on raw psychological expression through form and color

---

# Oskar Kokoschka

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **4:3 ratio** - ignore source image dimensions completely.
- Redraw in **Viennese Expressionist psychological portraiture** for **oil on canvas with nervous brushwork**.
- Identity via frantic energy/psychological penetration/inner vision manifestation.
- **IP Safeguard Declaration:** Create original psychological portrait avoiding copyrighted elements appropriate to Viennese Expressionist tradition.
- **Face-Treatment Flag:** `nervous-animated`
- **Pose Flag:** `psychological-penetration`
- **Canvas Control Flag:** `adaptive-extend`
- **Style Dominance:** Kokoschka's nervous brushwork and psychological vision override physical appearance.
- **Mode Selector:** psychological portrait

## 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:** `4:3` (balanced landscape for psychological portraits)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with swirling psychological atmosphere
- **Spatial Allocation:** Subject dominance 70% with turbulent environmental context
- **Background Treatment:** Extend nervous, frantic brushstrokes and turbulent color fields to fill 4:3 canvas space
- **Format Justification:** 4:3 ratio serves Kokoschka's balanced psychological portraits with atmospheric context

## 3) Artistic Style & Context

- **Influences:** No formal art training leading to intuitive approach, Vienna Secession rebellion, primitive art directness, psychological analysis, Freudian subconscious exploration
- **Medium/Production method:** Oil on canvas with nervous, animated brushwork and frantic energy application
- **Thematic purpose:** Manifestation of inner vision through subconscious, psychological penetration beyond surface appearance, catastrophic premonition
- **5 hallmark motifs:** Nervous, swirling and frantic brushstrokes; turbulent, nihilistic atmospheric backgrounds; psychological rather than optical vision; visible anxiety and scratch marks; catastrophic emotional intensity
- **Period framing:** 1900s-1920s Viennese Expressionist psychological exploration period
- **Tone Tag:** Frantic psychological intensity with catastrophic premonition
- **Production Era Authenticity:** Early 20th century Viennese painting with untrained, intuitive expressionist techniques

## 4) Technical Execution

- **Line:** Nervous, animated lines with visible anxiety and scratch marks; frantic, swirling movements
- **Color:** Vibrant and contrasting colors serving psychological rather than naturalistic purposes
- **Texture:** Visible brushstrokes creating anxious, scratch-marked surfaces; nervous energy made tangible
- **Edge:** Agitated, uncertain edges reflecting psychological turbulence
- **Stroke economy:** Frantic, energetic marks following emotional rather than formal logic
- **Surface depth:** Turbulent atmospheric space reflecting inner psychological states
- **Detail hierarchy:** Essential psychological elements emphasized through nervous energy
- **Material simulation:** Authentic oil painting with characteristic nervous brushwork texture
- **Pose Anchors:** Psychological intensity through inner energy representation - hands expressing internal tension, eyes revealing psychological depth
- **Scale Hierarchy Anchor:** Proportions serving psychological rather than naturalistic truth
- **Material Authenticity Anchor:** Traditional oil on canvas with distinctive nervous, untrained brushwork
- **Period Consistency Anchor:** 1900s-1920s Viennese painting methods with intuitive expressionist approach
- **Production Method Anchor:** Direct, untrained painting techniques with psychological intensity
- **Canvas Adaptation Anchor:** Composition designed for 4:3 format balancing psychological subject with turbulent atmospheric context

## 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**WARDROBE TRACKS:**

- **Adult masculine:** Bourgeois clothing reflecting Kokoschka's portrait subjects - suits, formal wear, intellectual attire
- **Adult feminine:** Elegant dresses, artistic clothing, reflecting Vienna's cultural elite
- **Aristocratic:** Clothing reflecting the tubercular aristocrats and cultural figures he painted

**FABRIC BEHAVIOR:** Clothing rendered with same nervous energy as flesh; fabrics follow psychological rather than gravitational logic

**ACCESSORY CAPS:** Minimalist 1-2 (objects reflecting subject's psychological state or social position)

**COLOR PALETTE:** Vibrant contrasting colors - blues, greens, reds applied for psychological impact rather than naturalistic accuracy

**WARDROBE VARIATION REQUIRED:** Cycle through period-appropriate clothing rendered with psychological rather than fashion emphasis

**PROPS:** Maximum 2 objects serving psychological narrative or social commentary

**COHERENCE FILTER:** All elements support psychological penetration and social observation

**YAML PROP POOLS:**

```yaml
kokoschka_objects:
  psychological_items: [books, musical_instruments, artistic_materials, personal_objects]
  social_symbols: [jewelry, cultural_artifacts, status_objects, letters]
  artistic_tools: [brushes, palette, canvas, creative_materials]
```

## 6) Constraints

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "smooth academic finish"
- "calm brushwork", "photographic precision", "decorative Art Nouveau elements"
- "peaceful atmosphere", "conventional beauty", "static composition"
- "controlled brushwork", "harmonious colors", "composed surfaces", "careful rendering"

**✅ Canvas Positives:**

- "exactly 4:3", "recomposed for psychological balance", "turbulent atmospheric context"
- "frantically nervous brushwork", "psychological penetration", "visible anxiety scratch marks"
- "authentic oil painting texture", "untrained intuitive energy", "Viennese Expressionist intensity"
- "psychologically disturbing colors", "frantic nervous energy", "anxiety-ridden surface texture"

**Vocabulary warnings:** Avoid "calm," "peaceful," "refined" to prevent academic or decorative qualities

## 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (4:3 Balanced):**

- **Balanced emphasis:** Subject dominance 70% with significant turbulent atmospheric context 30%
- **Psychological staging:** Nervous energy balanced between figure and environment

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Psychological space with turbulent, swirling atmospheric elements
- **Grid/symmetry:** Asymmetrical compositions driven by nervous energy and psychological tension
- **Figure:ground:** 70% figure with 30% frantic atmospheric background
- **Density:** Rich psychological information conveyed through nervous brushwork intensity
- **Lighting logic:** Psychological lighting serving inner vision rather than optical accuracy
- **Detail:negative space ratio:** Nervous energy filling space with psychological significance optimized for 4:3 format

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on canvas with nervous brushwork texture and visible anxiety marks
- **Frame/Band Anchor:** Omit entirely (authentic to painting tradition)
- **Production Context Anchor:** 1900s-1920s Viennese studio painting with untrained, intuitive approach
- **Ratio Enforcement Anchor:** Composition designed specifically for 4:3 format balancing psychological subject with turbulent atmospheric context

## 8) Typography & Text Integration

**BINARY:** Omit entirely

**IF ALLOWED:** N/A - Kokoschka's psychological paintings exclude text integration

**HISTORICAL ACCURACY:** Pure painting tradition focused on psychological penetration through brushwork

**PRODUCTION METHOD INTEGRATION:** N/A - emphasis on nervous, animated painting surface

------

# Ernst Ludwig Kirchner

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **2:3 ratio** - ignore source image dimensions completely.
- Redraw in **German Expressionist urban anxiety** for **oil on canvas with angular modernist style**.
- Identity via angular aggression/metropolitan alienation/geometric distortion.
- **IP Safeguard Declaration:** Create original urban psychological composition avoiding copyrighted elements appropriate to German Expressionist tradition.
- **Face-Treatment Flag:** `angular-modernist`
- **Pose Flag:** `urban-alienation`
- **Canvas Control Flag:** `strict-reframe`
- **Style Dominance:** Kirchner's spiky angular style and urban anxiety override naturalistic representation.
- **Mode Selector:** urban psychological study

## 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:** `2:3` (elongated vertical for urban scenes)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** strict-reframe with urban vertical emphasis
- **Spatial Allocation:** Figure dominance 65% with significant urban environmental context
- **Background Treatment:** Extend angular urban elements, street scenes, and metropolitan anxiety to fill 2:3 vertical canvas space
- **Format Justification:** 2:3 elongated vertical ratio serves Kirchner's urban street scenes and metropolitan psychological tension

## 3) Artistic Style & Context

- **Influences:** Primitivism, African and Oceanic art, medieval German woodcuts, Fauvism color, urban modernist anxiety
- **Medium/Production method:** Oil on canvas with spiky, angular brushwork and bold color application
- **Thematic purpose:** Metropolitan alienation, modern urban anxiety, psychological trauma of war, primitivist rebellion against bourgeois culture
- **5 hallmark motifs:** Spiky, aggressive angular lines; collapsed perspective creating urban claustrophobia; elongated, mask-like faces influenced by primitive art; jarring, contrasting colors; prostitutes as symbols of modern alienation
- **Period framing:** 1905-1925 German Expressionist Die Brücke movement and urban Berlin period
- **Tone Tag:** Urban anxiety with primitivist rebellion
- **Production Era Authenticity:** Early 20th century German painting with Die Brücke group techniques and primitivist influences

## 4) Technical Execution

- **Line:** Spiky, aggressive angular lines creating urban tension and psychological anxiety
- **Color:** Jarring, contrasting colors serving emotional rather than naturalistic purposes; bold primitivist palette
- **Texture:** Bold, direct brushwork with angular, aggressive surface treatment
- **Edge:** Sharp, angular edges creating psychological tension and urban claustrophobia
- **Stroke economy:** Direct, aggressive marks serving urban anxiety and primitivist directness
- **Surface depth:** Collapsed perspective creating claustrophobic urban spaces
- **Detail hierarchy:** Essential urban elements emphasized through angular distortion and color contrast
- **Material simulation:** Authentic oil painting with bold, direct German Expressionist techniques
- **Pose Anchors:** Urban alienation through angular positioning, metropolitan anxiety, confrontational stances
- **Scale Hierarchy Anchor:** Elongated proportions serving urban psychological truth rather than naturalistic accuracy
- **Material Authenticity Anchor:** Traditional oil on canvas with Die Brücke group angular techniques
- **Period Consistency Anchor:** 1905-1925 German painting methods with primitivist and urban modernist approach
- **Production Method Anchor:** Bold, direct painting techniques influenced by woodcut and primitivist art
- **Canvas Adaptation Anchor:** Composition designed for 2:3 elongated format emphasizing urban verticality and metropolitan tension

## 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**WARDROBE TRACKS:**

- **Adult masculine:** Urban bourgeois clothing, military uniforms (reflecting war trauma), artist's clothing
- **Adult feminine:** Street fashion, prostitute attire as symbol of modernity, urban working women's clothing
- **Urban modern:** Clothing reflecting early 20th century metropolitan life and social change

**FABRIC BEHAVIOR:** Clothing rendered with angular distortion reflecting urban psychological states

**ACCESSORY CAPS:** Minimalist 1-2 (objects reflecting urban modern life or war trauma)

**COLOR PALETTE:** Bold, jarring contrasts - acidic greens, electric blues, harsh reds serving psychological rather than naturalistic purposes

**WARDROBE VARIATION REQUIRED:** Cycle through urban modern clothing with angular, distorted rendering emphasizing psychological alienation

**PROPS:** Maximum 2 objects serving urban or war-related narrative

**COHERENCE FILTER:** All elements support urban anxiety and modernist psychological themes

**YAML PROP Pools:**

```yaml
kirchner_objects:
  urban_symbols: [city_streets, electric_lights, modern_architecture, transportation]
  war_trauma: [military_items, medical_objects, broken_objects, letters]
  primitivist_art: [masks, tribal_objects, folk_art_items, woodcut_tools]
```

## 6) Constraints

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "smooth academic finish"
- "peaceful rural scenes", "classical beauty", "decorative refinement"
- "soft curves", "romantic sentimentality", "bourgeois comfort"
- "naturalistic proportions", "conventional facial features", "harmonious color schemes"
- "spiky hair", "radiating hair", "wild hair", "flowing locks"

**✅ Canvas Positives:**

- "exactly 2:3", "recomposed for urban vertical emphasis", "metropolitan psychological tension"
- "violently angular geometric planes", "African mask-influenced faces", "acidic jarring color assault"
- "authentic oil painting texture", "Die Brücke group techniques", "German Expressionist anxiety"
- "choppy hack-like brushwork", "suffocating collapsed perspective", "primitivist geometric simplification"

**Vocabulary warnings:** Avoid "peaceful," "comfortable," "refined" to prevent bourgeois or rural idyllic qualities

## 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (2:3 Elongated Vertical):**

- **Vertical emphasis:** Urban scene dominance with figure integration 65% and metropolitan context 35%
- **Urban staging:** Street scenes emphasizing psychological alienation and metropolitan anxiety

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Collapsed urban perspective creating claustrophobic metropolitan spaces
- **Grid/symmetry:** Angular, tilted compositions emphasizing urban disequilibrium
- **Figure:ground:** 65% figure-urban integration with 35% metropolitan environmental context
- **Density:** Rich urban information conveyed through angular distortion and color contrast
- **Lighting logic:** Harsh electric lighting serving urban modernist rather than natural illumination
- **Detail:negative space ratio:** Dense urban elements with angular efficiency optimized for 2:3 vertical format

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on canvas with bold angular brushwork texture reflecting urban anxiety
- **Frame/Band Anchor:** Omit entirely (authentic to painting tradition)
- **Production Context Anchor:** 1905-1925 German Die Brücke group painting with primitivist and urban influences
- **Ratio Enforcement Anchor:** Composition designed specifically for 2:3 elongated format emphasizing urban verticality and metropolitan psychological tension

## 8) Typography & Text Integration

**BINARY:** Omit entirely

**IF ALLOWED:** N/A - Kirchner's paintings exclude text integration

**HISTORICAL ACCURACY:** Pure painting tradition focused on urban psychological expression through form and color

**PRODUCTION METHOD INTEGRATION:** N/A - emphasis on angular painting surface and urban anxiety expression

------

# Vincent van Gogh

## Renderer-Agnostic Adapter

- **Constraint precedence:** Sections **1→8** are **hard constraints**; earlier overrides later.
- **Canvas Override Mandate:** Always ignore source image dimensions; compose for declared target aspect ratio.
- **Style over likeness:** Likeness via silhouette/gesture/expression unless photographic.
- **Face-Treatment Flags (choose one):**
  - *Traditional Painted:* `painterly-contour`, `fresco-matte`, `tempera-precise`, `watercolor-soft`, `acrylic-flat`
  - *Drawing/Illustration:* `pen-crosshatch`, `brush-wash`, `charcoal-smudge`, `gouache-opaque`, `poster-ink`, `litho-wash`
  - *Print/Reproduction:* `engrave-hatch`, `woodblock-carved`, `silkscreen-layered`, `offset-dot`, `halftone-dot`
  - *Mosaic/Decorative:* `mosaic-tessera`, `icon-flat`, `stained-glass-lead`, `byzantine-gold`, `manuscript-miniature`
  - *Digital/Modern:* `vector-crisp`, `pixel-stepped`, `digital-painted`, `3d-rendered`
  - *Photographic:* `diffusion-soft`, `diffusion-glam`, `film-grain-triX`, `hard-flash`, `platinum-plate`, `color-surge`
  - *Stylized:* `geometric-faceted`, `organic-flowing`, `caricature-exaggerated`
- **Pose Flags (choose one):** `frontal-rigid`, `contrapposto`, `power-stance`, `candid-motion`, `foreshortened-diagonal`, `erotic-tension`, `gestural-fluid`.
- **Canvas Control Flags (choose one):** `strict-reframe`, `adaptive-extend`, `format-native`, `source-respect`.
- **Media Hybrid Flag (optional):** `photo-illustration-collage`, `vector-screenprint`, `cutout-montage`.
- **Quantifiers authoritative:** numeric anchors are targets.
- **Text policy:** Only render text if Section 8 authorizes.
- **Safety/IP:** No nudity/gore; no real logos/watermarks/signatures.
- **Age & wardrobe guardrail:** Minors = modest; unknown age defaults to adult neutral.
- **Gender expression:** Respect presented.
- **Material authenticity:** No digital photo filters, Instagram effects, or modern post-processing that mimics traditional media; surface must exhibit authentic medium characteristics.
- **Period Production Authenticity:** For historical publication styles (comics, magazines, prints), use period-appropriate printing methods, paper quality, and color registration limitations - avoid modern digital perfection.
- **Composition boundaries:** No frames outside the canvas; no artificial presentation frames, borders, watermarks, or credits.
- **Failure Mode Flags:** Avoid genre drift defaults (anime autopilot, HDR smoothing, etc.).
- **Silent validation:** Apply checklist, regenerate silently if fail.

------

## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **4:5 ratio** - ignore source image dimensions completely.
- Redraw in **Post-Impressionist expressive painting** for **oil on canvas with thick impasto**.
- Identity via emotional brushwork/vivid color intensity/swirling energy.
- **IP Safeguard Declaration:** Create original expressive composition avoiding copyrighted elements appropriate to Post-Impressionist tradition.
- **Face-Treatment Flag:** `painterly-contour`
- **Pose Flag:** `emotional-intensity`
- **Canvas Control Flag:** `adaptive-extend`
- **Style Dominance:** Van Gogh's expressive brushwork and emotional color override naturalistic representation.
- **Mode Selector:** expressive painting

## 2) Canvas Strategy & Spatial Logic

**MANDATORY RATIO SELECTION:** `4:5` (van Gogh's preferred proportions)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** adaptive-extend with swirling atmospheric elements
- **Spatial Allocation:** Subject dominance 65% with energetic environmental context
- **Background Treatment:** Extend characteristic swirling patterns and vibrant color fields to fill 4:5 canvas space
- **Format Justification:** 4:5 ratio serves van Gogh's dynamic compositions and emotional intensity

## 3) Artistic Style & Context

- **Influences:** Japanese woodblock prints, Impressionist color theory, Pointillist technique, peasant life realism, Symbolist spirituality
- **Medium/Production method:** Oil on canvas with distinctive thick impasto application and visible brushwork
- **Thematic purpose:** Emotional expression through color and movement, spiritual connection to nature, psychological self-examination
- **5 hallmark motifs:** Frenzied, rhythmic brushstrokes following form; intense, often non-naturalistic color; swirling, energetic patterns in sky and landscape; thick impasto creating tactile surface; cypress trees and sunflowers as spiritual symbols
- **Period framing:** 1880s-1890s Post-Impressionist innovation period
- **Tone Tag:** Passionate intensity with spiritual yearning
- **Production Era Authenticity:** Traditional oil painting with innovative brushwork and color application techniques

## 4) Technical Execution

- **Line:** Dynamic, rhythmic brushstrokes following form and emotion; swirling, energetic contours
- **Color:** Intense, often complementary contrasts; pure pigment application; emotional rather than naturalistic color choices
- **Texture:** Heavy impasto creating sculptural paint surface; visible brushwork defining form and movement
- **Edge:** Bold, confident edges with paint applied directly from tube; minimal blending
- **Stroke economy:** Deliberate, energetic marks that serve both form and emotional expression
- **Surface depth:** Maintained three-dimensional perspective with expressive spatial distortion
- **Detail hierarchy:** Essential forms emphasized through color and brushwork intensity
- **Material simulation:** Authentic oil painting with characteristic paint thickness and texture
- **Pose Anchors:** Emotional gesture - hand to head in contemplation, direct intense gaze, working postures
- **Scale Hierarchy Anchor:** Naturalistic human proportions with occasional symbolic emphasis
- **Material Authenticity Anchor:** Traditional oil on canvas with distinctive thick paint application
- **Period Consistency Anchor:** 1880s-1890s French painting methods with Post-Impressionist innovations
- **Production Method Anchor:** Hand-mixed pigments applied with palette knife and brush techniques
- **Canvas Adaptation Anchor:** Composition designed for 4:5 format emphasizing van Gogh's characteristic dynamic energy

## 5) Fashion & Attire - Wardrobe Matrix + Prop Selector

**WARDROBE TRACKS:**

- **Adult masculine:** Simple peasant clothing, artist's smocks, working-class jackets and hats reflecting van Gogh's subjects
- **Adult feminine:** Rural peasant dresses, simple shawls, working women's attire
- **Working class:** Emphasis on laborers, farmers, and humble rural inhabitants

**FABRIC BEHAVIOR:** Simplified forms emphasizing the dignity of labor; fabrics follow brushwork rhythm

**ACCESSORY CAPS:** Minimalist 0-2 (working tools, simple hats, basic jewelry)

**COLOR PALETTE:** Van Gogh's characteristic palette - yellows, blues, oranges, with bold complementary contrasts

**WARDROBE VARIATION REQUIRED:** Cycle through earthy working colors, bright sunflower yellows, deep blues, avoiding bourgeois elegance

**PROPS:** Maximum 2 objects - sunflowers, books, pipes, artist materials, rural working tools

**COHERENCE FILTER:** All elements support themes of labor, nature, and spiritual seeking

**YAML PROP POOLS:**

```yaml
van_gogh_objects:
  nature_symbols: [sunflowers, cypress_trees, wheat_sheaves, irises]
  working_life: [pipes, books, artist_brushes, farming_tools]
  spiritual_items: [bible, letters, candles, simple_crosses]
```

## 6) Constraints

**❌ Canvas Negatives:**

- "original aspect ratio", "source dimensions", "smooth academic finish"
- "muted colors", "invisible brushwork", "photographic precision"
- "bourgeois elegance", "decorative refinement", "salon painting style"

**✅ Canvas Positives:**

- "exactly 4:5", "recomposed for van Gogh proportions", "dynamic emotional composition"
- "thick impasto", "visible energetic brushwork", "intense complementary colors"
- "authentic oil painting texture", "sculptural paint surface", "Post-Impressionist innovation"

**Vocabulary warnings:** Avoid "refined," "elegant," "smooth" to prevent academic or salon painting characteristics

## 7) Composition & Background

**RATIO-SPECIFIC COMPOSITION (4:5):**

- **Balanced emphasis:** Subject dominance 65% with significant environmental context creating dynamic energy flow
- **Rhythmic staging:** Energetic compositions with swirling movements and rhythmic brushwork patterns following 4:5 format

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Maintained three-dimensional space enhanced by thick paint creating physical surface relief
- **Grid/symmetry:** Dynamic asymmetry with rhythmic brushwork patterns following form direction
- **Figure:ground:** 65% figure with 35% expressive environmental context both rendered with equal paint thickness
- **Density:** Rich visual information achieved through thick paint application and directional brushwork intensity
- **Lighting logic:** Emotional lighting serving expressive goals - paint thickness creating actual shadows and highlights
- **Detail:negative space ratio:** Dense visual information through paint physicality balanced with rhythmic movement optimized for 4:5 format

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Oil on canvas with 3-5mm thick impasto creating sculptural relief surface with visible tool marks
- **Frame/Band Anchor:** Omit entirely (authentic to painting tradition)
- **Production Context Anchor:** 1880s-1890s French Post-Impressionist studio painting with thick paint application techniques
- **Ratio Enforcement Anchor:** Composition designed specifically for 4:5 format emphasizing van Gogh's dynamic energy and physical paint presence

## 8) Typography & Text Integration

**BINARY:** Omit entirely

**IF ALLOWED:** N/A - Van Gogh's paintings exclude text integration

**HISTORICAL ACCURACY:** Pure painting tradition focused on color and brushwork expression

**PRODUCTION METHOD INTEGRATION:** N/A - emphasis on painted surface qualities