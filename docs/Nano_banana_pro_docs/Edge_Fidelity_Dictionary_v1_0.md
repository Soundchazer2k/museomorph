---
title: "Edge Fidelity Dictionary v1.0"
version: "1.0"
status: "Draft"
purpose: "Defines HOW boundaries are physically constructed. Tells the model the material physics of lines, edges, and transitions for each medium/style."
consumed_by: "Execution Engine v1.2 → Texture/Physics Compiler"
date: "2025-11-29"
license: "CC-BY-SA-4.0"
---

# Edge Fidelity Dictionary v1.0

## 0. The Core Problem

Image generation models have a default assumption:

> **"Edge = Clean Anti-Aliased Vector"**

This assumption is **wrong for 90% of art history.**

A Roman mosaic has no "edges"—it has grout gaps between stone chunks. A Beardsley illustration has ink that bleeds into paper fibers. A woodcut has gouged channels. An oil painting has optical edges where colors meet without any line at all.

The Execution Engine must override the model's default by explicitly stating:

> "For THIS medium, boundaries are created by [PHYSICAL PROCESS]. The edge has [THESE PROPERTIES]."

---

## 1. Edge Construction Types

The **Edge Construction** defines the PHYSICAL PROCESS that creates boundaries in the artwork.

| Edge Token | Physical Process | Visual Result |
|------------|------------------|---------------|
| `edge-vector-mathematical` | Bezier curves, infinite resolution | Razor sharp, no texture, perfect smoothness |
| `edge-vector-weighted` | Vector with programmed thickness variation | Sharp but with thick/thin calligraphic quality |
| `edge-ink-dip-pen` | Metal nib dragging ink across paper | Variable width from pressure, ink pooling at stops, slight bleed into paper grain |
| `edge-ink-brush` | Loaded brush dragging across surface | Extreme width variation, dry-brush breakup at speed, wet pooling at hesitation |
| `edge-ink-technical` | Rapidograph/technical pen | Uniform width, mechanical precision, minimal bleed |
| `edge-ink-marker` | Felt-tip marker on paper | Soft edge from ink spread, visible stroke overlap, bleeds at intersections |
| `edge-pencil-graphite` | Graphite dragging across tooth | Soft, grainy, builds up in layers, follows paper texture |
| `edge-pencil-colored` | Wax/oil pigment on tooth | Slightly softer than graphite, waxy buildup, can burnish to hard edge |
| `edge-charcoal-powder` | Powder adhering to tooth | Very soft, smudgeable, no true "line"—masses of tone |
| `edge-chalk-pastel` | Calcium/pigment stick on tooth | Soft, powdery, bleeds into adjacent colors |
| `edge-paint-wet-on-wet` | Pigment meeting pigment while wet | Soft bleed, colors merge at boundary, no hard line |
| `edge-paint-wet-on-dry` | Pigment applied to dried layer | Hard edge where new paint stops, visible brushstroke termination |
| `edge-paint-optical` | Adjacent colors create perceived edge | NO physical line—edge exists only in viewer's perception |
| `edge-paint-impasto-ridge` | Thick paint creating physical ridge | 3D edge casting actual shadow, visible paint texture |
| `edge-fresco-absorbed` | Pigment soaked into wet plite | Soft, matte, slightly fuzzy, no surface sheen |
| `edge-watercolor-bloom` | Pigment flowing in water on paper | Organic, unpredictable, hard edge where water stopped |
| `edge-watercolor-controlled` | Careful wet-on-dry application | Cleaner than bloom but still shows paper texture |
| `edge-gouache-matte` | Opaque watercolor, chalky finish | Flatter than watercolor, more defined edge, matte surface |
| `edge-airbrush-gradient` | Sprayed pigment | Soft gradient transitions, can be masked for hard edge |
| `edge-silkscreen-layer` | Ink pushed through mesh | Flat color, hard edge, possible registration gaps between colors |
| `edge-lithograph-grease` | Grease crayon on stone, printed | Textured from stone grain, builds up like pencil |
| `edge-engraving-incised` | Burin cutting into metal plate | Hair-thin, mechanical precision, parallel hatching for tone |
| `edge-etching-acid` | Acid biting into metal through resist | Slightly softer than engraving, more organic variation |
| `edge-woodcut-gouged` | Gouge removing wood, leaving relief | Chunky, shows wood grain, visible tool marks |
| `edge-linocut-carved` | Blade cutting linoleum | Smoother than woodcut, cleaner curves, still shows cut marks |
| `edge-scratchboard-revealed` | Sharp tool revealing white under black | Bright white lines on black, scratchy texture |
| `edge-tessellated-gap` | Boundary defined by absence (grout) | No drawn line—objects formed by tile clusters with gaps between |
| `edge-mosaic-irregular` | Hand-cut tesserae with variable gaps | Jagged, organic, gaps vary in width |
| `edge-mosaic-regular` | Machine-cut or careful tesserae | More uniform gaps, still not a drawn line |
| `edge-pixel-aliased` | Hard pixel boundaries, no smoothing | Stair-stepped diagonal lines, visible squares |
| `edge-pixel-dithered` | Checkerboard patterns simulating gradients | Textured transitions, dot patterns |
| `edge-cel-painted` | Ink outline filled with flat paint | Hard black outline, flat color interior, no gradient in fill |
| `edge-digital-blur` | Gaussian or lens blur | Soft gradient from sharp to soft, simulated depth of field |
| `edge-photographic-focus` | Optical focus plane | Sharp at focus, progressive softening with distance |
| `edge-photographic-motion` | Subject/camera movement during exposure | Directional smear, sharp elements + blurred elements |
| `edge-halftone-dot` | Dot pattern creating tonal edge | Edge made of dot clusters, visible pattern at magnification |
| `edge-risograph-misalign` | Multi-pass print with registration error | Color layers slightly offset, creating accidental outlines |
| `edge-stained-glass-lead` | Metal came holding glass pieces | Thick black lines (lead), color only inside shapes |
| `edge-cloisonne-wire` | Metal wire containing enamel | Similar to stained glass—wire defines all boundaries |
| `edge-embroidery-stitch` | Thread creating boundary | Textured, directional, shows individual stitch marks |
| `edge-woven-thread` | Warp/weft intersection creating pattern | Stepped edges from thread grid, no curves |

