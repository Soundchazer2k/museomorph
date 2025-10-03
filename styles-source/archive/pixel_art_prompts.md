# **Pixel Art Style Prompts - Museum-Grade Framework v2.0**

**Version:** 2.0
 **Purpose:** Comprehensive framework enforcing hardware-accurate pixel art generation through period-specific technical constraints and authentic production methods from gaming history (1983-present).

------
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
## 1) Core Instruction & Likeness Mandate

### 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** 16-bit hardware specifications override modern rendering techniques
- **Canvas Override Mandate:** Compose for 256×224 pixels (SNES native resolution)
- **Technical Measurement Authority:** "32,768 color palette", "256 on-screen colors", "15-color sub-palettes", "Mode 7 rotation" override descriptive language
- **Process-Over-Result Priority:** Hardware sprite layering and Mode 7 effects supersede 3D rendering
- **Custom Flag Authorization:** `mode-7-rotation`, `transparency-effects`, `sprite-scaling`
- **Face-Treatment Flags:** `anime-pixel-style`, `gradient-dithering`, `soft-pixel-edges`
- **Pose Flags:** `contrapposto`, `heroic-stance`, `battle-ready`
- **Canvas Control Flags:** `format-native`
## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **256×224 pixels** - ignore source dimensions
- Redraw in **16-bit SNES JRPG style** for **enhanced console graphics (1990-1998 era)**
- Identity via anime-influenced sprite design with expanded color palette
- **IP Safeguard Declaration:** Original character avoiding Final Fantasy, Chrono Trigger, Secret of Mana copyrighted designs
- Declare **Face-Treatment Flag:** `anime-pixel-style`
- Declare **Pose Flag:** `heroic-stance`
- Declare **Canvas Control Flag:** `format-native`
- **Style Dominance:** SNES hardware advantages (256 colors, transparency, Mode 7) override 8-bit limitations while maintaining pixel aesthetic
- **Mode Selector:** RPG character portrait
## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:** `256:224` (SNES native resolution)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** Flexible sprite positioning with 16×16 tile alignment
- **Spatial Allocation:** Character portrait centered with RPG menu frame potential
- **Background Treatment:** Mode 7 rotation-capable backgrounds, multiple parallax layers
- **Format Justification:** SNES resolution allows detailed anime-style character sprites with rich environments
## 3) Style Context & Material Authenticity

- **Influences:** Final Fantasy VI (1994), Chrono Trigger (1995), Secret of Mana (1993), Breath of Fire II (1994)
- **Medium/Production method:** SNES Mode 1-7 rendering with transparency and sprite priority layering
- **Thematic purpose:** Fantasy RPG character evolution from 8-bit to 16-bit anime aesthetics
- **3-5 hallmark motifs:**
  - 16×16 or 32×32 sprite tile construction
  - 256 simultaneous colors from 32,768 master palette
  - Gradient dithering for smooth color transitions
  - Anime-influenced facial features with expressive eyes
  - Mode 7 rotation effects for dramatic backgrounds
- **Period framing:** 16-bit JRPG golden era (1990-1998), Super Nintendo Entertainment System
- **Tone Tag:** Whimsical, heroic, anime-influenced, fantasy adventure
## 4) Technical Method & Mark-Making

- **Line quality:** Clean pixel edges with selective interior anti-aliasing
- **Color system:** 256 on-screen from 32,768 palette, 15-color sprite sub-palettes
- **Texture:** Gradient dithering (checkerboard patterns), transparency effects, Mode 7 pseudo-3D
- **Detail hierarchy:** Anime facial features (large eyes, expressive mouth), detailed costume elements
- **Material simulation:** SNES rendering with reduced color bleeding, transparency layers
- **Pose Anchors:** Dynamic RPG battle stances, character height 32-48 pixels typical
- **Scale measurements:** 16×16 base tile unit, detailed 32×32 character heads
## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:** Fantasy RPG archetypes (wizard robes, knight armor, rogue leathers)
- **Fabric behavior:** Implied cape flutter, armor plates suggested through sprite animation
- **Accessory caps:** Moderate 2-3 items (staff, sword, shield, hat)
- **Color palette:** SNES 15-color sub-palettes allowing detailed costume variation
- **YAML prop pools:**

```yaml
jrpg_equipment:
  weapons: [crystal_sword, magic_staff, bow_and_arrow, dual_daggers]
  armor: [plate_mail, mage_robe, leather_armor, royal_crown]
  accessories: [magic_pendant, shield, spell_book, potion_belt]
```
## 6) Safety & IP Constraints (Hard Rules)

**❌ Negatives:**

- "8-bit limitations"
- "solid color fills only"
- "no transparency"
- "no rotation"
- "chunky NES style"

**✅ Positives:**

