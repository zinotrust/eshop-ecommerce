import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS(state, action) {
      state.orderHistory = action.payload;
    },
  },
});

export const { STORE_ORDERS } = orderSlice.actions;

export const selectOrderHistory = (state) => state.orders.orderHistory;

export default orderSlice.reducer;
