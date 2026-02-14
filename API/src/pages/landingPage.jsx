import React from 'react';
import './landingPage.css'
import logo from '../assets/logo.png';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/navbar'


const LandingPage = () => {
    const navigate=useNavigate();
  return (
    <>
    <div className='mainconatiner'>
        <Navbar/>
    {/* <div className='navbarconatiner'>
        <div className='navbar'>
            <div className='logo'>
                <img src={logo}></img>
            </div>
            <div className='featuresbox'>
                <a className='about-us'>About us</a>
                <a className='features'>Features</a>
                <a className='pricing'>Pricing</a>
            </div>
            <div className='login-box'>
                <button className='loginbtn' onClick={()=> navigate("/auth/login")}>Login</button>
                <button className='signupbtn' onClick={()=> navigate("/auth/signup")}>Sign Up</button>
            </div>
        </div>
        
    </div> */}
    <div className='textconatiner'>
        <div className='textarea'>
        <h1 className='heading'>Control, Monitor, and Optimize Your APIs</h1>
        <p className='subheading'>A unified dashboard to track traffic, prevent overload, and manage request limits with precision and reliability.</p>
        <button className='continuebtn' onClick={()=>navigate("/auth/signup")}>Continue</button>

       </div>
     </div>
    </div>
    </>
  )
}

export default LandingPage
