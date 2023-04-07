import { useState } from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";

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


  return (
    <div className="header">
      <a className="logo" href="/">
        <img
          src="https://food-studio.co.za/wp-content/uploads/2019/08/Food-Studio-Logo.png"
          alt=""
        />
      </a>

      <SearchBar/>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
        </ul>
        <div className="authenticate">
          <button onClick={authenticate}>{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
