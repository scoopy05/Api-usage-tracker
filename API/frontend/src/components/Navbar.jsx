
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

// Add isDashboard as a parameter here (defaulting to false)
const Navbar = ({ isDashboard = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const goToLogin = () => navigate('/auth/login');
  const goToSignUp = () => navigate('/auth/signup');
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("apikey"); 
    navigate('/auth/login'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        <img 
          src={logo} 
          alt="API Flow Logo" 
          className="brand-logo" 
        />
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <span className={isMobileMenuOpen ? "line open" : "line"}></span>
        <span className={isMobileMenuOpen ? "line open" : "line"}></span>
        <span className={isMobileMenuOpen ? "line open" : "line"}></span>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        
        {!isDashboard && (
          <>
            <li><a href="#about">About us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </>
        )}
        
        <li className="mobile-actions">
          
          {!isDashboard ? (
            <>
              <button className="btn-outline" onClick={goToLogin}>Login</button>
              <button className="btn-solid" onClick={goToSignUp}>Sign Up</button>
            </>
          ) : (
            <button className="btn-outline" onClick={handleLogout}>Logout</button>
          )}
        </li>
      </ul>

      <div className="navbar-actions desktop-only">
        
        {!isDashboard ? (
          <>
            <button className="btn-outline" onClick={goToLogin}>Login</button>
            <button className="btn-solid" onClick={goToSignUp}>Sign Up</button>
          </>
        ) : (
          <button className="btn-outline" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;