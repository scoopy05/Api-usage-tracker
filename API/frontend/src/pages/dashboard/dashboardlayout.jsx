import React from 'react';
import Navbar from '../../components/Navbar'; 
import './dasboard.css';
import Sidebar from '../../components/sidebar'; 
import { Outlet } from 'react-router-dom';

const Dashboardlayout = () => {
  return (
    <>
      <div className='dashboard'>
        
        <Navbar isDashboard={true} />
        
        <div className='dashboard-content'>
          <Sidebar /> 
          <div className='dashboard-outlet'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardlayout;