import React, { useState, useEffect } from 'react';
import _debounce from 'lodash/debounce';

const SearchFilterWithPagination = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Debounce search input
  const debouncedSearchTerm = _debounce(searchTerm => {
    setSearchTerm(searchTerm);
  }, 300);

  useEffect(() => {
    setPage(1); // Reset page when search term changes
    setItems([]);
    setHasMore(true);
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm) return; // No need to fetch if search term is empty

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://your-api-endpoint.com/data?page=${page}&search=${searchTerm}`);
        const data = await response.json();
        
        if (data.length === 0) {
          setHasMore(false); // No more data to load
        } else {
          setItems(prevItems => [...prevItems, ...data]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, page]);

  const handleScroll = () => {
    if (!loading && hasMore) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        setPage(prevPage => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    debouncedSearchTerm(value);
  };

  // button Toggle
  // search input
  // input change filter
  // todolist  complete All complted
  // 

  return (
    <div>
      <h2>Optimized Search Filter with Pagination</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {loading && <li>Loading...</li>}
        {!loading && !hasMore && <li>No more results</li>}
      </ul>
    </div>
  );
};

export default SearchFilterWithPagination;
