import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page-container">
      <Navbar />
      
      <main className="hero-section">
        <div className="hero-text-content fade-in-up">
          <h1 className="hero-headline">
            Control, Monitor,<br />
            and Optimize<br />
            Your APIs
          </h1>
          <p className="hero-subheadline">
            A unified dashboard to track traffic, prevent overload, 
            and manage request limits with precision and reliability.
          </p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/auth/signup')}
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;