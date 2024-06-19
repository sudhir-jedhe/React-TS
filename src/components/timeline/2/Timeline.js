import React from 'react';
import './Timeline.css'; // Import CSS for styling (create this file next)

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="date">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
