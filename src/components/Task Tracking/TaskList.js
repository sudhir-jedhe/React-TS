// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, status, onDragStart, onDragOver, onDrop }) => {
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedId) => {
    const draggedId = e.dataTransfer.getData('id');
    // Perform action to update task status based on draggedId and droppedId
    // For simplicity, let's assume tasks are managed in parent component state
    // and you have methods to handle status update
    onDrop(draggedId, droppedId);
  };

  return (
    <div className="task-list" onDragOver={handleDragOver} onDrop={handleDrop}>
      {tasks
        .filter((task) => task.status === status)
        .map((task, index) => (
          <Task
            key={task.id}
            task={task}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
    </div>
  );
};

export default TaskList;
