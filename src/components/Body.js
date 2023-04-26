import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { GET_RESTAURANT_URL } from "./Config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";


const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();    
  }, []);

  async function getRestaurants() {
    
    const data = await fetch(
      GET_RESTAURANT_URL
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards) || [];
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
  }

  const isOnline = useOnlineStatus();
  if(!isOnline){
    alert("You're offline, Please check your internet connection");
    return <ShimmerUI/>
  }

  return (allRestaurants?.length === 0 || filteredRestaurants?.length == 0) ? (
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
      <div className="flex justify-around flex-wrap my-6 mx-3">
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
