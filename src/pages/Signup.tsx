import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoSrc from '../assets/logo.png';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (form.fullName && form.email && form.password) {
      alert(`Account created for ${form.fullName} (${form.email})! (Simulated)`);
      navigate('/login');
    } else {
      alert('Please fill in all fields.');
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
            <h2 style={{ color: '#1e3d30', fontSize: 28, marginBottom: 30, fontWeight: 'bold' }}>Create Your Genvest Account</h2>
            <form onSubmit={handleSubmit}>
              {[
                { id: 'fullName', label: 'Full Name', type: 'text' },
                { id: 'email', label: 'Email Address', type: 'email' },
                { id: 'password', label: 'Password', type: 'password' },
                { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
              ].map((field) => (
                <div key={field.id} style={{ marginBottom: 20, textAlign: 'left' }}>
                  <label htmlFor={field.id} style={{ display: 'block', marginBottom: 8, color: '#333', fontSize: 16 }}>{field.label}</label>
                  <input
                    type={field.type} id={field.id} value={(form as any)[field.id]} onChange={handleChange} required
                    style={{ width: '100%', padding: '14px 15px', border: '1px solid #ccc', borderRadius: 6, fontSize: 16, boxSizing: 'border-box', outline: 'none' }}
                  />
                </div>
              ))}
              <button type="submit" style={{
                backgroundColor: '#2b5f4c', color: '#fff', padding: '15px 25px', border: 'none',
                borderRadius: 6, fontSize: 18, fontWeight: 'bold', cursor: 'pointer', width: '100%', marginTop: 20,
              }}>Sign Up</button>
              <p style={{ marginTop: 25, fontSize: 16, color: '#555' }}>
                Already have an account? <Link to="/login" style={{ color: '#2b5f4c', fontWeight: 'bold', textDecoration: 'none' }}>Login Here</Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
