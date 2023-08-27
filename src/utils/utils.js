import { addItem, removeItem, assignBasicDetails } from "./cartSlice";


// Function to filter restaurants when searching.
export function filterRestaurants(searchTxt, allRestaurants) {
  if (searchTxt === "") return allRestaurants;
  const filteredData = allRestaurants.filter(
    (restaurant) => {
      return restaurant?.info?.name?.toLowerCase().includes(searchTxt?.toLowerCase())
      // restaurant?.data?.data?.area?.toLowerCase().includes(searchTxt?.toLowerCase()) )
    }
  );
  return filteredData;
}

// Function to show the quantity of an item in meals page.
export const findQuantity = (id, cartItems) => {
  const count = cartItems?.items?.findIndex((i) => i.id === id);
  if (count === undefined) return 0;
  if(cartItems?.items[count]?.quantity === undefined) return 0;
  return (cartItems?.items[count]?.quantity);
};

// Function to be executed when add to cart is called, first checks if there's any restaurant conflict, we can't have orders from two restaurants together, then adds the meal.
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
