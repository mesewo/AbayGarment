import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const dispatch = useDispatch();

  // Access the cart state from Redux
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // Redirect to /shipping if no shipping address exists
  if (!shippingAddress) {
    navigate('/shipping');
  }

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState('Chapa'); // Default to "Chapa"

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch(savePaymentMethod(paymentMethod)); // Dispatch the selected payment method
    navigate('/placeorder'); // Navigate to the Place Order screen
  };

  return (
    <FormContainer>
      {/* Steps for Checkout */}
      <CheckoutSteps step1 step2 step3 />

      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            {/* Radio button for Chapa */}
            <Form.Check
              type="radio"
              label="Chapa"
              id="Chapa"
              name="paymentMethod"
              value="Chapa"
              checked={paymentMethod === 'Chapa'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            {/* Radio button for Telebirr */}
            <Form.Check
              type="radio"
              label="Telebirr"
              id="Telebirr"
              name="paymentMethod"
              value="Telebirr"
              checked={paymentMethod === 'Telebirr'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>

            {/* Radio button for Cash on Delivery */}
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              id="CashOnDelivery"
              name="paymentMethod"
              value="CashOnDelivery"
              checked={paymentMethod === 'CashOnDelivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        {/* Submit button */}
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
