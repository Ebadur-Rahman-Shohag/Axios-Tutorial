// Import the Axios library
import axios from "axios";

// Set a global default header for all Axios requests
// This header specifies that the client can process JSON responses
axios.defaults.headers.common["Accept"] = "application/json";

// The default headers are applied to all subsequent Axios requests made in the application

// This line effectively ensures that the "Accept" header is set to "application/json"
// for all requests, simplifying the process of handling JSON responses in the application

// Note: Be cautious about setting global defaults, as they can impact the behavior of
// different parts of your application. Make sure it aligns with your application's needs.

// Example usage of Axios with global defaults
/*
axios.get("https://api.example.com/data")
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
  */