- "exactly 256×224 pixels"
- "SNES 256-color display"
- "gradient dithering"
- "Mode 7 rotation capable"
- "anime-influenced design"
- "transparency effects"
## 7) Composition & Lighting Patterns

- Multiple parallax scrolling layers (3-4 typical)
- Mode 7 rotation for dramatic camera angles
- Character:background 70:30 for character focus
- Fantasy environments (castles, forests, crystal caves)
## 8) Typography & Text Integration (If Historically Present)

- **Font recommendation:** Final Fantasy menu fonts, Pixel Operator (Google Font), Dragon Warrior-style serif pixels
- Dialogue boxes with border ornaments
- Character name displays with fantasy typography

------

# Arcade Fighter Style (Street Fighter II / CPS-1) - Revised

## 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** CPS-1 arcade hardware specs override home console limits
- **Canvas Override Mandate:** Compose for 384×224 pixels (CPS-1 standard)
- **Technical Measurement Authority:** "4096 colors on-screen", "16×16 sprite tiles", "ROM budget paper-scissors method", "palette patching technique"
- **Process-Over-Result Priority:** Kit-of-parts sprite construction supersedes unified character rendering
- **Custom Flag Authorization:** `rom-budget-discipline`, `palette-patching`, `sprite-kit-assembly`
- **Face-Treatment Flags:** `dynamic-expression`, `anime-influenced-faces`, `athletic-proportions`
- **Pose Flags:** `dynamic-action`, `martial-stance`, `foreshortened-power`
- **Canvas Control Flags:** `format-native`
- **Anti-Conventional Bias:** Embrace athletic female proportions, avoid exaggerated musculature
## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to exactly **384×224 pixels** - CPS-1 arcade standard
- Redraw in **arcade fighter sprite style** (Capcom CPS-1/SNK Neo Geo era, 1991-1999)
- Identity via dynamic martial arts pose with athletic proportions
- **IP Safeguard Declaration:** Original fighter design avoiding Street Fighter, Fatal Fury, King of Fighters, Darkstalkers copyrighted characters and move sets
- Declare **Face-Treatment Flag:** `anime-influenced-faces`
- Declare **Pose Flag:** `martial-stance`
- **Style Dominance:** CPS-1 sprite composition (16×16 tile assembly, high color count, ROM budget constraints) override simplified design
- **Mode Selector:** Fighter character select portrait or versus screen
## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:** `384:224` (CPS-1 arcade resolution)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** Large character sprite assembly from multiple 16×16 tiles
- **Spatial Allocation:** Character dominates frame (60-70%), lush detailed background (30-40%)
- **Background Treatment:** Rich parallax layers with detailed stage environments - reference Street Fighter Alpha, Darkstalkers, King of Fighters backgrounds
- **Format Justification:** Wide arcade resolution accommodates large fighter sprites with cinematic backgrounds
## 3) Style Context & Material Authenticity

- **Influences:** Street Fighter II (1991), Street Fighter Alpha (1995), Darkstalkers (1994), Fatal Fury (1991), King of Fighters '94, Samurai Shodown (1993)
- **Medium/Production method:** Capcom CPS-1/CPS-2 or SNK Neo Geo arcade boards with "paper and scissors" ROM budget tracking
- **Thematic purpose:** Competitive arcade fighting game with instant character recognition and cinematic presentation
- **3-5 hallmark motifs:**
  - Athletic character sprites (48-96 pixels tall) with proportionate builds
  - 15-color sub-palettes per sprite segment allowing rich shading
  - Lush detailed backgrounds with multiple parallax layers (see Street Fighter Alpha stages)
  - Dynamic foreshortening and action poses
  - Palette patching for character variants (Ryu/Ken, Mai color swaps)
- **Period framing:** Golden age of arcade fighters (1991-1999), CPS-1/CPS-2/Neo Geo hardware
- **Tone Tag:** Dynamic, competitive, athletic, cinematic
## 4) Technical Method & Mark-Making

- **Line quality:** Sharp pixel outlines with 1-2 pixel width for character definition
- **Color system:** 4096 colors on-screen (CPS-1), 15-color sub-palettes per sprite section
- **Body proportions:** Athletic builds - female fighters reference Mai Shiranui, Chun-Li, Morrigan (athletic, feminine, NOT overly muscular)
- **Material simulation:** Sprite tile assembly using kit-of-parts methodology, palette patching for variants
- **Scale measurements:** Character height 64-96 pixels, composed from 24-48 individual 16×16 tiles
- **Pose Anchors:** Martial arts stances with balanced weight distribution, dynamic but not extreme
- **Background rendering:** Lush multi-layer parallax with detailed environments - sunset skies, city streets, temple courtyards, forest stages
- **Production Method:** ROM budget tracking via physical paper boards, tile reuse maximization
## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:**
  - **Female fighters:** Athletic wear, traditional martial arts uniforms, fantasy costumes (reference Mai Shiranui's traditional Japanese outfit, Chun-Li's qipao, Cammy's leotard, Morrigan's succubus outfit)
  - **Male fighters:** Martial arts gi, street fighter clothing, military gear, wrestling outfits
