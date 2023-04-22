
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCardComponent from "./ItemCardComponent";

const RestaurantMenu = () => {
  
  const {id} = useParams();
  const restaurant = useRestaurantMenu(id);

  return (
    <>
      <div className="w-full">
        <div className="w-[60%] mx-auto font-Arvo mt-[20px] flex justify-between items-baseline">
          <div>
            <h2 className="font-bold text-[22px] mb-[15px]">{restaurant.name}</h2>
            <h5 className="font-normal text-[#8d8d8d]">{restaurant.cuisines.join(", ")}</h5>
            <h5 className="font-normal text-[#8d8d8d]">{restaurant.areaname}</h5>
            <h5 className="font-normal text-[#8d8d8d]">{restaurant.deliverymsg}
            </h5>
          </div>
          <div className="flex flex-col shadow-md">
            <span className="star-rating text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-green-800"><i className="fa fa-star"></i> {restaurant.avgrating}</span>
            <span className="review-count text-center border-[1px] border-[#d0d0d0] py-[5px] px-[2px] text-[#8d8d8d] font-[13px]">{restaurant.totalratings}</span>
          </div>
        </div>

        <hr className="w-[60%] mx-auto my-2 border-gray-600"/>

        <div className="w-[60%] mx-auto font-Arvo flex items-center overflow-x-auto whitespace-nowrap scrollbar-none">
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
            <div className="divs-inside-offers">
                <h5 className="font-semibold">30% upto 75rs</h5>
                <span className="font-[12px] text-[#8d8d8d]">use TRYNEW above 149rs</span>
            </div>
        </div>

        <div className="w-[60%] mx-auto font-Arvo">
            <h4 className="mt-[20px] mb-[10px] font-[600] text-[18px]"><i className="fa fa-leaf text-green-800"></i> Pure Veg</h4>
        </div>

        <hr className="w-[60%] mx-auto border-gray-600"/>

        <div className="w-[60%] mx-auto my-1">
            {
              restaurant.itemCards.map((itemCard, index) => {
                if(index != 0){
                  return <ItemCardComponent itemCard = {itemCard} key = {index}/>
                }
              })
            }
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
