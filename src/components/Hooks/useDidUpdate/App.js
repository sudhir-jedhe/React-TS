import React, { useState, useRef, useEffect } from "react";

import useDidUpdate from "./useDidUpdate";

export default function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useDidUpdate(() => {
    // this callback should only be invoked when count is incremented
    // unlike useEffect that invokes the callback on mount too

    if (ref.current !== count) {
      console.log("Called", count);
    }
  }, [count]);

  const handleClick = () => setCount((state) => state + 1);

  return (
    <main>
      <p>Count is {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </main>
  );
}