- **Fabric behavior:** Dynamic cloth physics implied through sprite animation, flowing scarves, capes, ribbons
- **Body types:**
  - **Female:** Athletic, proportionate, feminine builds - NOT bodybuilder physiques
  - **Male:** Muscular but varied (some lean like Ryu, some bulky like Zangief)
- **Accessory caps:** Moderate 2-3 items (headband, gloves, weapons, ornamental pieces)
- **Color palette:** Bold saturated colors with high contrast, vibrant costume designs
- **YAML prop pools:**

```yaml
fighter_gear_female:
  attire: [martial_arts_gi, traditional_outfit, athletic_bodysuit, fantasy_costume]
  accessories: [hair_ribbon, fans, gloves, ornamental_jewelry]
  weapons: [extendable_fans, kunai, chain_whip, magical_orbs]
  
fighter_gear_male:
  attire: [karate_gi, military_fatigues, wrestling_singlet, street_clothes]
  accessories: [headband, gloves, championship_belt, throwing_stars]
  weapons: [bo_staff, nunchaku, tonfa, chain]
```
## 6) Safety & IP Constraints (Hard Rules)

**❌ Canvas Negatives:**

- "static pose"
- "limited colors"
- "small sprites"
- "simplified anatomy"
- "home console limitations"
- "overly muscular female characters"
- "bodybuilder physique"
- "plain backgrounds"
- "single layer backgrounds"
- "minimal environmental detail"

**✅ Canvas Positives:**

- "exactly 384×224 pixels"
- "CPS-1 4096-color display"
- "16×16 tile kit construction"
- "dynamic martial arts pose"
- "athletic proportions"
- "feminine builds for female fighters"
- "lush detailed backgrounds"
- "multi-layer parallax environments"
- "sunset skies and detailed stages"
- "palette patching technique"
- "ROM budget discipline"
## 7) Composition & Lighting Patterns

**RATIO-SPECIFIC COMPOSITION:**

- Character dominance 60-70% of frame
- Rich detailed backgrounds 30-40% with multiple parallax layers
- Dynamic camera angles and dramatic foreshortening
- Victory pose, combat-ready stance, or special move execution

**BACKGROUND REQUIREMENTS:**

- **Lush environmental detail:** Reference Street Fighter Alpha stages (sunset harbor, forest temple, city streets at dusk)
- **Multiple parallax layers:** Foreground elements, mid-ground action area, detailed background depth
- **Atmospheric effects:** Sunset gradients, rain, snow, mist, magical effects
- **Stage variety:** Traditional temples, city rooftops, forest clearings, castle courtyards, harbor docks
- **Color richness:** Vibrant stage colors that complement but don't overwhelm character sprites

**STYLE-SPECIFIC COMPOSITION:**

- **Perspective:** Dynamic camera angles with dramatic foreshortening
- **Lighting:** Dramatic directional lighting, sunset backlighting, stage spotlights
- **Figure:ground:** 60:40 or 70:30 character to background
- **Environmental storytelling:** Crowds, stage hazards, weather effects, time of day
## 8) Typography & Text Integration (If Historically Present)

- **Font recommendation:** Impact Label, Arcade Classic, SNK Neo Geo fonts, Capcom CPS-2 UI fonts
- **UI elements:**
  - Character name banners
  - Health bars with gradient fills
  - Timer display
  - Round counter
  - Special move notation (if applicable)
- **Character portraits:** Small avatar portraits in UI corners
- **Stage name display:** Brief stage identification

------

## Reference Character Archetypes

### Female Fighters (Athletic Proportions)

- **Mai Shiranui** (Fatal Fury/KOF): Athletic feminine build, traditional Japanese outfit, dynamic movement
- **Chun-Li** (Street Fighter): Strong legs from martial arts, proportionate upper body, qipao costume
- **Cammy** (Street Fighter): Lean athletic build, military training physique
- **Morrigan** (Darkstalkers): Supernatural feminine proportions, flowing costume elements
- **Athena** (KOF): Petite athletic build, magical girl aesthetic

### Stage Backgrounds (Lush Detail Reference)

- **Street Fighter Alpha:** Sunset harbor, forest temple with waterfalls, Brazilian favela at dusk
- **Darkstalkers:** Gothic castle halls, moonlit graveyards, mystical dimensional spaces
- **King of Fighters:** City streets, traditional dojos, industrial complexes, team headquarters
- **Samurai Shodown:** Cherry blossom gardens, castle courtyards, mountain peaks, village streets

------

## Production Notes

### Body Type Guidelines

