import { useEffect, useState } from "react";
import { database } from "../firebase";
import { IMG_CDN_URL } from "./Config";
import { Link } from "react-router-dom";

const OrderHistory = (currentUser) => {
  const [orders, setOrders] = useState(null);
  const uid = currentUser.currentUser.uid;

  useEffect(() => {
    const fetchData = () => {
      const databaseRef = database.ref("users/" + uid);

      databaseRef.on("value", (snapshot) => {
        const val= snapshot.val();
        if(val){
          const data = Object.values(val);
          setOrders(data);
        }
        // const data = Object?.values(snapshot.val());
        // setOrders(data);
      });
      console.log(orders);
      // databaseRef.off("value");
    };

    fetchData();
  }, []);


  return (
    <>
      {orders != null &&
        orders.length > 0 &&
        orders.map((order) => {
          const path = "/restaruant/" + order.restaurant_id;
          return (
            <div className="my-1 flex ">
              {/* left side: logo */}
              <div className="w-16 h-12 mx-2 overflow-hidden">
                <Link to={path}>
                  <img
                    className="min-h-full max-h-full object-fill rounded"
                    src={IMG_CDN_URL + order.logo}
                    alt="restaurant logo"
                  />
                </Link>
              </div>
              {/* right side for other details: top restaruant, below menu */}
              <div>
                {/* restaurant */}
                <div>
                  <h3 className="text-lg font-Arvo">{order.restaurantName}</h3>
                </div>
                {/* menu */}
                {order.items.map((item) => {
                  return (
                    <div className="flex font-Arvo text-sm">
                      <h3 className="mx-2">{item.name}</h3>
                      <h3 className="mx-2">{item.price / 100}</h3>
                      <h3 className="mx-2">{item.quantity}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default OrderHistory;
