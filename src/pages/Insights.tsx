import { Link } from 'react-router-dom';

const articles = [
  { title: 'Understanding Market Volatility in 2025', excerpt: 'A brief look at current market trends and how to navigate them...', meta: 'Published: May 10, 2025', link: '/insight/market-volatility' },
  { title: 'Key Strategies for Effective Retirement Planning', excerpt: 'Essential tips to ensure your retirement savings are on track for your future...', meta: 'Published: May 01, 2025', link: '/insight/long-term-investing' },
  { title: 'The Power of Diversification', excerpt: 'Exploring how a diversified portfolio can enhance your investment strategy...', meta: 'Published: April 25, 2025', link: '/insight/diversification-power' },
  { title: 'Navigating Market Volatility: A Guide for Investors', excerpt: 'Market volatility is an inherent part of investing. Understanding its nature and having a sound strategy can help...', meta: 'Published: May 15, 2025', link: '/insight/market-volatility' },
];

export default function Insights() {
  return (
    <>
      <section id="insights-hero" className="hero-section text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h1 className="hero-title" style={{ color: '#115e59', marginBottom: 24, lineHeight: 1.1, fontSize: '3rem' }}>Insights & News</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#334155', marginBottom: 40, lineHeight: 1.6 }}>Stay informed with our latest articles, market analysis, and financial insights.</p>
        </div>
      </section>

      <section id="insights-list" className="section-padding" style={{ padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {articles.map((a) => (
              <article key={a.title} className="card">
                <div className="card-content">
                  <h3 className="insight-title" style={{ fontSize: '1.25rem', marginBottom: 12, color: '#115e59' }}>{a.title}</h3>
                  <p className="insight-excerpt">{a.excerpt}</p>
                  <span className="insight-meta" style={{ display: 'block', fontSize: '0.875rem', color: '#64748b', marginBottom: 16, fontWeight: 500 }}>{a.meta}</span>
                  <Link to={a.link} className="btn btn-text" style={{ marginTop: 'auto' }}>Read More &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