---

## 2. Edge Behavior Properties

Beyond construction type, edges have **behavioral properties** that affect rendering.

### 2.1 Edge Hardness Scale

| Level | Term | Description |
|-------|------|-------------|
| **10** | Mathematically Hard | Infinite sharpness, vector precision, no anti-aliasing |
| **9** | Optically Hard | Sharp to the eye, may have sub-pixel smoothing |
| **8** | Ink Hard | Sharp but shows material interaction (paper grain, ink spread) |
| **7** | Paint Hard | Defined edge but brushstroke visible at termination |
| **6** | Controlled Soft | Intentional gradient over short distance |
| **5** | Natural Soft | Material-determined softness (charcoal, pastel) |
| **4** | Wet Soft | Watercolor bloom, wet-on-wet bleed |
| **3** | Optical Soft | Edge exists through color contrast, no physical boundary |
| **2** | Atmospheric | Edge dissolves into environment (sfumato, fog) |
| **1** | Lost Edge | Boundary intentionally invisible, form merges with ground |

### 2.2 Edge Consistency

| Token | Behavior |
|-------|----------|
| `edge-uniform` | Same hardness/width throughout composition |
| `edge-hierarchical` | Important elements have harder edges, background softer |
| `edge-calligraphic` | Width varies with stroke direction and pressure |
| `edge-broken` | Intentional gaps in outline (lost-and-found edges) |
| `edge-continuous` | Unbroken contour around forms |
| `edge-implied` | Edge suggested but not drawn, viewer completes |

### 2.3 Edge Texture

| Token | Visual Quality |
|-------|---------------|
| `edge-texture-smooth` | No visible grain or tooth |
| `edge-texture-paper-grain` | Shows paper/canvas texture at boundary |
| `edge-texture-tool-mark` | Shows brush/pen/gouge marks |
| `edge-texture-material` | Shows the actual material (wood grain, stone, fiber) |
| `edge-texture-digital-noise` | Artificial grain or noise pattern |

---

## 3. Medium-Specific Edge Profiles

### 3.1 Pen & Ink

