# Herond Help Center

Official help center and documentation for [Herond Browser](https://herond.org) — built with [Docusaurus v3](https://docusaurus.io/).

**Live site:** [herondlabs.github.io/herond-help-center](https://herondlabs.github.io/herond-help-center/)

## Features

- 51 articles across 6 categories (Desktop Browser, Herond Wallet, Account & Services, Herond Shield, Herond Ecosystem, Personalization)
- Offline local search (no external API calls)
- Dark-first design with light mode support
- Custom homepage with category cards and popular articles
- Custom 404 page
- Automated deployment via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Starts a dev server at `http://localhost:3000/herond-help-center/`. Changes are hot-reloaded.

### Build

```bash
npm run build
```

Generates static files in the `build/` directory.

### Serve Production Build

```bash
npm run serve
```

## Project Structure

```
herond-help-center/
├── docs/                    # Markdown articles
│   ├── desktop-browser/     # 12 articles
│   ├── herond-wallet/       # 10 articles
│   ├── account-services/    # 8 articles
│   ├── herond-shield/       # 11 articles
│   ├── herond-ecosystem/    # 5 articles
│   └── personalization/     # 5 articles
├── src/
│   ├── css/custom.css       # Global theme (brand colors, sidebar, footer)
│   └── pages/
│       ├── index.js         # Homepage
│       ├── index.module.css # Homepage styles
│       └── 404.js           # Custom 404 page
├── static/img/              # Images organized by category
│   ├── brand/               # Logo, favicon, social card
│   ├── desktop-browser/
│   ├── herond-wallet/
│   ├── account-services/
│   ├── herond-shield/
│   ├── herond-ecosystem/
│   └── personalization/
├── plugins/
│   └── popular-articles.js  # Dynamic popular articles from frontmatter
├── docusaurus.config.js     # Site configuration
└── sidebars.js              # Auto-generated sidebar
```

## Adding Content

### New Article

1. Create a `.md` file in the appropriate `docs/<category>/` folder
2. Add frontmatter:

```markdown
---
title: Article Title
sidebar_label: Short Label
sidebar_position: 1
description: Brief description for SEO
---

Article content here...
```

### Mark as Popular

Add `popular: true` and `popular_order: N` to the frontmatter. Articles appear on the homepage sorted by `popular_order`.

### Adding Images

Place images in `static/img/<category>/` and reference them in markdown:

```markdown
![Alt text](/img/<category>/filename.png)
```

## Deployment

Deployment is automated via GitHub Actions. Every push to `master` triggers a build and deploy to GitHub Pages.

## Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Blue Sky | `#3373F6` | Primary (light mode) |
| Ozone | `#00b3ED` | Primary (dark mode) |
| Violet | `#6b33fa` | Accent |
| Pink | `#ff4070` | Accent |
| Teal | `#00CCC0` | Accent |
| Midnight | `#17234B` | Dark surface |
| Cosmic Blue | `#0F1A35` | Dark background |

## License

Copyright Herond Browser. All rights reserved.
