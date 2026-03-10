# Image Generation Prompts — kobudo.fi (Flux 2 Small)

Prompts are written for **FLUX.1 [schnell] / Flux 2 Small** using natural language sentence descriptions.

## Flux 2 Small Key Settings

- **Steps:** 4 (schnell) or 20–28 (dev)
- **CFG scale:** 1.0 (schnell) or 3.5 (dev)
- **Guidance:** 3.5
- **Resolution:** All dimensions must be **multiples of 64**; total pixels should not exceed ~1,048,576 (native 1024×1024). Adjusted sizes noted per section.
- **Negative prompt:** Not required — Flux ignores it; add exclusions inline if needed.

## Consistent Style

**fully built LEGO world** — the entire scene exists inside the LEGO universe. There is no real-world photography or illustration framing; the floor, walls, sky, water, weapons, and figures are all constructed from identifiable LEGO brick parts. Weapons are described with specific LEGO part types (Technic axles, bar elements, clip pieces, arch bricks, chain links, slope bricks). The site's dark crimson colour is represented through **dark red 2×4 LEGO bricks, dark red baseplates, and dark red wall panels**.

A fully built LEGO world where every element is constructed from LEGO bricks and pieces with visible studs, LEGO minifigures in traditional printed torsos, dramatic directional LEGO torch-element lighting, dark red LEGO brick walls and baseplate, crisp sharp LEGO render, vibrant saturated colors.

---

## Home — Hero Banner
**URL:** `/en/`
**Placeholder size:** 1200 × 440 → **Use 1216 × 448** (19 × 7 × 64; 544,768 px)

**Prompt:**
```
A fully built LEGO world dojo interior — every surface, figure, and object is made entirely from LEGO bricks. The floor is a grid of dark brown 2×4 LEGO tiles. Three dark red 2×4 brick walls rise 6 courses high to a dark brown LEGO beam ceiling. Eight kobudo weapons are mounted symmetrically on the centre wall using 1×2 LEGO clip-tile hangers: a bō staff (twelve connected tan 4L Technic axles end-to-end, capped with 1×1 round tan plates at each tip), a sai pair (each: one 4L dark grey LEGO bar with two 2L bar-with-clip tines angled outward at 45° as yoku), a tonfa pair (each: one 6L brown LEGO round bar with a 1-stud perpendicular 2L bar handle attached via clip), a kama pair (each: one dark grey 1×2 curved slope blade brick on a 2L brown bar handle), and a tekko pair (each: one dark grey 1×4 arch brick). Four LEGO torch elements in dark red 1×2 socket bricks glow at the dojo corners with trans-orange 1×1 flame plates. Two LEGO minifigures in white gi torso prints and black hip pieces stand flanking the wall. A fully built LEGO world, vibrant saturated colors, visible brick studs and anti-stud textures throughout.
```

---

## Home — History Card
**URL:** `/en/history/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world terrain map of the Ryukyu island chain — every element made from LEGO bricks. A dark blue 16×10 stud baseplate is covered in rows of bright blue 1×2 LEGO flat tiles as the ocean surface. Okinawa island rises as a stepped elevated terrain: two layers of tan and sand-yellow 2×4 LEGO bricks stacked to form a plateau, with dark green 1×2 LEGO leaf plates along the rim for vegetation. Three smaller outlying islands are single 2×2 tan round LEGO bricks sitting directly on the blue tile ocean. A compass rose is built from four 1×1 white and red LEGO wedge tiles arranged in the lower-right corner. Three LEGO minifigures in printed Ryukyuan robe torsos stand on the main island plateau. Warm overhead LEGO spotlight tile element. A fully built LEGO world, vibrant saturated colors, visible brick studs throughout.
```

---

## Home — Styles & Lineages Card
**URL:** `/en/styles/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world genealogy tree structure — every element made from LEGO bricks. The scene rests on a dark red 16×10 stud baseplate against a backdrop of five courses of dark red 2×4 LEGO bricks. A central trunk of four stacked 2×2 dark brown LEGO round bricks bifurcates at the top using two 1×2 LEGO bracket plates angled left and right. Each branch then splits again via smaller 1×1 LEGO plate-with-clip connectors. At each of eight terminal branch tips sits a single LEGO minifigure head piece on a 1×1 round stud platform, each head with a distinct printed face representing a kobudo lineage master. Pearl-gold 1×2 flat LEGO tiles form horizontal bridge platforms between branch levels. A LEGO 1×1 trans-orange round flame plate in a dark red LEGO lantern bracket hangs above the tree. A fully built LEGO world, vibrant saturated colors, visible brick studs throughout.
```

