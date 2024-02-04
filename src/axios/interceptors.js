// Import the Axios library
import axios from 'axios';

// Create a custom Axios instance named authFetch with a specific baseURL
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

// Add a request interceptor to modify requests before they are sent
authFetch.interceptors.request.use(
  (request) => {
    // Set a common header for all requests to accept JSON responses
    request.headers['Accept'] = 'application/json';

    // Log a message when a request is sent
    console.log('Request sent:', request);

    // Return the modified request to continue the request chain
    return request;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses before they are returned to the application
authFetch.interceptors.response.use(
  (response) => {
    // Log a message when a response is received
    console.log('Got response:', response);

    // Return the response to the application
    return response;
  },
  (error) => {
    // Log the response error
    console.log('Response error:', error.response);

    // Check if the response status is 404 and handle it
    if (error.response.status === 404) {
      console.log('NOT FOUND');
      // Perform specific actions for 404 errors
    }

    // Return the error to the application
    return Promise.reject(error);
  }
);

// Export the authFetch instance as the default export of this module
export default authFetch;
