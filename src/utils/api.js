import axios from 'axios';

// Load API base URL from environment variables
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

// List of endpoints that don't require authentication
const publicEndpoints = ['/login/', '/signup/', '/serice-type/'];

// Create an Axios instance
const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token);
    } else {
      promise.reject(error);
    }
  });
  failedQueue = [];
};

// Intercept requests to include the access token
api.interceptors.request.use(
  (config) => {
    // Skip adding token if the URL is in the publicEndpoints list
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      config.url.includes(endpoint)
    );
    if (!isPublicEndpoint) {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and other errors
api.interceptors.response.use(
  (response) => {
    // Pass through successful responses without modification
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the request URL is part of the public endpoints
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      originalRequest.url.includes(endpoint)
    );

    // If it's a public endpoint, skip further processing and return the response
    if (isPublicEndpoint) {
      return Promise.reject(error); // Reject the error to continue handling in the UI
    }

    // Handle 401 Unauthorized errors for protected endpoints
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (isRefreshing) {
        // If a refresh is already in progress, queue the request for later
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest); // Retry the original request with the new token
          })
          .catch((err) => Promise.reject(err)); // Reject if there was an error in the queue
      }

      isRefreshing = true;

      try {
        // Attempt to refresh the access token using the refresh token
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) {
          throw new Error('No refresh token available'); // Ensure a refresh token exists
        }

        // Request the new access token using the refresh token
        const response = await axios.post(`${apiBaseUrl}/token/refresh/`, {
          refresh: refreshToken
        });
        const { access } = response.data;

        // Save the new access token in local storage
        localStorage.setItem('access_token', access);
        processQueue(null, access_token); // Retry any failed requests in the queue

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (err) {
        // Handle refresh token failure: clear stored tokens and redirect to login
        processQueue(err, null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Optionally redirect to the login page here
        return Promise.reject(err);
      } finally {
        isRefreshing = false; // Reset the refresh flag
      }
    }

    // Reject other types of errors (e.g., 404, 500, etc.)
    return Promise.reject(error);
  }
);

export default api;