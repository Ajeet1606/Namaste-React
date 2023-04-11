import React from "react";
import { useState } from "react";
import { filterRestaurants } from "../utils/utils";


function SearchBar() {
    const [searchTxt, setsearchTxt] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      filterRestaurants(searchTxt);
    }
  }
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search a Restaurant"
        value={searchTxt}
        onChange={(e) => {
          setsearchTxt(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
