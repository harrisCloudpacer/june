import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Home from './components/Home';
import { JuneProvider } from './context/JuneContext';

function App() {
  return (
    <Router> 
      <JuneProvider>
      <AuthProvider>
        <Routes>
            <Route exact path="/login" Component={Login} />
            <Route exact path="/" Component={Home} />
          </Routes>
      </AuthProvider>
      </JuneProvider>
    </Router>
  );
}

export default App;
