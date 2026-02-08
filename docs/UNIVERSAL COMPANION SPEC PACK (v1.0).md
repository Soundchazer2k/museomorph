------

# 🎯 **UNIVERSAL COMPANION SPEC PACK (v1.0)**

*(compatible with all Universal Framework 4.4 style docs)*

------

# **SECTION A — Universal Face Validator (UFV)**

### **Purpose**

Ensures generated faces adhere to the **stylistic geometry, shading, and expression ranges** defined by any v4.4 framework.

### **Structure**

```yaml
face_validator:
  enabled: true

  geometry_rules:
    eye_scale: {min: 0.90, max: 1.30}            # relative to natural
    eye_spacing: {min: 0.90, max: 1.15}          # horizontal distance
    lid_shape: ["neutral","heavy","downcast"]     # allowed lid expressions
    nose_length: {min: 0.80, max: 1.20}
    nose_width: {min: 0.70, max: 1.10}
    lip_thickness: {min: 0.60, max: 1.20}
    chin_shape: ["rounded","soft","slender"]
    asymmetry_tolerance: {max_percent_deviation: 8}

  expression_rules:
    required_emotions: ["neutral","serene","melancholic"]
    forbidden_emotions: ["exaggerated_happy","big_smile","cartoon_surprise"]
    mouth_visibility: ["closed","gentle"]
    brow_behavior: ["soft","neutral","slightly_raised"]

  shading_rules:
    shadow_temperature: ["cool","neutral"]
    highlight_mode: ["soft","subtle"]
    forbidden_artifacts:
      - "HDR_face_glow"
      - "neon_highlights"
      - "contour_makeup"
      - "digital_skin_smoothing"

  failure_conditions:
    mode: "strict"         # strict | soft
    triggers:
      - "forbidden_expression_detected"
      - "forbidden_artifact_detected"
      - "metric_outside_allowed_range"
      - "anime_or_cartoon_geometry"
```

### **Notes**

- Artist-specific values are injected from the **Style Framework v4.4**.
- If the validator fails, the generator should retry with adjusted conditioning or return a warning.

------

# **SECTION B — Universal Style Drift Validator (USDV)**

### **Purpose**

Stops outputs from sliding into anime, Disney, vector graphics, modern photography, or generic fantasy.
 Uses **positive anchors** (required) and **negative anchors** (forbidden).

### **Structure**

```yaml
style_drift_validator:
  enabled: true

  positive_anchors:
    required_min: 3             # at least this many must be detected
    anchors:
      - "authentic_palette"
      - "historical_material_behavior"
      - "signature_linework"
      - "recognizable_compositional_density"
      - "era_correct_lighting"
      - "symbolic_motifs"
      - "authentic_textile_behavior"

  negative_anchors:
    triggers:
      - "anime_eyes"
      - "cartoon_outlines"
      - "digital_airbrush_glow"
      - "vector_crisp_edges"
      - "teal_or_neon_palettes"
      - "cinematic_rimlight"
      - "instagram_skin"
      - "flat_graphic_backgrounds"
      - "modern_makeup"
      - "empty_background"

  drift_detection:
    fail_on_negative_anchor: true
    soft_fail_on_missing_positive: true

  fallback_behavior:
    - "increase_negative_prompt_weight"
    - "reduce_saturation"
    - "lower_contrast"
    - "reinforce_linework_style"
```

### **Notes**

The validator is universal; the actual anchor definitions are *pulled from each Framework v4.4* automatically.

------

# **SECTION C — Universal Prompt Adapter (UPA)**

### **Purpose**

Turns ANY Universal Framework 4.4 document into a **generator-friendly prompt** for SDXL, MJ, DALL·E, Firefly, or others.

### **Structure**

```yaml
prompt_adapter:
  enabled: true

  extraction:
    use_sections: ["1","3","4","5","7"]        # which sections to mine for language
    include_palette_terms: true
    include_material_terms: true
    include_emotion_terms: true
    include_composition_terms: true

  assembly:
    prompt_blocks:
      style_block: 
        include: ["linework","palette","medium","era","emotional_tone"]
      composition_block:
        include: ["ratio","framing","density","perspective"]
      identity_block:
        include: ["silhouette","gesture","primary_features"]
      detail_block:
        include: ["textiles","environment","symbolic_motifs","micro_patterns"]
      negative_block:
        include: ["banned_colors","banned_expressions","banned_styles"]

  formatting:
    mode: "tiered"        # tiered | linear | weighted
    max_length: 1400       # token safety cap
    weighting:
      style_block: 1.0
      composition_block: 0.9
      identity_block: 1.2
      detail_block: 0.8
      negative_block: 1.3

  output:
    include_markdown: false
    include_comments: false
    format: "plain_text"
```

### **Notes**

- This adapter reads a v4.4 style doc and produces a beautifully weighted structured prompt automatically.
- Works particularly well for non-NanoBanana generators.

------

# **SECTION D — Integration Instructions (How They Work Together)**

### **1. Load Universal Framework v4.4**

Contains all style definitions, constraints, ratios, wardrobe, lighting, etc.

### **2. The validators read from the v4.4 doc**

- Face geometry is pulled from Sections 1, 3, and 4
- Drift anchors are parsed from Sections 3, 4, 5, 6, and 7
- Composition expectations come from Ratio + Section 7

### **3. Prompt Adapter converts the Framework into prompt form**

For SDXL/MJ:

- Extract style, palette, emotional tone
- Add negative prompts
- Apply ratio, linework, detail levels, etc.

### **4. After image generation, validators evaluate output**

They check:

- Did the face match the geometry ranges?
- Did the style drift toward modern traits?
- Did it keep composition and palette authentic?

### **5. If validations fail**

System can:

- retry with adjustments
- provide warnings
- force conditional prompts
- or flag for manual review

------

# **SECTION E — Minimal Example: How They Tie Into Ségur**

Below is how an artist-specific v4.4 framework plugs into the universal validators:

```yaml
face_validator:
  geometry_rules:
    eye_scale: {min: 1.15, max: 1.30}
    eye_spacing: {min: 1.00, max: 1.10}
    lid_shape: ["downcast","heavy"]
    nose_length: {min: 0.90, max: 1.05}
    lip_thickness: {min: 0.70, max: 1.00}
    asymmetry_tolerance: {max_percent_deviation: 10}

  expression_rules:
    required_emotions: ["melancholic","serene"]
    forbidden_emotions: ["big_smile","broad_grin","cartoon_happy"]

style_drift_validator:
  positive_anchors:
    anchors:
      - "pale_watercolor_palette"
      - "fine_ink_contours"
      - "threadlike_hair_microlines"
      - "dense_vegetation"
      - "symbolic_animals"
      - "ornate_brocade_textiles"

  negative_anchors:
    triggers:
      - "mint_green_teal"
      - "HDR_glow"
      - "vector_smooth_edges"
      - "anime_eyes"
      - "disney_smile"

prompt_adapter:
  extraction:
    include_palette_terms: true
    include_emotion_terms: true
```

This is all external — nothing modifies the v4.4 document itself.

------

