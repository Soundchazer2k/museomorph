---
id: example_style              # unique, lowercase, no spaces (e.g., "vermeer", "moebius")
group: "Collection Name"       # e.g., "Dutch Golden Age", "Modern Comics"
movement: "Movement / School"  # optional, e.g., "Optical Baroque Painting"
artist: "Artist Name"          # optional (leave if multi-artist movement)
display_name: "Display Name — Subtitle"
style_scope: single-artist      # or "movement" / "workshop"

ratios: ["1:1","3:4","4:3"]
ratios_status: provisional      # provisional | approved
ratios_notes: >
  One–two sentences explaining why these ratios are historically authentic.
modes: ["Mode A","Mode B"]

safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect

multi_subject:                 # Optional — remove block if not needed
  allowed: true
  max_subjects: 3
  layout_hint: "Primary left, secondary right"
  identity_priority: ["silhouette","gesture","face-proportions"]

hero_image: null               # optional relative path under public/

about: >
  Short educational blurb (2–6 sentences). Explain historical
  authenticity, medium, and why the style matters.

# Optional composition guardrails (uncomment and tailor as needed)
# composition_constraints:
#   max_subjects: 1               # set to 1 for strict single-subject styles
#   subject_interaction: allowed  # allowed | prohibited | required
#   crowd_scenes: false           # flip to true if crowd tableaux are authentic
#   animals_allowed: false        # enable if the style routinely depicts animals
#   animal_types: ["domestic"]    # e.g., ["domestic","wild","mythical"]
#   max_animals: 0                # raise when animals_allowed is true
#   text_allowed: yes             # switch to no if typography is forbidden

sections_index:
  '1': Core Instruction & Likeness Mandate
  '2': Canvas Strategy & Aspect Ratio Control
  '3': Style Context & Material Authenticity
  '4': Technical Method & Mark-Making
  '5': Wardrobe, Props & Setting Conventions
  '6': Safety & IP Constraints (Hard Rules)
  '7': Composition & Lighting Patterns
  '8': Typography & Text Integration (If Historically Present)
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
