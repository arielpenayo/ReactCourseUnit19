import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed:false
  },
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },

    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          name: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;

      console.log("state.items", state.items);
      const existingItem = state.items.find((i) => i.id === id);
      console.log("existingItem", existingItem);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
