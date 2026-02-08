# Style Format Comparison

This document compares three style definition formats for MuseoMorph:
- **v4.x** - Current 8-section prose format
- **v6.x** - 12-section with quantified parameters and JSON Cartridge
- **Minimal** - Simplified 5-section format (experimental)

## Format Comparison

| Aspect | v4.x | v6.x | Minimal |
|--------|------|------|---------|
| **Lines** | ~80-120 | ~150-200 | ~40-60 |
| **Sections** | 8 fixed | 12 fixed | 5 flexible |
| **Structure** | Rigid headings | Rigid headings + JSON | Semantic sections |
| **Parameters** | Prose | Quantified (0.0-1.0) | Prose |
| **Flags** | Inline | Vocabulary system | None |
| **API Config** | None | JSON Cartridge | None |
| **Ref Images** | None | Index numbers | None |

## Section Mapping

### v4.x Sections
1. Core Instruction & Likeness Mandate
2. Canvas Strategy & Aspect Ratio Control
3. Style Context & Material Authenticity
4. Technical Method & Mark-Making
5. Wardrobe, Props & Setting Conventions
6. Safety & IP Constraints (Hard Rules)
7. Composition & Lighting Patterns
8. Typography & Text Integration

### v6.x Sections
0. System Context
1. Core Identity & Likeness Philosophy
2. Canvas Strategy & Material Simulation
3. Historical Context & Substitution
4. Technical Method (Dynamic Mode Selector)
5. Wardrobe & Grooming
6. Animation Physics
7. Digital Post-Production
8. Printing Physics
9. Hard Constraints & Composition
10. Typography Layer
11. Reference Selection Output
12. API Configuration (JSON Cartridge)

### Minimal Sections
- Style Essence (WHO + emotional core)
- Technique (HOW - materials, process)
- Composition (WHERE - layout, lighting, color)
- Likeness Handling (transformation rules)
- Constraints (WHAT NOT)

## What Minimal Removes

### Removed from v4.x:
- Rigid section numbering (1-8)
- Explicit ratio recomposition instructions
- Inline YAML blocks for props/pools
- Renderer-Agnostic Adapter

### Removed from v6.x:
- Quantified fidelity scores (`Ceiling 0.95 / Floor 0.85`)
- Flag vocabulary (`face-geo-naturalistic`, `anchor-structural`)
- JSON Cartridge
- Reference image indices
- Animation/Printing physics toggles
- API configuration

## What Minimal Preserves

**Essential elements that define an artist's style:**
1. **Identity** - Artist, era, medium, genre
2. **Core aesthetic** - What makes it recognizable
3. **Technique** - How the work is made
4. **Composition** - How elements are arranged
5. **Transformation rules** - How to adapt reference photos
6. **Hard constraints** - What to avoid

## Testing Protocol

### Test Artists
1. **Drew Struzan** - Photorealistic airbrush + pencil (high detail)
2. **Saul Bass** - Minimalist graphic design (low detail)

### Test Variables
- Same subject photo for all tests
- Same aspect ratio (2:3)
- Same basic prompt ("portrait in the style of [artist]")

### Format Variants to Test
For each artist:
1. v4.x prose (existing MuseoMorph style)
2. v6.x structured (with JSON Cartridge)
3. Minimal (experimental)

### Models to Test
- Current: `gemini-2.5-flash-image`
- New NanoBanana Pro (when available)
- OpenAI GPT-4o / DALL-E (if available)

### Evaluation Criteria
1. **Style fidelity** - Does output match artist's aesthetic?
2. **Likeness preservation** - Is subject recognizable?
3. **Instruction following** - What directives were respected/ignored?
4. **Consistency** - Are results repeatable?

## Hypothesis

The minimal format may work better because:
1. **Focused attention** - Models may ignore verbose detail
2. **Natural language** - Prose descriptions map better to training data
3. **Flexibility** - Less rigid structure allows model interpretation
4. **Signal/noise** - Higher ratio of essential information

Or v6.x may work better because:
1. **Precision** - Quantified params provide exact targets
2. **Completeness** - More information = better results
3. **Structure** - Organized sections help model parsing
4. **API alignment** - JSON Cartridge matches model capabilities

## Results

### Drew Struzan - NanoBanana Pro (Gemini 3)

| Format | Style Fidelity | Likeness | Notes |
|--------|---------------|----------|-------|
| v4.x | - | - | Not tested |
| v6.x | 5/10 | 9/10 | Wrong style (Mad Magazine aesthetic), good likeness |
| Minimal | 8/10 | 8/10 | "The Accountant's Adventure" - Good balance |
| **Optimized** | **8.5/10** | **9/10** | "VALOR" - Best overall result |

