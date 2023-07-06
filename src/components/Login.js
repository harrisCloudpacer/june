// NPM PACKAGES
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// CONTEXT
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // NAVIGATE
  const navigate = useNavigate();
  // CONTEXT
  const { login } = useContext(AuthContext);
 
  //EVENT HANDLERS
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
