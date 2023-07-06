//NPM PACKAGES
import React, { createContext, useState, useEffect, useContext } from 'react';
// CONSTANTS
import { AUTH, JUNE } from '../share/constants';
// UTILS
import { login as loginUser } from '../share/utils';
// CONTEXT
import { JuneContext } from './JuneContext';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // STATES
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // CONTEXT
  const {analytics} = useContext(JuneContext)
  // USE_EFFECT
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // EVENT HANDLERS
  const login = (email, password) => {
    if (email === AUTH.email && password === AUTH.password) {
      console.log("hello" , email ,password, analytics)
      analytics.identify(AUTH.id, {
        email: AUTH.email
      });
      analytics.track({
        userId: AUTH.id,
        event: JUNE.EVENTS.SIGNED_IN,
        properties: {
          browser: 'chrome'
        }
      });
      const user = {
        email,
      };
      const token = loginUser(user) 

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);

      setUser(user);
    } else {
      console.log('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  if (loading) {
    // You can render a loading spinner or placeholder while checking for the user's authentication status
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
