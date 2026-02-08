---
title: "Historical Hair & Makeup Dictionary v1.1"
version: "1.1"
status: "Production Ready"
purpose: "Provides forensic tokens for period-accurate grooming, regional variations, and medium-specific hair rendering physics."
consumed_by: "Execution Engine v1.1 → Nano Banana Pro"
date: "2025-11-29"
license: "CC-BY-SA-4.0"
---

# Historical Hair & Makeup Dictionary v1.1

## 0. System Role & Usage

**Mandate:** Use this dictionary to populate the `hair_protocol` section of the Artist Cartridge.

**The "Anti-Blowout" Rule:** Modern conditioners, silicone serums, and hair dryers did not exist for most of history. Historical hair is often oily, heavy, frizzy, or structurally rigid (wigs/pomade). You must enforce these physics to prevent "Movie Star Hair."

**The "Anti-Sephora" Rule:** Modern makeup is designed to be invisible ("no-makeup makeup"). Historical makeup is opaque theatrical paint, toxic pigments, and obvious artifice. You must enforce visible product.

---

## 1. Female Hairstyle Taxonomy (Western/European)

| Era | Key Token | Visual Description | Texture Physics |
|-----|-----------|---------------------|-----------------|
| **Ancient Greek/Roman** | `style-greco-roman-knot` | Center-parted, gathered into low chignon or "Psyche knot" at nape. Ribbon or metal bands. | Tight, controlled tension. Oil-slicked near scalp. No flyaways. |
| **Byzantine** | `style-byzantine-coiled-crown` | Elaborate coils piled on head, often covered by veil or jeweled cap. | Heavy, structured, hidden under textile. |
| **Medieval (Early)** | `style-medieval-loose-veil` | Long, loose, center-parted. Covered by wimple or veil. Only maidens show hair. | Natural weight, minimal styling. Often hidden. |
| **Medieval (Late)** | `style-hennin-horned` | Hair pulled back tightly under tall conical or horned headdress. Forehead plucked. | Invisible under structure. High, plucked hairline visible. |
| **Renaissance (Italian)** | `style-high-forehead-braid-crown` | Hairline plucked high. Complex braided loops, pearls interwoven, golden nets (snood). | Frizzy halo near hairline (no hairspray). Heavy mass. Elaborate decoration. |
| **Renaissance (Northern)** | `style-parted-coiled-ears` | Center-parted, coiled over ears in "ram's horn" shape. Often under cap. | Controlled coils, visible structure. |
| **Elizabethan** | `style-heart-shaped-curled` | Hair dressed high and wide into heart shape. Red/auburn favored. Often supplemented with false pieces. | Stiff with sugar-water setting. Wire frame possible. |
| **17th Century (Baroque)** | `style-fontange-tower` | Vertical lace and ribbon structure rising from forehead. Natural hair curled below. | Architectural, mixed media (hair + textile). |
| **18th Century (Rococo)** | `style-pouf-tower-powdered` | Extreme vertical height on wire/cushion frame. Grey/white powder. Adorned with feathers, jewels, ships, bird cages. | Matte, chalky texture (powder). Stiff, cotton-candy density. Artificial. |
| **Regency/Empire** | `style-apollo-knot-classical` | Greco-Roman revival. Soft curls framing face, gathered into high topknot or back bun. | Softer, more natural. Curling iron waves. Oil for shine. |
| **Victorian (Early)** | `style-spaniel-loops-center-part` | Center part with smooth, looped sections covering ears ("spaniel curls"). Bun at back of neck. | High gloss (Macassar oil). Heavy, plastered down. Severe control. |
| **Victorian (Late)** | `style-gibson-girl-pompadour` | Massive soft volume on top ("The Teacup"). Hair swept up from all sides into a cloud. | Frizzy, airy volume using "rats" (hair padding). Soft texture. No defined curls. |
| **Edwardian** | `style-marcelled-soft-waves` | Soft, horizontal "S" waves. Volume at crown. Often topped with large hats. | Heated iron waves. Softer than 1920s. Natural color dominant. |
| **1920s (Jazz Age)** | `style-eton-crop-finger-wave` | Severe, short bob or shingle cut. Wet-look "S" waves sculpted flat against head with gel. | Gelatinous, wet, high-specular shine. Hard helmet shape. |
| **1930s (Hollywood)** | `style-soft-waves-side-part` | Longer than 20s. Deep side part, soft finger waves, curls at ends. Jean Harlow platinum. | Glossy, controlled waves. Beginning of "glamour" hair. |
| **1940s (Wartime)** | `style-victory-rolls` | Structured, hollow rolls pinned at temples or crown. Smooth sections, practical back. | Sculptural, smooth. Gravity-defying but solid. Pin-set structure. |
| **1950s (Pin-Up)** | `style-poodle-cut-or-pageboy` | Either tight curls all over (poodle) or smooth, curved-under pageboy. Bandanas popular. | Perm texture (poodle) or smooth roller-set (pageboy). |
| **1960s (Early/Mod)** | `style-beehive-bouffant` | Teased, massive conical volume rising from crown. Lacquered solid. Flip ends optional. | Stiff, dry, matte (hairspray crust). Architectural structure. |
| **1960s (Late/Hippie)** | `style-long-straight-center-part` | Extremely long, ironed flat, center-parted. "Natural" aesthetic. | Flat-ironed straight. Minimal product. Anti-establishment simplicity. |
| **1970s (Disco)** | `style-farrah-feathered-wings` | Feathered layers swept back from face like wings. Bouncy, voluminous. | Blow-dried, curling-ironed layers. Lots of movement. |
| **1980s (New Wave)** | `style-perm-frizz-volume` | Chemically processed texture. Maximum chaotic volume. Big bangs, crimping, asymmetry. | Dry, crinkled, high-noise texture. Mousse + hairspray shell. |

