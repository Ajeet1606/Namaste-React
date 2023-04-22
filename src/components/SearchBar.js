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
    <div className="flex items-center">
      <input className="h-[35px] w-[300px] text-center text-lg border-2 border-[#818080] rounded font-Arvo"
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
