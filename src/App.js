import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import MenuBar from './components/common/MenuBar'; 
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import History from './components/history/History';
import Logout from './components/auth/Logout/Logout';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <div className="App">
        <MenuBar isLoggedIn={!!token} /> 
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={!token ? <Login onLogin={handleLogin} /> : <Navigate to="/history" replace />}
          />
          <Route
            path="/history"
            element={token ? <History /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/logout"
            element={<Logout onLogout={handleLogout} />}
          />
          <Route
            path="/"
            element={<Navigate to={token ? "/history" : "/login"} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
