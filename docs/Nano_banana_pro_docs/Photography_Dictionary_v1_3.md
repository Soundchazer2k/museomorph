---
title: "MuseoMorph Photography Dictionary v1.3 — Nano-Native Expansion"
version: "1.3"
status: "Reasoning Logic Add-on"
purpose: "Defines 'Cognitive Photography Flags' to control Chain-of-Thought processing. Adds visceral physics to break digital cleanliness."
date: "2025-11-29"
license: "CC-BY-SA-4.0"
---

# MuseoMorph Photography Dictionary v1.3 — Nano-Native Expansion

## 🧩 Overview

This dictionary extends **MuseoMorph Universal Flag Dictionary v2.3** with comprehensive photography-specific technical vocabulary, including integrated body posing parameters for portrait and fashion photography. Photography operates under different optical, chemical, and anatomical principles than painting/drawing mediums—film stocks, lens optics, sensor behavior, strobe architecture, printing processes, and human body positioning require systematic flag taxonomy.

**Integration Strategy:**

- Flags that overlap with painting (lighting concepts, composition, palette) are referenced to Universal Dictionary (v2.1)
- New sections address photography-unique elements: Film/Sensor, Optics, Strobe Architecture, Retouching Degree, Print Output
- **NEW in v1.1:** Body Posing & Anatomical Specifications section (Section 8A) provides quantifiable parameters for pose family classification, anatomical angles, temporal anachronism detection, and psychological state encoding
- Agnostic structure enables selection from any section during corpus analysis—no photographer assumptions

**Scope Definition:**
This v1.1 focuses on **portrait, fashion, and fine art photography** while remaining agnostic to specific photographers. Documentary, landscape, and still-life genres are noted but reserved for v1.2+ expansion. Posing parameters span historical eras (daguerreotype to contemporary digital) and psychological states (formal authority to candid authenticity).

**Key Differences from v1.0:**
- Removed Section 10 (Quick Reference: Photographers & Expected Flag Profiles) for true agnostic reference capability
- Added NEW Section 8A (Body Posing & Anatomical Specifications) with 200+ quantifiable parameters
- Updated Section 9 (Integration with Universal Dictionary) to address pose-lighting-optics interaction
- Updated Section 10 (How to Use This Dictionary) with pose integration workflow
- Reorganized future expansion (Section 11) to include genre-specific posing specifications

---

## 1. Film Stock Signatures

**Definition:** Characteristic rendering of color, tonal range, grain, and exposure latitude specific to chemical film emulsion type.

```yaml
film_stock_flags:
  - kodak_portra_warm_forgiving
  - kodak_tri_x_400_contrasty_grain
  - fuji_velvia_saturated_landscape
  - kodak_ektachrome_slide_punch
  - fuji_provia_neutral_accurate
  - kodak_ektar_vivid_negative
  - fuji_c200_affordable_clean
  - polaroid_dye_diffusion_instant
```

### Technical Specifications

| Flag | Film Type | ISO | Grain Character | Color Rendering | Key Characteristic |
|------|-----------|-----|-----------------|-----------------|-------------------|
| **kodak_portra_warm_forgiving** | Color negative | 160/400/800 | Fine, forgiving grain | Warm skin tones, muted pastels | Default for portrait photography; renders flesh beautifully; best latitude for overexposure |
| **kodak_tri_x_400_contrasty_grain** | B&W negative | 400 | Cubic grain, ~punchy | N/A (monochrome) | Vintage aesthetic, high contrast; beloved by documentary/portrait photographers since 1954; organic appearance |
| **fuji_velvia_saturated_landscape** | Color slide (E6) | 50/100 | Extremely fine grain | Hyper-saturated, deep blues/greens | NOT recommended for portraits (oversaturates skin); ideal for landscape; in-camera saturation boost |
| **kodak_ektachrome_slide_punch** | Color slide (E6) | 100 | Very fine grain | Warm, balanced color; cool shadows | Medium film characteristics; excellent for both landscape and portraiture; recently reintroduced |
| **fuji_provia_neutral_accurate** | Color slide (E6) | 100/400 | Very fine grain | Most accurate color reproduction | Superior color fidelity to original scene; minimal reciprocity failure; archival quality |
| **kodak_ektar_vivid_negative** | Color negative | 100 | Fine grain, sharp | Vivid, saturated colors; fine detail | Replacement for Ektachrome after discontinuation; comparable fine grain to slide film |
| **fuji_c200_affordable_clean** | Color negative | 200 | Fine, clean grain | Warm cast, slightly cool shadows | Budget option; surprisingly clean; green tint characteristic of Fuji; excellent underexposure latitude |

### Application in Photography Frameworks

When analyzing a photographer's corpus:
- **Does the work have warm, forgiving skin tones with minimal grain in shadows?** → Flag `kodak_portra_warm_forgiving`
- **Is there visible, tangible grain with high contrast and edge-pop?** → Flag `kodak_tri_x_400_contrasty_grain`
- **Are saturated colors punchy, especially blues/greens disproportionately bright?** → Flag `fuji_velvia_saturated_landscape` (and note if portraits appear oversaturated—potential issue)
- **Is monochrome work exhibit fine detail with soft blacks and excellent tonal separation?** → Likely `fuji_provia_neutral_accurate` or `kodak_ektachrome_slide_punch` (if color slide original)

---

## 2. Lens Optics & Rendering

**Definition:** Optical properties of the lens system that determine depth of field, bokeh character, perspective compression, and focal plane behavior.

```yaml
optics_flags:
  - focal_length_wide_35mm_distortion
  - focal_length_standard_50mm_natural
  - focal_length_short_telephoto_85mm_compression
  - focal_length_long_telephoto_135mm_plus_extreme_compression
  - aperture_shallow_f1_2_f2_extreme_bokeh
  - aperture_moderate_f2_8_f4_selective_focus
  - aperture_deep_f5_6_f8_plus_landscape_depth
  - bokeh_soft_undercorrected_spherical_aberration
  - bokeh_hard_overcorrected_clinical
  - bokeh_creamy_modern_lens_correction
  - depth_of_field_razor_thin_macro_isolation
  - depth_of_field_moderate_portrait_separation
  - depth_of_field_extensive_landscape_infinity
  - spherical_aberration_undercorrected_glow
  - spherical_aberration_overcorrected_contrast
  - field_curvature_visible_edge_softness
```

### Technical Principles

#### Focal Length & Perspective
- **35mm (wide):** ~63° field of view; perspective distortion noticeable; subjects closer to camera appear larger; separation from background minimal
- **50mm (standard):** ~46° field of view; "natural" perspective matching human vision; minimal compression or distortion
- **85mm (short telephoto):** ~28° field of view; mild background compression; subjects appear pulled toward camera; flattering for portraits (1:1 head-to-body ratio realistic)
- **135mm+ (long telephoto):** ~18° field of view or less; extreme compression; background flattened dramatically; distant subjects appear close; classic for isolated portraits

**Flag Application:**
- If background elements appear pulled forward, background-to-subject relationship compressed → `focal_length_short_telephoto_85mm_compression` or `focal_length_long_telephoto_135mm_plus_extreme_compression`
- If perspective feels "natural" with minimal background separation → `focal_length_standard_50mm_natural`
- If wide elements at frame edges show distortion or expansion → `focal_length_wide_35mm_distortion`

#### Aperture & Depth of Field
- **f/1.2–f/2:** Razor-thin focal plane; subject isolated; background heavily blurred; significant bokeh rendering
- **f/2.8–f/4:** Moderate shallow DOF; subject separated from background; foreground/background retain some detail; balance between isolation and context
- **f/5.6–f/8:** Deeper DOF; significant foreground and background detail retained; "landscape mode"
- **f/16+:** Extreme depth; everything in focus from near to infinity

#### Bokeh Character (Out-of-Focus Rendering)
**Soft Bokeh (Undercorrected Spherical Aberration):**
- Blur circles have dim edges, soft halos
- Light highlights appear larger, less defined
- Creates "dreamy," painterly quality
- Associated with vintage lenses, soft-focus design

**Hard Bokeh (Overcorrected):**
- Blur circles have sharp, defined edges
- Polygonal bokeh visible if fewer aperture blades
- Clinical, modern look
- Associated with contemporary lens design

**Creamy Bokeh (Modern Balanced):**
- Evenly illuminated blur circles
- Smooth transition between focused and out-of-focus areas
- Neither too soft nor too clinical
- Associated with professional portrait lenses (85mm f/1.4, 50mm f/1.2)

**Flag Application:**
- If backgrounds blur smoothly with soft halos → `bokeh_soft_undercorrected_spherical_aberration`
- If backgrounds have clinical, precise blur with distinct edges → `bokeh_hard_overcorrected_clinical`
- If bokeh is balanced and appealing → `bokeh_creamy_modern_lens_correction`

#### Spherical Aberration & Field Curvature
- **Undercorrected spherical aberration:** Light gathers toward center of blur circle; creates glow; flatters skin; reduces perceived detail; vintage aesthetic
- **Overcorrected spherical aberration:** Light concentrates at edges of blur circle; increases contrast; emphasizes texture; modern clinical look
- **Field curvature:** Focal plane bends; edges go soft while center stays sharp (or vice versa); noticeable in wide-angle lenses; can be aesthetic or problematic

---

## 3. Sensor & Film Behavior

**Definition:** Technical characteristics of how light is captured and recorded by either digital sensor or chemical film emulsion.

```yaml
sensor_film_flags:
  - dynamic_range_film_negative_11_stops
  - dynamic_range_film_slide_5_stops
  - dynamic_range_digital_14_stops_modern
  - exposure_latitude_film_generous_underexposure
  - exposure_latitude_film_generous_overexposure
  - exposure_latitude_digital_limited_highlights
  - iso_equivalence_film_fixed_per_roll
  - iso_equivalence_digital_adjustable_per_frame
  - grain_film_luminance_monochromatic_organic
  - noise_digital_chroma_color_distortion
  - noise_digital_luma_brightness_only
  - reciprocity_failure_film_long_exposure
  - highlight_rolloff_film_nonlinear_soft
  - highlight_clipping_digital_hard_wall
  - shadow_recovery_digital_superior_to_film
  - shadow_detail_film_superior_to_digital
```

### Technical Specifications

| Flag | Medium | Characteristic | Implication for Photography |
|------|--------|-----------------|---------------------------|
| **dynamic_range_film_negative_11_stops** | Color negative film | Captures ~11 stops of usable tonal range | Excellent shadow and highlight retention; forgiving exposure errors; can overexpose significantly |
| **dynamic_range_film_slide_5_stops** | Color slide film | Captures ~5 stops of usable tonal range | Strict exposure requirements; minimal latitude; must expose for highlights; useful for high-contrast scenes |
| **dynamic_range_digital_14_stops_modern** | Modern digital sensor (FF) | Captures ~14 stops of usable tonal range | Superior to film negative; requires careful highlight management; excellent shadow detail recovery |
| **exposure_latitude_film_generous_underexposure** | Film (especially negative) | Tolerates underexposure well (−5 to −8 stops possible) | Can shoot in low light; shadows retain surprising detail; grain increases with push processing |
| **exposure_latitude_film_generous_overexposure** | Film (especially negative) | Tolerates overexposure extremely well (+8 to +10 stops possible) | Highlights degrade gracefully (non-linear response); aesthetic flattening at extreme overexposure; soft, subtle tonality |
| **exposure_latitude_digital_limited_highlights** | Digital sensor | Tolerates overexposure minimally (+1 to +2 stops usable) | Highlights clip hard; no recovery after saturation; expose-for-highlights technique mandatory |
| **iso_equivalence_film_fixed_per_roll** | Film | ISO set by film stock choice; entire roll same sensitivity | Must choose film before shooting; cannot adjust per-frame; limited flexibility; complete predictability |
| **iso_equivalence_digital_adjustable_per_frame** | Digital | ISO adjustable per frame or even per burst | Maximum flexibility; can shoot same scene at different ISOs; introduces noise at high ISO instead of grain |
| **grain_film_luminance_monochromatic_organic** | Film grain | Grain is primarily tonal (brightness) variation; color-neutral | Grain appears organic, textured; does not introduce color distortion; aesthetically pleasing at higher speeds |
| **noise_digital_chroma_color_distortion** | Digital noise | Noise includes color component; distorted RGB channels | Colored artifacts in shadows; most objectionable to viewers; blue channel typically noisiest; worse than film grain aesthetically |
| **noise_digital_luma_brightness_only** | Digital noise | Noise is primarily brightness variation only | Less objectionable than chroma noise; closer to film grain aesthetically; better controlled via algorithm |
| **reciprocity_failure_film_long_exposure** | Film (long exposure) | Extended exposure times cause non-linear response | Color shifts during 10+ second exposures; predictable but variable by film stock; can be aesthetic |
| **highlight_rolloff_film_nonlinear_soft** | Film highlights | Highlights degrade gracefully above saturation point | Overexposed areas retain color/detail; soft, subtle tonality; aesthetic flattening; no hard clipping |
| **highlight_clipping_digital_hard_wall** | Digital highlights | Highlights clip instantly at saturation; no recovery | No detail in blown areas; harsh white; must expose carefully to preserve highlight detail |
| **shadow_recovery_digital_superior_to_film** | Digital shadows | Raw files allow 3–6 stops of shadow detail recovery | Underexposed images recoverable in post-processing; brightening reveals surprising detail; noise increases with recovery |
| **shadow_detail_film_superior_to_digital** | Film shadows | Maintains organic detail in deep shadows without excessive noise | Long-exposure night photography superior on film; shadows retain character; less electronic noise in darkness |

### Application Notes

**For Steichen/Leibovitz/de Meyer Analysis:**
- All three used **film** (either B&W or color negative/slide)
- Expected flags: generous latitude for both overexposure and underexposure recovery
- Film stock signatures critical: Steichen likely Tri-X or similar; Leibovitz uses Portra; de Meyer likely platinum prints (handcoated emulsion, different dynamic range calculation)

**For LaChapelle Analysis:**
- Transitioned from **large-format film** (Linhof, Sinar) to **high-resolution digital** (Phase One medium format)
- Early work: likely Fuji Velvia or Kodak Ektachrome (hyper-saturation evident in final images)
- Later work: digital with extreme post-production color grading (saturation boosted further in software)

---

## 4. Strobe Lighting Architecture

**Definition:** Artificial flash lighting system characteristics, including power ratios, modifier types, positioning patterns, and catchlight signatures.