### Drew Struzan - Other Models

| Model | Format | Style | Likeness | Result |
|-------|--------|-------|----------|--------|
| Flux 2 Max | v6.x | N/A | N/A | FAILED - Rendered metadata as visible text |
| Flux 2 Max | Optimized (full) | **9.5/10** | 0/10 | Excellent style, no photo support |
| Midjourney | v6.x | N/A | N/A | CRASHED - Prompt too long |
| Midjourney | Optimized (no frontmatter) | **9/10** | 0/10 | Great style, ignores photo |
| OpenAI | v6.x / Minimal | N/A | N/A | REJECTED - IP guardrails |
| OpenAI | Optimized (no frontmatter, no photo) | **9.5/10** | 0/10 | Excellent style when photo removed |

**Notes:**
- Flux 2 Max handles YAML frontmatter correctly with optimized format (v6.x caused metadata pollution)
- Midjourney requires frontmatter stripped
- OpenAI requires both frontmatter stripped AND no reference photo
- All non-NanoBanana platforms refuse likeness transfer in chat interfaces

### Saul Bass

| Format | Style Fidelity | Likeness | Notes |
|--------|---------------|----------|-------|
| v4.x | - | - | Not tested |
| v6.x | - | - | Not tested |
| Minimal | - | - | Pending |

## Key Findings

### What Works (NanoBanana Pro)
1. **Google's 6-component formula**: Subject + Action + Environment + Style + Lighting + Details
2. **Cinematography vocabulary**: "rim lighting," "warm key light" > invented flags
3. **thinkingLevel: HIGH**: Lets reasoning engine plan composition
4. **Positive phrasing**: Describe what you want, not what to avoid
5. **30-80 word prompt body**: Concise beats verbose

### What Doesn't Work
1. **v6.x flag vocabulary**: `face-geo-naturalistic` ignored or misinterpreted
2. **JSON Cartridge**: No evidence models parse this structure
3. **Quantified parameters**: `Fidelity 0.95` not actionable for diffusion models
4. **Negative constraints**: "No digital coldness" interpreted poorly
5. **Verbose structural content**: Flux rendered section headers as visible text

### Platform Guardrails

| Platform | Artist Names | Likeness Transfer | Best Style Score | Notes |
|----------|--------------|-------------------|------------------|-------|
| NanoBanana Pro | ✓ Allowed | ✓ Allowed | 9/10 | Only platform supporting both |
| Flux 2 Max | ✓ Allowed | ✗ Refused | 9.5/10 | Best style fidelity |
| OpenAI | ✓ Allowed* | ✗ Refused | 9.5/10 | *Only without photo attached |
| Midjourney (Chat) | ✓ Allowed | ✗ Ignored | 9/10 | Requires no frontmatter |

**Conclusion:**
- **Primary (Style + Likeness):** NanoBanana Pro is the only viable path for MuseoMorph's core use case
- **Secondary (Style Only):** Flux 2 Max and OpenAI produce superior style fidelity for non-likeness generation
- **Architecture Implication:** MuseoMorph could offer a "style preview" mode using Flux/OpenAI, then final render with likeness via NanoBanana Pro

---

## Parameter-Only Format Testing

### Hypothesis
Can technical parameters alone (without artist name) capture style essence?

### Results - Blockbuster Montage (Drew Struzan parameterized)

| Platform | Style (Params Only) | vs. Artist-Named | Notes |
|----------|---------------------|------------------|-------|
| NanoBanana Pro | **9/10** | ↑ +0.5 | Better than artist-named version |
| OpenAI | **9.5/10** | ↑ **Unlocked** | Previously rejected with artist name |
| Flux 2 Max | **9.5/10** | = Same | Excellent, interprets params literally |
| Midjourney | **6.5/10** | ↓ -2.5 | Missed composition, focused on portrait only |

### Key Findings

**Parameters work better for:**
- NanoBanana Pro: Explicit technical specs outperform artist name interpretation
- OpenAI: Bypasses IP guardrails entirely
- Flux 2 Max: Interprets parameters with high fidelity

**Parameters work worse for:**
- Midjourney: Relies on artist name for complex compositional understanding; without it, defaults to generic portrait

### Recommended Strategy

| Platform | Best Approach |
|----------|---------------|
| NanoBanana Pro | Parameter-only (with optional artist name) + likeness |
| OpenAI | Parameter-only (no artist name, no photo) |
| Flux 2 Max | Parameter-only (full prompt with frontmatter) |
| Midjourney | Artist-named (requires name for composition understanding) |

## Conclusions

