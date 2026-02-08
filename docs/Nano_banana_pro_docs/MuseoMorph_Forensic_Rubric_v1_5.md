# MuseoMorph Forensic Rubric v1.5 (Multimodal-Native Edition)

**Purpose:**
A "Semantic Quantization" scoring system designed specifically for Reasoning Models (Gemini 3 / Nano Banana Pro). It evaluates generated output against the **Universal Framework v5.3** and **Flag Dictionary v2.3**, AND performs **Reference Selection** for the multimodal API pipeline.

**Philosophy:**
Reasoning models do not calculate pixel histograms; they interpret **Concepts**. Therefore, this rubric scores based on **Semantic Tier Alignment** rather than raw mathematical deviation.

**v1.5 Architecture Upgrade:**
Nano Banana Pro is a **Multimodal-to-Image** engine, not Text-to-Image. This rubric now includes **Phase 0: Reference Selection**—selecting optimal reference images from the analyzed corpus to pass through the native API slots. "Show, Don't Just Tell."

**Updated:** 2025-11-30
**Status:** Multimodal-Native Production Ready

---

## 🎯 THE SCORING LOGIC: "Semantic Buckets"

Instead of calculating `deviation %`, this rubric compares the **Target Tier** (from the Cartridge) to the **Observed Tier** (in the image).

**The Scoring Algorithm:**
* **Exact Tier Match:** 100% Score (e.g., Target: Level 4 → Observed: Level 4)
* **Adjacent Tier Match:** 80% Score (e.g., Target: Level 4 → Observed: Level 3)
* **Two-Tier Drift:** 50% Score (Major Style Break)
* **Three-Tier Drift:** 0% Score (Catastrophic Failure)

---

## 🖼️ PHASE 0: REFERENCE SELECTION PROTOCOL (NEW in v1.5)

**Purpose:** Select the 3 best images from the analyzed corpus to serve as "Ground Truth" for the Nano Banana Pro multimodal API. Reference images are **PRIMARY instruction**; text prompt is **reinforcement**.

**Why This Matters:**
> "By passing the user's photo as a Character Reference (Subject Slot) and the artwork as a Style Reference (Style Slot), you force the model's internal attention mechanism to map the Identity of the photo to the Texture of the style."

The model has hardware-level attention mechanisms for style transfer that text alone cannot access. Reference selection is now a CRITICAL output of the Forensic Audit.

### 0.1 Reference Slot Architecture

| Slot | API Enum | Purpose | Selection Criteria |
|------|----------|---------|-------------------|
| **Style Reference A** | `REFERENCE_TYPE_STYLE` | Lighting/Atmosphere | Best example of light behavior, shadow physics, color temperature |
| **Style Reference B** | `REFERENCE_TYPE_STYLE` | Anatomical Distortion | Best example of face/body construction at target abstraction level |
| **Style Reference C** | `REFERENCE_TYPE_STYLE` | Surface Physics | Best example of edge construction, medium texture, mandatory flaws |
| **Character Reference** | `REFERENCE_TYPE_SUBJECT` | Identity Preservation | User-provided photo(s) for likeness transfer |

### 0.2 Style Reference A: Lighting/Atmosphere Selection

**Objective:** Find the image that best demonstrates the artist's characteristic light behavior.

**Selection Criteria:**
```
✓ INCLUDE images that show:
  □ Characteristic light source direction (or lack thereof)
  □ Shadow behavior at its most typical (hard/soft/absent)
  □ Color temperature signature (warm/cool/neutral)
  □ Atmospheric depth cues (or deliberate flatness)
  □ Falloff patterns (rapid/gradual/none)

✗ REJECT images where:
  □ Lighting is atypical for the artist (unusual conditions)
  □ Heavy restoration has altered tonal relationships
  □ Multiple conflicting light sources create confusion
  □ Reproduction quality has crushed shadows or blown highlights
  □ The lighting is ambiguous or underdeveloped (sketches, studies)
```

**Quality Scoring for Reference A:**
| Score | Description |
|-------|-------------|
| 5 | Perfect exemplar—textbook lighting for this artist |
| 4 | Strong example—clearly shows lighting approach |
| 3 | Acceptable—lighting is visible but not optimal |
| 2 | Weak—lighting is partially obscured or atypical |
| 1 | Unusable—restoration damage, atypical, or unclear |

**Minimum Score for Selection: 4**

### 0.3 Style Reference B: Anatomical Distortion Selection

**Objective:** Find the image that best demonstrates the artist's face and body construction at the target abstraction level.