---

## 1B. Female Hairstyle Taxonomy (Regional/Non-Western)

### East Asian

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Chinese (Tang Dynasty)** | `style-tang-high-chignon-ornate` | Hair piled extremely high in elaborate loops, held with jade/gold pins, flowers, combs. | Heavy with oil/wax. Architectural structure. Black, glossy. |
| **Chinese (Qing Dynasty)** | `style-qing-two-handled` | Manchu style: hair over frame creating wing-like "handles" on sides. Elaborate decoration. | Stiff frame structure. Hair wrapped over form. |
| **Japanese (Heian)** | `style-heian-floor-length` | Extremely long (floor-length), straight, loose black hair. Parted center. | Natural weight, oil-treated for shine. Silk-like texture. |
| **Japanese (Edo/Geisha)** | `style-shimada-mage` | Complex upswept structure with multiple loops, wings, and topknot variations. Bintsuke oil. | Extremely stiff with bintsuke wax. Architectural. Lacquered black. |
| **Japanese (Maiko)** | `style-wareshinobu-split-peach` | Specific trainee geisha style: red fabric visible through split at back. Elaborate kanzashi. | Same stiff wax technique. Decorated with seasonal ornaments. |
| **Korean (Joseon)** | `style-jjokjin-meori-bun` | Married woman: low bun at nape. Maiden: single long braid with ribbon (daenggi). | Oiled, smooth, controlled. Often covered by headpiece. |

### South Asian

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Indian (Classical/Historical)** | `style-indian-long-braid-jasmine` | Single thick braid down back, often to knees. Decorated with jasmine flowers, gold ornaments. | Oiled heavily (coconut), extremely glossy. Natural wave pattern. |
| **Indian (Mughal Court)** | `style-mughal-center-part-jeweled` | Center-parted, smooth, with elaborate maang tikka (forehead jewelry), jhoomar (side ornament). | Oiled flat against scalp. Heavy ornamentation dominates. |
| **Indian (South Temple)** | `style-south-indian-kondai` | Complex multi-tiered bun structure decorated with temple jewelry and flowers. | Structured with oil and pins. Extremely ornate. |

### African

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **West African (Historical)** | `style-west-african-cornrows-geometric` | Tight cornrow braids in geometric patterns. Patterns indicate status, age, tribe. | Tight tension. Scalp visible between rows. Patterns meaningful. |
| **West African (Threaded)** | `style-nigerian-thread-wrapped` | Sections wrapped tightly with black thread creating sculptural shapes. | Rigid, sculptural. Thread creates geometric forms. |
| **East African (Maasai)** | `style-maasai-ochre-braids` | Thin braids coated with red ochre and animal fat. | Stiff, orange-red color. Waxy/greasy texture. |
| **North African (Berber)** | `style-berber-coin-decorated` | Braids or sections decorated with silver coins, amber beads. Often partially covered. | Heavy with ornaments. Jingle/movement. |
| **Afro (Natural/1970s)** | `style-afro-natural-halo` | Natural hair texture picked out into spherical halo shape. Maximum volume. | Soft, dry texture. No chemical straightening. Picks create lift. |

### Middle Eastern

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Persian (Historical)** | `style-persian-long-curls-veil` | Long, loose curls or waves. Often partially visible under light veil. Decorated forehead pieces. | Soft curls, hennaed highlights possible. Ornamented. |
| **Ottoman** | `style-ottoman-concealed-decorated` | Hair concealed under elaborate headdress (hotoz), visible hair pieces may frame face. | Hidden structure. Focus on headdress decoration. |
| **Arabian Peninsula** | `style-arabian-braided-concealed` | Long braids, typically concealed. Henna decoration on special occasions. | Natural texture, hennaed. Covered in public. |

