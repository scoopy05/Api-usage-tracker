import React, { useState, useEffect } from 'react';
import './api.css';
import { Link } from "react-router-dom";

const Api = () => {
  const [apis, setApis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const fetchAvailableApis = async () => {
      try {
        const response = await fetch("https://api-usage-tracker.onrender.com/api/available");
        const data = await response.json();
        setApis(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch APIs", error);
        setIsLoading(false);
      }
    };
  
    fetchAvailableApis();
  }, []);

  const handleCopy = (endpoint, id) => {
    navigator.clipboard.writeText(endpoint);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); 
  };

  if (isLoading) {
    return <div className="api-loading">Loading available APIs...</div>;
  }

  return (
    <div className="api-container">
      
      {/* --- Header & Documentation Link --- */}
      <div className="api-header-row">
        <div className="api-header-text">
          <h1>API Library</h1>
          <p>Explore the available APIs you can integrate into your applications.</p>
        </div>
        
        {/* Users will click here to learn how to use them! */}
        <Link to="/docs" className="doc-btn">
  View Full Documentation ↗
</Link>
      </div>

      {/* --- API Cards Grid --- */}
      <div className="api-grid">
        {apis.map((api) => (
          <div className="api-card" key={api.id}>
            
            <div className="api-card-header">
              <h3>{api.name}</h3>
              <span className={`api-status ${api.status === 'Stable' ? 'status-stable' : 'status-beta'}`}>
                {api.status}
              </span>
            </div>
            
            <p className="api-description">{api.description}</p>
            <p className="api-version">Version: {api.version}</p>
            
            <div className="api-endpoint-box">
              <code>{api.endpoint}</code>
              <button 
                className="copy-btn" 
                onClick={() => handleCopy(api.endpoint, api.id)}
              >
                {copiedId === api.id ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;