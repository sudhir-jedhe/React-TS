import React, { useState } from "react";

const AutoSuggestSearch = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default AutoSuggestSearch;

const MyComponent = () => {
  const suggestions = [
    "apple",
    "banana",
    "orange",
    "pineapple",
    "grape",
    "watermelon",
  ];

  return (
    <div>
      <h1>Auto Suggest Search</h1>
      <AutoSuggestSearch suggestions={suggestions} />
    </div>
  );
};

export default MyComponent;
