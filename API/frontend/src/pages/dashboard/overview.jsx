import React, { useState, useEffect } from 'react';
import './overview.css';
import API from "../../api/api";

const Overview = () => {
  const [stats, setStats] = useState({
    totalRequests: 0,
    requestsToday: 0,
    lastLog: 'Loading...',
    limit: 10000
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await API.get("/user/usage"); // your backend route

        setStats({
          totalRequests: res.data.TotalRequest,
          requestsToday: res.data.TodayRequests,
          lastLog: res.data.LastUsed
            ? new Date(res.data.LastUsed).toLocaleString()
            : "No logs yet",
            limit: res.data.limit
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);


  // Calculate percentage for the limit progress bar
  const usagePercentage = stats.limit > 0 ? (stats.totalRequests / stats.limit) * 100 : 0;

  if (isLoading) {
    return <div className="overview-loading">Loading your dashboard...</div>;
  }

  return (
    <div className="overview-container">
      <div className="overview-header">
        <h1>Overview</h1>
        <p>Monitor your API traffic and usage limits.</p>
      </div>

      {/* --- Top 3 Cards --- */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Requests</h3>
          <div className="stat-value">{stats.totalRequests.toLocaleString()}</div>
        </div>

        <div className="stat-card">
          <h3>Requests Today</h3>
          <div className="stat-value">{stats.requestsToday.toLocaleString()}</div>
        </div>

        <div className="stat-card">
          <h3>Last Log</h3>
          <div className="stat-value log-text">{stats.lastLog}</div>
        </div>
      </div>

      {/* --- Usage Limit Card --- */}
      <div className="limit-card">
        <div className="limit-header">
          <h3>API Usage Limit</h3>
          <span className="limit-numbers">
            {stats.totalRequests.toLocaleString()} / {stats.limit.toLocaleString()} Requests
          </span>
        </div>
        
        <div className="progress-bar-bg">
          <div 
            className={`progress-bar-fill ${usagePercentage > 85 ? 'warning' : ''}`} 
            style={{ width: `${Math.min(usagePercentage, 100)}%` }}
          ></div>
        </div>
        
        {usagePercentage > 85 && (
          <p className="limit-warning">You are approaching your API limit.</p>
        )}
      </div>
    </div>
  );
};

export default Overview;