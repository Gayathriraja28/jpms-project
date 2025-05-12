import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
const response = await fetch('/api/jobs'); // Or your actual endpoint
const data = await response.json();
setJobs(data);
