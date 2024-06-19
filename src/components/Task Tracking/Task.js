// Task.js
import React from 'react';

const Task = ({ task, onDragStart, onDragOver, onDrop }) => {
  const handleDragStart = (e) => {
    onDragStart(e, task.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e);
  };

  const handleDrop = (e) => {
    onDrop(e, task.id);
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default Task;
