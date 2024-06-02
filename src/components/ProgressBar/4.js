
// list of progress bars in React that fill up gradually in sequence, one at a time:

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fillUpBars = () => {
      const newBars = Array.from({ length: 5 }, (_, index) => ({ id: index, progress: 0 }));
      setBars(newBars);
    };

    fillUpBars();

    return () => {
      // Clean up any ongoing processes
    };
  }, []);

  useEffect(() => {
    const fillUpNextBar = () => {
      if (activeIndex < bars.length) {
        const interval = setInterval(() => {
          setBars(prevBars => {
            const updatedBars = [...prevBars];
            if (updatedBars[activeIndex].progress < 100) {
              updatedBars[activeIndex].progress += 1;
            } else {
              clearInterval(interval);
              setActiveIndex(prevIndex => prevIndex + 1);
            }
            return updatedBars;
          });
        }, 100);
      }
    };

    fillUpNextBar();

    return () => {
      // Clean up any ongoing processes
    };
  }, [activeIndex, bars]);

  return (
    <div>
      {bars.map(bar => (
        <ProgressBar key={bar.id} progress={bar.progress} />
      ))}
    </div>
  );
};

export default ProgressBarsList;
