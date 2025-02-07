import { useState, useEffect } from 'react';

function useAuth() {
  const [user, setUserState] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('probankUser');
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  const setUser = (userData) => {
    setUserState(userData);
    localStorage.setItem('probankUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUserState(null);
    localStorage.removeItem('probankUser');
  };

  return { user, setUser, logout };
}

export default useAuth;
