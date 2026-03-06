// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Herond Help Center',
  tagline: 'Defend. Discover. Decentralize.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://help.herond.org',
  baseUrl: '/',

  organizationName: 'nicenicenice-org',
  projectName: 'herond-help-center',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    './plugins/popular-articles',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/herond-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Herond Help Center',
        logo: {
          alt: 'Herond Browser Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://herond.org/download',
            label: 'Download',
            position: 'right',
          },
          {
            href: 'https://herond.org',
            label: 'herond.org',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help Center',
            items: [
              {
                label: 'Desktop Browser',
                to: '/category/4-desktop-browser',
              },
              {
                label: 'Herond Wallet',
                to: '/category/10-herond-wallet',
              },
              {
                label: 'Account & Services',
                to: '/category/11-account-services',
              },
              {
                label: 'Herond Ecosystem',
                to: '/category/8-herond-ecosystem',
              },
              {
                label: 'Herond Shield',
                to: '/category/9-herond-shield',
              },
              {
                label: 'Personalization',
                to: '/category/6-personalization',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/HerondBrowser',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/HerondBrowser',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Herond-Browser',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/herond_browser',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://herond.org/privacy-policy',
              },
              {
                label: 'Terms of Service',
                href: 'https://herond.org/terms',
              },
              {
                label: 'herond.org',
                href: 'https://herond.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Herond Browser. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
