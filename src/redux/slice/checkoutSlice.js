import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: {},
  billingAddress: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    SAVE_SHIPPING_ADDRESS(state, action) {
      // console.log(action.payload);
      state.shippingAddress = action.payload;
    },
    SAVE_BILLING_ADDRESS(state, action) {
      // console.log(action.payload);
      state.billingAddress = action.payload;
    },
  },
});

export const { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } =
  checkoutSlice.actions;

export const selectShippingAddress = (state) => state.checkout.shippingAddress;
export const selectBillingAddress = (state) => state.checkout.billingAddress;

export default checkoutSlice.reducer;
