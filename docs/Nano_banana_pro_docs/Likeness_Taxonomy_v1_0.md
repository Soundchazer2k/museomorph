---
title: "Likeness Taxonomy v1.0"
version: "1.0"
status: "Draft"
purpose: "Defines what 'recognition' means across artistic traditions. Tells the model WHAT to preserve vs sacrifice when translating a face into a style."
consumed_by: "Execution Engine v1.2 → Face Construction Compiler"
date: "2025-11-29"
license: "CC-BY-SA-4.0"
---

# Likeness Taxonomy v1.0

## 0. The Core Problem

Image generation models have a default assumption:

> **"Likeness = Photographic Fidelity"**

This assumption is **wrong for 90% of art history.**

When an 18th-century miniaturist painted a portrait, "likeness" meant capturing the subject's *social station* and *characteristic expression*—not their pores. When a ukiyo-e artist depicted an actor, "likeness" meant the *role* and *pose*—the actual face was a standardized mask.

The Execution Engine must override the model's default by explicitly stating:

> "For THIS style, the subject is recognizable when X, Y, Z are preserved. Everything else is sacrificial."

---

## 1. Recognition Anchor Types

The **Recognition Anchor** is the PRIMARY feature that makes a subject "themselves" in a given style.

| Anchor Token | Definition | The subject is "them" because of... |
|--------------|------------|-------------------------------------|
| `anchor-photographic` | Full facial topology | Bone structure, feature proportions, skin texture, coloring—everything |
| `anchor-structural` | Bone structure priority | Skull shape, jaw angle, brow ridge, cheekbone placement—surface details sacrificed |
| `anchor-features` | Key feature relationships | Eye spacing, nose-to-lip ratio, brow weight—but simplified/idealized |
| `anchor-expression` | Characteristic affect | "The smirk," "the heavy-lidded gaze," "the raised eyebrow"—anatomy secondary |
| `anchor-silhouette` | Outline/profile | Head shape, hair mass, chin line—internal features are graphic symbols |
| `anchor-coloring` | Color signature | Hair color, eye color, skin tone—geometry is stylized/generic |
| `anchor-costume` | Dress/role markers | Clothing, accessories, context—face is near-anonymous |
| `anchor-symbolic` | Abstract signifiers | A mark, a pattern, a position—face is a mask or glyph |

### 1.1 Anchor Distribution by Category

| Category | Primary Anchor | Secondary Anchor |
|----------|---------------|------------------|
| **Photography** | `anchor-photographic` | `anchor-expression` |
| **Royal Portraiture (Pre-1850)** | `anchor-features` | `anchor-costume` |
| **Royal Portraiture (Post-1850)** | `anchor-structural` | `anchor-expression` |
| **Academic Realism** | `anchor-structural` | `anchor-features` |
| **Impressionism** | `anchor-expression` | `anchor-coloring` |
| **Expressionism** | `anchor-expression` | `anchor-silhouette` |
| **Anime/Manga** | `anchor-coloring` | `anchor-silhouette` |
| **Ligne Claire Comics** | `anchor-silhouette` | `anchor-features` |
| **American Superhero Comics** | `anchor-structural` | `anchor-costume` |
| **Fantasy Illustration** | `anchor-structural` | `anchor-features` |
| **Pin-Up** | `anchor-features` | `anchor-expression` |
| **Ukiyo-e** | `anchor-symbolic` | `anchor-costume` |
| **Medieval Illumination** | `anchor-symbolic` | `anchor-costume` |
| **Egyptian/Mayan** | `anchor-symbolic` | `anchor-silhouette` |
| **Pixel Art** | `anchor-silhouette` | `anchor-coloring` |
| **Caricature** | `anchor-features` (exaggerated) | `anchor-expression` |
| **Surrealism** | Varies (often `anchor-expression` or `anchor-symbolic`) | -- |
| **Pop Art (Warhol)** | `anchor-photographic` (source) | `anchor-coloring` (treatment) |

---

## 2. Fidelity Boundaries

The **Fidelity Ceiling** is the MAXIMUM photorealism allowed before style breaks.
The **Fidelity Floor** is the MINIMUM detail required before identity is lost.

