import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectMenuItemsInCart } from "./menuSlice";

const initialState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const menuItemId = action.payload;
      const prevValue = state.items[menuItemId];

      state.items[menuItemId] = prevValue ? prevValue + 1 : 1;
    },
    removeItemFromCart: (state, action) => {
      const menuItemId = action.payload;
      const prevValue = state.items[menuItemId];

      if (!prevValue) return;

      if (prevValue === 1) {
        delete state.items[menuItemId];
      } else {
        state.items[menuItemId] = prevValue - 1;
      }
    },
  },
});

export const selectCartItems = createSelector(
  (state) => state.cart.items,
  (cartItems) => cartItems,
);

export const selectItemTotalPrice = createSelector(
  [selectCartItems, selectMenuItemsInCart],
  (cartItems, menuItemsInCart) => {
    return Object.entries(cartItems).reduce((acc, entry) => {
      const [id, amount] = entry;
      const menuItem = menuItemsInCart.find((item) => item.id === id);

      const itemTotalPrice = menuItem.price * amount;

      return acc + itemTotalPrice;
    }, 0);
  },
);

export const selectCartItemAmount = createSelector(
  [selectCartItems],
  (cartItems) => {
    if (Object.keys(cartItems).length === 0) {
      return null;
    }

    return Object.keys(cartItems).length;
  },
);

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
