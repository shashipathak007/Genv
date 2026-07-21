import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

export default function Home() {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="hero-content-with-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60, position: 'relative', zIndex: 1 }}>
            <div className="hero-text-container animate-fadeInUp" style={{ flex: 1, maxWidth: 600 }}>
              <h1 className="hero-title" style={{ color: '#115e59', marginBottom: 24, lineHeight: 1.1, fontSize: '3rem' }}>
                Personalized Investment Strategies for Your Financial Goals
              </h1>
              <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#334155', marginBottom: 40, lineHeight: 1.6 }}>
                Genvest offers tailored financial planning and investment advisory to help individuals and families achieve long-term prosperity.
              </p>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary btn-large">Explore Services</Link>
                <Link to="/contact" className="btn btn-secondary btn-large">Book Consultation</Link>
              </div>
            </div>
            <div className="hero-image-container animate-fadeInUp-delay" style={{ flex: 1, position: 'relative' }}>
              <img
                src={logoSrc}
                alt="Genvest Investment Strategies"
                className="hero-image"
                style={{ width: '100%', maxWidth: 450, margin: '0 auto', mixBlendMode: 'multiply', transform: 'perspective(1000px) rotateY(-5deg)', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="section-padding">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Your Partner in Financial Growth</h2>
          <div className="intro-content" style={{ maxWidth: 800, margin: '0 auto 60px', textAlign: 'center', fontSize: '1.125rem' }}>
            <p>Welcome to Genvest. We believe in <strong>Turning Ambition into Impact</strong>. Our firm was founded on the principle that expert financial guidance should not only grow your wealth but also empower you to achieve what truly matters. We partner with you to understand your unique aspirations and craft personalized strategies designed for meaningful, real-world results.</p>
          </div>
          <div className="grid-container" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Personalized Approach', text: 'Custom strategies tailored to your individual goals, risk tolerance, and life circumstances.' },
              { title: 'Education & Transparency', text: 'We ensure you understand your investments and the \'why\' behind our recommendations, fostering clarity and confidence.' },
              { title: 'Proactive Communication & Expert Advice', text: 'Benefit from regular updates, clear market insights, and easy access to our experienced advisors.' },
            ].map((item) => (
              <div key={item.title} className="differentiator-item" style={{
                background: 'white', padding: '40px 30px', borderRadius: 16, textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                border: '1px solid transparent',
              }}>
                <h3 style={{ color: '#0f766e', marginBottom: 16, fontSize: '1.5em' }}>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-padding bg-light" style={{ backgroundColor: 'white' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Our Core Services</h2>
          <div className="services-grid grid-container" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Portfolio Management', text: 'Strategic and disciplined management of your investment portfolio to optimize returns and manage risk according to your objectives.', link: '/services#portfolio-management' },
              { title: 'Financial Planning', text: 'Comprehensive planning for your future, including retirement, education savings, wealth transfer, and other major life goals.', link: '/services#financial-planning' },
              { title: 'Investment Advisory', text: 'Ongoing, personalized advice to guide your investment decisions and help you navigate complex financial markets effectively.', link: '/services#investment-advisory' },
            ].map((s) => (
              <article key={s.title} className="card">
                <div className="card-content">
                  <h3 style={{ marginBottom: 16, color: '#115e59' }}>{s.title}</h3>
                  <p style={{ flex: 1, marginBottom: 24 }}>{s.text}</p>
                  <Link to={s.link} className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="insights-section section-padding">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Latest Insights & News</h2>
          <div className="insights-grid grid-container" style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              { title: 'Understanding Market Volatility in 2025', excerpt: 'A brief look at current market trends and how to navigate them...', meta: 'Published: May 10, 2025', link: '/insight/market-volatility' },
              { title: 'Key Strategies for Effective Retirement Planning', excerpt: 'Essential tips to ensure your retirement savings are on track for your future...', meta: 'Published: May 01, 2025', link: '/insight/long-term-investing' },
              { title: 'The Power of Diversification', excerpt: 'Exploring how a diversified portfolio can enhance your investment strategy...', meta: 'Published: April 25, 2025', link: '/insight/diversification-power' },
            ].map((ins) => (
              <article key={ins.title} className="card">
                <div className="card-content">
                  <h3 className="insight-title" style={{ fontSize: '1.25rem', marginBottom: 12 }}>{ins.title}</h3>
                  <p className="insight-excerpt">{ins.excerpt}</p>
                  <span className="insight-meta" style={{ display: 'block', fontSize: '0.875rem', color: '#64748b', marginBottom: 16, fontWeight: 500 }}>{ins.meta}</span>
                  <Link to={ins.link} className="btn btn-text" style={{ marginTop: 'auto' }}>Read More &rarr;</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center top-margin" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/insights" className="btn btn-primary">Explore All Insights</Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section section-padding" style={{ backgroundColor: '#115e59', color: 'white', padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: 'white', marginBottom: '1rem' }}>Client-Centric Approach</h2>
          <div className="testimonial-item" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 24, color: '#e2e8f0' }}>
              <p style={{ color: 'inherit' }}>&ldquo;Genvest helped us navigate a complex financial landscape with clarity and personalized attention. Their commitment to understanding our goals made all the difference.&rdquo;</p>
              <cite style={{ fontWeight: 600, color: '#14b8a6', fontStyle: 'normal', fontSize: '1.125rem' }}>- A Valued Client</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="cta-final" className="cta-final-section section-padding text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="cta-title" style={{ color: 'white', fontSize: '2.5rem', marginBottom: 20 }}>Ready to Turn Your Ambition into Impact?</h2>
          <p className="cta-text" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: 600, margin: '0 auto 40px' }}>Let Genvest be your trusted partner in achieving your financial aspirations. Contact us today for a personalized consultation.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Started Today</Link>
        </div>
      </section>
    </>
  );
}
