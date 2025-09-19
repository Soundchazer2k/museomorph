---

id: example_style              # unique, lowercase, no spaces (e.g., "vermeer", "moebius")
group: "Collection Name"       # e.g., "Dutch Golden Age", "Modern Comics"
display_name: "Display Name — Subtitle"  # e.g., "Johannes Vermeer — Optical Light Master"

ratios: ["1:1","3:4","4:3"]    # Allowed aspect ratios
modes: ["Mode A","Mode B"]     # Distinct creative modes (e.g., "Interior Scene", "Portrait")

safety_profile:                # Hard rules applied in Section 6
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:                 # Optional — recommended for portraits
  allowed: true
  max_subjects: 3
  layout_hint: "Primary left, secondary right"
  identity_priority: ["silhouette","gesture","face-proportions"]

about: >
  Short educational blurb (2–6 sentences).  
  Example: "This style emerged in 17th century Netherlands, focusing on optical light, intimate interiors, and subtle material rendering. Vermeer’s work emphasizes quiet domestic scenes, luminous glazes, and restrained palettes."
---

## 1) Core Instruction & Likeness Mandate
Describe how the subject should be redrawn in this style.  
Example: "Redraw the subject in Johannes Vermeer’s optical light style for a museum-quality oil painting on canvas. Preserve likeness via silhouette, gesture, and expression."

## 2) Canvas Strategy & Aspect Ratio Control
Explain how to recompose to the chosen ratio.  
Example: "For 3:4 ratio, frame subject in half-length portrait within interior architecture. For 4:3, expand space to include background detail."

## 3) Style Context & Material Authenticity
Materials, pigments, mediums, or tools.  
Example: "Oil on linen canvas; pigments include lead-tin yellow, ultramarine, and vermilion; glazing layers to simulate optical light."

## 4) Technical Method & Mark-Making
Brush/pen/line behavior.  
Example: "Smooth layered glazes, fine detail in focal areas, soft diffusion in backgrounds."

## 5) Wardrobe, Props & Setting Conventions
Period-appropriate wardrobe, props, or motifs.  
Example: "Clothing should reflect 17th century domestic wear; modest, layered fabrics. Props may include maps, lutes, or letter-writing accessories."

## 6) Safety & IP Constraints (Hard Rules)
Explicit guardrails.  
- No nudity/gore/logos/watermarks/signatures/frames.  
- Minors modest; gender presentation respected.  
- Regenerate if violated.

## 7) Composition & Lighting Patterns
How subjects are placed and lit.  
Example: "Subjects placed near windows with directional daylight. Light key emphasizes textures and reflective surfaces."

## 8) Typography & Text Integration (If Historically Present)
Only if authentic.  
Example: "No text."  
For comics/posters: "Bold, hand-drawn lettering; block captions; speech balloons in period fonts."