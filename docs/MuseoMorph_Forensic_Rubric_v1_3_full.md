# MuseoMorph Forensic Rubric v1.3 (Full Multi-Medium Edition)

**Purpose:**  
Objective scoring system for validating generated artwork, photographs, animations, or hybrids against corpus standards defined by Style Protocol v2.4 and Framework v4.4.

**Audience:**  
- Claude Vision / other vision models  
- Validation pipelines  
- Framework developers  
- Animation, photography, fine art, and hybrid production teams

**Updated:** 2025-11-14  
**Status:** Production Ready (Full Multi-Medium Edition)

---

## 📋 RUBRIC OVERVIEW

### Quick Reference: Scoring Tiers

| Score Range | Status | Meaning |
|------------|--------|---------|
| 90–100 | ✅ PASS | Museum-grade / production-grade execution |
| 85–89 | ✅ PASS | Production-ready (minor polish possible) |
| 80–84 | ⚠️ MARGINAL | Acceptable but requires iteration |
| 70–79 | ❌ FAIL | Significant gaps, major revision needed |
| 0–69 | ❌ FAIL | Structural failure or incomplete analysis |

**Minimum Threshold:** ≥85/100  
**Validation Cycles:** Minimum 3 test cycles before approval

---

## 🎯 CATEGORY FRAMEWORK

### Scoring System Overview

**Base System (Painterly + Photographic): 8 Categories, 100 points**

| # | Category | Points | Focus |
|---|----------|--------|-------|
| 1 | Anatomical Stylization & Pose | 20 | Proportions, angles, gesture consistency |
| 2 | Edge Quality, Surface & Grain | 15 | Softness, texture, medium authenticity |
| 3 | Tonal Structure & Dynamic Range | 10 | Value zones, contrast, light/shadow detail |
| 4 | Color Palette & Medium Response | 10 | Hex roles, saturation, film/sensor signature |
| 5 | Geometric Treatment & Perspective | 15 | Faceting, angles, lens behavior, vanishing points |
| 6 | Lighting & Optical Behavior | 10 | Direction, ratios, DOF, flare, shadow quality |
| 7 | Fabric/Material Rendering | 10 | Fold geometry, reflectance, material authenticity |
| 8 | Background, Composition & Ratio | 10 | Density, balance, aspect ratio enforcement |
| — | **Subtotal** | **100** | **For painterly/photographic modes** |

### Animation Enhancement (Optional Category 9): +15 points

When `animation` or `hybrid-animation` mode:

| # | Category | Points | Focus |
|---|----------|--------|-------|
| 9 | Animation-Specific Elements | 15 | Camera logic, motion grammar, compositing, revision visibility |

**Total for animation/hybrid: 115 points** (Category 9 scales to max 15 points, total still normalizes to 0–100 for decision-making via proportional weighting).

---

## 📊 SCORING METHODOLOGY

### Core Deviation Formula (All Modes)

For each quantifiable metric in each category:

```
deviation = abs(test_value - corpus_mean) / corpus_mean

IF deviation ≤ tolerance:
  metric_score = max_metric_points (90–100% of category points allocated to this metric)
ELSE IF deviation ≤ tolerance × 1.5:
  metric_score = max_metric_points × 0.80
ELSE IF deviation ≤ tolerance × 2.0:
  metric_score = max_metric_points × 0.60
ELSE:
  metric_score = max_metric_points × 0.30
```

**Within each category:**
- Calculate metric_score for each measurement
- Average metric scores for category subtotal
- If category contains flags: blend metric average (80% weight) + flag alignment (20% weight)

**Aggregate to composite:**
- `composite_score = SUM(category_subtotals) / 8` (for painterly/photographic)
- `composite_score = SUM(category_subtotals) / 9` (for animation, scales Category 9 proportionally)
- Final score normalized to 0–100 scale

---

## 🔍 CATEGORY DETAIL SPECIFICATIONS

### Category 1: Anatomical Stylization & Pose (20 points)

**Metrics to Extract & Compare:**

