// Import the useEffect hook from React
import { useEffect } from 'react';

// Import the custom Axios instance with interceptors (authFetch)
import authFetch from '../axios/interceptors';

// URL for fetching product data
const url = 'https://course-api.com/react-store-products';

// Functional component named Interceptors
const Interceptors = () => {
  // Function to fetch data using the custom Axios instance with interceptors
  const fetchData = async () => {
    try {
      // Use the authFetch instance to make a request with interceptors
      const response = await authFetch('/react-store-products');

      // Log the response data to the console
      console.log(response.data);
    } catch (error) {
      // Handle errors if any occur during the request
      console.error('Error:', error);
    }
  };

  // Use the useEffect hook to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render the component with a heading
  return <h2 className='text-center'>Interceptors</h2>;
};

// Export the Interceptors component
export default Interceptors;
