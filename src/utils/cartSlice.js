import { createSlice } from "@reduxjs/toolkit";

const cartItems = {
  restaurantName: "",
  restaurant_id: "",
  areaName: "",
  logo: "",
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems,
  },
  reducers: {
    // state points to our items array/map, action contains the data to modified.
    assignBasicDetails: (state, action) => {
      state.cartItems.restaurantName = action.payload.resName;
      state.cartItems.restaurant_id = action.payload.restaurant_id;
      state.cartItems.areaName = action.payload.areaname;
      state.cartItems.logo = action.payload.logo;
    },
    addItem: (state, action) => {
      const item = action.payload;
      const itemPresent = state.cartItems.items.find((i) => i.id === item.id);

      if (itemPresent) {
        itemPresent.quantity += 1;
      } else {
        state.cartItems.items.push(item);
      }
    },
    removeItem: (state, action) => {
      // write logic to search action payload in state and remove that.
      const item = action.payload;
      const index = state.cartItems.items.findIndex((i) => i.id === item.id);
      if (index !== -1) {
        if (state.cartItems.items[index].quantity > 1) {
          state.cartItems.items[index].quantity -= 1;
        } else if (state.cartItems.items[index].quantity == 1) {
          state.cartItems.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      (state.cartItems.restaurantName = ""),
        (state.cartItems.restaurant_id = ""),
        (state.cartItems.areaName = ""),
        (state.cartItems.logo = ""),
        (state.cartItems.items = []);
    },
  },
});

export const { assignBasicDetails, addItem, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

/**
 * The process of creating redux store
 * 
 * Create store using configureStore imported from RTK
 *  - Create Slices
 *      - Cart Slice
 *          - Create using createSlice imported from RTK
 *          - contains {
 *              name: cart,
 *              intialState: { items: []},
 *              reducers: {
 *                  contains actions
 *                  addItems: (state, action) => {modifies the state(items) by action payload}
 *                  removeItems:
 *                  clearCart:
 *              }
 *          }
 *          export it to be used in redux store, 
 *          - reducers are exported by default, cartSlice.reducer
 *          - actions are exported by name(many), const {addItem, removeItem} = cartSlice.actions
 * 
 *      - User Slice
 *          - Create userSlice using createSlice imported from RTK
 *          - it takes an object: {
 *                  name: 'user',
 *                  initialState: {
 *                      email: "",
 *                   },
 *                  reducers: {
 *                      setUser(state, action){},
 *                      clearUser(state, action){}
 *                  }
 *              }
 *          - export, actions using named export
 *          - export reducer by default.
 *  - configure in redux store
 *      - import the slice, reducers come by dedfault
 *      - reducer: {
 *          sliceName: slice
 *          cart: cartSlice,
 *          user: userSlice,
 *        }
 * 
 * 
 *  - Subscribe to the redux store to update our cart: using useSelector hook imported from react-redux
 *      - useSelector(store.sliceName.items)
 
    - Dispatch an action: addItem, removeItem
        - dispatch(action)
        - dispatch(addItem("id of item or what needed"))
        - dispatch comes from a hook useDispatch which is imported from react-redux

*/