| Level | Description | Example Styles |
|-------|-------------|----------------|
| **10** | Hyperreal (pores, vellus hair, eye moisture) | Medical illustration, some photography |
| **9** | Photographic (natural skin, accurate proportions) | Avedon, Penn, Newton |
| **8** | Polished Real (idealized but anatomical) | Sargent, Winterhalter, Elvgren |
| **7** | Painterly Real (visible technique, accurate structure) | Rembrandt, Van Dyck, Frazetta |
| **6** | Stylized Anatomical (10-20% deviation, clear style) | Alex Ross, Donato Giancola |
| **5** | Graphic Anatomical (simplified but 3D) | Neal Adams, Jim Lee, Moebius |
| **4** | Flat Stylized (2.5D, discrete tonal zones) | Ligne Claire, Hergé, Studio Ghibli |
| **3** | Graphic Symbol (features as shapes, not volumes) | Beardsley, Mucha, Tezuka |
| **2** | Mask/Pattern (face is surface decoration) | Ukiyo-e, Medieval, Egyptian |
| **1** | Abstract (no recognizable facial structure) | Kandinsky, late Picasso |

### 2.1 Fidelity Ranges by Category

| Category | Ceiling | Floor | Notes |
|----------|---------|-------|-------|
| **Photography** | 10 | 8 | Even "stylized" photography rarely drops below 8 |
| **Royal Portraiture** | 8 | 6 | Idealization expected, but structure must read |
| **Fantasy Illustration** | 8 | 5 | Wide range (Vallejo=8, Whelan=7, Elmore=6) |
| **Pin-Up** | 8 | 6 | Idealized but anatomically grounded |
| **American Comics (Realist)** | 7 | 5 | Alex Ross=7, Neal Adams=6, Jim Lee=5 |
| **American Comics (Stylized)** | 5 | 3 | Kirby=4, Ditko=4, Mignola=3 |
| **European Comics** | 6 | 3 | Bilal=6, Moebius=4, Pratt=3 |
| **Anime/Manga (Realistic)** | 6 | 4 | Urasawa=6, Otomo=5, Miura=5 |
| **Anime/Manga (Stylized)** | 4 | 2 | Ghibli=4, Toriyama=3, Tezuka=2 |
| **Expressionism** | 6 | 3 | Distortion is the point |
| **Surrealism** | 8 | 2 | Dalí=8 (hyperreal), Miró=2 (abstract) |
| **Ukiyo-e** | 3 | 2 | Faces are standardized masks |
| **Medieval Illumination** | 3 | 1 | Hieratic, symbolic |
| **Pixel Art** | 3 | 1 | Resolution-limited |

---

## 3. Sacrifice & Preserve Lists

The **Sacrifice List** contains features the model MUST abandon for style authenticity.
The **Preserve List** contains features the model MUST retain for recognition.

### 3.1 Feature Vocabulary

| Feature Token | What It Means |
|---------------|---------------|
| `feat-pores` | Visible skin pores, texture at micro level |
| `feat-vellus-hair` | Fine facial hair (peach fuzz) |
| `feat-subsurface-scatter` | Light penetrating skin (translucency) |
| `feat-eye-moisture` | Wet, reflective eye surface |
| `feat-corneal-reflection` | Catchlights, window reflections in eyes |
| `feat-iris-detail` | Detailed iris patterns, color variation |
| `feat-sclera-veins` | Red veins in eye whites |
| `feat-lip-texture` | Lip lines, moisture, chapping |
| `feat-skin-tone-variation` | Redness, pallor, uneven pigmentation |
| `feat-blemishes` | Moles, freckles, scars, acne |
| `feat-wrinkles` | Age lines, expression lines |
| `feat-bone-structure` | Skull shape, cheekbones, jaw, brow ridge |
| `feat-eye-socket-depth` | 3D placement of eyes in skull |
| `feat-nose-bridge` | 3D nose structure, bridge height/width |
| `feat-nose-tip-shape` | Bulbous, pointed, upturned, etc. |
| `feat-lip-shape` | Cupid's bow, thickness, proportion |
| `feat-lip-color` | Natural lip pigmentation |
| `feat-jaw-angle` | Jaw shape, chin prominence |
| `feat-brow-weight` | Eyebrow thickness, arch, position |
| `feat-brow-bone` | Brow ridge prominence |
| `feat-eye-shape` | Almond, round, hooded, etc. |
| `feat-eye-spacing` | Distance between eyes |
| `feat-eye-size` | Proportional eye size |
| `feat-eye-color` | Iris color |
| `feat-ear-shape` | Ear structure (usually sacrificed) |
| `feat-hair-color` | Hair pigmentation |
| `feat-hair-texture` | Curl pattern, strand visibility |
| `feat-hair-style` | Overall hair arrangement |
| `feat-skin-tone` | Overall complexion |
| `feat-facial-hair` | Beard, mustache, stubble |
| `feat-expression-lines` | Dynamic wrinkles from expression |
| `feat-expression-muscles` | Facial muscle movement |

