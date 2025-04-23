// src/components/MenuBar.js
import React from 'react';
import './MenuBar.css';

function MenuBar({ isLoggedIn }) {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        {isLoggedIn ? (
          <>
            <li><a href="/history">View History</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/logout">Logout</a></li>
          </>
        ) : (
          <li><a href="/register">Register</a></li>
        )}
      </ul>
    </nav>
  );
}

export default MenuBar;
