import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Container, Row } from 'react-bootstrap'; //  Also import Row
//  Import the shipping-related action
import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  //  State variables for form fields
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  //  Populate state if there's an existing shipping address
  useEffect(() => {
    if (shippingAddress) {
      setAddress(shippingAddress.address || '');
      setCity(shippingAddress.city || '');
      setPostalCode(shippingAddress.postalCode || '');
      setCountry(shippingAddress.country || '');
    }
  }, [shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    //  Dispatch action to save shipping address
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');  //  Or wherever you navigate after shipping
  };

  return (
    <Container>
      <Row>  {/* Add a Row component */}
        <Col> {/* Wrap your form in a Col */}
          <Form onSubmit={submitHandler}>
            <h1>Shipping Address</h1>

            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='city'>
              <Form.Label>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter city'
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='postalCode'>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter postal code'
                value={postalCode}
                required
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='country'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter country'
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Button type='submit' variant='primary'>
              Continue
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingScreen;