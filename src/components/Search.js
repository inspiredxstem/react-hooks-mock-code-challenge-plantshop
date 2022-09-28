import React from "react";

function Search({search, onSearch}) {
  function handleChange(event){
    onSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
