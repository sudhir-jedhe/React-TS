import React, { useState, useEffect } from 'react';
import './CustomPagination.css'; // Import CSS file for custom styles

const CustomPagination = ({ total, limitOptions, onSelect, activePage, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(activePage || 1);
  const [selectedPageSize, setSelectedPageSize] = useState(pageSize || limitOptions[0]);

  useEffect(() => {
    setCurrentPage(activePage || 1);
    setSelectedPageSize(pageSize || limitOptions[0]);
  }, [activePage, pageSize, limitOptions]);

  const totalPages = Math.ceil(total / selectedPageSize);

  const goToFirstPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
      onSelect(1);
    }
  };

  const goToLastPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(totalPages);
      onSelect(totalPages);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onSelect(newPage);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onSelect(newPage);
    }
  };

  const handlePageSizeChange = (size) => {
    setSelectedPageSize(size);
    setCurrentPage(1); // Reset to first page when page size changes
    onSelect(1, size);
  };

  return (
    <div className="custom-pagination-container">
      <button
        className={`custom-button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={goToFirstPage}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className={`custom-button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="pagination-info">Page {currentPage} of {totalPages}</span>

      <button
        className={`custom-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        className={`custom-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </button>

      <select
        className="custom-dropdown"
        value={selectedPageSize}
        onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
      >
        {limitOptions.map(option => (
          <option key={option} value={option}>{option} per page</option>
        ))}
      </select>
    </div>
  );
};

export default CustomPagination;
