import React, { useState, useEffect } from 'react';
import Toasts from './Toasts';

const App = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (title, icon, position) => {
    setToasts((prevToasts) => [...prevToasts, { title, icon, position }]);
  };

  useEffect(() => {
    // Example usage: Show a toast after 2 seconds
    const timeout = setTimeout(() => {
      showToast('Notification', 'ℹ️', 'top-right');
    }, 2000);

    // Clean up timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <Toasts toasts={toasts} />
    </div>
  );
};

export default App;
