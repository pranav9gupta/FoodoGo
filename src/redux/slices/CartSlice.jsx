import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreaseQuantity: (state, action) => {
      if (action.payload.qty === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
