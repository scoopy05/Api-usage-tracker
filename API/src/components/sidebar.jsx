import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    
    
        <div className='sidebar'>
            <p className='dasboard'>Dashboard</p>
            <NavLink to='' className='nav-link' end>Overview</NavLink>
            <NavLink to='usage' className='nav-link'>Usage</NavLink>
            <NavLink to='api' className='nav-link'>API</NavLink>
        </div>
        {/* <div className='contents'>
            

        </div> */}

   
    
    </>
  )
}

export default Sidebar