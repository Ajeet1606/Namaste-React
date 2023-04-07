import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [name, setname] = useState("");

    useEffect(() => {
      getRestaurantDetails();
    }, [])

    async function getRestaurantDetails(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=224920&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setname(json?.data?.cards[0]?.card?.card?.info?.name);
    }
    

    const {id} = useParams();
    return (
        <>
            <h1>Restaurant Menu for Restaurant id {id} and {name}</h1>
        </>
    )
}

export default RestaurantMenu;