- **Pose angles** (in degrees):
  - Head tilt (vertical and lateral)
  - Shoulder rotation relative to hips
  - Hip tilt angle
  - Elbow/knee joint flexion angles
  - Weight distribution (% on each leg/support)
  - Tolerance: ±5° for most angles; ±10% for weight distribution

- **Limb proportions** (ratio-based):
  - Head:body ratio (typical 1:7 to 1:8)
  - Arm:leg length ratios
  - Feature scale percentages (eye size as % of face width, etc.)
  - Tolerance: ±5% deviation acceptable

- **Stylization consistency**:
  - Exaggeration uniformly applied (e.g., all features elongated equally)?
  - Gesture coherence across multiple poses in series?
  - Tolerance: visual consistency judgment, flagged as present/absent

- **Photographic-specific**:
  - Pose-family alignment (editorial vs candid vs formal per Photography Dict v1.2)?
  - Lighting-pose optimization (does pose show lighting effectively)?
  - Tolerance: flag presence/absence

- **Common Failures:**
  - Flattened stylization (exaggeration lost)
  - Overcorrected "realism" in stylized corpus
  - Inconsistent pose language across modes
  - Anatomically impossible joint angles
  - Gender expression drift (if cross-mode consistency required)

**Category 1 Scoring:**
- Pose angles: 10 pts (if all within tolerance, full; scale down per deviation band)
- Proportions: 5 pts (if all ratios within tolerance)
- Stylization consistency: 5 pts (presence of coherent style language)
- Photographic/animation flags: 0 pts (pass/fail criterion; if fail, deduct from other metrics)

---

### Category 2: Edge Quality, Surface & Grain (15 points)

**Metrics to Extract & Compare:**

- **Edge softness coefficient** (0–1 scale, where 0=razor-hard, 1=completely soft):
  - Per region: facial features, fabric, background
  - Tolerance: ±0.15 deviation (corpus mean may be 0.6; test acceptable at 0.45–0.75)

- **Surface texture authenticity**:
  - **Painterly**: impasto thickness (mm), brushstroke visibility, scumble patterns, glazing transparency
  - **Photographic**: grain/noise character (luminance vs chroma), grain size (μm), ISO response
  - **Animation**: cel consistency, line weight uniformity, pencil-test visibility if applicable
  - Tolerance: visual match to flag signature (present/absent)

- **Transition quality**:
  - Hard edges where style requires sfumato? (failure)
  - Soft edges where style requires precision? (failure)
  - Gradual blends vs abrupt steps (appropriate to style)?
  - Tolerance: qualitative; flagged present/absent

- **Common Failures:**
  - AI plastic-smoothing overapplied (edges vanish)
  - Digital noise artifact where film grain required
  - Painterly brushwork absent in painted style corpus
  - Grain/noise inconsistent across image (spotty, clumpy)
  - Line weight variation absent in consistent-line styles (animation)

**Category 2 Scoring:**
- Edge softness: 7 pts (if coefficient within tolerance across regions)
- Surface texture: 5 pts (authenticity signature match)
- Transition consistency: 3 pts (appropriate to style, no jarring artifacts)

---

### Category 3: Tonal Structure & Dynamic Range (10 points)

**Metrics to Extract & Compare:**

- **Tonal step count per major form** (typical range 4–8):
  - Count distinct Lightness values (L) per form (face, torso, etc.)
  - Tolerance: ±1 step acceptable (corpus mean 6; test acceptable 5–7)

- **Distribution pattern**:
  - Even spacing across L range, or clustered in midtones?
  - Highlight ceiling (L ≤95%), shadow floor (L ≥25%)?
  - Tolerance: shadow floor violation critical failure; highlight ceiling violation major failure

- **Photographic dynamic range**:
  - Highlight rolloff (graceful vs hard clipping)?
  - Shadow detail retention (3–5 stops of recovery typical for film)?
  - Luminance floor appropriate to film/sensor corpus baseline?
  - Tolerance: ±1 stop acceptable for underexposure; ±0.5 stops for overexposure

- **Animation tonal requirements**:
  - If limited animation: distinct color blocks with clear edges (5–8 colors)?
  - If smooth animation: gradient smoothness, tonal blends within limits?
  - Tolerance: visual match to reference frame sampling

