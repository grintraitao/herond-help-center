import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {Monitor, Wallet, UserCircle, Globe, ShieldCheck, Palette} from 'lucide-react';
import styles from './index.module.css';

const CATEGORIES = [
  {
    name: 'Desktop Browser',
    count: 12,
    Icon: Monitor,
    accent: '#3373F6',
    desc: 'Installation, features & browsing guides',
    slug: '4-desktop-browser',
  },
  {
    name: 'Herond Wallet',
    count: 10,
    Icon: Wallet,
    accent: '#6b33fa',
    desc: 'Create, manage & secure your wallet',
    slug: '10-herond-wallet',
  },
  {
    name: 'Account & Services',
    count: 8,
    Icon: UserCircle,
    accent: '#00b3ED',
    desc: 'Sign in, sync & account settings',
    slug: '11-account-services',
  },
  {
    name: 'Herond Shield',
    count: 11,
    Icon: ShieldCheck,
    accent: '#ff4070',
    desc: 'Privacy, ad-blocking & security',
    slug: '9-herond-shield',
  },
  {
    name: 'Herond Ecosystem',
    count: 5,
    Icon: Globe,
    accent: '#00CCC0',
    desc: 'Explore the Herond ecosystem',
    slug: '8-herond-ecosystem',
  },
  {
    name: 'Personalization',
    count: 5,
    Icon: Palette,
    accent: '#EC4899',
    desc: 'Themes, extensions & customization',
    slug: '6-personalization',
  },
];

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroTitle}>
          How can we help you?
        </Heading>
        <p className={styles.heroTagline}>
          Defend &middot; Discover &middot; Decentralize
        </p>
      </div>
    </header>
  );
}

function CategoriesSection() {
  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesGrid}>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            className={styles.card}
            to={`/category/${cat.slug}`}
          >
            <div className={styles.cardTop}>
              <span
                className={styles.cardIcon}
                style={{background: `${cat.accent}14`, color: cat.accent}}
              >
                <cat.Icon size={24} strokeWidth={1.8} />
              </span>
              <span className={styles.cardCount} style={{color: cat.accent}}>
                {cat.count}
              </span>
            </div>
            <div className={styles.cardName}>{cat.name}</div>
            <div className={styles.cardDesc}>{cat.desc}</div>
            <span className={styles.cardArrow} style={{color: cat.accent}}>
              &rarr;
            </span>
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
      <h2 className={styles.sectionHeader}>Popular Articles</h2>
      <div className={styles.articlesGrid}>
        {articles.map((article, i) => (
          <Link key={i} className={styles.articleCard} to={article.path}>
            <span className={styles.articleTitle}>{article.title}</span>
            <span className={styles.articleMeta}>{article.category}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <div className={styles.ctaFooter}>
      <p className={styles.ctaText}>
        Can&apos;t find what you&apos;re looking for? Our team is here to help.
      </p>
      <a href="mailto:support@herond.org" className={styles.ctaLink}>
        Contact Support
      </a>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HeroSection />
      <div className={styles.mainContent}>
        <CategoriesSection />
        <PopularArticlesSection />
        <CtaFooter />
      </div>
    </Layout>
  );
}
