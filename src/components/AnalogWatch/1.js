import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minuteDeg = time.getMinutes() * 6;
  const secondDeg = time.getSeconds() * 6;

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '2px',
          height: '40px',
          backgroundColor: 'black',
          transformOrigin: '50% 100%',
          transform: `rotate(${hourDeg}deg) translate(-50%, -100%)`,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '2px',
          height: '60px',
          backgroundColor: 'black',
          transformOrigin: '50% 100%',
          transform: `rotate(${minuteDeg}deg) translate(-50%, -100%)`,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '1px',
          height: '70px',
          backgroundColor: 'red',
          transformOrigin: '50% 100%',
          transform: `rotate(${secondDeg}deg) translate(-50%, -100%)`,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'black',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
