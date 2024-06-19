import React, { useState, useRef, useEffect } from "react";

import React, { useState, useRef, useEffect } from "react";
export default function usePrevious(count) {
  const prevRef = useRef(count);
  const [state, setState] = useState(prevRef.current);
  useEffect(() => {
    setState(prevRef.current);
    prevRef.current = count;
  }, [count]);
  return state;
}


const usePrevious = value => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = usePrevious(value);

  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Counter />
);