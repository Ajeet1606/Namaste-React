import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { filterRestaurants } from "../utils/utils";
import { GET_RESTAURANT_URL } from "./Config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import SearchTextContext from "../utils/SearchTextContext";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [apiIndex, setApiIndex] = useState(0);
  const { searchTxt, searchTxtFound } = useContext(SearchTextContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // if(apiIndex === 4) return;
    const data = await fetch(GET_RESTAURANT_URL).catch((error) => {
      console.error(error);
      return <ShimmerUI />;
    });
    const json = await data?.json();

    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards || []);
    // if(apiIndex == 0){
      setAllRestaurants(json?.data?.cards || []);
      setFilteredRestaurants(json?.data?.cards || []);
    // }else{
    //   setAllRestaurants(allRestaurants => [...allRestaurants, ...json?.data?.cards || []]);
    //   setFilteredRestaurants(filteredRestaurants => [...filteredRestaurants, ...json?.data?.cards || []]);
    // }
    
  }

  // searching
  useEffect(() => {
    if (allRestaurants.length > 0) {
      const result = filterRestaurants(searchTxt, allRestaurants);
      if (result.length === 0) {
        alert("No Restaurant Found");
      } else {
        setFilteredRestaurants(result);
      }
    }
  }, [searchTxtFound]);

  //checking if user has reached the end of page.
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
  //       console.warn('end of page');    
  //       setApiIndex(apiIndex+1);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // })

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    alert("You're offline, Please check your internet connection");
    return <ShimmerUI />;
  }

  return allRestaurants.length === 0 || filteredRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex justify-around flex-wrap my-6 mx-3 min-h-screen">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data?.data} key={restaurant?.data?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