#### Beardsley / Art Nouveau Ink
```json
{
  "edge_construction": "edge-ink-dip-pen",
  "edge_hardness": 8,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-paper-grain",
  "prompt_injection": "Edges are created by dip pen dragging India ink across paper. Line width varies from hairline to 3mm based on pressure. Ink pools slightly at stroke endpoints and direction changes. At 400% zoom, edges show slight feathering into paper fibers. Lines are BLACK, not grey—no anti-aliasing simulation. Where lines meet, ink builds up darker."
}
```

#### Technical Illustration Ink
```json
{
  "edge_construction": "edge-ink-technical",
  "edge_hardness": 9,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are mechanical, uniform width throughout. No variation in line weight except deliberate hierarchical choices (thick for contour, thin for detail). Precision ruling, no hand wobble. Clean intersections."
}
```

#### Brush Ink (Sumi-e / Pratt)
```json
{
  "edge_construction": "edge-ink-brush",
  "edge_hardness": 7,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are brush strokes with extreme width variation. Loaded brush creates thick wet strokes; exhausted brush creates dry, broken marks showing individual bristle tracks. Stroke begins with pointed entry, swells with pressure, tapers or lifts abruptly. Visible brush direction throughout."
}
```

### 3.2 Woodcut / Linocut / Relief Print

#### Traditional Woodcut
```json
{
  "edge_construction": "edge-woodcut-gouged",
  "edge_hardness": 7,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Edges are the result of gouge removing wood to leave raised printing surface. Lines are NOT drawn—they are the wood left behind. Visible wood grain runs through black areas. Gouge marks show curved tool paths. White lines have chunky, slightly irregular character. No perfectly smooth curves—the medium resists it."
}
```

#### Japanese Woodblock (Ukiyo-e)
```json
{
  "edge_construction": "edge-woodcut-gouged",
  "edge_hardness": 8,
  "edge_consistency": "edge-continuous",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are carved by master craftsmen with extreme precision. Black key-block outlines are remarkably smooth for woodcut but still show subtle tool marks at high magnification. Color blocks are separate carved blocks with possible slight misregistration. Visible woodgrain in large color areas. Bokashi (gradient) created by wiping ink, not blending."
}
```

#### Linocut
```json
{
  "edge_construction": "edge-linocut-carved",
  "edge_hardness": 8,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are carved from linoleum—smoother than wood, allowing tighter curves. Visible gouge paths but cleaner than woodcut. No wood grain. Characteristic 'scooped' marks from V and U gouges. Can achieve finer detail than wood but still has relief print character."
}
```

### 3.3 Engraving / Etching / Intaglio

#### Copper Engraving (Doré style)
```json
{
  "edge_construction": "edge-engraving-incised",
  "edge_hardness": 9,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are hair-thin lines cut directly into copper by burin. Mechanical precision. Tonal values created ONLY by parallel line density (hatching) and cross-hatching. No solid blacks—darkest areas are densest line clusters. Lines have slight swell at entry/exit from controlled hand pressure. White is the paper showing between lines."
}
```

#### Etching
```json
{
  "edge_construction": "edge-etching-acid",
  "edge_hardness": 8,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are created by acid biting into metal where protective ground was scratched away. More organic than engraving—lines can vary width based on bite time. Allows looser, more gestural marks than burin. Still fine, still linear, but with slight organic irregularity."
}
```

### 3.4 Lithograph

#### Crayon Lithograph
```json
{
  "edge_construction": "edge-lithograph-grease",
  "edge_hardness": 6,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Edges are greasy crayon marks on limestone, then printed. Shows stone grain texture—tiny dots and gaps where stone tooth rejected grease. Builds up tone like pencil. Soft edges from crayon nature. Can have both drawn marks and flat tusche (liquid grease) areas."
}
```

### 3.5 Oil Painting

#### Academic/Classical Oil
```json
{
  "edge_construction": "edge-paint-wet-on-dry",
  "edge_hardness": 6,
  "edge_consistency": "edge-hierarchical",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are created by paint meeting paint. Important contours have harder edges (paint applied to dry layer). Less important areas have lost edges (wet-into-wet blending). Visible brushstroke direction at edges. No outlines—edge is where two color zones meet. Background edges softer than foreground."
}
```