### Indigenous Americas

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Plains Nations** | `style-plains-two-braids-wrapped` | Two long braids wrapped in cloth or leather. Hair part often painted red. Feathers for status. | Oiled, glossy black. Leather/cloth wrapping visible. |
| **Southwest (Hopi)** | `style-hopi-squash-blossom` | Unmarried women: side whorls ("squash blossoms") over ears. Married: simpler style. | Structured whorls. Significant cultural meaning. |
| **Mesoamerican (Maya)** | `style-maya-forehead-flattened` | Hair dressed high, forehead artificially flattened (elite). Elaborate headdresses. | Hair secondary to headdress structure. |
| **Inca** | `style-inca-bangs-long-back` | Distinctive straight bangs across forehead, long in back. Status headwear. | Cut style distinctive. Focus on textile headwear. |

---

## 2. Male Hairstyle Taxonomy (Western/European)

| Era | Key Token | Visual Description | Texture Physics |
|-----|-----------|---------------------|-----------------|
| **Ancient Greek** | `style-greek-curly-wreath` | Natural curls, medium length. Often bound with ribbon or wreath. Beards common. | Natural curl pattern. Oil for definition. |
| **Ancient Roman** | `style-caesar-crop-forward` | Short, layered, brushed forward from crown to forehead. Clean-shaven face (Republic/early Empire). | Matte, textured layers. Natural grease. Combed control. |
| **Byzantine** | `style-byzantine-bowl-beard` | Bowl-shaped cut, short. Long forked beard for officials/clergy. | Formal, controlled. Religious significance. |
| **Medieval** | `style-medieval-page-boy` | Bowl cut or page-boy length to ears/chin. Bangs common. Clean-shaven or short beard. | Simple cuts. Practical. Class-dependent length. |
| **Renaissance** | `style-renaissance-shoulder-length` | Shoulder-length, center-parted or brushed back. Full beards stylish. | Natural wave/curl. Oiled. Facial hair important. |
| **17th Century (Cavalier)** | `style-cavalier-lovelock` | Long, flowing, often with one extra-long "lovelock" over shoulder. Pointed beards. | Natural flow, some curl. Deliberate asymmetry. |
| **18th Century** | `style-queue-wig-tied-back` | White/grey powdered wig. Curls at ears (sometimes stacked), ponytail (queue) at back tied with black ribbon. | Artificial fiber (horsehair/human). Matte powder texture. Stiff structure. |
| **Regency/Romantic** | `style-windswept-brutus` | Short but artfully messy, brushed forward. "Poetic" dishevelment. Sideburns emerging. | "Bedhead" texture. Natural clumping. Pomade minimal. |
| **Victorian (Early)** | `style-victorian-romantic-curls` | Medium length, natural waves or curls. Full beards, mutton chops, elaborate facial hair. | Natural curl. Increasing beard elaboration. |
| **Victorian (Late)** | `style-side-part-slicked` | Short, severe side part. Plastered down with heavy Macassar oil. Handlebar mustaches. | Wet, greasy, high-specular reflection. Hard shell appearance. |
| **Edwardian** | `style-edwardian-pompadour-waxed` | Higher volume at front, still controlled. Waxed mustaches with curled tips. | Pomade sculpted. More volume than Victorian. |
| **1920s-30s** | `style-slicked-back-patent-leather` | Extremely slicked, patent-leather shine. Part optional. "Brilliantine" look. | Wet, mirror-like shine. Hair moves as single unit. |
| **1940s (Military)** | `style-regulation-short-sides` | Military-influenced. Short sides, slightly longer top. Clean, practical. | Clean cut, controlled. Minimal product. |
| **1950s (Greaser)** | `style-ducktail-pompadour` | High volume front wave (pompadour), swept back sides meeting in ducktail at back. | Heavy pomade. Comb tracks visible. Wet look. Labor-intensive. |
| **1950s (Ivy League)** | `style-ivy-league-preppy` | Short, neat, side-parted. "Clean-cut American" look. | Minimal product. Natural, tidy. |
| **1960s (British Invasion)** | `style-moptop-beatle` | Medium length, bowl-ish shape covering forehead and ears. "Shaggy" for era. | Natural movement. Minimal product. Revolutionary length. |
| **1970s (Hippie)** | `style-shag-shoulder-length` | Long, unkempt, center-parted, covering ears, touching shoulders. Beards return. | Dry, frizzy, natural movement. Anti-establishment length. |
| **1980s (Power)** | `style-power-mullet-or-sculpted` | Either business-mullet (short front, long back) or heavily sculpted/moussed structure. | Mousse, gel, hairspray. Structured chaos or deliberate mullet. |

---

## 2B. Male Hairstyle Taxonomy (Regional/Non-Western)

