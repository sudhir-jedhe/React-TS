import React, { useState, useEffect } from "react";
import axios from "axios";

const RateLimitedComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [remainingRequests, setRemainingRequests] = useState(10); // Maximum number of requests allowed
  const [resetTime, setResetTime] = useState(0); // Time when the rate limit resets

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if remaining requests are available
        if (remainingRequests <= 0) {
          const timeLeft = Math.max(resetTime - Date.now(), 0);
          throw new Error(`Rate limit exceeded. Please wait ${timeLeft} ms.`);
        }

        setIsLoading(true);
        const response = await axios.get("https://api.example.com/data");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [remainingRequests, resetTime]);

  useEffect(() => {
    // Fetch rate limit data from API or set it statically
    const rateLimitData = {
      remainingRequests: 10,
      resetTime: Date.now() + 60000, // Rate limit resets after 1 minute
    };

    setRemainingRequests(rateLimitData.remainingRequests);
    setResetTime(rateLimitData.resetTime);
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h1>Data</h1>
          {/* Render your data here */}
        </div>
      )}
    </div>
  );
};

export default RateLimitedComponent;
