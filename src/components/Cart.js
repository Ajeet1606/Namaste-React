import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./Config";
const Cart = () => {

  // State variables
  const [totalBill, setTotalBill] = useState(0);


  // Subscribe to items arrat of cart slice in the store.
  const cartItems = useSelector((store) => store.cart.cartItems);
 
  const path = "/restaurant/" + cartItems.restaurant_id;

  useEffect(() => {
    let total = 0;
    cartItems.items.forEach(cur => {
      total += (cur.price / 100) * (cur.quantity);
    })
    total.toFixed(2);
    setTotalBill(total);
  }, [])
  

  const dispatch = useDispatch();

  // Add menu in cart
  const addMenu = (curItem) => {
    dispatch(addItem(curItem));
    setTotalBill(totalBill + (curItem.price)/100);
  };

  //remove menu
  const removeMenu = (curItem) => {
    dispatch(removeItem(curItem));
    const bill = Math.max(0, totalBill - (curItem.price)/100);
    setTotalBill(bill);
  };


  if(cartItems.items.length == 0){
    return <h1 className="m-10 text-4xl text-center font-Arvo font-bold">Cart is Empty</h1>
  }

  return (
    <>
      <div className="flex bg-slate-200 px-4">
        {/* account details side */}
        <div className="w-[70%] m-4 p-4">
          {/* Account */}
          <div className="py-5 px-10 bg-white">
            <h3 className="text-lg font-bold font-Arvo">Account</h3>
            <h4 className="font-Arvo text-slate-400 mb-4">
              To place your order now, log in to your existing account or sign
              up.
            </h4>
            <button className="border border-green-700 rounded text-green-700 font-Arvo mx-2 py-1 px-3 text-sm">
              Have an account? <br />
              <span className="text-lg ">LOG IN</span>
            </button>
            <button className="bg-green-700 rounded text-white font-Arvo mx-2 py-1 px-3 text-sm">
              New to Food Studio? <br />
              <span className="text-lg"> SIGN UP</span>
            </button>
          </div>
          {/* Delivery Address */}
          <div className="py-5 px-10 bg-white my-4">
            <h3 className=" font-Arvo text-lg">Delivery Address</h3>
          </div>
          {/* payment */}
          <div className="py-5 px-10 bg-white my-4">
            <h3 className="font-Arvo text-lg">Payment</h3>
          </div>
        </div>



        {/* Cart details side */}
        <div className="bg-white w-[30%] h-96 p-4 my-8 mx-4 ">
          {/* restaurant details */}
          <div className="flex">
            <div className="w-16 h-12 mx-2 overflow-hidden">
              <Link to={path}>
              <img className="min-h-full max-h-full object-fill rounded"
                src={IMG_CDN_URL + cartItems.logo}
                alt=""
              />
              </Link>
            </div>
            <div className="mx-2">
              <h3 className="text-lg font-semibold">{cartItems.restaurantName}</h3>
              <h4 className="text-sm">{cartItems.areaName}</h4>
            </div>
          </div>

          {/* menu items list */}
          {/* Title, buttons to change quantity, price per piece */}
          <div className="h-[60%] mt-4 overflow-y-auto">
            {cartItems.items.map((curItem) => {
              return (
                <div className="my-4 flex justify-between items-center">
                  <h3 className="w-[40%]">{curItem.name}</h3>
                  <div className="w-[35%] flex justify-between items-center border border-gray-400 px-2 mx-2">
                    <button onClick={() => removeMenu(curItem)}>➖</button>

                    <h4 className="mx-1">{curItem.quantity}</h4>

                    <button onClick={() => addMenu(curItem)}>➕</button>
                  </div>
                  <p className="w-[25%] text-end">{(curItem.price / 100) * curItem.quantity}Rs</p>
                </div>
              );
            })}
          </div>
          {/* Total Charge */}

          <div className="mt-2 p-2 flex justify-between ">
            <h3 className="font-bold">Total Amount to Pay:</h3>
            <h3 className="font-semibold">{totalBill}Rs</h3>
          </div>

          <div className="flex justify-between my-1">
            <button className="bg-green-600 text-white font-Arvo p-1 rounded"
            onClick={() => {dispatch(clearCart())}}
            >Clear Cart</button>
            <button className="bg-green-600 text-white font-Arvo p-1 rounded">CheckOut</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
