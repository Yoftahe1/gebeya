import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import cart from "../model/cart";

interface CartState {
  carts: cart[];
  total: number;
}

const initialState: CartState = {
  carts: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    push: (state, action: PayloadAction<cart>) => {
      state.carts.push(action.payload);
      state.total += action.payload.price;
    },
    pop: (state, action: PayloadAction<number>) => {
      state.total -=
        state.carts[action.payload].price *
        state.carts[action.payload].quantity;
      state.carts = state.carts.filter(
        (element, index) => index !== action.payload
      );
    },
    increment: (state, action: PayloadAction<number>) => {
      state.total += state.carts[action.payload].price;
      state.carts[action.payload].quantity++;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.total -= state.carts[action.payload].price;
      if (state.carts[action.payload].quantity > 1) {
        state.carts[action.payload].quantity--;
      } else {
        state.carts = state.carts.filter(
          (element, index) => index !== action.payload
        );
      }
    },
  },
});

export const { push, pop, increment, decrement } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.carts;

export default cartSlice.reducer;
