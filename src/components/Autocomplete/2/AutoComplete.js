import { useState } from "react";
import useOutsideClick from "./useOutsideClick";

const UPI_HANDLER = [
  "okhdfcbank",
  "okaxis",
  "okicici",
  "oksbi",
  "ybl",
  "paytm",
  "kotak",
];

const getSuggestions = (query) => {
  const foundIdx = query?.lastIndexOf("@");
  if (foundIdx === -1 || foundIdx === 0) {
    return;
  }
  const handlerText = query?.slice(foundIdx + 1);
  const suggestions = UPI_HANDLER.filter((handler) =>
    handler.includes(handlerText)
  );
  return suggestions;
};

const AutoCompleteSuggestions = ({ query, onSuggestionItemClick }) => {
  const suggestions = getSuggestions(query);
  if (!suggestions) {
    return null;
  }

  const renderSuggestionItem = (onSuggestionItemClick) => (handlerText) => {
    const handleItemClick = () => {
      const atTheRateIdx = query.lastIndexOf("@");
      onSuggestionItemClick(query.slice(0, atTheRateIdx + 1) + handlerText);
    };

    return (
      <div className="suggestion_item" onClick={handleItemClick}>
        {handlerText}
      </div>
    );
  };

  return (
    <div className="suggestion_list">
      {suggestions.map(renderSuggestionItem(onSuggestionItemClick))}
    </div>
  );
};

const AutoComplete = () => {
  const [upiId, setUpiId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const ref = useOutsideClick(() => {
    setSearchQuery(null);
  });

  const handleFieldChange = (e) => {
    setUpiId(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSuggestionItemClick = (upiId) => {
    setUpiId(upiId);
    setSearchQuery(null);
  };

  return (
    <div className="auto_complete_container" ref={ref}>
      <input
        value={upiId}
        onChange={handleFieldChange}
        type="text"
        className="auto_complete_search"
      />
      {/*Sending 'query' as prop so we can have debouncing*/}
      <AutoCompleteSuggestions
        query={searchQuery}
        onSuggestionItemClick={handleSuggestionItemClick}
      />
    </div>
  );
};

export default AutoComplete;
