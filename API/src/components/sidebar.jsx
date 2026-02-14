import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className='dashboard-holder'>
    <div className='dashboard-container'>
        <div className='sidebar'>
            <p className='dasboard'>Dashboard</p>
            <NavLink to='/dasboard/overview' className='overview'>Overview</NavLink>
            <NavLink to='/dasboard/usage' className='usage'>Usage</NavLink>
            <NavLink to='/dasboard/API' className='api'>API</NavLink>
        </div>
        <div className='contents'>
            

        </div>

    </div>
    </div>
    </>
  )
}

export default Sidebar