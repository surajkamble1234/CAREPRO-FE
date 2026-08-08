import axios from 'axios';

// Environment Base URL (Fallback to local Express API)
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request Interceptor: Attach JWT Bearer Token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('carepro_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Token Refresh / 401 Unauthenticated Errors
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originalRequest = error.config;

    // Only attempt token refresh for non-login requests
    if (error.response?.status === 401 && !originalRequest.url.includes('/auth/login') && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('carepro_refresh_token');
        if (refreshToken) {
          const res = await axios.post(`${BASE_URL}/auth/refresh-token`, { refreshToken });
          const { accessToken, refreshToken: newRefreshToken } = res.data.data;
          
          localStorage.setItem('carepro_access_token', accessToken);
          localStorage.setItem('carepro_refresh_token', newRefreshToken);

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshErr) {
        localStorage.removeItem('carepro_access_token');
        localStorage.removeItem('carepro_refresh_token');
      }
    }

    return Promise.reject(error.response?.data || error);
  }
);