### Validated Hypothesis
The **optimized minimal format** outperforms v6.x because:
1. Models ignore verbose structural content
2. Natural cinematography language maps to training data
3. Positive descriptions work better than constraints
4. Reasoning engines benefit from focused instructions

### Recommended Format
Create a new **"Optimized"** format that:
- Uses YAML frontmatter for metadata and API config
- Follows Google's 6-component structure
- Uses cinematography vocabulary
- Keeps prompt body to 30-80 words
- Phrases all guidance positively
- Includes `thinkingLevel` parameter

---

## 6-Component Format (VALIDATED - Feb 2025)

### Final Testing Results

The **6-component structured format** with labeled brackets is the validated winner across all platforms:

#### Drew Struzan / Shag Tests (Modern Illustrators)

| Platform | 6-Component (No Artist) | Dense Parameter Prose | Notes |
|----------|------------------------|----------------------|-------|
| **NanoBanana Pro** | 9/10 + Likeness | 9/10 | Primary target |
| **OpenAI** | **10/10** | 9.5/10 | Best overall fidelity |
| **Flux 2 Max** | 9.5/10 | 9.5/10 | Excellent |
| **Midjourney** | 8.5/10 | 6.5/10 | Needs structure, not prose |

#### Leonardo da Vinci Test (Old Master Validation)

| Platform | Style Score | Notes |
|----------|-------------|-------|
| **Midjourney** | 9/10 | Strong sfumato, profile view |
| **Flux 2 Max** | 9.5/10 | Excellent, minor signature artifact |
| **NanoBanana Pro** | 8.5/10 + 8/10 likeness | Style + likeness preserved |
| **OpenAI** | 9.5/10 | Near-perfect Mona Lisa variant |

### Key Findings

1. **6-component structure works across modern illustrators AND Old Masters**
2. **Enhanced research with hex codes, Kelvin temps, and quantified params improves results**
3. **No artist name needed** - technique description sufficient across all styles
4. **Midjourney specifically needs labeled structure** - failed with dense prose (6.5/10 vs 8.5/10)

### The 6-Component Format

```markdown
## Style Direction
[Subject]: Description of who/what
[Action]: What they're doing, pose, gesture
[Environment]: Background treatment and scene elements
[Art Style]: Medium, technique, artistic approach
[Lighting]: Light sources, quality, color temperature
[Details]: Texture, finish, signature elements

## Technical Notes
Additional rendering guidance...

## Constraints
AVOID directives - what NOT to do...
```

### Why 6-Component Wins

1. **Labeled sections** help models parse intent (vs dense prose)
2. **Google's research validates** this structure (Subject + Action + Environment + Style + Lighting + Details)
3. **Works across all platforms** without modification
4. **No artist name needed** - technique description sufficient
5. **Midjourney specifically** needs this structure (failed with dense prose)

---

## File Locations

**6-Component Format (RECOMMENDED):**
- Template: `styles/experimental/_6COMPONENT_TEMPLATE.md`
- Drew Struzan: `styles/experimental/blockbuster_montage_6c.md`
- Leonardo: `styles/experimental/renaissance_portrait_6c.md`
- Shag: `styles/experimental/midcentury_cocktail_6c.md`

**Optimized Format (Superseded by 6-Component):**
- Template: `styles/experimental/_OPTIMIZED_TEMPLATE.md`
- Drew Struzan: `styles/experimental/drew_struzan_optimized.md`
- Saul Bass: `styles/experimental/saul_bass_optimized.md`

**Minimal Format (Superseded):**
- Template: `styles/experimental/_MINIMAL_TEMPLATE.md`
- Drew Struzan: `styles/experimental/drew_struzan_minimal.md`
- Saul Bass: `styles/experimental/saul_bass_minimal.md`

**v6.x Format (Not Recommended):**
- Drew Struzan: `C:\Users\reneg\OneDrive\Documents\Art Styles\Nano Banana Pro\movie_posters\Drew_Struzan_Framework_v6.2.md`
- Saul Bass: `C:\Users\reneg\OneDrive\Documents\Art Styles\Nano Banana Pro\movie_posters\Saul_Bass_Framework_v6.2.md`

**Research Materials:**
- Drew Struzan: `D:\Testenv\artwork\movie_posters\drew_struzan\drew-struzan-research.md`
- Saul Bass: `D:\Testenv\artwork\movie_posters\saul_bass\saul-bass-research.md`
- Leonardo: `D:\Testenv\artwork\masters\leonardo\leonardo-davinci-research.md`
- Shag: `D:\Testenv\artwork\Illustrators\Shag (Josh Agle)\shag-josh-agle-research.md`
