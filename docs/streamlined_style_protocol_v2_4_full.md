# Universal Style Analysis & Framework Development Protocol v2.4 (Full Edition)

**Purpose:**  
Systematic methodology for analyzing any visual art style (painterly, photographic, or animation) and developing museum-grade prompt frameworks using evidence-based forensic examination, unified flag dictionary (v2.2 with families 1–16), and the Universal Framework v4.4, with NanoBanana optimization.

**Audience:**  
- Claude / ChatGPT / Gemini (analysis + framework-building agents)  
- MuseoMorph tooling  
- Internal style-framework developers  
- Animation, photography, fine art, and hybrid production teams

**Updated:** 2025-11-14  
**Status:** Production Ready (Full Multi-Medium Edition)

---

## WORKFLOW OVERVIEW

**User provides:**
1. Artist name and specific style/period being analyzed  
2. Primary medium scope (one or more):
   - `painterly` (traditional media, illustration, fine art)
   - `photographic` (film/digital photography)
   - `animation` (studio animation, VFX, motion graphics)
   - `hybrid` (photo-illustration, compositing, mixed pipelines)
3. Genre/commercial context  
   - e.g. `"French Art Deco Allegorical Painting 1920s–1935"`  
   - e.g. `"Studio portrait photography, fashion editorial 1990s"`  
   - e.g. `"Anime action sequence with smear frames and speed lines"`
4. Reference images:
   - Painterly-only: **≥ 6–12** representative examples  
   - Photographic-only: **≥ 15–25** examples (optical metrics need higher n)  
   - Animation-only: **≥ 20–50** frames/stills (capture timing, motion, revision traces)  
   - Hybrid: **≥ 25–50** examples (stabilize across multiple systems)
5. Safety constraints and content limitations  
6. Intended output format & modes  
   - e.g. `"clean artwork without mastheads"`, `"cover illustration"`, `"animated action sequence"`

---

## PHASE 0: MODE DETECTION & CORPUS SETUP

Claude executes **silently**:

### 0.1 Primary Mode Classification

Examine corpus and declare which medium(s) dominate:

- **Painterly-Dominant**: brushwork, canvas texture, hand-drawn linework, no photographic grain
- **Photographic-Dominant**: film grain, lens distortion, optical bokeh, digital sensor artifacts
- **Animation-Dominant**: cel animation, smear frames, limited animation inbetweens, stylized timing
- **Hybrid-Dominant**: visible compositing, mixed 2D/3D, layered production artifacts

### 0.2 Flag Dictionary Routing

Declare which flag families (v2.2) apply:

| Primary Mode | Primary Families | Secondary Families | Tertiary Families |
|--------------|------------------|-------------------|-------------------|
| **Painterly** | 1–12 (Lighting, Texture, Composition, Palette, Process, Subject, Scale, Artifact, Anatomy, Eye, Pose, Facial) | — | — |
| **Photographic** | 1–12 + Photography-specific (film, optics, strobe, retouching, print, pose) | — | — |
| **Animation** | 1–12 + **13 (Camera Logic)** + **15 (Motion Grammar)** + **16 (Revision/Process)** | **14 (Compositing)** if 2.5D/3D | — |
| **Hybrid (Photo+Anim)** | 1–12 + Photo-dict + **13, 15, 16** | **14** for compositing | — |
| **Hybrid (Paint+Anim)** | 1–12 + **13, 15, 16** | **14** for compositing | — |
| **Hybrid (All)** | 1–16 comprehensive | All families active | — |

### 0.3 Corpus Diversity Validation

Confirm minimum diversity across:

- **Poses**: Standing, seated, dynamic, profile, three-quarter, frontal (where applicable)
- **Lighting conditions**: Key only, key+fill, backlighting, sidelight, ambient, strobe (where applicable)
- **Compositions**: Wide shots, close-ups, rule-of-thirds, centered, off-axis
- **Temporal elements** (animation only): Static frames, in-motion, impact frames, transition frames
- **Revision visibility** (animation only): Clean linework, construction-visible, correction-visible

