import React, { useState } from 'react';
import './Table.css'; // CSS for styling

const initialData = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
  { id: 3, name: 'Mike Johnson', age: 35, email: 'mike.johnson@example.com' },
  // Add more initial rows as needed
];

const Table = () => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [visibleColumns, setVisibleColumns] = useState(['id', 'name', 'age', 'email']); // Initially all columns visible

  // Handle sorting functionality
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };

  // Perform actual sorting based on current sortBy and sortOrder
  const sortedData = [...data].sort((a, b) => {
    const first = sortOrder === 'asc' ? a[sortBy] : b[sortBy];
    const second = sortOrder === 'asc' ? b[sortBy] : a[sortBy];
    if (typeof first === 'string' && typeof second === 'string') {
      return first.localeCompare(second);
    }
    return first - second;
  });

  // Handle search functionality
  const filteredData = sortedData.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Function to handle row deletion
  const handleDeleteRow = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  // Function to delete all rows
  const handleDeleteAllRows = () => {
    setData([]);
  };

  // Toggle visibility of columns
  const toggleColumnVisibility = (columnName) => {
    if (visibleColumns.includes(columnName)) {
      setVisibleColumns(visibleColumns.filter(col => col !== columnName));
    } else {
      setVisibleColumns([...visibleColumns, columnName]);
    }
  };

  return (
    <div className="table-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleDeleteAllRows}>Delete All Rows</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            {visibleColumns.map(col => (
              <th key={col} onClick={() => handleSort(col)}>
                {col.toUpperCase()}
              </th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              {visibleColumns.map(col => (
                <td key={`${row.id}-${col}`}>{row[col]}</td>
              ))}
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="column-toggle">
        <h3>Column Preferences</h3>
        {Object.keys(initialData[0]).map(col => (
          <label key={col}>
            <input
              type="checkbox"
              value={col}
              checked={visibleColumns.includes(col)}
              onChange={() => toggleColumnVisibility(col)}
            />
            {col.toUpperCase()}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Table;
