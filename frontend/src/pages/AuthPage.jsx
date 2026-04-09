import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(formData, isRegister);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <section className="section container auth-wrap">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <h2>{isRegister ? 'Create Patient Account' : 'Welcome Back'}</h2>
        <p className="muted">{isRegister ? 'Register to manage your bookings.' : 'Login to book appointments.'}</p>
        {isRegister && (
          <input
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {error && <div className="alert error">{error}</div>}
        <button className="btn w-full" type="submit">{isRegister ? 'Register' : 'Login'}</button>
        <button type="button" className="btn btn-secondary w-full" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already have an account? Login' : 'New here? Register'}
        </button>
      </form>
    </section>
  );
}