```yaml
strobe_flags:
  - strobe_key_fill_2_1_ratio_moderate_contrast
  - strobe_key_fill_3_1_ratio_dramatic_contrast
  - strobe_key_fill_4_1_ratio_extreme_contrast
  - strobe_key_fill_1_1_ratio_flat_even
  - modifier_softbox_soft_diffuse_light
  - modifier_beauty_dish_punchy_wrap
  - modifier_reflector_metal_hard_specular
  - modifier_umbrella_broad_soft_spread
  - modifier_grid_focused_tight_control
  - catchlight_dual_reflection_artificial_sources
  - catchlight_single_natural_window
  - catchlight_absent_fill_light_required
  - rim_light_hair_light_separation_glow
  - rim_light_absent_flat_against_background
  - backlight_luminous_halo_separation
  - lighting_pattern_rembrandt_triangle_shadow
  - lighting_pattern_butterfly_center_nose_shadow
  - lighting_pattern_loop_small_asymmetric_shadow
  - lighting_pattern_split_50_50_dramatic
  - lighting_pattern_broad_fill_side_illuminated
  - lighting_pattern_short_shadow_side_illuminated
```

### Technical Specifications

#### Lighting Ratios (Key:Fill)
| Ratio | Contrast Level | Shadow Detail | Applications | Example Settings |
|-------|-----------------|----------------|--------------|-------------------|
| 1:1 | Flat, minimal contrast | Shadows well-lit, minimal modeling | Beauty/glamour photography; minimizes texture | Key at f/8; Fill at f/8 |
| 2:1 | Slight modeling | Shadows defined but detailed | Fashion/commercial; professional standard | Key at f/8; Fill at f/5.6 |
| 3:1 | Moderate drama | Shadows darker but retain detail | Portrait/editorial; classical Rembrandt | Key at f/8; Fill at f/4 |
| 4:1 | High drama | Shadows significantly darker; less detail | Dramatic/artistic portraits; moody | Key at f/8; Fill at f/2.8 |
| 5:1+ | Extreme drama | Shadows deep; minimal detail recovery | Theatrical/stylized work; high-impact | Key at f/8; Fill at f/2 or reflector only |

**Flag Application:**
- If shadows are almost completely dark with minimal highlight-to-shadow transition → `strobe_key_fill_4_1_ratio_extreme_contrast` or higher
- If shadows have good detail visible → `strobe_key_fill_2_1_ratio_moderate_contrast`
- If face appears evenly lit with no shadow modeling → `strobe_key_fill_1_1_ratio_flat_even`

#### Modifiers & Characteristics

| Modifier | Light Quality | Output | Best For | Catchlight Pattern |
|----------|----------------|--------|----------|-------------------|
| **Softbox (strip, octagonal, rectangular)** | Soft, diffuse, directional | Even, shadowless on subject | Flattering for faces; window-like light | Rectangular (strip) or octagonal (round) shape in eyes |
| **Beauty Dish** | Punchy, wrap-around; semi-hard | Directional but with soft edge; bright midtones | Fashion/beauty; flattering with punch | Medium-sized disc |
| **Reflector (silver metal)** | Hard, specular, bright | High contrast; crisp shadows | Dramatic portraits; newspaper-style; fill from natural light | Very small, hard-edged disc |
| **Umbrella (white/silver)** | Broad, soft, low-contrast | Very even, spill everywhere | Full-group shots; broad coverage | Broad, diffuse umbrella shape |
| **Grid (on reflector)** | Focused, tight, controlled | Narrow beam; high intensity; minimal spill | Accent lights (rim, hair, background); precise control | Small, focused disc |

**Flag Application:**
- If catchlight is rectangular or strip-shaped → `modifier_softbox_soft_diffuse_light`
- If catchlight appears as medium disc with punchy midtones → `modifier_beauty_dish_punchy_wrap`
- If catchlight is small, hard-edged, bright spot → `modifier_reflector_metal_hard_specular`

#### Dual Catchlights (Artificial Lighting Signature)
**Flag:** `catchlight_dual_reflection_artificial_sources`

Artificial strobe setups often produce **two specular highlights** in the eyes from:
1. **Key light** (primary): larger, brighter
2. **Fill light** (secondary): smaller, dimmer, on opposite side

This creates signature artificial lighting; contrasts with **single natural catchlight** from window light.

**Application:**
- If both eyes show two distinct bright spots (key + fill) → Flag `catchlight_dual_reflection_artificial_sources`
- If only one catchlight per eye visible → Flag `catchlight_single_natural_window` or insufficient fill light

#### Lighting Patterns (Classical Studio Setups)

| Pattern | Description | Effect | Classical Association |
|---------|-------------|--------|----------------------|
| **Rembrandt** | Light at 45°, slightly above eye level; nose shadow meets cheek shadow forming triangle below eye | Dimensional, flattering, dramatic | 17th-century Dutch painter technique; universal portrait standard |
| **Butterfly** | Light directly in front, slightly above; shadow under nose | Glamorous, shadow-free cheeks | 1940s-50s Hollywood beauty photography |
| **Loop** | Light at 30-45°; nose shadow small, not touching cheek shadow | Flattering, minimal drama | Most versatile; works on most face shapes |
| **Split** | Light at 90°; one half of face in shadow, one in light | Extreme drama, high-fashion | Avant-garde editorial; emphasizes bone structure |
| **Broad** | Key light illuminates side of face closest to camera | Open, bright, low-drama | Commercial/corporate; flattering for group shots |
| **Short** | Key light illuminates shadow side of face | Dramatic, sculptural | Fashion photography; emphasizes masculine features |

---

## 5. Retouching & Post-Production Degree

**Definition:** Extent and philosophy of digital or analog manipulation applied to achieve final image aesthetic.

```yaml
retouching_flags:
  - retouch_minimal_documentary_integrity
  - retouch_light_blemish_removal_natural
  - retouch_moderate_skin_smoothing_subtle
  - retouch_aggressive_airbrushing_perfected
  - retouch_extreme_compositing_surreal
  - process_dodgeburn_selective_toning_analog
  - process_negative_retouching_pencil_brush
  - process_digital_clone_stamp_removal
  - process_digital_frequency_separation_skin
  - process_digital_color_grading_hyper_real
  - process_digital_compositing_multi_frame
  - process_cross_processing_intentional_color_shift
```

### Retouching Philosophy Spectrum

| Philosophy | Extent | Observable Characteristics | Artist Examples |
|-----------|--------|--------------------------|-----------------|
| **Minimal (Documentary Integrity)** | Essentially untouched or dust/hair removal only | Visible texture, blemishes, age markers; natural appearance; grain visible | Cartier-Bresson, Robert Capa (photojournalism) |
| **Light (Blemish Removal, Natural)** | Remove obvious flaws; preserve texture; maintain authenticity | Skin reads natural; fine lines visible; minor imperfections removed; character retained | Edward Steichen (early work); modern editorial photographers |
| **Moderate (Skin Smoothing, Subtle)** | Smooth skin without artificiality; retain texture; selective dodge/burn | Skin appears refined but not plastic; wrinkles softened but visible; natural light modeling preserved | Annie Leibovitz (commercial work); fashion photographers |
| **Aggressive (Airbrushing, Perfected)** | Extensive smoothing; flawless skin; idealized features; still photographic | Skin appears flawless, almost porcelain; all blemishes removed; no visible pores; hyper-polished | David LaChapelle (early celebrity work); high-fashion beauty |
| **Extreme (Compositing, Surreal)** | Multi-frame blending; impossible perspectives; extensive digital painting; reality exceeded | Composite elements visible; surreal or theatrical elements; reality transcended; clearly manipulated | David LaChapelle (fine art); conceptual artists |

**Flag Application (Degree Scale):**
- **Minimal:** Visible texture throughout; skin reads authentic; → `retouch_minimal_documentary_integrity`
- **Light:** Minor flaws removed; character preserved; natural modeling → `retouch_light_blemish_removal_natural`
- **Moderate:** Skin refined; wrinkles softened; texture reduced but visible → `retouch_moderate_skin_smoothing_subtle`
- **Aggressive:** Flawless skin; no pores visible; porcelain-like finish → `retouch_aggressive_airbrushing_perfected`
- **Extreme:** Composite elements; impossible geometry; clearly manipulated → `retouch_extreme_compositing_surreal`

### Analog Retouching Techniques

| Technique | Medium | Observable Effect | Artist Association |
|-----------|--------|------------------|-------------------|
| **Dodge & Burn** | Darkroom; selective light exposure | Lighter and darker areas in print; soft transitions; tonal shaping; visible in texture | Ansel Adams (landscape); Edward Steichen (late prints) |
| **Negative Retouching (Pencil/Dye)** | Pencil or photographic dye applied directly to negative | Smooth skin, sharp lines removed; lighter areas (pencil lightens); denser areas (dye darkens) | Baron de Meyer (negative hand-retouching); early portrait photographers |
| **Airbrush** | Airbrush on print or negative | Extremely smooth finish; no visible brushstrokes; gradual tonal transitions; plastic appearance if overdone | High-fashion photographers (1980s-90s) |

### Digital Retouching Techniques

| Technique | Application | Observable Effect | Modern Use |
|-----------|-------------|-------------------|-----------|
| **Clone Stamp** | Remove objects, blemishes, unwanted elements | Clean removal; requires careful blending; can appear artificial if obvious | Basic blemish removal; landscape cleanup |
| **Frequency Separation** | Isolate texture (low frequency) from color (high frequency); retouch separately | Smooth skin without losing texture; natural appearance; professional result | Fashion/beauty photography standard |
| **Color Grading** | Adjust RGB channels; apply curves; color casting | Shifted tones; stylized color palette; emotional atmosphere; hyperreal saturation possible | Fashion photography; fine art printing; LaChapelle signature technique |
| **Compositing (Multi-Frame)** | Blend multiple exposures or layers; add/remove elements | Impossible perspectives; surreal imagery; perfect exposure across entire frame; clearly manipulated if obvious | Fine art photography; conceptual work; LaChapelle |
| **Cross-Processing (Intentional)** | Process film in wrong chemicals; or simulate digitally | Color shifts (typically blue/magenta in shadows); green/cyan cast; surreal color palette; vintage aesthetic | Fashion photography (1990s-2000s); artistic intent |

---

## 6. Print & Presentation Output

**Definition:** Physical manifestation of photographic image via printing process and mounting/presentation method.

```yaml
print_flags:
  - print_platinum_palladium_archival_noble_metal
  - print_gelatin_silver_fb_baryta_traditional
  - print_cibachrome_ilfochrome_saturated_dyes
  - print_c_print_chromogenic_color_standard
  - print_digital_c_print_lightjet_laser_exposed
  - print_archival_pigment_inkjet_modern
  - print_dye_transfer_precise_color_matrix
  - mount_fiber_based_paper_tactile
  - mount_resin_coated_plastic_glossy
  - mount_acrylic_diasec_face_mounted_dimensionality
  - mount_metallic_paper_specular_reflection
  - size_8x10_large_format_detail
  - size_16x20_monumental_impact
  - size_mural_60_plus_immersive_scale
  - surface_matte_subtle_no_glare
  - surface_glossy_saturated_reflective
  - surface_silk_satin_balance_sheen
```

### Printing Processes & Archival Characteristics

| Process | Base Material | Archival Longevity | Visual Character | Cost | Best For |
|---------|---------------|--------------------|------------------|------|----------|
| **Platinum/Palladium (hand-coated)** | 100% cotton rag | 1000+ years; chemically inert noble metal | Matte surface; subtle tonal range; luminous depth; warm/cool tones adjustable by chemistry | $$ (moderate-high; artisanal) | Fine art; museum-grade; permanent collections |
| **Gelatin Silver (fiber-based)** | Fiber-based paper with gelatin emulsion | 60-100+ years with proper storage | Matte or glossy; rich tonal range; deep blacks; traditional darkroom aesthetic | $ (moderate) | B&W fine art; traditional photography; darkroom work |
| **Cibachrome (Ilfochrome)** | Polyester base; dyes in emulsion | 60-80 years (excellent for color) | Ultra-saturated colors; rich blacks; high contrast; glossy surface; dramatic appearance | $$ (moderate-high) | Color fine art; saturated aesthetic desired; vintage aesthetic |
| **C-Print (Chromogenic)** | Resin-coated (RC) or fiber-based paper; silver dyes | 40-60 years typical; digital C-print (Lightjet) longer | Continuous tone; smooth color gradation; natural appearance; versatile | $ (low-moderate) | Commercial photography; fashion; weddings; standard color output |
| **Digital C-Print (Lightjet/Lambda)** | RC or fiber paper exposed by laser | 60-80 years; superior to traditional C-print | Photographic quality; continuous tone; true blacks; archival-grade papers available | $ (moderate) | Commercial; fine art color; museum exhibition (if archival base used) |
| **Archival Pigment (Inkjet)** | Cotton rag or clay-base paper with pigmented inks | 200+ years with archival pigment; museum-grade | Matte or glossy depending on paper; smooth gradation; consistent color; flexible toning | $$ (moderate-high) | Fine art color; museum acquisition; unlimited edition control |
| **Dye Transfer** | Gelatin relief matrix; dyes transferred to paper | 80+ years; historically stable; limited by dye stability | Precise, saturated color; rich blacks; matte finish; handcrafted character | $$$ (very high; rarely done today) | Archival color reproduction; museum; historically accurate color |

### Mounting & Presentation Methods

| Method | Material | Visual Effect | Archival | Applications |
|--------|----------|---------------|----------|--------------|
| **Fiber-Based Paper** | Thick cotton rag stock | Tactile, heirloom quality; texture visible; matte surface | Archival; naturally acid-free | Fine art; museum; gallery work |
| **Resin-Coated (RC)** | Plastic-coated base | Glossy, smooth; color vibrant; lightweight | Moderate archival; plastic can yellow over time | Commercial; quick production; economical |
| **Acrylic Face-Mounted (Diasec)** | Clear acrylic sheet adhered to print front | Extreme saturation; dimensionality; reflective; museum-grade display | Archival; requires UV-protective glass | Contemporary fine art; high-impact color; museum exhibition |
| **Metallic Paper** | Special paper with metallic particles | Specular, reflective surface; dramatic color pop; contemporary aesthetic | Moderate-good; depends on paper base | Fashion; contemporary art; galleries |
| **Mounting Board** | Archival matting, museum-quality | Professional presentation; protective; reversible; allows for framing flexibility | Archival if acid-free, lignin-free board used | Gallery; permanent collections; exhibition standard |

### Application to Framework Analysis