### 3.2 Preset Sacrifice/Preserve Profiles

#### Profile: `likeness-photographic`
```json
{
  "anchor": "anchor-photographic",
  "fidelity_ceiling": 10,
  "fidelity_floor": 8,
  "preserve": ["ALL"],
  "sacrifice": []
}
```

#### Profile: `likeness-classical-portrait`
```json
{
  "anchor": "anchor-structural",
  "fidelity_ceiling": 8,
  "fidelity_floor": 6,
  "preserve": [
    "feat-bone-structure",
    "feat-eye-socket-depth",
    "feat-nose-bridge",
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-eye-shape",
    "feat-lip-shape",
    "feat-skin-tone",
    "feat-hair-color"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-blemishes",
    "feat-sclera-veins",
    "feat-wrinkles"
  ]
}
```

#### Profile: `likeness-fantasy-illustration`
```json
{
  "anchor": "anchor-structural",
  "fidelity_ceiling": 8,
  "fidelity_floor": 5,
  "preserve": [
    "feat-bone-structure",
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-eye-shape",
    "feat-hair-color",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-blemishes",
    "feat-sclera-veins",
    "feat-wrinkles",
    "feat-skin-tone-variation"
  ]
}
```

#### Profile: `likeness-pinup-glamour`
```json
{
  "anchor": "anchor-features",
  "fidelity_ceiling": 8,
  "fidelity_floor": 6,
  "preserve": [
    "feat-eye-shape",
    "feat-lip-shape",
    "feat-brow-weight",
    "feat-hair-color",
    "feat-hair-style",
    "feat-skin-tone",
    "feat-expression-muscles"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-sclera-veins",
    "feat-bone-structure"
  ],
  "notes": "Features are idealized toward period beauty standards. Bone structure subordinate to 'type' (girl-next-door, vamp, etc.)"
}
```

#### Profile: `likeness-american-comics-realist`
```json
{
  "anchor": "anchor-structural",
  "fidelity_ceiling": 7,
  "fidelity_floor": 5,
  "preserve": [
    "feat-bone-structure",
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-eye-shape",
    "feat-hair-color",
    "feat-hair-style"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-sclera-veins",
    "feat-skin-tone-variation"
  ]
}
```

#### Profile: `likeness-american-comics-stylized`
```json
{
  "anchor": "anchor-silhouette",
  "fidelity_ceiling": 5,
  "fidelity_floor": 3,
  "preserve": [
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-hair-color",
    "feat-hair-style"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-eye-socket-depth",
    "feat-nose-bridge",
    "feat-skin-tone-variation",
    "feat-iris-detail",
    "feat-lip-texture"
  ]
}
```

#### Profile: `likeness-ligne-claire`
```json
{
  "anchor": "anchor-silhouette",
  "fidelity_ceiling": 4,
  "fidelity_floor": 3,
  "preserve": [
    "feat-hair-color",
    "feat-hair-style",
    "feat-eye-color",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-eye-socket-depth",
    "feat-nose-bridge",
    "feat-bone-structure",
    "feat-skin-tone-variation",
    "feat-iris-detail",
    "feat-lip-texture",
    "feat-corneal-reflection"
  ],
  "notes": "Face becomes a graphic symbol. Recognition is through silhouette + color coding."
}
```

