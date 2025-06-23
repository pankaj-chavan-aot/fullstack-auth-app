// // src/lib/axios.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3000", // NestJS backend port
//   withCredentials: true,            // cookie साठी आवश्यक
// });

// export default api;


import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  withCredentials: true,                
});

export default api;
