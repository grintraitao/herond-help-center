const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CATEGORY_MAP = {
  'desktop-browser': 'Desktop Browser',
  'herond-wallet': 'Herond Wallet',
  'account-services': 'Account & Services',
  'herond-ecosystem': 'Herond Ecosystem',
  'herond-shield': 'Herond Shield',
  'personalization': 'Personalization',
};

module.exports = function popularArticlesPlugin(context) {
  return {
    name: 'popular-articles',
    async contentLoaded({actions}) {
      const {setGlobalData} = actions;
      const docsDir = path.join(context.siteDir, 'docs');
      const articles = [];

      function scanDir(dir, categoryFolder) {
        const entries = fs.readdirSync(dir, {withFileTypes: true});
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            scanDir(fullPath, categoryFolder || entry.name);
          } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const {data} = matter(content);
            if (data.popular) {
              articles.push({
                title: data.title,
                path: data.slug,
                category: CATEGORY_MAP[categoryFolder] || categoryFolder,
                popular_order: data.popular_order || 999,
              });
            }
          }
        }
      }

      scanDir(docsDir, null);
      articles.sort((a, b) => a.popular_order - b.popular_order);
      setGlobalData({articles});
    },
  };
};
