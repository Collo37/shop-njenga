import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      let itemPrice = action.payload.cartItem.price;
      let quantity = action.payload.cartItem.quantity;

      state.items.push(action.payload.cartItem);
      state.totalItems += 1;
      state.total += itemPrice * quantity;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
