import { useState, useEffect } from "react";
import axios from "axios";

// API endpoint URL for fetching dad jokes
const url = "https://icanhazdadjoke.com/";
//Accept: Informs the server about the types of media that the client can process
// Accept : 'application/json'

const Headers = () => {
  // State to store the fetched dad joke
  const [joke, setJoke] = useState("random dad joke");

  // Function to fetch a dad joke from the API
  const fetchDadJoke = async () => {
    try {
      // Make a GET request to the dad joke API with the specified headers
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json", // Specify that the client can process JSON
        },
      });

      // Update the state with the fetched dad joke
      setJoke(data.joke);
    } catch (error) {
      // Log any errors that occur during the request
      console.log(error.data);
    }
  };

  // Render the component
  return (
    <section className="section text-center">
      {/* Button to trigger fetching a random dad joke */}
      <button className="btn" onClick={fetchDadJoke}>
        Get Random Joke
      </button>

      {/* Display the fetched dad joke */}
      <p className="dad-joke">{joke}</p>
    </section>
  );
};

export default Headers;

/*In Axios, the second argument in axios.get(url, {}) and the third argument in requests with data, such as axios.post(url, { data }, {}), are used for providing configuration options to the HTTP request. These configuration options allow you to customize various aspects of the request, such as headers, timeout, authentication, and more. */

/*Headers are additional pieces of information that are sent along with the request to the server. They provide metadata about the request or response, such as the content type of the request body, the authentication token, or the software client making the request. */
