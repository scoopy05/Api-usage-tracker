import React from 'react'
import logo from '../assets/logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Top-section'>
      <div className='navbar'>

        <div className='logo'>
          <img src={logo} />
        </div>

        <div className='featuresbox'>
          <a>About us</a>
          <a>Features</a>
          <a>Pricing</a>
        </div>

        <div className='login-box'>
          <Link to="/auth/login" className='loginbtn'>Login</Link>
          <Link to="/auth/signup" className='signupbtn'>Sign Up</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