### East Asian

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Chinese (Han Dynasty)** | `style-han-topknot-pinned` | Hair grown long, gathered into topknot on crown, secured with pin. Never cut (filial piety). | Oiled smooth, tight wrap. Formal structure. |
| **Chinese (Qing Dynasty)** | `style-qing-queue-shaved` | Front half of head shaved, back grown long in single braid (queue). Manchurian mandate. | Distinctive silhouette. Shaved/braided combination. |
| **Japanese (Samurai)** | `style-chonmage-samurai` | Crown shaved (to accommodate helmet), sides and back gathered into oiled topknot folded forward. | Oiled flat, distinctive shaved crown. Martial significance. |
| **Japanese (Edo Commoner)** | `style-edo-topknot-variation` | Various topknot styles indicating class/profession. Sumo wrestlers have distinctive mage. | Status-coded styles. Oiled control. |
| **Korean (Joseon)** | `style-korean-sangtu-topknot` | Married men: topknot (sangtu) worn under distinctive horsehair hat (gat). Never cut. | Controlled under headwear. Hat defines silhouette. |

### South Asian

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Indian (Brahmin)** | `style-brahmin-shikha-tuft` | Head shaved except for single tuft (shikha) at crown. Religious significance. | Mostly bare scalp with ritual tuft. |
| **Indian (Rajput/Warrior)** | `style-rajput-turban-hidden` | Hair concealed under turban. When visible: long, sometimes curled at temples. | Focus on elaborate turban. Hair secondary. |
| **Sikh** | `style-sikh-kesh-turban` | Uncut hair (kesh) kept covered under turban (dastar). Beard also uncut, often tied. | Natural length. Religious requirement. Turban essential. |

### African

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **West African (Traditional)** | `style-african-male-short-pattern` | Often short or shaved in patterns. Tribal/status markings via hair design. | Close-cropped or patterned shaving. |
| **Maasai (Warrior)** | `style-maasai-warrior-long-ochre` | Grown long during warrior phase, braided and ochred red. Shaved after warrior period ends. | Ochre-stiffened. Ceremonial significance. |
| **Ethiopian (Historical)** | `style-ethiopian-butter-dressed` | Sometimes dressed with butter/oil, creating distinctive texture and shape. | Greased, soft texture. Cultural practices vary. |

### Middle Eastern

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Arab (Historical)** | `style-arab-keffiyeh-covered` | Hair typically concealed under keffiyeh/headcloth. When visible: medium length, naturally curly. | Covered style. Cloth texture dominates. |
| **Persian** | `style-persian-curled-oiled` | Curled, oiled, often with full beard. Hair may show under turban or cap. | Defined curls, oiled shine. |
| **Ottoman** | `style-ottoman-shaved-turban` | Head often shaved or short under turban. Focus on turban style indicating rank. | Turban structure primary. Hair minimal. |

### Indigenous Americas

| Era/Region | Key Token | Visual Description | Texture Physics |
|------------|-----------|---------------------|-----------------|
| **Plains Nations** | `style-plains-long-braids-male` | Long, often in two braids. Feathers, fur wraps, beads added. Scalp-lock center. | Oiled black. Culturally significant length. |
| **Mohawk/Iroquois** | `style-mohawk-roached` | Sides shaved, center strip standing up (sometimes with deer hair roach headdress). | Distinctive silhouette. Grease/fat to stand up. |
| **Maya (Elite)** | `style-maya-male-elaborate` | Elaborate headdress dominates. Hair secondary to feathered/jade structures. | Headdress architecture primary. |

---

## 3. Facial Hair Taxonomy

### Mustaches

| Token | Description | Era/Context |
|-------|-------------|-------------|
| `mustache-pencil-thin` | Extremely thin line on upper lip. Meticulously groomed. | 1930s Hollywood, Golden Age |
| `mustache-toothbrush` | Small square under nose. Now problematic associations. | 1920s-1940s (pre-WWII) |
| `mustache-handlebar` | Long, waxed tips curled upward and outward. | Victorian/Edwardian, Hipster revival |
| `mustache-walrus` | Thick, drooping, covering upper lip entirely. | 1880s-1910s, Working class |
| `mustache-chevron` | Thick, wide, covering upper lip to corners of mouth. | 1970s-1980s |
| `mustache-fu-manchu` | Long, thin, hanging past chin on either side of mouth. | Asian cinema trope (often stereotypical) |
| `mustache-horseshoe` | Full mustache with vertical extensions down to jawline. | Biker culture, 1970s |

### Beards

| Token | Description | Era/Context |
|-------|-------------|-------------|
| `beard-full-natural` | Full coverage, minimal trimming. Natural shape. | Biblical, Victorian intellectual, 1970s |
| `beard-full-shaped` | Full but groomed into deliberate shape. | 2010s hipster, Modern professional |
| `beard-mutton-chops` | Massive sideburns connecting to mustache; chin shaved. | 1850s-1870s Victorian |
| `beard-van-dyke` | Pointed chin beard + separate, waxed mustache. Named after painter. | 17th Century Baroque, 1990s revival |
| `beard-goatee-circle` | Small chin beard + mustache forming circle around mouth. | 1990s-2000s |
| `beard-chin-strap` | Thin line following jawline, no mustache. | 2000s, varies by region |
| `beard-imperial` | Mustache with pointed upward tips + small pointed chin beard. | Napoleon III era (1850s-1870s France) |
| `beard-shenandoah` | Full beard with NO mustache. Chin curtain. | Amish/Mennonite, Abraham Lincoln |
| `beard-ducktail` | Full but trimmed to point at chin. | 2010s trend |
| `beard-forked` | Long beard divided into two points. Medieval/wizard aesthetic. | Medieval, Byzantine officials |
| `beard-full-patriarch` | Untrimmed, chest-length, venerable. | Religious leaders, Old Testament imagery |

