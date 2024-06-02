//  build a list of progress bars that fill up gradually when they are added to the page, you can use React's state management to dynamically add progress bars and update their progress over time. 
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

  useEffect(() => {
    const addProgressBar = () => {
      setBars(prevBars => [...prevBars, { id: prevBars.length, progress: 0 }]);
    };

    const fillUpBars = () => {
      const interval = setInterval(() => {
        setBars(prevBars => {
          return prevBars.map(bar => ({
            ...bar,
            progress: bar.progress < 100 ? bar.progress + 1 : 100
          }));
        });
      }, 100);
      
      return () => clearInterval(interval);
    };

    addProgressBar();

    const timeout = setTimeout(fillUpBars, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {bars.map(bar => (
        <ProgressBar key={bar.id} progress={bar.progress} />
      ))}
    </div>
  );
};

export default ProgressBarsList;