### 0.4 Silent Output

No user-facing narration. Internally log:
- `primary_mode: [painterly|photographic|animation|hybrid]`
- `flag_families_active: [list of family numbers]`
- `corpus_size: N`
- `diversity_check: [pass|warn|fail]`
- If `warn` or `fail`: flag for user before Phase 1 proceeds

---

## PHASE 1: CONTEXT GATHERING

Confirm with user:

1. **Artist name, period, movement** (e.g., "Tamara de Lempicka, Art Deco, 1920s–1950s")
2. **Primary medium** (painterly/photographic/animation/hybrid) — verify against Phase 0 detection
3. **Genre/context** (e.g., "allegorical portrait painting for magazine covers")
4. **Safety boundaries**:
   - No nudity / gore / logos / watermarks / signatures / real people identifiable
   - Cultural/temporal constraints (no anachronisms, period-authentic materials)
5. **Intended modes** (if Framework v4.4):
   - Which modes needed? (portrait/religious/study/character/cover/etc.)
   - Which ratios prioritized? (aspect ratio list)
   - Animation-specific: frame rate, movement intensity, smear allowance?

### 1.1 Clarifying Questions (Only If Necessary)

Ask *only* strictly necessary questions:
- If style evolves heavily: narrow time range? (e.g., "1920–1925" vs "1920–1950")
- If medium unclear: photographic evidence (grain, lens artifacts) or painterly (brushwork)?
- If animation: cel animation or digital? Limited animation or smooth?
- If hybrid: which components primary vs secondary?

### 1.2 Output

- Context summary block with all confirmed parameters
- Explicit: `primary_mode`, `target_ratios`, `intended_modes`, `flag_families_confirmed`

---

## PHASE 2: FORENSIC VISUAL EXAMINATION (SILENT)

**Goal:** Extract quantifiable patterns from reference corpus with **zero frequency language** ("often," "usually," "dominant" prohibited).

This phase is **mode-aware** and routes to different measurement systems per primary mode.

### 2.1 Shared Visual Metrics (All Modes)

Extract from all corpus images:

- **Color palette**: hex values with RGB/HSL breakdowns, lightness percentages by role (highlight/mid/shadow)
- **Anatomical proportions**: head:body ratios, limb length ratios, feature scale percentages
- **Pose geometry**: shoulder/hip angles (degrees), weight distribution (%), head tilt (degrees), gesture patterns
- **Background treatment**: detail density (% of frame), negative space, atmospheric layering count
- **Edge quality**: softness coefficient (0–1 scale) per region, transition consistency
- **Compositional anchors**: figure placement (% from left/top), horizon line, vanishing points, diagonals (degrees)
- **Material rendering**: fabric weight behavior, surface texture character, reflectance properties
- **Lighting direction**: key light angle from camera (degrees), fill light presence, shadow quality
- **Tonal steps per form**: number of distinct value zones (typical 4–8), distribution pattern
- **Surface finish**: matte vs glossy, texture grain size, impasto relief height (if visible)

**Output:** Evidence tables with *only* measurements, ranges, min/max values. Zero prose descriptions.

---

### 2.2 Photographic-Specific Forensic Examination

If `photographic` or `hybrid` mode, extract using **Photography Dictionary v1.2**:

- **Film/Sensor Characteristics**:
  - Film stock signatures (if identifiable): tonal latitude range, saturation boost, grain size in μm
  - Sensor dynamic range (stops), rolloff behavior (linear vs logarithmic), grain vs noise character
  - Color response: warm/cool cast per stock, white balance behavior

- **Optical Characteristics**:
  - Focal length signatures (mm, or inferred from compression ratios)
  - Depth of field thickness (approximated in cm/inches at subject distance)
  - Bokeh character (shape, softness, edge brightness on 0–1 scale)
  - Field curvature / focus plane behavior (if visible)

