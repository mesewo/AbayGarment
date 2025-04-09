import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducers'; // Adjust path if needed
import orderReducer from '../reducers/orderReducers'; // Adjust path if needed
import productReducer from '../reducers/productReducers'; // Adjust path if needed
import userReducer from '../reducers/userReducers'; // Adjust path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    productList: productReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]), // Add any middleware here, e.g., thunk
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;