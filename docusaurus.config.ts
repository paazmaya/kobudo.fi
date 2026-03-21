import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { FI_TO_EN, EN_TO_FI } from "./src/utils/localePaths";

const config: Config = {
  title: "Ryukyu Kobudo",
  tagline: "Okinawan Weapon Arts — History, Styles & Kata",
  url: "https://kobudo.fi",
  baseUrl: "/",
  future: {
    v4: true,
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true,
    },
    experimental_storage: {
      type: "localStorage",
      namespace: true,
    },
  },
  favicon: "favicon.ico",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en"],
    localeConfigs: {
      fi: { label: "Suomi", htmlLang: "fi" },
      en: { label: "English", htmlLang: "en" },
    },
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: { rel: "manifest", href: "/site.webmanifest" },
    },
    {
      tagName: "meta",
      attributes: { name: "msapplication-TileColor", content: "#5a0000" },
    },
    {
      tagName: "meta",
      attributes: {
        name: "msapplication-TileImage",
        content: "/img/mstile-150x150.png",
      },
    },
    {
      tagName: "meta",
      attributes: { name: "theme-color", content: "#5a0000" },
    },
    {
      tagName: "script",
      attributes: { type: "text/javascript" },
      innerHTML: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vvat8zr3wa");`,
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "monthly",
          priority: 0.6,
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              const url = item.url;
              // Homepage
              if (url === "https://kobudo.fi/" || url === "https://kobudo.fi/en/") {
                return { ...item, priority: 1.0 };
              }
              // Section index pages (end with / and have one path segment after host)
              const path = url
                .replace("https://kobudo.fi/", "")
                .replace("https://kobudo.fi/en/", "");
              const segments = path.replace(/\/$/, "").split("/");
              if (segments.length === 1 && path.endsWith("/")) {
                return { ...item, priority: 0.8 };
              }
              // Standalone top-level pages (no trailing slash, no sub-path)
              if (segments.length === 1 && !path.endsWith("/")) {
                return { ...item, priority: 0.8 };
              }
              return item;
            });
          },
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function tailwindPlugin(_context: unknown, _options: unknown) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions: { plugins: unknown[] }) {
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          return postcssOptions;
        },
      };
    },
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["fi", "en"],
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: "Ryukyu Kobudo",
      logo: {
        alt: "Ryukyu Kobudo",
        src: "img/navbar-logo.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "doc",
          docId: "history/index",
          label: "Historia",
          position: "left",
        },
        {
          type: "doc",
          docId: "styles/index",
          label: "Tyylit",
          position: "left",
        },
        {
          type: "doc",
          docId: "weapons/index",
          label: "Aseet",
          position: "left",
        },
        { type: "doc", docId: "kata/index", label: "Kata", position: "left" },
        {
          type: "doc",
          docId: "research",
          label: "Tutkimus",
          position: "left",
          className: "kb-nav-optional",
        },
        { type: "doc", docId: "about", label: "Tietoja", position: "right" },
        { type: "localeDropdown", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Sisältö",
          items: [
            { label: "Historia", to: "/historia/" },
            { label: "Tyylit", to: "/tyylit/" },
            { label: "Aseet", to: "/aseet/" },
            { label: "Kata", to: "/kata/" },
          ],
        },
        {
          title: "Sivusto",
          items: [
            { label: "Tutkimus", to: "/tutkimus" },
            { label: "Tietoja", to: "/tietoja" },
          ],
        },
        {
          title: "Yhteisö",
          items: [
            {
              label: "Source code at GitHub",
              href: "https://github.com/paazmaya/kobudo.fi",
            },
            {
              label: "Lisenssi: CC BY 4.0",
              href: "https://creativecommons.org/licenses/by/4.0/",
            },
            {
              label: "Karate Teacher Jukka Paasonen",
              href: "https://karatejukka.fi",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ryukyu Kobudo Research`,
    },
  } satisfies Preset.ThemeConfig,
  // scripts: [{ src: "/js/redirect.js", async: false }],
};
export default config;
