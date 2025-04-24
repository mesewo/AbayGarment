import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducers';
import orderReducer from '../reducers/orderReducers';
import { productListReducer, productDetailsReducer } from '../reducers/productReducers'; // Import explicitly
import userReducers from '../reducers/userReducers';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    productList: productListReducer, // Use the correct reducer
    productDetails: productDetailsReducer, // Use the correct reducer
    userLogin: userReducers.userLogin,
    userRegister: userReducers.userRegister,
    userUpdateProfile: userReducers.userUpdateProfile,
  },
  preloadedState: {
    userLogin: { userInfo: userInfoFromStorage },
  },
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;