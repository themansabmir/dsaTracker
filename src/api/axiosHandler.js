import axios from "axios";

const api = axios.create({
  baseURL: "https://dsa-tracker-backend.vercel.app/api",
  headers: {
    token: localStorage.getItem("token"),
  },
});

export default api;