- **Strobe/Lighting Systems**:
  - Key/fill/backlight ratios (all as X:Y or percentages)
  - Direction angles (degrees from camera axis)
  - Modifier signatures (softbox, beauty dish, reflector, umbrella — inferred from catchlight/shadow shape)
  - Ambient vs artificial lighting mixtures (if applicable)

- **Pose & Body Language**:
  - Standing/seated/leaning/reclining pose families (explicit names from Photography Dict v1.2)
  - Editorial vs candid vs formal posture descriptors
  - Anatomical tension signatures (chin angle, shoulder rotation, weight distribution)

**Output:** Photographic evidence tables with explicit units (mm, f-stops, stops, L%, degrees, ratios).

---

### 2.3 Animation-Specific Forensic Examination

If `animation` or `hybrid` mode, extract using **Flag Dictionary v2.2 Families 13–16**:

#### 2.3.1 Cinematic Camera Logic (Family 13)

- **Camera movement signatures**: static, tracking (linear path), pan (horizontal swing), crane (vertical travel), orbit, dolly (toward/away), combination moves
- **Framing angles**: high (power down on subject), low (vulnerability looking up), level (neutral), dutch tilt (rotated, degrees of rotation)
- **Lens behavior**: wide-angle (distortion, FOV degrees), telephoto (compression ratio), normal (balanced)
- **Focus layering**: shallow DOF (inches of focus), medium, deep (landscape-style focus)
- **Shot grammar patterns**: long takes (frame count), rapid cuts (cut frequency per second), match cuts (transition type), smash cuts, impossible movements

**Output:** Camera movement vectors, angle measurements (degrees), focus distances, cut timing (fps).

#### 2.3.2 2.5D & 3D Compositing Integration (Family 14)

- **Hybrid integration approach**: seamless (elements unified), contrasted (deliberately distinct), layered (multiple planes visible)
- **Multilayer depth structure**: number of depth planes, parallax intensity (strong/subtle)
- **Rendering approach**: single-pass (unified lighting), multipass (separate component passes), composited (post-blended)
- **Outline consistency**: unified (same line treatment throughout), variant (different line styles per element)
- **Texture integration**: unified (same surface treatment), hybrid (mixed material signatures)

**Output:** Layer count, parallax measurements, pass architecture description.

#### 2.3.3 Motion & Action Grammar (Family 15)

- **Motion stylization signatures**:
  - Smear frames (present/absent, intensity 1–10 scale, color: monochromatic/chromatic)
  - Motion multiples (ghost frames, count per sequence)
  - Speed lines (present/absent, density, color/opacity)
  - Impact frames (anticipation holds, number of frames held per impact)

- **Timing philosophy**:
  - Snappy (fast easing, low frame count per action)
  - Fluid (smooth easing, higher frame count, curved arcs)
  - Limited animation (pose-to-pose, minimal inbetweens, hold frames)

- **Physical logic**:
  - Realistic weight (gravity-driven, believable mass distribution)
  - Exaggerated physics (defies gravity, impossible arcs, stylized distortion)
  - Speed exaggeration (%: 110% realistic = slight boost, 150%+ = extreme stylization)

- **Action readability**:
  - Silhouette clarity (0–1 scale, edge contrast)
  - Anticipation visibility (wind-up frames, movement telegraph)
  - Follow-through emphasis (secondary motion, cloth/hair trailing)

- **Effects & camera**:
  - Effects density (minimal/moderate/heavy particle effects, glow, blur)
  - Camera shake presence/intensity (degrees of jitter, frequency)

**Output:** Motion descriptor matrix with frame counts, timing measurements, physics deviation percentages, effects intensity levels.

#### 2.3.4 Pipeline Revision & Process Visibility (Family 16)

- **Construction-line intentionality**: visible/hidden, density (% of frame), color (blue pencil/red/black)
- **Pentimento & correction visibility**: trace ghosting present/absent, repositioning evidence visible/hidden
- **Line boil / jitter**: present/absent (hand-drawn animation signature), intensity (pixels of wiggle)
- **Visible production notes**: annotations, guide marks, frame numbers visible/hidden

