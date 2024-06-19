// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', complexity: 'High', date: '2024-06-20', status: 'todo' },
    { id: 2, title: 'Task 2', complexity: 'Medium', date: '2024-06-18', status: 'in-progress' },
    { id: 3, title: 'Task 3', complexity: 'Low', date: '2024-06-15', status: 'done' },
    // Add more tasks as needed
    
  ]);

//   const tasks = [
//     { id: 1, title: 'Task 1', complexity: 'High', date: '2024-06-20', status: 'todo' },
//     { id: 2, title: 'Task 2', complexity: 'Medium', date: '2024-06-18', status: 'in-progress' },
//     { id: 3, title: 'Task 3', complexity: 'Low', date: '2024-06-15', status: 'done' },
//     // Add more tasks as needed
//   ];
  const handleDrop = (draggedId, droppedId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === parseInt(draggedId, 10)
        ? { ...task, status: tasks.find((t) => t.id === parseInt(droppedId, 10)).status }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Tracking App</h1>
      <div className="task-lists">
        <TaskList
          tasks={tasks}
          status="todo"
          onDragStart={(e, id) => handleDragStart(e, id)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(draggedId, droppedId) => handleDrop(draggedId, droppedId)}
        />
        <TaskList
          tasks={tasks}
          status="in-progress"
          onDragStart={(e, id) => handleDragStart(e, id)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(draggedId, droppedId) => handleDrop(draggedId, droppedId)}
        />
        <TaskList
          tasks={tasks}
          status="done"
          onDragStart={(e, id) => handleDragStart(e, id)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(draggedId, droppedId) => handleDrop(draggedId, droppedId)}
        />
      </div>
    </div>
  );
};

export default App;
