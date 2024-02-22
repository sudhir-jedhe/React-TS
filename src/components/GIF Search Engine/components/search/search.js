import React from "react";
import "./search.css";

const Search = ({ safeSearch, handleSearch, isFetching }) => {
  return (
    <form onSubmit={handleSearch} className="searchFormRoot">
      <input
        type="search"
        id="q"
        className="searchInputRoot"
        placeholder={`${
          safeSearch
            ? "Search GIFs..."
            : "Safe search is off, some explicit content could pop up..."
        }`}
      />
      <button className="searchButtonRoot" disabled={isFetching}>
        Search
      </button>
    </form>
  );
};

export default Search;