**For Baron de Meyer:**
- Expected: **Platinum prints** (primary); **silver gelatin (toned)** (secondary)
- Flags: `print_platinum_palladium_archival_noble_metal`, `surface_matte_subtle_no_glare`
- Observable: Matte surface, subtle tonal range, hand-coated variation per print

**For Annie Leibovitz:**
- Expected: **Archival pigment inkjet** (modern work); **C-print** (commercial/editorial)
- Flags: `print_archival_pigment_inkjet_modern`, `mount_acrylic_diasec_face_mounted_dimensionality`
- Observable: Saturated color (if face-mounted acrylic), large-scale monumental prints

**For David LaChapelle:**
- Expected: **C-print or digital C-print** (celebrity work); **Archival pigment** (fine art)
- Flags: `print_digital_c_print_lightjet_laser_exposed`, `mount_acrylic_diasec_face_mounted_dimensionality`
- Observable: Hyper-saturated colors (acrylic face-mounted enhances saturation further), monumental scale

---

## 7. Color Grading & Post-Production Palette

**Definition:** Intentional color shifts, saturation adjustments, and tonal grading applied in darkroom or digital post-processing.

```yaml
color_grading_flags:
  - grading_film_stock_signature_inherent
  - grading_cross_processing_surreal_shift
  - grading_toning_sepia_selenium_warmth
  - grading_desaturation_cool_film_noir
  - grading_hyperreal_saturation_boosted
  - grading_split_toning_cool_shadows_warm_highlights
  - grading_color_cast_intentional_monochromatic_overlay
  - grading_luminance_compression_lifted_blacks
  - grading_contrast_inversion_s_curve_dramatic
```

### Post-Production Color Strategies

| Grading Type | Technique | Observable Effect | Psychological Impact |
|--------------|-----------|-------------------|----------------------|
| **Film Stock Inherent** | Choice of emulsion determines color rendering; chemistry in developer affects tone | Portra = warm, forgiving; Velvia = saturated; Provia = neutral; built-in aesthetic | Authentic period aesthetic; medium-specific character |
| **Cross-Processing** | Process E6 (slide) film in C41 (color neg) chemistry; or digital simulation | Blue/magenta shadows; cyan/green highlights; surreal, vintage color shifts; desaturated midtones | Nostalgic, artistic, fashion-forward (1990s-2000s) |
| **Toning (Sepia/Selenium)** | Chemical treatment of silver gelatin print; alters silver metal oxidation | Sepia = warm brown; Selenium = cool purples/maroons in shadows, warmer highlights; handcrafted character | Vintage, romantic, fine art aesthetic; archival improvement |
| **Desaturation (Film Noir)** | Reduce saturation; increase contrast; shift toward cool tones | Muted, cool color palette; high contrast blacks and whites; minimal color information | Moody, dramatic, artistic, mysterious |
| **Hyperreal Saturation** | Boost all color channels; increase chroma beyond natural | Vivid, almost unnatural color; LaChapelle signature; "painted" appearance | Contemporary, high-impact, fashion-forward |
| **Split Toning** | Warm tones in highlights, cool in shadows (or vice versa) | Dimensional color rendering; psychological separation of light/dark; sophisticated palette | Artistic, contemporary, gallery-quality |
| **Luminance Compression** | Lift blacks (raise floor of tonal range); compress highlights | Hazy, ethereal appearance; reduced contrast; faded look; dreamy | Romantic, nostalgic, soft-focus aesthetic |
| **Contrast Curve (S-Curve)** | Darken shadows while brightening highlights; increase midtone contrast | Punchy, dramatic image; increased visual impact; cinematic look | Dynamic, contemporary, high-impact |

---

## 8. Genre-Specific Flag Expectations

### Portrait Photography (Studio-Controlled)

**Typical Flags:**
- **Lighting:** `strobe_key_fill_2_1_ratio_moderate_contrast` to `3_1_ratio_dramatic_contrast`
- **Modifiers:** `modifier_softbox_soft_diffuse_light` or `modifier_beauty_dish_punchy_wrap`
- **Patterns:** `lighting_pattern_rembrandt_triangle_shadow` or `lighting_pattern_butterfly_center_nose_shadow`
- **Retouching:** `retouch_moderate_skin_smoothing_subtle` to `retouch_aggressive_airbrushing_perfected`
- **Film Stock:** `kodak_portra_warm_forgiving` (forgiving flesh tones priority)
- **Optics:** `focal_length_short_telephoto_85mm_compression` (flattering perspective)
- **Output:** `print_archival_pigment_inkjet_modern` or `print_gelatin_silver_fb_baryta_traditional`

**Conflicting Flags to AVOID:**
- `retouch_minimal_documentary_integrity` (portrait photography expects some retouching)
- `lighting_pattern_split_50_50_dramatic` (unless intentional artistic choice)
- `fuji_velvia_saturated_landscape` (oversaturates skin tones)

### Documentary/Photojournalism

**Typical Flags:**
- **Retouching:** `retouch_minimal_documentary_integrity` (ethical requirement)
- **Lighting:** Natural light priority; if strobe: `strobe_key_fill_1_1_ratio_flat_even` or minimal ratio (preserve authenticity)
- **Film Stock:** `kodak_tri_x_400_contrasty_grain` (B&W standard; neutral medium)
- **Dynamic Range:** `exposure_latitude_film_generous_underexposure` (forgiving for fast capture)
- **Output:** `print_gelatin_silver_fb_baryta_traditional` or `print_archival_pigment_inkjet_modern` (no extreme color grading)

**Conflicting Flags:**
- `retouch_extreme_compositing_surreal` (destroys editorial credibility)
- `process_digital_color_grading_hyper_real` (misrepresents reality)
- `grading_hyperreal_saturation_boosted` (unethical manipulation)

### Landscape Photography

**Typical Flags:**
- **Film Stock:** `fuji_velvia_saturated_landscape` (deep colors, fine grain)
- **Optics:** `focal_length_standard_50mm_natural` to `focal_length_wide_35mm_distortion` (context-inclusive framing)
- **Depth of Field:** `aperture_deep_f5_6_f8_plus_landscape_depth` (everything in focus)
- **Dynamic Range:** `dynamic_range_film_negative_11_stops` or `dynamic_range_digital_14_stops_modern` (preserve detail across tonal range)
- **Print Output:** `print_archival_pigment_inkjet_modern` on `mount_fiber_based_paper_tactile` (permanent collection-grade)

**Conflicting Flags:**
- `aperture_shallow_f1_2_f2_extreme_bokeh` (background blur unwanted)
- `strobe_key_fill_3_1_ratio_dramatic_contrast` (artificial lighting unnecessary/unwanted)
- `retouch_aggressive_airbrushing_perfected` (naturalness destroyed)

---

## 8A. Body Posing & Anatomical Specifications

**Definition:** Quantifiable parameters governing human body positioning, anatomical angles, spinal curves, joint flexion, weight distribution, and psychological state encoding through measurable postural elements. Integrated with temporal anachronism detection, lighting-dependent adaptations, and usage category specifications.

Photography's evolution from 15-60 second exposures (daguerreotype era) requiring rigid stillness to instantaneous digital capture enabling dynamic expression reveals **pose as technological artifact that became aesthetic choice**. This section translates 185 years of posing evolution into discrete, testable flags enabling period-accurate, anatomically precise, psychologically coherent portrait generation across any historical era.

### Core Principle: Exposure Time Determines Formality

**Foundational rule:** Longer exposures require more rigid, symmetrical poses. Shorter exposures (digital era) enable dynamic, asymmetrical poses.

- **10-60 second exposures (daguerreotype 1839-1860s):** Only poses sustainable for 30+ seconds viable; bilateral symmetry mandatory; metal head braces common (and visible); zero movement blur; no smiling (impossible to hold naturally); serious, solemn expression cultural standard
- **3-6 second exposures (wet plate collodion 1851-1880s):** Slight movement freedom; head braces optional; hands can move; expression still serious but less rigid
- **Sub-one-second exposures (dry plate gelatin 1890s+):** Complete movement freedom; studio vs. snapshot bifurcation emerges; formal convention persists despite technical capability (cultural lag)
- **Instantaneous digital (2000s-present):** Movement celebrated; imperfection authentic; candid appearance valued; symmetry abandoned

---

### 1. Pose Family Classification

```yaml
pose_family_flags:
  # Standing pose families
  - pose_standing_neutral_bilateral_symmetric
  - pose_contrapposto_classic_70_30_weight
  - pose_contrapposto_exaggerated_s_curve_dramatic
  - pose_power_stance_45_60cm_wide_square_shoulders
  - pose_power_stance_executive_arms_crossed
  - pose_power_stance_athletic_hands_on_hips
  - pose_universally_flattering_45_degree_angle
  
  # Seated pose families
  - pose_seated_formal_upright_85_90_spine_straight
  - pose_seated_casual_recline_100_120_angle_relaxed
  - pose_seated_perch_edge_contact_energetic
  - pose_seated_lean_forward_elbows_45_60_engaged
  
  # Dynamic pose families
  - pose_walking_stride_exaggerated_1_2_1_5x
  - pose_walking_casual_natural_gait
  - pose_walking_runway_straight_line_power
  - pose_walking_away_over_shoulder_glance
  - pose_reclining_horizontal_beauty_passive
  - pose_reclining_propped_elbows_engaged
  
  # Transitional/hybrid poses
  - pose_leaning_against_surface_casual_support
  - pose_kneeling_vulnerable_intimate_ground_contact
  - pose_floating_suspended_no_ground_contact
```

#### Standing Poses: Detailed Specifications

**pose_standing_neutral_bilateral_symmetric**
- **Weight Distribution:** 50/50 (equal on both legs)
- **Foot Position:** 30-45cm apart (narrow to shoulder-width), parallel or slight angle
- **Hip Angle:** 0-2° level, no tilt
- **Shoulder Angle:** 0-2° level, no rotation
- **Spine:** Neutral lordosis (natural curve), no exaggeration
- **Knees:** 175-180° straight but not hyperextended
- **Psychological Signal:** Neutral authority, approachable formality
- **Temporal Markers:** Minimal anachronism across eras; works 1890s-present; too rigid for pre-1890 daguerreotype
- **Usage Categories:** Corporate (conservative), Professional (neutral), Formal (baseline)
- **Lighting Dependency:** Frontal/flat lighting optimal; bilateral symmetry requires even illumination

**pose_contrapposto_classic_70_30_weight**
- **Weight Distribution:** 70% on back leg, 30% on front leg; shift is subtle, not exaggerated
- **Foot Position:** One foot forward (12-18 inches), one back; shoulder-width apart
- **Hip Angle:** 0-3° subtle tilt (lower on weight-bearing side)
- **Shoulder Angle:** Opposite rotation from hips (if right leg back, left shoulder forward; slight counter-rotation)
- **Spine:** Mild lumbar lordosis (40-50°)
- **Knees:** Back leg: 175-180° straight; front leg: 170-175° slight bend
- **Psychological Signal:** Classical confidence, approachable strength
- **Temporal Markers:** Optimal 1890s-present; pre-1890 daguerreotypes rarely show such subtlety (exposure limits)
- **Usage Categories:** Fashion (sophisticated), Editorial (timeless), Professional (classic authority)
- **Lighting Dependency:** 45° side key light emphasizes weight distribution; Rembrandt pattern flatters the back-weighted asymmetry
- **Variations:**
  - **Masculine rendering:** Shoulders further back, chest more pronounced, wider stance
  - **Feminine rendering:** More elongated front leg line, softer shoulder pull, subtler weight shift

**pose_power_stance_45_60cm_wide_square_shoulders**
- **Weight Distribution:** 50/50 or 55/45 (nearly equal, slight forward bias acceptable)
- **Foot Position:** 45-60cm apart (wider than shoulder-width), parallel or slight toe-out
- **Hip Angle:** 0-5° level or slight forward tilt
- **Shoulder Angle:** 0-2° level, squared directly toward camera
- **Spine:** Neutral to slight forward tilt (5-10°), chest projected forward
- **Knees:** 175-180° straight but unlocked
- **Arms:** Variations—crossed over chest, hands on hips, arms at sides with tension
- **Psychological Signal:** Confidence, authority, dominance, power
- **Temporal Markers:** Acceptable 1890s-present; power language crystallized by 1920s Hollywood; contemporary usage (corporate, political, social media empowerment posts)
- **Usage Categories:** Corporate (executive authority), Commercial (brand confidence), Social Media (empowerment messaging)
- **Lighting Dependency:** Frontal or slight side key; square shoulders require minimal shadow variation
- **Variations:**
  - **Executive Power:** Arms crossed, direct eye contact, formal attire
  - **Athletic Power:** Wider stance, hands on hips, dynamic confidence
  - **Casual Power:** One hand in pocket, slight weight shift, approachable strength

**pose_universally_flattering_45_degree_angle**
- **Body Rotation to Camera:** 40-50° angle (not fully profile, not square-on)
- **Head Turn Back Toward Lens:** 30-40° (looks more toward camera than body)
- **Front Shoulder Drop:** 5-10° lower than back shoulder (creates depth and dimension)
- **Weight Shift:** 60/40 to back leg (creates graceful line, reduces visual width 15-20%)
- **Hip Angle:** 5-10° turn matching body angle
- **Knee Flexion:** Back leg straight (175-180°), front leg slight bend (170-175°)
- **Chin Position:** Slight forward extension (2-4 inches), jawline definition
- **Psychological Signal:** Approachable confidence, flattering elegance, accessible authority
- **Temporal Markers:** Modern discovery (20th century onward); pre-photography technique awareness; works across all eras after 1900s
- **Usage Categories:** Fashion (universal), Editorial (timeless), Professional (approachable authority), Commercial (accessible confidence)
- **Lighting Dependency:** Works with most lighting; particularly effective with Rembrandt or loop patterns; creates shadow geometry that reveals dimension
- **Why Universally Flattering:** Creates optical illusion of narrower silhouette, elongated neck, dimensional face, avoids symmetrical "mug shot" appearance

#### Seated Poses: Detailed Specifications

**pose_seated_formal_upright_85_90_spine_straight**
- **Spine-to-Seat Angle:** 85-90° (nearly upright)
- **Feet:** Flat on ground, parallel or slight angle, hip-width or slightly closer
- **Hands:** On lap, knees, armrests, or folded
- **Forward Lean:** 0-5° minimal
- **Psychological Signal:** Professional authority, formal respect, corporate protocol
- **Temporal Markers:** Victorian-present; daguerreotype era standard (required for exposure stability); remains formal convention
- **Usage Categories:** Corporate (executive), Professional (headshot), Formal (authoritative)
- **Lighting Dependency:** Frontal preferred for authority; side lighting flattens formality

