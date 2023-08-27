import React from "react";
import { useContext } from "react";
import SearchTextContext from "../utils/SearchTextContext";

function SearchBar() {
    const {searchTxt, setsearchTxt, setsearchTxtFound} = useContext(SearchTextContext);

    // built for search when enter is pressed.
  // function handleKeyPress(event) {
  //   if (event.key === "Enter") {
  //     setsearchTxtFound(!searchTxtFound);
  //   }
  // }
  return (
    <div className="flex items-center">
      <input className="h-[35px] w-20 lg:w-[300px] md:w-52 sm:w-40 text-center text-lg border-2 border-[#818080] rounded font-Arvo"
        type="search"
        placeholder="Search a Restaurant"
        value={searchTxt}
        onChange={(e) => {
          setsearchTxt(e.target.value);
          setsearchTxtFound((prev) => !prev);
        }}
        // onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
