import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(100);

  const timeout = useRef(0);
  useEffect(() => {
    timer.current = setTimeout(function () {
      if (timer > 0) setTimer((e) => e - 1);
      else setTimer(0);
    }, 1000);
    return () => {
      clearTimeout(timer.current);
    };
  }, [timer]);

  return (
    <div style={{ width: "80vw" }}>
      <p>{timer} Seconds</p>
      <div className="timer" style={{ width: `${100 - timer}%` }}></div>
    </div>
  );
}

/******** */
// .timer{
//     height: 10px;
//     border:1px solid rgba(0,0,0,0.3);
//     border-radius: 5px;
//   background: #253B76;
//   }
/*************/
