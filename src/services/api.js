import axios from "axios";

const API_BASE_URL ="http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor for adding the bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 and we haven't retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/refresh`,
          { refreshToken }
        );
        const { accessToken } = response.data;

        localStorage.setItem("accessToken", accessToken);

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, logout the user
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // Redirect to login page or show login modal
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
