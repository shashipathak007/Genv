import { Link } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

const teamMembers = [
  { name: 'Shubhanjan Krishna Shrestha', bio: 'Shubhanjan brings a wealth of experience in financial strategy and is dedicated to helping our clients achieve their goals through meticulous planning and insightful analysis. Shubhanjan is a core part of our mission.' },
  { name: 'Spandan Duwadi', bio: 'Spandan\'s expertise in market research and client relations ensures that our strategies are both robust and perfectly aligned with individual client needs. Spandan is committed to your success.' },
  { name: 'Ismith Tiwari', bio: 'Ismith focuses on innovative investment solutions and plays a key role in portfolio construction, always aiming to maximize client impact and financial well-being.' },
  { name: 'Kishu Kuikel', bio: 'Kishu Kuikel is a Certified Practising Accountant (CPA) with CPA Australia, oversees the management of over $500 million in assets across the U.S. Beyond finance, he is dedicated to social impact—running NGOs and schools that empower young people with practical skills, education, and opportunities for a better future.' },
  { name: 'Anshul Man Tuladhar', bio: 'Anshul\'s dedication to ethical finance and sustainable growth strategies helps clients build a prosperous future that aligns with their values. Anshul is passionate about client empowerment.' },
  { name: 'Riya Dangol', bio: 'Riya brings strong analytical skills and a client-first approach, ensuring every financial plan is tailored for optimal outcomes and supports our clients\' ambitions.' },
  { name: 'Prashant Chand', bio: 'Prashant is focused on operational excellence and ensuring a seamless experience for our clients, underpinning our commitment to turning their financial goals into reality.' },
  { name: 'Rachana Gurung', bio: 'Rachana\'s expertise in financial advisory helps clients navigate complex decisions with confidence, playing a vital role in their journey towards achieving significant impact.' },
  { name: 'Samyog Bashyal', bio: 'Samyog is dedicated to fostering strong client relationships through clear communication and a deep understanding of their unique financial ambitions.' },
  { name: 'Arogya Tamang', bio: 'Arogya contributes valuable insights into investment analysis and risk management, helping to secure and grow our clients\' wealth effectively.' },
  { name: 'Binamra Shrestha', bio: 'Binamra plays a key role in developing tailored financial strategies that empower clients to see their ambitions transformed into impactful results.' },
  { name: 'John Doe', bio: 'John brings a wealth of experience in strategic financial planning and is dedicated to helping our clients achieve their goals through meticulous analysis and dedication.' },
  { name: 'Jane Smith', bio: 'Jane\'s expertise in client portfolio management ensures personalized strategies that drive growth and help turn ambition into significant, lasting impact for every client.' },
  { name: 'Alex Johnson', bio: 'Alex is committed to providing innovative financial solutions and robust support, ensuring our clients\' journeys are both successful and empowering.' },
  { name: 'Chris Lee', bio: 'Chris Lee focuses on delivering exceptional client service and strategic insights, forming a key part of our mission to achieve impactful financial outcomes.' },
];