**Output:** Revision visibility flags (boolean + intensity measurements if present).

---

### 2.4 Contradiction Detection (Silent, Integrated into 2.1–2.3)

As measurements are extracted, flag immediate contradictions:
- Hex value lightness vs stated role (e.g., shadow with L=85% is invalid)
- Pose angles physically impossible (e.g., shoulder rotation 180°+)
- Camera movement + focus behavior incoherent (e.g., dolly-in with fixed focus = DOF mismatch)
- Temporal inconsistency (e.g., "snappy timing" with 24+ frame holds)

**Do not resolve yet.** Log for Phase 2.5 audit.

---

## PHASE 2.5: FLAG MAPPING & LANGUAGE COMPATIBILITY AUDIT

### 2.5.1 Flag Dictionary Mapping (All Modes)

Map all extracted measurements to **Flag Dictionary v2.2 Families 1–16** (selected by primary mode):

For each corpus image:
1. Identify which flags are **observable** (present in visual)
2. Identify which flags are **expected** (should be there per style)
3. Identify which flags are **contraindicated** (should NOT be there)
4. Note **flag frequency** (appears in X% of corpus)

**Output:** Flag alignment matrix per style category:
- `observable_flags: [flag1, flag2, ...]` with frequency %
- `expected_flags: [flag3, flag4, ...]` with mandatory/optional annotation
- `contraindicated_flags: [flag5, flag6, ...]` with severity

### 2.5.2 NanoBanana Language Compatibility (All Modes)

Build explicit **USE** and **AVOID** vocabulary lists:

**USE (Approved for rendering instructions):**
- Art historical terminology (sfumato, impasto, glazing, pentimento, etc.)
- Technical measurements (mm, f-stops, degrees, ratios, hex values)
- Explicit material names (velvet, silk, canvas, vellum, etc.)
- Quantified descriptors (L=70%, H=30–40°, 3–5 tonal steps, etc.)
- Flag names from v2.2 (use-exact-flag-names-hyphenated)

**AVOID (Ambiguous or misleading to renderers):**
- Frequency language: "often," "usually," "typically," "commonly," "dominant" → Replace with percentage or "present/absent"
- Vague qualifiers: "subtle," "dramatic," "bold," "soft," "hard" → Quantify or use flag names
- Contradiction words: "slightly warm" + "cool undertones" → Pick one, validate hex lightness
- Underspecified: "good lighting" → Specify key/fill ratio, direction angle, quality
- Renderer-confusing: "soft focus" → Clarify: "lens aberration softness" vs "brushstroke softness" vs "post-processing blur"

**Negation patterns (explicit prohibitions):**
- "no modern Instagram filters"
- "no anime-line simplification" (if not anime style)
- "no digital noise" (if film grain required)
- "no camera-shake" (if static compositions required)
- "no plastic-skin smoothing" (if texture preservation required)

### 2.5.3 Contradiction Audit (Detailed)

Validate extracted measurements against framework constraints:

1. **Hex Value Audit**:
   - Highlight role: L should be 80–95%
   - Mid-tone role: L should be 50–70%
   - Shadow role: L should be 30–50%
   - Flesh tone role: L should be 55–75%, H should be 15–35°, S should be 25–45%
   - *Flag any deviations*

2. **Technique vs Prohibition Alignment**:
   - If Section 4 (Technical Method) specifies "glazing-layers-built," Section 6 (Constraints) must NOT say "alla-prima-only"
   - If animation Section 4 specifies "motion-smear-frames," negations must NOT say "no-motion-blur"
   - *Flag any contradictions for correction*

3. **Ratio Adaptation Logic**:
   - If requested ratio unsupported by NanoBanana, verify Section 2.1 adaptation rules applied
   - If adapted, confirm composition adjustments documented
   - *Flag ratio drift or missing adaptation*

4. **Mode-Specific Consistency**:
   - Painterly: no photographic grain signatures, no optical aberrations
   - Photographic: no visible brushwork, no pentimenti
   - Animation: timing measurable in frames, camera logic explicit
   - *Flag medium-confusion*

