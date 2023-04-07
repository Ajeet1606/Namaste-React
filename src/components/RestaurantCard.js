import { IMG_CDN_URL } from "./Config";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area }) => {
    return (
      <div className="restaurant-card">
        <img
          className="restaurant-logo"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="restaurants-logo"
        />
        <h3 className="restaurant-name">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
      </div>
    );
  };

  export default RestaurantCard;