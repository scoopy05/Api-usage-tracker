import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      
      {/* First Section */}
      <div className="sidebar-section">
        <p className='sidebar-heading'>Dashboard</p>
        {/* Added full paths to be safe, 'end' keeps overview from staying highlighted */}
        <NavLink to='/dashboard' className='nav-link' end>Overview</NavLink>
        <NavLink to='/dashboard/usage' className='nav-link'>Usage Analytics</NavLink>
        <NavLink to='/dashboard/api' className='nav-link'>Sample API</NavLink>
      </div>

      {/* Second Section (New Suggestions!) */}
      <div className="sidebar-section">
        <p className='sidebar-heading'>Management</p>
        <NavLink to='/dashboard/keys' className='nav-link'>API Keys</NavLink>
       
      </div>

      {/* Bottom Section for external links */}
      <div className="sidebar-bottom">
        {/* Using a standard <a> tag here assuming your docs might be on a different page or subdomain later */}
        <a href="#docs" className="nav-link external-link">
          Documentation ↗
        </a>
      </div>
      
    </aside>
  );
}

export default Sidebar;