#### Impressionist Oil
```json
{
  "edge_construction": "edge-paint-optical",
  "edge_hardness": 4,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are OPTICAL—they exist because adjacent colors create contrast, not because a line was drawn. Brushstrokes visible throughout. Forms emerge from color relationships, not contours. Edges dissolve at boundaries—forms breathe into each other. No hard outlines anywhere."
}
```

#### Impasto / Expressionist Oil
```json
{
  "edge_construction": "edge-paint-impasto-ridge",
  "edge_hardness": 7,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-tool-mark",
  "prompt_injection": "Edges are physical ridges of thick paint. The paint itself casts shadows. Visible palette knife or brush loading. Edges can be hard where thick paint stops abruptly, or dragged where paint was pulled. 3D texture is part of the edge definition."
}
```

### 3.6 Watercolor

#### Wet-on-Wet Watercolor
```json
{
  "edge_construction": "edge-watercolor-bloom",
  "edge_hardness": 3,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-paper-grain",
  "prompt_injection": "Edges are created by pigment flowing in water. Where water is wet, pigment migrates—edges are soft, organic, unpredictable blooms. Hard edges appear ONLY where wash stopped and dried. Characteristic 'cauliflower' backruns where new wet met drying. Paper texture visible in washes. Never fully opaque."
}
```

#### Controlled Watercolor (Illustration)
```json
{
  "edge_construction": "edge-watercolor-controlled",
  "edge_hardness": 5,
  "edge_consistency": "edge-hierarchical",
  "edge_texture": "edge-texture-paper-grain",
  "prompt_injection": "Edges are more controlled than pure wet-on-wet—working smaller areas, letting each dry before adjacent. Still shows paper grain. Still has characteristic watercolor luminosity (white paper glowing through). Soft where desired, harder where wash was stopped deliberately. May have pen outline underneath."
}
```

### 3.7 Fresco

#### Buon Fresco
```json
{
  "edge_construction": "edge-fresco-absorbed",
  "edge_hardness": 5,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Edges are pigment absorbed INTO wet plaster—paint is part of the wall, not on top of it. Matte finish always. Slightly soft edges because pigment wicks into wet lime. No glazing possible over dried work. Visible giornata (day-work) boundaries where fresh plaster meets old. Limited palette (lime destroys some pigments). Possible cracking along structural lines."
}
```

### 3.8 Mosaic

#### Roman Mosaic
```json
{
  "edge_construction": "edge-tessellated-gap",
  "edge_hardness": 7,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "There ARE no edges—only grout gaps between stone tesserae. Forms are built from clusters of small stone cubes. 'Lines' are rows of darker stones. Smooth curves are impossible—all boundaries are stepped/jagged at tile resolution. Each tessera has slightly different angle, catching light differently. Grout color affects overall tone. Image resolves from distance, fragments up close."
}
```

#### Byzantine Mosaic
```json
{
  "edge_construction": "edge-mosaic-irregular",
  "edge_hardness": 6,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Gold-ground mosaic with glass tesserae (smalti). Tesserae deliberately set at angles to catch light and shimmer. Faces more refined than Roman—smaller pieces for flesh. Background is gold glass. Visible grout. Hieratic, frontal figures. No perspective—flat gold space. Lines are rows of colored glass cubes, not drawn marks."
}
```

### 3.9 Cel Animation

#### Traditional Cel
```json
{
  "edge_construction": "edge-cel-painted",
  "edge_hardness": 9,
  "edge_consistency": "edge-continuous",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are black ink outlines on acetate, filled with flat gouache paint from behind. Outline is HARD and CONTINUOUS—unbroken black contour around all forms. Interior is FLAT color—no gradients inside shapes (unless airbrushed separately). Limited color palette from physical paint mixing. Possible cel dust specks."
}
```

#### Digital Anime
```json
{
  "edge_construction": "edge-vector-weighted",
  "edge_hardness": 9,
  "edge_consistency": "edge-hierarchical",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are vector lines with programmed thick-thin variation. Outer contours thicker than interior detail lines. Hair strands taper. Eye outlines weighted. Fills are flat digital color or simple gradients. Clean, no texture. Possible hard-edged cel shadow shapes (2-3 tones per material)."
}
```

### 3.10 Pixel Art