export default function About() {
  return (
    <>
      <section id="about-hero-new" style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: '#F5F5DC', padding: '60px 40px', position: 'relative', overflow: 'hidden', minHeight: 400,
      }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 10, backgroundColor: '#004d40' }} />
        <div className="about-us-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 15, flex: 1, minWidth: 280 }}>
          <div className="logo-placeholder">
            <img src={logoSrc} alt="Genvest Logo" style={{ width: 250, height: 'auto', display: 'block' }} />
          </div>
          <div className="company-name" style={{ textAlign: 'left' }}>
            <p className="genvest-main" style={{ fontSize: '2.8em', fontWeight: 'bold', color: '#004d40', margin: 0, fontFamily: "'Poppins', sans-serif", lineHeight: 1 }}>GENVEST</p>
            <p className="ventures-sub" style={{ fontSize: '1.3em', color: '#DAA520', marginTop: 5, fontFamily: "'Poppins', sans-serif", letterSpacing: '0.1em' }}>VENTURES</p>
            <p className="nepali-name" style={{ fontSize: '1.1em', color: '#004d40', marginTop: 10, fontFamily: "'Preeti', sans-serif" }}>जेनभेष्ट भेन्चर्स प्रा.लि</p>
          </div>
        </div>
        <div className="about-us-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flex: 1.5, minWidth: 350, textAlign: 'right' }}>
          <p className="investment-company-tag" style={{ fontSize: '1.1em', color: '#004d40', marginBottom: 10, fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase' }}>Investment Company</p>
          <div className="about-us-content-box" style={{ backgroundColor: '#017965', color: '#F5F5DC', padding: 30, borderRadius: 5, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
            <h2 className="about-us-heading" style={{ fontSize: '3em', fontWeight: 'bold', marginTop: 0, marginBottom: 20, fontFamily: "'Georgia', serif", textTransform: 'uppercase', letterSpacing: '0.05em', color: '#F5F5DC' }}>ABOUT US</h2>
            <p className="about-us-description" style={{ fontSize: '1.1em', lineHeight: 1.6, margin: 0, fontFamily: "'Open Sans', sans-serif", maxWidth: 550, marginLeft: 'auto', color: '#F5F5DC' }}>
              GenVest Ventures is a Gen Z-founded investment company dedicated to making finance accessible for our generation. We believe in turning ambition into lasting impact by helping young investors grow wealth through smart, strategic investing, and discovering the philosophy, people, and principles that drive our commitment to your financial success.
            </p>
          </div>
        </div>
      </section>

      <section id="founding-principle" className="section-padding">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Our Founding Principle: Turning Ambition into Impact</h2>
          <div className="intro-content text-center" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', fontSize: '1.125rem' }}>
            <p>At Genvest, "Turning Ambition into Impact" is more than just a tagline; it's the bedrock of our existence. We were founded on the conviction that financial services should extend beyond mere numbers, translating personal and professional aspirations into tangible, real-world outcomes. This principle guides every strategy we craft, every piece of advice we offer, and every relationship we build, ensuring that your goals are the driving force behind your financial journey.</p>
            <p>We believe in empowering you with clarity and purpose, transforming your financial potential into a legacy of achievement and meaningful contribution.</p>
          </div>
        </div>
      </section>

      <section id="genvest-story" className="section-padding" style={{ backgroundColor: 'white', padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Our Journey</h2>
          <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.5em', marginBottom: '0.75rem', color: '#115e59' }}>Forged from Vision</h3>
              <p>Genvest was born from a collective vision to redefine the investment landscape in Nepal. We saw a need for a financial partner that combines deep market expertise with a truly personalized approach, one that listens intently to individual ambitions before charting a course.</p>
              <p>Our founders brought together diverse experiences in finance, strategy, and client relations, united by the common goal of creating an investment firm that prioritizes long-term value and genuine client partnership over fleeting trends.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5em', marginBottom: '0.75rem', color: '#115e59' }}>Growth Through Trust</h3>
              <p>From our initial consultations to managing diverse portfolios, our growth has been fueled by the trust our clients place in us. We understood early on that transparency, education, and consistent communication are key to building lasting relationships. This commitment to "Turning Ambition into Impact" has not only shaped our services but has also become the measure of our success, reflected in the achievements of those we serve.</p>
              <p>Today, Genvest stands as a testament to the power of principled investing and dedicated advisory, continuously evolving to meet the dynamic needs of our clients and the market.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission-vision" className="section-padding">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gap: 40, gridTemplateColumns: '1fr 1fr' }}>
            <div className="card"><div className="card-content text-center" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5em', marginBottom: '0.75rem', color: '#115e59' }}>Our Mission</h3>
              <p>To empower our clients to achieve their most significant life and financial goals by providing personalized, transparent, and expert investment management and financial planning, truly turning their ambition into tangible impact.</p>
            </div></div>
            <div className="card"><div className="card-content text-center" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5em', marginBottom: '0.75rem', color: '#115e59' }}>Our Vision</h3>
              <p>To be the most trusted and respected partner for individuals and families in Nepal seeking to transform their financial ambitions into a legacy of prosperity, security, and purpose.</p>
            </div></div>
          </div>
        </div>
      </section>

      <section id="our-values" className="section-padding" style={{ backgroundColor: 'white', padding: '100px 0' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              { title: 'Client-Centricity', text: 'Your ambitions are our blueprint. We place your unique goals and circumstances at the center of every strategy we develop.' },
              { title: 'Integrity', text: 'We operate with unwavering honesty, ethical conduct, and transparency in all our interactions and decisions.' },
              { title: 'Expertise', text: 'We are committed to continuous learning and applying our deep market knowledge for your benefit.' },
              { title: 'Transparency', text: 'We believe in clear, open communication, ensuring you are always informed and confident in your financial journey.' },
              { title: 'Long-Term Partnership', text: 'We aim to build enduring relationships, guiding you through every stage of your financial life with dedication.' },
            ].map((v) => (
              <div key={v.title} className="text-center" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25em', fontWeight: 700, color: '#115e59', marginBottom: 12 }}>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-padding">
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5em', textAlign: 'center', color: '#115e59', marginBottom: '1rem' }}>The People Behind Genvest</h2>
          <p className="text-center" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px', fontSize: '1.125rem' }}>
            Our strength lies in our collective expertise and shared commitment to our clients' success. Meet the dedicated individuals who are passionate about turning your ambition into impact.
          </p>
          <div style={{ display: 'grid', gap: 30, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {teamMembers.map((m) => (
              <div key={m.name} className="card" style={{ paddingTop: 20 }}>
                <div className="card-content text-center" style={{ textAlign: 'center' }}>
                  <h4 className="team-member-name" style={{ fontSize: '1.25em', fontWeight: 700, color: '#115e59', marginBottom: 8 }}>{m.name}</h4>
                  <p className="team-member-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commitment" className="section-padding" style={{ backgroundColor: 'white', padding: '100px 0' }}>
        <div className="container text-center" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2.5em', color: '#115e59', marginBottom: '1rem' }}>Our Commitment to You</h2>
          <div className="intro-content" style={{ maxWidth: 800, margin: '0 auto', fontSize: '1.125rem' }}>
            <p>Partnering with Genvest means choosing a firm that is deeply invested in your success. We commit to providing you with personalized attention, unparalleled clarity, and strategic advice tailored to your unique vision of impact. Your ambitions guide us, your trust empowers us, and your success is our ultimate reward.</p>
          </div>
        </div>
      </section>

      <section id="about-cta" className="cta-final-section section-padding text-center" style={{ textAlign: 'center' }}>
        <div className="container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h2 className="cta-title" style={{ color: 'white', fontSize: '2.5rem', marginBottom: 20 }}>Let's Discuss Your Ambitions</h2>
          <p className="cta-text" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: 600, margin: '0 auto 40px' }}>Connect with our team today to learn how Genvest can help you turn your financial aspirations into tangible impact.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
