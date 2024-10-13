// import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
// import Router from "next/router";

// // Create an axios instance
// const api = axios.create({
//   baseURL: `http://localhost:4000/api/v1`,
//   withCredentials: true, // Important for sending cookies
// });

// // Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     // The browser will automatically send httpOnly cookies
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as InternalAxiosRequestConfig & {
//       _retry?: boolean;
//     };

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // Attempt to refresh the token
//         await api.post("/auth/refresh-token");

//         // Retry the original request
//         return api(originalRequest);
//       } catch (refreshError) {
//         // If refresh fails, redirect to login
//         console.error("Failed to refresh token:", refreshError);
//         Router.push("/login");
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: `http://localhost:4000/api/v1`,
  withCredentials: true, // Important for sending cookies
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then(() => {
//             return api(originalRequest);
//           })
//           .catch((err) => {
//             return Promise.reject(err);
//           });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const response = await refreshAccessToken();
//         processQueue(null, response.data.accessToken);
//         return api(originalRequest);
//       } catch (refreshError) {
//         processQueue(refreshError as AxiosError, null);
//         return Promise.reject(refreshError);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/v1/auth/refresh-token", //         await api.post("/auth/refresh-token");

//       {},
//       { withCredentials: true }
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export default api;
