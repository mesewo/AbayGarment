import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ErrorBoundary from './ErrorBoundary'; //  Adjust path

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin) || {}; // Ensure a default fallback
  const { userInfo } = userLogin; // Safely destructure from userLogin

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <ErrorBoundary>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Link to="/">
              <Navbar.Brand>Abay Garment</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/cart" className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  {cartItems.length > 0 && (
                    <span className="badge badge-light ml-1">
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                    </span>
                  )}
                </Link>
                {userInfo?.username ? (
                  <NavDropdown title={userInfo.username} id="username">
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                    {userInfo.role === 'admin' && (
                      <>
                        <Link to="/admin/userlist" className="dropdown-item">
                          Users
                        </Link>
                        <Link to="/admin/productlist" className="dropdown-item">
                          Products
                        </Link>
                        <Link to="/admin/orderlist" className="dropdown-item">
                          Orders
                        </Link>
                      </>
                    )}
                  </NavDropdown>
                ) : (
                  <Link to="/login" className="nav-link">
                    <FontAwesomeIcon icon={faUser} /> Sign In
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </ErrorBoundary>
  );
};

export default Header;
