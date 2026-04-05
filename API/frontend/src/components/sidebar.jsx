import React, { useState } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
     
      <div className="mobile-sidebar-toggle" onClick={toggleSidebar}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>


      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        
       
        <div className="sidebar-section">
          <p className='sidebar-heading'>Dashboard</p>
          <NavLink to='/dashboard' className='nav-link' end onClick={closeSidebar}>Overview</NavLink>
          <NavLink to='/dashboard/usage' className='nav-link' onClick={closeSidebar}>Usage Analytics</NavLink>
          <NavLink to='/dashboard/api' className='nav-link' onClick={closeSidebar}>Sample API</NavLink>
        </div>

        <div className="sidebar-section">
          <p className='sidebar-heading'>Management</p>
          <NavLink to='/dashboard/keys' className='nav-link' onClick={closeSidebar}>API Keys</NavLink>
        </div>
        
      </aside>
    </>
  );
}

export default Sidebar;