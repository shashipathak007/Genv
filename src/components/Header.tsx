import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/market-data', label: 'Market Data' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/ratemyscrip', label: 'Rate My Scrip' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > lastScroll && top > 80) setHidden(true);
      else setHidden(false);
      setLastScroll(top <= 0 ? 0 : top);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <header
      className={`site-header ${hidden ? 'header-auto-hidden' : ''}`}
    >
      <div className="container header-container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div className="logo-container">
          <Link to="/">
            <img src={logoSrc} alt="Genvest Ventures Pvt. Ltd. Logo" id="site-logo" />
          </Link>
        </div>
        <nav id="main-nav" className={`site-navigation ${navOpen ? 'active' : ''}`}
          style={{
            display: navOpen ? 'block' : undefined,
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: 30 }}>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={isActive(l.to) ? 'active' : ''}
                  style={{
                    color: isActive(l.to) ? '#0f766e' : '#1e293b',
                    fontWeight: 500, fontSize: '0.95rem',
                    padding: '8px 12px', borderRadius: 8,
                    position: 'relative',
                  }}
                  onClick={() => setNavOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="user-area">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
        <button
          id="mobile-nav-toggle"
          aria-label="Open navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
          style={{
            display: 'none', fontSize: 24, background: 'none',
            border: 'none', color: '#115e59', cursor: 'pointer',
          }}
          className="md:hidden! block"
        >
          {navOpen ? '\u00D7' : '\u2630'}
        </button>
      </div>
    </header>
  );
}
