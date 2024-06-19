import React, { useState, useEffect } from 'react';
import './MultiFilter.css';

const MultiFilter = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState([
    {
      id: 'category',
      name: 'Category',
      options: ['Electronics', 'Clothing', 'Books'],
      selected: [],
    },
    {
      id: 'price',
      name: 'Price Range',
      options: [
        { label: 'Under $25', value: '0-25' },
        { label: '$25 - $50', value: '25-50' },
        { label: '$50 - $100', value: '50-100' },
        { label: 'Over $100', value: '100-' },
      ],
      selected: [],
    },
  ]);

  useEffect(() => {
    // Simulate fetching items from API
    // Replace with actual API fetch logic
    const fetchItems = async () => {
      // Simulated data for demonstration
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data);
      setFilteredItems(data); // Initialize filtered items with all items
    };

    fetchItems();
  }, []);

  const applyFilters = () => {
    let filtered = [...items];

    filters.forEach(filter => {
      if (filter.selected.length > 0) {
        switch (filter.id) {
          case 'category':
            filtered = filtered.filter(item => filter.selected.includes(item.category));
            break;
          case 'price':
            filtered = filtered.filter(item => {
              const priceRange = filter.selected.find(range => {
                const [min, max] = range.split('-');
                return item.price >= min && (max === '' || item.price <= max);
              });
              return !!priceRange;
            });
            break;
          // Add more cases for additional filters if needed
          default:
            break;
        }
      }
    });

    setFilteredItems(filtered);
  };

  const handleFilterChange = (filterId, selectedOptions) => {
    const updatedFilters = filters.map(filter =>
      filter.id === filterId ? { ...filter, selected: selectedOptions } : filter
    );
    setFilters(updatedFilters);
    applyFilters();
  };

  return (
    <div className="multi-filter">
      <h2>INSANE Multi Filter Feature</h2>
      <div className="filters">
        {filters.map(filter => (
          <div key={filter.id} className="filter">
            <h3>{filter.name}</h3>
            <ul>
              {filter.options.map(option => (
                <li key={option.value}>
                  <label>
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={filter.selected.includes(option.value)}
                      onChange={(e) => {
                        const selectedOptions = e.target.checked
                          ? [...filter.selected, e.target.value]
                          : filter.selected.filter(value => value !== e.target.value);
                        handleFilterChange(filter.id, selectedOptions);
                      }}
                    />
                    {option.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="results">
        <h3>Filtered Results</h3>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiFilter;
