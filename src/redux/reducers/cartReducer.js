import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  giftDetail: null,
  amount: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart(state) {
      state.giftDetail = null;
      state.amount = 0;
      state.quantity = 0;
    },
    addItemToCart(state, action) {
      state.giftDetail = action.payload;
      state.amount = state.giftDetail.is_promo ? state.giftDetail.point_promo : state.giftDetail.point;
      state.quantity = 1;
    },
    onPlusQuantity(state) {
      const displayPoint = state.giftDetail.is_promo ? state.giftDetail.point_promo : state.giftDetail.point;
      state.amount += displayPoint;
      state.quantity += 1;
    },
    onMinusQuantity(state) {
      if (state.quantity > 1) {
        const displayPoint = state.giftDetail.is_promo ? state.giftDetail.point_promo : state.giftDetail.point;
        state.amount -= displayPoint;
        state.quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectCart = (state) => state.cart;

export const cartReducer = cartSlice.reducer;
