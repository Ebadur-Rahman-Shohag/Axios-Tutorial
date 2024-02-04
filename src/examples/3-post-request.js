import { useState } from "react";
import axios from "axios";

// API endpoint URL
const url = "https://course-api.com/axios-tutorial-post";

const PostRequest = () => {
  // State to hold the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make a POST request to the specified URL with name and email data
      const response = await axios.post(url, { name: name, email: email });

      // Log the data from the response (the created post data)
      console.log(response.data);
    } catch (error) {
      // Log any errors that occur during the request
      console.log(error.response);
    }
  };

  return (
    <section>
      {/* Form Section */}
      <h2 className="text-center">Post Request</h2>
      <form className="form" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
