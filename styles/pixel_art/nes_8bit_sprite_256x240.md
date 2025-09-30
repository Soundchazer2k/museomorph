---
id: nes_8bit_sprite_256x240
group: Pixel Art
movement: NES 8-bit Pixel Art
artist: NES PPU Developers
display_name: NES Pixel Art — 8-Bit Sprites
style_scope: movement
ratios:
  - '256:240'
ratios_status: provisional
ratios_notes: >
  NES sprites render at 256×240; honoring that pixel grid preserves
  attribute-table quirks and scanline flicker.
modes:
  - Game sprite
safety_profile:
  - no_nudity
  - no_gore
  - no_logos
  - no_watermarks
  - minors_modest
  - gender_respect
about: >
  NES artists mapped heroes onto 8×8 tiles, three-color palettes, and flickering
  scanlines. We lock to that 1983–1994 hardware—attribute tables, sprite
  budgets—and dream up new mascots ready for a CRT.
hero_image: null
---

# **Pixel Art Style Prompts - Museum-Grade Framework v2.0**

**Version:** 2.0
 **Purpose:** Comprehensive framework enforcing hardware-accurate pixel art generation through period-specific technical constraints and authentic production methods from gaming history (1983-present).

------
## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **256×240 pixels** - ignore source image dimensions completely
- Redraw in **8-bit NES sprite style** for **CRT television display (1983-1994 era)**
- Identity via chunky 8×8 tile silhouette and restricted 3-color sprite palette
- **IP Safeguard Declaration:** Original character design avoiding copyrighted Nintendo/Capcom/Konami sprites and game-specific iconography
- Declare **Face-Treatment Flag:** `sprite-grid-locked`
- Declare **Pose Flag:** `frontal-rigid` or `power-stance`
- Declare **Canvas Control Flag:** `format-native`
- **Style Dominance:** NES hardware constraints (64 sprite tile limit, 8 per scanline, 4 sprite sub-palettes, attribute table blocking) override realistic rendering
- **Mode Selector:** Game sprite

### 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** 16-bit hardware specifications override modern rendering techniques
- **Canvas Override Mandate:** Compose for 256×224 pixels (SNES native resolution)
- **Technical Measurement Authority:** "32,768 color palette", "256 on-screen colors", "15-color sub-palettes", "Mode 7 rotation" override descriptive language
- **Process-Over-Result Priority:** Hardware sprite layering and Mode 7 effects supersede 3D rendering
- **Custom Flag Authorization:** `mode-7-rotation`, `transparency-effects`, `sprite-scaling`
- **Face-Treatment Flags:** `anime-pixel-style`, `gradient-dithering`, `soft-pixel-edges`
- **Pose Flags:** `contrapposto`, `heroic-stance`, `battle-ready`
- **Canvas Control Flags:** `format-native`

- **
## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:** `256:240` (NES native resolution, displays as 4:3)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** Strict 8×8 tile grid alignment, no sub-pixel positioning
- **Spatial Allocation:** Character centered in 256×240 viewport, tile-aligned to prevent sub-pixel shimmer
- **Background Treatment:** Modular 16×16 attribute blocks with 4 palette maximum, repeating tile patterns
- **Format Justification:** Native NES resolution ensures authentic hardware tile system and scanline limitations
## 3) Style Context & Material Authenticity

- **Influences:** Super Mario Bros. (1985), The Legend of Zelda (1986), Mega Man (1987), Donkey Kong (1981), Punch-Out!! (1987)
- **Medium/Production method:** NES Picture Processing Unit (PPU) rendering via 8×8 tile construction with strict VRAM constraints
- **Thematic purpose:** Authentic NES-era gaming (1983-1994) with chunky pixel aesthetic
- **3-5 hallmark motifs with quantified specifications:**
  - 8×8 pixel tile construction with visible chunky grid structure
  - 54-color NES master palette with maximum 13 on-screen (4 background palettes × 3 colors + 4 sprite palettes × 3 colors + 1 shared)
  - 3 unique colors + 1 transparent color per sprite sub-palette (Mario: red cap, brown hair, tan skin)
  - Flat color fills only - NO gradients, NO dithering, NO anti-aliasing
  - 16×16 attribute table color blocking creating visible checkerboard palette boundaries