5. **Anatomical Plausibility**:
   - Joint angles must be physically possible
   - Proportions must serve stylization (not create distortion)
   - *Flag anatomical impossibilities*

**Output:** Contradiction report with severity (CRITICAL / MAJOR / MODERATE / MINOR):
- If contradictions exist: flag for correction before Phase 3
- If clean: proceed to Phase 3 with audit sign-off

---

## PHASE 3: EVIDENCE-BASED FRAMEWORK CONSTRUCTION

**Trigger:** User confirms readiness ("Yes, proceed to Phase 3").

### 3.1 Build Universal Framework v4.4

Construct complete 8-section markdown document:

#### **Section 1: Core Instruction & Likeness Mandate**
- Declare final ratios (native or adapted per Section 2.1 of v4.4)
- Declare style/movement classification
- Declare **primary flags** (3–5 critical flags mandatory for this style)
- Declare **Face-Treatment Flag** (from v2.2 Family 9 or animation-specific)
- Declare **Pose Flag** (from v2.2 Family 11 or photography-specific)
- Declare **Canvas Control Flag**
- Declare **Camera Logic Flag** (if animation: static/tracking/pan/crane/etc.)
- Declare **Motion Grammar Flag** (if animation: snappy/fluid/limited/etc.)
- Mark **MANDATORY / CRITICAL** specifications clearly (use triple redundancy for critical items)

#### **Section 2: Canvas Strategy & Aspect Ratio Control**
- Select NanoBanana-native ratio from approved list
- If historical/specialty ratio requested: document adaptation via Section 2.1 rules
- Explain reframing method (extend-background/recompose/etc.)
- Note animation-specific: frame rate, resolution, pixel density if applicable

#### **Section 3: Style Context & Material Authenticity**
- Describe medium physics:
  - Painterly: paint type, substrate, drying behavior, tool marks
  - Photographic: film/sensor behavior, optical properties
  - Animation: cel/digital production method, compositing pipeline
- Period framing with active dates
- Tone tag and production era authenticity

#### **Section 4: Technical Method & Mark-Making**
- Insert **≥5 quantified anchors** (mode-specific):
  - **Painterly anchors**: brush metrics, paint thickness, edge softness, glazing layer count, impasto patterns
  - **Photographic anchors**: focal length (mm), aperture (f-stop), ISO, shutter speed, key/fill ratio (X:Y), strobe modifier type, bokeh character
  - **Animation anchors**: camera movement type, lens FOV (degrees), motion timing (frames), smear intensity (1–10), impact frame holds (frames), layer count
- Use hex + L% for all color specifications
- Use angle measurements for all positional specifications
- Use explicit flag names from v2.2 for all style signatures

#### **Section 5: Wardrobe, Props & Setting Conventions**
- Temporal wardrobe mandate (no anachronisms post-artist death year)
- Mode-specific wardrobe tracks (masculine/feminine/androgynous per era)
- Fabric behavior specifications (period-authentic materials, no synthetic fabric post-animation)
- Gender-differentiated prop pools (with temporal authentication)
- Hair preservation rules (length/color/baldness/facial hair all preserved with period styling)
- Setting authenticity and coherence filter

#### **Section 6: Safety & IP Constraints (Hard Rules)**
- **Canvas Negatives (≥2)**: Include mode-specific anti-patterns
  - Painterly: "no digital smoothing," "no modern photo filters"
  - Photographic: "no AI plastic-skin effect," "no post-processing exceed corpus baseline"
  - Animation: "no anime-line if not anime," "no 3D CGI if traditional cel"
  - Ratio-specific: "original aspect ratio," "unmodified framing" as applicable
- **Canvas Positives (≥2)**: Include ratio enforcement
  - "exactly [X:Y ratio]," "recomposed for [format]," "MUST be [X:Y]"
  - Mode-specific: "film-grain authentic to stock," "hand-drawn cell animation," "camera-static-only"
