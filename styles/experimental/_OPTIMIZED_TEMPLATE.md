---
# MuseoMorph Optimized Style Format v1.0
# Based on testing against NanoBanana Pro (Gemini 3 reasoning engine)
# Follows Google's 6-component formula: Subject + Action + Environment + Style + Lighting + Details

id: example-artist
artist: "Artist Name"
era: "YYYY-YYYY"
medium: "Primary Medium"
genre: "Art Category"
group: "Collection Name"
display_name: "Artist Name — Subtitle"

ratios: ["2:3", "3:4"]
ratios_notes: "Brief explanation of historically authentic ratios"

# API Configuration (replaces JSON Cartridge)
api:
  thinkingLevel: "HIGH"          # minimal | low | medium | high
  aspectRatio: "2:3"             # Default aspect ratio
  outputFormat: "image/png"
  numberOfImages: 1

# Safety profile for content filtering
safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - minors_modest
  - gender_respect

about: >
  2-3 sentence educational blurb for display in UI.
  Focus on what makes this artist's work distinctive and culturally significant.
---

## Prompt Template

**Structure follows Google's 6-component formula:**

### 1. Subject
[WHO] - The person/character being portrayed. Reference photo provides likeness.
Use: "Portrait of [subject description]"

### 2. Action/Pose
[DOING WHAT] - The gesture, expression, or activity.
Use cinematography terms: "heroic stance," "three-quarter profile," "direct gaze"

### 3. Environment
[WHERE] - Setting and context elements.
Describe the scene using spatial terms: "against," "surrounded by," "emerging from"

### 4. Art Style
[HOW] - The artist's technique and aesthetic.
Use specific material references: "airbrush softness," "cut-paper shapes," "gouache matte finish"

### 5. Lighting
[LIT BY] - Light quality and direction.
Use cinematography vocabulary: "warm key light from upper left," "cool rim lighting,"
"dramatic chiaroscuro," "soft diffused fill"

### 6. Details
[WITH] - Finishing touches that complete the style.
Texture, color palette, signature elements: "visible pencil strokes," "limited palette of
warm ochres and cool blues," "anamorphic lens flares"

---

## Style Essence
One paragraph (3-4 sentences) describing the artist's signature aesthetic.
Focus on:
- What makes their work instantly recognizable
- The emotional tone or feeling it evokes
- The core technique that defines the style

## Technique Markers
Bullet list of specific technical elements to include:
- Foundation technique (underpainting, base layer approach)
- Primary rendering method (brush type, stroke quality)
- Finishing touches (highlights, texture, final details)
- Signature visual elements unique to this artist

## Composition Patterns
How this artist typically arranges visual elements:
- Figure placement (central, asymmetric, rule of thirds)
- Depth treatment (flat graphic, layered atmospheric, shallow focus)
- Negative space usage
- Typical color relationships (warm/cool contrast, monochromatic + accent)

## Likeness Guidance
How to transform a reference photo while maintaining style authenticity:
- What facial/body features to preserve for recognition
- Level of idealization appropriate to the style
- How the artist typically rendered human subjects

---

## Example Prompt Assembly

For a portrait using this style, assemble components:

```
[Subject]: Portrait of a [description matching reference photo]
[Action]: [characteristic pose for this style]
[Environment]: [typical setting elements]
[Style]: rendered in the style of [Artist Name], [key technique descriptors]
[Lighting]: [characteristic lighting setup]
[Details]: [signature finishing elements]
```

**Target length: 30-80 words** (excluding frontmatter)

---

## Notes

- **Positive phrasing only**: Describe what to include, never what to avoid
- **Cinematography language**: Use real film/photography terms over invented vocabulary
- **Specificity over abstraction**: "warm ochre underpainting" beats "warm tones"
- **thinkingLevel: HIGH**: Enables reasoning engine to plan complex compositions
