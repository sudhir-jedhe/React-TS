import { useState, useRef } from "react";

const TOTAL_TIME = 5;

export const useTimer = (totalTime = TOTAL_TIME) => {
  const [seconds, setSeconds] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  const start = () => {
    setIsRunning(true);
    ref.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          // reset timer
          setIsRunning(false);
          return totalTime;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    if (!isRunning) {
      return;
    }
    clearInterval(ref.current);
    setIsRunning(false);
    setSeconds(totalTime);
  };

  return {
    seconds,
    isRunning,
    start,
    stop,
  };
};



import {useTimer} from './useTimer';

const TOTAL_TIME = 5;

export default function App() {
  const {isRunning, seconds, start, stop} = useTimer();
  return (
    <>
   <div>{!isRunning ?"No timer running" : seconds}</div>
   <button onClick={start}>Start</button>
   <button onClick={stop}>Stop</button>
   </>
  );