import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { FOOD_STDUIO_LOGO } from "./Config";


function filterRestaurants(searchTxt, allRestaurants) {
  if (searchTxt === "") return allRestaurants;
  const filteredData = allRestaurants.filter(
    (restaurant) =>
      restaurant.data?.area?.toLowerCase() === searchTxt?.toLowerCase()
  );
  return filteredData;
}


const Header = () => {

  const {userName} = useContext(UserContext);

  // Subscribe to the redux store
  const cartItems = useSelector(store => store.cart.cartItems);
  const path = "/signup";

  return (
    <div className="flex justify-between p-[13px]">
      <a className="w-[50px] h-[50px] overflow-hidden rounded-full flex justify-center" href="/">
        <img className="max-w-full max-h-full object-cover"
          src= {FOOD_STDUIO_LOGO}
          alt=""
        />
      </a>

      <SearchBar/>

      <div className="flex justify-end items-center w-[30rem]">
        <ul className="list-none flex justify-between m-0 p-0">
          <li className="font-Arvo p-[10px] text-[18px]"><Link to="/">Home</Link></li>
          <li className="font-Arvo p-[10px] text-[18px]"><Link to="/about">About Us</Link></li>
          <li className="font-Arvo p-[10px] text-[18px]"><Link to="/contact">Contact Us</Link></li>
          <li className="font-Arvo p-[10px] text-[18px]"><Link to="/cart">Cart ({cartItems.items.length})</Link></li>
        </ul>
        <div className="flex items-center">
          {
            userName === "" ? (<Link to={path}><button className=" bg-inherit border-2 border-black rounded p-1 font-Arvo text-[18px] h-[37px]"
            >Login</button></Link>) : 
            (<button className=" bg-inherit border-2 border-black rounded p-1 font-Arvo text-[18px] h-[37px]"
            >{userName}</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
