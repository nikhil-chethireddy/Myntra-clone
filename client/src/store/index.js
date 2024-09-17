import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagItemsSlice from "./bagItemsSlice";
import fetchSlice from "./fetchSlice";

const itemsStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bagItems: bagItemsSlice.reducer,
    fetch: fetchSlice.reducer,
  },
});

export default itemsStore;
