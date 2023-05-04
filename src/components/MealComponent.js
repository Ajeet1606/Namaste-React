import {useState, useContext, useEffect} from "react";
import { IMG_CDN_URL } from "./Config";
import { useDispatch ,useSelector } from "react-redux";
import { checkAvailability, findQuantity, removeMenu } from "../utils/utils";
import { useParams } from "react-router-dom";
import RestaurantContext from "../utils/RestaurantContext";

const MealComponent = (curMenu) => {

    //destructure props
    const {name, price, description, imageId} = curMenu?.curMenu?.card?.info;

    //state variables
    const [itemQuantity, setItemQuantity] = useState(0);

    //Read data from context API
    const myData = useContext(RestaurantContext);

    //fetch the id of opened restaurant
    const { id } = useParams();
    
//Cart operations
    //susbcribe to cart
    const cartItems = useSelector(store => store.cart.cartItems);
    //push to cart
    const dispatch = useDispatch();

    //action functions
    const handleAdd = (meal) => {
        const check = checkAvailability(id, meal, cartItems, dispatch, myData);
        if(check){
            setItemQuantity(itemQuantity+1);
        }
    }

    const handleRemove = (meal) => {
        removeMenu(meal, cartItems, dispatch);
        setItemQuantity(Math.max(0, itemQuantity-1));
    }

    useEffect(() => {
      setItemQuantity(findQuantity(curMenu?.curMenu?.card?.info?.id, cartItems));
    }, []);
    

  return (
    <>
        <div className="flex p-[5px] items-center">
          <div className="w-[80%] mb-[10px] px-[10px]">
            <h4 className="mt-0 mb-[8px]">{name}</h4>
            <h5 className="my-[4px]  text-[#5e5d5d]">
              {price / 100}Rs
            </h5>
            <p className="my-[4px] text-[#8d8d8d]">
              {description}
            </p>
          </div>
          <div className="relative w-[20%] text-center px-[10px] overflow-hidden">
            {imageId ? (
              <img
                className="min-w-full max-w-full object-fill rounded-md"
                src={IMG_CDN_URL + imageId}
                alt="meal-image"
              />
            ) : (
              <></>
            )}
            <div className="flex justify-evenly rounded">
              <button
                className=" text-sm text-white p-1 transform transition duration-300 hover:scale-125"
                onClick={() => handleRemove(curMenu?.curMenu?.card?.info)}
              >
                ➖
              </button>

              <h1 className="p-1">{itemQuantity}</h1>

              <button
                className=" text-sm text-white p-1 transform transition duration-300 hover:scale-125"
                onClick={() => handleAdd(curMenu?.curMenu?.card?.info)}
              >
                ➕
              </button>
            </div>
          </div>
        </div>
        <hr className="w-[100%]" />
        {/* {index < menu.length - 1 ? (
          <div>
            
          </div>
        ) : (
          <></>
        )} */}
    </>
  );
};

export default MealComponent;
