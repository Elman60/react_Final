import { Link, useNavigate } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

function Navbar({ user, logout }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Probank</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        <li>
          {user ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/auth">Login</Link>
          )}
        </li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
