# TODO - Herond Help Center

## Popular Articles dựa trên analytics
- Hiện tại: admin chọn thủ công qua frontmatter (`popular: true`, `popular_order`)
- Mục tiêu: dựa trên pageviews thật từ người dùng
- Các bước:
  1. Setup Google Analytics (plugin `@docusaurus/plugin-google-gtag`, cần GA4 Measurement ID)
  2. Theo dõi data 1-2 tuần để có pageviews thực tế
  3. Cập nhật frontmatter `popular` dựa trên top pages trong GA dashboard
  4. (Nâng cao) Tự động hóa bằng GA Data API + script fetch top pages

## Custom domain
- Khi sẵn sàng chuyển sang `help.herond.org`:
  1. Thêm CNAME record trỏ về `grintraitao.github.io`
  2. Đổi `url` thành `https://help.herond.org` và `baseUrl` thành `/` trong `docusaurus.config.js`
  3. Set custom domain trong GitHub Pages settings