---

## Home — Traditional Weapons Card
**URL:** `/en/weapons/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world weapons flat-lay — every element made from LEGO bricks. A dark red 16×10 stud baseplate holds eight kobudo weapons arranged symmetrically: centre top — a bō staff (eight connected tan 4L Technic axles with a 1×1 round tan plate at each tip); second row — a sai pair (each: one 4L dark grey LEGO bar plus two 2L bar-with-clip tines at 45° as yoku) flanking two tonfa (each: one 6L brown LEGO round bar with a 2L perpendicular bar handle); third row — a kama pair (each: dark grey 1×2 curved slope blade on a 2L brown LEGO bar handle) and a nunchaku (two 3L brown LEGO round bars joined by a 4-link LEGO chain); bottom — a tekko pair (each: one dark grey 1×4 LEGO arch brick). A LEGO spotlight tile element shines directly overhead. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Home — Kata Card
**URL:** `/en/kata/`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world scroll scene — every element made from LEGO bricks. On a dark red 16×10 stud baseplate, a horizontal calligraphy scroll is constructed from a row of ten tan 1×4 LEGO smooth flat tiles laid end-to-end, flanked by two dark tan 1×4 LEGO round-column bricks as scroll rollers at each end. Along the tan tile surface, twelve 1×1 round black LEGO plates are arranged in three groups of four to suggest brushstroke characters. A bright red 1×2 LEGO tile with printed diamond pattern serves as a wax seal at the right end. A LEGO minifigure in white gi torso print kneels beside the scroll, one arm clip-holding a 1L black LEGO bar as a brush. A dark red 1×2 LEGO lantern brick with a trans-orange 1×1 flame plate illuminates the scene from the left. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Home — Research Card
**URL:** `/en/research`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world scholar's desk — every element made from LEGO bricks. A dark grey 16×10 stud baseplate supports a desk: a 2×8 dark brown LEGO smooth tile surface resting on four 2×2 dark brown LEGO round column bricks as legs. On the desk surface sits a stack of five 2×3 dark bluish-grey LEGO tile pieces as books, a rolled tan 1×4 LEGO round column as a scroll, a 1×2 dark tan LEGO tile as an inkstone, and a 1L black LEGO bar as a brush. A dark red 1×2 LEGO candle-holder brick with a single trans-orange 1×1 round flame plate stands at the desk corner as the only light source. Three sides of the scene are bounded by stacked dark grey 2×4 LEGO bricks reaching 4 courses high. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Home — About Card
**URL:** `/en/about`
**Placeholder size:** 400 × 250 → **Use 384 × 256** (6 × 4 × 64; 98,304 px)

**Prompt:**
```
A fully built LEGO world research desk — every element made from LEGO bricks. A dark grey 16×10 stud baseplate with a dark brown 2×8 LEGO smooth tile desk surface on four 2×2 round column legs. On the desk: a 2×4 white LEGO open-book tile representing an open journal, a tan 2×4 LEGO flat tile half-unrolled scroll held down by a 2×2 dark red LEGO round tile weight, a LEGO minifigure-scale magnifying glass accessory, a 1×2 dark tan LEGO tile inkstone, and a 1L black LEGO bar brush. A LEGO 1×1 trans-orange flame plate in a dark red 1×2 brick holder glows at the desk's upper-left corner as the only light. Dark grey 2×4 LEGO bricks form tall border walls on three sides. A strip of dark red 1×8 LEGO tiles runs along the front baseplate edge as a crimson accent. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## History — Index Banner
**URL:** `/en/history/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world panoramic Okinawan coastline at dusk — every element made from LEGO bricks. The ocean foreground is a 48×8 stud bright blue LEGO baseplate covered in rows of bright blue 1×2 flat LEGO tiles. A dark red 2×4 brick cliff rises from the baseplate edge in five staggered courses with dark brown 2×2 slope bricks forming the cliff-top edge. On the promontory plateau, a Ryukyu hall is constructed: dark red 2×4 brick outer walls, a double-pitched roof of dark orange 1×4 inverted slope bricks, and 1×1 white LEGO window frame pieces. Two LEGO palm tree elements stand in the foreground. Three LEGO minifigures in printed robe torsos stand at the cliff edge. The sky behind is a stepped gradient of layered 2×2 LEGO flat tiles: dark red at the top, dark orange in the middle, yellow at the horizon. A fully built LEGO world, vibrant saturated colors, visible brick studs throughout.
```

