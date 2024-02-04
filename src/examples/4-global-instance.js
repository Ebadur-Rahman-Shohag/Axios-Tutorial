import { useEffect } from "react";
import axios from "axios";

// URLs for API endpoints
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  // Function to fetch data from two different API endpoints
  const fetchData = async () => {
    try {
      // Make a GET request to the first API endpoint
      const response1 = await axios(productsUrl);

      // Log the data from the responses to the console
      console.log(response1);

      // Make a GET request to the second API endpoint
      const response2 = await axios(randomUserUrl);

      // Log the data from the responses to the console
      console.log(response2);
    } catch (error) {
      // Log any errors that occur during the requests
      console.log(error.response1);
      console.log(error.response2);
    }
  };

  // Use useEffect to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Render the component with a heading
  return <h2 className="text-center">Global Instance</h2>;
};

export default GlobalInstance;

/*
While using a default Axios instance with global defaults can be convenient, there are some potential downsides and considerations:

1. Global Impact:
Global defaults affect all Axios requests made throughout your application. This can lead to unintended consequences if, for example, you change a default setting and it affects other parts of your application that were relying on the previous default.

2. Lack of Flexibility:
In some cases, different parts of your application may need to make requests to different APIs with different configurations. Using a global default instance might limit the flexibility to adapt settings on a per-request basis.

3. Testing Challenges:
Global defaults can make it challenging to isolate and test specific components or modules. Test scenarios might be affected by the global defaults, and it may require additional effort to mock or reset configurations during testing.

4. Potential for Overwriting:
If multiple components or libraries in your application attempt to modify global defaults, there could be conflicts. One component might unintentionally overwrite or interfere with the settings of another.

5. Security Concerns:
Storing sensitive information like access tokens in global defaults can pose security risks. If an attacker gains access to your JavaScript code, they may be able to extract sensitive information stored in global defaults.

6. Code Readability:
While global defaults can reduce the verbosity of your code, they might make it less obvious where certain configurations are applied. This could affect code readability and maintainability, especially for larger projects.

7. Dependency Bloat:
Including the entire Axios library for a default instance might introduce unnecessary code bloat if you only need a subset of Axios features. In some scenarios, a more lightweight HTTP library might be sufficient.

To mitigate these downsides, consider alternative strategies like creating multiple Axios instances for different parts of your application, or using a configuration approach that allows for more fine-grained control over requests. Always be mindful of the trade-offs and choose an approach that best fits the specific requirements and architecture of your project. */
