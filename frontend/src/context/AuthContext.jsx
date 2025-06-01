import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['x-auth-token'] = token;
      checkAuth();
    } else {
      setLoading(false);
    }
  }, []);

  const checkAuth = async () => {
        try {
      const res = await api.get('/api/auth/me');
          setUser(res.data);
      setError(null);
        } catch (err) {
          localStorage.removeItem('token');
          delete api.defaults.headers.common['x-auth-token'];
      setError(err.response?.data?.msg || 'Authentication failed');
    } finally {
      setLoading(false);
    }
    };

  const login = async (email, password) => {
    try {
      const res = await api.post('/api/auth/login', { email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      api.defaults.headers.common['x-auth-token'] = token;
      setUser(user);
      setError(null);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
      return {
        success: false,
        error: err.response?.data?.msg || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const res = await api.post('/api/auth/register', userData);
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      api.defaults.headers.common['x-auth-token'] = token;
      setUser(user);
      setError(null);
      return { success: true };
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
      return {
        success: false,
        error: err.response?.data?.msg || 'Registration failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['x-auth-token'];
    setUser(null);
    setError(null);
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
        user,
        loading,
        error,
    isAuthenticated: !!user,
        login,
        register,
        logout,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};