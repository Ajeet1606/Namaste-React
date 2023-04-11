import { IMG_CDN_URL } from "./Config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area, id, avgRating }) => {
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
        <div className="not-getting-any-proper-name">
            <div>
              <h5>{cuisines.join(", ")}</h5>
              <h5>{area}</h5>
            </div>
            <div>
            <span className="star-rating"><i className="fa fa-star"></i> {avgRating}</span>
            </div>
        </div>
        
      </div>
    );
  };

  export default RestaurantCard;