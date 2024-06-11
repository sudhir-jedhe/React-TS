import React, { useState } from 'react';

const TaskManagementSystem = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [taskIdToUpdate, setTaskIdToUpdate] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = { id: Date.now(), title: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleEditTask = () => {
    if (editedTask.trim() !== '' && taskIdToUpdate !== null) {
      setTasks(tasks.map(task => (task.id === taskIdToUpdate ? { ...task, title: editedTask } : task)));
      setEditedTask('');
      setTaskIdToUpdate(null);
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setEditedTask('');
    setTaskIdToUpdate(null);
  };

  const handleViewTask = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    alert(`Task ID: ${task.id}\nTitle: ${task.title}`);
  };

  return (
    <div>
      <h2>Task Management System</h2>
      <div>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task title" />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {tasks.map(task => (
          <div key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => setTaskIdToUpdate(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <button onClick={() => handleViewTask(task.id)}>View</button>
          </div>
        ))}
      </div>
      {taskIdToUpdate !== null && (
        <div>
          <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} placeholder="Enter edited title" />
          <button onClick={handleEditTask}>Save</button>
        </div>
      )}
    </div>
  );
};

export default TaskManagementSystem;
