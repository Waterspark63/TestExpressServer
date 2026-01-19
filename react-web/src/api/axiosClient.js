import axios from "axios";
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "https://testexpressserver.onrender.com/",
    headers: { "Content-Type": "application/json" },
});
// insert JWT token if available
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
export default axiosClient;