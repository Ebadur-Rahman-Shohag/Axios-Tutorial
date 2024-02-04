// Import the Axios library
import axios from 'axios';

// Create a custom Axios instance named authFetch
const authFetch = axios.create({
  // Set a base URL for all requests made with this instance
  baseURL: 'https://course-api.com',

  // Set a default header for all requests made with this instance
  headers: {
    Accept: 'application/json', // Specify that the client can process JSON responses
  },
});

// The authFetch instance now has its own baseURL and headers

// Export the authFetch instance as the default export of this module
export default authFetch;
