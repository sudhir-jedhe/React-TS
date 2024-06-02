import React, { useState } from 'react';

const AutoCompleteSearch = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    const results = data.filter(name =>
      name.toLowerCase().startsWith(value)
    );
    setFilteredResults(results);
  };

  const handleItemClick = (value) => {
    setInputValue(value);
    setFilteredResults([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
      />
      {filteredResults.length > 0 && (
        <ul className="autocomplete-results">
          {filteredResults.map((result, index) => (
            <li key={index} onClick={() => handleItemClick(result)}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearch;



import React from 'react';
import AutoCompleteSearch from './AutoCompleteSearch';

const App = () => {
  const names = [
    'Alex',
    'David',
    'Aleksandra',
    'Sarah',
    'John',
    'Matt',
    'Mike'
  ];

  return (
    <div className="App">
      <h1>Auto Complete Search</h1>
      <AutoCompleteSearch data={names} />
    </div>
  );
};

export default App;