---

## History — Ryukyu Kingdom Era
**URL:** `/en/history/ryukyu-kingdom`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world showing Shuri Castle gate — every element made from LEGO bricks. A symmetrical castle gate dominates the centre: two dark red 2×2 round LEGO column bricks stacked 8 high form the gate pillars, connected by a 1×8 dark red LEGO arch brick as the lintel. A double-pitched dark orange roof sits above: two rows of dark orange 1×4 slope LEGO bricks pitched inward, crowned with dark red 1×2 roof-peak bricks. Dragon-head finials are represented by dark orange 1×1 LEGO claw or flame elements at the four roof corners. The surrounding castle wall is five courses of dark red 2×4 LEGO bricks on a 48×16 stud dark grey LEGO baseplate. Six LEGO minifigures in printed Ryukyuan court robe torsos process through the gate, two holding a 2L LEGO bar with a trans-orange 1×1 flame plate as lanterns. A sky of layered dark red and amber 2×2 LEGO flat tiles rises steeply behind. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## History — Taira Shinken
**URL:** `/en/history/taira-shinken`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world stone dojo courtyard — every element made from LEGO bricks. A 48×16 stud grey 2×2 LEGO textured tile courtyard floor stretches across the scene. The back wall is six courses of dark red 2×4 LEGO bricks with a single LEGO torch element — trans-orange 1×1 flame plate in a dark red 1×2 socket brick — mounted on the left side. One LEGO minifigure stands in a three-quarter pose at centre: grey-hair piece, white gi and dark grey hakama printed torso, dark grey LEGO legs. The minifigure holds a single bō staff — a 12L tan LEGO Technic axle with 1×1 round tan plates capping each tip — upright at its right side, resting on the tile floor. The torch element casts a hard stud-shadow grid across the grey tile floor. Two dark grey 2×4 brick corner pillar stacks flank the back wall. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## History — Kata Transmission
**URL:** `/en/history/kata-transmission`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world dojo teaching scene at night — every element made from LEGO bricks. A 48×16 stud dark brown 2×4 LEGO tile floor with visible row seam lines. The back wall is five courses of dark red 2×4 LEGO bricks. Four LEGO torch elements — each a trans-orange 1×1 flame plate in a dark red 1×2 socket brick — are mounted evenly spaced along the back wall, casting warm amber pools of light reflected in the dark brown tile floor studs. Two LEGO minifigures stand centre-frame: a master figure in dark grey gi torso print stands behind a student figure in white gi print; both figures have their LEGO arms positioned holding a shared bō staff — a 12L tan LEGO Technic axle — the master's hands placed over the student's as if correcting grip. Long hard stud-shadow lines radiate forward along the tile floor from each torch. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Styles — Index Banner
**URL:** `/en/styles/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world genealogy tree diorama — every element made from LEGO bricks. A dark red 48×16 stud backing wall of stacked 2×4 LEGO bricks fills the background. Mounted on its face, the lineage tree is built as: a central dark brown 2×2 LEGO round column rising 6 bricks, splitting left-and-right at the top via 1×2 LEGO bracket-plate connectors into two branch columns, each in turn splitting again via 1×1 clip-stud connectors into four terminal studs. Each terminal stud holds a single LEGO minifigure head piece with a unique printed face representing a different kobudo lineage master. Pearl-gold 1×4 LEGO smooth flat tiles bridge horizontally between each generation level. A LEGO chandelier element — a 2×2 round dark red brick with four downward-pointing 2L LEGO bar arms, each tipped with a trans-orange 1×1 round flame plate — hangs centred above the full tree. Deep dark grey 2×4 LEGO brick overhangs frame the outer left and right edges. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Styles — Matayoshi Kobudo
**URL:** `/en/styles/matayoshi`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world Matayoshi weapon wall — every element made from LEGO bricks. A dark red 48×16 stud wall of 2×4 LEGO bricks holds seven weapons on 1×2 LEGO clip-tile hangers: an eku oar (a 6L tan LEGO bar with a 1×6 flat tan LEGO tile as the broad blade end), a nuntī (an 8L dark grey LEGO Technic bar with a 3-prong LEGO clip-head at the tip), a surujin (a 10-link LEGO steel chain element with 2×2 dark grey LEGO round plate weights at each end), a sai pair (each: one 4L dark grey LEGO bar with two 2L bar-with-clip tines angled outward as yoku), a nunchaku (two 3L brown LEGO round bar cylinders connected by a 4-link LEGO chain), and a tonfa (a 6L brown LEGO round bar with a 1-stud perpendicular 2L handle bar). One LEGO minifigure in printed robe torso stands at the left edge of the wall. A LEGO torch element on the right wall casts raking warm light across the brick surface. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Styles — Taira Line Lineage
**URL:** `/en/styles/taira-line`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world showing a vertical Taira-line family tree mounted on a wall — every element made from LEGO bricks. A dark red 48×16 stud wall of 2×4 LEGO bricks serves as the backing. The genealogy scroll is mounted on the wall face: a vertical column of tan 1×2 LEGO smooth flat tiles twelve rows tall represents the scroll body. Pearl-gold 1×6 LEGO flat tiles stretched horizontally mark each generational level. LEGO Technic 1×1 connector pins link each level as genealogy lines. At each of seven generational nodes, a LEGO minifigure head with a unique printed face sits on a 1×1 LEGO round stud platform. Round dark red 2×2 LEGO tiles occupy the four scroll corners as wax seals. A dark tan 1×4 LEGO round cylinder serves as each scroll roller at top and bottom. A LEGO torch element in a dark red socket mount on the right wall casts warm light. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Styles — Yamane-ryū
**URL:** `/en/styles/yamane-ryu`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world stone courtyard bojutsu scene — every element made from LEGO bricks. A 48×16 stud grey 2×2 LEGO textured tile courtyard baseplate fills the lower two-thirds. One LEGO minifigure in white gi torso print and dark grey legs is posed in a deep wide stance using LEGO hinge-leg elements, both arms fully extended gripping a 12L tan LEGO Technic axle bō staff at a diagonal sweep pose, the staff tip extending near both left and right frame edges implying maximum reach. A LEGO torch element — trans-orange 1×1 flame plate in a dark red socket brick — is mounted at ground level at the right edge, projecting a hard long rectangular stud-shadow grid forward from the minifigure's feet across the grey courtyard tiles toward the viewer. At the back, a low dark red 2×4 brick wall sits in front of a sky backdrop of stepped 2×2 LEGO flat tiles grading from dark red at top through dark orange to yellow at the horizon. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Styles — Other Styles
**URL:** `/en/styles/other-styles`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world radial weapon showcase — every element made from LEGO bricks. A dark red 48×16 stud LEGO baseplate serves as the floor, dominated by a large central 4×4 dark red LEGO round tile as the radial origin. Eight different kobudo-style weapons radiate outward from that centre along straight 1×2 LEGO tile rail guides: a bō staff (eight joined tan 4L LEGO Technic axles), a sai (4L dark grey LEGO bar with two 2L clip-bar tines), a tonfa (6L brown LEGO round bar with 2L perpendicular clip-handle), an eku oar (6L tan LEGO bar with 1×6 flat tan tile blade), a nuntī (8L dark grey LEGO bar with 3-prong clip head), a kama (dark grey 1×2 curved slope on a 2L brown bar), a tekko (dark grey 1×4 arch brick), and a nunchaku (two 3L brown round bars joined by a 4-link LEGO chain). Between each weapon, a 1×2 dark grey LEGO brick divider separates the bays. A LEGO overhead spotlight tile element illuminates from above. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Weapons — Index Banner
**URL:** `/en/weapons/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world complete eight-weapon ceremonial wall — every element made from LEGO bricks. A dark red 48×16 stud wall of stacked 2×4 LEGO bricks holds all eight Taira kobudo weapons on 1×2 LEGO clip-tile hangers across four tiers. Top tier: a bō staff — twelve connected tan 4L LEGO Technic axles with 1×1 round tan plates at each tip. Second tier: a sai pair (each: one 4L dark grey LEGO bar, two 2L bar-with-clip tines at 45° as yoku) and a tonfa pair (each: one 6L brown LEGO round bar with a 1-stud 2L perpendicular clip handle). Third tier: a kama pair (each: dark grey 1×2 LEGO curved slope blade on a 2L brown LEGO bar handle) and a nunchaku (two 3L brown LEGO round bars joined by a 4-link LEGO steel chain). Fourth tier: a tekko pair (each: one dark grey 1×4 LEGO arch brick), a tinbe shield (a 4×4 round LEGO plate in tan with a border of sixteen 1×1 round tan LEGO plates) beside a rochin spear (a 6L dark grey LEGO Technic bar with a 1×1 pointed clip tip), and a surujin (a 10-link LEGO steel chain with 2×2 dark grey LEGO round plate weights at each end). A LEGO torch element on the right wall side-lights all four tiers. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Weapons — Bō (Staff)
**URL:** `/en/weapons/bo`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a bō staff — every element made from LEGO bricks. A single bō staff lies diagonally across a dark red 48×12 stud LEGO baseplate from corner to corner. The staff is built from twelve 4L tan LEGO Technic axle elements connected end-to-end by 1×1 LEGO Technic connector pins, with one 1×1 round tan LEGO plate press-fitted to each end as a tapered tip cap. The staff's junction pins are visible and detailed. A LEGO tile lamp element positioned at the left edge of the baseplate illuminates the staff from a shallow 20-degree angle, casting the axle-to-pin junctions into sharp relief and projecting a grid of long stud-shadow lines diagonally across the dark red baseplate surface. No other objects are present — only the staff and the baseplate. A fully built LEGO world, vibrant saturated colors, visible LEGO Technic axle and stud details throughout.
```

---

## Weapons — Sai
**URL:** `/en/weapons/sai`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a sai pair — every element made from LEGO bricks. Two identical sai rest symmetrically and parallel on a dark red 48×12 stud LEGO baseplate. Each sai is constructed as: one 4L dark grey LEGO smooth bar as the monouchi central shaft; one 1×1 LEGO Technic 2-pin connector piece at the midpoint of the shaft; two 2L dark grey LEGO bar-with-clip pieces inserted into the connector at 45° outward angles as the yoku side tines; and one 1×2 dark grey LEGO smooth tile as the tsuka handle base beneath the shaft. The two sai face opposite orientations forming a mirror pair. A LEGO torch tile element at the upper-left corner creates sharp specular highlights on the smooth dark grey bar surfaces and drops a hard diagonal shadow across the stud-textured baseplate. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Weapons — Tonfa
**URL:** `/en/weapons/tonfa`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a tonfa pair — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate surfaced with a single layer of dark red 1×2 LEGO smooth flat tiles representing cloth. Two tonfa lie diagonally crossed at their centres on this surface. Each tonfa is built as: one 6L brown LEGO round bar brick as the main cylindrical shaft; one 1×1 LEGO bar-with-clip attachment point fixed at the one-third position along the shaft; one 2L brown LEGO bar inserted perpendicular into that clip as the grip handle. The crossed contact point of the two weapons is centred in the frame. A LEGO spotlight tile element directly overhead casts a warm pool of light on the crossed point, pushing deep shadows into the grooves between each brown round-bar stud ring. A fully built LEGO world, vibrant saturated colors, visible LEGO brick-cylinder stud texture throughout.
```

