import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { filterRestaurants } from "../utils/utils";
import { restaurants } from "./Config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import SearchTextContext from "../utils/SearchTextContext";
import PathContext from "../utils/PathContext";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { searchTxt, setsearchTxt, searchTxtFound } =
    useContext(SearchTextContext);

  const { pathname } = useLocation();
  const { setCurrentPath } = useContext(PathContext);

  useEffect(() => {
    setCurrentPath(pathname);
    setsearchTxt("");
  }, []);

  // searching
  useEffect(() => {
    const result = filterRestaurants(searchTxt, restaurants);
    if (result.length === 0) {
      alert("No Restaurant Found");
    } else {
      setFilteredRestaurants(result);
    }
  }, [searchTxtFound]);

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    alert("You're offline, Please check your internet connection");
    return <ShimmerUI />;
  }

  return restaurants.length === 0 || filteredRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex justify-around flex-wrap my-6 mx-3 min-h-screen">
        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant?.info} key={restaurant?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
