// lib/axios.ts
import axios from "axios";
import { getCookie } from "@/utilities/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set this in your .env.local
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }

    // Set Content-Type based on data type
    if (request.data instanceof FormData) {
      // For FormData (file uploads), let the browser set the Content-Type with boundary
      delete request.headers["Content-Type"];
    } else {
      // For JSON data, set Content-Type to application/json
      request.headers["Content-Type"] = "application/json";
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;