#### 8-bit / Hard Pixel
```json
{
  "edge_construction": "edge-pixel-aliased",
  "edge_hardness": 10,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are hard pixel boundaries with NO anti-aliasing. Diagonal lines are stair-stepped. Visible individual pixels. Limited color palette (NES: 54 colors, 4 per sprite). No sub-pixel rendering. Every pixel is a deliberate choice. Curves are approximated by pixel placement."
}
```

#### 16-bit / Dithered
```json
{
  "edge_construction": "edge-pixel-dithered",
  "edge_hardness": 8,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-digital-noise",
  "prompt_injection": "Edges may use dithering patterns to simulate gradients or anti-aliasing. Checkerboard or ordered dither for tone transitions. More colors than 8-bit but still limited. Pixel clusters create texture. Some anti-aliased edges using intermediate color pixels."
}
```

### 3.11 Photography

#### Sharp Focus Photography
```json
{
  "edge_construction": "edge-photographic-focus",
  "edge_hardness": 9,
  "edge_consistency": "edge-hierarchical",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are optically sharp within depth of field, progressively softer outside. Sharpness determined by focus plane, aperture, and distance. Foreground and background blur (bokeh) while subject is razor sharp. Lens quality affects edge micro-contrast."
}
```

#### Vintage/Soft Focus Photography
```json
{
  "edge_construction": "edge-photographic-focus",
  "edge_hardness": 5,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Edges are soft from period optics or intentional diffusion. Halation (light bleeding around bright edges). Soft overall focus from simple lenses. Grain softens edges further. No modern micro-contrast sharpness. Pictorialist haze over everything."
}
```

#### Motion Blur Photography
```json
{
  "edge_construction": "edge-photographic-motion",
  "edge_hardness": 4,
  "edge_consistency": "edge-broken",
  "edge_texture": "edge-texture-smooth",
  "prompt_injection": "Edges are smeared in direction of movement. Stationary elements may be sharp while moving elements are streaked. Speed indicated by blur length. Can be subject motion, camera motion, or both. Blur follows motion vector."
}
```

### 3.12 Print / Halftone

#### Newspaper Halftone
```json
{
  "edge_construction": "edge-halftone-dot",
  "edge_hardness": 6,
  "edge_consistency": "edge-uniform",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Edges are clusters of dots (halftone screen). At reading distance, appears continuous tone; close up, visible dot pattern. Larger dots = darker areas. Dot gain from cheap paper—edges slightly fuzzy from ink spread. Limited tonal range. Possible moiré patterns."
}
```

#### Comic Book CMYK
```json
{
  "edge_construction": "edge-halftone-dot",
  "edge_hardness": 7,
  "edge_consistency": "edge-hierarchical",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "Black line art is solid (not halftoned). Color is halftone dots—Cyan, Magenta, Yellow, blacK printed at different screen angles to avoid moiré. Ben-Day dots visible in solid color areas (not true halftone, but patterned screens). Registration may be slightly off between colors."
}
```

### 3.13 Stained Glass

#### Medieval Stained Glass
```json
{
  "edge_construction": "edge-stained-glass-lead",
  "edge_hardness": 8,
  "edge_consistency": "edge-continuous",
  "edge_texture": "edge-texture-material",
  "prompt_injection": "ALL edges are thick black lead lines (came) holding glass pieces. No edge can exist without lead. Minimum shape size determined by glass cutting ability. Lines are structural, not aesthetic—but design works within this constraint. Glass pieces are flat color with possible painted details (grisaille) for faces. Light comes THROUGH, not reflected."
}
```

---

## 4. Edge Profile Quick Reference

### 4.1 By Medium

