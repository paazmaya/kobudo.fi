import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// https://docusaurus.io/docs/api/docusaurus-config
const config: Config = {
  // Title for your website
  // https://docusaurus.io/docs/api/docusaurus-config#title
  title: "Ryukyu Kobudo",

  // Tagline for your website
  // https://docusaurus.io/docs/api/docusaurus-config#tagline
  tagline: "Okinawan Weapon Arts — History, Styles & Kata",

  // URL for your website
  // https://docusaurus.io/docs/api/docusaurus-config#url
  url: "https://kobudo.fi",

  // Custom fields available at build time
  // https://docusaurus.io/docs/api/docusaurus-config#customFields
  customFields: {
    buildDate: new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  },

  // Base URL pathname for your site
  // https://docusaurus.io/docs/api/docusaurus-config#baseUrl
  baseUrl: "/",

  // Future flags for experimental features
  // https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    // Opt-in to Docusaurus v4 behavior
    v4: true,
    // Build performance optimizations
    // https://docusaurus.io/docs/api/docusaurus-config#faster
    faster: true,
  },

  // Browser storage type for theme and other state
  // https://docusaurus.io/docs/api/docusaurus-config#storage
  storage: {
    type: "localStorage",
    namespace: true,
  },

  // Path to your site favicon
  // https://docusaurus.io/docs/api/docusaurus-config#favicon
  favicon: "favicon.ico",

  // Global Docusaurus Markdown config
  // https://docusaurus.io/docs/api/docusaurus-config#markdown
  markdown: {},

  // Behavior for broken internal links
  // https://docusaurus.io/docs/api/docusaurus-config#onBrokenLinks
  onBrokenLinks: "throw",

  // Internationalization configuration
  // https://docusaurus.io/docs/i18n/tutorial#configure-your-site
  i18n: {
    defaultLocale: "fi",
    locales: ["fi", "en"],
    localeConfigs: {
      fi: { label: "Suomi", htmlLang: "fi" },
      en: { label: "English", htmlLang: "en" },
    },
  },

  // Custom tags to be injected into HTML <head>
  // https://docusaurus.io/docs/api/docusaurus-config#headTags
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://www.clarity.ms",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "dns-prefetch",
        href: "https://www.clarity.ms",
      },
    },
    // Optimized theme detection to reduce forced reflow
    {
      tagName: "script",
      attributes: { type: "text/javascript" },
      innerHTML: `(function() {
        // Read theme from localStorage only once
        var savedTheme = null;
        try {
          savedTheme = window.localStorage.getItem("theme-5af");
        } catch (e) {}
        
        // Read from URL if present
        var urlTheme = null;
        try {
          urlTheme = new URLSearchParams(window.location.search).get("docusaurus-theme");
        } catch (e) {}
        
        // Determine theme: URL param > localStorage > system preference
        var theme = urlTheme || savedTheme;
        if (!theme) {
          theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        
        // Set theme attribute immediately (before DOM is ready)
        document.documentElement.setAttribute("data-theme", theme);
        // Defer non-critical theme-choice attribute to reduce forced reflow
        if (window.requestIdleCallback) {
          requestIdleCallback(function() {
            document.documentElement.setAttribute("data-theme-choice", urlTheme || savedTheme || "system");
          });
        } else {
          setTimeout(function() {
            document.documentElement.setAttribute("data-theme-choice", urlTheme || savedTheme || "system");
          }, 1);
        }
      })();`,
    },
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
  // Presets are bundles of plugins and themes
  // https://docusaurus.io/docs/presets
  presets: [
    [
      // Classic preset combines docs, blog, pages, and theme
      // https://docusaurus.io/docs/api/plugins/@docusaurus/preset-classic
      "classic",
      {
        docs: {
          // Path to sidebar configuration
          // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
          sidebarPath: "./sidebars.ts",
          // Serve docs at root instead of /docs/
          routeBasePath: "/",
        },
        // Disable blog
        blog: false,
        theme: {
          // Path to custom CSS
          // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
          customCss: "./src/css/custom.css",
        },
        // Sitemap configuration for SEO
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap
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

  // Custom plugins for additional functionality
  // https://docusaurus.io/docs/api/plugin-methods
  plugins: [
    // Tailwind CSS integration plugin
    async function tailwindPlugin(_context: unknown, _options: unknown) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions: { plugins: unknown[] }) {
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          return postcssOptions;
        },
      };
    },
    // Local search plugin
    // https://github.com/easyops-cn/docusaurus-search-local
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

  // Theme configuration for classic theme
  // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
  themeConfig: {
    // Dark/light mode configuration
    // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic#colorMode
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    // Navigation bar configuration
    // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic#navbar
    navbar: {
      title: "Ryukyu Kobudo",
      logo: {
        alt: "", // Leave empty since its decoration
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
    // Footer configuration
    // https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic#footer-1
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
              label: "Lähdekoodi GitHubissa",
              href: "https://github.com/paazmaya/kobudo.fi",
            },
            {
              label: "Lisenssi: CC BY 4.0",
              href: "https://creativecommons.org/licenses/by/4.0/",
            },
            {
              label: "Karateopettaja Jukka Paasonen",
              href: "https://karatejukka.fi",
            },
          ],
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
  // scripts: [{ src: "/js/redirect.js", async: false }],
};
export default config;