### Sideburns

| Token | Description | Era/Context |
|-------|-------------|-------------|
| `sideburns-none` | Clean-shaven cheeks completely. | Roman, 1920s-1950s corporate |
| `sideburns-short-pointed` | Small points ending at mid-ear. | 1800s-1810s Regency |
| `sideburns-medium-straight` | End at earlobe, straight bottom edge. | Standard/neutral |
| `sideburns-muttonchop-disconnected` | Large chops NOT connected to mustache. | 1870s-1880s |
| `sideburns-elvis-wide` | Wide, long, to jawline. | 1950s-1970s Elvis style |
| `sideburns-friendly-chops` | Full cheek coverage connecting to mustache, chin shaved. | = Mutton chops (alternate name) |

### Stubble/Shadow

| Token | Description | Era/Context |
|-------|-------------|-------------|
| `stubble-none-blue-shadow` | Completely shaved but visible dark follicle shadow under skin. | 1940s-1950s corporate, Film Noir |
| `stubble-five-oclock` | One day's growth. Slightly rough. | Casual 1980s+, "rugged" look |
| `stubble-designer-scruff` | 2-4 days, deliberately maintained at short length. | 2000s+ fashion |

---

## 4. Makeup Physics

### 4.1 Historical Makeup Tokens (The "Anti-Sephora" Layer)

*Modern makeup is "invisible." Historical makeup is visible product.*

| Token | Effect on Face | Era/Context |
|-------|----------------|-------------|
| `makeup-lead-white-ceruse` | Chalky, opaque white mask. Cracks visible. Ghostly pallor. Actually toxic. | Elizabethan, 18th Century aristocracy |
| `makeup-rice-powder-white` | Matte white/pale, less opaque than ceruse. Distinctive flat finish. | Japanese Geisha, 18th C. Europe |
| `makeup-rouge-circular-patch` | Bright red circle painted on cheekbone. Hard circular edge. Artificial placement. | Rococo, 1920s Doll aesthetic |
| `makeup-rouge-natural-placement` | Red applied to cheeks but placed where natural flush occurs. | Victorian, Regency (subtle) |
| `makeup-kohl-smudge` | Greasy black soot (galena/soot) heavily applied around eyes. Smudged, messy edges. | Ancient Egyptian, 1920s Vamp, Middle Eastern |
| `makeup-kohl-precise` | Black eyeliner precisely applied. Extended at corners. | Egyptian formal, 1960s mod |
| `makeup-greasepaint-theatrical` | Thick, oily foundation. High sheen. Clogged pores. Designed for stage distance. | Theater, Early Cinema, Cabaret |
| `makeup-pancake-matte` | Ultra-matte, flat powder finish. Flattens features, masks skin texture completely. | 1940s-1950s Hollywood, Television |
| `makeup-natural-flush` | No visible product. Only natural subsurface redness. | Victorian modesty, Medieval |
| `makeup-beauty-mark-mouche` | Artificial black spots (fabric or drawn) placed on face. Each position had meaning. | 17th-18th Century |
| `makeup-lip-carmine-red` | Bright, opaque lip color. Often blurred beyond natural lip line. | 18th Century, 1920s |
| `makeup-lip-bitten-berry` | Lips tinted as if bitten/stained with berry juice. Natural edge. | Victorian, Regency, Medieval |
| `makeup-lip-cupid-bow` | Lips drawn into exaggerated cupid's bow shape, often OVER natural lip line. | 1920s, 1930s |
| `makeup-eyebrow-shaved-redrawn` | Natural brows removed, replaced with thin drawn line higher on forehead. | 1920s-1930s |
| `makeup-eyebrow-bold-natural` | Heavy, dark, minimally groomed brows. | 1980s, 2010s revival |
| `makeup-unibrow-connected` | Brows deliberately connected or not plucked between. Cultural beauty standard. | Tajikistan, historical Persian, Frida Kahlo |
| `makeup-ochre-ceremonial` | Red/yellow ochre applied to face in patterns. Ceremonial context. | Indigenous peoples, tribal contexts |

### 4.2 Makeup Color Authenticity (What Pigments Existed When)

