import { configureStore } from '@reduxjs/toolkit';
import headphonesReducer from './headphonesSlice';
import cartReducer from "./cartSlice"
import computersReducer from './computersSlice';

const store = configureStore({
  reducer: {
    headphones: headphonesReducer,
    cart: cartReducer,
    computers: computersReducer,
  },
});

export default store;
