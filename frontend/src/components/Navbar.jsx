import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link to="/" className="brand">MediBook</Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/doctors">Doctors</NavLink>
          {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        </nav>
        <div className="nav-actions">
          {user ? (
            <>
              <span className="user-pill">Hi, {user.name.split(' ')[0]}</span>
              <button className="btn btn-secondary" onClick={() => { logout(); navigate('/'); }}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth" className="btn">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