---

## Weapons — Nunchaku
**URL:** `/en/weapons/nunchaku`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a nunchaku — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate surfaced with dark red 1×2 LEGO smooth flat tiles. The nunchaku rests loosely on this surface: two cylindrical sticks, each built from two stacked 2×2 brown LEGO round bricks topped and bottomed with 1×1 brown LEGO round plates as grip-end caps; the two sticks connected at their narrow tops by a 4-link LEGO dark grey steel chain element, which droops naturally downward in a shallow U shape between them. The nunchaku is laid flat with both sticks angled outward and the chain sagging below centre. A LEGO warm-white overhead spotlight tile element picks out every individual chain link and the circular stud-tops of the 2×2 round bricks. A fully built LEGO world, vibrant saturated colors, visible LEGO chain-link and round-brick stud details throughout.
```

---

## Weapons — Kama
**URL:** `/en/weapons/kama`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a kama pair — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate. Two kama lie crossed at their handle ends at the image centre. Each kama is constructed as: one 2L brown LEGO round bar as the handle, ending with a 1×1 round brown LEGO plate as the grip cap; one 1×1 LEGO bar-with-stud connector linking handle to blade; one dark grey 1×2 LEGO curved slope brick as the crescent blade, oriented blade-edge outward. The two kama are mirrored — blades curving opposite directions, handles crossing at the centre. A LEGO torch tile element from the right frame edge casts harsh raking light that catches the top curved face of each dark grey slope blade in bright highlight while casting a hard shadow step across the dark red stud-baseplate surface. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Weapons — Tekko
**URL:** `/en/weapons/tekko`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a tekko pair — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate surfaced with a single layer of dark red 1×2 LEGO smooth flat tiles representing dark cloth. Two tekko rest side by side in the frame centre. Each tekko is built as: one dark grey 1×4 LEGO arch brick forming the horseshoe opening for the knuckles; two 1×1 dark grey LEGO round plates pressed onto each short arm end of the arch brick, suggesting forged knob terminals. The smooth undersides of the arch bricks contrast with the studded flat-tile cloth surface beneath them. A single LEGO spotlight tile element at the upper-left casts a sharp diagonal highlight along the upper curve of each arch brick and a hard-edged cast shadow across the tile cloth surface below and to the right. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Weapons — Tinbe-Rochin
**URL:** `/en/weapons/tinbe-rochin`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of the tinbe-rochin weapon pair — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate covered in dark red 1×2 flat LEGO tiles. The tinbe shield is constructed as: a 4×4 round LEGO plate in tan as the base disc; a border ring of sixteen 1×1 round tan LEGO plates arranged in two alternating offset rows around the disc perimeter to represent vine weave; a single 1×1 round dark tan LEGO plate at the disc centre as the boss. The rochin spear lies beside the shield: a 6L dark grey LEGO Technic smooth bar with a 1×1 dark grey pointed LEGO clip element pressed onto the tip end as the spearhead. A warm LEGO overhead tile lamp element directly above emphasises the textural contrast — the densely studded round-plate weave of the tan shield versus the smooth untextured surface of the grey Technic spear bar. A fully built LEGO world, vibrant saturated colors, visible stud and clip details throughout.
```

