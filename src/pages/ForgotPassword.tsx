import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`A password reset link has been sent to ${email}. Please check your inbox. (Simulated)`);
      navigate('/login');
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f2f5', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header id="main-header" className="site-header">
        <div className="container header-container" style={{ width: '90%', maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo-container">
            <Link to="/">
              <img src={logoSrc} alt="Genvest Ventures Pvt. Ltd. Logo" id="site-logo" style={{ maxHeight: 65, width: 'auto' }} />
            </Link>
          </div>
          <button id="mobile-nav-toggle" aria-label="Open navigation menu" aria-expanded="false" style={{ fontSize: 24, background: 'none', border: 'none', color: '#115e59', cursor: 'pointer' }}>☰</button>
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            backgroundColor: '#ffffff', padding: 40, borderRadius: 8, boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '100%', maxWidth: 450, textAlign: 'center', boxSizing: 'border-box',
          }}>
            <h2 style={{ color: '#1e3d30', fontSize: 28, marginBottom: 20, fontWeight: 'bold' }}>Forgot Your Password?</h2>
            <p style={{ color: '#555', fontSize: 16, lineHeight: 1.5, marginBottom: 30, padding: '0 10px' }}>Enter your email address below and we'll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20, textAlign: 'left' }}>
                <label htmlFor="reset-email" style={{ display: 'block', marginBottom: 8, color: '#333', fontSize: 16 }}>Email Address</label>
                <input
                  type="email" id="reset-email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  style={{ width: '100%', padding: '14px 15px', border: '1px solid #ccc', borderRadius: 6, fontSize: 16, boxSizing: 'border-box', outline: 'none' }}
                />
              </div>
              <button type="submit" style={{
                backgroundColor: '#2b5f4c', color: '#fff', padding: '15px 25px', border: 'none',
                borderRadius: 6, fontSize: 18, fontWeight: 'bold', cursor: 'pointer', width: '100%', marginTop: 20,
              }}>Send Reset Link</button>
              <p style={{ marginTop: 25, fontSize: 16, color: '#555' }}>
                Remembered your password? <Link to="/login" style={{ color: '#2b5f4c', fontWeight: 'bold', textDecoration: 'none' }}>Back to Login</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
