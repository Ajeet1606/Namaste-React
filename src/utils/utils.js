import { addItem, removeItem, assignBasicDetails } from "./cartSlice";

// export function filterRestaurants(searchTxt) {
//   if (searchTxt === "") setFilteredRestaurants(global_restaurant_list);
//   const filteredData = global_restaurant_list.filter(
//     (restaurant) =>
//       restaurant.data?.area?.toLowerCase() === searchTxt?.toLowerCase()
//   );
//   setFilteredRestaurants(filteredData);
// }

export const findQuantity = (id, cartItems) => {
  const count = cartItems?.items?.findIndex((i) => i.id === id);
  if (count === undefined) return 0;
  if(cartItems?.items[count]?.quantity === undefined) return 0;
  return (cartItems?.items[count]?.quantity);
};

export const checkAvailability = (
  cur_id,
  menu,
  cartItems,
  dispatch,
  myData
) => {
  if (cartItems.items.length == 0) {
    const details = {
      resName: myData.name,
      restaurant_id: myData.id,
      areaname: myData.areaname,
      logo: myData.logo,
    };

    dispatch(assignBasicDetails(details));
    addMenu(menu, dispatch);
  } else {
    if (cur_id != cartItems.restaurant_id) {
      alert("Your Cart contains items from another Restaurant already");
      return false;
    } else {
      addMenu(menu, dispatch);
    }
  }
  return true;
};

const addMenu = (menu, dispatch) => {
  const item = { id: menu.id, name: menu.name, price: menu.price, quantity: 1 };
  dispatch(addItem(item));
};

//remove item from cart
export const removeMenu = (menu, cartItems, dispatch) => {
  const item = { id: menu.id };
  dispatch(removeItem(item));
  if (cartItems.items.length == 0) {
    const details = { resName: "", areaname: "", logo: "" };
    dispatch(assignBasicDetails(details));
  }
};