| Period | Available Colors | NOT Available | Notes |
|--------|------------------|---------------|-------|
| **Ancient-Medieval** | White (lead ceruse, chalk), Black (soot, kohl), Red (ochre, cinnabar, carmine), Yellow (saffron, ochre) | Pink, Purple lip colors, Bright blues/greens for makeup | Limited palette. Toxic ingredients common. |
| **Renaissance-18th C** | + Vermillion (red), + Cochineal (crimson) | Reliable bright colors beyond red | Still heavy metals. Rouge and white dominant. |
| **Victorian (1837-1901)** | + Zinc white (safer), + More stable reds | Obvious makeup socially suspect | Makeup minimal/invisible for "respectable" women. Actresses different. |
| **Edwardian (1901-1910)** | Early commercial cosmetics emerge | Full modern palette | Transition era. Makeup becoming acceptable. |
| **1920s+** | Modern synthetic pigments available | -- | Full modern color range possible. |

---

## 5. Hair Rendering by Medium

*This section is CRITICAL for the Execution Engine. It dictates HOW to draw the hair.*

### 5.1 Pen & Ink / Woodcut

**Flag:** `hair-render-ink-mass`

**Prompt Injection:**
"Treat hair as a solid black shape. Do NOT draw individual strands. Use negative space (white lines carved out of black mass) ONLY for major highlights or part lines. Hair reads as a silhouette. Line weight at edges matches rest of composition."

**Medium-Specific Notes:**
- Beardsley: Pure black mass, no internal detail, extreme contrast
- Woodcut: Visible carved texture within black mass
- Engraving: Fine parallel lines can indicate direction

### 5.2 Oil Painting (Academic/Classical)

**Flag:** `hair-render-glaze-volume`

**Prompt Injection:**
"Hair is a single volumetric mass rendered in glazes. Paint the dark ground first, then build up 3-5 specular highlight strokes on top. Do NOT render individual hairs. Hair behaves as a 'helmet' shape catching light. Lost edges where hair meets background. Detail only at hairline and a few flyaway strands."

### 5.3 Oil Painting (Impressionist/Loose)

**Flag:** `hair-render-broken-stroke`

**Prompt Injection:**
"Hair is a collection of directional colored dabs. No outlines. Edges dissolve into background through color rather than line. Color vibration (warm/cool opposition) creates form. Individual strokes visible. No smooth blending."

### 5.4 Watercolor

**Flag:** `hair-render-wash-bleed`

**Prompt Injection:**
"Hair is wet washes with soft edges where pigment bleeds. Hard edges only where wash dried before next application. White paper may show through as highlights. No solid black—darkest value is concentrated pigment, not ink."

### 5.5 Sculpture / Marble

**Flag:** `hair-render-sculpted-solid`

**Prompt Injection:**
"Hair is carved stone. 'Strands' are deep parallel grooves. No transparency, no flyaways, no soft edges. Hair behaves as a solid helmet fused to skull. Chisel marks may be visible. Texture is stone texture, not hair texture."

### 5.6 Fresco

**Flag:** `hair-render-fresco-flat`

**Prompt Injection:**
"Hair is flat color shapes with minimal modeling. Limited glazing possible (fresco secco). Pigment absorbed into plite—matte finish mandatory. Color may be faded/shifted. Hair simplified into major masses."

### 5.7 Photograph (Vintage/Wet Plate)

**Flag:** `hair-render-long-exposure-blur`

**Prompt Injection:**
"Hair edges are soft due to subject movement during long exposure. Texture is frizzy and unconditioned (no silicone products). Halation (light glow) where backlight hits stray hairs. Detail is lower than modern photography. Flyaways more prominent."

### 5.8 Photograph (Modern/Sharp)

**Flag:** `hair-render-sharp-every-strand`

**Prompt Injection:**
"Resolve individual hair strands. Specular highlights on each hair shaft. Subsurface scattering in lighter hair. Modern lens sharpness. Product sheen visible (if styled). Split ends, texture variation, scalp visible at part."

### 5.9 Anime/Cel

**Flag:** `hair-render-cel-shapes`

**Prompt Injection:**
"Hair is simplified into geometric spike or wave shapes. Color is flat with 2-3 tonal steps maximum (base, shadow, highlight). Hard edges between color zones. No gradients. Gravity may be defied for aesthetic spikes."

### 5.10 Ukiyo-e (Japanese Woodblock)

**Flag:** `hair-render-ukiyo-black-mass`

**Prompt Injection:**
"Hair is solid sumi ink black. Absolutely no internal shading or strand detail. Shape defined ONLY by silhouette edge. Hairline may have slight comb-tooth edge texture. White never appears in hair except as rain/snow overlay."

---

## 6. Hair Logic Flags (For Reasoning Engine)

*Add these to the `cognitive_flags` array in the Artist Cartridge.*

### 6.1 Physics Flags

