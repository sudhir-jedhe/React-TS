import React, { useState, useEffect } from 'react';

const Countdown = ({ minutes }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const endTime = new Date();
      endTime.setMinutes(endTime.getMinutes() + minutes);

      const intervalId = setInterval(() => {
        const now = new Date();
        const remainingTime = Math.max((endTime - now) / 1000, 0);

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = Math.floor(remainingTime % 60);

        setTime({ hours, minutes, seconds });

        if (remainingTime === 0) {
          setIsRunning(false);
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isRunning, minutes]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="countdown">
      <div className="time">
        {String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
      </div>
      {!isRunning && (
        <button onClick={handleStart}>Start</button>
      )}
      {isRunning && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Countdown;