| Medium | Primary Edge Type | Hardness | Consistency |
|--------|-------------------|----------|-------------|
| Vector Digital | `edge-vector-mathematical` | 10 | `edge-uniform` |
| Cel Animation | `edge-cel-painted` | 9 | `edge-continuous` |
| Technical Pen | `edge-ink-technical` | 9 | `edge-uniform` |
| Engraving | `edge-engraving-incised` | 9 | `edge-uniform` |
| Dip Pen Ink | `edge-ink-dip-pen` | 8 | `edge-calligraphic` |
| Linocut | `edge-linocut-carved` | 8 | `edge-calligraphic` |
| Woodcut | `edge-woodcut-gouged` | 7 | `edge-broken` |
| Brush Ink | `edge-ink-brush` | 7 | `edge-calligraphic` |
| Mosaic | `edge-tessellated-gap` | 7 | `edge-broken` |
| Oil (Academic) | `edge-paint-wet-on-dry` | 6 | `edge-hierarchical` |
| Lithograph | `edge-lithograph-grease` | 6 | `edge-calligraphic` |
| Gouache | `edge-gouache-matte` | 6 | `edge-hierarchical` |
| Fresco | `edge-fresco-absorbed` | 5 | `edge-uniform` |
| Watercolor (Controlled) | `edge-watercolor-controlled` | 5 | `edge-hierarchical` |
| Charcoal | `edge-charcoal-powder` | 4 | `edge-broken` |
| Oil (Impressionist) | `edge-paint-optical` | 4 | `edge-broken` |
| Pastel | `edge-chalk-pastel` | 4 | `edge-broken` |
| Watercolor (Wet) | `edge-watercolor-bloom` | 3 | `edge-broken` |
| Sfumato | `edge-paint-optical` | 2 | `edge-hierarchical` |

### 4.2 By Style Category (from your 214-style corpus)

| Category | Typical Edge Profile |
|----------|---------------------|
| **Photography** | `edge-photographic-focus` (hardness varies by era/intent) |
| **Royal Portraiture** | `edge-paint-wet-on-dry` / `edge-paint-optical` |
| **Fantasy Illustration** | `edge-paint-wet-on-dry` or `edge-ink-brush` + `edge-paint-*` |
| **Pin-Up** | `edge-airbrush-gradient` + `edge-paint-wet-on-dry` |
| **American Comics (Modern)** | `edge-ink-brush` + `edge-halftone-dot` |
| **American Comics (Classic)** | `edge-ink-dip-pen` + `edge-halftone-dot` |
| **European Comics (Ligne Claire)** | `edge-ink-technical` or `edge-ink-dip-pen` (uniform weight) |
| **European Comics (Painterly)** | `edge-ink-brush` + `edge-paint-*` or `edge-watercolor-*` |
| **Anime/Manga** | `edge-vector-weighted` or `edge-ink-dip-pen` |
| **Ukiyo-e** | `edge-woodcut-gouged` (refined Japanese variant) |
| **Medieval Illumination** | `edge-ink-dip-pen` + `edge-paint-wet-on-dry` (egg tempera) |
| **Expressionism** | `edge-paint-impasto-ridge` or `edge-ink-brush` |
| **Surrealism** | Varies wildly (Dalí = `edge-paint-wet-on-dry`, Ernst = `edge-*` collage) |
| **Pixel Art** | `edge-pixel-aliased` or `edge-pixel-dithered` |
| **Propaganda Poster** | `edge-silkscreen-layer` or `edge-lithograph-grease` |
| **Psychedelic Poster** | `edge-silkscreen-layer` + `edge-ink-dip-pen` |
| **Pop Art** | `edge-silkscreen-layer` + `edge-halftone-dot` |
| **Stained Glass** | `edge-stained-glass-lead` |
| **Record Covers** | Varies by designer/era |
| **Movie Posters** | Varies (gouache, airbrush, photo composite) |

---

## 5. Execution Engine Integration

### 5.1 JSON Cartridge Extension

Add this block to the Artist Cartridge:

```json
"edge_protocol": {
  "primary_construction": "INSERT_EDGE_TOKEN",
  "secondary_construction": "INSERT_EDGE_TOKEN_OR_NULL",
  "edge_hardness": 1-10,
  "edge_consistency": "INSERT_CONSISTENCY_TOKEN",
  "edge_texture": "INSERT_TEXTURE_TOKEN",
  "prompt_injection_override": "INSERT_CUSTOM_TEXT_OR_NULL"
}
```

### 5.2 Compilation Process

When the Execution Engine encounters an `edge_protocol` block:

1. **Look up `primary_construction`** → Retrieve base prompt injection from Section 3
2. **Check for `secondary_construction`** → If present, append secondary edge behavior
3. **Apply hardness modifier** → Adjust language for hardness level
4. **Apply consistency modifier** → Add consistency behavior
5. **Apply texture modifier** → Add texture description
6. **Check for override** → If `prompt_injection_override` is set, use it instead of generated text
7. **Output Edge Instruction Block**

