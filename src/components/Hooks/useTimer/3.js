import { useState, useRef } from "react";
const useTimer = (
  running: Boolean,
  start: Boolean,
  stop: Boolean,
  minutes: String,
  setStart: () => {},
  setRunning: () => {}
) => {
  const [timeLeft, setTimeLeft] = useState(60 * minutes);
  const showTimer = () => {
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft <= 0) {
      setStart(false);
      setRunning(true);
      setTimeout(() => {
        setTimeLeft(60 * minutes);
      }, 1000);
    }
  };
  return (
    <div>
      {start && showTimer()}
      <p>{timeLeft}</p>
      {running && <p>No Timer Running” on the screen.</p>}
    </div>
  );
};

export default useTimer;




import React, { useState } from 'react';
import useTimer from './useTimer';
export default function App() {
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [running, setRunning] = useState(false);
  const handleStart = () => {
    setStart(true);
    setStop(false);
    setRunning(false);
  };
  const handleStop = () => {
    setStop(true);
    setStart(false);
  };
  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-around', marginTop: 30 }}
    >
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      {useTimer(running, start, stop, 1, setStart, setRunning)}
    </div>
  );
}
