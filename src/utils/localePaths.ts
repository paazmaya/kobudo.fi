/**
 * Single source of truth for locale-specific URL slug translations.
 *
 * Finnish is the default locale (served at /). English is served at /en/.
 * This map drives:
 *   - client-side redirects after a locale switch  (docusaurus.config.ts)
 *   - locale-switcher dropdown URLs                (LocaleDropdownNavbarItem)
 *   - footer links in the English locale           (Footer/LinkItem)
 *   - homepage card/hero links in the English locale (pages/index.tsx)
 *   - 404 page navigation links                   (pages/404.tsx)
 *
 * Identical slugs (e.g. /kata/) are included so every consumer can do a
 * simple lookup without special-casing same-slug pages.
 */

/** Finnish slug → English slug */
export const FI_TO_EN: Record<string, string> = {
  "/historia/": "/history/",
  "/historia/kamppailulajit-historiallisessa-kontekstissa": "/history/martial-arts-context",
  "/historia/kata-siirto": "/history/kata-transmission",
  "/historia/ryukyu-kuningaskunta": "/history/ryukyu-kingdom",
  "/historia/taira-shinken": "/history/taira-shinken",
  "/historia/yabiku-moden": "/history/yabiku-moden",
  "/tyylit/": "/styles/",
  "/tyylit/matayoshi": "/styles/matayoshi",
  "/tyylit/muut-tyylit": "/styles/other-styles",
  "/tyylit/taira-linja": "/styles/taira-line",
  "/tyylit/tairan-oppilaat": "/styles/taira-students",
  "/tyylit/yamane-ryu": "/styles/yamane-ryu",
  "/aseet/": "/weapons/",
  "/aseet/bo": "/weapons/bo",
  "/aseet/eku": "/weapons/eku",
  "/aseet/huolto": "/weapons/maintenance",
  "/aseet/kama": "/weapons/kama",
  "/aseet/kuwa": "/weapons/kuwa",
  "/aseet/nunchaku": "/weapons/nunchaku",
  "/aseet/nunti": "/weapons/nunti",
  "/aseet/sai": "/weapons/sai",
  "/aseet/surujin": "/weapons/surujin",
  "/aseet/tekko": "/weapons/tekko",
  "/aseet/tinbe-rochin": "/weapons/tinbe-rochin",
  "/aseet/tonfa": "/weapons/tonfa",
  "/tutkimus": "/research",
  "/tietoja": "/about",
  "/kata/": "/kata/",
  "/kata/bo-kata": "/kata/bo-kata",
  "/kata/name-lineage": "/kata/name-lineage",
  "/kata/sai-kata": "/kata/sai-kata",
};

/** English slug → Finnish slug (derived from FI_TO_EN) */
export const EN_TO_FI: Record<string, string> = Object.fromEntries(
  Object.entries(FI_TO_EN).map(([fi, en]) => [en, fi]),
);
