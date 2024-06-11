import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

const API_URL = 'https://algochurn-server.onrender.com/practice/countries/';

const CountriesList = () => {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const fetchCountries = async (input) => {
    try {
      const response = await axios.get(API_URL + input);
      setCountries(response.data.countries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const debouncedFetch = _debounce(fetchCountries, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedFetch(value);
  };

  const handleSelectCountry = (country) => {
    setInputValue(country);
    setCountries([]);
    setSelectedCountry(country);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => (prevIndex < countries.length - 1 ? prevIndex + 1 : prevIndex));
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === 'Enter') {
      if (highlightedIndex !== -1) {
        handleSelectCountry(countries[highlightedIndex]);
      }
    }
  };

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [countries]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type a country name..."
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {countries.map((country, index) => (
          <li
            key={index}
            onClick={() => handleSelectCountry(country)}
            className={index === highlightedIndex ? 'highlighted' : ''}
          >
            {country}
          </li>
        ))}
      </ul>
      <div>
        <h2>Selected Country:</h2>
        <p>{selectedCountry}</p>
      </div>
    </div>
  );
};

export default CountriesList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

const API_URL = 'https://algochurn-server.onrender.com/practice/countries/';

const CountriesList = () => {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const fetchCountries = async (input) => {
    try {
      const response = await axios.get(API_URL + input);
      setCountries(response.data.countries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const debouncedFetch = _debounce(fetchCountries, 500);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedFetch(value);
  };

  const handleSelectCountry = (country) => {
    setInputValue(country);
    setCountries([]);
    setSelectedCountry(country);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => (prevIndex < countries.length - 1 ? prevIndex + 1 : prevIndex));
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    } else if (event.key === 'Enter') {
      if (highlightedIndex !== -1) {
        handleSelectCountry(countries[highlightedIndex]);
      }
    }
  };

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [countries]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type a country name..."
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {countries.map((country, index) => (
          <li
            key={index}
            onClick={() => handleSelectCountry(country)}
            className={index === highlightedIndex ? 'highlighted' : ''}
          >
            {country}
          </li>
        ))}
      </ul>
      <div>
        <h2>Selected Country:</h2>
        <p>{selectedCountry}</p>
      </div>
    </div>
  );
};

export default CountriesList;
