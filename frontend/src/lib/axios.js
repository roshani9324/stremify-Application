import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "https://stremify-application.onrender.com/api"
    : import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