- **Period framing:** Early console gaming era (1983-1994), NES cartridge limitations
- **Tone Tag:** Chunky, iconic, high-contrast, geometric, simplified
- **Production Era Authenticity:** NES tile system with ROM budget constraints and bank switching techniques
## 4) Technical Method & Mark-Making

- **Line quality with tool marks:** Chunky blocky edges aligned to 8×8 grid, single-pixel width, hard 90-degree corners, absolutely NO anti-aliasing
- **Color mixing methods:** Flat color fills ONLY - no gradients, no blending, no dithering; NES 54-color master palette exclusively
- **Texture thickness specifications:** Pure flat pixel blocks with no depth simulation - Super Mario Bros. flatness reference
- **Edge treatment:** Hard tile boundaries aligned to 8×8 grid, jagged edges acceptable and authentic
- **Stroke economy with directional requirements:** Extreme minimalism due to 256-tile VRAM limit - geometric simplification like Mega Man
- **Surface depth measurements:** Completely flat 2D plane - no shading gradients, only solid color separation
- **Detail hierarchy with proportional specifications:** Character 12-24 pixels height typical (Mario-sized), faces reduced to 2-3 pixel eyes, simplified geometric shapes
- **Material simulation with authentic characteristics:** Raw NES PPU output - chunky pixels like Donkey Kong, Punch-Out!! character sizing
- **Pose Anchors:** Character fits within 8-16 sprite tiles total, frontal or profile view typical
- **Scale Hierarchy Anchor:** 8×8 tile base unit mandatory, all elements tile-grid aligned
- **Material Authenticity Anchor:** Pure pixel-stepped output with visible tile construction
- **Period Consistency Anchor:** All elements conform to 1983-1994 NES hardware specifications - reference Phantasy Star portraits for face detail limits
- **Production Method Anchor:** Tile-based construction like Super Mario Bros. level design
- **Canvas Adaptation Anchor:** Composition optimized for 256×240 with severe sprite budget constraints
## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:** Simplified iconic outfits reduced to 3-color sprite palette blocks, tile-efficient designs
- **Fabric behavior:** No draping physics, static tile-based chunky shapes
- **Accessory caps:** Minimalist 0-1 items due to strict tile and palette limits
- **Color palette restrictions:** NES master palette only (54 colors total), 3 unique + 1 transparent per sprite
- **Wardrobe variation required:** Palette patching technique (reuse base sprite with different color assignment)
- **Props:** Maximum 1 hero prop using separate 8×8 sprite tiles
- **Coherence filter:** All elements support NES hardware limitations
- **YAML prop pools:**

```yaml
nes_hero_props:
  weapons: [sword_8x16_tiles, shield_8x8_tiles, bow_8x8_tiles]
  power_ups: [mushroom_8x8, star_8x8, heart_8x8]
  tools: [key_8x8, bomb_8x8, potion_8x8]
```
## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives (≥2):**

- "smooth gradients"
- "anti-aliased edges"
- "soft shading"
- "dithering patterns"
- "photorealistic detail"
- "sub-pixel rendering"
- "color blending"
- "more than 54 total colors"
- "more than 3 colors per sprite"
- "tiles smaller than 8×8 pixels"
- "CRT effects or scan lines"
- "decorative frames or borders"
- "modern post-processing"

**✅ Canvas Positives (≥2):**

- "exactly 256×240 pixels"
- "8×8 tile grid locked"
- "chunky blocky pixels like Super Mario Bros"
- "flat color fills only"
- "NES 54-color master palette"
- "3 unique colors + transparent per sprite"
- "16×16 attribute table blocking"
- "visible tile construction"
- "geometric simplification like Mega Man"
- "hard pixel edges"
- "no anti-aliasing whatsoever"

