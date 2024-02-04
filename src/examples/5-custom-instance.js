// Import the useEffect hook from React
import { useEffect } from "react";

// Import the custom Axios instance (authFetch) and the default Axios instance (axios)
import authFetch from "../axios/custom";
import axios from "axios";

// URL for a random user API
const randomUserUrl = "https://randomuser.me/api";

// Functional component named CustomInstance
const CustomInstance = () => {
  // Function to fetch data using the custom and default Axios instances
  const fetchData = async () => {
    // Use the custom Axios instance (authFetch) to make a request with specific configurations
    const response1 = await authFetch("/react-store-products");
    console.log(response1);

    // Use the default Axios instance to make a request to a different API
    const response2 = await axios.get(randomUserUrl);
    console.log(response2);
  };

  // Use the useEffect hook to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render the component with a heading
  return <h2 className="text-center">Custom Instance</h2>;
};

// Export the CustomInstance component
export default CustomInstance;

/*Creating a custom instance in Axios allows you to have a separate instance with its own configuration settings, headers, and defaults. This can be useful when you want different parts of your application to have distinct settings or when working with multiple APIs.*/

/* axios.create() is used to create a new instance of Axios.
The baseURL, timeout, and headers are specific to the custom instance.
The custom instance (customAxios) is used to make requests with its own configuration.
Another custom instance (anotherCustomAxios) is created with a different configuration for a different API.*/