**Selection Criteria:**
```
✓ INCLUDE images that show:
  □ Face at characteristic abstraction level (photo → mask → symbol)
  □ Clear view of facial feature construction
  □ Body proportions at their most typical
  □ Eye rendering style (realistic → graphic → dot)
  □ Skin treatment (textured → flat → absent)

✗ REJECT images where:
  □ Face is obscured, turned away, or heavily shadowed
  □ Unusual pose distorts typical proportions
  □ Heavy damage obscures anatomy
  □ The figure is atypically realistic or abstract for this artist
  □ Multiple figures with inconsistent treatment
```

**Quality Scoring for Reference B:**
| Score | Description |
|-------|-------------|
| 5 | Perfect exemplar—face at exact target abstraction level |
| 4 | Strong example—face clearly shows construction approach |
| 3 | Acceptable—face visible but slightly atypical |
| 2 | Weak—face partially obscured or unusual pose |
| 1 | Unusable—no clear face, or severely atypical |

**Minimum Score for Selection: 4**

### 0.4 Style Reference C: Surface Physics Selection

**Objective:** Find the image that best demonstrates the artist's edge construction, medium texture, and physical material behavior.

**Selection Criteria:**
```
✓ INCLUDE images that show:
  □ Edge construction at its most characteristic (line weight, hardness)
  □ Medium texture clearly visible (brushwork, ink behavior, etc.)
  □ Mandatory flaws present (cracking, yellowing, grain, etc.)
  □ High-resolution reproduction showing surface detail
  □ Characteristic material physics (ink pooling, paint ridges, etc.)

✗ REJECT images where:
  □ Heavy restoration has smoothed surface texture
  □ Low-resolution reproduction obscures detail
  □ Atypical medium for this artist (preparatory sketch vs. finished work)
  □ Digital reproduction has added compression artifacts
  □ Surface is obscured by varnish bloom, reflection, or damage
```

**Quality Scoring for Reference C:**
| Score | Description |
|-------|-------------|
| 5 | Perfect exemplar—surface physics clearly visible at high resolution |
| 4 | Strong example—texture and edges clearly demonstrated |
| 3 | Acceptable—surface visible but resolution is limited |
| 2 | Weak—surface partially obscured or restoration damage |
| 1 | Unusable—smoothed, compressed, or unclear surface |

**Minimum Score for Selection: 4**

### 0.5 Character Reference Selection

**Objective:** Select user-provided reference photo(s) for identity preservation through the Subject slot.

**Selection Criteria:**
```
✓ INCLUDE photos that show:
  □ Clear, well-lit face with features visible
  □ Neutral expression (or characteristic expression to preserve)
  □ Hair visible in typical style
  □ Multiple angles if available (front, 3/4, profile)
  □ Consistent lighting across multiple references

✗ REJECT photos where:
  □ Face is obscured, blurry, or underexposed
  □ Extreme expression distorts features
  □ Heavy filters or editing have altered appearance
  □ Very low resolution
  □ Extreme angles that hide key features
```

**Subject Description Template:**
```
"[Subject name/description] for likeness transfer. Identity carried by 
[primary anchor: silhouette/coloring/features/etc.] NOT by [sacrificed 
features: photographic detail/bone structure/etc.]. Transfer identity to 
style of references [$1, $2, $3]."
```

### 0.6 Reference Selection Output Format

After analyzing the corpus, output this JSON block for the Cartridge:

```json
{
  "reference_payload": {
    "style_reference_a": {
      "filename": "[filename.jpg]",
      "role": "lighting_atmosphere",
      "quality_score": 5,
      "style_description": "[Specific description of what this image demonstrates about lighting]",
      "selection_rationale": "[Why this image was chosen over alternatives]"
    },
    "style_reference_b": {
      "filename": "[filename.jpg]",
      "role": "anatomical_distortion",
      "quality_score": 5,
      "style_description": "[Specific description of face/body construction]",
      "selection_rationale": "[Why this image was chosen]"
    },
    "style_reference_c": {
      "filename": "[filename.jpg]",
      "role": "surface_physics",
      "quality_score": 5,
      "style_description": "[Specific description of edge/texture/material behavior]",
      "selection_rationale": "[Why this image was chosen]"
    },
    "character_reference": {
      "filename": "[user_photo.jpg] or null",
      "subject_type": "SUBJECT_TYPE_PERSON",
      "subject_description": "[Description matching Likeness Taxonomy anchor]"
    },
    "fallback_mode": false,
    "fallback_reason": null
  }
}
```