**Vocabulary warnings:** Avoid "smooth", "gradient", "realistic", "detailed", "anti-aliased", "blended", "CRT filter", "frame border" - these violate authentic NES hardware output
## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION REQUIREMENTS:**

- 256×240 NES viewport with strict tile-based scene construction
- Character dominance ≥60% for platformers, ≥40% for adventure games
- Hierarchical staging with 16×16 attribute block palette awareness
- Background constructed from repeating 8×8 tiles with 4 palette maximum

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective regime:** Flat 2D or simple parallax scrolling (single background layer typical)
- **Grid/symmetry:** Strict 8×8 tile alignment mandatory
- **Figure:ground %:** 60:40 typical for action games, 50:50 for RPGs
- **Density %:** Minimal due to 64 sprite tile on-screen limit
- **Lighting logic:** Flat top-down lighting or simple directional with hard shadows
- **Detail:negative space ratio:** High negative space required for sprite budget management

**REQUIRED ANCHORS:**

- **Surface Context Anchor:** Raw gameplay screen, no decorative framing
- **Frame/Band Anchor:** FORBIDDEN - no presentation frames, borders, or CRT effects; only authentic in-game HUD (score, lives, time displays)
- **Production Context Anchor:** NES cartridge graphics with tile-based VRAM rendering
- **Ratio Enforcement Anchor:** 256×240 native resolution, pure pixel output without post-processing
## 8) Typography & Text Integration (If Historically Present)

### 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Sections 1→8 are hard constraints; earlier overrides later
- **Canvas Override Mandate:** Compose for 256×240 pixel resolution (4:3 display ratio)
- **Style over likeness:** Character recognition via 8×8 tile-based iconic silhouette
- **Technical Measurement Authority:** "54-color NES master palette", "8 sprites per scanline", "16×16 attribute blocks", "3 unique colors + 1 transparent per sprite palette" override descriptive language
- **Process-Over-Result Priority:** Tile-based construction and hardware palette restrictions supersede smooth rendering
- **Custom Flag Authorization:** `sprite-flicker-authentic`, `attribute-table-blocking`, `bank-switching-tiles`
- **Anti-Conventional Bias:** Embrace sprite flicker, color banding, tile repetition as authentic features
- **Face-Treatment Flags:** `pixel-stepped`, `palette-limited-8bit`, `sprite-grid-locked`
- **Pose Flags:** `frontal-rigid`, `power-stance`
- **Canvas Control Flags:** `format-native`
- **Material Physics Authority:** CRT phosphor simulation with NTSC color bleeding
- **Scale-Dependent Technique:** Readable at 256×240, designed for CRT viewing distance
- **Quantifiers authoritative:** 8×8 tile unit, 54-color palette, 64 sprite maximum are hard limits
- **Text policy:** Only 8×8 pixel font tiles if Section 8 authorizes
- **Safety/IP:** No copyrighted game characters, no trademarked logos
- **Material authenticity:** Pure hardware rendering, no modern post-processing
- **Period Production Authenticity:** NES-era (1983-1994) tile system with characteristic limitations
- **Composition boundaries:** No frames outside canvas; authentic HUD/box art only
- **Failure Mode Flags:** Avoid smooth gradients, anti-aliasing, unlimited color defaults

- **Binary:** Allow for authentic 8×8 pixel font tiles
- **If allowed:**
  - **Ratio-Appropriate Zones:** Text limited to HUD areas or dialogue boxes
  - **Copy limits:** ≤4 words typical per text box, tile-based character rendering
  - **Period-Appropriate Typography:** 8×8 tile-based bitmap fonts only
  - **Font recommendation:** Press Start 2P (Google Font, 95% authentic NES match) or Pixel Emulator (100% period-accurate)
- **Format-Specific Text Rules:** Game sprite mode = minimal text; use for status display or power-up names only
- **Historical accuracy:** Fonts must use 8×8 tile grid with NES palette limitations
- **Production Method Integration:** Text rendered as sprite tiles consuming VRAM budget

------
