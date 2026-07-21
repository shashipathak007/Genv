export default function Contact() {
  return (
    <>
      <section id="contact-hero" className="hero-section text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h1 className="hero-title" style={{ color: '#115e59', marginBottom: 24, lineHeight: 1.1, fontSize: '3rem' }}>Get in Touch</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#334155', marginBottom: 40, lineHeight: 1.6 }}>
            We're here to answer your questions and help you start your journey with Genvest. Reach out today!
          </p>
        </div>
      </section>

      <section id="contact-main" className="section-padding" style={{ padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }}>
            <div className="contact-form-container">
              <h2 style={{ fontSize: '2.5em', color: '#115e59', textAlign: 'left', marginBottom: 30 }}>Send Us a Message</h2>
              <form id="genvest-contact-form" action="mailto:shashipathak446@gmail.com" method="POST" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="full-name">Full Name <span className="required" style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="full-name" name="fullName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required" style={{ color: 'red' }}>*</span></label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required" style={{ color: 'red' }}>*</span></label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message <span className="required" style={{ color: 'red' }}>*</span></label>
                  <textarea id="message" name="message" rows={6} required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <aside className="contact-details-container">
              <h3 style={{ fontSize: '1.5em', color: '#005757', marginBottom: 20 }}>Our Contact Details</h3>
              <div className="contact-info-item" style={{ marginBottom: 24 }}>
                <h4 style={{ fontWeight: 700, color: '#115e59' }}>Address:</h4>
                <p>Genvest Ventures Pvt. Ltd.</p>
                <p>Kathmandu, Nepal</p>
              </div>
              <div className="contact-info-item" style={{ marginBottom: 24 }}>
                <h4 style={{ fontWeight: 700, color: '#115e59' }}>Business Hours:</h4>
                <p>Sunday - Friday: 9:00 AM - 5:00 PM (NPT)</p>
                <p>Saturday: Closed</p>
              </div>
              <div className="social-media-contact" style={{ marginTop: 40 }}>
                <h4 style={{ fontWeight: 700, color: '#115e59' }}>Connect With Us:</h4>
                <div style={{ marginTop: 15 }}>
                  <a href="https://www.instagram.com/genvest.np/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#115e59' }}>
                    <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="map-location" className="section-padding" style={{ backgroundColor: 'white', paddingTop: 0, padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Find Us Here</h2>
          <div style={{ width: '100%', height: 400, borderRadius: 5, overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.071825760737!2d85.32396027506908!3d27.71724528279067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190d5e82841d%3A0xe42c49c42316c0d!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1684249382167!5m2!1sen!2sus"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
