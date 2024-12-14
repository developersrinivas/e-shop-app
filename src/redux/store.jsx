// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Assuming you have productSlice for products

const store = configureStore({
  reducer: {
    products: productReducer, // Example product state
  },
});

export default store;
