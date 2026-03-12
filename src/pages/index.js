import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const CATEGORIES = [
  {
    name: 'Desktop Browser',
    count: 12,
    icon: '\uD83D\uDDA5\uFE0F',
    color: '#3373F6',
    desc: 'Installation, features & browsing guides',
    slug: '4-desktop-browser',
    quickTag: 'Install',
  },
  {
    name: 'Herond Wallet',
    count: 10,
    icon: '\uD83D\uDC5B',
    color: '#6633FF',
    desc: 'Create, manage & secure your wallet',
    slug: '10-herond-wallet',
    quickTag: 'Wallet',
  },
  {
    name: 'Account & Services',
    count: 8,
    icon: '\uD83D\uDC64',
    color: '#00b3ED',
    desc: 'Sign in, sync & account settings',
    slug: '11-account-services',
    quickTag: 'Sync',
  },
  {
    name: 'Herond Ecosystem',
    count: 5,
    icon: '\uD83C\uDF10',
    color: '#00CCC0',
    desc: 'Explore the Herond ecosystem',
    slug: '8-herond-ecosystem',
  },
  {
    name: 'Herond Shield',
    count: 11,
    icon: '\uD83D\uDEE1\uFE0F',
    color: '#E83669',
    desc: 'Privacy, ad-blocking & security',
    slug: '9-herond-shield',
    quickTag: 'Privacy',
  },
  {
    name: 'Personalization',
    count: 5,
    icon: '\uD83C\uDFA8',
    color: '#EC4899',
    desc: 'Themes, extensions & customization',
    slug: '6-personalization',
    quickTag: 'Extensions',
  },
];

const QUICK_TAGS = CATEGORIES.filter((cat) => cat.quickTag);

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroCircle1} />
      <div className={styles.heroCircle2} />
      <div className={styles.heroCircle3} />

      <Heading as="h1" className={styles.heroTitle}>
        How can we help you?
      </Heading>
      <p className={styles.heroSubtitle}>
        Browse our knowledge base or use the search bar above
      </p>

      <div className={styles.quickTags}>
        {QUICK_TAGS.map((cat) => (
          <Link
            key={cat.slug}
            className={styles.quickTag}
            to={`/category/${cat.slug}`}
          >
            {cat.quickTag}
          </Link>
        ))}
      </div>
    </header>
  );
}

function CategoriesSection() {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.sectionHeader}>Browse by Category</h2>
      <div className={styles.categoriesGrid}>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            className={styles.categoryCard}
            to={`/category/${cat.slug}`}
          >
            <div
              className={styles.categoryAccentBar}
              style={{background: cat.color}}
            />
            <div className={styles.categoryCardInner}>
              <div
                className={styles.categoryIcon}
                style={{background: `${cat.color}15`}}
              >
                {cat.icon}
              </div>
              <div>
                <div className={styles.categoryName}>{cat.name}</div>
                <div className={styles.categoryDesc}>{cat.desc}</div>
                <div className={styles.categoryCount} style={{color: cat.color}}>
                  {cat.count} articles &rarr;
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function PopularArticlesSection() {
  const {articles} = usePluginData('popular-articles');

  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.sectionHeader}>Most Popular Articles</h2>
      <div className={styles.articlesGrid}>
        {articles.map((article, i) => (
          <Link key={i} className={styles.articleCard} to={article.path}>
            <div className={styles.articleIcon}>&#128196;</div>
            <div className={styles.articleContent}>
              <div className={styles.articleTitle}>{article.title}</div>
              <div className={styles.articleCategory}>{article.category}</div>
            </div>
            {i < 2 && <span className={styles.popularBadge}>Popular</span>}
          </Link>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <div className={styles.ctaBanner}>
      <div>
        <h3 className={styles.ctaTitle}>
          Can&apos;t find what you&apos;re looking for?
        </h3>
        <p className={styles.ctaSubtitle}>
          Our support team is ready to help you with any questions
        </p>
      </div>
      <a href="mailto:support@herond.org" className={styles.ctaButton}>
        Contact Support
      </a>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
    >
      <HeroSection />
      <div className={styles.mainContent}>
        <CategoriesSection />
        <PopularArticlesSection />
        <CtaBanner />
      </div>
    </Layout>
  );
}
