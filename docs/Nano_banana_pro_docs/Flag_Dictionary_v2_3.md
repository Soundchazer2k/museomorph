---

title: "Universal Flag Dictionary v2.3 — Nano-Native Reasoning Extension"
version: "2.3"
status: "Reasoning Logic Add-on"
purpose: "Defines 'Cognitive Flags' to control Chain-of-Thought processing in Gemini 3 / Nano Banana Pro."
notes: >
  These flags are not just visual descriptors; they are INSTRUCTIONAL TRIGGERS.
  They tell the model's reasoning engine how to prioritize conflicting data
  (e.g., whether to prioritize facial likeness or material consistency).
  Designed specifically to fix 'Photo-Face' and 'Filter-Drift' errors.
date: "2025-11-29"
license: "CC-BY-SA-4.0"
---

# MuseoMorph Universal Flag Dictionary v2.3 — Nano-Native Reasoning Extension

## 🧩 Overview

This edition extends **Flag Dictionary v2.0** with **real-world examples** from completed frameworks. Each flag category now includes documented instances where flags were identified during Phase 2 forensic analysis of past artists. This enables quick pattern recognition during new framework development.

---

## 1. Lighting Flags

```yaml
lighting_flags:
  - chiaroscuro-dramatic
  - tenebrist-void
  - diffuse-ambient
  - rimlight-contour
  - subsurface-glow
  - golden-hour-warm
  - polarized-daylight
  - neon-synthetic
  - reflective-specular-control
  - candlelit-lowkey
  - overcast-neutral
  - spotlit-focus
```

### Historical Examples

