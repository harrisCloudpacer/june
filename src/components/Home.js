// NPM Packages
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// CONTEXT
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  // NAVIGATE
  const navigate = useNavigate();
  // CONTEXT
  const { user, logout } = useContext(AuthContext);
  // EVENT HANDLERS
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div>
      <h2>Welcome {user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
