import React, { useState } from "react";
import "./Counter.css";
import LabelContainer from "./LabelContainer";
import ButtonContainer from "./ButtonContainer";
const initialCount = 0;

function Counter() {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(initialCount);
  };

  const incrementBy = () => {
    // console.log("original", count);
    // setCount(count + 1);
    // console.log("increment by 1", count);
    // setCount(count + 1);
    // console.log("increment by 1", count);

    console.log("original", count);
    setCount((count) => count + 1);
    console.log("increment by 1", count);
    setCount((count) => count + 1);
    console.log("increment by 1", count);
  };

  return (
    <div className="counterContainer">
      <LabelContainer value={count} />
      <ButtonContainer
        increment={increment}
        decrement={decrement}
        reset={reset}
        incrementBy={incrementBy}
      />
    </div>
  );
}

export default Counter;
