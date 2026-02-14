import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './auth.css'
import logo from '../assets/logo.png';
import sideimg from '../assets/sideimg.png';
import { Link } from 'react-router-dom';

const Auth = () => {
    const navigate=useNavigate();
    const {mode}=useParams();
    const isLogin=mode==="login";
    const[password,setPassword]=useState("");
    const[confirmpass,setConfirmpass]=useState("");
    const[error,setError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!isLogin && confirmpass!==password ){
            setError("Password does not match");
            return;
        }
        setError("");
        navigate("/dashboard")
    };
    const passwordMatch=confirmpass===password;


  return (
    <>
    <div className='body'>
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <img src={logo} className='logo2'>
            </img>
            {isLogin&&(<p className='textcontent'>Hello<br/>Welcome Back!</p>)}
            {!isLogin&&(<p className='textcontent'>Create<br/>Your Account</p>)}
            <input type="email" className='username' placeholder='Enter your email' >
            </input>
            <input type="password" className='password' placeholder='Enter your password'value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            {!isLogin&&(<input type="password" className='password' placeholder='Confirm your password' value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)}/>)}
            {error && (<p className='error'>{error}</p>)}
            {!isLogin&& !passwordMatch&& confirmpass&& !error&&(<p className='error'>Password does not match</p>)}
            <button type ="submit" className='loginbtn2'>{isLogin?"Log in":"Sign Up"}</button>

            <p className='description-for-change'>
                {isLogin?"Dont have an account ? ":"Already have an account ? "}
                <Link to={isLogin?"/auth/signup":"/auth/login"} className='link'> 
                {isLogin?"Sign up":"Login"}
                </Link>
                 </p>

        </form>
        <div className='sideimg'>
            <img src={sideimg}></img>
        </div>
    </div>
    </div>

    </>
  )
}

export default Auth