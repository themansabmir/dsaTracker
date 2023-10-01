import axios from "axios";

const api = axios.create({
  baseURL: "https://dsa-tracker-backend.vercel.app/api",
  headers: {
    token: localStorage.getItem("token"),
  },
});

api.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem("token");
  return config;
});
export default api;
