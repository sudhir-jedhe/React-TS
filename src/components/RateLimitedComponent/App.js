import React, { useState } from "react";
import useRateLimitedApi from "./useRateLimitedApi";
import { fetchData } from "./api"; // Your API function

const MyComponent = () => {
  const [data, setData] = useState(null);

  const limit = 10; // Maximum number of requests allowed within the interval
  const interval = 60000; // Interval (in milliseconds) within which requests are allowed

  const remainingRequests = useRateLimitedApi(fetchData, limit, interval);

  const handleClick = async () => {
    const newData = await fetchData();
    setData(newData);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={remainingRequests <= 0}>
        Fetch Data ({remainingRequests} remaining)
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MyComponent;
