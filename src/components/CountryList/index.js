import React, { useState } from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';

const API_URL = 'https://algochurn-server.onrender.com/practice/countries/';

const CountriesList = () => {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);
  
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
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Type a country name..." 
        value={inputValue} 
        onChange={handleChange} 
      />
      <ul>
        {countries.map((country, index) => (
          <li key={index} onClick={() => handleSelectCountry(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
