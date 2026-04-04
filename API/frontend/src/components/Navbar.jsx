// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../assets/logo.png'

// const Navbar = ({ isDashboard = false }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const goToLogin = () => navigate('/auth/login');
//   const goToSignUp = () => navigate('/auth/signup');

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         {/* Replace this src with the path to your full API Flow logo image */}
//         <img 
//           src={logo} 
//           alt="API Flow Logo" 
//           className="brand-logo" 
//         />
//       </div>

//       <div className="mobile-menu-icon" onClick={toggleMenu}>
//         <span className={isMobileMenuOpen ? "line open" : "line"}></span>
//         <span className={isMobileMenuOpen ? "line open" : "line"}></span>
//         <span className={isMobileMenuOpen ? "line open" : "line"}></span>
//       </div>

//       <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
//         <li><a href="#about">About us</a></li>
//         <li><a href="#features">Features</a></li>
//         <li><a href="#pricing">Pricing</a></li>
        
//         <li className="mobile-actions">
//           <button className="btn-outline" onClick={goToLogin}>Login</button>
//           <button className="btn-solid" onClick={goToSignUp}>Sign Up</button>
//         </li>
//       </ul>

//       <div className="navbar-actions desktop-only">
//         <button className="btn-outline" onClick={goToLogin}>Login</button>
//         <button className="btn-solid" onClick={goToSignUp}>Sign Up</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
  // Quick logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("apikey"); 
    navigate('/auth/login'); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Replace this src with the path to your full API Flow logo image */}
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
        {/* Only show these standard links if we are NOT on the dashboard */}
        {!isDashboard && (
          <>
            <li><a href="#about">About us</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </>
        )}
        
        <li className="mobile-actions">
          {/* Conditional rendering for Mobile */}
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
        {/* Conditional rendering for Desktop */}
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