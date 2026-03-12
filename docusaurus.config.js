// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const HELP_CENTER_CATEGORIES = [
  {label: 'Desktop Browser', slug: '4-desktop-browser'},
  {label: 'Herond Wallet', slug: '10-herond-wallet'},
  {label: 'Account & Services', slug: '11-account-services'},
  {label: 'Herond Ecosystem', slug: '8-herond-ecosystem'},
  {label: 'Herond Shield', slug: '9-herond-shield'},
  {label: 'Personalization', slug: '6-personalization'},
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Herond Help Center',
  tagline: 'Defend. Discover. Decentralize.',
  favicon: 'img/brand/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://herondlabs.github.io',
  baseUrl: '/herond-help-center/',

  organizationName: 'herondlabs',
  projectName: 'herond-help-center',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/brand/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Herond Help Center',
        logo: {
          alt: 'Herond Browser Logo',
          src: 'img/brand/logo.svg',
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
            label: 'Home',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Help Center',
            items: HELP_CENTER_CATEGORIES.map(({label, slug}) => ({
              label,
              to: `/category/${slug}`,
            })),
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
            title: 'Resources',
            items: [
              {
                label: 'Download Herond',
                href: 'https://herond.org/download',
              },
              {
                label: 'herond.org',
                href: 'https://herond.org',
              },
              {
                label: 'Contact Support',
                href: 'mailto:support@herond.org',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                href: 'https://herond.org/terms-of-use',
              },
              {
                label: 'Website Privacy Policy',
                href: 'https://herond.org/website-privacy-policy',
              },
              {
                label: 'Browser Privacy Policy',
                href: 'https://herond.org/herond-browser-privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright \u00A9 ${new Date().getFullYear()} Herond Browser.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
