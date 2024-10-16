import axios from "axios";

const isBrowser = typeof window !== "undefined"

export const coscoApi = axios.create({
  baseURL: process.env.GATSBY_API_URL ?? "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a cada solicitud
coscoApi.interceptors.request.use(
  (config) => {
    const token = isBrowser && localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