- **Vocabulary warnings**: Avoid misleading terms; use flag names instead
- **Triple Redundancy** on critical specs (appear in Sections 1, 4, 6)

#### **Section 7: Composition & Lighting Patterns**
- **Ratio-specific composition** (built for *final* ratio if adapted)
- **Mode-specific composition**:
  - Painterly: perspective regime, grid/symmetry approach, density %, lighting logic, detail:negative-space ratio
  - Photographic: framing regime (seamless/corner-trap/tent/environmental), lens equivalent, film/stock anchor, figure:ground %, density %
  - Animation: camera movement path (static/tracking/pan/crane), focus logic (shallow/medium/deep), compositional anchors per mode, shot grammar pattern
- **Required Anchors**: Surface context, frame/band policy, production context, ratio enforcement, gender expression, mode-specific composition, camera logic (if animation)

#### **Section 8: Typography & Text Integration**
- Binary: omit text entirely OR allow with specifications
- If allowed: ratio-appropriate layout, period-appropriate fonts, format-specific rules, production method integration
- If omitted: explicit permission to exclude text

### 3.2 Apply Triple Redundancy Protocol

For each critical specification:
- Section 1: declare as MANDATORY/CRITICAL with flag names
- Section 4: provide detailed technical measurements (hex, degrees, ratios)
- Section 6: state as both positive requirement AND negative prohibition

Example:
- **Section 1**: "CRITICAL: Sfumato edge treatment (flag: sfumato-edges)"
- **Section 4**: "Edge softness coefficient 0.7–0.85; transition zones 3–5mm; no hard edges permitted"
- **Section 6**: "MUST have soft-edged transitions (L gradient ≥3 stops); AVOID hard-edged lines, digital aliasing"

### 3.3 Validate for Contradictions (Re-run Phase 2.5.3)

Before delivery, audit:
- Hex + L% values valid for stated roles ✓
- Section 4 techniques vs Section 6 prohibitions aligned ✓
- Ratio adaptation logic coherent if applied ✓
- All critical specs appear in 3 sections (1, 4, 6) ✓
- No vague language (all measurements quantified) ✓
- Flag names used exactly (hyphen-connected) ✓

### 3.4 Output

- Complete Framework v4.4 markdown artifact
- Optional: corpus measurement tables + flag alignment matrix

---

## PHASE 4: ITERATIVE TESTING & VALIDATION (BLACK BOX)

**Trigger:** User confirms framework ready ("Yes, build framework in artifact").

### 4.1 Test Image Generation

Generate test images using framework + image renderer (NanoBanana preferred):

- **Cycle 1**: 2–3 test images using full framework
- **Cycle 2+**: Additional images addressing Cycle N-1 failures

### 4.2 Forensic Scoring (Using MuseoMorph Rubric v1.2 or v1.3)

For each test image:

1. **Extract metrics** using same methodology as Phase 2 (painterly/photographic/animation-specific)
2. **Calculate deviations** per corpus baseline: `deviation = abs(test - mean) / mean`
3. **Score each of 8–10 categories** using Rubric deviation thresholds
4. **Aggregate to composite score** (0–100 scale)
5. **Generate failure report**:
   - Which categories failed
   - Which metrics deviated (by how much)
   - Severity tier (CRITICAL / MAJOR / MODERATE / MINOR)

### 4.3 Correction Loop

**If score ≥85:** ✅ APPROVE for production