| Flag | Instruction to Reasoning Engine |
|------|--------------------------------|
| `logic-hair-gravity-heavy` | "Hair is dirty, oily, or weighted with product. It hangs heavy and flat against the skull. No 'bouncy' volume. No movement. Limp." |
| `logic-hair-gravity-defied` | "Hair structure defies gravity through wigs, wire frames, padding, or extreme product. Architectural shapes are possible. Do not collapse structure." |
| `logic-hair-stiff-structure` | "Hair is styled with sugar water, wax, pomade, or wire. It holds impossible shapes. It does not move or flow. Frozen in place." |
| `logic-hair-natural-movement` | "Hair responds to gravity and wind naturally. No product. Flyaways expected. Movement and disarray acceptable." |
| `logic-hair-frizz-halo` | "Backlighting or edge lighting MUST reveal a halo of broken, frizzy individual hairs. Imperfection is mandatory. Hair is not smooth." |
| `logic-hair-wet-slick` | "Hair is wet or heavily oiled. It clumps into sections. Scalp may be visible. High specular shine. No volume." |
| `logic-hair-powder-matte` | "Hair is powdered (18th C wig). Surface is matte/chalky. No shine. Grey or white color. Texture is dry and cotton-like." |

### 6.2 Construction Flags

| Flag | Instruction to Reasoning Engine |
|------|--------------------------------|
| `logic-hair-wig-visible` | "This is a WIG, not natural hair. Show the artificial hairline. The wig sits ON TOP of the head, adding unnatural height. Front edge may be visible. Texture differs from skin." |
| `logic-hair-extension-blend` | "Hair includes added pieces (extensions, rats, false sections). These should blend but may show slightly different texture or color at junction points." |
| `logic-hair-padding-underneath` | "Hair is styled over padding ('rats', cushions, wire frames) to create volume. The volume is NOT from natural hair mass. Shape is supported." |
| `logic-hair-match-medium` | "Hair MUST be rendered using the same technique as face and body. If face is paper mask, hair is ink mass. No photorealistic hair on stylized faces." |

### 6.3 Cultural Flags

| Flag | Instruction to Reasoning Engine |
|------|--------------------------------|
| `logic-hair-religious-requirement` | "Hair style has religious significance. Do not alter the fundamental requirement (e.g., Sikh uncut hair, Orthodox payot, Muslim covering)." |
| `logic-hair-status-marker` | "Hairstyle indicates social status, marital status, or age. Accuracy matters (e.g., Hopi squash blossom = unmarried maiden)." |
| `logic-hair-cultural-specific` | "This hairstyle is specific to a culture. Do not mix elements from different cultural traditions. Research accuracy required." |

---

## 7. Headwear Interaction Protocol

*Hair exists in context with hats, crowns, veils, and headdresses.*

### 7.1 Headwear Categories

| Category | Hair Behavior | Token |
|----------|---------------|-------|
| **Full Coverage** (Wimple, Hijab, Turban) | Hair completely hidden. Focus on face and fabric. | `headwear-full-coverage` |
| **Partial Frame** (Crown, Tiara, Hat) | Hair visible around edges. Style should complement headwear. | `headwear-partial-frame` |
| **Integrated** (Geisha kanzashi, Mantilla) | Ornaments inserted INTO hair. Hair is armature for decoration. | `headwear-integrated` |
| **Structural Support** (Pouf frame, Hennin) | Hair stretched over or hidden by structure. Hair subordinate to form. | `headwear-structural` |
| **Hatline Indent** (Bowler, Top Hat) | Sustained wear creates visible indent ring in hair. Historical accuracy detail. | `headwear-indent-mark` |

### 7.2 Veil Behavior

| Veil Type | Hair Visibility | Era |
|-----------|-----------------|-----|
| **Transparent/Sheer** | Hair fully visible through fabric. Softened slightly. | Bridal, Ancient Roman |
| **Translucent** | Hair silhouette visible. Color muted. Details obscured. | Medieval, Byzantine |
| **Opaque** | No hair visible. Fabric is the visual. | Religious covering, Mourning |

### 7.3 Hat + Hair Styling Rules

| Era | Expected Relationship |
|-----|----------------------|
| **Pre-1920s** | Hats worn ON TOP of elaborate hairstyles. Hair is foundation. Large hats = large hair. |
| **1920s-1930s** | Cloche hats REQUIRE short hair. Hair conforms to head shape. Hat is primary. |
| **1940s-1960s** | Hats perch on styled hair. Hair volume supports hat angle. |
| **1970s+** | Hats optional. Hair can be fully visible. Informal relationship. |

---

## 8. Integration with Execution Engine v1.1

### 8.1 JSON Cartridge Extension

Add this block to the Artist Cartridge:

