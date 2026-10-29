# kobudo.fi

> Bilingual research resource for Ryukyu kobudo weapon-based martial arts — history, styles, weapons, and kata lineages.

[![statichost.eu status](https://builder.statichost.eu/kobudo-fi/status.svg)](https://builder.statichost.eu/kobudo-fi/)
[![CI](https://github.com/paazmaya/kobudo.fi/actions/workflows/ci.yml/badge.svg)](https://github.com/paazmaya/kobudo.fi/actions/workflows/ci.yml)

**kobudo.fi** is a static documentation website built with [Docusaurus 3](https://docusaurus.io/), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS 4](https://tailwindcss.com/). It documents Okinawan and Ryukyuan weapon traditions (such as the Taira Shinken lineage, Matayoshi Kobudo, and Yamane-ryū) with verifiable primary and secondary sources.

---

## Architecture & Content Structure

The site is bilingual with **Finnish (`fi`)** as the default locale (served at `/`) and **English (`en`)** served at `/en/`.

```text
├── docs/                                # Primary documentation in Finnish (MDX)
│   ├── history/                         # History of Ryukyu Kingdom, Yabiku Moden, Taira Shinken
│   ├── styles/                          # Lineages (Taira line, students, Matayoshi, Yamane-ryū)
│   ├── weapons/                         # Weapon guides (bō, sai, tonfa, nunchaku, kama, etc.)
│   ├── kata/                            # Cross-style kata comparisons and name lineages
│   ├── research.mdx                     # Annotated bibliography of Japanese reference works
│   └── about.mdx                        # Site purpose, scope, and technical overview
├── i18n/
│   ├── en/                              # English translations
│   │   ├── code.json                    # UI string translations
│   │   ├── docusaurus-theme-classic/    # Navbar and footer label translations
│   │   └── docusaurus-plugin-content-docs/current/ # English mirror of docs/ (MDX)
│   └── fi/                              # Finnish UI string translations
├── src/
│   ├── components/                      # Reusable React components (OptimizedImage, OptimizedDocBanner)
│   ├── css/custom.css                   # WCAG 2.2 AAA design tokens and styles
│   ├── pages/index.tsx                  # Bilingual landing page
│   ├── theme/                           # Swizzled Docusaurus theme overrides (Search, Navbar, SEO, MDX)
│   └── utils/localePaths.ts             # Single source of truth for FI ↔ EN URL slug mappings
├── static/
│   ├── _headers                         # HTTP security and caching headers for statichost.eu
│   ├── _redirects                       # 301 redirect rules for mixed-locale URLs
│   ├── img/                             # Optimized PNG, WebP, and 1200x630 social preview images (Git LFS)
│   └── js/redirect.js                   # Optional client-side root locale detection
├── scripts/                             # Image conversion, icon generation, CSS & external link checks
└── tests/                               # Playwright end-to-end, accessibility snapshot, and link tests
```

Root-level markdown files (`RESEARCH.md`, `TAIRA.md`, `TAIRA_STUDENTS.md`, `YAMANE_RYU.md`, `WEAPONS.md`, `KATA_LINEAGE.md`, `IMAGE_GEN_*.md`, etc.) are working research notes and AI image generation prompt references used to author the structured `.mdx` pages.

---

## Prerequisites & Setup

- **Node.js**: `>= 22.0`
- **Git LFS**: Binary image assets under `static/img/` are tracked with Git LFS.

```sh
# 1. Pull Git LFS image assets
git lfs pull

# 2. Install dependencies
npm ci

# 3. Install Playwright browsers (required for running end-to-end tests)
npx playwright install chromium webkit
```

---

## Development Scripts

| Script                         | Description                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------- |
| `npm start`                    | Start local development server on `http://localhost:9900` (default locale only)       |
| `npm run build`                | Build production static site for both `fi` and `en` locales into `build/`             |
| `npm run serve`                | Serve the production build locally on `http://localhost:9901` (both locales)          |
| `npm test`                     | Run Playwright end-to-end, visual, link, and i18n alignment tests against port `9901` |
| `npm run lint`                 | Run `oxlint` across the codebase                                                      |
| `npm run format`               | Format code and MDX files with `oxfmt`                                                |
| `npm run typecheck`            | Run TypeScript compiler (`tsc`) type checking                                         |
| `npm run check-external-links` | Check HTTP status of external URLs across `.md` and `.mdx` files                      |

### Utility Scripts (`scripts/`)

- `node scripts/check-css-classes.mjs` — Compares CSS classes defined in `src/css/custom.css` against classes used in `src/` and `build/`.
- `node scripts/convert-images.mjs` — Converts source PNGs from `generated-images/` (configured via `images.json`) into compressed 1x/2x PNGs, WebPs, and `1200x630` social JPEGs (requires `sharp`).
- `node scripts/generate-icons.mjs <source.png>` — Generates favicon, Apple touch icon, PWA icons, and multi-resolution `favicon.ico` from a square source PNG (requires `sharp`).

---

## Adding or Translating Documentation Pages

1. Create or update the Finnish `.mdx` file in `docs/` and its corresponding English mirror in `i18n/en/docusaurus-plugin-content-docs/current/`.
2. When linking to a section heading in a Finnish `.mdx` file using an English anchor ID (or vice versa), add an explicit heading ID comment on the target heading:
   ```mdx
   ## Opetussuunnitelma {/* #curriculum */}
   ```
3. Register the Finnish and English `slug` pair in `src/utils/localePaths.ts` (`FI_TO_EN`), and add the corresponding `301!` redirect rules in `static/_redirects`.
4. Verify with `npm run build && npm test`.

---

## Domain, Web, and Email Hosting

- **Domain**: Traficom (`.fi` registry)
- **DNS**: [deSEC.io](https://desec.io/) (`ns1.desec.io`, `ns2.desec.org`) with DNSSEC enabled — [desec-stack source](https://github.com/desec-io/desec-stack/)
- **Static Hosting**: [statichost.eu](https://www.statichost.eu/) — routing and redirects configured in `static/_redirects` ([routing docs](https://www.statichost.eu/docs/routing/))
- **Email**: [Migadu.com](https://www.migadu.com/) (Micro plan)

## License

Content is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE).
