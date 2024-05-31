// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
import './styles.css'; // Импорт стилей

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Моё приложение</h1>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile name="Алексей" age="30" />} />
      </Routes>
    </Router>
  );
}

export default App;
