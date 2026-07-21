import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password. Please try again.');
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
        </div>
      </header>

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px' }}>
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            backgroundColor: '#ffffff', padding: 40, borderRadius: 8, boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            width: '100%', maxWidth: 450, textAlign: 'center', boxSizing: 'border-box',
          }}>
            <h2 style={{ color: '#1e3d30', fontSize: 28, marginBottom: 30, fontWeight: 'bold' }}>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 20, textAlign: 'left' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: 8, color: '#333', fontSize: 16 }}>Email</label>
                <input
                  type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required
                  style={{ width: '100%', padding: '14px 15px', border: '1px solid #ccc', borderRadius: 6, fontSize: 16, boxSizing: 'border-box', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: 20, textAlign: 'left' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: 8, color: '#333', fontSize: 16 }}>Password</label>
                <input
                  type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                  style={{ width: '100%', padding: '14px 15px', border: '1px solid #ccc', borderRadius: 6, fontSize: 16, boxSizing: 'border-box', outline: 'none' }}
                />
              </div>
              <button type="submit" style={{
                backgroundColor: '#2b5f4c', color: '#fff', padding: '15px 25px', border: 'none',
                borderRadius: 6, fontSize: 18, fontWeight: 'bold', cursor: 'pointer', width: '100%', marginTop: 20,
              }}>Log In</button>
              <div style={{ marginTop: 20, fontSize: 15 }}>
                <Link to="/forgot-password" style={{ color: '#4b6a5e', textDecoration: 'none' }}>Forgot Password?</Link>
              </div>
              <p style={{ marginTop: 25, fontSize: 16, color: '#555' }}>
                Don't have an account? <Link to="/signup" style={{ color: '#2b5f4c', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