- **Common Failures:**
  - Muddy midtones (all values clustered 40–60% L)
  - Clipped blacks (L <20% with detail loss)
  - Blown highlights (L >95% with detail loss)
  - Posterized (too few steps, 2–3 only)
  - Overly smooth (infinite gradation, no distinct steps)

**Category 3 Scoring:**
- Step count: 5 pts (if within tolerance)
- Distribution pattern: 3 pts (appropriate spacing, floor/ceiling respected)
- Dynamic range: 2 pts (highlight/shadow detail readable)

---

### Category 4: Color Palette & Medium Response (10 points)

**Metrics to Extract & Compare:**

- **Hex values in correct roles** (with L% validation):
  - Highlight hex: L should be 80–95%
  - Mid/flesh hex: L should be 50–70% (or 55–75% for skin)
  - Shadow hex: L should be 30–50%
  - Accent/color hex: L role appropriate to intention
  - Tolerance: ±5% L deviation; if exceed ±10%, critical failure
  - **Reference corpus baseline:** extract dominant hex values per role from ≥20 corpus images

- **Hue and saturation ranges**:
  - Primary hue range (e.g., earth tones 15–35° H, or cool tones 180–240° H)
  - Saturation consistency (low-saturation palette vs high-saturation?)
  - Tolerance: ±10° H acceptable; ±10% S acceptable

- **Photographic medium response**:
  - Film stock signature (Portra warmth vs Provia neutrality vs Velvia saturation)?
  - White balance consistency (warm golden-hour vs cool daylight vs tungsten interior)?
  - Tolerance: color cast within ±500K of corpus average

- **Animation color palette**:
  - Limited palette vs rich palette (is corpus 8-color or 256-color)?
  - Color harmony (split-complementary, analogous, triadic)?
  - Tolerance: palette size ±2 colors acceptable; harmony type match required

- **Common Failures:**
  - Incorrect lightness for role (shadow L=75% is invalid)
  - Color contamination (modern neon in historical palette)
  - Generic "digital HDR" look vs specific film/sensor aesthetic
  - Desaturation wrong (flesh tones gray instead of warm)
  - Saturation override (overly vivid where muted required)

**Category 4 Scoring:**
- Hex role validation: 5 pts (if all hex L% within range and framework spec)
- Hue/saturation consistency: 3 pts (palette cohesion, no jarring contamination)
- Medium response signature: 2 pts (film/sensor/animation aesthetic recognizable)

---

### Category 5: Geometric Treatment & Perspective (15 points)

**Metrics to Extract & Compare:**

- **Geometric treatment** (if faceted/angular style):
  - Degree of faceting or curvature (measure angles where applicable)
  - Facet angle consistency (e.g., all faces 45° ±10°?)
  - Tolerance: ±10° acceptable for facet angles

- **Perspective integrity**:
  - Vanishing points correctly placed (for linear perspective)?
  - Camera height (eye-level, low, high?) consistent with corpus?
  - Horizon line position (thirds, center, off-center?)?
  - Tolerance: ±5% frame position acceptable

- **Photographic lens behavior**:
  - Focal length signature (35mm vs 50mm vs 85mm vs 135mm?):
    - 35mm: wide FOV ≈63°, perspective distortion visible
    - 50mm: natural FOV ≈46°, minimal distortion
    - 85mm: compressed FOV ≈28°, background flattened
    - 135mm: extreme compression FOV ≈18°
  - Lens distortion pattern (barrel vs pincushion vs rectilinear)?
  - Tolerance: ±10° FOV acceptable; distortion type must match

- **Animation camera geometry**:
  - Camera distance from subject (affects apparent scale)?
  - Lens FOV in degrees (how "zoomed" is the frame)?
  - Dolly vs zoom behavior consistency?
  - Tolerance: ±5° FOV acceptable; dolly vs zoom type match required

- **Common Failures:**
  - Absent geometric treatment where style requires it
  - Wrong perspective regime (wide-angle compression where telephoto required)
  - Vanishing point drift (perspective incoherent)
  - Inconsistent lens behavior across sequence (jumps between 35mm and 135mm)
  - Distortion present where rectilinear required

