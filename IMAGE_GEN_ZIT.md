# Image Generation Prompts — kobudo.fi (Z-Image Turbo)

Prompts are written for **Z-Image Turbo** (natural language sentence style, no separate negative prompt – exclusions appended at the end of each prompt).

## Z-Image Turbo Key Settings

- **Steps:** 8
- **CFG scale:** 1
- **Sampler / Scheduler:** `seeds_3 / beta` (first choice) or `ddim / kl_optimal` (more contrast)
- **Resolution:** All dimensions **must be divisible by 32**; total pixels should not exceed ~1,048,576 (native 1024×1024). Suggested replacements for each placeholder size are noted per section.
- **Negative prompt field:** Leave empty — add all exclusions inline at the end of the prompt.

## Consistent Style

Bright, cheerful cartoon illustration with clean bold black outlines and flat cel-shaded color fills; warm upbeat palette of vivid crimson red, bright gold, sky blue, warm amber, and clean white — fully saturated, friendly, and welcoming throughout; Okinawan kobudo theme presented with fun accessible energy; simplified graphic backgrounds with soft shadow accents only; stylized expressive characters and objects with clear clean proportions; joyful mood in every composition.

---

## Home — Hero Banner
**URL:** `/en/`
**Placeholder size:** 1200 × 440 → **Use 1184 × 448** (37 × 14 × 32²; 530,432 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of eight traditional Okinawan kobudo weapons arranged symmetrically on a crimson lacquered dojo wall — top tier: a rokushaku-bō, 182cm long, tapering from 3cm diameter at centre to 2cm at each tip, crafted from red oak with warm amber-brown grain and dark iron ferrule caps; second tier: a sai pair, each 50cm of dark iron with an octagonal shaft and two upward-curved yoku tines angled at 45°; third tier: a tonfa pair, each a 45cm red-oak cylinder 3cm wide with a 12cm perpendicular grip handle set one-third from the butt end; fourth tier: a kama pair, each a 30cm ash-wood handle with a curved 15cm iron sickle blade, and a nunchaku of two 30cm octagonal hardwood sticks joined by twisted horsehair cord. Two Okinawan kobudo masters, each approximately 170cm tall, in thick white cotton keikogi gi tops, dark indigo hakama wide-leg pleated trousers, and bare feet stand flanking the wall; the 182cm bō on the top tier extends 12cm above the crown of each master's head, clearly taller than either figure and emphasising the staff's full-body length. Stone lanterns mounted on the wall cast vivid warm amber light, long dramatic shadows falling across aged dark wooden floors. Dark crimson wall dominant throughout. No text, no watermark, no modern elements, no photography artifacts, no blurriness, no distortion.
```

---

## Home — History Card
**URL:** `/en/history/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon illustration of an ancient hand-drawn map showing the Ryukyu archipelago rendered on aged parchment — Okinawa at centre, the Amami islands arcing northeast and the Yaeyama islands to the southwest, all in warm ochre and sienna brushwork. Sea routes are marked with fine ink lines. Kanji characters written in Japanese calligraphy brushwork serve as coastal place-name annotations along the island shores. A detailed compass rose in the lower corner is rendered in red and gold. Warm candlelight from the left edge illuminates the parchment with vivid golden amber. The background is dark crimson like cracked aged leather. No legible modern Latin text, no watermark, no blurriness, no distortion.
```

---

## Home — Styles & Lineages Card
**URL:** `/en/styles/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon illustration of a genealogy scroll partially unrolled on a wooden desk, showing a branching lineage tree painted in vivid gold and sepia ink against dark crimson silk backing. At each node a small painted portrait medallion shows an Okinawan kobudo master wearing a white cotton keikogi gi and dark indigo hakama. Kanji characters written in Japanese calligraphy brushwork label each master's name along the branches. Fine gold-leaf inked lines connect each generation. The scroll edges glow vivid amber under a single tallow candle in a dark iron holder. Deep shadow fills the outer edges. No readable modern Latin text, no watermark, no blurriness, no distortion.
```

---

## Home — Traditional Weapons Card
**URL:** `/en/weapons/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon bird's-eye illustration of eight traditional Okinawan kobudo weapons arranged symmetrically on crimson lacquered wood, each drawn at true proportional scale relative to one another: a rokushaku-bō (182cm long tapered red-oak staff — nearly four times the length of the sai); a sai pair (each 50cm: iron trident with 35cm octagonal monouchi prong tapering to a point, two 10cm upward-curved yoku tines at the base, 15cm cord-wrapped tsuka handle); a tonfa pair (each 45cm cylindrical red-oak shaft 3cm wide, 12cm perpendicular grip handle set 15cm from the butt end); a nunchaku (two 30cm octagonal hardwood sticks 3cm wide joined by 15cm twisted horsehair cord); a kama pair (each 30cm ash handle with 15cm curved iron sickle blade fixed at a right angle, forming an L-shape 45cm total height); a tekko pair (each a 12cm horseshoe-shaped iron bar, barely wider than four fingers); a tinbe (30cm round rattan-woven cane shield, slightly larger than a dinner plate) beside a rochin spear (45cm: 35cm oak handle and 10cm iron leaf-shaped tip); and a surujin (2m twisted natural-fibre cord, more than four times the sai length, with 5cm iron weights at each end). Dramatic overhead studio lighting with vivid saturated colours against dark crimson. No text, no watermark, no modern objects, no blurriness, no distortion.
```

---

## Home — Kata Card
**URL:** `/en/kata/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon illustration: close-up of a calligraphy scroll partially unfurled, showing large flowing kanji characters written in Japanese calligraphy brushwork — bold wet black ink strokes, thick at the start and tapered at the tip — representing kobudo kata names on vivid dark crimson washi paper. A round red clay seal stamp with an inked kanji impression sits in the lower right corner. The scroll edges are lit by vivid warm amber candlelight from the left. Vivid vermillion and gold ink accents catch the light against the deep crimson washi ground. The background fades to a soft crimson gradient. No readable modern Latin text, no watermark, no blurriness, no distortion.
```

---

## Home — Research Card
**URL:** `/en/research`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon still life illustration of a stack of aged Japanese martial arts reference books and scrolls piled on a dark wooden desk. The book spines show kanji characters written in Japanese calligraphy brushwork printed in vivid red and gold on dark cloth covers. An ink brush with a split bamboo handle and a rectangular black inkstone with pooled dark ink lie beside them. A rolled scroll ties with red silk cord rests at the edge. A single tallow candle in a dark cast-iron holder casts a vivid amber-orange flame and a warm cone of light onto the pile, the flame the sole bright point against deep surrounding shadow. Background crimson. Bright cheerful cartoon style, clean bold outlines, flat cel-shaded colors. No modern objects, no watermark, no blurriness, no distortion.
```

---

## Home — About Card
**URL:** `/en/about`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (12 × 8 × 32²; 98,304 px)

**Prompt:**
```
A bright cheerful cartoon still life illustration of an open research journal with handwritten pages showing kanji characters written in Japanese calligraphy brushwork on cream paper, ink brushes with bamboo handles, a black rectangular inkstone with pooled ink, a small brass-rimmed magnifying glass resting on a folded scroll. A small oil lamp in a dark iron holder casts vivid soft amber light from the upper left, the flame the sole warm point in the scene. The scene sits on a wooden desk with a crimson backdrop and soft cast shadows. Bright cheerful cartoon style, clean bold outlines, flat cel-shaded colors. No modern text, no watermark, no blurriness, no distortion.
```

---

## History — Index Banner
**URL:** `/en/history/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a dramatic dusk coastline of the Okinawan islands — the East China Sea glittering vivid turquoise and gold under a deep crimson and fiery amber sky. Silhouettes of traditional Ryukyu buildings with double-curved hip-and-gable roofs of terracotta tile rise on a rocky coral-limestone promontory. Tall fan palms with vivid green fronds and leaning trunks sway in the foreground. Fishermen approximately 170cm tall in unbleached hemp ryusō robes work on the shore below. The mood is ancient and contemplative. Vivid saturated colors with deep crimson sky dominant over the scene. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## History — Ryukyu Kingdom Era
**URL:** `/en/history/ryukyu-kingdom`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration depicting a ceremonial procession at Shuri Castle in 16th-century Ryukyu Kingdom. The Shureimon gate dominates the centre — red lacquer columns, a double-curved hip-and-gable roof of glazed terracotta tiles with dragon-motif ridge ornaments in vivid orange and green, coral-limestone stone walls. Male courtiers approximately 170cm tall and female attendants approximately 155cm tall in elaborate bingata-resist-dyed silk robes patterned with phoenixes and cloud motifs in vivid red, gold, and cobalt blue, wide brocade obi sashes, black lacquered eboshi court caps, and wooden geta sandals process through the gate carrying vivid red paper lanterns on bamboo poles. The dusk sky behind the castle burns deep crimson fading to gold at the horizon. Vivid saturated colors throughout. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## History — Taira Shinken
**URL:** `/en/history/taira-shinken`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon portrait illustration, wide composition: a dignified elderly Okinawan kobudo master standing three-quarter view in a stone courtyard dojo. He wears a thick white cotton keikogi gi top with double-lapel and short sleeves, belted with a dark black-indigo obi sash, and wide dark indigo hakama wide-leg pleated trousers. His feet are bare on worn grey flagstones. His weathered face shows deep lines and serene authority, short-cropped grey hair. He stands approximately 170cm tall. He holds a rokushaku-bō upright at his right side — the staff 182cm long, extending 12cm above the crown of his head with its lower dark iron ferrule cap resting on the flagstone floor; the staff tapers from 3cm diameter at the centre third to 2cm at each tip, warm amber-brown red-oak grain, slightly worn and darkened from handling. Dramatic side lighting from the right casts vivid light across his white gi and a long dark shadow across the dark crimson plastered wall behind him. Vivid colors. No text, no watermark, no photographic artifacts, no modern clothing, no blurriness, no distortion.
```

---

## History — Kata Transmission
**URL:** `/en/history/kata-transmission`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a master teaching a student a bō kata inside a traditional stone-walled Okinawan dojo at night. The master — elderly, approximately 170cm tall, white cotton keikogi gi top, dark indigo hakama wide-leg pleated trousers, bare feet, short grey hair — stands close behind a younger student of similar 170cm height and guides the student's hands on a rokushaku-bō: 182cm long, visibly 12cm taller than either practitioner's head when the lower ferrule tip touches the floor; a tapered red-oak staff 3cm in diameter at the centre third, narrowing to 2cm at each dark iron ferrule tip. The student wears a white keikogi gi and dark indigo hakama, bare feet. A row of stone lanterns along the dark crimson plastered wall behind them casts vivid pools of warm amber light across the worn wooden floor. Long dramatic shadows stretch forward. The mood is reverent and intimate. Vivid saturated colors with dark crimson walls. No text, no watermark, no modern clothing, no blurriness, no distortion.
```

---

## Styles — Index Banner
**URL:** `/en/styles/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of an elaborate genealogy scroll mounted on a crimson silk backing, the scroll showing a branching kobudo lineage tree. Each node holds a small painted portrait medallion of an Okinawan master in a white cotton keikogi gi and dark indigo hakama; vivid gold-leaf lines connect the generations. Kanji characters written in Japanese calligraphy brushwork label each master's name and generation. The scroll is illuminated by a single hanging iron lantern with a vivid amber flame above. Deep shadow surrounds the outer edges. Vivid gold and crimson palette. No readable modern Latin text, no watermark, no blurriness, no distortion.
```

---

## Styles — Matayoshi Kobudo
**URL:** `/en/styles/matayoshi`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a wall-mounted Okinawan Matayoshi-style kobudo weapon collection — five weapons arranged horizontally on a dark crimson lacquered wall: an eku paddle oar approximately 155cm long with a broad 8cm pine blade at one end, warm pale pine grain; a nuntī trident pole approximately 180cm long with a three-pronged iron head, the centre prong 20cm and two side prongs curved outward; a surujin chain weapon 2m long with rounded iron weights at each end; a nunchaku pair of two 30cm octagonal hardwood sticks joined by twisted horsehair cord; and a sai pair, each 50cm iron trident with octagonal shaft and two upward-curved yoku tines. Vivid warm directional light rakes across the metal and natural wood surfaces. Dark crimson wall background. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Styles — Taira Line Lineage
**URL:** `/en/styles/taira-line`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a formal genealogy scroll unrolled on a wooden table. The vertical lineage chart is rendered in black and sepia brush strokes against vivid aged crimson washi paper. Kanji characters written in Japanese calligraphy brushwork label each master's name at every generational node. Small portrait silhouettes show Okinawan kobudo masters in white keikogi gi and dark hakama at each node, connected by fine inked lines. Vivid red wax seals with kanji impressions decorate several corners. A single iron lantern with a vivid amber flame illuminates the scene from the upper right, casting a warm cone of light down the scroll's length. Dark crimson dominant. No readable modern Latin text, no watermark, no blurriness, no distortion.
```

---

## Styles — Yamane-ryū
**URL:** `/en/styles/yamane-ryu`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of an Okinawan martial artist performing a bojutsu technique outdoors at dusk. He stands approximately 170cm tall and wears a white cotton keikogi gi top and vivid dark indigo hakama wide-leg pleated trousers, bare feet on grey flagstone. He is in a fluid wide shiko-dachi low stance, body torqued, sweeping a rokushaku-bō — 182cm long and thus 12cm taller than the practitioner, tapering from 3cm diameter at the centre to 2cm at each tip, red-oak grain — in a powerful horizontal arc; the staff is painted as a motion blur suggesting speed. A single vivid torch at ground level casts hard amber light forward, projecting long dramatic shadows of the figure and staff across the courtyard flagstones. The sky behind burns deep crimson fading to vivid orange. Vivid saturated colors throughout. No text, no watermark, no modern clothing, no blurriness, no distortion.
```

---

## Styles — Other Styles
**URL:** `/en/styles/other-styles`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a radially arranged display of six Okinawan kobudo weapons spreading symmetrically outward from the centre of a dark crimson lacquered panel: a sai (50cm iron trident with octagonal shaft and two upward-curved yoku tines); a tonfa (45cm red-oak cylinder with perpendicular grip handle); an eku paddle oar (155cm with broad 8cm pine blade); a nuntī trident pole (180cm with three-pronged iron head); a tekko (curved iron horseshoe bar 12cm across); and a kama (30cm ash handle with curved 15cm iron sickle blade). Vivid warm directed light catches every wood-grain detail and every iron edge glint. Dark crimson background dominant. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Index Banner
**URL:** `/en/weapons/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of eight traditional Okinawan kobudo weapons displayed on a crimson lacquered wall in four tiers, drawn at true scale relative to one another. Top tier: a rokushaku-bō (182cm red-oak staff, 3cm diameter at centre tapering to 2cm at dark iron ferrule tips) laid horizontally — the longest weapon, spanning nearly the full wall width. Second tier: a sai pair (each 50cm iron trident: 35cm octagonal monouchi prong from base to sharp tip, two 10cm yoku tines angled outward at 45° at the base, 15cm cord-wrapped tsuka handle) and a tonfa pair (each 45cm cylindrical shaft 3cm diameter, 12cm perpendicular handle set 15cm from the butt end). Third tier: a kama pair (each forming an L-shape: 30cm ash handle with a 15cm curved single-edged iron sickle blade fixed at a right angle) and a nunchaku (two 30cm octagonal hardwood sticks joined by 15cm twisted horsehair cord, total deployed length 75cm). Fourth tier: a tekko pair (each a 12cm horseshoe-shaped iron bar, compact enough to sit in a half-closed fist), a tinbe (30cm diameter round rattan-woven shield, slightly convex) beside a rochin (45cm total: 35cm hardwood shaft, 10cm iron leaf-shaped spearhead), and a surujin (2m twisted natural-fibre cord with 5-7cm rounded iron weights — the cord alone longer than any other weapon on the wall). Vivid warm side light highlights every metalwork and wood-grain detail. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Bō (Staff)
**URL:** `/en/weapons/bo`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon close-up illustration of a traditional Okinawan rokushaku-bō staff lying diagonally across the full frame, its full 182cm length spanning corner to corner. The staff tapers smoothly from 3cm diameter at the exact centre to 2cm at each tip — the taper is gradual and even, barely perceptible along any short section but obvious comparing centre to tip. Crafted from red oak, its straight pronounced grain shows vivid warm amber and sienna hues with a slight golden-brown patina from years of handling. Small dark iron ferrule caps at each tip — each cap approximately 2cm long, darker than the wood — show fine hammer marks. Vivid warm directional light rakes from the left across the full length of the staff, throwing every grain line into sharp relief, the wood glowing amber against a vivid crimson background. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Sai
**URL:** `/en/weapons/sai`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon bird's-eye illustration of a matching pair of traditional Okinawan sai resting symmetrically on dark crimson lacquered wood. Each sai is 50cm total length, composed of three distinct sections: a tsuka handle (bottom 15cm) wrapped in tight black cord braid ending in a rounded hemispherical tsukagashira iron butt cap; a moto junction collar from which two upward-curved yoku tines branch symmetrically outward — each tine 10cm long, beginning straight then curving slightly inward at the tip, set at 45° to the main shaft axis, the gap between tine tips approximately 8cm apart; and a monouchi main prong (upper 35cm) with a strict octagonal cross-section 2.5cm across at the moto, tapering evenly to a sharp needle-like point at the tip. The entire weapon is dark iron — oxidised charcoal-grey with hammer-mark surface texture and warm patina on the facet edges. Dramatic raking light from the upper left creates vivid sharp specular highlights along every octagonal edge and long hard shadows across the dark crimson surface below. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Tonfa
**URL:** `/en/weapons/tonfa`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon close-up illustration of a pair of traditional Okinawan tonfa resting in a diagonal crossed arrangement on dark crimson cloth. Each tonfa is 45cm long: a straight cylindrical red-oak hardwood shaft 3cm in diameter running the full length; a 12cm perpendicular grip handle mortise-and-tenon joined at a point 15cm from the short butt end, leaving a 30cm long section and a 15cm short butt extension on either side of the handle joint; the grip handle itself 3cm in diameter, worn slightly lighter from use. When the two pieces cross at their grip-handle points, the angle forms a clear X with the long ends extending away in opposite directions. Warm studio light from above illuminates the crossed joint, casting deep shadows into the cylindrical groove lines of the wood. Vivid warm timber tones against dark crimson cloth. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Nunchaku
**URL:** `/en/weapons/nunchaku`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon still life illustration of a traditional Okinawan nunchaku resting loosely coiled on deep crimson fabric. Each of the two sticks is 30cm long and 3cm in diameter, octagonal cross-section with seven or eight flat bevelled faces — each face only 8-9mm wide, running the full 30cm length, the edges between faces creating crisp ridgelines. The two sticks are joined end-to-end at their top tips by a 15cm length of tightly twisted natural horsehair cord; each cord strand ivory-tan, the whole braid approximately 8mm thick. The total weapon deployed straight would be 75cm. Here the sticks rest at an angle, one slightly overlapping the other toward the lower stake, the cord forming a gentle loop between them. Warm overhead light picks out every octagonal facet edge and the cord fibre texture. The background is vivid crimson. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Kama
**URL:** `/en/weapons/kama`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon bird's-eye illustration of a pair of traditional Okinawan kama sickles resting crossed on a vivid dark crimson surface. Each kama forms a distinct L-shape: a straight 30cm ash-wood handle 3cm in diameter with warm vivid amber-brown grain, the grip end worn smooth and slightly darker; at the top end a curved iron blade 18cm long is fixed, angling forward at nearly a right angle from the handle axis — the blade single-edged with a convex outer spine and a concave inner cutting edge that curves toward the spine at the tip, progressively thicker toward the base where it meets the handle collar (spine depth 8mm at base, narrowing to 3mm at the tip point). The iron is dark charcoal-grey with oxidised patina and visible forge scale and hammer-mark texture on the flat. Each pair piece crosses the other near the blade-handle junction, forming an X that shows both the handle length and the blade curve clearly. Vivid warm raking light from the right creates sharp metallic highlights along the cutting edges and long hard shadows. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Tekko
**URL:** `/en/weapons/tekko`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon close-up illustration of a pair of traditional Okinawan tekko iron knuckle weapons resting on vivid dark crimson velvet cloth. Each tekko is a U-shaped horseshoe iron bar: the arch spans approximately 12cm across the outside and 9cm across the inner opening — wide enough to fit four curled fingers — and the bar is 8mm thick and 15mm wide in cross-section, with chamfered outer edges creating a slight bevel along both long faces. A straight inner grip rod 8cm long bridges the inside gap from one bar end to the other, perpendicular to the arch axis, positioned for the thumb to rest alongside. The two tekko rest with their arches up, facing slightly inward from each other. The dark charcoal-grey oxidised iron surface shows forged hammer-line impressions and slight surface scale. A single directed light from upper left creates a vivid sharp metallic highlight arc along the top of each horseshoe curve. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Tinbe-Rochin
**URL:** `/en/weapons/tinbe-rochin`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon still life illustration of the traditional Okinawan tinbe-rochin weapon pair resting together on vivid dark crimson cloth. The tinbe shield is a round disc 30cm in diameter — slightly smaller than a bicycle wheel — woven from dried rattan cane strips in a tight chevron diagonal basket-weave pattern; the face is vivid warm tan-gold, slightly convex with a dome rise of about 3cm at the centre, edged with a smooth natural cane rim, and a small 4cm raised wooden boss at the centre for the grip. The rochin lies beside it: 45cm total, comprising a 35cm straight oak handle that is 3cm in diameter with vivid dark amber-brown grain, transitioning to a 10cm iron spearhead — the spearhead is leaf-shaped, widest at 3cm about one-third from the base then tapering to a narrow sharp point, with a raised central ridge running its full length, dark charcoal-grey iron with visible forge hammer marks. The contrast between the intricate rattan weave texture of the shield and the smooth polished iron tip is the visual centrepiece. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Weapons — Surujin
**URL:** `/en/weapons/surujin`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon bird's-eye illustration of a traditional Okinawan surujin resting in a wide loose spiral on vivid deep crimson cloth. The weapon is a 2.5m length of tightly twisted natural fibre rope — about 1.5 times as long as a man is tall — each individual cord strand rendered in meticulous oil-paint detail: four twisted strands of vivid ochre and ivory-tan natural fibre, the whole rope approximately 1.5cm in diameter. At each end a rounded oval iron weight is attached: each weight approximately 6cm long and 4cm wide, egg-shaped, dark charcoal-grey iron with a visible horizontal casting seam and a directional specular highlight. The total coil fills nearly the whole frame, the two weights visible at the beginning and end of the spiral at opposite ends of the composition. Vivid overhead warm light picks out the rope fibre texture and the weight glints. No text, no watermark, no modern elements, no blurriness, no distortion.
```

---

## Kata — Index Banner
**URL:** `/en/kata/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A bright cheerful cartoon illustration of a wide horizontal calligraphy scroll partially unrolled on a dark lacquered table. Large flowing kanji characters written in Japanese calligraphy brushwork — bold wet strokes thick at entry and tapered at exit — represent kobudo kata names on vivid dark crimson washi paper. Several round bold red clay seal stamps with kanji impressions are visible at intervals along the scroll. The left end is illuminated by a vivid amber tallow candle flame in a cast-iron holder; the right end fades into deep shadow. Vivid vermillion-red and black color contrast throughout. No Latin text, no watermark, no blurriness, no distortion.
```

---

## Kata — Bō Kata
**URL:** `/en/kata/bo-kata`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of an Okinawan martial artist performing a bō kata technique in a stone-paved dojo courtyard at night. He stands approximately 170cm tall and wears a thick white cotton keikogi gi top and vivid dark indigo hakama wide-leg pleated trousers, bare feet on worn grey flagstones. He is in a dynamic shiko-dachi low wide stance, body tensed and torqued at the waist, wielding a rokushaku-bō — 182cm long, 12cm taller than the practitioner, tapering from 3cm diameter at the centre to 2cm at each dark iron ferrule tip — in a powerful horizontal strike painted as a vivid motion-blur arc. Dark crimson plastered stone walls surround the courtyard, iron wall lanterns flaring vivid amber light. Long dramatic shadows stretch across the flagstones. Vivid saturated colors throughout. No text, no watermark, no modern clothing, no blurriness, no distortion.
```

---

## Kata — Sai Kata
**URL:** `/en/kata/sai-kata`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of an Okinawan martial artist executing a sai kata technique in a stone dojo. He stands approximately 170cm tall and wears a white cotton keikogi gi top, vivid dark indigo hakama wide-leg pleated trousers, and bare feet on dark wooden floorboards. He holds both sai in a crossed defensive trapping guard at chest height — each sai 50cm total: a 15cm tsuka handle wrapped in black cord gripped in the fist, a central monouchi iron prong 35cm long extending forward from the knuckles to a sharp point, octagonal cross-section tapering from 2.5cm wide at the base to a fine tip; two upward-curved yoku tines 10cm long branching outward at 45° from the moto junction; one sai crossed over the other at the wrist. Three-quarter view. His expression is focused and intent. Dramatic vivid torchlight from the right casts a deep shadow behind him against a dark crimson plastered wall, the dark iron sai tines glinting with sharp metallic highlights. Vivid saturated colors. No text, no watermark, no modern clothing, no blurriness, no distortion.
```

---

## Research — Banner
**URL:** `/en/research`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration of a scholar's library interior at night. Shelves of aged Japanese martial arts reference books fill the background — their cloth spines showing kanji characters written in Japanese calligraphy brushwork printed in vivid red and gold — with rolled scrolls tied in red silk cord stacked between them. In the foreground, an open reference volume with dense kanji calligraphy brushwork text on cream pages lies on a dark wooden desk. An ink brush with a split bamboo handle lies diagonally across a page, a rectangular glossy black inkstone with pooled ink sits beside it. A single tallow candle in a cast-iron holder stands at the desk corner, its vivid amber-orange flame the sole light source — a warm cone against deep surrounding shadow. Crimson backdrop. Bright cheerful cartoon style, clean bold outlines, flat cel-shaded colors. No modern objects, no watermark, no blurriness, no distortion.
```

---

## About — Banner
**URL:** `/en/about`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (30 × 12 × 32²; 368,640 px)

**Prompt:**
```
A wide bright cheerful cartoon illustration: overhead view of a research desk at dusk. An open leather-bound journal with handwritten pages shows kanji characters written in Japanese calligraphy brushwork in dark ink on cream paper. A calligraphy scroll is partially unfurled beside it with vivid red clay seal stamps bearing kanji impressions. An ink brush with a bamboo handle, a rectangular black inkstone with pooled ink, and a small brass-rimmed magnifying glass with a convex lens rest on the desk surface. A small oil lamp in a darkened brass holder provides the only light — its vivid amber flame illuminating the journal pages while the desk edges recede into deep shadow. Crimson backdrop with a bright accent strip along one edge. Bright cheerful cartoon style, clean bold outlines, flat cel-shaded colors. No modern objects, no watermark, no blurriness, no distortion.
```
