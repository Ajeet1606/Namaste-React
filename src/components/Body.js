import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

let global_restaurant_list;

export function filterRestaurants(searchTxt) {
  if (searchTxt === "") setFilteredRestaurants(global_restaurant_list);
  const filteredData = global_restaurant_list.filter(
    (restaurant) =>
      restaurant.data?.area?.toLowerCase() === searchTxt?.toLowerCase()
  );
  setFilteredRestaurants(filteredData);
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   getRestaurants();
    // }, 5000)
    getRestaurants();
  }, []);

  async function getRestaurants() {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");
  console.log(allRestaurants);
  console.log(filteredRestaurants);


  return (allRestaurants?.length === 0 || filteredRestaurants?.length === 0) ? (
    <ShimmerUI />
  ) : (
    <>
      
      {/* <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setsearchTxt(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />
      </div> */}
      <div className="restaurants-lists">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};



export default Body;
