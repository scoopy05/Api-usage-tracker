import React from 'react'
import Navbar from '../../components/navbar'
import './dasboard.css';
import Sidebar from '../../components/sidebar';

const Dashboardlayout = () => {
  return (
    <>
    <div className='dash'>
    <Navbar/>
    <Sidebar/>
    </div>
    </>
    
  )
}

export default Dashboardlayout