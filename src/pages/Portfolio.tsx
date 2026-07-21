import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

const items = [
  { icon: '\uD83D\uDCBB', title: 'Innovative Tech Solutions', desc: 'Investment in a cutting-edge AI startup revolutionizing data analytics for financial markets. This venture aims to provide unparalleled insights and predictive capabilities.' },
  { icon: '\uD83C\uDF15', title: 'Sustainable Energy Projects', desc: 'Funding for large-scale solar and wind energy farms, contributing to a greener future and robust returns in the renewable sector.' },
  { icon: '\uD83C\uDFE0', title: 'Urban Real Estate Development', desc: 'Strategic investments in modern, sustainable urban housing and commercial complexes, focusing on smart city integration and community growth.' },
  { icon: '\uD83D\uDC85', title: 'Advanced Healthcare Solutions', desc: 'Support for biotech companies developing groundbreaking medical treatments and innovative healthcare delivery systems to improve global well-being.' },
  { icon: '\uD83D\uDCB8', title: 'Disruptive FinTech Platforms', desc: 'Investing in next-generation financial technology platforms that enhance accessibility, security, and efficiency in personal and corporate finance.' },
  { icon: '\uD83C\uDF3F', title: 'Modern Agricultural Ventures', desc: 'Capitalizing on sustainable agriculture techniques and food technology to ensure food security and optimize resource utilization.' },
];

export default function Portfolio() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header id="main-header" className="site-header">
        <div className="container header-container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo-container">
            <Link to="/">
              <img src={logoSrc} alt="Genvest Ventures Pvt. Ltd. Logo" id="site-logo" style={{ maxHeight: 65, width: 'auto' }} />
            </Link>
          </div>
          <nav id="main-nav" className="site-navigation">
            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: 30 }}>
              {['/', '/about', '/services', '/market-data', '/insights', '/contact', '/ratemyscrip', '/portfolio'].map((to) => (
                <li key={to}>
                  <Link to={to} style={{ color: to === '/portfolio' ? '#0f766e' : '#1e293b', fontWeight: 500, fontSize: '0.95rem', padding: '8px 12px', borderRadius: 8 }}>
                    {to === '/' ? 'Home' : to.slice(1).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 20px' }}>
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{
            backgroundColor: '#ffffff', padding: 40, borderRadius: 8, boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '100%', maxWidth: 960, textAlign: 'center', boxSizing: 'border-box',
          }}>
            <h2 style={{ color: '#1e3d30', fontSize: 32, marginBottom: 20, fontWeight: 'bold' }}>Our Investment Portfolio</h2>
            <p style={{ color: '#555', fontSize: 18, lineHeight: 1.6, marginBottom: 40, maxWidth: 700, margin: '0 auto 40px' }}>
              At Genvest, we pride ourselves on a diverse and impactful investment portfolio that drives growth and fosters innovation. Explore some of our key ventures and success stories below.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30, textAlign: 'left' }}>
              {items.map((item) => (
                <div key={item.title} style={{
                  backgroundColor: '#f9f9f9', padding: 25, borderRadius: 8, boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', cursor: 'pointer',
                }}>
                  <span style={{ fontSize: 48, color: '#2b5f4c', marginBottom: 15, display: 'block' }}>{item.icon}</span>
                  <h3 style={{ color: '#1e3d30', fontSize: 22, marginBottom: 10, fontWeight: 'bold' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6, marginBottom: 15 }}>{item.desc}</p>
                  <a href="#" className="learn-more" style={{ color: '#2b5f4c', fontWeight: 'bold', textDecoration: 'none', marginTop: 'auto' }}>Learn More &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-padding" style={{ backgroundColor: '#115e59', color: '#cbd5e1', padding: '80px 0 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 60 }}>
            <div>
              <img src={logoSrc} alt="Genvest Ventures Logo" style={{ maxHeight: 60, marginBottom: 20, filter: 'brightness(0) invert(1)' }} />
              <p style={{ marginBottom: '1.5em', color: 'inherit' }}>जेनभेष्ट भेन्चर्स प्रा.लि</p>
              <p style={{ color: 'inherit' }}>Turning Ambition into Impact. Your trusted partner in financial growth and stability.</p>
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: 24 }}>Quick Links</h3>
              <ul style={{ listStyle: 'none' }}>
                {['Home', 'About Us', 'Services', 'Market Data', 'Insights', 'Contact', 'FAQ'].map((l) => (
                  <li key={l} style={{ marginBottom: 12 }}><Link to={`/${l.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: '#cbd5e1' }}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: 24 }}>Contact Us</h3>
              <p style={{ color: 'inherit' }}>Kathmandu, Nepal</p>
              <p style={{ color: 'inherit' }}>Email: <a href="mailto:info@genvest.com.np" style={{ color: '#cbd5e1' }}>info@genvest.com.np</a></p>
              <p style={{ color: 'inherit' }}>Phone: <a href="tel:+97712345678" style={{ color: '#cbd5e1' }}>+977-1-2345678</a></p>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 0', textAlign: 'center', fontSize: '0.875rem' }}>
            <p style={{ color: 'inherit' }}>&copy; {new Date().getFullYear()} Genvest Ventures Pvt. Ltd. All rights reserved.</p>
            <p style={{ color: 'inherit' }}><a href="/privacy-policy" style={{ color: '#cbd5e1' }}>Privacy Policy</a> | <a href="/terms-of-use" style={{ color: '#cbd5e1' }}>Terms of Use</a> | <a href="/disclosures" style={{ color: '#cbd5e1' }}>Disclosures</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