### 5.3 Compilation Template

```
EDGE PHYSICS INSTRUCTION:
Boundaries in this artwork are created by [primary_construction description].
[secondary_construction description if present]

Edge Hardness: [hardness]/10 — [hardness description]
Edge Consistency: [consistency description]
Edge Texture: [texture description]

[Full prompt injection from lookup or override]

CRITICAL: If edges appear as clean vector curves when they should show [medium] characteristics, the medium simulation has FAILED.
```

### 5.4 Compilation Example

**Input:**
```json
"edge_protocol": {
  "primary_construction": "edge-ink-dip-pen",
  "secondary_construction": null,
  "edge_hardness": 8,
  "edge_consistency": "edge-calligraphic",
  "edge_texture": "edge-texture-paper-grain"
}
```

**Compiled Output:**
```
EDGE PHYSICS INSTRUCTION:
Boundaries in this artwork are created by dip pen dragging India ink across paper.

Edge Hardness: 8/10 — Ink hard: sharp but shows material interaction with paper grain and slight ink spread.
Edge Consistency: Calligraphic—line width varies with stroke direction and pressure, thick on downstrokes, thin on cross-strokes.
Edge Texture: Paper grain visible at boundaries—edges show subtle feathering into paper fibers at high magnification.

Edges are created by dip pen dragging India ink across paper. Line width varies from hairline to 3mm based on pressure. Ink pools slightly at stroke endpoints and direction changes. At 400% zoom, edges show slight feathering into paper fibers. Lines are BLACK, not grey—no anti-aliasing simulation. Where lines meet, ink builds up darker.

CRITICAL: If edges appear as clean vector curves when they should show dip pen ink characteristics, the medium simulation has FAILED.
```

---

## 6. Special Cases & Hybrid Edges

### 6.1 Multi-Layer Media

Some styles combine multiple edge types in layers:

| Style | Layer 1 (Under) | Layer 2 (Over) |
|-------|-----------------|----------------|
| **Rackham / Golden Age Illustration** | `edge-ink-dip-pen` (outline) | `edge-watercolor-controlled` (color) |
| **American Comics (Colored)** | `edge-ink-brush` (line art) | `edge-halftone-dot` (color) |
| **Mucha / Art Nouveau** | `edge-ink-dip-pen` (contour) | `edge-lithograph-grease` (color/tone) |
| **Frazetta** | `edge-ink-brush` (drawing) | `edge-paint-wet-on-dry` (oil paint) |
| **Pin-Up (Elvgren)** | `edge-pencil-graphite` (construction) | `edge-paint-wet-on-dry` + `edge-airbrush-gradient` (finish) |

For these, specify both in the cartridge:
```json
"edge_protocol": {
  "primary_construction": "edge-ink-dip-pen",
  "secondary_construction": "edge-watercolor-controlled",
  "hybrid_note": "Black ink outline contains watercolor washes. Outline is hard (8), washes are soft (5). Outline does NOT have watercolor softness applied to it."
}
```

### 6.2 Edge Transition Zones

Some media have different edge behaviors in different zones:

| Style | Foreground Edges | Background Edges |
|-------|------------------|------------------|
| **Academic Oil** | `edge-paint-wet-on-dry` (hard) | `edge-paint-optical` (soft/lost) |
| **Portrait Photography** | `edge-photographic-focus` (sharp) | `edge-digital-blur` (bokeh) |
| **Atmospheric Landscape** | `edge-paint-wet-on-dry` (defined) | `edge-paint-optical` → lost edge |

Specify in cartridge:
```json
"edge_protocol": {
  "primary_construction": "edge-paint-wet-on-dry",
  "secondary_construction": "edge-paint-optical",
  "zone_behavior": "hierarchical",
  "zone_note": "Foreground/subject edges are defined (hardness 7). Background edges progressively soften to lost edges (hardness 2-3) as spatial depth increases."
}
```

---

## 7. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-29 | Initial draft. 40+ edge construction types, hardness scale, consistency tokens, texture tokens, medium-specific profiles, Execution Engine integration, hybrid edge handling. |