**Category 5 Scoring:**
- Geometric treatment: 7 pts (if facet/curvature angles consistent)
- Perspective integrity: 5 pts (vanishing points, horizon, camera height correct)
- Lens/camera behavior: 3 pts (optical signature matches corpus)

---

### Category 6: Lighting & Optical Behavior (10 points)

**Metrics to Extract & Compare:**

- **Key light direction** (in degrees from camera axis):
  - 0°: frontal (flat, even)
  - 45°: Rembrandt/loop pattern (classic portrait)
  - 90°: sidelight (dramatic, sculptural)
  - 180°: backlighting (rim light, silhouette)
  - Tolerance: ±15° acceptable

- **Key/fill/backlight ratios** (as X:Y, e.g., 3:1):
  - Typical ranges: 1:1 (flat), 2:1 (moderate), 3:1 (dramatic), 4:1 (extreme)
  - Tolerance: ±0.5:1 acceptable (corpus 3:1, test acceptable 2.5:1–3.5:1)

- **Shadow quality**:
  - Shadow softness (0–1 scale, soft modifier vs hard reflector?)
  - Shadow floor (minimum luminance L in shadows; should be ≥25% for detail)?
  - Contrast ratio (highlight/shadow luminance ratio)?
  - Tolerance: shadow floor violation critical; softness ±0.2 acceptable

- **Photographic-specific**:
  - DOF thickness (in cm/inches at subject distance)?
  - Bokeh character (soft/hard/creamy per bokeh flags v2.2)?
  - Catchlight presence/absence (dual reflection artificial lighting signature)?
  - Tolerance: DOF ±10% acceptable; bokeh type match required

- **Animation-specific**:
  - Camera-relative lighting (is light locked to camera or world-space fixed)?
  - Shadow consistency (smooth falloff vs stylized hard edges)?
  - Glow/rim-light emphasis (present/absent as per flags)?
  - Tolerance: flag presence/absence match required

- **Common Failures:**
  - Flat, unmotivated lighting (no direction, no modeling)
  - Shadows too dark for style (crush blacks inappropriately)
  - Shadows too bright (loses modeling, looks washed out)
  - DOF inappropriate (shallow where deep required, or vice versa)
  - Bokeh mismatch (creamy bokeh where hard reflector bokeh required)
  - Lighting logically inconsistent (multiple light sources creating impossible shadows)

**Category 6 Scoring:**
- Key light direction & ratio: 5 pts (if within tolerance)
- Shadow quality: 3 pts (softness, floor, contrast appropriate)
- DOF/bokeh/lighting consistency: 2 pts (photographic/animation signature correct)

---

### Category 7: Fabric/Material Rendering (10 points)

**Metrics to Extract & Compare:**

- **Fold geometry consistency**:
  - Do folds follow gravity and fabric weight?
  - Are fold intersections physically plausible?
  - Fold count per garment (typical 5–15 primary folds)?
  - Tolerance: ±3 primary folds acceptable; gravity-consistent required

- **Material-specific rendering**:
  - **Silk**: smooth, shiny, light-reflecting folds, minimal texture
  - **Linen**: stiff, angular folds, visible weave texture, matte surface
  - **Velvet**: soft, light-absorbing, rounded folds, deep blacks
  - **Wool**: mid-weight, organized folds, slight texture, warm tone
  - Tolerance: fabric-specific rendering must match identified material type

- **Surface reflectance** (specular vs diffuse):
  - Highly reflective material (silk, satin): bright specular highlights
  - Mid-reflectance (linen, cotton): subtle highlights, matte midtones
  - Diffuse (velvet, suede): no highlights, absorbed light, deep color
  - Tolerance: reflectance type must match material signature

- **Material authenticity**:
  - Period-appropriate fabric types (no synthetic fabrics pre-20th century)?
  - Dyeing authenticity (natural dyes for pre-1856, synthetic after)?
  - Tolerance: anachronistic materials critical failure

