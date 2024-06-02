
// list of progress bars in React that fill up gradually concurrently, with a limit of 3 bars, and allows for pausing and resuming:

import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#eee', borderRadius: '5px', padding: '3px' }}>
      <div style={{ width: `${progress}%`, backgroundColor: '#007bff', borderRadius: '5px', height: '20px' }}></div>
    </div>
  );
};

const ProgressBarsList = () => {
  const [bars, setBars] = useState([]);
  const [progressIntervals, setProgressIntervals] = useState([]);

  useEffect(() => {
    const startProgress = () => {
      const newBars = [];
      const newProgressIntervals = [];

      for (let i = 0; i < 3; i++) {
        newBars.push({ id: i, progress: 0 });
        newProgressIntervals.push(setInterval(() => {
          setBars(prevBars => {
            const updatedBars = [...prevBars];
            if (updatedBars[i].progress < 100) {
              updatedBars[i].progress += 1;
            }
            return updatedBars;
          });
        }, 100));
      }

      setBars(newBars);
      setProgressIntervals(newProgressIntervals);
    };

    startProgress();

    return () => {
      progressIntervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const handlePauseResume = () => {
    if (progressIntervals.length > 0) {
      progressIntervals.forEach(interval => clearInterval(interval));
      setProgressIntervals([]);
    } else {
      const newProgressIntervals = bars.map(bar => setInterval(() => {
        setBars(prevBars => {
          const updatedBars = [...prevBars];
          if (bar.progress < 100) {
            updatedBars.find(b => b.id === bar.id).progress += 1;
          }
          return updatedBars;
        });
      }, 100));
      setProgressIntervals(newProgressIntervals);
    }
  };

  return (
    <div>
      <button onClick={handlePauseResume}>{progressIntervals.length > 0 ? 'Pause' : 'Resume'}</button>
      {bars.map(bar => (
        <ProgressBar key={bar.id} progress={bar.progress} />
      ))}
    </div>
  );
};

export default ProgressBarsList;