**If score 80–84:** ⚠️ ITERATE
- Run ≥2 more test cycles
- Apply surgical corrections to framework:
  - Only edit failing sections (don't rewrite entire document)
  - Regenerate test images
  - Rescore

**If score 70–79:** ❌ MAJOR REVISION
- Identify 2–3 worst categories
- Revise entire framework Section 4 (Technical Method) + related constraints
- Run ≥3 test cycles after revision
- Rescore

**If score <70:** ❌ FRAMEWORK FAILURE
- Re-check Phase 0 mode detection
- Re-run Phase 2 forensic analysis (may have been incomplete)
- Investigate contradiction audit findings
- Rebuild framework from scratch
- Run ≥5 test cycles after rebuild

### 4.4 Minimum Validation Requirements

- **Minimum 3 test cycles** before approval
- **Score ≥85/100** on final cycle
- **All 8 categories** score proportionally (no single category <50% of max points)
- **Corpus baseline reference** provided with framework for future validation

### 4.5 Checkpoint Question

Before framework delivery:

> "Ready to build framework in artifact?"

User responds: "Yes" → Deliver final Framework v4.4 markdown + validation logs

---

## OUTPUT SPECIFICATION

**Final Deliverable:** One **Universal_Museum-Grade_Framework_v4_4** markdown file containing:

- Complete YAML frontmatter (metadata, modes, safety profile, composition constraints)
- Sections 1–8 (or 1–7 if no typography needed)
- Renderer-Agnostic Adapter section with quantified specifications
- Optional appendices: corpus measurement tables, flag alignment matrix, validation logs

**Structure unchanged from v4.4.** This protocol only ensures *how* the framework is built and validated.

---

## CRITICAL SUCCESS FACTORS (v2.4)

- ✅ **Measure first, interpret second** — quantify everything before describing
- ✅ **Zero frequency language** — use measurements or flags, never "often/usually/typically"
- ✅ **Validated hex + L%** — all color specs checked against role requirements
- ✅ **Contradiction-free delivery** — Sections 1, 4, 6 must align; no exceptions
- ✅ **Triple redundancy** — critical specs appear in minimum 3 sections
- ✅ **Unified flag vocabulary** — use only v2.2 Family names (exact hyphenation)
- ✅ **Mode-aware routing** — Phase 2 branches to painterly/photographic/animation/hybrid-specific metrics
- ✅ **Animation integration** — Families 13–16 explicitly used if animation mode detected
- ✅ **Ratio adaptation logic** — Section 2.1 adaptation rules applied for non-native ratios
- ✅ **No content post-Section 8** — framework strictly ends at Section 8 boundary

---

## VALIDATION CHECKPOINTS (Phase 4 Scoring)

Live scoring delegated to **MuseoMorph Forensic Rubric v1.3 (Hybrid + Animation Edition)**.

Quick reference (for convenience):
- **≥90–100:** PASS — museum-grade execution
- **85–89:** PASS — production-ready with minor polish possible
- **80–84:** MARGINAL — acceptable but iterate required
- **70–79:** FAIL — significant gaps, major revision required
- **<70:** FAIL — structural failure, restart forensic analysis

All grading must use the separate Rubric document.

---

## GLOSSARY & REFERENCE

| Term | Definition | Context |
|------|------------|---------|
| **Primary Mode** | Dominant medium: painterly/photographic/animation/hybrid | Phase 0 declaration |
| **Flag Family** | Categorical group in Flag Dictionary v2.2 (1–16) | Phase 2.5 mapping |
| **Deviation** | Magnitude of test value vs corpus baseline (%) | Phase 4 scoring |
| **Triple Redundancy** | Critical spec appears in Sections 1, 4, 6 | Phase 3 construction |
| **NanoBanana** | Preferred image renderer; supports native ratios 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 9:16, 16:9, 21:9 | Sections 1–2 |
| **Contradiction** | Framework spec conflict (e.g., hex role mismatch, technique vs prohibition) | Phase 2.5 audit |
| **Composite Score** | 0–100 aggregate across 8–10 categories | Phase 4 validation |

---

**Last Updated:** 2025-11-14  
**Version:** v2.4 (Full Multi-Medium Edition)  
**Status:** Production Ready  
**Maintained by:** MuseoMorph Framework Development  
**Linked Documents:**  
- Flag_Dictionary_v2_2_with_Examples.md (Families 1–16)  
- Photography_Dictionary_v1_2_INTEGRATED.md  
- MuseoMorph_Forensic_Rubric_v1_3_Full.md  
- Universal_Museum-Grade_Framework_v4_4.md  
- MuseoMorph_Execution_Engine_v1_0.md