| Flag | Artists Identified | Key Characteristic | Framework Specs |
|------|-------------------|-------------------|-----------------|
| **chiaroscuro-dramatic** | Caravaggio, Michelangelo | 70-90% canvas in shadow; 7-9 tonal stops | Contrast ratio 1.8-2.2:1 |
| **tenebrist-void** | Caravaggio (signature) | Pure darkness (#000000) as compositional element; not atmospheric | Used in Religious Devotional mode exclusively |
| **golden-hour-warm** | Raphael, Botticelli | Warm flesh tones (H:26-36°); peachy skin rendering | Flesh tone #D4B5A0 at 72% lightness |
| **polarized-daylight** | van Dyck, Rubens | Clear, bright illumination; no shadows in core highlight areas | 60-70% key light intensity |
| **diffuse-ambient** | Fernand Khnopff, Klimt | Soft, non-directional light; minimal shadow definition | Contrast ratio 1.2-1.3:1 |
| **rimlight-contour** | Studio Pierrot (Action mode) | Edge highlighting on moving figures; speed emphasis | Used for kinetic energy in combat sequences |
| **candlelit-lowkey** | Caravaggio (Religious mode) | Intimate, spiritual lighting; faces barely visible | 30-40% intensity; supernatural atmosphere |

---

## 2. Texture & Surface Flags

```yaml
texture_surface_flags:
  - impasto-heavy
  - matte-chalk
  - gloss-varnish
  - oxide-layered
  - canvas-weave-rough
  - vellum-smooth
  - metallic-lustre
  - aged-patina
  - scratched-emulsion
  - wax-layered
  - enamel-flat
  - drybrush-fibered
```

### Historical Examples

| Flag | Artists Identified | Application | Technical Spec |
|------|-------------------|-------------|-----------------|
| **impasto-heavy** | Rubens (signature), Caravaggio | Paint applied thickly; visible brushstrokes | 5-8mm thickness; texture visible at distance |
| **matte-chalk** | Michelangelo (Drawing mode), Raphael | Chalk drawing quality; minimal sheen | Red chalk #CD853F at 65% lightness |
| **gloss-varnish** | Klimt (allegorical mode), Böcklin | Protective layer over oil; slight reflectivity | Luminance compression via varnish layer |
| **canvas-weave-rough** | Caravaggio, Rubens | Raw canvas texture visible; unprepared support | Underpainting deliberately exposed |
| **vellum-smooth** | Raphael (Portrait mode), van Dyck | Seamless surface; no texture relief | Sfumato edge treatment; soft transitions |
| **oxide-layered** | Raphael, Leonardo studies | Layered glazes creating depth; oxidation visible | 10-15 thin layers; transparent buildup |
| **aged-patina** | Böcklin, Caravaggio (atmospheric) | Age-appropriate surface degradation | Yellowing varnish; pigment shift over time |
| **metallic-lustre** | Klimt (gold leaf mode), van Dyck (armor) | Reflective metallic surfaces | Specular highlight intensity 90-100% |

---

## 3. Composition Logic Flags

```yaml
composition_logic_flags:
  - rule-of-thirds
  - golden-spiral
  - symmetrical-sacred
  - hierarchical-scaling
  - crowded-ritual-space
  - empty-negative-dominance
  - diagonal-energy
  - vortex-composition
  - triptych-panel-alignment
  - off-center-dynamic
  - spiral-torsion
```

### Historical Examples

| Flag | Artists Identified | Framing | Composition Ratio |
|------|-------------------|---------|------------------|
| **rule-of-thirds** | Raphael, van Dyck (Portrait mode) | Subject placed on intersection lines | Primary subject 35-50% of canvas; two secondary elements 25% each |
| **golden-spiral** | Botticelli (Mythological mode), Khnopff | Eyes/face positioned on spiral arc | Fibonacci proportion 1:1.618:1 |
| **symmetrical-sacred** | Raphael (Religious mode), Michelangelo | Bilateral balance; Madonna/Saint arrangement | Central axis 50%; flanking elements 25% each side |
| **hierarchical-scaling** | Caravaggio (Religious mode), Michelangelo | Figure size denotes importance | Saints 100%; attendants 60-70%; background 40% |
| **empty-negative-dominance** | Khnopff (Portrait mode), Böcklin | Subject occupies <40% canvas; space as character | 60%+ negative space; psychological isolation |
| **diagonal-energy** | Caravaggio (Genre), Studio Pierrot (Action) | Diagonal thrust for dynamic tension | 45° or 135° orientation; movement implied |
| **off-center-dynamic** | van Dyck, Toulouse-Lautrec | Subject positioned eccentric; asymmetrical balance | Centroid offset 25-35%; leading lines direct eye |
| **vortex-composition** | Klimt (Allegorical mode), Böcklin | Spiraling forms; cyclic movement | Figures radiating from central point; counterclockwise or clockwise |

---

## 4. Palette Control Flags

```yaml
palette_flags:
  - limited-monochrome
  - split-complementary
  - analogous-harmony
  - muted-desaturation
  - high-saturation-contrast
  - period-authentic-pigments
  - earth-tone-ochre
  - cobalt-dominant
  - luminance-compression
  - duotone-layered
  - pastel-muted
  - infrared-palette
```

### Historical Examples

| Flag | Artists Identified | Palette | Hex Examples |
|------|-------------------|---------|--------------|
| **limited-monochrome** | Michelangelo (Drawing mode), Leonardo (Studies) | Black + white + single accent | Charcoal #1a1a1a, White #ffffff, Ochre #CD853F |
| **earth-tone-ochre** | Caravaggio (signature), Raphael, Rubens | Dominant ochres, umbers, siennas | Hematite #8B4513, Raw Sienna #704214 |
| **cobalt-dominant** | Raphael (drapery), van Dyck (shadow accents) | Rich blue undertones; cool palette | Cobalt Blue #4682B4, Prussian Blue #003366 |
| **split-complementary** | Klimt (gold + purple), Botticelli | Gold + cool purple; warm + cool opposition | Gold #FFD700, Purple #800080 |
| **high-saturation-contrast** | Studio Pierrot (Action mode with effects), Pop Art influence | Vivid, saturated colors; minimal gray | Neon Magenta, Electric Blue, Vibrant Yellow |
| **muted-desaturation** | Khnopff (atmospheric), Böcklin (Gothic) | Cool grays, desaturated shadows; limited saturation | Cool Gray #708090, Muted Blue #5A7A99 |
| **period-authentic-pigments** | All Renaissance artists (Raphael, Caravaggio, Michelangelo) | Historically accurate pigments for period | Ultramarine #4169E1, Vermillion #E34234, Madder Red #C41E3A |
| **duotone-layered** | Toulouse-Lautrec, Studio Pierrot (vintage modes) | Two color families; layered opacity | Warm ochre + Cool blue = sophisticated palette |
| **luminance-compression** | Caravaggio (tenebrist), Klimt (byzantine) | Reduced lightness range; dark-heavy | L: 20-60% range (minimal highlights) |

---

## 5. Process Flags

```yaml
process_flags:
  - alla-prima-direct
  - underpainting-visible
  - pentimento-trace
  - sketch-layer-evident
  - speedpaint-energetic
  - accidental-drip-legitimized
  - glazing-layers-built
  - wet-on-wet-blend
  - cross-hatched-build
  - digital-timelapse-trace
```

### Historical Examples

| Flag | Artists Identified | Technical Execution | Evidence |
|------|-------------------|-------------------|----------|
| **alla-prima-direct** | Caravaggio, Rubens (sketches) | Single-pass wet-on-wet; no reworking | Visible speed in brushwork; confident marks |
| **glazing-layers-built** | Raphael (signature), Leonardo, Botticelli | 10-15 transparent layers; depth via buildup | Optical mixing; translucent quality |
| **underpainting-visible** | Caravaggio (technical honesty), Michelangelo | Charcoal or red chalk underdrawing shows through | Pentimento visible at edges; working lines evident |
| **pentimento-trace** | Raphael, Leonardo, Botticelli | Artist's correction visible; figure repositioned | Faint ghost image of prior composition state |
| **cross-hatched-build** | Michelangelo (Drawing mode), Leonardo (Studies) | Parallel lines create tonal gradation | 5-8 stroke overlap zones; directional hatching |
| **wet-on-wet-blend** | Raphael (portrait sfumato), Caravaggio | Colors blended while wet; soft edges | Zero crisp transitions; atmospheric blending |
| **sketch-layer-evident** | Leonardo (scientific illustrations), Raphael | Preparatory line drawing under paint | Blueprint visible as light linear traces |

---

## 6. Subject Context Flags

```yaml
subject_context_flags:
  - mythological-codex
  - religious-iconography
  - scientific-illustration
  - allegorical-narrative
  - portrait-study
  - still-life-arrangement
  - architectural-study
  - ethnographic-depiction
  - historical-reenactment
```

### Historical Examples

| Flag | Artists Identified | Context | Framework Mode |
|------|-------------------|---------|-----------------|
| **mythological-codex** | Botticelli, Raphael, Klimt (allegorical), Böcklin | Classical figures; narrative from Ovid/Homer | Mythological mode; 6-8 figures; symbolic props |
| **religious-iconography** | Caravaggio, Raphael, Michelangelo | Sacred narrative; saints, martyrs, angels | Religious Devotional mode; halo treatment; period dress |
| **allegorical-narrative** | Klimt (signature), Mucha (poster mode), Khnopff | Abstract concepts visualized; symbolic composition | 3-4 distinct symbolic elements per work |
| **portrait-study** | van Dyck (signature), Raphael, Khnopff (psychological) | Single/paired figure focus; psychological intent | Portrait mode; face 40-60% of canvas; direct gaze or psychological distance |
| **architectural-study** | Leonardo (city plans), Raphael (background context) | Buildings as primary compositional element | Background 50-70% density; perspective studies |
| **still-life-arrangement** | (Identified in prop studies but not primary mode) | Objects arranged with intention; no figures | Symbolic object relationships; composition hierarchy |
| **scientific-illustration** | Leonardo (anatomical studies), Michelangelo (muscle study) | Anatomical precision; teaching intent | Detailed proportional accuracy; no narrative |

---

## 7. Scale & Perspective Flags

```yaml
scale_perspective_flags:
  - aerial-perspective
  - worms-eye-view
  - orthographic-flat
  - one-point-linear
  - fisheye-distortion
  - miniature-closeup
  - monumental-scale
  - macro-lens-focus
  - panoramic-sweep
```

### Historical Examples

| Flag | Artists Identified | Technique | Visual Effect |
|------|-------------------|-----------|--------------|
| **aerial-perspective** | Raphael (landscape backgrounds), Leonardo, Botticelli | Distant elements lighter, desaturated | Atmospheric depth; 3-5 distinct depth planes |
| **one-point-linear** | Leonardo (city studies), Raphael (architectural) | Vanishing point at horizon center; receding lines | Mathematical perspective; Renaissance precision |
| **orthographic-flat** | Khnopff (portrait mode), Byzantine icons | No perspectival recession; flat picture plane | Pre-Renaissance treatment; symbolic rather than spatial |
| **monumental-scale** | Michelangelo, Caravaggio (figures dominate) | Figure scale 60-80% of canvas; viewer at ground level | Psychological grandeur; viewer as supplicant |
| **macro-lens-focus** | Klimt (textile detail), Mucha (ornament) | Extreme closeup; detail as primary subject | Textures visible at microscopic scale; ornamental emphasis |
| **panoramic-sweep** | Studio Pierrot (Ensemble mode), Toulouse-Lautrec | Wide 16:9 framing; horizontal emphasis | Multiple figures across canvas; spatial breadth |
| **worm's-eye-view** | Caravaggio (some dramatic moments), Michelangelo (certain compositions) | Camera below eye level; figures loom above | Psychological vulnerability; dramatic tension |

---

## 8. Artifact Integrity Flags

```yaml
artifact_integrity_flags:
  - fresco-crack
  - film-burn-edge
  - color-fade
  - mold-patina
  - marginalia-handwritten
  - restoration-overpaint
  - archival-stain
  - paper-tear-edge
  - varnish-yellowed
```

### Historical Examples

| Flag | Artists Identified | Application | Context |
|------|-------------------|-------------|---------|
| **fresco-crack** | Michelangelo (Sistine), Raphael (Vatican studies) | Time/age damage; legitimate patina | Atmospheric mode; adds authenticity |
| **color-fade** | All historical artists (authenticity) | Pigment shift; period-appropriate aging | Umber shifts toward brown; ultramarine toward gray |
| **varnish-yellowed** | Caravaggio, Raphael, Böcklin (period-authentic) | Golden patina from age; UV yellowing | Adds 5-10° to overall hue; warmth increase |
| **restoration-overpaint** | (Identified as AVOID in frameworks) | Later restoration visible; inauthentic | Contradiction to forensic integrity; flagged as failure |
| **archival-stain** | Leonardo (some studies), Michelangelo (drawings) | Age staining; museum conditions visible | Brown foxing, water stains; adds authenticity to studies |

---

## 9. Anatomical & Gesture Flags

```yaml
anatomy_gesture_flags:
  - contrapposto
  - hierarchical
  - contemplative
  - dynamic-gesture
  - balanced-stance
  - foreshortened-limb
  - expressive-tension
  - anatomical-abstraction
```

### Historical Examples

| Flag | Artists Identified | Description | Framework Mode |
|------|-------------------|-------------|-----------------|
| **contrapposto** | Raphael (signature), Botticelli, Michelangelo | Weight on one leg; opposite hip/shoulder tilt | 15-25° shoulder-hip counter-rotation |
| **hierarchical** | Caravaggio (Religious), Raphael (Allegorical) | Figure size denotes importance; not spatial | Saints 100%; attendants 60-70%; saints face forward |
| **dynamic-gesture** | Caravaggio (Genre), Studio Pierrot (Action mode) | Kinetic energy; limbs extended; action implied | Diagonal thrust; 45-135° orientation |
| **contemplative** | Khnopff (Portrait mode), Raphael (private studies) | Introspective pose; downward gaze; stillness | Seated or standing; hand near face; psychological distance |
| **expressive-tension** | Michelangelo, Caravaggio (martyrdom scenes) | Body conveys emotion; musculature activated | Furrowed brow; jaw tension; muscle definition visible |
| **foreshortened-limb** | Raphael, Caravaggio (dramatic moments) | Limb extends toward viewer; perspective challenge | Arm/leg shortened by 30-40% due to angle |
| **balanced-stance** | van Dyck (aristocratic portraits), Rubens | Formal, frontal; weight distributed evenly | 5° asymmetry maximum; symmetrical default |

---

## 10. Facial Structure Flags

```yaml
facial_structure_flags:
  - classical-proportion
  - modigliani-elongated
  - byzantine-flat
  - ukiyo-e-triangular
  - cubist-fragmented
  - surrealist-drifted
  - african-mask-abstraction
  - aztec-glyphic-face
  - mayan-relief-face
  - baroque-chiaroscuro-depth
  - renaissance-volumetric
  - impressionist-loosened-form
  - manga-simplified-line
  - neoclassical-balanced
  - expressionist-distorted
  - hyperreal-smooth-skin
```

### Historical Examples

| Flag | Artists Identified | Facial Architecture | Key Metrics |
|------|-------------------|-------------------|------------|
| **classical-proportion** | Raphael (signature), Botticelli, Neoclassical | Symmetrical; ideal beauty; face width 28-32% of head height | Eye separation 42-46% of face width |
| **renaissance-volumetric** | Raphael, Leonardo, Michelangelo | Sfumato modeling; rounded forms; light/shadow sculpting | 5-7 distinct tonal zones per facial plane |
| **baroque-chiaroscuro-depth** | Caravaggio, Rubens | Extreme shadow/light modeling; dramatic depth | Shadow ratio 1.8-2.2:1; shadow colors cool (H:240-300°) |
| **modigliani-elongated** | (Historical reference; not in current frameworks) | Neck 120% longer; face 30% taller | Head-to-body 1:8.5 ratio (vs. standard 1:7) |
| **manga-simplified-line** | Studio Pierrot (anime) | Minimal line; emphasis on eyes; 18-28% eye size | Clear silhouette; expression via eye rendering |
| **hyperreal-smooth-skin** | Contemporary digital (not historical) | Zero texture; airbrushed quality | Skin H: 26-36° with S: 45-60% saturation |
| **expressionist-distorted** | Not primary in historical frameworks | Asymmetrical features; emotional intensity | Face width variance 5-15%; feature displacement for mood |

---

## 11. Pose Grammar Flags

```yaml
pose_grammar_flags:
  - contrapposto
  - figura-serpentinata
  - pudica
  - adlocutio
  - pieta
  - seated-throne
  - kneeling-reverent
  - reclining-odalisque
  - in-motion-stride
  - leaping-ascendant
  - hierarchical-static
  - hieroglyphic-frontalism
  - cruciform-spread
  - martyrdom-collapse
  - renaissance-balance
  - baroque-torsion
  - modern-dynamic-angle
```

### Historical Examples

| Flag | Artists Identified | Classical Description | Framework Application |
|------|-------------------|----------------------|-----------------------|
| **contrapposto** | Raphael, Botticelli, Michelangelo | Weight on one leg; hips offset to shoulders | 15-25° counter-rotation; graceful asymmetry |
| **figura-serpentinata** | Michelangelo (Ignudi), Mannerist painters | Spiraling body; S-curve from head to feet | Elegant elongation; 1:8+ head-to-body ratio possible |
| **pudica** | Raphael (classical nudes in studies), Botticelli | Modesty pose; hand covering; averted gaze | Body angled away; contrapposto with protection gesture |
| **pieta** | Caravaggio (Religious mode), Michelangelo | Madonna cradling dead Christ; maternal grief | Seated or kneeling; body weight supported; faces in shadow |
| **adlocutio** | Caravaggio (saint addressing), Raphael | Speaker addressing crowd; one hand raised | Standing frontal; direct gaze; authoritative bearing |
| **seated-throne** | van Dyck (aristocratic), Rubens (allegorical) | Formal seated; hierarchical positioning | High seat back; straight spine; hand gestures refined |
| **hieroglyphic-frontalism** | (Pre-Renaissance, not primary in modern frameworks) | Completely frontal; no foreshortening | Shoulders, hips aligned; face forward; symmetric |
| **in-motion-stride** | Caravaggio (Genre), Studio Pierrot (Action mode) | Walking or running; one foot forward | Weight distribution asymmetric; kinetic energy |
| **leaping-ascendant** | Caravaggio (angels), Michelangelo (athletic figures) | Ascending; feet off ground; spiritual/dynamic lift | Diagonal orientation; 45-135° thrust; bodies extended |
| **baroque-torsion** | Michelangelo, Baroque sculptors | Twisted torso; spiral energy | Chest faces different direction from hips; dynamic tension |

---

## 12. Eye Treatment Flags

```yaml
eye_treatment_flags:
  - baroque-dual-reflection
  - byzantine-flat-halo
  - ukiyo-e-inked-outline
  - manga-enlarged-iris
  - cubist-fragmented-view
  - expressionist-tilted
  - renaissance-spherical-form
  - artdeco-geometric-almond
  - realist-corneal-reflect
  - surrealist-offset-gaze
  - popart-halftone-eye
  - impressionist-soft-glare
  - noir-shadowed-orbit
  - kodachrome-highlight-ring
  - digital-screen-specular
```

### Historical Examples

| Flag | Artists Identified | Eye Rendering | Technical Spec |
|------|-------------------|---------------|-----------------|
| **renaissance-spherical-form** | Raphael (signature), Leonardo, Botticelli | Eyes rendered as spheres; light/shadow modeling | Highlight at 10-11 o'clock (consistent lighting) |
| **baroque-dual-reflection** | Caravaggio, Rubens | Twin highlights simulating real light sources | Two specular spots per eye; color-shifted if atmospheric |
| **manga-enlarged-iris** | Studio Pierrot (Character Portrait mode) | Iris 25-28% of eye; prominent emotional center | Black pupil with 3-5 tonal zones; highlight at pupil edge |
| **artdeco-geometric-almond** | Mucha (Art Nouveau/Deco), Khnopff | Angular almond shape; stylized geometry | Eye 35-40% of face width; elongated; refined |
| **expressionist-tilted** | (Modern reference; not historical) | One eye larger or tilted; psychological distortion | Asymmetrical iris placement; emotional intensity |
| **realist-corneal-reflect** | Raphael (portrait studies), van Dyck | Accurate optical reflection; corneal sphere visible | Highlight white (#FFFFFF); iris rendered with depth |
| **noir-shadowed-orbit** | Caravaggio (tenebrist), Film Noir influence | Eye sockets in shadow; eyes barely visible | Orbit darkness 1.8-2.2:1 ratio; mystery effect |
| **impressionist-soft-glare** | (Modern reference) | Eyes suggested rather than defined; soft focus | Minimal detail; color wash; atmospheric suggestion |

---

## Quick Reference: Flag Application by Framework Type

| Artist Type | Primary Flags | Secondary Flags | Avoid Flags |
|-------------|--------------|-----------------|------------|
| **Renaissance Naturalism** (Raphael, Leonardo) | classical-proportion, renaissance-volumetric, sfumato-edges, glazing-layers-built, contrapposto | rule-of-thirds, golden-spiral, period-authentic-pigments | expressionist-distorted, cubist-fragmented, digital-screen-specular |
| **Baroque Dramatism** (Caravaggio, Rubens) | chiaroscuro-dramatic, tenebrist-void, impasto-heavy, baroque-dual-reflection, adlocutio | hierarchical-scaling, golden-hour-warm, earth-tone-ochre, martyrdom-collapse | minimalist-monochrome, flat-ornographic |
| **Romantic/Symbolist** (Böcklin, Khnopff, Klimt) | atmospheric-gothic, muted-desaturation, vortex-composition, surrealist-offset-gaze, allegorical-narrative | aged-patina, duotone-layered, psychological-tension, empty-negative-dominance | high-saturation-contrast, neon-synthetic |
| **Contemporary Anime** (Studio Pierrot) | rimlight-contour, manga-simplified-line, manga-enlarged-iris, dynamic-gesture, in-motion-stride, high-saturation-contrast | rule-of-thirds, off-center-dynamic, split-complementary, panoramic-sweep | tenebrist-void, baroque-chiaroscuro-depth, aged-patina |

---

# 13. Cinematic Camera Logic Flags

These flags describe how the camera behaves as a system: movement, angle, lens behavior,
focus logic, and temporal shot grammar. They are medium-agnostic and can apply to
animation, live-action, photography, 3D, game engines, or painterly camera emulation.

```yaml
camera_logic_flags:
  - cam-move-static
  - cam-move-tracking-linear
  - cam-move-pan-slow
  - cam-move-pan-fast
  - cam-move-crane
  - cam-move-orbit
  - cam-move-dolly-in
  - cam-move-dolly-out
  - cam-angle-high
  - cam-angle-low
  - cam-angle-level
  - cam-angle-dutch-tilt
  - cam-lens-wide-perspective
  - cam-lens-tele-compressed
  - cam-lens-normal-balanced
  - cam-focus-shallow
  - cam-focus-deep
  - cam-focus-medium
  - cam-shot-longtake
  - cam-shot-rapidcut
  - cam-shot-matchcut
  - cam-shot-smashcut
  - cam-shot-impossible-movement
```

### Conceptual Notes

- **Movement flags** (cam-move-*) describe the *path* of the camera relative to scene/subject.
- **Angle flags** (cam-angle-*) describe the vertical framing relationship (power, vulnerability, neutrality).
- **Lens flags** (cam-lens-*) describe geometric behavior (compression vs expansion), not literal hardware.
- **Focus flags** (cam-focus-*) describe depth of field thickness and how many planes resolve sharply.
- **Shot grammar flags** (cam-shot-*) describe temporal editing / continuity logic.

---

# 14. 2.5D & 3D Compositing / Integration Flags

These flags describe how 2D, 2.5D, and 3D elements are layered, integrated, and lit.

```yaml
compositing_integration_flags:
  - comp-2d3d-hybrid
  - comp-2d3d-contrast
  - comp-multilayer-flat
  - comp-multilayer-depth
  - comp-parallax-strong
  - comp-parallax-subtle
  - comp-pass-single
  - comp-pass-multipass
  - comp-lighting-unified
  - comp-lighting-mixed
  - comp-outline-consistent
  - comp-outline-variant
  - comp-texture-unified
  - comp-texture-hybrid
```

### Conceptual Notes

- **Hybrid vs contrast:** whether 2D and 3D elements feel seamlessly unified or deliberately distinct.
- **Multilayer / parallax:** how many depth planes exist and how aggressively they move against each other.
- **Pass behavior:** whether characters, backgrounds, FX, and lighting are rendered in a single unified pass or in composited layers.
- **Integration quality:** whether outlines, textures, and lighting look like one world or several stitched together.

---

# 15. Studio Motion & Action Grammar Flags

These flags describe *how motion itself is stylized*: smears, multiples, timing, speed lines,
impact frames, and the physical logic (realistic vs exaggerated).

```yaml
motion_action_flags:
  - motion-smear-frames
  - motion-multiples
  - motion-speed-lines
  - motion-impact-frame
  - motion-timing-snappy
  - motion-timing-fluid
  - motion-limited-animation
  - motion-exaggerated-physics
  - motion-realistic-weight
  - motion-silhouette-clear
  - motion-anticipation-visible
  - motion-followthrough-emphasized
  - motion-effects-detailed
  - motion-camera-shake
```

### Conceptual Notes

- **Smear/multiples:** describe stylized in-betweens in animation or implied motion blur in still imagery.
- **Timing flags:** “snappy” vs “fluid” vs “limited animation” define how many frames and what kind of easing a motion implies.
- **Physicality flags:** whether motion obeys believable weight or intentionally breaks physics.
- **Readability flags:** silhouette clarity, anticipation, and follow-through support legible action.
- **Camera shake:** kinetic energy from moving the virtual camera rather than the subject.

---

# 16. Pipeline Revision / Correction Flags

These flags describe visible or implied traces of the production process:
construction lines, corrections, pentimenti, and notes.

```yaml
revision_process_flags:
  - rev-construction-lines
  - rev-blue-pencil
  - rev-erase-marks
  - rev-multiple-sketch-strokes
  - rev-pentimento-ghost
  - rev-overlay-corrections
  - rev-line-boil
  - rev-notes-visible
```

### Conceptual Notes

- **Construction flags**: underdrawing and exploratory linework intentionally or unintentionally left visible.
- **Pentimenti / corrections**: evidence of repositioning figures, limbs, or compositional elements over time.
- **Line boil**: jitter from hand-inked animation frames or purposeful “alive” linework.
- **Notes visible**: production notes, annotations, or guides left in the final image for stylistic or archival reasons.

---

# 17. Close-Up Flags

These flags describe magnification, optical behavior, cropping geometry, and focal plane specificity in extreme close-ups. They apply across all visual media: photography, painting, illustration, animation, engraving, and mixed media. Close-up flags capture the unique optical grammar that emerges when viewer distance compresses and detail becomes primary.

```yaml
closeup_flags:
  # Magnification Ratios
  - macro-1x
  - macro-2x
  - macro-5x
  - macro-10x-plus
  - telephoto-closeup-compression
  
  # Macro Optical Physics
  - macro-spherical-aberration
  - macro-chromatic-edge-fringe
  - macro-minimal-distortion
  - macro-field-curvature
  
  # Depth-of-Field Signatures
  - macro-razor-thin-dof
  - macro-bokeh-falloff-smooth
  - macro-bokeh-falloff-abrupt
  - iris-shaped-bokeh
  - specular-bokeh-dots
  
  # Cropping Geometry
  - crop-tight-vertical
  - crop-tight-horizontal
  - crop-asymmetrical-close
  - crop-edge-weighted
  - crop-negative-space-minimal
  - crop-partial-occlusion-rule
  
  # Focal Plane Selection
  - focus-on-surface-plane
  - focus-on-feature-edge
  - focus-on-iris-plane
  - focus-on-object-centerline
  - focus-on-texture-peak
  
  # Viewing Angle Specificity
  - closeup-frontal-perpendicular
  - closeup-oblique-15deg
  - closeup-oblique-45deg
  - closeup-top-down
  - closeup-underview-worm-level
  
  # Close-Up Texture Specialization
  - texture-pore-resolve-macro
  - texture-fabric-weave-closeup
  - texture-metallic-grain-closeup
  - texture-crystalline-closeup
  - texture-organic-cellular-detail
  - micro-scratches-visible
  - surface-dust-particle-resolve
  
  # Specular & Lighting in Macro
  - specular-hotspot-intense
  - specular-hotspot-diffused
  - macro-ring-flash-signature
  - macro-diffuse-bounce
  - subsurface-scatter-macro
  - raking-light-macro
  
  # Edge & Transition Quality in Macro
  - macro-edge-surgical-sharp
  - macro-edge-transition-gradient
  - macro-fringe-color-shift
  - macro-bokeh-edge-definition
```

------

## Detailed Flag Descriptions

### **Magnification Ratios**

| Flag                            | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `macro-1x`                      | Life-size magnification; subject size equals output size (e.g., 1cm real object = 1cm on-screen) | Use for insect photography, extreme coin/jewelry close-ups, or artwork detail study at natural scale | "1:1 macro magnification; subject fills frame edge-to-edge without cropping" |
| `macro-2x`                      | 2x magnification; subject appears twice its real size        | Use for fingerprint detail, circuit board traces, small fabric weave, or manuscript illumination close-ups | "2x magnification; fine detail becomes primary content"      |
| `macro-5x`                      | 5x magnification; fine-grained structure becomes visible     | Use for pore structure, cellular texture, ink droplets, or microscopic paint layers | "5x magnification; pore-level or cellular detail visible; individual particles resolve" |
| `macro-10x-plus`                | 10x or greater magnification; only extreme micro-detail visible | Use for microscopy-level photography, molecular structure, or theoretical close-up painting | "Extreme magnification (10x+); only micro-texture and particle structure visible; macro distortion unavoidable" |
| `telephoto-closeup-compression` | Telephoto lens used for close-up (85mm+); spatial compression creates flattened perspective | Use for portrait close-ups, wildlife macro, or painted perspective compression evoking telephoto behavior | "Telephoto close-up compression; spatial depth flattened; background compressed; subject appears 2D" |

------

### **Macro Optical Physics**

| Flag                          | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `macro-spherical-aberration`  | Optical aberration where light rays converge at different points; creates soft, dreamy edge-to-edge fuzzy quality in macro | Use when depicting painterly soft-focus macro painting or high-aperture macro photography | "Spherical aberration visible at frame edges; soft, dreamy quality; center-sharp, edges softly blurred" |
| `macro-chromatic-edge-fringe` | Color fringing at high-contrast edges; typically red/cyan or blue/yellow separation (optical dispersion) | Use for high-magnification photography with prismatic edge effects or stylized close-ups showing optical artifact | "Chromatic fringing at edges; cyan/red separation visible; optical dispersion artifact; hi-mag signature" |
| `macro-minimal-distortion`    | Close-up rendered without optical aberrations; subject-accurate scale and color fidelity | Use for studio product photography, clinical/forensic close-ups, or representational painting | "Optically accurate close-up; no chromatic fringing, spherical aberration, or distortion; clinical precision" |
| `macro-field-curvature`       | Optical effect where focus falls on a curved plane instead of flat plane; periphery appears slightly out of focus despite being same distance | Use for macro photography with focus rolling across curved surfaces (curved leaves, spheres, eyes) | "Field curvature visible; focus falls on curved plane; periphery softly defocused despite proximity" |

------

### **Depth-of-Field Signatures**

| Flag                         | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `macro-razor-thin-dof`       | Extremely shallow depth of field; only a razor-thin plane in focus; rest blurred drastically (typical f/2.8-f/1.4 macro) | Use for beauty shots, extreme eye close-ups, extreme product photography, or impressionistic macro paintings | "Razor-thin depth of field; focus plane thickness ~2-3mm at macro scale; foreground + background completely blurred" |
| `macro-bokeh-falloff-smooth` | Out-of-focus areas blur smoothly without rings or shape artifacts (circular aperture, well-corrected optics) | Use for high-quality macro photography or smooth-bokeh-evoking paintings | "Bokeh falloff smooth and continuous; no ring artifacts; creamy blur quality" |
| `macro-bokeh-falloff-abrupt` | Out-of-focus areas transition sharply from focused to blurred (stopped-down aperture, or stylized effect) | Use for high-aperture macro with shallow focus or graphic illustration | "Bokeh falloff abrupt; sharp transition between focus + blur zones; graphic quality" |
| `iris-shaped-bokeh`          | Out-of-focus specular highlights assume the shape of the camera aperture (often polygonal or rounded) | Use for macro photography with strong point-light-sources in background (e.g., jewelry photography, rain drops with lights) | "Iris-shaped bokeh in specular highlights; aperture shape (usually hexagonal or circular) visible in out-of-focus lights" |
| `specular-bokeh-dots`        | Tiny point lights in out-of-focus areas render as distinct, separated dots rather than soft circles (high magnification, distant lights) | Use for macro with lots of small light sources (e.g., city lights at macro distance, sparkle effects, glitter photography) | "Specular bokeh dots; point lights in out-of-focus areas render as distinct separated highlights, not soft circles" |

------

### **Cropping Geometry**

| Flag                          | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `crop-tight-vertical`         | Extreme vertical crop; subject taller than wide; fills frame top-to-bottom with minimal horizontal content | Use for portrait close-ups, extreme eye/lip crops, vertical plant stem photography, or tall object macro | "Tight vertical crop; subject dominates vertically; 3:4 or taller aspect ratio; minimal horizontal padding" |
| `crop-tight-horizontal`       | Extreme horizontal crop; subject wider than tall; fills frame left-to-right with minimal vertical content | Use for landscape/geological texture, wide fabric patterns, horizontal striations, or linear object macro | "Tight horizontal crop; subject dominates horizontally; 16:9 or wider; minimal vertical padding" |
| `crop-asymmetrical-close`     | Cropping is deliberately off-balance; subject or focal point positioned at extreme edge, not centered | Use for editorial/fine art photography, expressionistic close-ups, or asymmetrical design painting | "Asymmetrical close-up crop; subject pushed to frame edge; off-center tension; negative space weighted to one side" |
| `crop-edge-weighted`          | Subject cropped so edges of object/feature are at or beyond frame boundary; parts of subject deliberately cut off | Use for extreme close-ups where only a portion of the subject is visible (partial faces, edge of eye, corner of fabric) | "Edge-weighted crop; parts of subject beyond frame boundary; frame boundary cuts through subject; partial visibility" |
| `crop-negative-space-minimal` | Subject occupies >80% of frame; negative space compressed to thin borders or non-existent | Use for intense, claustrophobic close-ups, or detailed product photography | "Minimal negative space; subject fills >80% of canvas; no breathing room; claustrophobic framing" |
| `crop-partial-occlusion-rule` | Parts of subject deliberately hidden/cropped; occlusion is compositional choice, not accident | Use for mystery close-ups, artistic cropping in painting, or partial-reveal photography | "Partial occlusion; portions of subject deliberately hidden at frame edge; compositional cropping strategy" |

------

### **Focal Plane Selection**

| Flag                         | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `focus-on-surface-plane`     | Focus falls on the outer surface/skin; texture, pores, imperfections prioritized | Use for skin close-ups, fabric texture photography, material surface studies, or painterly surface-focus works | "Focus on outer surface plane; skin texture, pores, imperfections sharp; subsurface blurred; surface detail primary" |
| `focus-on-feature-edge`      | Focus falls on the outline/perimeter of a feature (e.g., iris edge, lip outline, fabric edge) | Use for edge-definition-priority close-ups, contour-focused portraits, or graphic illustration | "Focus on feature edge/outline; outer perimeter of iris/lip/object sharp; interior slightly defocused" |
| `focus-on-iris-plane`        | Specific to eyes: focus falls on the iris surface, not the cornea or sclera | Use for eye close-ups, beauty photography, portrait macro    | "Iris plane sharp; cornea slightly soft; iris texture + striations visible; eye depth exaggerated" |
| `focus-on-object-centerline` | Focus falls along the central axis of the subject; symmetrical focus emphasis | Use for symmetrical object macro, centerline-priority compositions, or balanced close-ups | "Focus along object centerline; bilateral symmetry in focus; edges soften equally on both sides" |
| `focus-on-texture-peak`      | Focus falls on the highest/most prominent points of texture; valleys + troughs soften | Use for extreme macro texture, mountain/terrain close-ups, fabric weave photography, or stylized surface-emphasis | "Focus on texture peaks; highest points of texture remain sharp; valleys + recesses softly blurred; topography emphasized" |

------

### **Viewing Angle Specificity**

| Flag                            | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `closeup-frontal-perpendicular` | Close-up shot head-on; camera perpendicular to subject surface (0° angle) | Use for frontal face close-ups, flat-surface macro (coins, fabric, paper), or direct eye-contact portraits | "Frontal perpendicular close-up; camera directly facing subject; 0° angle; no perspective foreshortening" |
| `closeup-oblique-15deg`         | Close-up at shallow oblique angle (15° from perpendicular); minimal perspective distortion | Use for slight-angle close-ups, gentle 3D hint without major distortion, or naturalistic view | "Oblique close-up, 15° angle; subtle 3D perspective; minimal foreshortening; gentle angle" |
| `closeup-oblique-45deg`         | Close-up at 45° angle; significant perspective compression and 3D depth emphasis | Use for dramatic close-ups with 3D emphasis, object-corner documentation, or sculptural detail | "Oblique close-up, 45° angle; strong perspective; significant foreshortening; 3D depth exaggerated" |
| `closeup-top-down`              | Close-up shot from directly above (bird's-eye view of close-up) | Use for overhead object macro, top-surface detail photography, or overhead portrait close-ups | "Top-down close-up; camera looking straight down; bird's-eye perspective; overhead view of detail" |
| `closeup-underview-worm-level`  | Close-up shot from below (worm's-eye view); camera looking upward at subject | Use for dramatic low-angle close-ups, underside texture photography, or psychological intensity | "Underview close-up; camera below subject looking up; worm's-eye perspective; psychological intensity from upward angle" |

------

### **Close-Up Texture Specialization**

| Flag                              | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `texture-pore-resolve-macro`      | Skin pores rendered at macro clarity; individual pore structure visible; epidermis topography documented | Use for hyper-detailed skin close-ups, beauty/dermatological photography, or ultra-realistic skin painting | "Skin pores resolve at macro clarity; individual pore structure visible; epidermis topography detailed; pore depth visible" |
| `texture-fabric-weave-closeup`    | Fabric weave pattern visible at macro scale; individual threads + interlocking documented | Use for textile photography, fabric detail study, costume close-ups, or fabric-focused painting | "Fabric weave visible at macro scale; individual threads + interlocking pattern documented; weave structure legible" |
| `texture-metallic-grain-closeup`  | Metal surface grain structure visible; striations, crystalline grain, tool marks documented | Use for metal object macro, tool/weapon close-up photography, or metallic surface-detail painting | "Metallic grain visible at macro scale; crystalline structure, striations, tool marks documented; surface topography detailed" |
| `texture-crystalline-closeup`     | Crystal/mineral structure visible; facets, internal refractions, geometric lattice apparent | Use for mineral/gem photography, rock surface macro, or crystalline material detail | "Crystalline structure visible; facets + internal refractions apparent; geometric lattice legible; mineral detail" |
| `texture-organic-cellular-detail` | Organic surface shows cellular/biological structure (plant cells, wood grain, fungal pattern, fur strand separation) | Use for botanical macro, wood/plant-fiber photography, fur/feather close-ups, or organic detail painting | "Organic cellular structure visible; plant cells, wood grain, fungal patterns, or fur strand separation detailed" |
| `micro-scratches-visible`         | Tiny surface scratches, abrasions, weathering marks visible at macro scale | Use for worn object macro, damage documentation, tool-mark photography, or aged-surface painting | "Micro-scratches visible; surface abrasions, weathering marks, tool marks documented at macro scale" |
| `surface-dust-particle-resolve`   | Dust, dirt, or loose particles on surface rendered as individual resolved elements (not blur) | Use for forensic macro, dusty/weathered surface photography, or ultra-detailed surface painting | "Dust particles resolve individually; surface contamination documented; particle shape + shadow visible" |

------

### **Specular & Lighting in Macro**

| Flag                         | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `specular-hotspot-intense`   | Sharp, intense specular highlight; bright point-source reflection with minimal softening | Use for jewelry/metal macro, high-gloss surface photography, or graphic highlight-emphasis | "Intense specular hotspot; sharp, bright point-light reflection; minimal softening; high-gloss signature" |
| `specular-hotspot-diffused`  | Soft, diffused specular highlight; reflection spread across broader area with gradual falloff | Use for matte/semi-gloss macro, softbox-lit close-ups, or gentle-reflection painting | "Diffused specular hotspot; soft, broad reflection; gradual falloff; matte/semi-gloss surface behavior" |
| `macro-ring-flash-signature` | Ring-flash lighting pattern visible: soft wraparound light with characteristic ring shadow pattern | Use for medical/forensic macro, ring-flash-lit close-ups, or ring-flash-evoked painting | "Ring-flash signature; soft wraparound illumination; characteristic ring-shadow pattern; clinical macro lighting" |
| `macro-diffuse-bounce`       | Diffuse, bounced lighting; light scattered from surfaces, no directional source; soft, even illumination | Use for diffuse-lit macro photography, studio softbox macro, or soft-light-evoked close-up painting | "Diffuse bounce lighting; no harsh directional source; soft, even illumination; bounced-light quality" |
| `subsurface-scatter-macro`   | Subsurface scattering visible at macro scale; light penetrating semi-translucent surface (skin, leaves, wax) | Use for skin close-ups, translucent material macro, leaf/plant detail, or luminous surface painting | "Subsurface scattering visible; light penetrating semi-translucent surface; glow from within; luminous quality" |
| `raking-light-macro`         | Extreme angle light ("raking") emphasizes surface texture; shadows exaggerate relief + irregularities | Use for textured surface macro, archaeological detail photography, or dramatic texture-emphasis painting | "Raking light macro; extreme angle emphasizes surface texture; shadows exaggerate relief + micro-topography" |

------

### **Edge & Transition Quality in Macro**

| Flag                             | Meaning                                                      | AI Usage Notes                                               | Example Prompt Language                                      |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `macro-edge-surgical-sharp`      | Edges in macro are razor-sharp; maximum clarity/definition at feature boundaries | Use for clinical/forensic macro, precision close-ups, or hyper-sharp macro painting | "Macro edges surgical-sharp; razor clarity at feature boundaries; maximum definition; precision-focused" |
| `macro-edge-transition-gradient` | Edges transition via soft gradient rather than hard line; feathered boundary between focused + blurred | Use for painterly macro, soft-edge close-ups, or transition-emphasis illustrations | "Macro edges via gradient transition; soft feathered boundaries; no hard lines; painterly quality" |
| `macro-fringe-color-shift`       | Color shift at edge boundaries (typically from chromatic aberration or optical fringing); edge-adjacent color separation | Use for high-mag chromatic-aberration photography, stylized fringe-effect close-ups, or optical-artifact painting | "Macro fringe color-shift; color separation at edge boundaries; optical fringing artifact; prismatic edge quality" |
| `macro-bokeh-edge-definition`    | Out-of-focus edges have defined structure; bokeh balls have clear perimeter, not fuzzy melt | Use for bokeh-quality emphasis in macro, shape-defined bokeh photography, or graphic blur-emphasis | "Macro bokeh edge definition; out-of-focus areas have clear structure; bokeh balls have legible perimeter" |

------

## Historical Examples: Close-Up Flags in Completed Frameworks

| Artist                         | Medium           | Close-Up Flags Identified                                    | Operational Mode    | Context                                                      |
| ------------------------------ | ---------------- | ------------------------------------------------------------ | ------------------- | ------------------------------------------------------------ |
| Irving Penn                    | Photography      | `macro-1x`, `crop-tight-vertical`, `crop-negative-space-minimal`, `focus-on-surface-plane`, `macro-razor-thin-dof`, `texture-pore-resolve-macro` | Close-Up Hands      | Hand close-ups in studio setting; fingerprint texture documented; extreme crop |
| David LaChapelle               | Photography      | `telephoto-closeup-compression`, `crop-asymmetrical-close`, `specular-hotspot-intense`, `macro-bokeh-falloff-smooth` | Beauty Close-Up     | Portrait extreme close-ups; compressed spatial depth; glossy skin; studio specular lighting |
| Baron Adolph de Meyer          | Photography      | `macro-2x`, `focus-on-feature-edge`, `macro-diffuse-bounce`, `closeup-oblique-15deg`, `texture-fabric-weave-closeup` | Fabric Detail Study | Drapery close-ups; diffuse studio light; textile structure visible |
| Helmut Newton                  | Photography      | `crop-edge-weighted`, `crop-asymmetrical-close`, `macro-razor-thin-dof`, `closeup-oblique-45deg`, `specular-hotspot-diffused` | Extreme Detail      | Provocative body close-ups; deliberate cropping; shallow DOF; psychological tension |
| Raphael (Preparatory Drawings) | Drawing/Painting | `texture-pore-resolve-macro`, `macro-edge-surgical-sharp`, `focus-on-feature-edge`, `closeup-frontal-perpendicular` | Eye Study           | Close-up eye studies; surgical precision in iris rendering; frontal view |
| Caravaggio                     | Painting         | `macro-edge-transition-gradient`, `subsurface-scatter-macro`, `raking-light-macro`, `texture-organic-cellular-detail` | Flesh Close-Up      | Skin texture at macro; subsurface glow in highlights; raking light reveals pore structure |
| Leonardo da Vinci (Codex)      | Drawing Study    | `texture-crystalline-closeup`, `macro-edge-surgical-sharp`, `micro-scratches-visible`, `focus-on-texture-peak` | Material Study      | Close-up studies of water, hair, fabric; crystalline precision; individual scratch documentation |

------

## How Close-Up Flags Integrate with Existing Framework Sections

### **Phase 2 Measurement Extraction**

When analyzing corpus images containing close-ups, extract:

1. **Magnification estimation**: Compare subject actual size (if known) to on-screen size → identify `macro-1x`, `macro-2x`, etc.
2. **Cropping geometry**: Measure % of frame occupied by subject + negative space → identify crop flags
3. **DOF thickness**: Estimate mm-range of focus plane at macro scale → identify DOF signature flags
4. **Focal plane**: Determine what plane is sharpest (surface, edge, center) → identify focal plane flag
5. **Viewing angle**: Measure degrees from perpendicular → identify angle flags
6. **Texture detail**: Document what texture level is visible (pores, weave, grain, cells) → identify texture flags
7. **Specular behavior**: Document hotspot quality (intense vs diffused) → identify specular flags
8. **Optical artifacts**: Check for fringing, aberration, field curvature → identify optical physics flags

### **Phase 3 Framework Construction**

Close-up flags appear in:

- **Section 1 (Core Instruction)**: "Critical flags include: [close-up flags identified in Phase 2]"
- **Section 4 (Technical Method & Mark-Making)**: "Macro optical behavior: [magnification + DOF + optical physics flags]"
- **Section 5 (Wardrobe, Props & Setting)**: "Close-up detail conventions: [texture specialization + viewing angle flags]"
- **Section 7 (Composition & Lighting Patterns)**: "Close-up lighting: [specular + lighting flags]; cropping geometry: [crop flags]"
- **Renderer-Agnostic Adapter**: Quantified specifications for close-up magnification, cropping, focal plane

### **Phase 4 Testing & Validation**

When generating test images with close-up modes:

1. Check that identified close-up flags appear in test image
2. Validate magnification ratio accuracy (use ruler/reference object if applicable)
3. Verify cropping geometry matches corpus
4. Confirm DOF signature matches corpus baseline
5. Score using MuseoMorph Forensic Rubric v1.3 with close-up category adjustments if needed

------

## Multi-Medium Application Examples

### **Photography Close-Up**

- Magnification flags: `macro-1x`, `macro-2x`, `macro-5x`
- Optical physics: `macro-spherical-aberration`, `macro-chromatic-edge-fringe`
- Texture: `texture-pore-resolve-macro`, `texture-fabric-weave-closeup`
- Lighting: `macro-ring-flash-signature`, `specular-hotspot-intense`

### **Painting Close-Up** (High detail, magnified subject)

- Magnification conceptual: `macro-2x` (equivalent magnification effect via composition)
- Cropping: `crop-tight-vertical`, `crop-edge-weighted`
- Texture: `texture-organic-cellular-detail`, `surface-dust-particle-resolve`
- Edge quality: `macro-edge-surgical-sharp`, `macro-edge-transition-gradient`
- Lighting: `subsurface-scatter-macro`, `raking-light-macro`

### **Illustration / Manga Close-Up** (Character detail emphasis)

- Magnification: `macro-2x`, `macro-5x` (stylized emphasis)
- Eye focus: `focus-on-iris-plane`, `macro-razor-thin-dof`
- Edge quality: `macro-edge-transition-gradient` (painterly softness)
- Cropping: `crop-asymmetrical-close`, `crop-negative-space-minimal`

### **Animation Close-Up** (Temporal close-up behavior)

- Magnification: `macro-1x`, `macro-2x`
- DOF: `macro-razor-thin-dof`, `macro-bokeh-falloff-smooth`
- Motion emphasis: Combined with `motion-anticipation-visible`, `motion-followthrough-emphasized`
- Texture: `texture-pore-resolve-macro` (skin detail during dialogue)

### **Engraving / Etching Close-Up** (Micro-line detail)

- Magnification: `macro-5x`, `macro-10x-plus` (conceptual; requires extreme line resolution)
- Texture: `texture-crystalline-closeup`, `micro-scratches-visible`
- Edge quality: `macro-edge-surgical-sharp`, `macro-fringe-color-shift` (ink fringing on paper)

------

## Close-Up Flags: Quick Decision Tree

**When building a framework for an artist:**

1. Do corpus images contain extreme magnified detail? → YES: Add close-up flags
2. Is the artist known for texture/detail emphasis in close-ups? → YES: Add texture specialization flags
3. Are cropping patterns extreme (tight, asymmetrical, edge-weighted)? → YES: Add cropping geometry flags
4. Do close-ups appear as a distinct operational mode? → YES: Create dedicated close-up mode with close-up flags
5. What viewing angle do close-ups use (frontal, oblique, top-down)? → Document angle flag
6. What DOF signature? (razor-thin vs gradual falloff) → Document DOF flag
7. What specular behavior? (intense hotspots vs diffused) → Document specular flag
8. Any visible optical artifacts? (fringing, aberration) → Document optical physics flags

If **none of these apply**, close-up flags may not be needed for that framework.

------

# 18. Cognitive Logic Flags (The "Brain" Layer)

These flags control the **Chain-of-Thought (CoT)** priority during the pre-computation phase. They explicitly resolve conflicts between "Photorealism" and "Stylization."

```yaml
cognitive_logic_flags:
  - logic-prioritize-medium-over-likeness
  - logic-force-material-homogeneity
  - logic-inhibit-face-protection
  - logic-execute-anachronism-check
  - logic-simulate-analog-defects
  - logic-reject-digital-perfection
  - logic-assert-horror-vacui
  - logic-assert-minimalist-void
```



### Usage Definitions



| **Flag**                                  | **Instruction to Reasoning Engine**                          |
| ----------------------------------------- | ------------------------------------------------------------ |
| **logic-prioritize-medium-over-likeness** | "Critical Instruction: If the subject's realistic features conflict with the medium (e.g., ink block, woodcut), DESTROY the likeness to save the art style. The medium is the primary truth; the face is secondary." |
| **logic-force-material-homogeneity**      | "Scan the face and the background. If they use different rendering techniques (e.g., detailed face vs. flat background), FORCE the face to match the background's physics. No 'protected zones' allowed." |
| **logic-inhibit-face-protection**         | "Disable the internal safety bias that attempts to make faces 'beautiful' or 'photorealistic.' Allow faces to be ugly, distorted, mask-like, or abstract if the style demands it." |
| **logic-execute-anachronism-check**       | "Pause before generating. Scan the prompt for modern technology (phones, cars, modern fashion). Swap them for period equivalents based on the declared Era." |
| **logic-simulate-analog-defects**         | "Do not generate a 'clean' image. Deliberately inject noise, bleed, misalignment, or cracks to simulate a physical object. Perfection is a failure state." |
| **logic-reject-digital-perfection**       | "If an edge looks anti-aliased or a gradient looks smooth, reject it. Force 'tooth,' 'grain,' and 'drag' into every transition." |
| **logic-assert-horror-vacui**             | "Fear of empty space. Fill every available pixel with pattern, texture, or detail. No negative space allowed." |
| **logic-assert-minimalist-void**          | "Aggressive use of negative space. The void is as important as the subject. Do not fill empty areas." |

------



# 19. Facial Abstraction Flags (The "Anti-Portrait" Layer)



These flags replace the generic "Stylized Face" descriptor with specific **Construction Rules** that prevent the "Photo-Filter" look.

YAML

```
facial_abstraction_flags:
  - face-logic-paper-mask
  - face-logic-porcelain-shell
  - face-logic-carved-wood
  - face-logic-ink-symbol
  - face-logic-biological-mesh
  - face-logic-flattened-map
  - face-logic-structural-planes
  - face-logic-dissolving-form
```



### Usage Definitions



| **Flag**                         | **Construction Rule for Nano Banana Pro**                    |
| -------------------------------- | ------------------------------------------------------------ |
| **face-logic-paper-mask**        | "The face is NOT flesh. It is raw white paper defined only by black ink lines. No shading, no pores, no gradients, no grey tones." (Use for: Beardsley, Woodcuts, Line Art) |
| **face-logic-porcelain-shell**   | "The face is a hard, polished ceramic object. Highlights must be sharp and specular (like glass), not soft (like skin). No subsurface scattering." (Use for: Dupas, Art Deco, Neoclassical) |
| **face-logic-carved-wood**       | "The face has physical grain and chisel marks. It is subtractive sculpture, not additive painting. Planes are angular and rough." (Use for: Expressionism, Primitivism, Totems) |
| **face-logic-ink-symbol**        | "Features are reduced to calligraphy. Eyes are dots, mouths are dashes, eyebrows are single strokes. No anatomical structure allowed." (Use for: Ukiyo-e, Minimalism, Calligraphic styles) |
| **face-logic-flattened-map**     | "The face is a topographical map of color zones. No 3D modeling. Shadows are painted shapes, not gradients." (Use for: Fauvism, Pop Art, Screenprint) |
| **face-logic-structural-planes** | "The face is built of hard geometric facets. No curves, only angles and planes." (Use for: Cubism, Brutalism, Low-Poly) |
| **face-logic-dissolving-form**   | "The face is actively disintegrating into the background texture/pattern. Edges are lost; features merge with the environment." (Use for: Symbolism, Impressionism) |

------



# 20. Visceral Physics Flags (The "Anti-Filter" Layer)



These flags replace abstract technical terms (`impasto`) with **Sensory Action** terms that the reasoning model can "feel."

YAML

```
visceral_physics_flags:
  - physics-tactile-drag
  - physics-liquid-bleed
  - physics-dry-friction
  - physics-optical-bloom
  - physics-chemical-burn
  - physics-layer-separation
  - physics-granular-tooth
  - physics-impact-splatter
  - physics-gilded-seam
```



### Usage Definitions



| **Flag**                     | **Sensory Instruction**                                      |
| ---------------------------- | ------------------------------------------------------------ |
| **physics-tactile-drag**     | "Simulate the resistance of a stiff brush dragging through thick, sticky paint. Ridges must cast micro-shadows. The paint has physical height." |
| **physics-liquid-bleed**     | "Simulate unpredictable water physics. Pigment must spread uncontrollably into wet areas and stop hard at dry edges (Capillary Action)." |
| **physics-dry-friction**     | "Simulate charcoal dragging on rough paper. The line must break, skip, and fade where it hits the peaks of the paper tooth." |
| **physics-optical-bloom**    | "Simulate light scattering inside a dirty or unocated lens. Highlights must bleed over dark edges (Halation). Blacks are lifted." |
| **physics-layer-separation** | "Simulate the gap between the glass and the backing (in photography/cel art). Shadows must float slightly off the background, creating parallax." |
| **physics-gilded-seam**      | "Simulate the physical edges of metal leaf sheets. Visible square seams where gold/silver leaf overlaps. Cracks revealing bole clay underneath." |
| **physics-chemical-burn**    | "Simulate the degradation of film emulsion or paper. Acid burn, discoloration, and uneven development spots." |

------



# 21. Temporal Substitution Flags (The "Time Travel" Layer)



These flags guide the **Substitution Dictionary** logic to prevent anachronisms before they happen.

YAML

```
temporal_substitution_flags:
  - subst-tech-to-magic
  - subst-tech-to-analog
  - subst-fashion-to-period
  - subst-infrastructure-to-nature
  - subst-plastic-to-wood
  - subst-electric-to-flame
```



### Usage Definitions



| **Flag**                           | **Substitution Logic**                                       |
| ---------------------------------- | ------------------------------------------------------------ |
| **subst-tech-to-magic**            | "If Genre = Fantasy: Swap Phones/Tablets for Crystals, Scrolls, Orbs, or Glowing Runes." |
| **subst-tech-to-analog**           | "If Genre = Historical: Swap Phones for Letters, Hand Mirrors, Slate Boards, or Books." |
| **subst-fashion-to-period**        | "Aggressively re-clothe the subject. No modern fabrics (polyester/denim/spandex). Use Wool, Silk, Linen, Velvet, Brocade." |
| **subst-infrastructure-to-nature** | "Remove concrete, asphalt, and power lines. Replace with dirt paths, cobblestone, trees, or period architecture." |
| **subst-electric-to-flame**        | "Replace neon/LEDs/Bulbs with Candlelight, Gas Lamps, Fireplaces, or Bioluminescence." |

------



## Integration Guide: How to use these in Framework v5.2



**In Section 1 (Core Identity):**

> "Active Cognitive Flags: `logic-prioritize-medium-over-likeness`, `logic-inhibit-face-protection`."

**In Section 2 (Material Physics):**

> "Physics Engine: `physics-tactile-drag`, `physics-dry-friction`."

**In Section 3 (Historical Context):**

> "Substitution Logic: `subst-tech-to-analog`, `subst-fashion-to-period`."

**In Section 4 (Technical Method):**

> "Face Construction: `face-logic-paper-mask`."

