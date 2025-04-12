import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CheckoutSteps.css'; // Import the CheckoutSteps.css file

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="checkout-steps justify-content-center mb-4">
      <Nav.Item className="nav-item">
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link className="nav-link">Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="nav-link disabled">Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="nav-item">
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="nav-link">Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="nav-link disabled">Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="nav-item">
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link className="nav-link">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="nav-link disabled">Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item className="nav-item">
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="nav-link">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="nav-link disabled">Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;