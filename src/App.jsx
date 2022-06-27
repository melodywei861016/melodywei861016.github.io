import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import RebrandPage from './pages/RebrandPage.jsx';
import SplitCapturePage from './pages/SplitCapturePage.jsx';
import Resume from './pages/Resume.jsx';
import './Assets/css/default.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rebrand" element={<RebrandPage />} />
        <Route path="/split-capture" element={<SplitCapturePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>

  );
}

export default App;