**pose_seated_casual_recline_100_120_angle_relaxed**
- **Spine-to-Seat Angle:** 100-120° (reclined comfort)
- **Legs:** Crossed, extended, or one leg up (asymmetrical options)
- **Arms:** Draped over chair, one on armrest, relaxed positioning
- **Back Support:** Chair back used for comfort/support
- **Forward Lean:** 0-10° optional backward lean acceptable
- **Psychological Signal:** Comfort, accessibility, approachability, intimacy
- **Temporal Markers:** Post-1920s Hollywood onwards; earlier eras rarely show reclined comfort (formality bias)
- **Usage Categories:** Lifestyle (candid), Editorial (intimate), Casual branding (friendly)
- **Lighting Dependency:** Side or 45° key light; recline creates interesting shadow geometry on torso

**pose_seated_perch_edge_contact_energetic**
- **Seat Contact:** Front third of chair/surface only (not full posterior contact)
- **Spine-to-Seat Angle:** 90-100° (slight forward lean from edge sitting)
- **Legs:** Extended forward or crossed; creates elongated leg line
- **Feet:** Elevated slightly (heels may leave ground) or pointed downward
- **Arms:** Hands on knees, edge of chair, or dynamic positioning
- **Forward Lean:** 10-20° toward camera (engaged, energetic)
- **Psychological Signal:** Professional with energy, approachable authority, active engagement, forward momentum
- **Temporal Markers:** Mid-20th century onwards; contemporary professional standard
- **Usage Categories:** Professional (energetic authority), Corporate (engaged leadership), Casual branding (approachable energy)
- **Lighting Dependency:** Side light creates dynamic shadows on crossed legs; forward lean shows face well to frontal light

**pose_seated_lean_forward_elbows_engaged**
- **Spine-to-Seat Angle:** 45-60° forward
- **Elbows:** Placed on knees or thighs
- **Hands:** Can frame face, hold together, or rest on arms
- **Forward Engagement:** Extreme forward tilt (45-60°) communicates focused attention
- **Feet:** Flat on ground, close to chair
- **Psychological Signal:** Engagement, conversational intimacy, focused attention, active listening
- **Temporal Markers:** Mid-20th century casual photography onwards
- **Usage Categories:** Editorial (interview/feature style), Lifestyle (intimate conversation), Authentic branding (genuine engagement)
- **Lighting Dependency:** Forward lean exposes face fully to frontal light; shadows fall on chest/torso, creating depth

---

### 2. Anatomical Quantification Parameters

```yaml
anatomical_quantification_flags:
  # Weight distribution (discrete percentages)
  - weight_rear_leg_50_percent_neutral
  - weight_rear_leg_60_percent_mild_shift
  - weight_rear_leg_70_percent_classic_contrapposto
  - weight_rear_leg_80_percent_extreme_shift
  
  # Head positioning (discrete degrees)
  - head_tilt_vertical_0_degrees_level
  - head_tilt_vertical_plus10_degrees_looking_down
  - head_tilt_vertical_minus15_degrees_looking_up
  - head_tilt_lateral_0_degrees_neutral
  - head_tilt_lateral_plus20_degrees_right_ear_down
  - head_tilt_lateral_minus20_degrees_left_ear_down
  - head_turn_0_degrees_facing_camera
  - head_turn_30_45_degrees_profile_quarter
  - head_turn_75_90_degrees_profile_full
  
  # Spinal curves (discrete degrees)
  - lumbar_lordosis_neutral_40_45_degrees
  - lumbar_lordosis_moderate_45_55_degrees
  - lumbar_lordosis_exaggerated_55_65_degrees
  - cervical_lordosis_neutral_25_35_degrees
  - cervical_lordosis_extended_35_45_degrees
  - s_curve_intensity_minimal_0_3_scale
  - s_curve_intensity_moderate_3_7_scale
  - s_curve_intensity_exaggerated_7_10_scale
  
  # Joint angles (specific degrees)
  - shoulder_flexion_0_degrees_at_sides
  - shoulder_flexion_45_degrees_partial_raise
  - shoulder_flexion_90_degrees_raised_shoulder_height
  - shoulder_flexion_120_degrees_raised_overhead
  - elbow_flexion_5_15_degrees_straight_arms
  - elbow_flexion_45_60_degrees_moderate_bend
  - elbow_flexion_90_degrees_right_angle
  - elbow_flexion_120_150_degrees_arms_folded
  - knee_flexion_175_180_degrees_straight
  - knee_flexion_150_170_degrees_slight_bend
  - knee_flexion_90_degrees_right_angle_seated
  - hip_camera_angle_0_degrees_square_to_camera
  - hip_camera_angle_30_45_degrees_quarter_turn
  - hip_camera_angle_60_90_degrees_profile
  
  # Chin position (forward extension for jawline definition)
  - chin_extension_0_inches_natural
  - chin_extension_2_inches_subtle_definition
  - chin_extension_4_inches_pronounced_jawline
  
  # Hip/shoulder relationship (counter-rotation)
  - shoulder_hip_rotation_parallel_symmetric
  - shoulder_hip_rotation_opposite_contrapposto_style
  - shoulder_hip_rotation_exaggerated_s_curve_extreme
```

#### Application During Corpus Analysis

When examining photographs:

1. **Weight Distribution Detection:**
   - Observe leg positioning and visual heaviness
   - Lower leg visible vs. hidden from camera reveals weight shift
   - Shoulder position relative to pelvis suggests weight placement
   - Shadow underneath subject (if visible) indicates weight distribution

2. **Head Positioning Detection:**
   - Head rotation relative to body determines whether subject looks "at" camera vs. away
   - Vertical tilt creates emotional nuance (looking down = vulnerable/modest; looking up = confident/aspirational)
   - Lateral tilt (head cocked) creates approachability and personality
   - Measure angles by drawing lines through eyes and ear positioning

3. **Spinal Curve Detection:**
   - Exaggerated S-curve (pronounced lumbar lordosis + cervical extension) creates elegance/sensuality
   - Neutral spine (minimal curves) creates formal authority
   - Forward spinal flexion creates engagement/approachability
   - Observe torso shape from side view when visible

4. **Joint Angle Detection:**
   - Knee bend visibility determines leg line and comfort level
   - Elbow positioning affects arm flow and visual weight
   - Shoulder elevation indicates formality (raised shoulders = tension/formality; dropped shoulders = relaxation)
   - Observe limb positioning relative to torso

---

### 3. Temporal/Anachronism Prevention Flags

```yaml
temporal_anachronism_flags:
  # Exposure time compatibility markers
  - exposure_time_30_60_seconds_daguerreotype_rigid_bilateral
  - exposure_time_3_6_seconds_wet_plate_strict_stillness
  - exposure_time_sub_1_second_dry_plate_movement_subtle
  - exposure_time_instantaneous_digital_dynamic_allowed
  
  # Historical expression markers
  - expression_serious_1840s_1920s_solemn_dignity
  - expression_subtle_smile_1920s_onward_natural
  - expression_open_smile_contemporary_authentic_teeth
  - expression_closed_mouth_formal_contemplative
  
  # Era-specific pose conventions
  - pose_convention_daguerreotype_symmetrical_formal_feet_hidden
  - pose_convention_victorian_gender_specific_men_wide_women_closed
  - pose_convention_edwardian_elegant_feminine_reclining_masculine_powerful
  - pose_convention_1920s_modern_movement_emerging_asymmetry_acceptable
  - pose_convention_1940s_hollywood_sultry_power_poses
  - pose_convention_1980s_dynamic_bold_energy
  - pose_convention_digital_era_2000s_candidness_imperfection_valued
  
  # Support systems and props
  - visible_posing_furniture_ottoman_chair_column
  - visible_head_brace_hidden_behind_body_daguerreotype_era
  - visible_posing_hand_rest_table_support
  - no_support_systems_required_modern_handheld_instantaneous
  
  # Movement blur compatibility
  - movement_blur_impossible_pre_1890s
  - movement_blur_subtle_1890s_1950s_intentional_only
  - movement_blur_accepted_1950s_onward_candid_aesthetic
  - movement_blur_celebrated_2000s_present_authentic_signature
```

#### Anachronism Detection Workflow

**Step 1: Examine Movement Blur**
- Sharp, pin-sharp static image → daguerreotype/wet plate era plausible (1839-1880s)
- Dynamic action blur → impossible before 1890s; requires 1950s+ technology
- "Candid" blur (slight motion) → 1950s onward only

**Step 2: Check Expression Conventions**
- Solemn, serious, no smile → 1840s-1920s plausible
- Subtle natural smile → 1920s+ plausible; pre-1920 anachronistic
- Open-mouth laughing → contemporary only; impossible before 1930s

**Step 3: Verify Pose Rigidity**
- Rigid bilateral symmetry + formal props → daguerreotype era (1840s-1860s)
- Slight asymmetry + standing pose → wet plate era (1870s-1880s)
- Natural asymmetry + handheld feel → 1900s+
- Dynamic movement + candid appearance → 1950s+

**Step 4: Observe Support Systems**
- Metal head brace visible → daguerreotype (1840s-1860s only)
- Hand rest table visible → studio era (1890s-1950s)
- No visible support → modern handheld (1970s+)

**Step 5: Check Gender Conventions**
- Men in power stance (wide legs, squared shoulders), women in closed stance (feet together, body turned) → Victorian-Edwardian (1870s-1920s)
- Genre bifurcation (formal studio vs. candid snapshot) → 1900s+ with increasing distinction
- Gender-fluid expression or natural asymmetry → contemporary (2000s+)

---

### 4. Psychological State & Expression Encoding

```yaml
psychological_state_flags:
  # Confidence/authority spectrum
  - psych_expansive_power_open_chest_wide_stance
  - psych_confident_assertive_direct_gaze_forward
  - psych_neutral_approachable_soft_stance_moderate_openness
  - psych_closed_vulnerable_inward_angles_protective
  - psych_intimate_intimate_proximal_toward_camera
  - psych_formal_distant_composed_minimal_expression
  
  # Emotional communication
  - psych_serious_contemplative_downward_gaze_composed
  - psych_engaging_conversational_forward_lean_direct_attention
  - psych_playful_dynamic_asymmetrical_animated
  - psych_sensual_curved_s_shape_reclined_half_closed_eyes
  - psych_contemplative_inward_looking_reflective
  - psych_aspirational_looking_upward_reaching_forward
  
  # Authenticity markers
  - psych_staged_perfection_bilateral_symmetry_posed
  - psych_candid_imperfection_asymmetry_natural_flow
  - psych_authentic_raw_unguarded_expression_visible
  - psych_editorial_constructed_professional_confidence
  
  # Intimacy thresholds
  - psych_intimate_close_proximity_0_30cm_personal_space
  - psych_professional_moderate_distance_60_100cm_respectful
  - psych_formal_distant_100_plus_cm_authority_separation
```

#### Measurement Through Postural Elements

**Confidence/Authority Encoding:**
- **High Authority:** Shoulders back, chest forward, wide stance, head level or slight uplook, direct gaze, forward weight
- **Approachable Authority:** Slight asymmetry, softer shoulder positioning, moderate stance width, subtle smile
- **Vulnerability:** Inward-turned shoulders, narrower stance, weight on back leg, downward gaze, arm protection across body
- **Powerful Sensuality:** Exaggerated S-curve, reclined positioning, head-back exposure, forward chest, side-oriented gaze

**Intimacy/Distance Encoding:**
- **Intimate (0-30cm proximal range):** Extreme forward lean, direct eye contact, half-closed eyes, close framing, minimal negative space
- **Professional (60-100cm moderate range):** Slight forward lean, steady eye contact, composed expression, balanced negative space
- **Formal (100cm+ distant range):** Upright posture, composed expression, balanced composition, significant negative space, formal framing

**Authenticity Markers:**
- **Staged Perfection:** Bilateral symmetry, bilateral catchlights, composed expression, static positioning, technical precision evident
- **Candid Imperfection:** Asymmetrical pose, natural movement, unguarded expression, environmental integration, slight imperfection acceptable
- **Constructed Editorial:** Professional confidence, technical precision, intentional asymmetry, atmospheric integration, sophisticated construction visible

---

### 5. Lighting-Dependent Pose Adaptations

```yaml
lighting_pose_interaction_flags:
  # Frontal/flat lighting (minimal shadows)
  - pose_adapted_frontal_flat_light_symmetrical_bilateral_optimal
  - pose_adapted_frontal_squared_shoulders_face_centered
  
  # Rembrandt/45-60° side key lighting
  - pose_adapted_rembrandt_45_degree_angle_shadow_geometry
  - pose_adapted_rembrandt_profile_quarter_shows_rim_light
  - pose_adapted_rembrandt_narrow_shadow_side_toward_camera
  
  # Loop/45° side fill-heavy lighting
  - pose_adapted_loop_45_degree_angle_minimal_shadow
  - pose_adapted_loop_natural_slight_asymmetry
  
  # Backlighting (120-180° rim light)
  - pose_adapted_backlit_subject_between_light_camera
  - pose_adapted_backlit_rim_light_hair_separation_visible
  - pose_adapted_backlit_profile_silhouette_outline_emphasized
  - pose_adapted_backlit_forward_lean_exposes_jawline_rim
  
  # Side/cross lighting (90° perpendicular)
  - pose_adapted_side_light_profile_or_narrow_shadow_visibility
  - pose_adapted_side_light_asymmetrical_poses_show_modeling
```

#### Integration Example: Rembrandt Lighting + Pose

**How Pose Adapts to Rembrandt Pattern:**

Rembrandt lighting (key light at 45-60° creating triangular shadow on narrow side of face) requires pose positioning that optimizes this geometry:

1. **Slight 45° Body Angle:** Body rotated 40-50° from camera
2. **Head Turn Back Toward Camera:** Head rotated 30-40° back toward camera (more frontal than body)
3. **Narrow Shadow Side:** Place the narrow shadow side (lit side less) toward camera; wide-lit side appears away
4. **Weight Distribution:** 60/40 to back leg (creates asymmetrical visual tension matching shadow asymmetry)
5. **Chin Position:** Slight forward extension (2-4 inches) projects jawline into modeling light

**Result:** Rembrandt triangle shadow becomes geometric asset; pose complements lighting design; shadow and pose asymmetry create visual cohesion.

---

### 6. Usage Category Integration