```json
"hair_protocol": {
  "style_token": "INSERT_FROM_SECTION_1_OR_2",
  "style_token_regional": "INSERT_IF_NON_WESTERN_OR_NULL",
  "texture_physics": "INSERT_LOGIC_FLAG",
  "rendering_mode": "INSERT_RENDER_FLAG",
  "facial_hair": "INSERT_FROM_SECTION_3_OR_NULL",
  "makeup_tokens": ["INSERT_FROM_SECTION_4"],
  "headwear": "INSERT_FROM_SECTION_7_OR_NULL",
  "color_note": "INSERT_IF_RELEVANT_OR_NULL"
}
```

### 8.2 Execution Engine Compilation

When compiling the prompt, the Execution Engine should:

1. **Look up `style_token`** in Section 1/2 → Extract "Visual Description" and "Texture Physics"
2. **Look up `texture_physics`** in Section 6.1 → Extract physics instruction
3. **Look up `rendering_mode`** in Section 5 → Extract prompt injection text
4. **Combine into Hair Block** in Section 2 (Subject & Action) or Section 3 (Visceral Physics) of the Master Prompt Template

### 8.3 Compilation Example

**Input:**
```json
"hair_protocol": {
  "style_token": "style-gibson-girl-pompadour",
  "texture_physics": "logic-hair-frizz-halo",
  "rendering_mode": "hair-render-ink-mass",
  "facial_hair": null,
  "makeup_tokens": ["makeup-natural-flush"],
  "headwear": null
}
```

**Compiled Output (injected into prompt):**
```text
Hair styled in a Gibson Girl pompadour—massive soft volume swept up from all sides into a cloud atop the head, frizzy and airy, created with padding underneath. Hair rendered as solid black ink mass with NO individual strands—silhouette only, negative space for highlights, line weight matching costume. Backlighting reveals halo of frizzy broken hairs at edges. Face shows only natural flush—no visible makeup product.
```

---

## 9. Quick Reference Cards

### 9.1 Era → Default Female Style (Western)

| If Era = | Default Token |
|----------|---------------|
| Ancient/Classical | `style-greco-roman-knot` |
| Medieval | `style-medieval-loose-veil` |
| Renaissance | `style-high-forehead-braid-crown` |
| 1600s | `style-fontange-tower` |
| 1700s | `style-pouf-tower-powdered` |
| 1800-1830 | `style-apollo-knot-classical` |
| 1840-1890 | `style-spaniel-loops-center-part` |
| 1890-1910 | `style-gibson-girl-pompadour` |
| 1910s | `style-marcelled-soft-waves` |
| 1920s | `style-eton-crop-finger-wave` |
| 1930s | `style-soft-waves-side-part` |
| 1940s | `style-victory-rolls` |
| 1950s | `style-poodle-cut-or-pageboy` |
| 1960s early | `style-beehive-bouffant` |
| 1960s late | `style-long-straight-center-part` |
| 1970s | `style-farrah-feathered-wings` |
| 1980s | `style-perm-frizz-volume` |

### 9.2 Era → Default Male Style (Western)

| If Era = | Default Token |
|----------|---------------|
| Ancient Roman | `style-caesar-crop-forward` |
| Medieval | `style-medieval-page-boy` |
| Renaissance | `style-renaissance-shoulder-length` |
| 1600s | `style-cavalier-lovelock` |
| 1700s | `style-queue-wig-tied-back` |
| 1800-1830 | `style-windswept-brutus` |
| 1840-1890 | `style-side-part-slicked` |
| 1890-1910 | `style-edwardian-pompadour-waxed` |
| 1920s-1930s | `style-slicked-back-patent-leather` |
| 1940s | `style-regulation-short-sides` |
| 1950s | `style-ducktail-pompadour` OR `style-ivy-league-preppy` |
| 1960s | `style-moptop-beatle` |
| 1970s | `style-shag-shoulder-length` |
| 1980s | `style-power-mullet-or-sculpted` |

### 9.3 Medium → Default Rendering Flag

| If Medium = | Default Rendering |
|-------------|-------------------|
| Pen & Ink | `hair-render-ink-mass` |
| Woodcut/Linocut | `hair-render-ink-mass` |
| Oil (Classical) | `hair-render-glaze-volume` |
| Oil (Impressionist) | `hair-render-broken-stroke` |
| Watercolor | `hair-render-wash-bleed` |
| Fresco | `hair-render-fresco-flat` |
| Sculpture | `hair-render-sculpted-solid` |
| Photo (Vintage) | `hair-render-long-exposure-blur` |
| Photo (Modern) | `hair-render-sharp-every-strand` |
| Anime/Cel | `hair-render-cel-shapes` |
| Ukiyo-e | `hair-render-ukiyo-black-mass` |

---

## 10. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-11-29 | Initial draft from Gemini 3 |
| 1.1 | 2025-11-29 | Added Section 1B/2B (Regional taxonomies); Expanded Section 3 (Facial hair); Added Section 4.2 (Color authenticity); Added Section 7 (Headwear); Added Section 8 (Execution Engine integration); Added Section 9 (Quick Reference Cards); Expanded Section 5 (More medium types) |
