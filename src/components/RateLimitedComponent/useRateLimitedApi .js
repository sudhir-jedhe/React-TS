import { useState, useEffect } from "react";

const useRateLimitedApi = (apiFunction, limit, interval) => {
  const [remainingRequests, setRemainingRequests] = useState(limit);
  const [resetTime, setResetTime] = useState(Date.now());

  useEffect(() => {
    const handleRequest = async () => {
      if (remainingRequests <= 0) {
        const now = Date.now();
        const timeSinceReset = now - resetTime;
        if (timeSinceReset < interval) {
          // Wait until the interval resets
          await new Promise((resolve) =>
            setTimeout(resolve, interval - timeSinceReset)
          );
        }
        setRemainingRequests(limit);
        setResetTime(Date.now());
      }
      setRemainingRequests((prev) => prev - 1);
      return apiFunction();
    };

    const fetchData = async () => {
      try {
        return await handleRequest();
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [apiFunction, remainingRequests, limit, interval, resetTime]);

  return remainingRequests;
};

export default useRateLimitedApi;