- **Female fighters:** Focus on athletic, agile builds appropriate to fighting style
- Avoid exaggerated musculature - reference actual female martial artists and dancers
- Maintain feminine proportions while showing athletic conditioning
- Different fighting styles suggest different body types (speedster vs. grappler)

### Background Art Priority

- Backgrounds should be as detailed and lush as character sprites
- Use full CPS-1/Neo Geo color capabilities for environmental richness
- Create depth through parallax layering (3-5 layers typical)
- Environmental storytelling through background details (crowds, weather, time of day)

### Animation Considerations

- Sprites designed for fluid animation (8-16 frames per action typical)
- Dynamic hair and clothing movement
- Special effects integration (fireballs, energy attacks, impact effects)
- Victory poses and taunts for personality

---

- # LucasArts Adventure Style (SCUMM Engine) - Pixel Art Enforced

  ## 🔧 Renderer-Agnostic Adapter

  - **Constraint precedence:** VGA pixel grid and color limitations override smooth rendering
  - **Canvas Override Mandate:** Compose for 320×200 pixels (VGA mode 13h) with VISIBLE PIXEL GRID
  - **Technical Measurement Authority:** "320×200 VGA resolution", "256-color palette limit", "visible chunky pixels", "dithering only for gradients"
  - **Process-Over-Result Priority:** VGA pixel constraints and SCUMM engine limitations supersede modern digital painting
  - **Custom Flag Authorization:** `vga-pixel-grid-visible`, `256-color-limit-strict`, `dithered-shading-only`
  - **Anti-Conventional Bias:** Reject smooth gradients, photoshop rendering, unlimited resolution
  - **Face-Treatment Flags:** `pixel-cartoon-style`, `vga-limited-colors`, `chunky-expressive`
  - **Pose Flags:** `mid-gesture`, `pixel-animated-frames`
  - **Canvas Control Flags:** `format-native`
  - **Material authenticity:** Pure VGA pixel output, no smooth digital painting
## 1) Core Instruction & Likeness Mandate

  - **CANVAS OVERRIDE:** Recompose to exactly **320×200 pixels** with VISIBLE CHUNKY PIXEL GRID
  - Redraw in **VGA pixel art style** for **SCUMM engine point-and-click games (1987-1998)**
  - Identity via pixel-based cartoon caricature with limited color palette
  - **IP Safeguard Declaration:** Original character avoiding Guybrush, Sam, Max, Maniac Mansion, Day of the Tentacle copyrighted designs
  - Declare **Face-Treatment Flag:** `pixel-cartoon-style`
  - Declare **Pose Flag:** `mid-gesture`
  - **Style Dominance:** VGA pixel limitations (320×200 resolution, 256 colors, visible pixels) override smooth digital painting
  - **Mode Selector:** Adventure game pixel art scene
## 2) Canvas Strategy & Aspect Ratio Control

  **MANDATORY RATIO SELECTION:** `320:200` (VGA mode 13h)

  **CANVAS RECOMPOSITION STRATEGY:**

  - **Reframing Method:** VGA pixel grid with dithered backgrounds
  - **Spatial Allocation:** Room-based scene with pixel-limited character sprites
  - **Background Treatment:** Pixel art backgrounds using dithering patterns for depth
  - **Format Justification:** 320×200 VGA resolution creates authentic chunky pixel aesthetic
## 3) Style Context & Material Authenticity

  - **Influences:** Monkey Island 1-2 (1990-91), Day of the Tentacle (1993), Sam & Max (1993), Full Throttle (1995), Indiana Jones (1989-1992)
  - **Medium/Production method:** VGA pixel art with 256-color palette limitation and visible pixel grid
  - **Thematic purpose:** Point-and-click adventure with chunky VGA pixel aesthetic
  - **3-5 hallmark motifs:**
    - **Visible chunky pixels** - countable pixel blocks like original VGA games
    - **256-color VGA palette** - strict color limitation with dithering for gradients
    - **Pixel-based backgrounds** - dithered shading, not smooth gradients
    - **Chunky character sprites** - visible pixel construction, 60-120 pixels tall
    - **Verb menu pixel UI** - authentic VGA interface elements
  - **Period framing:** VGA PC gaming era (1987-1998), 320×200 resolution standard
  - **Tone Tag:** Chunky pixel art, VGA-limited, comedic, puzzle-driven
## 4) Technical Method & Mark-Making

  - **Line quality:** Chunky pixel edges, 1-2 pixels wide, visible stepped edges
  - **Color system:** 256 VGA colors MAXIMUM - strict palette limitation
  - **Background rendering:** **VGA pixel art with dithering** - NO smooth gradients, use checkerboard dithering patterns
  - **Character sprites:** Chunky pixel construction with visible grid, 60-120 pixels tall
  - **Shading method:** **Dithering patterns ONLY** - checkerboard, cross-hatch pixels for gradients
  - **Scale measurements:** 320×200 resolution with visible individual pixels
  - **Material simulation:** Pure VGA pixel output - chunky, stepped, limited colors
  - **Anti-smooth enforcement:** Absolutely NO gradient blending, NO anti-aliasing, NO photoshop smoothing
