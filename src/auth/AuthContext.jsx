// Remembers who is logged in, for the whole app.
//   const { user, login, logout, loading } = useAuth();
//   user is null when logged out, otherwise { user_id, user_name, user_role, user_avatar, user_email }
import React, { createContext, useContext, useEffect, useState } from 'react';
import { apiFetch, tokenStore } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true until we know if a saved token is still valid

  // On page load / refresh: if a token is saved, ask the backend who it belongs to.
  useEffect(() => {
    if (!tokenStore.get()) {
      setLoading(false);
      return;
    }
    apiFetch('/api/auth/me')
      .then((data) => setUser(data.user))
      .catch(() => tokenStore.clear()) // expired or invalid token
      .finally(() => setLoading(false));
  }, []);

  // Call with the response from /api/auth/login or /api/auth/register
  const login = (data) => {
    tokenStore.setTokens(data);
    setUser(data.user);
  };

  const logout = () => {
    tokenStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