```yaml
usage_category_pose_flags:
  # Corporate/Professional flagging
  - usage_corporate_85_90_upright_formal_authority
  - usage_corporate_power_stance_square_shoulders_confidence
  - usage_corporate_perch_edge_seat_engaged_energy
  - usage_corporate_contrast_contrapposto_70_30_subtle_confidence
  - usage_professional_headshot_frontal_symmetrical_approachable
  
  # Lifestyle/Candid flagging
  - usage_lifestyle_45_degree_angle_flattering_approachable
  - usage_lifestyle_movement_permitted_imperfection_accepted
  - usage_lifestyle_asymmetrical_natural_flow_unguarded
  - usage_lifestyle_reclined_comfort_intimate_setting
  - usage_lifestyle_authentic_environmental_integration
  
  # Fashion/Editorial flagging
  - usage_fashion_exaggerated_contrapposto_drama
  - usage_fashion_elongated_leg_lines_perch_edge_sitting
  - usage_fashion_dynamic_walking_stride_motion
  - usage_fashion_editorial_constructed_professional_confidence
  - usage_fashion_sensual_s_curve_reclined_powerful
  
  # Social Media/Instagram flagging
  - usage_social_media_45_degree_selfie_above_camera_slimming
  - usage_social_media_chin_extended_2_4_inches_jawline_definition
  - usage_social_media_one_hand_hip_power_pose_variation
  - usage_social_media_authentic_candid_imperfection
  - usage_social_media_movement_dynamic_energy_engagement
  
  # Glamour/Beauty flagging
  - usage_glamour_sensual_s_curve_exaggerated_elegance
  - usage_glamour_reclining_passive_beauty_curves_emphasized
  - usage_glamour_head_tilted_vulnerability_open_expression
  - usage_glamour_half_closed_eyes_sultry_atmosphere
```

#### Context-Specific Pose Variations

**Corporate Executive vs. Social Media Empowerment (Both Use Power Stance):**

- **Corporate:** Upright spine (85-90°), arms formally crossed, direct level gaze, serious composed expression, frontal symmetrical positioning
- **Social Media:** Slight forward lean (5-10°), arms dynamic (hands on hips with personality), direct engaged gaze, authentic expression, 45° angle preferred

**Fashion Editorial vs. Lifestyle (Both Use 45° Angle):**

- **Fashion:** Exaggerated elongation (perch edge, extended leg line, arched back), dramatic lighting (Rembrandt, high contrast), composed expression, technical precision evident
- **Lifestyle:** Natural comfort (modest recline, weight distributed naturally), natural lighting (golden hour, window light), genuine expression, environmental integration

---

### 7. Cross-Reference: Pose + Lighting + Film = Coherent Aesthetic

```yaml
integrated_example_flags:
  # Daguerreotype aesthetic
  - era_daguerreotype_1840s_1860s
  - exposure_time_30_60_seconds_daguerreotype_rigid_bilateral
  - pose_standing_neutral_bilateral_symmetric
  - visible_posing_furniture_ottoman_chair_column
  - visible_head_brace_hidden_behind_body_daguerreotype_era
  - expression_serious_1840s_1920s_solemn_dignity
  - lighting_pattern_butterfly_center_nose_shadow OR lighting_pattern_broad_fill_even (frontal studio light priority)
  - modifier_reflector_metal_hard_specular (hard studio light characteristic)
  - dynamic_range_film_negative_11_stops OR dynamic_range_film_slide_5_stops (if slide process)
  - print_gelatin_silver_mirrorlike_surface
  
  # 1940s Hollywood Glamour aesthetic
  - era_hollywood_golden_age_1930s_1940s
  - exposure_time_sub_1_second_dry_plate_movement_subtle
  - pose_reclining_horizontal_beauty_passive OR pose_power_stance_dramatic_confidence
  - expression_subtle_smile_1920s_onward OR expression_serious_contemplative
  - psych_sensual_curved_s_shape_reclined_half_closed_eyes
  - lighting_pattern_rembrandt_triangle_shadow
  - strobe_key_fill_3_1_ratio_dramatic_contrast OR 4_1_extreme_contrast
  - modifier_softbox_soft_diffuse_light
  - kodak_tri_x_400_contrasty_grain (B&W standard for era)
  - grading_contrast_inversion_s_curve_dramatic
  - print_gelatin_silver_fb_baryta_traditional
  
  # 2024 Instagram Lifestyle aesthetic
  - era_digital_era_2000s_present
  - exposure_time_instantaneous_digital_dynamic_allowed
  - pose_walking_casual_natural_gait OR pose_universally_flattering_45_degree_angle
  - movement_blur_celebrated_2000s_present_authentic_signature
  - psych_candid_imperfection_asymmetry_natural_flow
  - psych_authentic_raw_unguarded_expression_visible
  - usage_social_media_45_degree_selfie_above_camera_slimming
  - lighting_natural_golden_hour_warm_directional
  - dynamic_range_digital_14_stops_modern
  - sensor_digital_noise_luma_brightness_only (film grain aesthetic via digital noise)
  - grading_film_stock_signature_inherent (often Portra simulation)
  - print_digital_c_print_inkjet_or_social_media_native
```

---

### Application Workflow: Pose Analysis During Phase 2 Corpus Examination

**Step 1: Pose Family Classification**
- Examine 15-25 photographs from corpus
- Identify which pose families dominate (contrapposto vs. power stance vs. walking vs. seated)
- Note pose frequency and variations within families
- Flag any unusual or signature pose choices

**Step 2: Anatomical Extraction**
- For key representative images, measure observable angles
- Weight distribution visible? (70/30, 60/40, 50/50)
- Head rotation toward or away from camera?
- Spinal curves exaggerated or neutral?
- Knee flexion visible?
- Joint angles observable?

**Step 3: Temporal/Anachronism Check**
- Does pose rigidity match exposure time technology?
- Expression conventions align with claimed era?
- Gender pose conventions match historical period?
- Support systems visible (if period-appropriate)?

**Step 4: Psychological State Encoding**
- What emotional/authority communication emerges from posture?
- Expansive/closed spectrum? Intimate/distant?
- Staged perfection vs. candid authenticity?
- Consistent psychological messaging across corpus?

**Step 5: Lighting Pose Integration**
- Do poses align with lighting patterns observed?
- 45° angles with Rembrandt lighting? (Suggests intentional design)
- Frontal symmetrical poses with butterfly lighting? (Suggests beauty photography)
- Dynamic walking with backlighting? (Suggests energy emphasis)

**Step 6: Usage Category Determination**
- Which category flags fit corpus dominant aesthetic?
- Corporate formality vs. lifestyle candor vs. fashion drama vs. social media authenticity?
- Consistent category application or hybrid approach?

---

## [SECTION ENDS]
## 9. Integration with Universal Dictionary & Body Posing

**Overlap Flags (Shared with Painting/Drawing):**

These flags maintain identical meaning across both mediums but may have different **implementation requirements** in photography:

| Flag Category | Universal v2.1 Flags | Photography-Specific Notes |
|---------------|---------------------|--------------------------|
| **Lighting** | chiaroscuro-dramatic, golden-hour-warm, diffuse-ambient, rembrandt-split-portrait | In photography: determined by artificial strobe setup or natural light window position; measurable key:fill ratios replace subjective "dramatic" language; **pose adaptation flags (Section 8A) optimize geometric interaction** |
| **Composition** | rule-of-thirds, golden-spiral, hierarchical-scaling, diagonal-energy | In photography: determined by framing/subject positioning; focal length affects perceived compression; **pose positioning (Section 8A) creates compositional geometry through body angle and weight distribution** |
| **Palette** | earth-tone-ochre, cobalt-dominant, split-complementary, high-saturation-contrast | In photography: determined by film stock + color grading; not present in subject choice but output rendering |
| **Texture/Surface** | (Generally NOT applicable to photography—photographic grain/noise are sensor/film flags instead) | Use `sensor_film_flags` instead of painting-specific texture flags |

