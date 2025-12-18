import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token for protected APIs
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    const publicRoutes = ["/api/signup", "/api/login"];

    const isPublicRoute = publicRoutes.some(route =>
      config.url?.includes(route)
    );

    if (token && !isPublicRoute) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
