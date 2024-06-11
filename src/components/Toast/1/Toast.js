import React, { useState, useEffect } from 'react';

const Toast = ({ title, icon, position, onClose }) => {
  return (
    <div className={`toast ${position}`}>
      <div className="toast-header">
        <span className="icon">{icon}</span>
        <strong className="mr-auto">{title}</strong>
        <button type="button" className="close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

const Toasts = ({ toasts }) => {
  const [displayedToasts, setDisplayedToasts] = useState([]);

  useEffect(() => {
    setDisplayedToasts(toasts);
  }, [toasts]);

  const handleClose = (index) => {
    setDisplayedToasts((prevToasts) => prevToasts.filter((_, i) => i !== index));
  };

  return (
    <div className="toasts-container">
      {displayedToasts.map((toast, index) => (
        <Toast
          key={index}
          title={toast.title}
          icon={toast.icon}
          position={toast.position}
          onClose={() => handleClose(index)}
        />
      ))}
    </div>
  );
};

export default Toasts;
