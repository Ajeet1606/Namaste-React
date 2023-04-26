import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./Config";

const ItemCardComponent = (itemCard) => {
 
  const [expanded, setexpanded] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  const title = itemCard?.itemCard?.card?.card?.title;
  const menu = itemCard?.itemCard?.card?.card?.itemCards;

  //when there is no dish 
  if (menu === undefined) {
    return;
  }

  // Subscribe cart and check the quantity of current meal
  const cartItems = useSelector(store => store.cart.items);
  const findQuantity = (id) => {
    const index = cartItems.find(
      (i) => i.id === id
    );
    return cartItems[index].quantity;
  }

  // add item to cart
  const dispatch = useDispatch();

  const addMenu = (menu) => {
    const item = {id: menu.id, name: menu.name, imageId: menu.imageId, price: menu.price, quantity: 1};
    dispatch(addItem(item));
    setItemQuantity(itemQuantity+1);
  }

  //remove item from cart
  const removeMenu = (menu) => {
    const item = {id: menu.id};
    dispatch(removeItem(item));
    setItemQuantity(itemQuantity-1);
  }

  return (
    <>
      <div className="my-[5px] py-[5px] font-Arvo">
        <div>
          <div
            className="flex cursor-pointer py-[18px] shadow-md"
            onClick={() => setexpanded(!expanded)}
          >
            <h3 className="text-center w-[90%] font-bold text-[20px]">
              {title} ({menu.length})
            </h3>
            <p className="text-center w-[10%]">{expanded ? "✖️" : "➕"}</p>
          </div>

          {expanded &&
            menu.map((curMenu, index) => {
              return (
                <div>
                  <div className="flex p-[5px] items-center">
                    <div className="w-[80%] mb-[10px] px-[10px]">
                      <h4 className="mt-0 mb-[8px]">
                        {curMenu?.card?.info?.name}
                      </h4>
                      <h5 className="my-[4px]  text-[#5e5d5d]">
                        {curMenu?.card?.info?.price / 100}Rs
                      </h5>
                      <p className="my-[4px] text-[#8d8d8d]">
                        {curMenu?.card?.info?.description}
                      </p>
                    </div>
                    <div className="relative w-[20%] text-center px-[10px] overflow-hidden">
                      {curMenu?.card?.info?.imageId ? (
                        <img
                          className="min-w-full max-w-full object-fill rounded-md"
                          src={IMG_CDN_URL + curMenu?.card?.info?.imageId}
                          alt="meal-image"
                        />
                      ) : (
                        <></>
                      )}
                      <div className="flex justify-evenly rounded">
                      <button className=" text-sm text-white p-1 transform transition duration-300 hover:scale-125"
                      onClick={() => removeMenu(curMenu?.card?.info)}
                      >➖</button>

                        <h1 className="p-1">{itemQuantity}</h1>

                      <button className=" text-sm text-white p-1 transform transition duration-300 hover:scale-125"
                      onClick={() => addMenu(curMenu?.card?.info)}
                      >➕</button>
                      </div>
                      
                    </div>
                  </div>
                  {index < menu.length - 1 ? (
                    <div>
                      <hr className="w-[100%]" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