- **Animation-specific**:
  - Cloth simulation consistency (if moving: gravity-responsive, weight-aware)?
  - Linework on fabric (cel animation: do folds have consistent line weight?)?
  - Tolerance: physical consistency required; line uniformity required if cel style

- **Common Failures:**
  - Generic "AI cloth" folds (no physical logic)
  - Incorrect reflectance (velvet rendered shiny, silk rendered matte)
  - Anachronistic materials (polyester in 1890s corpus)
  - Folds fight gravity (hang impossibly, float in air)
  - Fabric weight inappropriate (heavy wool rendered light and floaty)

**Category 7 Scoring:**
- Fold geometry: 5 pts (gravity-consistent, appropriate count/density)
- Material rendering: 3 pts (reflectance, texture, authenticity match)
- Physical authenticity: 2 pts (weight behavior, fabric type accuracy)

---

### Category 8: Background, Composition & Ratio (10 points)

**Metrics to Extract & Compare:**

- **Background detail density** (% of frame):
  - Typical ranges: minimal 10–20%, moderate 30–50%, busy 60–80%
  - Tolerance: ±10% area acceptable if coherent

- **Atmospheric depth**:
  - Number of depth planes (foreground, midground, background, atmospheric recede)?
  - Recessive color (distant elements desaturated, cooler hue)?
  - Tolerance: ±1 plane acceptable; color recession rules apply

- **Figure:ground balance**:
  - Subject occupies X% of frame; background occupies (100-X)%
  - Typical ranges: tight 40–60%, environmental 30–50%, minimal 10–25%
  - Tolerance: ±10% acceptable if compositional intent clear

- **Aspect ratio enforcement** (CRITICAL):
  - Test image must be generated at exactly declared ratio (or adapted ratio per Section 2.1 of Framework v4.4)
  - If adapted ratio: composition must be re-optimized for final ratio (no lazy cropping or padding)
  - Tolerance: ±2% aspect ratio drift acceptable (1632×640 acceptable if 16:9 declared, as pixels scale; pixel-perfect not required)

- **Composition geometry**:
  - Rule-of-thirds applied? Golden spiral? Symmetrical? (as per framework spec)
  - Leading lines guide eye appropriately?
  - Off-center elements balance compositionally?
  - Tolerance: visual judgment; compositional intent must be recognizable

- **Animation-specific**:
  - Is camera logic (static/tracking/pan/crane) consistent with frame?
  - Shot grammar (long-take composition vs rapid-cut tight framing)?
  - Tolerance: camera behavior consistency required

- **Common Failures:**
  - Too-busy background (competes with subject)
  - Too-empty background (looks artificial, incomplete)
  - Ratio drift (generated at wrong aspect ratio entirely)
  - Composition ratio off significantly (figure squeezed or background excessive)
  - Atmospheric depth missing (flat 2D appearance when 3D expected)
  - Camera logic drift (static frame then suddenly dynamic without transition)

**Category 8 Scoring:**
- Background density: 3 pts (appropriate to style, coherent)
- Atmospheric depth: 2 pts (planes/recessive color appropriate)
- Figure:ground balance: 2 pts (composition intentional, elements weighted)
- **Ratio enforcement: 3 pts** (CRITICAL: exact ratio achieved, composition optimized for that ratio)

---

### Category 9: Animation-Specific Elements (15 points) — *If `animation` or `hybrid-animation` mode only*

**This category is OPTIONAL and only scored if animation or hybrid-animation mode detected.**

#### 9.1 Cinematic Camera Logic (5 points)

**Metrics to Extract & Compare:**

- **Camera movement type** (per Flag Family 13):
  - Static (no movement) vs tracking (linear path) vs pan (horizontal swing) vs crane (vertical travel) vs orbit vs dolly vs combination
  - Must match framework declaration
  - Tolerance: flag type match required

- **Framing angle** (in degrees):
  - High (power down, negative angle), level (0°), low (vulnerability, positive angle), dutch-tilt (rotated X°)
  - Tolerance: ±5° acceptable for angle measurements

- **Lens FOV** (degrees):
  - Wide (~60°), normal (~46°), telephoto (~28°+)
  - Must match framework specification
  - Tolerance: ±5° acceptable

