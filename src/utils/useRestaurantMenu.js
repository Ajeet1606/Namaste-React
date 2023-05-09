import { useState, useEffect } from "react";
import { FETCH_MENU_URL_FIRST_PART, FETCH_MENU_URL_SECOND_PART } from "../components/Config";


const useRestaurantMenu = (id) => {
   
    const restaurantFormat = {
        name: "",
        logo: "",
        id: "",
        cuisines : [],
        areaname: "",
        deliverymsg: "",
        avgrating: "",
        totalratings: "",
        itemCards: []
    }

  const [restaurant, setrestaurant] = useState(restaurantFormat);


    useEffect(() => {
        getRestaurantDetails();
      }, []);
    
      async function getRestaurantDetails() {
        const data = await fetch(FETCH_MENU_URL_FIRST_PART + id + FETCH_MENU_URL_SECOND_PART);
        const json = await data.json();
    
        const card = json?.data?.cards[0]?.card?.card?.info;
        const cuisineDetails = (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ? (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards): (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        

        setrestaurant({
            name: card?.name,
            logo: card?.cloudinaryImageId,
            id: card?.id,
            cuisines: card?.cuisines,
            areaname: card?.areaName,
            deliverymsg: card?.feeDetails?.message,
            avgrating: card?.avgRatingString,
            totalratings: card?.totalRatingsString,
            itemCards: cuisineDetails
        })
    
      }

      return restaurant;
}

export default useRestaurantMenu;