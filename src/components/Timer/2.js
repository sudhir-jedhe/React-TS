import React, { useState, useEffect } from "react";

const INITIAL_COUNTDOWN = 600;

const handleInitialState = () => {
  const storedTime = localStorage.getItem("elapsedTime");
  if (storedTime) {
    return parseInt(storedTime);
  }
  return INITIAL_COUNTDOWN;
};

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(handleInitialState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => {
        if (prevElapsedTime === 0) {
          return INITIAL_COUNTDOWN;
        }
        localStorage.setItem("elapsedTime", prevElapsedTime - 1);
        return prevElapsedTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div>
      {`${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`}
    </div>
  );
};

export default App;
