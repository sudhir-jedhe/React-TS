import React, { useState, useEffect } from 'react';
import items from './items'; // Import your products list here

const MultipleFilters = () => {
  // State to manage selected filters
  const [filters, setFilters] = useState([]);
  // State to manage filtered items based on selected filters
  const [filteredItems, setFilteredItems] = useState([]);

  // Function to toggle filters
  const toggleFilter = (category) => {
    // If the filter is already selected, remove it
    if (filters.includes(category)) {
      setFilters(filters.filter((filter) => filter !== category));
    } else { // If the filter is not selected, add it
      setFilters([...filters, category]);
    }
  };

  // Effect to update filtered items when filters change
  useEffect(() => {
    // If no filters are selected, display all items
    if (filters.length === 0) {
      setFilteredItems(items);
    } else {
      // Filter items based on selected filters
      const filtered = items.filter((item) => filters.includes(item.category));
      setFilteredItems(filtered);
    }
  }, [filters]);

  return (
    <div>
      {/* Filters bar */}
      <div>
        {/* Iterate over available categories and create filter buttons */}
        {['Bags', 'Shoes', 'Clothes', 'Accessories'].map((category) => (
          <button
            key={category}
            // When a filter button is clicked, call toggleFilter with the category
            onClick={() => toggleFilter(category)}
            // Apply different background color for selected filters
            style={{ backgroundColor: filters.includes(category) ? 'lightblue' : 'white' }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Products list */}
      <div>
        {/* Iterate over filtered items and display product details */}
        {filteredItems.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleFilters;
