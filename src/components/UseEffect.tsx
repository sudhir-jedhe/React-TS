import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("unMount");
    };
  }, [visible]);

  const Increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const toggleVisibleCount = () => {
    setVisible((visible) => !visible);
  };
  return (
    <div>
      <div>{visible ? `CountByUseEffect: ${count}` : <></>}</div>
      <button onClick={Increment}>useEffectCountIncrement</button>
      <button onClick={toggleVisibleCount}>toggleVisibleCount</button>
    </div>
  );
}

export default UseEffect;
