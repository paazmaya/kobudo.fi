import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  // This is the main sidebar for your Kobudo documentation
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'history', // References docs/history.md
      label: 'History',
    },
    {
      type: 'category',
      label: 'Styles & Lineages',
      link: {
        type: 'doc',
        id: 'styles', // The "Styles" page acts as the category landing page
      },
      collapsed: false,
      items: [
        // You can add sub-pages here later, e.g., 'styles/taira-line'
      ],
    },
    {
      type: 'category',
      label: 'Traditional Weapons',
      link: {
        type: 'doc',
        id: 'weapons',
      },
      collapsed: false,
      items: [
        // Future sub-sections like 'weapons/bo', 'weapons/sai'
      ],
    },
    {
      type: 'doc',
      id: 'research', // References docs/research.md
      label: 'Research & Bibliography',
    },
    {
      type: 'doc',
      id: 'about', // References docs/about.md
      label: 'About',
    },
  ],
};

export default sidebars;