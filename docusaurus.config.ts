import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ryukyu Kobudo',
  tagline: 'Research of Okinawan Weapon Arts',
  url: 'https://kobudo.fi',
  baseUrl: '/',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
    localeConfigs: {
      en: { label: 'English' },
      fi: { label: 'Suomi' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serves docs from the root
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ryukyu Kobudo',
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'History'},
        {to: '/styles', label: 'Styles', position: 'left'},
        {to: '/weapons', label: 'Weapons', position: 'left'},
        {to: '/research', label: 'Research', position: 'left'},
        {to: '/about', label: 'About', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Ryukyu Kobudo Research.`,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [{src: '/js/redirect.js', async: false}],
};
export default config;