import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducers';
import orderReducer from '../reducers/orderReducers';
import { productListReducer, productDetailsReducer } from '../reducers/productReducers'; // Import explicitly
import userReducer from '../reducers/userReducers';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    productList: productListReducer, // Use the correct reducer
    productDetails: productDetailsReducer, // Use the correct reducer
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;