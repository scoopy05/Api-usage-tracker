import React, { useState, useEffect } from 'react';
import './apikeys.css';
import API from "../../api/api"; 

const ApiKeys = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const fetchApiKey = async () => {
      try {
        const res = await API.get("/user/apikey");
        setApiKey(res.data.apikey);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch API Key", error);
        setIsLoading(false);
      }
    };
  
    fetchApiKey();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setIsCopied(true);
    
    // Reset the "Copied!" text back to "Copy" after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleRegenerate = async () => {
    if (!window.confirm("Are you sure you want to regenerate your API Key? Your old key will instantly stop working.")) {
      return;
    }
    
    try {
      const res = await API.post("/user/apikey/regenerate");
      setApiKey(res.data.apikey);
      alert("API Key regenerated successfully!");
    } catch (error) {
      console.error("Failed to regenerate API Key", error);
      alert("Failed to regenerate API Key");
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (isLoading) {
    return <div className="keys-loading">Loading your credentials...</div>;
  }

  return (
    <div className="keys-container">
      
      {/* --- Header Section --- */}
      <div className="keys-header-row">
        <div className="keys-header-text">
          <h1>API Keys</h1>
          <p>Manage your secret keys for authenticating API requests.</p>
        </div>
      </div>

      {/* --- API Key Card --- */}
      <div className="key-card">
        <div className="key-header">
          <h3>Your Secret Key</h3>
          <span className="security-badge">Keep this secure</span>
        </div>
        
        <p className="key-warning">
          Do not share your API key with others or expose it in the browser or client-side code.
        </p>

        <div className="key-box">
          {/* Shows either the real key or bullet points based on isVisible */}
          <div className="key-display">
            {isVisible ? apiKey : '••••••••••••••••••••••••••••••••'}
          </div>
          
          <div className="key-actions">
            <button className="icon-btn" onClick={toggleVisibility} title={isVisible ? "Hide Key" : "Show Key"}>
              {isVisible ? 'Hide' : 'Show'}
            </button>
            <button className={`copy-btn ${isCopied ? 'copied' : ''}`} onClick={handleCopy}>
              {isCopied ? 'Copied!' : 'Copy'}
            </button>
            <button className="icon-btn" onClick={handleRegenerate} title="Regenerate Key">
              Regenerate
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ApiKeys;