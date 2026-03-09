import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Ryukyu Kobudo',
  tagline: 'Okinawan Weapon Arts — History, Styles & Kata',
  url: 'https://kobudo.fi',
  baseUrl: '/',
  future: {
    v4: true,
  },
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'en'],
    localeConfigs: {
      fi: { label: 'Suomi', htmlLang: 'fi' },
      en: { label: 'English', htmlLang: 'en' },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    async function tailwindPlugin(_context: unknown, _options: unknown) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions: {plugins: unknown[]}) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: 'Ryukyu Kobudo',
      hideOnScroll: false,
      items: [
        {to: '/history/', label: 'History', position: 'left'},
        {to: '/styles/', label: 'Styles', position: 'left'},
        {to: '/weapons/', label: 'Weapons', position: 'left'},
        {to: '/kata/', label: 'Kata', position: 'left'},
        {to: '/research', label: 'Research', position: 'left'},
        {to: '/about', label: 'About', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {label: 'History', to: '/history/'},
            {label: 'Styles', to: '/styles/'},
            {label: 'Weapons', to: '/weapons/'},
            {label: 'Kata', to: '/kata/'},
          ],
        },
        {
          title: 'Site',
          items: [
            {label: 'Research', to: '/research'},
            {label: 'About', to: '/about'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ryukyu Kobudo Research`,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [{src: '/js/redirect.js', async: false}],
};
export default config;