import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
    },
    reducers: {
        //set user
        setUser(state, action){
            state.email = action.payload;
        },
        clearUser(state){
            state.email = null;
        }
    }
})

export const {setUser, clearUser} = userSlice.actions;

export default userSlice.reducer;