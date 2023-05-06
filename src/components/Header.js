import { useState } from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


function filterRestaurants(searchTxt, allRestaurants) {
  if (searchTxt === "") return allRestaurants;
  const filteredData = allRestaurants.filter(
    (restaurant) =>
      restaurant.data?.area?.toLowerCase() === searchTxt?.toLowerCase()
  );
  return filteredData;
}


const Header = () => {

  const [loggedIn, setLoggedIn] = useState("false");
  const [btnText, setBtnText] = useState("Login")


  function authenticate(){
    if(loggedIn){
      setBtnText("Logout");
      setLoggedIn(!loggedIn);
    }else{
      setBtnText("Login");
      setLoggedIn(!loggedIn);
    }
    
  }

  // Subscribe to the redux store
  const cartItems = useSelector(store => store.cart.cartItems);
  const path = "/login";

  return (
    <div className="flex justify-between p-[13px]">
      <a className="w-[50px] h-[50px] overflow-hidden rounded-full flex justify-center" href="/">
        <img className="max-w-full max-h-full object-cover"
          src="https://food-studio.co.za/wp-content/uploads/2019/08/Food-Studio-Logo.png"
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
            btnText === "Login" ? (<Link to={path}><button className=" bg-inherit border-2 border-black rounded p-1 font-Arvo text-[18px] h-[37px]"
            onClick={authenticate}>{btnText}</button></Link>) : (<button className=" bg-inherit border-2 border-black rounded p-1 font-Arvo text-[18px] h-[37px]"
            onClick={authenticate}>{btnText}</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Header;