#### Profile: `likeness-anime-standard`
```json
{
  "anchor": "anchor-coloring",
  "fidelity_ceiling": 4,
  "fidelity_floor": 2,
  "preserve": [
    "feat-hair-color",
    "feat-hair-style",
    "feat-eye-color",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-eye-socket-depth",
    "feat-nose-bridge",
    "feat-nose-tip-shape",
    "feat-bone-structure",
    "feat-skin-tone-variation",
    "feat-iris-detail",
    "feat-lip-texture",
    "feat-lip-shape",
    "feat-jaw-angle",
    "feat-brow-bone",
    "feat-ear-shape"
  ],
  "notes": "Face geometry is generic. Character is distinguished by hair and eye COLOR, not facial structure."
}
```

#### Profile: `likeness-anime-realistic`
```json
{
  "anchor": "anchor-features",
  "fidelity_ceiling": 6,
  "fidelity_floor": 4,
  "preserve": [
    "feat-hair-color",
    "feat-hair-style",
    "feat-eye-color",
    "feat-eye-shape",
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-sclera-veins",
    "feat-skin-tone-variation"
  ],
  "notes": "More anatomical than standard anime but still stylized. Urasawa, Otomo territory."
}
```

#### Profile: `likeness-expressionist`
```json
{
  "anchor": "anchor-expression",
  "fidelity_ceiling": 6,
  "fidelity_floor": 3,
  "preserve": [
    "feat-expression-muscles",
    "feat-expression-lines",
    "feat-eye-shape",
    "feat-brow-weight"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-bone-structure",
    "feat-skin-tone",
    "feat-iris-detail",
    "feat-lip-texture"
  ],
  "notes": "Emotional truth over physical accuracy. Distortion is expected and desirable."
}
```

#### Profile: `likeness-ukiyo-e`
```json
{
  "anchor": "anchor-symbolic",
  "fidelity_ceiling": 3,
  "fidelity_floor": 2,
  "preserve": [
    "feat-hair-style",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-vellus-hair",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-wrinkles",
    "feat-eye-socket-depth",
    "feat-nose-bridge",
    "feat-nose-tip-shape",
    "feat-bone-structure",
    "feat-skin-tone-variation",
    "feat-iris-detail",
    "feat-lip-texture",
    "feat-lip-shape",
    "feat-jaw-angle",
    "feat-brow-bone",
    "feat-brow-weight",
    "feat-eye-shape",
    "feat-eye-color",
    "feat-corneal-reflection"
  ],
  "notes": "Face is a MASK. All faces use the same template. Identity is conveyed through costume, hair arrangement, and context."
}
```

#### Profile: `likeness-medieval-hieratic`
```json
{
  "anchor": "anchor-symbolic",
  "fidelity_ceiling": 3,
  "fidelity_floor": 1,
  "preserve": [
    "feat-hair-color",
    "feat-facial-hair"
  ],
  "sacrifice": [
    "ALL except preserve list"
  ],
  "notes": "Face is a symbol of spiritual state, not individual identity. Saints look like saints, kings look like kings."
}
```

#### Profile: `likeness-pixel-sprite`
```json
{
  "anchor": "anchor-silhouette",
  "fidelity_ceiling": 3,
  "fidelity_floor": 1,
  "preserve": [
    "feat-hair-color",
    "feat-hair-style",
    "feat-skin-tone"
  ],
  "sacrifice": [
    "ALL except preserve list"
  ],
  "notes": "Resolution physically prevents detail. Recognition through color palette and silhouette shape only."
}
```

#### Profile: `likeness-caricature`
```json
{
  "anchor": "anchor-features",
  "fidelity_ceiling": 6,
  "fidelity_floor": 3,
  "preserve": [
    "feat-nose-tip-shape",
    "feat-jaw-angle",
    "feat-brow-weight",
    "feat-eye-shape",
    "feat-lip-shape",
    "feat-ear-shape",
    "feat-hair-style"
  ],
  "sacrifice": [
    "feat-pores",
    "feat-subsurface-scatter",
    "feat-blemishes",
    "feat-skin-tone-variation"
  ],
  "modification": "EXAGGERATE preserved features by 150-300%",
  "notes": "Recognition through amplification. The most distinctive features are pushed to extremes."
}
```

---

## 4. Execution Engine Integration

### 4.1 JSON Cartridge Extension

Add this block to the Artist Cartridge:

