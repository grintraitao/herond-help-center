import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '48px 24px',
  },
  code: {
    fontSize: '80px',
    fontWeight: 800,
    letterSpacing: '-4px',
    background: 'linear-gradient(135deg, #3373F6 0%, #6b33fa 50%, #ff4070 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px',
    lineHeight: 1,
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    margin: '0 0 12px',
  },
  subtitle: {
    fontSize: '16px',
    color: 'var(--ifm-color-emphasis-500)',
    margin: '0 0 32px',
    maxWidth: '420px',
    lineHeight: 1.6,
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    background: 'var(--ifm-color-primary)',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
};

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div style={styles.container}>
        <div style={styles.code}>404</div>
        <h1 style={styles.title}>This page has flown away</h1>
        <p style={styles.subtitle}>
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <Link to="/" style={styles.button}>
          Back to Help Center
        </Link>
      </div>
    </Layout>
  );
}
