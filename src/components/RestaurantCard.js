import { IMG_CDN_URL } from "./Config";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  areaName,
  id,
  avgRating,
}) => {
  // console.warn(id);
  const path = "/restaurant/" + id;
  // console.warn(path);
  if (!name) return;
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
            <h5 className="m-[2px] font-Arvo text-sm text-[#484848]">
              {cuisines?.join(", ")}
            </h5>
            <div className="flex items-center">
              <img
                className="h-5 w-4"
                src="https://www.clipartmax.com/png/small/207-2072371_or-combined-to-be-gigantic-location-icon-in-orange-color.png"
                alt=""
              />
              <h5 className="m-1 font-Arvo text-sm text-[#484848]">{areaName}</h5>
            </div>
          </div>

          {avgRating != "--" && (
            <div className="w-[25%] text-center bg-green-500 mx-1">
              <span className="star-rating text-white text-sm font-Arvo">
                <i className="fa fa-star"></i> {avgRating}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <img
            className="h-6 w-6"
            src="https://thumbs.dreamstime.com/b/print-144632261.jpg"
            alt=""
          />

          <span className="text-[#a0522d] text-xs font-Arvo">
            40% Off | Use TRYNEW
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