- **Focus layering** (DOF):
  - Shallow (isolated subject), medium (subject+environment context), deep (landscape focus)
  - Must match framework
  - Tolerance: visual match to reference required

- **Common failures:**
  - Camera movement absent when declared (supposed to pan, but static)
  - Wrong framing angle (high angle when low required for vulnerability)
  - Lens FOV mismatch (wide compression when telephoto required)
  - Focus inconsistent (switches DOF mid-scene when should be locked)

**Category 9.1 Scoring: 5 pts**
- All camera logic flags present and consistent: 5 pts
- 1 flag missing/mismatched: 3 pts
- 2+ flags missing/mismatched: 1 pt
- Critical mismatch: 0 pts

#### 9.2 Motion & Action Grammar (5 points)

**Metrics to Extract & Compare:**

- **Motion stylization** (per Flag Family 15):
  - Smear frames (present/absent, intensity 1–10)?
  - Motion multiples (ghost frames, count)?
  - Speed lines (present/absent, density)?
  - Impact frames (hold frame count)?

- **Timing philosophy**:
  - Snappy (low frame count, fast easing) vs fluid (high frame count, smooth arcs) vs limited (pose-to-pose)?
  - Must match framework declaration
  - Tolerance: visual classification match required

- **Physical logic**:
  - Realistic weight (believable gravity + mass) vs exaggerated (defies gravity, stylized arcs)?
  - Speed exaggeration (% over realistic: 110% slight, 150%+ extreme)?
  - Tolerance: classification match required; exaggeration ±20% acceptable

- **Action readability**:
  - Silhouette clarity (0–1 scale, edge contrast)?
  - Anticipation visible (wind-up frames)?
  - Follow-through emphasized (secondary motion)?
  - Tolerance: ±0.15 silhouette clarity; presence flags required

- **Common failures:**
  - Smear frames absent when framework requires
  - Timing philosophy mismatch (snappy when fluid required)
  - Physical logic breaks (unrealistic weight in realistic corpus)
  - Action silhouette unclear (overlapping forms, muddy outlines)
  - Anticipation missing (action telegraphs poorly)

**Category 9.2 Scoring: 5 pts**
- All motion grammar elements present and matched: 5 pts
- 1–2 elements mismatched: 3 pts
- 3+ elements mismatched: 1 pt
- Critical mismatch: 0 pts

#### 9.3 Compositing & Integration (3 pts)

**Metrics to Extract & Compare:**

- **Compositing approach** (per Flag Family 14):
  - Single-pass (unified rendering) vs multipass (separate component passes)?
  - Hybrid 2D/3D integration (seamless vs contrasted)?
  - Parallax intensity (strong vs subtle)?

- **Layer consistency**:
  - Are outlines consistent (same line weight/style)?
  - Is texture unified (same surface treatment) or hybrid (mixed)?
  - Do lighting and shadows integrate coherently?

- **Common failures:**
  - 2D/3D elements look "stitched" rather than integrated
  - Outline weight varies wildly (character thick, background thin)
  - Texture mismatches (character glossy, background matte)
  - Shadows don't track (light sources inconsistent between layers)

**Category 9.3 Scoring: 3 pts**
- All compositing elements coherent and integrated: 3 pts
- 1 integration issue: 1.5 pts
- Multiple integration failures: 0 pts

#### 9.4 Revision & Process Visibility (2 pts)

**Metrics to Extract & Compare:**

- **Revision visibility** (per Flag Family 16):
  - Construction lines visible/hidden (as per framework intent)?
  - Pentimenti/correction traces visible/hidden (as per framework intent)?
  - Line boil present/absent (hand-drawn animation jitter)?
  - Production notes visible/hidden?

- **Intentionality**:
  - Are visible traces *stylistically appropriate* or *errors*?
  - Does visibility enhance authenticity or detract?

- **Common failures:**
  - Construction lines visible when framework specifies clean final
  - Pentimenti hidden when framework requires visible revision process
  - Line boil inappropriate to digital animation style

