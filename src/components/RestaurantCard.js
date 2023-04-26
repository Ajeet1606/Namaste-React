import { IMG_CDN_URL } from "./Config";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  area,
  id,
  avgRating,
}) => {
  // console.warn(id);
  const path = "/restaurant/" + id;
  // console.warn(path);
  return (
    <Link to={path}>
      <div className="w-[250px] m-2 px-[10px] py-[5px] rounded-[5px] transition duration-300 ease-in-out hover:scale-110 shadow-md">
        <img
          className="w-[300px] h-[150px] rounded-[5px]"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurants-logo"
        />
        <h3 className="m-[2px] font-Arvo font-normal">{name}</h3>
        <div className="flex  items-center">
          <div className="px-[3px] w-[75%]">
            <h5 className="m-[2px] font-Average text-[#484848]">
              {cuisines.join(", ")}
            </h5>
            <h5 className="m-[2px] font-Average text-[#484848]">{area}</h5>
          </div>
          <div className="w-[25%] text-center">
            <span className="star-rating text-green-800 font-Arvo">
              <i className="fa fa-star"></i> {avgRating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
