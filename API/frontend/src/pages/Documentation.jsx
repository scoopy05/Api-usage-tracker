import React from "react";
import "./documentation.css";

const Documentation = () => {
  return (
    <div className="docs-container">
      <h1 className="docs-title">API Documentation</h1>

     
      <section className="docs-section">
        <h2>Example Request</h2>
        <pre className="docs-pre">
{`fetch("https://api-usage-tracker.onrender.com/api/random-jokes", {
  method: "GET",
  headers: {
    "x-api-key": "YOUR_API_KEY"
  }
})
.then(res => res.json())
.then(data => console.log(data));`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Base URL</h2>
        <code className="docs-code">https://api-usage-tracker.onrender.com/api</code>
      </section>

      <section className="docs-section">
        <h2>Authentication</h2>
        <p>All requests require your API key in the header:</p>
        <pre className="docs-pre">
{`x-api-key: YOUR_API_KEY`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Random Joke API</h2>
        <p><strong>Endpoint:</strong> GET /api/random-jokes</p>

        <h4>Example Response</h4>
        <pre className="docs-pre">
{`{
  "joke": "Why do programmers hate nature? Too many bugs."
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Current Time API</h2>
        <p><strong>Endpoint:</strong> GET /api/time</p>

        <pre className="docs-pre">
{`{
  "time": "2026-04-03T12:00:00.000Z"
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Random Password API</h2>
        <p><strong>Endpoint:</strong> GET /api/random-passwords</p>

        <pre className="docs-pre">
{`{
  "password": "aB3kLm9PqZ"
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Base64 Encode API</h2>
        <p><strong>Endpoint:</strong> GET /api/base64-encode?text=hello</p>

        <pre className="docs-pre">
{`{
  "encoded": "aGVsbG8="
}`}
        </pre>
      </section>

      <section className="docs-section">
        <h2>Status Codes</h2>
        <ul className="docs-ul">
          <li>200 — Success</li>
          <li>400 — Bad Request</li>
          <li>401 — API Key Missing</li>
          <li>403 — Invalid API Key</li>
          <li>500 — Server Error</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentation;