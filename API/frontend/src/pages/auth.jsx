import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './auth.css';
import logo from '../assets/logo.png'
import sideimg from '../assets/sideimg.png'
import API from "../api/api";

const Auth = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  const isLogin = mode === 'login';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // 1. Bring back the success message state
  const [successMsg, setSuccessMsg] = useState(''); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMsg(''); // Clear old success messages
  
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
  
    try {
      let tokenToSave;

      if (isLogin) {
        const res = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        tokenToSave = res.data.token;
  
      } else {
        await API.post("/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      
        const loginRes = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        
        tokenToSave = loginRes.data.token;
      }

      // Save token to local storage securely
      localStorage.setItem("token", tokenToSave);
      
      // 2. Show the realistic processing message
      setSuccessMsg("Success! Preparing your dashboard...");

      // 3. The 2-second realistic delay before routing
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);

      // Notice we DO NOT set isLoading(false) here.
      // We want the button to stay on "Processing..." while they wait!
  
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setIsLoading(false); // Only turn off the loading state if there is an error
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        
        <div className="auth-form-section">
          <div className="auth-logo">
            <img src={logo} alt="API FLOW" />
          </div>

          <div className="auth-header">
            {isLogin ? (
              <>
                <h1>Hello</h1>
                <h2>Welcome Back!</h2>
              </>
            ) : (
              <>
                <h1>Create</h1>
                <h2>Your Account</h2>
              </>
            )}
          </div>

          {error && <div className="error-message">{error}</div>}
          {/* 4. Display the success message in the UI */}
          {successMsg && <div className="success-message">{successMsg}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            )}

            <button type="submit" disabled={isLoading} className="submit-btn">
              {isLoading ? 'Processing...' : (isLogin ? 'Log in' : 'Sign Up')}
            </button>
          </form>

          <div className="auth-footer">
            {isLogin ? (
              <p>Don't have an account? <Link to="/auth/signup">Sign up</Link></p>
            ) : (
              <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            )}
          </div>
        </div>

        <div className="auth-image-section">
          <img 
            src={sideimg} 
            alt="Authentication Illustration" 
            className="illustration-img"
          />
        </div>

      </div>
    </div>
  );
};

export default Auth;