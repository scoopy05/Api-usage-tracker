import React, { useState, useEffect } from 'react';
import './usage.css';
import API from "../../api/api";

const Usage = () => {
  const [stats, setStats] = useState({
    totalRequests: 0,
    requestsToday: 0,
  });

  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsageData = async () => {
      try {
        // Call both APIs
        const usageRes = await API.get("/user/usage");
        const logsRes = await API.get("/user/logs");

        setStats({
          totalRequests: usageRes.data.TotalRequest,
          requestsToday: usageRes.data.TodayRequests,
        });

        setLogs(logsRes.data);

        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch logs", error);
        setIsLoading(false);
      }
    };

    fetchUsageData();
  }, []);

  // Helper function to color-code the HTTP methods
  const getMethodColor = (method) => {
    switch(method) {
      case 'GET': return 'method-get';
      case 'POST': return 'method-post';
      case 'DELETE': return 'method-delete';
      default: return 'method-default';
    }
  };

  // Helper function to color-code the status codes
  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return 'status-success';
    if (status >= 400 && status < 500) return 'status-warning';
    return 'status-error';
  };

  if (isLoading) {
    return <div className="usage-loading">Loading your logs...</div>;
  }

  return (
    <div className="usage-container">
      <div className="usage-header">
        <h1>Usage Analytics</h1>
        <p>Review your high-level traffic and detailed request logs.</p>
      </div>

      {/* --- Summary Cards --- */}
      <div className="usage-stats-row">
        <div className="usage-stat-card">
          <h3>Total Requests</h3>
          <div className="usage-stat-value">{stats.totalRequests.toLocaleString()}</div>
        </div>
        <div className="usage-stat-card">
          <h3>Requests Today</h3>
          <div className="usage-stat-value">{stats.requestsToday.toLocaleString()}</div>
        </div>
      </div>

      {/* --- Detailed Logs Table --- */}
      <div className="logs-section">
        <div className="logs-header">
          <h3>Recent Request Logs</h3>
        </div>
        
        <div className="table-container">
          <table className="logs-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Status</th>
                <th>Latency</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
  {logs.map((log) => (
    <tr key={log._id}>
      <td>
        <span className={`method-badge ${getMethodColor(log.method)}`}>
          {log.method}
        </span>
      </td>
      <td className="endpoint-text">{log.endpoint}</td>
      <td>
        <span className={`status-badge ${getStatusColor(log.status)}`}>
          {log.status}
        </span>
      </td>
      <td className="latency-text">{log.latency}ms</td>
      <td className="time-text">
        {new Date(log.timestamp).toLocaleString()}
      </td>
    </tr>
  ))}
</tbody>
          </table>
          
          {logs.length === 0 && (
            <div className="no-logs-message">No API requests found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usage;