---

## Weapons — Surujin
**URL:** `/en/weapons/surujin`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world close study of a surujin — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate covered in dark red 1×2 LEGO smooth flat tiles representing cloth. The surujin is coiled in a wide open spiral spread across the full baseplate: a 12-link LEGO dark grey steel chain element with one flat 2×2 dark grey LEGO round tile pressed onto each end as the weighted knob. The chain spiral is laid flat with each individual link separated and clearly visible, the two weighted ends positioned at opposite sides of the spiral. A LEGO overhead spotlight tile element directly above casts a sharp downward light that picks out every chain link's rounded top and drops a short circular shadow beneath each link onto the dark red tile surface below. A fully built LEGO world, vibrant saturated colors, visible LEGO chain-link mechanical detail throughout.
```

---

## Kata — Index Banner
**URL:** `/en/kata/`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world wide kata scroll diorama — every element made from LEGO bricks. A dark red 48×12 stud LEGO baseplate holds a horizontal scroll construction spanning the full width: twenty-four tan 1×2 LEGO smooth flat tiles in a single end-to-end row form the scroll surface. At each end, a dark tan 1×4 LEGO round column brick serves as the scroll roller. Along the tan tile surface, groups of black 1×1 LEGO round plates are arranged in character-like stroke patterns at five evenly spaced intervals suggesting Japanese calligraphy kata names. Between each group, a bright red 1×2 LEGO tile printed with a diamond pattern serves as a wax seal stamp. The left roller end is lit by a dark red 1×2 LEGO candle brick with a trans-orange 1×1 flame plate. The right end is shadowed by a stacked dark grey 2×2 LEGO brick overhang. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Kata — Bō Kata
**URL:** `/en/kata/bo-kata`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world bō kata action scene — every element made from LEGO bricks. A 48×12 stud grey 2×2 LEGO textured tile courtyard baseplate occupies the lower two-thirds. One LEGO minifigure in white gi torso print, dark grey legs, and a black hair element is posed in a maximum-reach striking stance using LEGO hinge-leg and hinge-arm elements: both arms extended forward-and-back gripping a 12L tan LEGO Technic axle bō staff at a bold horizontal diagonal sweep, the staff tip reaching past both frame edges to imply powerful centrifugal motion. The figure's wide-split low stance emphasises the force of the swing. Three dark red 2×4 LEGO brick wall courses line the back, each with a LEGO torch element — trans-orange 1×1 flame plate in a dark red 1×2 socket brick — throwing amber light forward. A sky of layered dark red and amber 2×2 LEGO flat tiles fills the upper frame. A fully built LEGO world, vibrant saturated colors, visible studs and Technic axle-pin details throughout.
```