### 0.7 Fallback Mode (No Suitable References)

If the corpus lacks suitable reference images (all score below 4):

```json
{
  "reference_payload": {
    "fallback_mode": true,
    "fallback_reason": "[Explanation: e.g., 'All corpus images are low-resolution reproductions']",
    "best_available": {
      "style_reference_a": { "filename": "[best option]", "quality_score": 3 },
      "style_reference_b": { "filename": "[best option]", "quality_score": 2 },
      "style_reference_c": { "filename": "[best option]", "quality_score": 3 }
    },
    "compensation_flags": [
      "logic-maximum-text-attention",
      "logic-enhanced-cognitive-override"
    ]
  }
}
```

In fallback mode, the Execution Engine adds enhanced text descriptions to compensate for weak reference images.

---

## 🔍 CATEGORY 1: Material Physics & Homogeneity (30 Points)
*Focus: Fixing the "Filter" look and "Photo-Face" error.*

### 1.1 The Homogeneity Test (CRITICAL)
**Metric:** Compare the rendering technique of the **Face** vs. the **Background/Clothing**.
* **Level 1 (Fail):** "Collage Effect." Face is a photo; Body is art. Distinct separation.
* **Level 3 (Pass):** "Integrated." Face shares the same noise floor and palette, but has slightly more detail.
* **Level 5 (Perfect):** "Raw Materiality." The exact same ink/brush physics construct the eye as the cloud. No "protected zones."

**v1.5 Reference Check:** Compare result face to Reference B. Does the generated face match the abstraction level demonstrated in the reference?

### 1.2 Visceral Texture Scale
**Target Definition:** [Loaded from Cartridge `physics_engine`]
* **Level 1 (Digital):** Smooth, plastic, gradient-heavy, "Octane Render" sheen.
* **Level 2 (High-Res):** Photographic sharpness, minor noise, clean edges.
* **Level 3 (Painterly):** Visible brush direction, soft edges, no perfect gradients.
* **Level 4 (Tactile):** Physical paint ridges (Impasto), visible paper tooth, ink bleed.
* **Level 5 (Distressed):** Cracking, damage, heavy grain, "glitch" physics.

**v1.5 Reference Check:** Compare result surface to Reference C. Does the generated texture match the surface physics demonstrated in the reference?

### 1.3 Edge Fidelity Check (NEW in v1.5)
**Metric:** Does the edge construction match the target?
**Target Definition:** [Loaded from Cartridge `physics_engine.edge_protocol`]

| Edge Type | Pass Condition | Fail Condition |
|-----------|----------------|----------------|
| `edge-ink-dip-pen` | Line weight varies, pools at endpoints | Uniform vector lines |
| `edge-paint-optical` | Boundaries exist through color contrast only | Hard drawn outlines |
| `edge-tessellated-gap` | Forms built from tessera clusters with grout gaps | Smooth drawn lines |
| `edge-watercolor-bloom` | Organic edge variation from water behavior | Hard uniform edges |

**v1.5 Reference Check:** Compare result edges to Reference C. Does edge behavior match?

### 1.4 Optical Logic
**Metric:** Does the light behave according to the lens character?
* **Pass Condition:** If `optics-character-vintage` is active, shadows MUST be lifted (veiling glare) and edges soft.
* **Fail Condition:** Vintage lens flag present, but blacks are crushed (0,0,0) and contrast is high.

**v1.5 Reference Check:** Compare result lighting to Reference A. Does light direction, shadow behavior, and atmosphere match?

---

## 🧠 CATEGORY 2: Cognitive & Temporal Logic (25 Points)
*Focus: Scoring the "Thinking Process" and Substitution.*

### 2.1 Anachronism & Substitution Check
**Metric:** Success rate of the `Substitution Dictionary`.
* **Pass:** "Smartphone" successfully rendered as "Scroll" or "Mirror."
* **Major Fail:** Modern object appears clearly.
* **Critical Fail:** Anachronistic object appears in a "Fantasy" or "Historical" mode (e.g., a car in 1800s).

### 2.2 Facial Abstraction Compliance
**Target Definition:** [Loaded from Cartridge `facial_abstraction`]
* **Level 1 (Photo):** Pores, sub-surface scattering, wet eyes.
* **Level 3 (Stylized):** Anatomical proportions kept, but surface is painted/drawn.
* **Level 5 (Symbolic):** Eyes are dots/slits. Face is a mask. No biological texture.
* **Constraint:** If Cartridge requests **Level 5**, a **Level 3** result is a FAIL.

