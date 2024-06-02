import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Progress Bar Demo</h1>
      <ProgressBar percentage={progress} />
      <p>Progress: {progress}%</p>
    </div>
  );
};

export default App;



import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', padding: '3px' }}>
      <div style={{ width: `${percentage}%`, backgroundColor: '#007bff', borderRadius: '5px', height: '20px' }}></div>
    </div>
  );
};

export default ProgressBar;