## 5) Wardrobe, Props & Setting Conventions

  - **Wardrobe:** Pixel-simplified costumes with limited color palettes
  - **Character design:** Chunky pixel sprites with exaggerated cartoon features
  - **YAML prop pools:**

  ```yaml
  pixel_adventure_props:
    items: [pixel_sword, chunky_key, dithered_map, pixel_tools]
    environments: [vga_ship_interior, pixel_cave, dithered_laboratory]
  ```
## 6) Safety & IP Constraints (Hard Rules)

  **❌ Canvas Negatives (CRITICAL - STRICTLY FORBIDDEN):**

  - "smooth gradients"
  - "photoshop rendering"
  - "digital painting"
  - "anti-aliasing"
  - "blurred edges"
  - "realistic lighting"
  - "unlimited colors"
  - "high resolution"
  - "3D rendering"
  - "modern illustration"
  - "painted backgrounds" (unless explicitly VGA pixel art)
  - "soft shading"
  - "gradient blending"
  - "airbrushed effects"

  **✅ Canvas Positives (REQUIRED):**

  - "exactly 320×200 VGA pixels"
  - "visible chunky pixel grid"
  - "256-color palette MAXIMUM"
  - "dithering patterns for shading"
  - "checkerboard pixel gradients"
  - "stepped pixel edges"
  - "VGA pixel art backgrounds"
  - "chunky character sprites"
  - "countable pixels"
  - "SCUMM verb menu pixel UI"
  - "flat color blocks with dithering"

  **Vocabulary enforcement:** Every mention of "backgrounds" must include "VGA pixel art" or "dithered pixel" modifier
## 7) Composition & Lighting Patterns

  **RATIO-SPECIFIC COMPOSITION:**

  - 320×200 VGA pixel grid STRICTLY ENFORCED
  - Room-based scenes with **VGA pixel art backgrounds using dithering**
  - Character sprites 30-50%, **dithered pixel backgrounds** 50-70%

  **BACKGROUND REQUIREMENTS (CRITICAL REVISION):**

  - **VGA PIXEL ART ONLY** - visible chunky pixels throughout
  - **Dithering for depth** - use checkerboard patterns, NOT smooth gradients
  - **256-color limitation** - carefully chosen palette per scene
  - **Pixel-based detail** - objects rendered in visible pixels
  - **No smooth painting** - every background element must show pixel construction

  **STYLE-SPECIFIC COMPOSITION:**

  - **Pixel grid visible** - chunky VGA aesthetic mandatory
  - **Dithered shading** - cross-hatch and checkerboard patterns
  - **Flat color blocks** - limited palette per object
  - **Stepped edges** - no anti-aliasing smoothing
## 8) Typography & Text Integration (If Historically Present)

  - **Font:** VGA pixel bitmap fonts - chunky, grid-aligned
  - **UI elements:**
    - Pixel-based verb menu (Walk to, Pick up, Use, Talk to)
    - Chunky pixel buttons and interface
    - 8×8 or 8×16 pixel font characters
  - **Text rendering:** Pure pixel text, no anti-aliasing

  ## 9) VGA Pixel Art Requirements (NEW SECTION)

  ### Mandatory Pixel Characteristics

  1. **Visible Grid Structure:**
     - Every pixel must be clearly visible and countable
     - Stepped/jagged edges on diagonals and curves
     - Chunky blocky appearance throughout
  2. **Dithering Techniques:**
     - Use checkerboard patterns for color transitions
     - Cross-hatch dithering for shadows
     - Pixel-level color mixing, NOT gradient blending
  3. **Color Palette Discipline:**
     - Maximum 256 colors TOTAL in image
     - Strategic color choices per scene
     - Limited palette per object (3-8 colors typical)
  4. **Background Pixel Art:**
     - Backgrounds rendered in visible pixels
     - Dithering creates depth, not smooth gradients
     - Detailed through pixel placement, not resolution
  5. **Character Sprite Construction:**
     - Built from individual visible pixels
     - Multiple animation frames in pixel art
     - 60-120 pixel height typical
     - 3-8 colors per sprite

  ### Reference Standards

  - **Monkey Island 1 (1990):** Visible pixels, heavy dithering, 320×200
  - **Day of the Tentacle (1993):** Chunky sprites, dithered backgrounds, VGA palette
  - **Sam & Max (1993):** Cartoon style but clearly pixelated, visible grid
  - **Full Throttle (1995):** Higher detail but still VGA pixel limitations

  ### Forbidden Techniques

  - NO smooth gradients or airbrush effects
  - NO anti-aliasing or edge smoothing
  - NO photoshop-style layer blending
  - NO unlimited color palettes
  - NO modern digital painting techniques
  - NO 3D rendering or realistic lighting

  ------

  **CRITICAL ENFORCEMENT NOTE:**

  This prompt produces **VGA PIXEL ART** - chunky, visible pixels with dithering patterns.

  **NOT** smooth digital illustrations.
   **NOT** modern painted backgrounds.
   **NOT** gradient-rendered environments.

  Every pixel must be visible and countable. Backgrounds use dithering (checkerboard patterns), NOT smooth color blending. The entire image must look like it came from a 1990-1995 VGA computer game with 320×200 resolution and 256-color limitations.

  If the result has smooth gradients, blurred edges, or looks like modern digital art, it has FAILED to follow this framework.

