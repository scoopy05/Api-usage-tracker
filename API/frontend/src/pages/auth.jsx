import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './auth.css';
import logo from '../assets/logo.png'
import sideimg from '../assets/sideimg.png'
import API from "../api/api";

const Auth = () => {
  // Grab the mode ('login' or 'signup') from the URL
  const { mode } = useParams();
  const navigate = useNavigate();
  const isLogin = mode === 'login';

  // State to hold all form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // Handle input changes
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
  
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
  
    try {
      let res;
  
      if (isLogin) {
        res = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        });
  
        localStorage.setItem("token", res.data.token);
        navigate('/dashboard');
  
      }  else {
        res = await API.post("/auth/register", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      
        setMessage("Registration successful! Please check your email to verify your account.");
        
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      }
  
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  
    setIsLoading(false);
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
{message && <div className="success-message">{message}</div>}

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

            {/* Only show Confirm Password field on Sign Up */}
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
              <p>Don't have an account ? <Link to="/auth/signup">Sign up</Link></p>
            ) : (
              <p>Already have an account ? <Link to="/auth/login">Login</Link></p>
            )}
          </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="auth-image-section">
          {/* Replace with your 3D illustration image path */}
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