```json
"likeness_protocol": {
  "profile": "INSERT_PROFILE_NAME_OR_CUSTOM",
  "anchor_primary": "INSERT_ANCHOR_TOKEN",
  "anchor_secondary": "INSERT_ANCHOR_TOKEN_OR_NULL",
  "fidelity_ceiling": 1-10,
  "fidelity_floor": 1-10,
  "preserve": ["feat-token", "feat-token", ...],
  "sacrifice": ["feat-token", "feat-token", ...],
  "modification": "INSERT_IF_CARICATURE_OR_DISTORTION_OR_NULL",
  "notes": "INSERT_STYLE_SPECIFIC_NOTES_OR_NULL"
}
```

### 4.2 Compilation Process

When the Execution Engine encounters a `likeness_protocol` block:

1. **Check for preset profile** → If `profile` matches a preset (e.g., `likeness-anime-standard`), load default values
2. **Override with explicit values** → Any explicitly set fields override profile defaults
3. **Generate Likeness Instruction Block** → Compile to natural language

### 4.3 Compilation Template

```
LIKENESS INSTRUCTION:
The subject's identity in this style is anchored to [anchor_primary description].
Fidelity range: [fidelity_floor] to [fidelity_ceiling] on the abstraction scale.

PRESERVE these features for recognition:
- [feat-1 natural description]
- [feat-2 natural description]
...

SACRIFICE these features for style authenticity:
- [feat-1 natural description]
- [feat-2 natural description]
...

[modification instruction if present]

CRITICAL: If the face exceeds fidelity level [ceiling], the style is BROKEN.
If the face drops below fidelity level [floor], identity is LOST.
```

### 4.4 Compilation Example

**Input:**
```json
"likeness_protocol": {
  "profile": "likeness-anime-standard",
  "anchor_primary": "anchor-coloring",
  "fidelity_ceiling": 4,
  "fidelity_floor": 2,
  "preserve": ["feat-hair-color", "feat-hair-style", "feat-eye-color", "feat-skin-tone"],
  "sacrifice": ["feat-bone-structure", "feat-nose-bridge", "feat-eye-socket-depth", "feat-lip-shape"]
}
```

**Compiled Output:**
```
LIKENESS INSTRUCTION:
The subject's identity in this style is anchored to COLOR SIGNATURE—hair color, eye color, and skin tone are the primary recognition markers, not facial geometry.
Fidelity range: 2 (Mask/Pattern) to 4 (Flat Stylized) on the abstraction scale.

PRESERVE these features for recognition:
- Hair color (exact hue)
- Hair style (overall arrangement and silhouette)
- Eye color (iris hue)
- Skin tone (overall complexion)

SACRIFICE these features for style authenticity:
- Bone structure (skull shape, cheekbone placement—use generic anime geometry)
- Nose bridge (reduce to minimal indication or dot)
- Eye socket depth (eyes float on face surface, not recessed in skull)
- Lip shape (simplify to line or small curve)

CRITICAL: If the face exceeds fidelity level 4 (showing anatomical structure), the anime style is BROKEN.
If the face drops below fidelity level 2 (losing color distinction), identity is LOST.
```

---

## 5. Quick Reference: Profile Selection by Style Category

| If Style Category = | Use Profile |
|---------------------|-------------|
| Photography | `likeness-photographic` |
| Royal Portraiture (Academic) | `likeness-classical-portrait` |
| Fantasy Illustration | `likeness-fantasy-illustration` |
| Pin-Up / Glamour | `likeness-pinup-glamour` |
| American Comics (Alex Ross, Neal Adams) | `likeness-american-comics-realist` |
| American Comics (Kirby, Mignola, Ditko) | `likeness-american-comics-stylized` |
| European Comics (Moebius, Hergé) | `likeness-ligne-claire` |
| Anime/Manga (Ghibli, Toriyama, CLAMP) | `likeness-anime-standard` |
| Anime/Manga (Urasawa, Otomo, Miura) | `likeness-anime-realistic` |
| Expressionism | `likeness-expressionist` |
| Ukiyo-e | `likeness-ukiyo-e` |
| Medieval Illumination | `likeness-medieval-hieratic` |
| Pixel Art | `likeness-pixel-sprite` |
| Caricature | `likeness-caricature` |

---

## 6. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-29 | Initial draft. Recognition anchors, fidelity scale, sacrifice/preserve vocabulary, 14 preset profiles, Execution Engine integration. |
