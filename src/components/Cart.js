import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "./Config";

const Cart = () => {

  // State variables
  const [totalBill, setTotalBill] = useState(0);

  
  // Subscribe to items arrat of cart slice in the store.
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(cur => {
      total += cur.price/100;
    })

    setTotalBill(total);
  }, [])
  

  // dispatch an action clearCart
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };

  // Add menu in cart
  const addMenu = (curItem) => {
    dispatch(addItem(curItem));
    setTotalBill(totalBill + curItem.price/100);
  };

  const removeMenu = (curItem) => {
    dispatch(removeItem(curItem));
    const bill = Math.max(0, totalBill - curItem.price/100);
    setTotalBill(bill);
  };

  if(cartItems.length == 0){
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
            <h4 className="font-light font-roboto mb-4">
              To place your order now, log in to your existing account or sign
              up.
            </h4>
            <button className="border border-green-700 text-green-700 mx-2 py-1 px-3 text-sm">
              Have an account? <br />
              <span className="text-lg font-bold">LOG IN</span>
            </button>
            <button className="bg-green-700 text-white mx-2 py-1 px-3 text-sm">
              New to Food Studio? <br />
              <span className="text-lg font-bold"> SIGN UP</span>
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
        <div className="bg-white w-[30%] p-4 my-8 mx-4">
          {/* restaurant details */}
          <div className="flex">
            <div className="w-12 h-12 mx-2">
              <img
                src={IMG_CDN_URL + cartItems[0].imageId}
                alt=""
              />
            </div>
            <div className="mx-2">
              <h3 className="text-lg font-semibold">Title</h3>
              <h4 className="text-sm">Area</h4>
            </div>
          </div>

          {/* menu items list */}
          {/* Title, buttons to change quantity, price per piece */}
          <div className="h-[70%] mt-6 overflow-y-auto">
            {cartItems.map((curItem) => {
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

          <div className="mt-4 p-2 flex justify-between shadow">
            <h3 className="font-bold">To Pay:</h3>
            <h3 className="font-semibold">{totalBill}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