**Category 9.4 Scoring: 2 pts**
- Revision visibility matches framework intent: 2 pts
- Ambiguous or mismatch: 0 pts

---

## 🎲 CATEGORY SUMMARY TABLE

| Category | Painterly/Photo | Animation | Composite Score Weight |
|----------|-----------------|-----------|------------------------|
| 1. Anatomical | 20 | 20 | 20 / 8–9 |
| 2. Edge/Surface | 15 | 15 | 15 / 8–9 |
| 3. Tonal | 10 | 10 | 10 / 8–9 |
| 4. Color | 10 | 10 | 10 / 8–9 |
| 5. Geometric | 15 | 15 | 15 / 8–9 |
| 6. Lighting | 10 | 10 | 10 / 8–9 |
| 7. Fabric | 10 | 10 | 10 / 8–9 |
| 8. Background/Ratio | 10 | 10 | 10 / 8–9 |
| 9. Animation | — | 15 | 0 / 15 (if animation mode) |
| **Total** | **100** | **115** | **Score normalized to 0–100** |

---

## 📄 VALIDATION WORKFLOW

### Step 1: Corpus Reference Creation (Phase 2)

- Analyze ≥50 corpus images (or as many available)
- Extract metrics using mode-specific methodology:
  - Painterly: extract edge softness, tonal steps, color palette, material rendering
  - Photographic: extract film/sensor/optics/lighting metrics, pose signatures
  - Animation: extract camera logic, motion timing, compositing approach
- Build **baseline tables** with mean, standard deviation, range for each metric
- Build **flag alignment matrix**:
  - Which flags observable in corpus?
  - Which flags expected but optional?
  - Which flags contraindicated?

### Step 2: Test Image Analysis

- Generate test image(s) using framework v4.4
- Extract metrics using **identical** methodology to Phase 2
- Identify activated flags (same flag detection process as corpus)

### Step 3: Scoring Computation

**For each category:**
1. Extract all metrics from test image
2. For each metric:
   - Calculate deviation: `deviation = abs(test - corpus_mean) / corpus_mean`
   - Apply threshold bands from deviation formula
   - Award metric_score per band
3. Average metric scores within category → category subtotal
4. Blend metric average (80% weight) + flag alignment (20% weight) if flags present → adjusted category subtotal

**Aggregate to composite:**
- Sum all category subtotals
- Divide by 8 (painterly/photographic) or 9 (animation) → normalized score 0–100

### Step 4: Failure Classification & Reporting

Output detailed report:
- Final composite score
- Per-category breakdown with point allocation
- Per-category pass/fail status (colored 🟢 🟡 🔴)
- Specific metric deviations (metric name, test value, corpus mean, deviation %)
- Flag alignment (observable vs expected vs unexpected)
- Severity tier classification (CRITICAL / MAJOR / MODERATE / MINOR) for each failure
- Concrete correction recommendations (quantitative, not prose)

---

## 🎯 FAILURE CLASSIFICATION

### Severity Tiers

**CRITICAL (Must Fix Before Production):**
- Ratio mismatch (generated at wrong aspect ratio entirely)
- Facial feature distortion >3% from corpus
- Color role failure (hex L% outside specified range by >10%)
- Style-subject balance <40 points
- Multiple anachronisms present
- Mode confusion (animation-specific elements in photographic corpus, or vice versa)
- Compositional incoherence (figure placement random, no spatial logic)

**MAJOR (Should Iterate):**
- Single anachronism detected
- Gender expression inconsistency between modes
- Color palette drift >2σ
- Lighting inappropriate by >1.5σ (e.g., key light 20° off target)
- DOF mismatch (shallow where deep required)
- Animation: camera logic absent when declared
- Animation: motion timing philosophy mismatch

**MODERATE (Refinement Recommended):**
- Edge softness ±1σ from target
- Minor flag missing (non-critical signature)
- Composition ratio off ±5% of target area
- Tonal step count off by 1 step
- Fabric reflectance slightly mismatch
- Animation: motion smear subtle when pronounced required