**v1.5 Reference Check:** Compare result face abstraction to Reference B. The generated face should match the abstraction level in the reference, NOT default to photorealism.

### 2.3 Likeness Anchor Compliance (NEW in v1.5)
**Target Definition:** [Loaded from Cartridge `facial_abstraction.likeness_protocol`]

| Anchor Type | Pass Condition | Fail Condition |
|-------------|----------------|----------------|
| `anchor-photographic` | Full facial topology preserved | Any abstraction |
| `anchor-structural` | Bone structure recognizable | Surface detail prioritized over structure |
| `anchor-silhouette` | Head shape/hair mass carries identity | Internal features are photorealistic |
| `anchor-coloring` | Hair/eye/skin color accurate | Colors changed, anatomy preserved |
| `anchor-symbolic` | Costume/role defines identity | Face carries individual identity |

**Fidelity Boundary Check:**
* **Ceiling Breach:** Face fidelity exceeds ceiling → STYLE BROKEN
* **Floor Breach:** Face fidelity below floor → IDENTITY LOST

---

## 🎨 CATEGORY 3: Palette & Lighting Physics (25 Points)
*Focus: Atmosphere and Color grading.*

### 3.1 Tonal Quantization
**Target:** [Loaded from Cartridge `contrast_ratio`]
* **Level 1 (Flat):** 1:1 Ratio. No shadows. Anime/Ukiyo-e lighting.
* **Level 3 (Modeled):** Standard Studio Lighting. Soft shadows.
* **Level 5 (Chiaroscuro):** Deep blacks. Lost edges. Extreme drama (Caravaggio/Noir).

**v1.5 Reference Check:** Does tonal range match Reference A?

### 3.2 Palette Integrity
**Metric:** Adherence to `dominant_hex_anchors`.
* **Pass:** The image's "Atmosphere" matches the 3 dominant hex codes.
* **Fail:** "Color Contamination" (e.g., Neon Green appearing in a Sepia cartridge).

---

## 📐 CATEGORY 4: Anatomical Geometry (20 Points)
*Focus: Stylization and Body Horror.*

### 4.1 Distortion Factor
**Target:** [Loaded from Cartridge `head_body_ratio`]
* **Level 1 (Cartoon):** 1:3 to 1:5 ratio (Big head).
* **Level 2 (Realism):** 1:7 to 1:7.5 ratio (Standard human).
* **Level 3 (Heroic):** 1:8 ratio (Fashion illustration).
* **Level 4 (Mannerist):** 1:9 ratio (El Greco, Klimt).
* **Level 5 (Monster):** Broken anatomy, impossible limbs (Bacon, Horror).

---

## 🚦 SEVERITY & FAILURE PROTOCOL

### CRITICAL FAILURE (Instant Reject)
1. **Homogeneity Breach:** The face looks like a photograph pasted onto a painting (Score < Level 3 on 1.1).
2. **Medium Hallucination:** Prompt asked for "Woodblock," result looks like "Oil Paint."
3. **Substitution Failure:** A modern iPhone appears in a period piece.
4. **Reference Mismatch (v1.5):** Result dramatically differs from all three style references.
5. **Fidelity Ceiling Breach (v1.5):** Face is more photorealistic than the ceiling allows.

### MAJOR REVISION (Score < 80)
1. **Texture Drift:** Result is cleaner/sharper than the Cartridge specified (e.g., Level 2 result for Level 4 request).
2. **Likeness Protection:** The AI refused to destroy the face enough (e.g., requested "Dot Eyes," got "Anime Eyes").
3. **Edge Drift (v1.5):** Edges don't match the construction type specified.
4. **Reference Partial Match (v1.5):** Result matches 1-2 references but not all 3.

### MINOR POLISH (Score 80-90)
1. **Edge Tolerance:** Edges are slightly too sharp or too soft (1-Tier drift).
2. **Palette Shift:** Colors are correct hues but slightly wrong saturation.
3. **Reference Near-Match (v1.5):** Result is close to references but with minor drift.

---

## 📊 VALIDATION TEMPLATE (For AI Analysis) — v1.5

*Copy this block into the Validator Prompt to score an image.*

