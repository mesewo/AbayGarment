import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin || {};

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-abay-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xll font-bold">
            AbayGarment
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/cart" className="flex items-center relative">
              <FaShoppingCart className="text-xl" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-abay-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
              <span className="ml-2">Cart</span>
            </Link>

            {userInfo ? (
              <div className="relative group">
                <button className="flex items-center">
                  <FaUser className="mr-1" />
                  {userInfo.name}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Wishlist
                  </Link>
                  {userInfo.isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/register" className="bg-abay-gold hover:bg-yellow-700 px-4 py-2 rounded-full transition">Register</Link>
                 
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-white bg-blue-800 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart className="mr-2" />
              Cart
              {cartItems.length > 0 && (
                <span className="ml-auto bg-abay-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </Link>

            {userInfo ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-white bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/wishlist"
                  className="block px-3 py-2 rounded-md text-white bg-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  Wishlist
                </Link>
                {userInfo.isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="block px-3 py-2 rounded-md text-white bg-blue-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    logoutHandler();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-white bg-blue-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-white bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;