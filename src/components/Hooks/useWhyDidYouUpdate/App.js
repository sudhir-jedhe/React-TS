import React, { useState, useEffect, useRef } from "react";

import User from "./User";

import useWhyDidYouUpdate from "./useWhyDidYouUpdate";

const Counter = React.memo((props) => {
  useWhyDidYouUpdate("Counter", props);
  return <div style={props.style}>{props.count}</div>;
});

const counterStyle = {
  fontSize: "3rem",
  color: "red",
};

const App = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(0);

  return (
    <div>
      <div className="counter">
        <Counter count={count} style={counterStyle} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <User userId={userId} onClick={() => setUserId(userId + 1)} />
    </div>
  );
};

export default App;