```text
**FORENSIC AUDIT v1.5 (Multimodal-Native)**

**0. REFERENCE COMPLIANCE (NEW)**
- Reference A (Lighting) Match: [1-5] → Does lighting match reference?
- Reference B (Anatomy) Match: [1-5] → Does face abstraction match reference?
- Reference C (Surface) Match: [1-5] → Does texture/edge match reference?
- Reference Compliance Score: __/15 (avg × 3)

**1. TEXTURE & HOMOGENEITY (30pts)**
- Face/Body Consistency: [Level 1-5] → Score: __/10
- Texture Tier Match: Target [X] vs Observed [Y] → Score: __/10
- Edge Fidelity Match: Target [type] vs Observed [type] → Score: __/10

**2. COGNITIVE LOGIC (25pts)**
- Substitution Success: [Pass/Fail] → Score: __/10
- Facial Abstraction: Target [X] vs Observed [Y] → Score: __/10
- Likeness Anchor Compliance: [Pass/Fail] → Score: __/5

**3. PALETTE & LIGHT (25pts)**
- Tonal Match: Target [X] vs Observed [Y] → Score: __/15
- Palette Integrity: [Pass/Fail] → Score: __/10

**4. ANATOMY (20pts)**
- Distortion Match: Target [X] vs Observed [Y] → Score: __/20

**FINAL SCORE:** ___/115 (normalized to 100)
**VERDICT:** [PASS / ITERATE / REJECT]
**PRIMARY DRIFT:** [Which reference was most violated?]
**CORRECTION INSTRUCTION:** [One sentence to fix the biggest drift]
**REFERENCE RE-SELECTION:** [Should different references be chosen? Y/N + reason]
```

---

## 🔄 FEEDBACK LOOP: Reference Re-Selection

After scoring, evaluate whether the references were optimal:

| Scenario | Action |
|----------|--------|
| Result matches all references perfectly | References confirmed. No change needed. |
| Result matches references but style is wrong | References may not represent the artist accurately. Re-select from corpus. |
| Result ignores Reference B (face) | Reference B may be ambiguous. Select clearer face example. |
| Result ignores Reference C (surface) | Reference C may be low-resolution. Select higher-quality reproduction. |
| Fallback mode was active and result failed | Consider sourcing additional reference images for corpus. |

**Reference Quality Improvement Template:**
```text
REFERENCE RE-SELECTION RECOMMENDATION:

Reference A (Lighting): [KEEP / REPLACE]
- If REPLACE: Current image failed because [reason]. Select image that shows [specific lighting trait].

Reference B (Anatomy): [KEEP / REPLACE]
- If REPLACE: Current image failed because [reason]. Select image that shows [specific face construction].

Reference C (Surface): [KEEP / REPLACE]
- If REPLACE: Current image failed because [reason]. Select image that shows [specific edge/texture].

Character Reference: [ADEQUATE / NEEDS ADDITIONAL ANGLES]
- If NEEDS: Current reference lacks [front view / profile / 3/4 view]. Add [specific angle].
```

---

## 📋 COMPLETE FORENSIC AUDIT WORKFLOW (v1.5)

```
PHASE 0: REFERENCE SELECTION
├── Analyze corpus for lighting exemplar → Select Reference A
├── Analyze corpus for anatomy exemplar → Select Reference B
├── Analyze corpus for surface exemplar → Select Reference C
├── Collect user photo(s) → Character Reference
└── Output: reference_payload JSON block

PHASE 1: FRAMEWORK ANALYSIS
├── Complete Universal Framework analysis
├── Populate all Cartridge fields
└── Output: Complete Artist Cartridge JSON

PHASE 2: EXECUTION
├── Execution Engine compiles:
│   ├── API Payload (references + config)
│   └── Text Prompt (reinforcement)
└── Generate image via Nano Banana Pro

PHASE 3: VALIDATION (This Rubric)
├── Score against 4 categories
├── Check reference compliance
├── Determine verdict
└── Output: Correction instruction OR approval

PHASE 4: ITERATION (If needed)
├── Apply correction instruction
├── Evaluate reference re-selection
└── Return to Phase 2
```

---

## 📚 VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-28 | Initial rubric with semantic bucket scoring |
| 1.1 | 2025-11-28 | Added optical logic check |
| 1.2 | 2025-11-28 | Added facial abstraction compliance |
| 1.3 | 2025-11-29 | Integrated with Flag Dictionary v2.3 |
| 1.4 | 2025-11-29 | Nano-Native edition with reasoning model adaptations |
| 1.5 | 2025-11-30 | **Multimodal-Native Edition.** Added Phase 0: Reference Selection Protocol. Added Edge Fidelity Check. Added Likeness Anchor Compliance. Added Reference Compliance scoring. Added Reference Re-Selection feedback loop. Updated validation template for two-channel output model. |