---

## Kata — Sai Kata
**URL:** `/en/kata/sai-kata`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world sai kata action scene — every element made from LEGO bricks. A 48×12 stud grey 2×2 LEGO textured tile courtyard floor. One LEGO minifigure in white gi torso print and dark grey legs stands in a wide horse stance, three-quarter view. Both arms are positioned at chest height in a crossed defensive guard: in each hand, a sai weapon — each built from a 4L dark grey LEGO smooth bar with two 2L dark grey bar-with-clip tines angled outward as yoku — is held with the tines facing forward in a crossed trapping block, one sai overlapping the other at the wrist. Dark red 2×4 LEGO brick walls rise four courses behind the figure. A single LEGO torch element — trans-orange 1×1 flame plate in a dark red 1×2 socket brick — is wall-mounted at the right, casting a hard stud-grid shadow of the crossed sai and the minifigure forward across the grey tile floor. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## Research — Banner
**URL:** `/en/research`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world scholar's library at night — every element made from LEGO bricks. A dark grey 48×12 stud LEGO baseplate serves as the floor. The back wall is five courses of dark grey 2×4 LEGO bricks divided into three bays by dark brown 1×2 LEGO pillar bricks. Each bay holds two rows of dark bluish-grey 2×3 LEGO tile pieces as books with smooth face-sides turned outward as spine-faces. In the foreground a dark brown 2×8 LEGO smooth tile desk surface rests on four 2×2 dark brown LEGO round column bricks. On the desk: one 2×4 white LEGO open-book tile with a printed page face, one 1L black LEGO bar as a brush, and a 1×2 dark tan LEGO tile as an inkstone. A dark red 1×2 LEGO candle-holder brick with a single trans-orange 1×1 round flame plate stands at the desk corner as the sole light source, its warm amber glow picking out the book tile faces. Stacked dark grey 2×4 LEGO brick overhangs frame the outer edges in deep shadow. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```

