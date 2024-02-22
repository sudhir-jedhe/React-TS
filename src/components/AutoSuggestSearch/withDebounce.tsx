import React, { useState, useEffect } from "react";

const AutoSuggestSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [inputValue]);

  useEffect(() => {
    const fetchSuggestions = async (query) => {
      try {
        const response = await fetch(
          `https://api.example.com/search?q=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }
        const data = await response.json();
        setSuggestions(data.suggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (debouncedInputValue.trim() !== "") {
      fetchSuggestions(debouncedInputValue);
    } else {
      setSuggestions([]);
    }
  }, [debouncedInputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
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
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoSuggestSearch;
