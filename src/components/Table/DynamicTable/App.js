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
  const [newRow, setNewRow] = useState({ id: '', name: '', age: '', email: '' });

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

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  // Handle form submission (add new row)
  const handleAddRow = (e) => {
    e.preventDefault();
    const id = data.length + 1; // Generate new ID (replace with proper ID generation logic)
    const newData = { ...newRow, id };
    setData([...data, newData]);
    setNewRow({ id: '', name: '', age: '', email: '' }); // Clear form inputs
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
      <form onSubmit={handleAddRow} className="add-form">
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={newRow.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newRow.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={newRow.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newRow.email}
          onChange={handleInputChange}
        />
        <button type="submit">Add Row</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
