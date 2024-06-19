import React from 'react';
import './Timeline.css'; // Example CSS for timeline styling

// Example data for timeline entries
const timelineEntries = [
  { id: 1, type: 'info', message: 'Informational message' },
  { id: 2, type: 'warning', message: 'Warning: Something might go wrong' },
  { id: 3, type: 'success', message: 'Task successfully completed' },
  { id: 4, type: 'error', message: 'Error: Task failed to complete' },
  { id: 5, type: 'loading', message: 'Loading data...' }
];

// Timeline Entry component
const TimelineEntry = ({ type, message, index }) => {
  let iconClass;
  switch (type) {
    case 'info':
      iconClass = 'fas fa-info-circle text-info';
      break;
    case 'warning':
      iconClass = 'fas fa-exclamation-triangle text-warning';
      break;
    case 'success':
      iconClass = 'fas fa-check-circle text-success';
      break;
    case 'error':
      iconClass = 'fas fa-times-circle text-danger';
      break;
    case 'loading':
      iconClass = 'fas fa-spinner fa-spin text-secondary';
      break;
    default:
      iconClass = 'fas fa-info-circle text-info';
  }

  const isLeftAligned = index % 2 === 0;

  return (
    <li className={`timeline-item timeline-${type} ${isLeftAligned ? 'left-aligned' : 'right-aligned'}`}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <p className="mb-2"><i className={iconClass}></i> {message}</p>
      </div>
    </li>
  );
};

// Timeline component
const Timeline = () => {
  return (
    <div className="timeline-container">
      <ul className="timeline">
        {timelineEntries.map((entry, index) => (
          <TimelineEntry key={entry.id} type={entry.type} message={entry.message} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
