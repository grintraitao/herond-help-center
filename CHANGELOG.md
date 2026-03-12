# Herond Help Center - Changelog

## 1. Planning & Setup

- Lên kế hoạch migrate Help Center từ HelpScout sang Docusaurus (static site)
- Cài đặt Visual Studio Code làm IDE chính
- Cài đặt Claude Code (Anthropic CLI) tích hợp trong VSCode để hỗ trợ coding
- Khởi tạo project Docusaurus v3.9.2 với docs-only mode (`routeBasePath: '/'`)

## 2. Migrate nội dung từ HelpScout

- Backup dữ liệu từ HelpScout Docs API v1 (articles, categories, images)
- Chuyển đổi articles sang Markdown (`.md`) với frontmatter (title, slug, description, sidebar_label, sidebar_position)
- Tổ chức thư mục theo 6 categories:
  - `docs/desktop-browser/` (12 articles)
  - `docs/herond-wallet/` (10 articles)
  - `docs/account-services/` (8 articles)
  - `docs/herond-ecosystem/` (5 articles)
  - `docs/herond-shield/` (11 articles)
  - `docs/personalization/` (5 articles)
- Download & copy images từ HelpScout vào `static/img/`

## 3. Xây dựng Homepage custom

- Tạo `src/pages/index.js` với 4 sections:
  - **HeroSection** — tiêu đề "How can we help you?" + search bar + quick tags
  - **CategoriesSection** — 6 category cards với icon, mô tả, số articles
  - **PopularArticlesSection** — danh sách bài viết phổ biến
  - **CtaBanner** — liên hệ support qua email
- Tạo `src/pages/index.module.css` — styling cho homepage (hero gradient, cards, grid layout, dark mode)

## 4. Cập nhật Category URLs theo HelpScout pattern

- Gọi HelpScout API để lấy category numbers:
  - Desktop Browser = 4
  - Herond Wallet = 10
  - Account & Services = 11
  - Herond Ecosystem = 8
  - Herond Shield = 9
  - Personalization = 6
- Cập nhật 6 file `_category_.json` — thêm slug dạng `/category/{number}-{slug}`
- Cập nhật `docusaurus.config.js` — footer links dùng numbered slugs
- Cập nhật `src/pages/index.js` — CATEGORIES array và quick tags dùng numbered slugs

## 5. Cập nhật Social Links

- Cập nhật footer Community trong `docusaurus.config.js`:
  - Facebook: https://www.facebook.com/HerondBrowser
  - X (Twitter): https://x.com/HerondBrowser
  - Discord: https://discord.com/invite/Herond-Browser
  - Telegram: https://t.me/herond_browser

## 6. Áp dụng Herond Brand Colors

- Color palette:
  - Primary: BLUE SKY `#3373F6`
  - Accent: OZONE `#00b3ED`, TEAL `#00CCC0`, VIOLET `#6633FF`, RED `#E83669`
  - Light bg: OFF WHITE `#F5F5F7`
  - Dark bg: MIDNIGHT `#17234B`, COSMIC BLUE `#0F1A35`
- Cập nhật `src/css/custom.css` — Infima CSS variables (light & dark mode)
- Cập nhật `src/pages/index.module.css` — hero gradient, CTA button, hover colors, dark mode
- Cập nhật `src/pages/index.js` — mỗi category card dùng brand color riêng

## 7. Cập nhật Logo & Favicon

- Copy logo từ Brand Kit (`Glyphs/Herond Glyph.svg`) -> `static/img/logo.svg`
- Copy favicon từ Brand Kit -> `static/img/favicon.svg` + `static/img/favicon.png`
- Cập nhật `docusaurus.config.js` — favicon trỏ sang `img/favicon.svg`

## 8. Dynamic Popular Articles (thay thế hardcode)

- Thêm frontmatter `popular: true` và `popular_order: N` vào 10 bài viết:
  1. How to install Herond Browser? (order 1)
  2. How to Create Your Wallet on Desktop (order 2)
  3. WebRTC IP Handling Policy (order 3)
  4. How do I set Herond Browser my default browser? (order 4)
  5. What is a Herond Account? (order 5)
  6. How do I check if a site's connection is secure? (order 6)
  7. Sign in & sync in Herond (order 7)
  8. How do I customize themes? (order 8)
  9. Will I be installing other applications along with Herond Browser? (order 9)
  10. How do I browse & add an extension? (order 10)
- Tạo custom plugin `plugins/popular-articles.js`:
  - Scan docs, đọc frontmatter bằng `gray-matter`
  - Sort theo `popular_order`
  - Expose data qua `setGlobalData`
- Cập nhật `src/pages/index.js` — dùng `usePluginData('popular-articles')` thay vì mảng hardcode

## 9. Search

- Sử dụng `@easyops-cn/docusaurus-search-local` v0.55.1 (offline, local search)
- Lần đầu bị lỗi `Cannot find module '@theme/SearchPage'` do thêm vào `plugins` thay vì `themes`
- Fix: thêm vào `themes` array trong `docusaurus.config.js` với config `hashed: true`, `docsRouteBasePath: '/'`
- Search bar tự động xuất hiện trên navbar, hoạt động offline không gửi data ra ngoài

## 10. Code Refactoring

- **sidebars.js** — Xóa boilerplate comments và example config thừa, chỉ giữ auto-generated sidebar config
- **src/pages/index.js** — Thêm field `quickTag` vào `CATEGORIES`, derive `QUICK_TAGS` bằng `.filter()` thay vì hardcode mảng riêng với slug trùng lặp
- **src/pages/index.module.css** — Gộp CSS chung của 3 class `.heroCircle1/2/3` vào base class `.heroCircle` sử dụng CSS Modules `composes`
- **docusaurus.config.js** — Extract footer category links ra `HELP_CENTER_CATEGORIES` constant + generate bằng `.map()`. Thêm `markdown.hooks.onBrokenMarkdownLinks: 'warn'` (Docusaurus v4 syntax)
- **helpscout-backup/fetch-helpscout.js** — Chuyển hardcoded API key sang `process.env.HELPSCOUT_API_KEY` với guard clause

## Trạng thái hiện tại

- Site build thành công, không lỗi, không warning
- Homepage với dynamic popular articles hoạt động
- Brand colors, logo, favicon, social links đã cập nhật
- Category URLs match HelpScout pattern
- Code đã được refactor, giảm duplication
- Search functionality hoạt động (offline local search)