**Non-Overlapping Flags (Photography-Only):**
- All `sensor_film_flags` (no paint equivalent)
- All `optics_flags` (no paint equivalent)
- All `strobe_flags` (artificial lighting different from painting directional light)
- `retouching_degree_spectrum` (photography-specific manipulation philosophy)
- `print_output_flags` (no paint equivalent; paint exists as physical object)
- **NEW:** `body_posing_anatomical_flags` (unique to photography's captured human form; integration with lighting and composition systems)

**Integration Principle: Pose as Compositional System**

Section 8A introduces **body posing as a compositional system orthogonal to but dependent on lighting**: A 45-degree universally flattering angle (Section 8A) integrates with Rembrandt lighting (Section 4) and 85mm focal length compression (Section 2) to create coherent aesthetic signature. This differs from painting where pose is implied through static gesture; in photography, pose is *quantifiable geometry that directly interacts with optical and lighting systems*.

Example integration chain:
1. **Pose Selection:** `pose_universally_flattering_45_degree_angle` (40-50° body angle, 30-40° head turn, 60/40 weight distribution)
2. **Lighting Selection:** `lighting_pattern_rembrandt_triangle_shadow` (45-60° key light creating triangle shadow)
3. **Optical Selection:** `focal_length_short_telephoto_85mm_compression` (mild background separation)
4. **Result:** Pose's asymmetry aligns with lighting's asymmetrical shadow geometry; 85mm flattens spatial relationships; creates sophisticated, professional aesthetic

---

## 10. How to Use This Dictionary During Phase 2 Framework Development

**Step 1: Corpus Analysis & Pose Family Identification**
- Examine 15-25 photographs from the photographer/artist's body of work
- **For each image, identify pose family** (Section 8A.1): Is subject standing, seated, dynamic? Specific family name?
- Note pose frequency: Does one family dominate? Are there signature pose choices?
- Identify pose variations within families

**Step 2: Technical Extraction - Multi-Dimensional Analysis**

**2a. Film/Sensor Characteristics:**
- Identify **film stocks** (if identifiable): grain patterns, color rendering, tonal range (Section 1)
- Note dynamic range: generous latitude vs. tight? (Section 3)
- Observe grain/noise character: organic film grain vs. digital noise? (Section 3)

**2b. Optical Characteristics:**
- Determine **focal length signature**: compression, bokeh, perspective distortion (Section 2)
- Analyze depth of field: shallow/selective vs. extensive? (Section 2)
- Identify bokeh character: soft, hard, or creamy? (Section 2)

**2c. Body Posing & Anatomical Characteristics:**
- Extract **pose family** with specific anatomical flagging (Section 8A.1-2)
- Measure observable angles when possible: weight distribution, head position, spinal curves
- Check for **temporal/anachronism consistency** (Section 8A.3): Do poses align with exposure technology of claimed era?
- Identify **psychological state encoding** (Section 8A.4): What emotional/authority communication emerges?
- Note **usage category fit** (Section 8A.6): Corporate formality? Lifestyle authenticity? Fashion drama?

**2d. Strobe Lighting Characteristics:**
- Document **lighting pattern**: Rembrandt, butterfly, loop, split? (Section 4)
- Extract **key:fill ratio** from shadow visibility (Section 4)
- Identify **modifier types** via catchlight and shadow quality (Section 4)
- Note **pose-lighting interaction** (Section 8A.5): Do poses optimize lighting geometry?

**2e. Retouching Philosophy:**
- Assess **retouching degree**: minimal → moderate → aggressive → extreme (Section 5)
- Note skin texture handling: natural texture preserved vs. smoothed?
- Identify blemish/imperfection handling

**2f. Color Grading Signature:**
- Document **grading strategy**: film stock inherent, cross-processed, split-toned, desaturated, hyperreal? (Section 7)
- Note saturation level: muted, natural, or boosted?
- Identify tonal curve preferences: lifted blacks (dreamy) vs. deep blacks (dramatic)?

**2g. Print Output & Presentation:**
- Identify **print process**: gelatin silver, platinum, archival pigment, C-print? (Section 6)
- Note **mounting method**: fiber-based, acrylic face-mount, diasec, etc.? (Section 6)
- Observe **scale & presentation**: intimate (8x10") vs. monumental (60")?

**Step 3: Flag Cross-Reference & Conflict Detection**
- For each identified characteristic, find matching flags in this dictionary
- Create flag set: `[pose_flag, film_flag, optics_flag, strobe_flag, retouching_flag, grading_flag, print_flag]`
- Note any **conflicting flags** (e.g., cannot have both `usage_social_media_authentic_candid_imperfection` AND `retouch_extreme_compositing_surreal` in same framework)
- If a characteristic isn't captured by existing flags → Document for v1.2+ expansion

**Step 4: Lighting-Pose Integration Verification**
- Compare `pose_adapted_*` flags (Section 8A.5) with lighting_pattern flags (Section 4)
- Example: If lighting is `lighting_pattern_rembrandt_triangle_shadow`, check if poses favor `pose_adapted_rembrandt_45_degree_angle_shadow_geometry`
- Verify genre-specific pose-lighting pairings match corpus observations

**Step 5: Framework Construction (Phase 3)**
- Identified flags populate the "Renderer-Agnostic Adapter" section of your framework
- **Pose flags translate into specific technical prompts:** `pose_contrapposto_classic_70_30_weight` becomes "weight distribution 70% rear leg, 30% front leg; hip 0-3° tilt; shoulder counter-rotation 5-15°"
- Flags guide technical specification writing: lighting ratios become numbers, bokeh becomes aperture/focal length pairs, poses become anatomical angle specifications
- **Pose-lighting-optics integration becomes explicit:** "When using Rembrandt pattern with contrapposto poses: key light at 45-60°, subject's 45° angle aligns with shadow geometry, 85mm focal length compression flattens spatial relationships"
- Conflicting flags note when modes diverge (corporate formality vs. lifestyle authenticity)

**Step 6: Validation Testing (Phase 4)**
- Generate test images using identified flag set
- **Verify pose rendering:** Does generated body angle match corpus? Weight distribution realistic? Anatomical curves appropriate?
- Verify pose-lighting interaction: Do poses show lighting geometry effectively? Shadows render as observed?
- If pose output deviates from corpus: Recalibrate anatomical angles, adjust lighting-pose adaptation flags, add specificity to body positioning
- Validate temporal markers: Do anachronism flags prevent era-inappropriate combinations? (e.g., Instagram selfie aesthetics with daguerreotype rigidity)

---

## 11. Genre-Specific Technical Specifications (v1.2)

### Documentary/Photojournalism: Truth Through Technical Authenticity

**Foundational Principle:** Documentary photography demands minimal intervention and maximum authenticity. Ethical standards from NPPA, Associated Press, and Reuters prohibit adding/removing objects, staging scenes, or dramatic color alterations. Only dust removal, cropping, minimal dodging/burning, and subtle color correction match darkroom-era standards. This genre's technical choices preserve truth above aesthetics.

#### Exposure Specifications

```yaml
documentary_exposure_flags:
  - aperture_documentary_f1_4_fast_available_light
  - aperture_documentary_f2_0_f2_8_fast_subject_isolation
  - aperture_documentary_f4_f5_6_environmental_context_balance
  - shutter_documentary_1_125_second_fast_capture
  - shutter_documentary_1_250_second_candid_action_standard
  - shutter_documentary_1_500_second_movement_freeze
  - iso_documentary_800_modern_standard
  - iso_documentary_1600_3200_low_light_handheld
  - iso_documentary_pushed_film_400_to_1600_3200_vintage
```

**Aperture Range:** f/1.4 to f/5.6 dominates documentary work, prioritizing available light capture over deep depth of field. Wide apertures (f/1.2–f/2.8) handle low-light situations while enabling subject isolation distinguishing professional documentary from smartphone imagery. Environmental context shots employ f/5.6–f/8 when background information matters.

**Shutter Speeds:** 1/125–1/500 second typical freezes unpredictable candid moments, with 1/250 second minimum for moving subjects. This differs significantly from portraiture's 1/60–1/125 second, reflecting non-repeatable documentary moments.

**ISO Capabilities:** Modern photographers comfortably shoot ISO 1600–3200; film-era standards pushed Tri-X 400 to ISO 1600–3200 or deployed Delta 3200 (native ISO 1000, designed for pushing to 3200–6400).

#### Film Stock Characteristics

```yaml
documentary_film_flags:
  - kodak_tri_x_400_pushed_3200_6400_photojournalism_standard
  - ilford_hp5_plus_400_gentle_grain_airiness
  - ilford_delta_3200_professional_extreme_low_light
  - kodak_portra_400_available_light_alternative
```

**Kodak Tri-X 400:** Photojournalism standard since 1960s; ISO 400 box speed, pushable to 3200–6400; prominent grain, high contrast, dark rich blacks; underexposure 1–2 stops for distinctive character. Development in D-76, HC-110, or DD-X maintains signature gritty aesthetic.

**Ilford HP5 Plus 400:** Gentler grain with "airiness"; strong but lower contrast than Tri-X; overblown whites with lifted shadows; superior push performance to ISO 3200.

**Ilford Delta 3200 Professional:** Native ISO 1000; extends to ISO 12,500–25,000; highest ISO of any production film; extreme low-light capability.

#### Optical Specifications

```yaml
documentary_focal_length_flags:
  - focal_length_24mm_ultrawide_cramped_interior_handheld
  - focal_length_35mm_environmental_context_54_4_degrees_fov
  - focal_length_50mm_natural_perspective_40_degrees_fov
  - focal_length_85mm_unobtrusive_distance
  - focal_length_70_200mm_telephoto_environmental_discretion
```

**35mm (54.4° FOV):** Captures environmental context with natural perspective; requires closer subject proximity. Fast f/1.4–f/2.8 available.

**50mm (40° FOV):** Natural perspective, no distortion; compact, fast f/1.8 excellent for budget portraits.

**24mm Ultra-Wide:** Cramped interiors; close-range handheld fly-on-the-wall perspective.

**85mm Medium Telephoto:** Unobtrusive distance shooting; flattering compression; undistorted close-ups essential for sensitive subjects.

#### Color Temperature Handling

```yaml
documentary_color_temperature_flags:
  - color_temp_daylight_5600k_neutral_authentic
  - color_temp_overcast_6000_7000k_preserved
  - color_temp_golden_hour_3000_3200k_warm_authentic
  - color_temp_tungsten_2500_3200k_preserved
  - color_temp_mixed_lighting_authentic_balance
  - white_balance_raw_post_correction_ethical
```

**Preservation Specifications:**
- Daylight: 5,600K
- Overcast: 6,000–7,000K
- Golden Hour: 3,000–3,200K
- Tungsten: 2,500–3,200K
- Flash: 5,000–6,000K
- Fluorescent: ~4,400K greenish

**Mixed Lighting:** Indoor tungsten plus window daylight creates 2,400K+ difference. RAW shooting allows post-correction within ethical bounds.

#### Dynamic Range Recovery

```yaml
documentary_dynamic_range_flags:
  - exposure_single_raw_processing_ethical_standard
  - shadow_recovery_3_stops_pull_detail
  - highlight_recovery_3_stops_preserve_sky
  - local_adjustment_masks_ethical_selective_correction
```

**Single-Exposure Standard:** Pull highlights 3 stops, push shadows 2 stops via local adjustment masks. Match human eye perception, not artificial drama.

**HDR Bracketing:** Multi-exposure acceptable for architectural/location features only (not subject stories).

#### Candid Documentation Techniques

```yaml
documentary_documentation_flags:
  - technique_fea_anticipation_behavioral_prediction
  - technique_scout_location_preposition_strategy
  - technique_single_decisive_moment
  - technique_avoid_flash_authenticity
  - technique_telephoto_distance_discretion
  - technique_fast_shutter_1_250_plus
```

**Anticipation:** Position before action occurs; recognize behavioral patterns; scout locations beforehand.

**Technical Lockdown:** RAW format, pre-determined aperture or Aperture Priority, high ISO (1600–3200), fast shutter (1/250–1/500 second).

**Flash Avoidance:** Startles subjects, destroys authenticity. Telephoto lenses (70–200mm) maintain distance without disruption.

#### Retouching Philosophy (Documentary)

```yaml
documentary_retouching_flags:
  - retouch_documentary_dust_hair_removal_only
  - retouch_documentary_no_object_removal
  - retouch_documentary_no_cloning
  - retouch_documentary_color_correction_subtle
```

**Ethical Constraint:** Dust/hair removal only. Visible texture; visible blemishes; natural appearance; authentic representation absolute priority.

**Forbidden:** Object removal, subject repositioning, blemish removal, dramatic color alteration, skin smoothing.

#### Post-Production Color (Documentary)

```yaml
documentary_grading_flags:
  - grading_documentary_film_stock_signature_only
  - grading_documentary_minimal_color_cast_correction
  - grading_documentary_contrast_natural_not_dramatic
```

**Grading Principle:** Film stock signature or minimal color correction. No surreal shifts; no hyperreal saturation; no artistic color grading. Light as captured = light presented.

---

### Landscape Photography: Maximizing Depth and Dynamic Range

**Foundational Principle:** Landscape photography prizes sharp focus from foreground to infinity and managing extreme dynamic range. Technical choices emphasize deep depth of field, filter systems for exposure control, and optimal sharpness through careful aperture selection and hyperfocal focusing.

#### Aperture and Depth of Field Specifications

```yaml
landscape_aperture_flags:
  - aperture_landscape_f8_f11_sweet_spot_sharpness
  - aperture_landscape_f11_f16_universal_depth
  - aperture_landscape_f16_f22_extreme_depth_diffraction_risk
  - hyperfocal_distance_calculation_depth_optimization
```

**Aperture Sweet Spot:** f/8–f/11 optimal balance between diffraction losses (softness) and depth-of-field requirements. Most lenses deliver maximum sharpness 2–3 stops down from maximum aperture.

**Universal Depth:** f/11–f/16 ensures everything from near foreground to infinity remains sharp. f/16+ introduces diffraction (softness) visible in enlarged prints.

**Hyperfocal Distance:** Set focus to specific point between nearest and farthest subjects ensuring both remain sharp. Example: 35mm at f/11 = ~3m hyperfocal; everything 1.5m to infinity sharp.

#### Filter Systems and Exposure Management

```yaml
landscape_filter_flags:
  - filter_polarizer_reduce_glare_saturate_colors
  - filter_nd_neutral_density_shutter_drag
  - filter_nd_graduated_balance_sky_ground
  - filter_nd_extreme_10_15_stops_water_smoothing
  - exposure_bracketing_hdr_recovery
```

**Polarizing Filter:** Reduces glare from water/foliage; deepens sky; eliminates reflections. Typical -1 to -2 stops exposure; 10–30% color saturation boost.

**Neutral Density:** Extends shutter speed for motion effects. 1-stop ND = 1-second exposure; 10-stop ND enables 30-second exposures at f/2.8 in daylight.

**Graduated ND:** Balances overexposed sky vs. underexposed foreground. 1-stop grad: 1:1 ratio; 2-stop grad: 2:1 ratio typical.

**Extreme ND (10–15 stops):** Water smoothing (2–30 second exposures); cloud streaking.

**Exposure Bracketing:** Capture -2, 0, +2 EV; blend for 4 additional stops recovery.

#### Film Stock Recommendations

```yaml
landscape_film_flags:
  - fuji_velvia_50_hyper_saturated_landscape_standard
  - fuji_velvia_100_saturated_practical
  - fuji_provia_neutral_accurate
  - kodak_ektar_100_forgiving_latitude
```

**Fujifilm Velvia 50:** ISO 50; hyper-saturated; fine grain; landscape standard. Sky blues nearly purple; greens artificial intensity. NOT for subjects (skin oversaturated).

**Fujifilm Provia 100F:** ISO 100; neutral color; fine grain; excellent fidelity; professional standard.

**Kodak Ektar 100:** Forgiving latitude; vivid color; excellent varied lighting.

#### Color Grading Strategy

```yaml
landscape_grading_flags:
  - grading_landscape_film_stock_saturation_inherent
  - grading_landscape_sky_deepening_selective_saturation
  - grading_landscape_contrast_s_curve_dramatic
  - grading_landscape_warm_golden_hour_toning
  - grading_landscape_cool_shadow_split_toning
```

**Film Stock Saturation:** Velvia inherent saturation (25–40% boost); Provia natural (5–10%).

**Sky Deepening:** Selective saturation boost (sky only); luminous masking targets highlights.

**S-Curve Contrast:** Darken shadows (depth perception), brighten midtones (dimension), maintain highlight detail.

**Warm Golden Hour:** Lift highlights 3,000–3,500K warmth; cool shadows 5,500K.

**Cool Split Toning:** Highlights warm (4,500K), shadows cool (7,000K) creating dimensional separation.

#### Depth of Field Optimization Workflow

**Foreground Integration:** Include compelling foreground (rocks, wildflowers, water) 1–3 feet from camera. Sets scale; creates depth layers.

**Focus Placement:** Set focus 1/3 into scene from camera (not hyperfocal center). Leverage greater depth behind focus plane.

**Manual Focus:** Autofocus unreliable at hyperfocal distances; manual focus mandatory.

---

### Still-Life & Product Photography: Material-Specific Rendering

**Foundational Principle:** Still-life achieves professional results through precise lighting ratios, macro optical specifications, material-specific rendering, and controlled shadow painting. Complete technical repeatability and material-specific requirements define genre success.

#### Lighting Ratio Specifications

```yaml
still_life_lighting_ratio_flags:
  - strobe_key_fill_2_1_ratio_dimensional_subtle
  - strobe_key_fill_3_1_ratio_dramatic_product
  - strobe_key_fill_4_1_ratio_extreme_modeling
  - strobe_key_fill_1_1_ratio_flat_catalog
  - fill_light_bounce_reflector_white_silver_gold
  - fill_light_diffusion_soft_natural_texture
```

**2:1 Ratio:** Key 2x fill; shadow detail visible; gentle modeling; food, textiles, approachable products.

**3:1 Ratio:** Key 3x fill; pronounced shadows; dramatic three-D modeling; luxury products, jewelry, dramatic mood.

**4:1 Ratio:** Key 4x fill; deep shadows; maximum visual drama; fine art, museum display.

**1:1 Ratio:** Equal key and fill; flat presentation; e-commerce, catalog, neutral reference.

#### Macro Optical Behavior

```yaml
still_life_macro_optical_flags:
  - macro_reproduction_1_to_1_life_size
  - macro_reproduction_1_to_2_half_size
  - macro_reproduction_2_to_1_magnification
  - focus_stacking_multiple_exposures_depth
```

**1:1 Reproduction:** Life-size magnification; extreme proximity (1–6 inches); razor-thin DOF (1/4 inch at f/8).

**1:2 Reproduction:** Half-size magnification; ~12 inches working distance; moderate DOF improvement.

**Focus Stacking:** Optimal f/5.6–f/8; capture 5–20 exposures at incremental focus distances; blend post-processing.

#### Material-Specific Rendering

```yaml
still_life_material_specific_flags:
  - material_metal_specular_highlights_directional_key
  - material_fabric_directional_texture_sidelight
  - material_glass_rim_light_transparency_highlight
  - material_ceramic_matte_diffuse_light
  - material_wood_grain_sidelight_texture
  - material_plastic_diffuse_soft_light
  - material_leather_directional_contour_sidelight
  - material_food_warm_sidelight_appetite_appeal
```

**Metal:** Directional key light creating sharp specular highlights. Polished metal reflects precisely; brushed metal diffuses more evenly. Typical 3:1–4:1 ratio.

**Fabric:** Sidelight emphasizes surface texture and weave. Flat light renders texture invisible. Soft modifiers maintain directionality while reducing harshness.

**Glass:** Rim/backlight defines edges, shows transparency. Frontal light produces dark, lifeless glass; backlighting reveals luminosity.

**Ceramic:** Matte requires soft diffuse light (large softbox). Glossy accepts directional light showing surface quality.

**Wood:** Sidelight emphasizes grain; frontal light flattens. Warm temperature (3,000–4,000K) enhances natural warmth.

**Plastic:** Diffuse soft light prevents hot spots. Hard light creates uncontrolled reflections; diffusion necessary.

**Leather:** Directional light reveals contour and character. Sidelight emphasizes grain; warm temperature (3,200–3,500K) enhances richness.

**Food:** Warm sidelight (3,000–3,500K) mimics dining lighting, stimulates appetite. Natural textures (steam, condensation, sauce) enhance perception.

#### Shadow Painting Technique

```yaml
still_life_shadow_painting_flags:
  - shadow_painting_negative_fill_cardboard_gobo
  - shadow_painting_positive_fill_reflector_light
  - shadow_painting_colored_fill_warm_cool_mood
  - shadow_painting_graduated_fill_edge_falloff
  - shadow_painting_precise_masking_selective
```

**Negative Fill:** Black/dark cardboard pulls light away, deepens shadows. Placement 6–24 inches from subject.

**Positive Fill:** White/silver/gold reflectors bounce key light into shadows. White neutral (5,500K); gold warm (3,200–4,000K); silver punchy specular.

**Colored Fill:** Warm fill (gold) in cool scenes creates dimensional color separation; cool fill (silver) in warm scenes prevents muddy orange shadows.

**Graduated Fill:** Gradual transition from full fill to no fill, creating subtle modeling without abrupt shadow lines.

**Selective Illumination:** Custom gobos (cut cardboard), flags, diffusion panels control precisely which surfaces receive light.

---

### Environmental & Location Photography: Ambient Light Integration

**Foundational Principle:** Environmental photography balances natural/ambient light with supplemental strobes creating location-specific work. Color temperature management across mixed light sources, shutter-speed-based ambient control, and ratio-based flash integration define success.

#### Ambient Light & Strobe Balance

```yaml
location_ambient_strobe_flags:
  - ambient_strobe_ratio_2_1_subtle_fill
  - ambient_strobe_ratio_1_1_balanced_equal
  - ambient_strobe_ratio_1_2_fill_dominant
  - shutter_speed_ambient_1_60_base
  - shutter_speed_ambient_1_125_balanced
  - shutter_speed_ambient_1_250_freeze
  - flash_ratio_2_1_fill_to_ambient
  - flash_ratio_1_1_even_blend
  - flash_ratio_1_2_location_emphasis
```

**2:1 Ambient-Dominant:** Natural light primary; strobe subtle fill (1/3 intensity). Subject naturally lit; location lighting preserved.

**1:1 Balanced:** Ambient and strobe equal contribution; subject receives strobe modeling; location context fully visible, brightened.

**1:2 Flash-Dominant:** Strobe majority exposure; ambient becomes background context. Useful for dark locations or uncontrolled ambient dominance.

**Shutter Speed Control:** Base shutter (1/60–1/250 second) determines ambient exposure. Faster shutter (1/250s) darkens ambient; slower (1/60s) brightens. Flash duration (1/200–1/1000 second) freezes motion regardless of shutter.

#### Color Temperature Management

```yaml
location_color_temp_flags:
  - color_temp_window_daylight_interior_mix_conflict
  - color_temp_golden_hour_3000_3500k_warm_context
  - color_temp_tungsten_interior_3000_3200k
  - color_temp_fluorescent_4400k_greenish
  - color_temp_neon_2500_2700k_extreme_warm
  - white_balance_targeted_gelling_tungsten_correction
  - white_balance_split_processing_location_subject
```

**Window + Tungsten Conflict:** Daylight window (5,600K) clashes with tungsten interior (3,000K). Gel strobe to tungsten (CT blue + 2-stop increase), or white-balance tungsten letting window appear cool/blue.

**Golden Hour Aesthetic:** Warm 3,000–3,500K provides flattering, cohesive location aesthetic. Strobe gelled to tungsten matches ambient warmth.

**Tungsten Interior:** 3,000–3,200K typical. Gel strobe to tungsten; white-balance tungsten; subject and background achieve color consistency.

**Fluorescent Interiors:** 4,400K greenish cast. RAW essential; magenta gel partially corrects; split-toning post-processing typical.

**Neon Signage:** Accept neon color signature (not correct); maintains location authenticity. Subject daylight-balanced or slightly tungsten-gelled strobe creates intentional color separation.

**White Balance Strategy:** Shoot RAW; white-balance dominant light source. Location color signature preserved while subject balanced.

#### Window Light Geometry

```yaml
location_window_light_flags:
  - window_light_frontal_even_illumination
  - window_light_45_degree_directional_modeling
  - window_light_sidelight_90_degree_dramatic
  - window_light_backlighting_rim_separation
  - window_light_diffusion_overcast_soft_directional
  - window_light_size_large_soft_even
  - window_light_size_small_hard_directional
  - fill_light_reflector_opposite_shadow_fill
```

**Frontal:** Subject faces window directly; even, soft; minimal shadows; flattering for portraits. 3–6 feet from large north-facing window.

**45-Degree:** Subject 45° to window; moderate shadow on far side; dimensional modeling; flattering setup.

**Sidelight (90°):** Perpendicular to window; dramatic three-D; pronounced shadows; sculptural effect.

**Backlighting:** Subject between camera and window; rim-light separation; silhouette potential; requires substantial fill.

**Diffusion Integration:** Sheer curtain softens while preserving directionality. Soft yet directional light optimal.

**Window Size:** Large (6+ feet) soft light; small (2–4 feet) hard, specular light.

**Fill Strategy:** White/silver reflector opposite window bounces light into shadow, managing 2:1–3:1 key:fill.

#### Time-of-Day Lighting Conditions

```yaml
location_time_of_day_flags:
  - time_of_day_golden_hour_3000_3500k_flattering
  - time_of_day_blue_hour_twilight_4500_6500k_mixed
  - time_of_day_midday_sun_harsh_direct_overhead
  - time_of_day_overcast_soft_omnidirectional
  - time_of_day_dusk_dark_iso_1600_3200_strobe_dependent
```

**Golden Hour:** Warm 3,000–3,500K; flattering skin tones; location context glows richly. Shadows elongated; scenic drama. 20–30 minute window; working fast essential.

**Blue Hour:** Mixed daylight (blue sky) and tungsten (interior lights). Dynamic color palette; cool location background + warm interior highlights. Limited exposure latitude; RAW essential.

**Midday Sun:** Hard shadows; high saturation; direct overhead. Harsh contrast; unflattering skin tones. Strobe fill essential for 4:1+ contrast ratio.

**Overcast:** Diffuse, even light; minimal shadows; low contrast. Color temperature 6,000–7,000K (cool, neutral). Flattering for portraits; boring for location context.

**Dusk/Dark:** Insufficient ambient for handheld; strobe primary light. Ambient provides location detail; strobe provides subject exposure. 1:1 to 1:3 ambient:strobe typical.

---

### Group Photography: Multi-Subject Arrangement & Coordination

**Foundational Principle:** Group photography coordinates multiple subjects, manages pose consistency, maintains eye-line coherence, and creates compositionally balanced arrangements. Technical specifications address aperture selection for multi-subject focus planes, arrangement geometries, and pose-to-pose psychological dynamics.

#### Focal Length Considerations

```yaml
group_focal_length_flags:
  - focal_length_50mm_environmental_context
  - focal_length_70_85mm_moderate_compression
  - focal_length_100_135mm_telephoto_compression
  - focal_length_200mm_plus_extreme_compression
  - working_distance_15_30_feet_moderate_groups
  - working_distance_30_plus_feet_large_groups
```

**50mm:** Includes significant background; all subjects identifiable; shows location context. ~12 feet working distance for chest-up framing.

**70–85mm:** Flattering perspective; background moderately compressed. ~18–25 feet working distance; typical professional group portrait.

**100–135mm:** Significant background compression; extremely flattering. 30–40+ feet working distance; ideal for DOF challenges with large groups.

**200mm+:** Maximum background isolation; extremely flattering. 50+ feet working distance; best for small groups (3–5 people).

#### Aperture Ranges by Group Size

```yaml
group_aperture_by_size_flags:
  - group_couples_f2_8_f4_shallow_dof
  - group_small_3_6_people_f4_f5_6
  - group_medium_7_12_people_f5_6_f8
  - group_large_13_plus_f8_f11
  - focus_plane_front_third_rule_optimal
```

**Couples (f/2.8–f/4):** Both subjects equidistant from camera for sharp focus at shallow DOF.

**Small Groups 3–6 (f/4–f/5.6):** Moderate DOF; staggered positioning tolerable. f/5.6 "safety aperture."

**Medium Groups 7–12 (f/5.6–f/8):** Extended DOF; multiple rows accommodated. f/8 minimum.

**Large Groups 13+ (f/8–f/11):** Universal depth; multiple rows fully accommodated. f/11 maximum for handheld; f/16 introduces diffraction.

**Focus Placement:** Front-third rule places focus 1/3 into group from camera, utilizing superior depth behind focus plane. Front row perfectly sharp; middle very sharp; back acceptable.

#### Group Arrangement Geometries

```yaml
group_arrangement_flags:
  - geometry_linear_horizontal_spacing_equal_height_stagger
  - geometry_linear_angled_curved_organic_relaxed
  - geometry_triangular_apex_back_psychological_stability
  - geometry_triangular_apex_front_dynamic_energy
  - geometry_triangular_apex_off_center_contemporary
  - geometry_clustered_tight_proximity_intimacy
  - geometry_scattered_casual_natural
  - height_stagger_12_18_inches_visual_interest
  - positioning_offset_front_between_back_optimal_visibility
```

**Linear Horizontal:** Straight line, equal spacing. Classic, formal, democratic. DOF challenges (entire line equidistant from camera).

**Linear Angled/Curved:** Gentle curve or diagonal line. Organic, relaxed; introduces depth; DOF advantage through staggered distances.

**Triangular Apex-Back:** Tall/dominant back-center; shorter subjects front-left/right. Pyramidal stability; psychological authority at back; frontal accessibility.

**Triangular Apex-Front:** Dominant front-center; supporting back-left/right. Dynamic, forward energy; contemporary feel.

**Triangular Apex Off-Center:** Apex off-center (not center frame). Compositionally dynamic; psychological tension; contemporary aesthetic.

**Clustered Tight:** Touching or very close (6–12 inches). Intimate, connected feeling.

**Scattered Distributed:** Subjects spread with negative space between. Casual, individualistic; informal documentary style.

**Height Stagger:** 12–18 inches between rows. Creates visual interest; resolves DOF challenges. Taller back; shorter front naturally.

**Offset Positioning:** Front subjects between back subjects (not directly in front). Maximizes visibility; prevents occlusion.

#### Eye-Line Management

```yaml
group_eye_line_flags:
  - eye_line_unified_all_looking_camera_cohesive
  - eye_line_varied_natural_candid_authentic
  - eye_line_psychological_connection_intimate
  - eye_line_mixed_dynamic_energy
  - gaze_direction_downward_submissive_vulnerable
  - gaze_direction_level_authoritative_confident
  - gaze_direction_upward_aspirational_vulnerable
  - gaze_connection_within_group_intimacy
```

**Unified Eye-Line:** All look at camera or direction. Cohesive, formal, organized. Psychological unity enforced.

**Varied Eye-Line:** Some camera, others between subjects. Candid, natural, authentic. Documentary authenticity; requires careful direction.

**Psychological Connection:** Look toward specific person. Psychological bond emphasized; intimate family dynamics conveyed.

**Mixed Gaze:** Some camera, some internal-group. Dynamic energy; professional confidence plus authentic interaction.

**Gaze Implications:** Downward (submissive, vulnerable); level (authoritative, confident); upward (aspirational, reaching, vulnerable); within-group (intimacy, connection).

#### Pose Coordination Across Subjects

```yaml
group_pose_coordination_flags:
  - pose_coordination_mirror_symmetric_formal
  - pose_coordination_variation_within_consistency
  - pose_coordination_family_unit_adults_strong_children_soft
  - pose_coordination_couples_mirrored_individual
  - pose_coordination_alternating_standing_seated_dynamic
  - hand_placement_natural_varied_shoulder_clasped
  - hand_placement_avoiding_lap_crossed_tense
```

**Mirror Symmetry:** Left and right mirror each other. Formal, balanced, theatrical.

**Variation Within Consistency:** Each subject maintains pose family with individual variation. Unified aesthetic with individuality; contemporary feel.

**Family Unit:** Adults confident postures; children softer, more relaxed. Psychological hierarchy reflected.

**Couples Mirrored Yet Individual:** Partners mirror (both 45° angle, lean toward each other) yet maintain individuality. Connection emphasized without identity loss.

**Alternating Positioning:** Standing-seated-standing arrangement. Dynamic visual rhythm; height variation solved.

**Hand Placement:** Natural variation: hands on adjacent person's shoulder, hands clasped, hands at sides. Avoid: hands on lap (defensive), arms crossed (tense), clenched fists (tension).

---

### Gender Expression & Body Diversity: Inclusive Posing Framework

**Foundational Principle:** Contemporary inclusive photography replaces binary gender-based posing conventions with flexible, subject-directed approaches centered on individual comfort, identity expression, and authentic representation. Technical specifications provide equipment recommendations, lighting approaches adaptive to diverse body presentations, and communication frameworks for genuine collaboration.

#### Subject Agency & Collaborative Workflow

```yaml
inclusive_photography_flags:
  - collaboration_pre_shoot_consultation
  - collaboration_guided_prompts_over_directives
  - collaboration_continuous_check_ins
  - collaboration_real_time_review
  - collaboration_editing_discussion
  - communication_pronouns_consistent
  - communication_preferred_names
  - communication_identity_aspects_subject_decides
```

**Pre-Shoot Consultation:** Discuss subject's vision, comfort levels, identity aspects to highlight. Establish trust through transparent communication.

**Guided Prompts vs. Directives:** "Show me how you naturally stand" (agency) vs. "Put your hand here" (directive). Open prompts allow authentic expression; directives impose photographer's aesthetic.

**Continuous Check-Ins:** "How does that feel?" "Is this comfortable?" Real-time feedback ensures subject comfort overrides aesthetics.

**Real-Time Review:** Show subject images during shoot for feedback. Subject maintains agency throughout.

**Editing Collaboration:** Discuss post-processing preferences before retouching. Subject provides input on skin smoothing level, feature emphasis.

**Communication Specifics:** Use subject's pronouns consistently (they/them, ze/zir, etc.); use preferred names (may differ from legal names); inquire about identity aspects subject wants highlighted; ask which features to emphasize vs. de-emphasize.

#### Contemporary Lighting Approaches (Non-Binary)

```yaml
inclusive_lighting_flags:
  - lighting_chosen_based_mood_not_gender
  - lighting_soft_can_convey_strength_vulnerability
  - lighting_hard_can_convey_vulnerability_strength
  - short_lighting_slimming_dramatic_subject_preference
  - broad_lighting_brightening_widening_subject_preference
  - contemporary_fluid_angles_30_45_universal_flattering
```

**Outdated Binary Critique:** "Feminine" = soft/flat/bright/high-key; "masculine" = hard/contrasty/low-key/dramatic. Contemporary practice rejects this false dichotomy.

**Contemporary Approach:** Lighting chosen based on mood and subject preference. Soft light can convey strength; hard light can convey vulnerability. Subject input overrides assumptions.

**Short Lighting:** Key light side farthest from camera; side closest in shadow. Slimming, dramatic, sculptural. Use when subject desires this aesthetic.

**Broad Lighting:** Key light side closest to camera; shadow far side. Brightening, widening, lighter mood. Use when subject desires.

**Fluid Angles:** Slight angle (30–45°) most universally flattering. Weight distribution subject comfort–based, not gender. Hip positioning subject's natural stance and body shape. Shoulder orientation face shape and desired mood (not gender). Head tilt subject-determined.

**Adaptive Positioning:** Wheelchair users: photographer may lower position (kneels, sits on stool). Children: get down to eye level for equality. Seated subjects: camera at seated eye height.

#### Body Diversity Technical Specifications

```yaml
body_diversity_technical_specs:
  - aperture_individual_f1_8_f2_8_tight_headshots
  - aperture_individual_f2_8_f4_head_and_shoulders
  - focal_length_85mm_standard_minimal_distortion
  - focal_length_105_135mm_ideal_close_headshots
  - focal_length_avoid_below_50mm_distortion
  - camera_angle_eye_level_equality_flattering
  - camera_angle_slightly_above_10_15_elevation
  - camera_angle_avoid_below_except_creative_intent
```

**Focal Length Essentials:** 85mm recommended standard (minimal close-up distortion, flattering perspective, natural proportions). 105–135mm "sweet spot" for extremely close headshots (2× standard focal length, maximum natural perspective). Avoid below 50mm close portraits (unflattering nose/jaw distortion).

**Aperture Ranges:** f/1.8–f/2.8 tight headshots (maximum background blur); f/2.8–f/4 head-and-shoulders (standard portrait); f/4–f/5.6 modest background blur with context.

**Camera Angle Equality:** Eye-level (sensor at eye height) establishes equality, universally flattering for all body types/abilities.

**Elevated (10–15°):** Minimizes double chin, elongates neck. Avoid shooting too high (creates diminishing/objectifying effect).

**Wheelchair User Positioning:** May require photographer to lower position to seated eye level. Never shoot down without aesthetic reason (creates diminishing representation).

**Children:** Get down to eye level physically; creates equal power dynamic; establishes respect; produces naturally flattering angles.

#### Inclusive Language & Communication

```yaml
inclusive_communication_flags:
  - language_partner_significant_other
  - language_pronouns_they_them_ze_zir
  - language_person_with_wheelchair_subject_preference
  - language_prompt_how_do_you_want_positioned
  - language_prompt_what_feels_natural
  - language_avoid_bride_groom_assumption
  - language_avoid_binary_who_is_man_woman
  - language_avoid_ableist_wheelchair_bound
```

**Affirming Practices:**
- "Partner," "significant other," "couple"; subject's stated pronouns (they/them, ze/zir, etc.)
- "Person with wheelchair" or subject's preference; avoid "wheelchair-bound," "suffers from"
- "How do you want to be positioned?" vs. gendered directives
- "What feels natural to you?" vs. gender assumptions
- "Tell me about your relationship dynamic" vs. "Who's the man/woman?"

**Avoiding Problematic Language:**
- Gendered assumptions ("bride/groom," "husband/wife" without confirmation)
- Binary questions ("Who's the man/woman?" or similar)
- Ableist language ("wheelchair-bound," "suffers from")
- "Normal" to describe non-marginalized groups
- Physical descriptions centering deficit

**Directing Without Gender Assumptions:**
- Instead of "Bride, lean into groom" → "[Name], lean into [Name]" or "Partner on left, lean toward partner on right"
- Instead of "Man should stand behind" → "Taller partner behind" or ask "How do you two usually stand together?"
- Instead of "Try a more masculine/feminine pose" → "Try a stronger/softer energy" or "More dynamic/more relaxed"

#### Ethical Considerations in Diverse Photography

```yaml
inclusive_ethical_flags:
  - consent_informed_before_photographing
  - consent_image_usage_distribution
  - consent_subject_review_before_publication
  - consent_subject_right_decline_shots
  - representation_authentic_vs_tokenism
  - representation_consequence_analysis
  - exploitation_avoidance_subject_dignity
```

**Foundational Framework:**
- Always obtain informed consent before photographing
- Discuss image usage and distribution explicitly
- Allow subject to review images and provide input
- Respect subject's right to decline certain shots
- Build trust through transparent communication

**Avoiding Exploitation:**
- Question "Am I perpetuating stereotypical narratives?"
- Question "Who will be harmed? Who will be helped?"
- Question "What are the likely consequences?"
- Avoid tokenism (diversity as marketing tactic without authentic representation)
- Ensure authentic representation vs. performative inclusion

**Key Takeaway:** Inclusive portrait photography is not about adding "diverse subjects" to existing approaches, but fundamentally reimagining the photographic process as collaborative, adaptive, and subject-directed. The most critical "specification" is flexibility—no single approach works for every subject. Success requires photographers to continuously learn, question assumptions, adapt techniques, and center subject comfort and authentic representation above aesthetic conventions.

---

## Appendix: Film Stock Reference Library

### Color Negative Film

- **Kodak Portra 160:** ISO 160; warm, forgiving; excellent highlight latitude; professional standard
- **Kodak Portra 400:** ISO 400; warm, forgiving; best all-around portrait film; grain acceptable
- **Kodak Portra 800:** ISO 800; warm, slightly more grain; emergency speed; professional portrait fallback
- **Fujifilm C200:** ISO 200; warm cast; fine grain; affordable; slightly green tint
- **Fujifilm Superia 400:** ISO 400; slightly warm; affordable; good versatility

### Black & White Negative Film

- **Kodak Tri-X 400:** ISO 400; punchy contrast; organic grain; classic aesthetic; beloved by documentarians
- **Kodak T-Max 100:** ISO 100; T-Grain (fine, tabular); sharp rendering; minimal grain; clinical
- **Kodak T-Max 400:** ISO 400; Fine grain for speed; sharp rendering; popular for 4x5 large format
- **Ilford HP5 Plus:** ISO 400; traditional grain; excellent latitude; European standard
- **Ilford Delta 100:** ISO 100; Fine grain; modern emulsion; sharp detail

### Color Slide Film (E6 Process)

- **Fujifilm Velvia 50:** ISO 50; hyper-saturated; fine grain; landscape standard; NOT for portraits
- **Fujifilm Velvia 100:** ISO 100; saturated; fine grain; more practical than Velvia 50
- **Fujifilm Provia 100F:** ISO 100; Neutral color; fine grain; excellent fidelity; professional standard
- **Kodak Ektachrome 100:** ISO 100; Recently reintroduced; warm, balanced; excellent for portraiture

### Instant Film (Polaroid/Fujifilm Instax)

- **Polaroid 600/SX-70:** ISO 75-150 (depending on type); Dye diffusion; instant gratification; soft colors
- **Fujifilm Instax Mini:** Various ISO; Instant analog aesthetic; small format; contemporary use

---

The `Photography_Dictionary_v1_2_INTEGRATED.md` is an impressive technical reference, but like the Universal Dictionary, it suffers from being a **Catalog of Parts** rather than a **Manual of Operations** for a reasoning model.

The Gap for Nano Banana Pro:

The current dictionary lists what things are (kodak_portra, f/1.4), but it doesn't describe why a photographer chooses them or how they interact physically to create a "vibe." Nano Banana Pro excels when given Cognitive Strategies and Visceral Physics.

To fix the "Generic Digital Look" and the "Stock Photo Face," we need to add sections that force the model to simulate the **Photographer's Mind** (Intent) and the **Camera's Flaws** (Physics).

Here is the **Photography Dictionary v1.3 (Nano-Native Expansion)**. This addendum introduces "Logic Flags" that drive the reasoning engine.



### Photography Dictionary v1.3 — Nano-Native Expansion



**Copy and save this as `Photography_Dictionary_v1_3_Nano_Expansion.md`** and append it to your existing file.

------

# 12. Photographic Cognitive Flags (The "Photographer's Brain")

These flags control the **Chain-of-Thought** regarding the *intent* of the shot. They tell the model how to approach the subject before "clicking the shutter."

```yaml
photo_cognitive_flags:
  - logic-intent-decisive-moment
  - logic-intent-constructed-narrative
  - logic-intent-voyeuristic-distance
  - logic-intent-confrontational-intimacy
  - logic-intent-clinical-typology
  - logic-intent-snapshot-aesthetic
  - logic-intent-pictorialist-dream
```



### Usage Definitions



| **Flag**                                  | **Instruction to Reasoning Engine**                          |
| ----------------------------------------- | ------------------------------------------------------------ |
| **logic-intent-decisive-moment**          | "Wait for the geometry and action to align perfectly. The composition must feel found, not made. Prioritize timing over technical perfection." (Use for: Cartier-Bresson, Street Photo) |
| **logic-intent-constructed-narrative**    | "Every element is staged. Lighting is theatrical. The subject is an actor. Reality is secondary to the story." (Use for: Crewdson, LaChapelle) |
| **logic-intent-voyeuristic-distance**     | "The camera is a hidden observer. Do not engage the subject. Framing should feel stolen or obscured by foreground elements." (Use for: Surveillance art, Paparazzi style) |
| **logic-intent-confrontational-intimacy** | "Force the camera into the subject's personal space (0-30cm). Induce discomfort or raw honesty. Use a wide lens to exaggerate features." (Use for: Platon, Richardson) |
| **logic-intent-clinical-typology**        | "Treat the subject as a specimen. Flat lighting, deadpan expression, frontal angle. Zero emotion. Maximum objectivity." (Use for: Becher, Ruff) |
| **logic-intent-snapshot-aesthetic**       | "Deliberately introduce 'amateur' errors: bad framing, direct flash, motion blur, red-eye. Authenticity comes from imperfection." (Use for: Goldin, Tillmans) |

------



# 13. Visceral Optical Physics (The "Glass Character")



Current lens flags are too technical (`85mm`). These flags describe the **physical character** of the glass to prevent the "perfect CG render" look.

YAML

```
visceral_optical_flags:
  - optics-character-vintage-uncoated
  - optics-character-cinema-anamorphic
  - optics-character-plastic-toy
  - optics-character-clinical-modern
  - optics-character-petzval-swirl
  - optics-physics-veiling-glare
  - optics-physics-chromatic-smear
```



### Usage Definitions



| **Flag**                               | **Sensory Instruction**                                      |
| -------------------------------------- | ------------------------------------------------------------ |
| **optics-character-vintage-uncoated**  | "Simulate a pre-1950s lens lacking anti-reflective coatings. Contrast is low. Highlights 'bloom' into shadows. Backlight causes a milky wash (Veiling Glare)." |
| **optics-character-cinema-anamorphic** | "Simulate an oval-squeeze lens. Background bokeh must be vertical ovals. Horizontal flares are blue/streak. Edges are soft and distorted." |
| **optics-character-plastic-toy**       | "Simulate a Holga/Diana lens. Center is sharp, edges smear into a blur tunnel. Light leaks (red/orange) enter from the sides. Heavy vignetting." |
| **optics-character-petzval-swirl**     | "Simulate extreme field curvature. The bokeh must 'spin' around the center subject. Background looks like a vortex." |
| **optics-physics-chromatic-smear**     | "Simulate lens separation. High-contrast edges must show green/magenta fringing. The image should feel slightly misaligned at the corners." |

------



# 14. Chemical & Sensor Logic (The "Texture Engine")



These flags replace simple film names with **Emulsion Physics** to force the model to render "dirt" instead of digital noise.

YAML

```
chemistry_sensor_flags:
  - chemistry-logic-silver-halide-clump
  - chemistry-logic-dye-cloud-diffusion
  - chemistry-logic-bleach-bypass-crunch
  - chemistry-logic-expired-emulsion-shift
  - sensor-logic-ccd-blooming
  - sensor-logic-bayer-pattern-artifact
```



### Usage Definitions



| **Flag**                                   | **Physics Instruction**                                      |
| ------------------------------------------ | ------------------------------------------------------------ |
| **chemistry-logic-silver-halide-clump**    | "Grain is not uniform noise. It is random clumps of silver crystals. It is more visible in mid-tones and shadows. It softens edge acuity." (B&W Film) |
| **chemistry-logic-dye-cloud-diffusion**    | "Color film grain is soft 'clouds' of dye, not sharp grit. Colors bleed slightly into neighbors. The image feels thick." (Color Negative) |
| **chemistry-logic-bleach-bypass-crunch**   | "Skip the bleach step. Silver is retained in the emulsion. Blacks are crushed solid. Highlights are blown out. Saturation is low, contrast is extreme." |
| **chemistry-logic-expired-emulsion-shift** | "The chemicals are old. Shadows drift Green/Magenta. Contrast is faded (base fog). Random mottling or texture appears in the sky." |
| **sensor-logic-ccd-blooming**              | "Simulate early digital sensors. Bright highlights (sun, bulbs) bleed vertically into streaks. Colors clip abruptly to pure white." |

------



# 15. Lighting Behavior Flags (The "Photon Physics")



These flags describe how photons behave, helping the model calculate **Falloff** and **Wrap** rather than just "placing a softbox."

YAML

```
lighting_physics_flags:
  - light-physics-inverse-square-rapid
  - light-physics-inverse-square-infinite
  - light-physics-specular-wrap
  - light-physics-subsurface-scatter-skin
  - light-physics-volumetric-haze
```



### Usage Definitions



| **Flag**                                  | **Physics Instruction**                                      |
| ----------------------------------------- | ------------------------------------------------------------ |
| **light-physics-inverse-square-rapid**    | "The light source is very close. Exposure drops off dramatically across the subject's face (e.g., nose is bright, ear is dark). Background goes to black immediately." |
| **light-physics-inverse-square-infinite** | "The light source is the Sun or distant strobe. Exposure is identical on the subject and the background. No falloff visible." |
| **light-physics-specular-wrap**           | "The skin is oily or sweaty. The light source reflects as a 'sheen' that wraps around the curvature of the muscle/bone structure." |
| **light-physics-volumetric-haze**         | "The air is dirty (smoke/dust). Light beams are visible as physical cones. Blacks are lifted to grey by the illuminated air." |

------



## Integration Guide: How to use these in Framework v5.2



**In Section 1 (Core Identity):**

> "Cognitive Intent: `logic-intent-snapshot-aesthetic` (Prioritize imperfection over composition)."

**In Section 2 (Material Physics):**

> "Lens Physics: optics-character-vintage-uncoated (Force veiling glare and low contrast)."
>
> "Emulsion Physics: chemistry-logic-expired-emulsion-shift (Inject base fog and color drifts)."

**In Section 4 (Technical Method):**

> "Lighting Logic: `light-physics-inverse-square-rapid` (Create dramatic falloff)."

