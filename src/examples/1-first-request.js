import axios from "axios";
import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again

// API endpoint URL for fetching product data
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  // Function to fetch data from the specified API endpoint
  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get(url);

      // Extract data from the response
      const data = response.data;

      // Log the fetched data to the console
      console.log(data);
    } catch (error) {
      // Log any errors that occur during the request
      console.log(error.response);
    }
  };

  // Use useEffect to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Render the component with a heading
  return <h2 className="text-center">First Request</h2>;
};

export default FirstRequest;
