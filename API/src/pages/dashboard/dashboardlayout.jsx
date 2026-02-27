import React from 'react'
import Navbar from '../../components/navbar'
import './dasboard.css';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router-dom';

const Dashboardlayout = () => {
  return (
    <>
    <div className='dashboard'>
     <Navbar/>
     <div className='dashboard-content'>
      <Sidebar/> 
      <div className='dashboard-outlet'>
        <Outlet/>

      </div>
     </div>
    
    </div>

    </>
    
  )
}

export default Dashboardlayout