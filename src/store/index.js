import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer } //.reducer is automatically created by createSlice() also.
})

export default store;