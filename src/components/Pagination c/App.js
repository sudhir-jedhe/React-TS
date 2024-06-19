import React, { useState } from 'react';
import CustomPagination from './CustomPagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24); // Initial page size
  const totalItems = 1000; // Total items in the list

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    // Fetch data or update data based on page and size
  };

  return (
    <div className="App">
      <h1>Custom Pagination Example</h1>
      <CustomPagination
        total={totalItems}
        limitOptions={[24, 30, 60]}
        onSelect={handlePageChange}
        activePage={currentPage}
        pageSize={pageSize}
      />
      {/* Render your data based on currentPage and pageSize */}
    </div>
  );
};

export default App;



/***************************************************** */

import React, { useState, useEffect } from 'react';
import CustomPagination from './CustomPagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24); // Initial page size
  const [data, setData] = useState([]); // Assuming you fetch data from API or manage locally
  const totalItems = 1000; // Total items in the list (for example)

  useEffect(() => {
    // Simulate fetching data from API based on currentPage and pageSize
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchData = (page, size) => {
    // Example: Simulate fetching data from API based on pagination parameters
    // Replace with your actual API call or data management logic
    const startIndex = (page - 1) * size;
    const newData = Array.from({ length: size }, (_, index) => ({
      id: startIndex + index + 1, // Example: Generate IDs for pagination
      name: `Item ${startIndex + index + 1}`, // Example: Data properties
      description: `Description for Item ${startIndex + index + 1}`,
    }));
    setData(newData);
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return (
    <div className="App">
      <h1>Data Pagination Example</h1>
      <CustomPagination
        total={totalItems}
        limitOptions={[24, 30, 60]}
        onSelect={handlePageChange}
        activePage={currentPage}
        pageSize={pageSize}
      />

      {/* Render your data */}
      <div className="data-list">
        {data.map(item => (
          <div key={item.id} className="data-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
