// TaskList.js
import React, { useState } from 'react';

const TaskList = ({ tasks }) => {
  const [complexityFilter, setComplexityFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleComplexityChange = (e) => {
    setComplexityFilter(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const calculateDaysPending = (date) => {
    const currentDate = new Date();
    const taskDate = new Date(date);
    const differenceInTime = currentDate.getTime() - taskDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.floor(differenceInDays);
  };

  const filteredTasks = tasks.filter((task) => {
    // Filter by complexity
    if (complexityFilter !== 'All' && task.complexity !== complexityFilter) {
      return false;
    }

    // Filter by date
    if (dateFilter !== 'All') {
      const daysPending = calculateDaysPending(task.date);
      switch (dateFilter) {
        case 'Pending less than 7 days':
          if (daysPending >= 7) return false;
          break;
        case 'Pending more than 7 days':
          if (daysPending < 7) return false;
          break;
        default:
          break;
      }
    }

    // Filter by status
    if (statusFilter !== 'All' && task.status !== statusFilter) {
      return false;
    }

    return true;
  });

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div>
        <label>Filter by Complexity:</label>
        <select value={complexityFilter} onChange={handleComplexityChange}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Filter by Days Pending:</label>
        <select value={dateFilter} onChange={handleDateChange}>
          <option value="All">All</option>
          <option value="Pending less than 7 days">Pending less than 7 days</option>
          <option value="Pending more than 7 days">Pending more than 7 days</option>
        </select>
      </div>
      <div>
        <label>Filter by Status:</label>
        <select value={statusFilter} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>Complexity: {task.complexity}</div>
            <div>Status: {task.status}</div>
            <div>Date: {task.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
