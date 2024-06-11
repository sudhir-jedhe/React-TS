import React, { useState } from "react";

export const useHistory = (initialState) => {
  const [state, setState] = useState([initialState]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex < state.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const clearHistory = () => {
    setState([initialState]);
    setCurrentIndex(0);
  };

  const pushState = (newState) => {
    setState((prevState) => {
      const newStateArray = [...prevState.slice(0, currentIndex + 1), newState];
      setCurrentIndex(newStateArray.length - 1);
      return newStateArray;
    });
  };

  return { state: state[currentIndex], pushState, undo, redo, clearHistory };
};



import React, { useState } from "react";
import { useHistory } from "./useHistory";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const history = useHistory(count);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    history.pushState(count + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    history.pushState(count - 1);
  };

  const handleUndo = () => {
    history.undo();
    setCount(history.state);
  };

  const handleRedo = () => {
    history.redo();
    setCount(history.state);
  };

  const handleClearHistory = () => {
    history.clearHistory();
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default ExampleComponent;
