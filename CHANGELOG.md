# Herond Help Center — Changelog

## 1. Planning & Setup

- Plan migration from HelpScout to Docusaurus (static site)
- Set up Visual Studio Code as primary IDE
- Install Claude Code (Anthropic CLI) integrated in VSCode for coding assistance
- Initialize Docusaurus v3.9.2 project with docs-only mode (`routeBasePath: '/'`)

## 2. Content Migration

- Back up data from HelpScout Docs API v1 (articles, categories, images)
- Convert articles to Markdown (`.md`) with frontmatter (title, slug, description, sidebar_label, sidebar_position)
- Organize into 6 category folders:
  - `docs/desktop-browser/` (12 articles)
  - `docs/herond-wallet/` (10 articles)
  - `docs/account-services/` (8 articles)
  - `docs/herond-ecosystem/` (5 articles)
  - `docs/herond-shield/` (11 articles)
  - `docs/personalization/` (5 articles)
- Download and copy images to `static/img/`

## 3. Custom Homepage

- Create `src/pages/index.js` with 4 sections:
  - **HeroSection** — title "How can we help you?" + tagline
  - **CategoriesSection** — 6 category cards with Lucide icons, descriptions, article counts
  - **PopularArticlesSection** — dynamic list of popular articles
  - **CtaFooter** — contact support via email
- Create `src/pages/index.module.css` — homepage styling (hero glow, cards, grid layout, dark/light mode)

## 4. Category URLs

- Map categories to numbered slugs matching original HelpScout pattern:
  - Desktop Browser = 4, Herond Wallet = 10, Account & Services = 11, Herond Ecosystem = 8, Herond Shield = 9, Personalization = 6
- Update 6 `_category_.json` files with slugs like `/category/{number}-{slug}`
- Update `docusaurus.config.js` footer links and `src/pages/index.js` CATEGORIES array

## 5. Social Links

- Update footer Community section in `docusaurus.config.js`:
  - Facebook: https://www.facebook.com/HerondBrowser
  - X (Twitter): https://x.com/HerondBrowser
  - Discord: https://discord.com/invite/Herond-Browser
  - Telegram: https://t.me/herond_browser

## 6. Brand Colors & Typography

- Color palette:
  - Primary: Blue Sky `#3373F6` / Ozone `#00b3ED` (dark mode)
  - Accents: Teal `#00CCC0`, Violet `#6b33fa`, Pink `#ff4070`
  - Light bg: Off White `#F5F5F7` / Dark bg: Midnight `#17234B`, Cosmic Blue `#0F1A35`
- Font: Plus Jakarta Sans (Google Fonts)
- Update `src/css/custom.css` — Infima CSS variables (light & dark mode)
- Update homepage styles — hero glow, card hover effects, dark-first design

## 7. Logo & Favicon

- Copy logo from Brand Kit (`Glyphs/Herond Glyph.svg`) → `static/img/brand/logo.svg`
- Copy favicon from Brand Kit → `static/img/brand/favicon.svg` + `favicon.png`
- Update `docusaurus.config.js` — point to `img/brand/` paths

## 8. Dynamic Popular Articles

- Add frontmatter `popular: true` and `popular_order: N` to 10 selected articles
- Create custom plugin `plugins/popular-articles.js`:
  - Scans docs, reads frontmatter with `gray-matter`
  - Sorts by `popular_order`
  - Exposes data via `setGlobalData`
- Update homepage to use `usePluginData('popular-articles')` instead of hardcoded array

## 9. Search

- Add `@easyops-cn/docusaurus-search-local` v0.55.1 (offline local search)
- Configure in `themes` array with `hashed: true`, `docsRouteBasePath: '/'`
- Search bar appears in navbar, works fully offline

## 10. Code Refactoring

- **sidebars.js** — Remove boilerplate comments, keep only auto-generated sidebar config
- **src/pages/index.js** — Derive `QUICK_TAGS` via `.filter()` instead of duplicate hardcoded array
- **src/pages/index.module.css** — Consolidate shared hero circle styles using CSS Modules `composes`
- **docusaurus.config.js** — Extract footer category links to `HELP_CENTER_CATEGORIES` constant

## 11. Homepage Redesign

- Redesign inspired by Linear/GitHub: clean, compact, dark-first aesthetic
- **Hero**: compact title with aurora glow effect (dual radial gradients), tagline "Defend · Discover · Decentralize"
- **Category Cards**: 3×2 grid with Lucide React icons, accent colors, animated arrow on hover
- **Popular Articles**: minimalist 2-column link list
- **CTA**: polite single-line text + outlined button
- **Sidebar**: clean separation between categories (uppercase headers with accent border) and articles (indented with guide line)
- **Footer**: 4-column layout (Help Center, Community, Resources, Legal) with updated legal URLs
- **Navbar**: "herond.org" → "Home", styled Download button, hide external link icons
- **404 page**: custom page with aurora gradient "404" text and "This page has flown away" tagline

## 12. Image Reorganization

- Move all 50 images from flat `static/img/` to category-based subfolders:
  - `static/img/brand/` — favicon, logo, social card (9 files)
  - `static/img/desktop-browser/` (8 images)
  - `static/img/herond-wallet/` (16 images)
  - `static/img/account-services/` (4 images)
  - `static/img/herond-shield/` (14 images)
  - `static/img/herond-ecosystem/` (3 images)
  - `static/img/personalization/` (5 images)
- Update all markdown image references to new paths
- Update `docusaurus.config.js` brand asset paths

## Current Status

- Site builds successfully with no errors
- Homepage with dynamic popular articles working
- Brand colors, logo, favicon, social links configured
- Lucide React icons for category cards
- Offline local search functional
- Images organized by category for easy maintenance
- Deployed via GitHub Actions to GitHub Pages
