import React from 'react';
import './Header.css'; // Import the Header.css file
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin) || {};
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Abay <span>Garment</span>
        </Link>

        {/* Navigation Links */}
        <nav className="nav-links">
          {/* Cart Link */}
          <Link to="/cart" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
            {cartItems.length > 0 && (
              <span className="cart-badge">
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            )}
          </Link>

          {/* User Dropdown */}
          {userInfo ? (
            <div className="user-dropdown">
              <span className="nav-link">
                <FontAwesomeIcon icon={faUser} /> {userInfo.username}
              </span>
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <button onClick={logoutHandler} className="dropdown-item">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} /> Sign In
            </Link>
          )}

          {/* Admin Dropdown */}
          {userInfo && userInfo.role === 'admin' && (
            <div className="admin-dropdown">
              <span className="nav-link">Admin</span>
              <div className="dropdown-menu">
                <Link to="/admin/userlist" className="dropdown-item">
                  Manage Users
                </Link>
                <Link to="/admin/productlist" className="dropdown-item">
                  Manage Products
                </Link>
                <Link to="/admin/orderlist" className="dropdown-item">
                  Manage Orders
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button (Optional for small screens) */}
        <button className="mobile-menu-btn">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;