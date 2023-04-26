import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // state points to our items array/map, action contains the data to modified.
        addItem : (state, action) => {
            const item = action.payload;
            const itemPresent = state.items.find(
                (i) => i.id === item.id
            );

            if(itemPresent){
                itemPresent.quantity += 1;
            }else{
                state.items.push(item);
            }
        },
        removeItem: (state, action) => {
            // write logic to search action payload in state and remove that.
            const item = action.payload;
            const index = state.items.find(
                (i) => i.id === item.id
            );
            if(index !== -1){
                if(index.quantity > 1){
                    index.quantity -= 1;
                }else{
                    state.items.splice(index, 1);
                }
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

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
