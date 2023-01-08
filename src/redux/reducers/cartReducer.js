import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: 0,
        id: null
    },
    reducers: {
        incrementCart: (state, action) => {
            state.cart += 1;
            state.id = action.payload;
        }
    }
})

export const {incrementCart} = cartSlice.actions;

export default cartSlice.reducer;