------

## HD-2D Style (Octopath Traveler)

### 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Modern rendering technology applied to retro sprite aesthetic
- **Canvas Override Mandate:** Compose for 16:9 HD ratio (1920×1080 recommended)
- **Technical Measurement Authority:** "16-bit style sprites", "Unreal Engine 4 effects", "depth-of-field bokeh", "dynamic lighting layers"
- **Process-Over-Result Priority:** Modern rendering effects + pixel sprites supersedes pure 2D
- **Custom Flag Authorization:** `tilt-shift-diorama`, `3d-lighting-on-2d`, `particle-bloom-effects`
- **Face-Treatment Flags:** `anime-pixel-hybrid`, `modern-lighting-applied`
- **Pose Flags:** `heroic-rpg-stance`, `dramatic-lighting`
## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to **16:9 HD ratio** (1920×1080 standard) - ignore source dimensions
- Create **HD-2D hybrid style** combining **16-bit character sprites + 3D environments + modern rendering effects**
- Identity via nostalgic pixel sprite within cinematic 3D world
- **IP Safeguard Declaration:** Original character avoiding Octopath Traveler, Triangle Strategy copyrighted designs
- **Style Dominance:** Modern rendering technology (Unreal Engine 4+ effects) applied to retro 16-bit sprite aesthetic
- **Mode Selector:** HD-2D RPG character portrait
## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:** `16:9` (1920×1080 HD)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** Cinematic widescreen with pixel sprite character
- **Spatial Allocation:** Character centered with 3D environment depth
- **Background Treatment:** Full 3D rendered environments with tilt-shift diorama effects
- **Format Justification:** HD widescreen showcases contrast between pixel sprites and detailed 3D worlds
## 3) Style Context & Material Authenticity

- **Influences:** Octopath Traveler (2018), Triangle Strategy (2022), Live A Live remake (2022)
- **Medium/Production method:** Unreal Engine 4/5 with custom 2D sprite + 3D environment pipeline
- **Thematic purpose:** Nostalgic 16-bit aesthetic enhanced with modern cinematic technology
- **3-5 hallmark motifs:**
  - 16-bit character sprites (32×48 pixels typical) in 3D environments
  - Depth-of-field bokeh effects creating miniature diorama appearance
  - Dynamic lighting casting real-time shadows on sprites
  - Particle effects (magic, weather, atmospheric dust)
  - Bloom and lens flare effects for magical atmosphere
- **Period framing:** Modern retro-revival (2018-present), HD gaming era
- **Tone Tag:** Nostalgic yet modern, dramatic, magical, cinematic
## 4) Technical Method & Mark-Making

- **Material simulation:** 2D pixel sprites with 3D normal mapping for dynamic lighting response
- **Depth rendering:** Layered composition with camera depth-of-field, tilt-shift miniature effect
- **Modern effects:** Bloom, ambient occlusion, volumetric lighting, particle systems, screen-space reflections
- **Scale measurements:** 16-bit sprite resolution (24-48 pixels tall) in HD 1920×1080 environment
- **Lighting:** Dynamic real-time lighting with shadow casting, ambient occlusion, god rays
## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:** Fantasy JRPG robes, armor, merchant clothes, noble attire
- **Fabric behavior:** Pixel sprite animation with 3D lighting interaction
- **YAML prop pools:**

```yaml
hd2d_equipment:
  weapons: [enchanted_sword, magic_staff, holy_bow, elemental_daggers]
  armor: [traveler_cloak, knight_plate, scholar_robe, thief_leather]
  magical: [glowing_pendant, rune_book, crystal_orb, elemental_stone]
```
## 6) Safety & IP Constraints (Hard Rules)

**❌ Negatives:**

- "flat 2D only"
- "no lighting effects"
- "pure pixel art"
- "8-bit style"

**✅ Positives:**

- "16:9 HD resolution"
- "16-bit sprite + 3D environment"
- "depth-of-field bokeh"
- "dynamic lighting on sprites"
- "particle effects"
- "tilt-shift diorama"
- "Unreal Engine rendering"
## 7) Composition & Lighting Patterns

