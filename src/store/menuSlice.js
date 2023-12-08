import { createSelector, createSlice } from "@reduxjs/toolkit";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";

const initialState = {
  items: [
    {
      id: "3b1efb56-2373-48ea-8189-9c8083ee656c",
      title: "Cheese Burger",
      img: burger1,
      price: 200,
      delay: 0,
    },
    {
      id: "148483f5-1096-46b0-9e61-b21dac2f8e2b",
      title: "Veg Cheese Burger",
      img: burger2,
      price: 300,
      delay: 0,
    },
    {
      id: "8d4414b5-863a-41aa-8fa8-676998640a21",
      title: "Cheese Burger with French Fries",
      img: burger3,
      price: 400,
      delay: 0,
    },
  ],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

// export const { addMenuItemToCart, removeMenuItemFromCart } = menuSlice.actions;

export const selectMenuItems = createSelector(
  (state) => state.menu,
  (menu) => menu.items,
);

export const selectMenuItemsInCart = createSelector(
  [
    selectMenuItems,
    (state) => {
      return state.cart.items;
    },
  ],
  (menuItems, cartItems) => {
    return Object.keys(cartItems).map((key) =>
      menuItems.find((element) => element.id === key),
    );
  },
);

export default menuSlice.reducer;
