import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Work from './pages/Work.jsx';
import RebrandPage from './pages/RebrandPage.jsx';
import SplitCapturePage from './pages/SplitCapturePage.jsx';
import Resume from './pages/Resume.jsx';
import AccountCreationPage from './pages/AccountCreationPage.jsx';
import './Assets/css/default.min.css';
import OnboardingFunnelPage from './pages/OnboardingFunnelPage.jsx';
import MobileResponsivePage from './pages/MobileResponsivePage.jsx';
import ProtectedWorkRoute from './components/ProtectedWorkRoute.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<ProtectedWorkRoute><Work /></ProtectedWorkRoute>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/rebrand" element={<ProtectedWorkRoute><RebrandPage /></ProtectedWorkRoute>} />
        <Route path="/split-capture" element={<ProtectedWorkRoute><SplitCapturePage /></ProtectedWorkRoute>} />
        <Route path="/account-creation" element={<ProtectedWorkRoute><AccountCreationPage /></ProtectedWorkRoute>} />
        <Route path="/onboarding-funnel" element={<ProtectedWorkRoute><OnboardingFunnelPage /></ProtectedWorkRoute>} />
        <Route path="/mobile-responsive" element={<ProtectedWorkRoute><MobileResponsivePage /></ProtectedWorkRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