---

## About — Banner
**URL:** `/en/about`
**Placeholder size:** 960 × 400 → **Use 960 × 384** (15 × 6 × 64; 368,640 px)

**Prompt:**
```
A fully built LEGO world overhead research desk scene — every element made from LEGO bricks, viewed from directly above. A dark grey 48×12 stud LEGO baseplate. A dark brown 2×12 LEGO smooth tile desktop surface is centred on the baseplate, resting on four 2×2 dark brown LEGO round column bricks as legs. On the desk surface: a 2×4 white LEGO open-book tile lies flat at the centre with a 1×1 LEGO printed page tile on its face; a tan 2×4 LEGO flat tile scroll is partially unrolled beside it, one end held flat by a 2×2 dark red LEGO round tile weight; a LEGO minifigure-scale magnifying glass accessory piece rests at one corner; a 1×2 dark tan LEGO tile inkstone and a 1L black LEGO bar brush lie beside it. A LEGO 1×1 trans-orange flame plate in a dark red 1×2 holder glows at the upper-left desk corner as the sole light. Dark grey 2×4 LEGO brick wall borders frame the baseplate on all four sides. A strip of dark red 1×8 LEGO flat tiles runs along the front border as a crimson accent. A fully built LEGO world, vibrant saturated colors, visible studs throughout.
```