- 3D rendered fantasy environments (castles, libraries, forests)
- Tilt-shift camera creating miniature diorama effect
- Character 40% with dramatic environmental depth
- Volumetric lighting and atmospheric particles
## 8) Typography & Text Integration (If Historically Present)

- **Font recommendation:** Fantasy pixel fonts (EB Garamond Pixel, Triforce), modern UI fonts for menus
- HD text rendering with retro pixel font aesthetic
- Character dialogue boxes with translucent backgrounds
- Status displays using pixel-style numerals

------

## Isometric Pixel RPG Style

### 🔧 Renderer-Agnostic Adapter

- **Constraint precedence:** Isometric projection and tactical grid override perspective freedom
- **Canvas Override Mandate:** Compose for isometric grid (2:1 pixel ratio typical)
- **Technical Measurement Authority:** "16×16 isometric tiles", "2:1 projection angle", "tactical grid alignment"
- **Process-Over-Result Priority:** Isometric tile system and grid-locked positioning supersede free camera
- **Custom Flag Authorization:** `isometric-2to1-projection`, `tactical-grid-overlay`, `unit-sprite-sheets`
- **Face-Treatment Flags:** `isometric-projected`, `tile-grid-aligned`, `tactical-readable`
- **Pose Flags:** `tactical-stance`, `unit-idle-walk-attack`
## 1) Core Instruction & Likeness Mandate

- **CANVAS OVERRIDE:** Recompose to **isometric projection** with 2:1 pixel ratio - ignore source dimensions
- Redraw in **isometric pixel RPG style** for **tactical strategy gameplay**
- Identity via recognizable unit archetype with tactical grid silhouette
- **IP Safeguard Declaration:** Original unit designs avoiding Final Fantasy Tactics, Fire Emblem, Tactics Ogre copyrighted characters
- Declare **Face-Treatment Flag:** `isometric-projected`
- Declare **Pose Flag:** `tactical-stance`
- **Style Dominance:** Isometric tile system and tactical readability override realistic proportions
- **Mode Selector:** Tactical RPG unit sprite sheet
## 2) Canvas Strategy & Aspect Ratio Control

**MANDATORY RATIO SELECTION:** Variable (isometric scene composition, typically 4:3 or 16:9 for scene)

**CANVAS RECOMPOSITION STRATEGY:**

- **Reframing Method:** Isometric grid alignment with 2:1 tile projection
- **Spatial Allocation:** Multiple unit sprites on isometric terrain tiles
- **Background Treatment:** Isometric architecture (castles, villages) with height elevation
- **Format Justification:** Isometric projection provides tactical clarity and strategic depth visualization
## 3) Style Context & Material Authenticity

- **Influences:** Final Fantasy Tactics (1997), Tactics Ogre (1995), Fire Emblem (GBA/DS), Disgaea (2003)
- **Medium/Production method:** Isometric tile-based rendering with unit sprite sheets (idle, walk, attack, victory)
- **Thematic purpose:** Strategic RPG unit presentation with class-based visual hierarchy
- **3-5 hallmark motifs:**
  - 2:1 isometric projection with consistent 30° viewing angle
  - 16×16 or 32×16 pixel base tiles for units
  - Multi-frame sprite sheets (4-8 frames per action)
  - Tactical grid overlay (subtle or explicit)
  - Height elevation through isometric stacking
- **Period framing:** Isometric strategy RPG era (1995-present)
- **Tone Tag:** Strategic, tactical, fantasy warfare, unit-based
## 4) Technical Method & Mark-Making

- **Line quality:** Crisp pixel outlines optimized for isometric viewing angle
- **Color system:** 16-bit to 32-bit palette with class-based color coding
- **Texture:** Tile-based dithering, elevation shading, terrain textures
- **Perspective regime:** Strict 2:1 isometric projection, no camera rotation
- **Grid alignment:** All sprites and tiles snap to isometric grid
- **Detail hierarchy:** Unit silhouettes readable at tactical zoom (16-32 pixel height)
- **Sprite composition:** Multi-pose sprite sheets with consistent pivot points
## 5) Wardrobe, Props & Setting Conventions

- **Wardrobe tracks:** Medieval fantasy classes (knight, mage, archer, cleric, thief, villager)
- **Fabric behavior:** Class-distinctive armor and robes
- **Color palette:** Team-based color coding, class archetypes
- **YAML prop pools:**

```yaml
tactical_units:
  melee: [knight_lance, swordsman_blade, monk_fists, dragoon_spear]
  ranged: [archer_bow, mage_staff, gunner_rifle, summoner_orb]
  support: [white_mage_staff, bard_lute, dancer_ribbon, chemist_items]
  special: [ninja_shuriken, samurai_katana, priest_tome, necromancer_skull]
```
## 6) Safety & IP Constraints (Hard Rules)

