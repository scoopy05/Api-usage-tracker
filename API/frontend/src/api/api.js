import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
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