//  counter component in React with a history of values and the ability to undo and redo actions:

import React, { useState } from 'react';

const CounterWithHistory = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), newCount]);
    setHistoryIndex(prevIndex => prevIndex + 1);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), newCount]);
    setHistoryIndex(prevIndex => prevIndex + 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setCount(history[historyIndex - 1]);
      setHistoryIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setCount(history[historyIndex + 1]);
      setHistoryIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={handleUndo} disabled={historyIndex <= 0}>Undo</button>
        <button onClick={handleRedo} disabled={historyIndex === history.length - 1}>Redo</button>
      </div>
      <div>
        Count: {count}
      </div>
    </div>
  );
};

export default CounterWithHistory;


import React from 'react';
import CounterWithHistory from './CounterWithHistory';

const App = () => {
  return (
    <div>
      <h1>Counter with History</h1>
      <CounterWithHistory />
    </div>
  );
};

export default App;