**❌ Negatives:**

- "first-person perspective"
- "free camera rotation"
- "3D smooth rendering"
- "non-grid alignment"
- "perspective distortion"

**✅ Positives:**

- "2:1 isometric projection"
- "16×16 tile grid locked"
- "tactical unit sprites"
- "class-based archetypes"
- "elevation stacking"
- "sprite sheet animation"
## 7) Composition & Lighting Patterns

- Isometric battlefield with terrain elevation
- Multiple unit sprites showing class variety
- Tactical grid subtle or explicit overlay
- Fantasy architecture (castles, bridges, forests)
- Character:environment 50:50 for tactical context
## 8) Typography & Text Integration (If Historically Present)

- **Font recommendation:** Pixel Operator, Final Fantasy Tactics UI, tactical serif fonts
- Unit status displays (HP, MP, class name)
- Damage numbers in combat
- Dialogue boxes for story cutscenes

------

## 🎨 Style-Family Technical Specifications Summary
## 8) Typography & Text Integration (If Historically Present)

- **Resolution:** 256×240 pixels (4:3 display)
- **Colors:** 54-color master palette, 13 on-screen maximum
- **Tiles:** 8×8 pixel base unit, 256 tiles per VRAM bank
- **Sprites:** 64 total, 8 per scanline limit
- **Palette System:** 4 background + 4 sprite sub-palettes, 3 unique + 1 transparent each
- **Constraints:** Attribute table 16×16 blocking, sprite flicker, bank switching
## 1) Core Instruction & Likeness Mandate

- **Resolution:** 256×224 pixels typical
- **Colors:** 256 on-screen from 32,768 master palette
- **Tiles:** 16×16 or 32×32 sprite units
- **Sprites:** 128 total, 32 per scanline
- **Effects:** Mode 7 rotation, transparency, sprite scaling
- **Palette System:** 8 dedicated sprite palettes, 15 colors each

### Arcade Power (CPS-1)

- **Resolution:** 384×224 pixels standard
- **Colors:** 4096+ simultaneous colors
- **Construction:** Kit-of-parts 16×16 tile assembly
- **Memory:** ROM budget tracking, palette patching technique
- **Production:** "Paper and scissors" asset management
- **Sprites:** Large composite characters from tile kits

### Modern Hybrid (HD-2D)

- **Resolution:** 1920×1080 HD (16:9)
- **Style:** 16-bit pixel sprites + 3D environments
- **Effects:** Depth-of-field, dynamic lighting, particles, bloom
- **Engine:** Unreal Engine 4/5 rendering pipeline
- **Aesthetic:** Tilt-shift diorama, nostalgic meets cinematic

### Isometric Strategy

- **Projection:** 2:1 isometric angle (30° view)
- **Tiles:** 16×16 or 32×16 base units
- **Grid:** Tactical overlay, elevation stacking
- **Sprites:** Multi-frame sheets (idle, walk, attack, victory)
- **Scale:** Unit height 16-32 pixels for readability

------

## 📋 Production Method Guidelines

### NES-Era Development (1983-1994)

- Strict tile-based construction (8×8 units)
- Bank switching for sprite variety
- Palette patching for character variants
- Attribute table awareness for backgrounds
- ROM budget discipline
## 1) Core Instruction & Likeness Mandate

- Enhanced color palettes and gradients
- Mode 7 rotation effects
- Transparency and layering
- Larger sprite compositions
- Cross-platform asset optimization

### Arcade Development (1991-1999)

- "Paper and scissors" ROM tracking
- Kit-of-parts sprite assembly
- Palette swapping for efficiency
- Symmetry exploitation for memory
- High-detail facial animation

### Modern Pixel Art (2000-Present)

- HD-2D hybrid rendering
- Modern engine integration
- Nostalgia-driven design choices
- Indie aesthetic revival
- AI-assisted sprite generation

------

**Framework Implementation Notes:**

1. **Historical Accuracy:** All prompts reference documented hardware limitations and production methods
2. **Technical Precision:** Quantified measurements override aesthetic descriptions
3. **IP Protection:** Original character designs required, avoid copyrighted game elements
4. **Canvas Control:** Native hardware resolutions enforced per era
5. **Material Authenticity:** Period-accurate rendering artifacts mandatory
6. **Production Methods:** Techniques like bank switching, palette patching, ROM budgeting preserved
7. **Validation:** Silent checklist ensures all 8 framework sections complete
8. **Failure Prevention:** Anti-patterns identified to avoid modern rendering defaults

**Usage Guidelines:**

- Choose style based on target aesthetic and hardware era
- Combine renderer-agnostic adapter with full 8-section framework
- Maintain historical production method authenticity
- Verify IP safeguards for original character designs
- Test against validation checklist before generation