import axios from "axios";

const API = axios.create({
  baseURL: "https://api-usage-tracker.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  const apikey = localStorage.getItem("apikey");

  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  if (apikey) {
    req.headers["x-api-key"] = apikey;
  }

  return req;
});

export default API;