**MINOR (Polish Only):**
- Slight texture loss
- Minor anatomical deviation ±2%
- Small lighting optimization opportunity
- Grain/noise character slightly off
- Animation: line boil subtle inconsistency

---

## 🎯 DECISION TREE

```
IF score ≥ 85 AND all 8 categories ≥ 70% of max:
  ✅ APPROVE for production
  
ELSE IF score in [80, 84] AND no CRITICAL failures:
  ⚠️ ITERATE
  - Run minimum 2 more test cycles
  - Apply quantitative corrections to failing categories
  - Regenerate test images
  - Rescore
  
ELSE IF score in [70, 79] OR 1+ MAJOR failures:
  ❌ MAJOR REVISION REQUIRED
  - Identify 2–3 worst categories
  - Request framework restructuring for affected domains
  - Run minimum 3 test cycles after revision
  
ELSE IF score < 70 OR 2+ CRITICAL failures:
  ❌ FRAMEWORK FAILURE
  - Investigate mode detection accuracy (Phase 0)
  - Verify corpus analysis completeness (Phase 2)
  - Check contradiction audit findings (Phase 2.5.3)
  - Consider restarting Phase 2 forensic analysis
  - Rebuild framework from scratch if needed
  - Run minimum 5 test cycles after rebuild
```

---

## 📋 IMPLEMENTATION REQUIREMENTS

### For Claude Vision Analysis:

1. **Read this rubric** before analyzing test images (understand category definitions)
2. **Extract metrics** using standardized methodology (painterly/photographic/animation-specific per Phase 2)
3. **Calculate deviations** for each metric using deviation formula
4. **Score each category** applying threshold bands
5. **Classify failures** by severity tier
6. **Report results** with category breakdown, metric deviations, failure explanations, correction recommendations

### For Validation Pipeline:

1. **Load corpus reference** created during Phase 2 forensic analysis
2. **Extract test metrics** using identical methodology to corpus analysis
3. **Calculate deviations** per metric
4. **Score categories** using thresholds in this document
5. **Generate failure report** (quantitative, not prose)
6. **Output pass/fail** with specific improvement guidance
7. **Track iteration log** (Cycle 1 score → Cycle 2 score → Cycle N score)

### For Framework Developers:

1. **Understand category weights** and scoring methodology
2. **Recognize common failure patterns** (documented for each category)
3. **Prioritize corrections** by severity (CRITICAL > MAJOR > MODERATE > MINOR)
4. **Iterate based on measured deviations**, not subjective impressions
5. **Target ≥85/100** through systematic refinement across test cycles

---

## 📊 VALIDATION TRACKING TEMPLATE

For each test cycle, record:

| Cycle | Image | Score | Category Breakdown | CRITICAL Failures | Corrections Applied | Next Actions |
|-------|-------|-------|-------------------|-------------------|---------------------|--------------|
| 1 | test_c1.png | 72/100 | 1:18, 2:12, 3:8, 4:5, 5:9, 6:7, 7:6, 8:5 | Ratio drift; color role | Re-audit Section 2 ratio logic; validate hex L% | Re-run Phase 2.5.3 contradiction audit |
| 2 | test_c2.png | 81/100 | 1:19, 2:14, 3:9, 4:8, 5:12, 6:8, 7:8, 8:8 | None | Adjusted color anchor L values in Section 4; tightened ratio spec in Section 2 | Generate Cycle 3 test |
| 3 | test_c3.png | 86/100 | 1:20, 2:15, 3:10, 4:9, 5:14, 6:9, 7:9, 8:10 | None | (Minor tweaks to edge softness anchor) | ✅ APPROVE for production |

---

**Last Updated:** 2025-11-14  
**Version:** v1.3 (Full Multi-Medium Edition)  
**Status:** Production Ready  
**Maintained by:** MuseoMorph Framework Development  
**Linked Documents:**  
- streamlined_style_protocol_v2_4_full.md  
- Universal_Museum-Grade_Framework_v4_4.md  
- Flag_Dictionary_v2_2_with_Examples.md  
- Photography_Dictionary_v1_2_INTEGRATED.md  
- MuseoMorph_Execution_Engine_v1_0.md
