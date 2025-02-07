import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import useAuth from './hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/global.css';

function App() {
  const { user, setUser, logout } = useAuth();

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;

