// client/src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';
import WishlistScreen from './screens/WhishlistScreen';
import AdminDashboard from './screens/admin/AdminDashboard';
// import UserListScreen from './screens/admin/UserListScreen';
// import UserEditScreen from './screens/admin/UserEditScreen';
// import ProductListScreen from './screens/admin/ProductListScreen';
// import ProductEditScreen from './screens/admin/ProductEditScreen';
// import OrderListScreen from './screens/admin/OrderListScreen';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingScreen />} exact />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/search/:keyword" element={<HomeScreen />} />
          <Route path="/page/:pageNumber" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart/:id?" element={<CartScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          
          {/* Private Routes */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/order/:id/success" element={<OrderSuccessScreen />} />
            <Route path="/wishlist" element={<WishlistScreen />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="" element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* <Route path="/admin/userlist" element={<UserListScreen />} /> */}
            {/* <Route path="/admin/user/:id/edit" element={<UserEditScreen />} /> */}
            {/* <Route path="/admin/productlist" element={<ProductListScreen />} /> */}
            {/* <Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />} /> */}
            {/* <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} /> */}
            {/* <Route path="/admin/orderlist" element={<OrderListScreen />} /> */}
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;