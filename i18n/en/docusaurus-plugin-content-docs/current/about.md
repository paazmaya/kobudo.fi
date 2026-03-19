---
sidebar_position: 6
title: About This Site
slug: /about
description: About this site, its purpose, scope, authorship, and how to contribute corrections or additional sources.
social_image: "/img/social/banner-about-desk-1200x630.jpg"
---

export const buildDate = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });

# About This Site

<img
src="/img/banner-about-desk.png"
alt="Abstract research and documentation concept"
width={960}
height={384}
loading="lazy"
style={{width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem'}}
/>

**kobudo.fi** is a research resource documenting the weapon-based martial arts of the Ryukyu Islands. It covers their history, lineages, tools and kata, with an emphasis on verifiable sources and cross-style comparison.

## Purpose

The site exists to:

- Provide a structured reference for practitioners and researchers studying Ryukyu kobudo
- Map kata name families across different organizations, showing shared roots and divergent branches
- Present historical context from the Ryukyu Kingdom era through modern transmission
- Catalog Japanese-language primary and secondary sources for further research

## Scope

The primary focus is **weapons-based Ryukyuan martial arts** (古武道 / 古武術), particularly the Taira Shinken lineage (Ryūkyū Kobujutsu Hozon Shinkōkai), Matayoshi Kobudo, and Yamane-ryū. The site does not attempt to cover empty-hand Okinawan karate except where it directly intersects with weapon transmission.

The site is intentionally extensible: each section is designed as a starting point with room for sub-sections, detailed kata analyses, teacher biographies and source comparisons to be added over time.

## Language

Content is currently in **English**. Finnish-language versions of all pages are planned and will be added progressively. The site URL is `kobudo.fi` (a Finnish-registered domain), and the default language for visitors without an expressed preference is Finnish.

## Contributing

If you notice an error in kata names, lineage details, or bibliographic information, or if you have sources that would improve the coverage, contributions are welcome.

[Please raise an issue or pull request in the project repository](https://github.com/paazmaya/kobudo.fi/). All contributions should cite sources; unsourced claims will not be added to the content pages.

## Technical

The site is built with [Docusaurus](https://docusaurus.io/) and deployed as a static site hosted at [kobudo.fi](https://kobudo.fi). Content is authored in Markdown and [MDX](https://mdxjs.com/). The UI framework is [React](https://react.dev/), with styling powered by [Tailwind CSS](https://tailwindcss.com/). Build tooling uses [TypeScript](https://www.typescriptlang.org/) on [Node.js](https://nodejs.org/).

Full-text search is provided locally via [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local), requiring no external search service. The design targets [WCAG 2.2 Level AAA](https://www.w3.org/TR/WCAG22/) accessibility compliance throughout.

Selected site images are generated locally with [ComfyUI](https://github.com/comfyanonymous/ComfyUI) using the z-image-turbo model workflow. Running generation locally keeps prompt iteration fast, makes outputs reproducible, and avoids third-party image API dependencies for visual assets.

This site was last built on **{buildDate}**.
