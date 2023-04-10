import { IMG_CDN_URL } from "./Config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area, id }) => {
  // console.warn(id);
  const path = "/restaurant/" + id;
  // console.warn(path);
    return (
      <div className="restaurant-card">
        <Link to={path}>
        <img
          className="restaurant-logo"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="restaurants-logo"
        /></Link>
        <h3 className="restaurant-name">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
      </div>
    );
  };

  export default RestaurantCard;