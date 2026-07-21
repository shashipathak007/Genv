import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="container text-center" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h1 className="hero-title" style={{ color: 'white', fontSize: '3.5rem', marginBottom: 20 }}>Comprehensive Financial Solutions</h1>
          <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: 700, margin: '0 auto' }}>Tailored strategies designed to protect, grow, and manage your wealth across generations.</p>
        </div>
      </section>

      <section className="services-detail-section section-padding" style={{ padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          {/* Portfolio Management */}
          <div id="portfolio-management" className="service-feature-row">
            <div className="service-feature-content">
              <div className="service-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: 20, color: '#115e59' }}>Portfolio Management</h2>
              <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: 30 }}>Our strategic portfolio management goes beyond simple asset allocation. We build robust, customized investment portfolios designed to weather market volatility while targeting your specific return objectives. By continuously monitoring and rebalancing your assets, we ensure your investments stay aligned with your evolving goals and risk tolerance.</p>
              <ul className="service-benefits">
                {['Dynamic Asset Allocation', 'Risk-Adjusted Return Optimization', 'Regular Portfolio Rebalancing'].map((b) => (
                  <li key={b}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-feature-image">
              <div className="glass-card">
                <div className="chart-mockup">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`bar bar-${i}`} style={{ flex: 1, background: 'linear-gradient(to top, #0f766e, #14b8a6)', borderRadius: '8px 8px 0 0', height: `${[40, 60, 30, 80, 100][i - 1]}%`, animation: `growBar 1.5s ease-out ${i * 0.1}s forwards`, transformOrigin: 'bottom', opacity: 0 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Financial Planning */}
          <div id="financial-planning" className="service-feature-row reverse">
            <div className="service-feature-content">
              <div className="service-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: 20, color: '#115e59' }}>Financial Planning</h2>
              <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: 30 }}>We provide a holistic view of your financial landscape. Our financial planning services encompass everything from retirement and education planning to tax optimization and estate strategies. We work closely with you to create a comprehensive roadmap that turns your life ambitions into actionable financial steps.</p>
              <ul className="service-benefits">
                {['Retirement Strategy', 'Tax Minimization Planning', 'Wealth Transfer & Estate Planning'].map((b) => (
                  <li key={b}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-feature-image">
              <div className="glass-card circular">
                <svg className="decorative-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 120, height: 120, color: '#0f766e', zIndex: 1 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Investment Advisory */}
          <div id="investment-advisory" className="service-feature-row">
            <div className="service-feature-content">
              <div className="service-icon-wrapper">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: 20, color: '#115e59' }}>Investment Advisory</h2>
              <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: 30 }}>Navigate complex markets with confidence. Our investment advisory service offers personalized, research-backed guidance tailored to your specific situation. We cut through the noise to deliver clear, actionable advice, ensuring you are positioned to capitalize on opportunities while mitigating unnecessary risks.</p>
              <ul className="service-benefits">
                {['Independent Market Research', 'Alternative Investment Opportunities', 'Continuous Performance Review'].map((b) => (
                  <li key={b}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-feature-image">
              <div className="glass-card">
                <div className="compass-mockup">
                  <div className="compass-needle" style={{ animation: 'rotateNeedle 4s ease-in-out infinite alternate' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final" className="cta-final-section section-padding text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="cta-title" style={{ color: 'white', fontSize: '2.5rem', marginBottom: 20 }}>Ready to Elevate Your Portfolio?</h2>
          <p className="cta-text" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: 600, margin: '0 auto 40px' }}>Schedule a complimentary consultation with one of our expert advisors to discuss how we can tailor our services to your unique goals.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Speak with an Advisor</Link>
        </div>
      </section>
    </>
  );
}
