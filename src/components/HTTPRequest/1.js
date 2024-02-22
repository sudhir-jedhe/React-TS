import React, { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Function to handle HTTP GET request
  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.example.com/data");
      setData(response.data);
      setError(null);
    } catch (error) {
      console.error("GET Error:", error);
      setError("Failed to fetch data");
    }
  };

  // Function to handle HTTP POST request
  const postData = async () => {
    try {
      const response = await axios.post("https://api.example.com/data", {
        /* data */
      });
      console.log("POST Response:", response);
      // Handle success
    } catch (error) {
      console.error("POST Error:", error);
      setError("Failed to post data");
    }
  };

  // Function to handle HTTP PUT request
  const updateData = async () => {
    try {
      const response = await axios.put("https://api.example.com/data/1", {
        /* updated data */
      });
      console.log("PUT Response:", response);
      // Handle success
    } catch (error) {
      console.error("PUT Error:", error);
      setError("Failed to update data");
    }
  };

  // Function to handle HTTP DELETE request
  const deleteData = async () => {
    try {
      const response = await axios.delete("https://api.example.com/data/1");
      console.log("DELETE Response:", response);
      // Handle success
    } catch (error) {
      console.error("DELETE Error:", error);
      setError("Failed to delete data");
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={deleteData}>Delete Data</button>
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          Data:
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
