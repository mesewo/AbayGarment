import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUser } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userConstants';

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('buyer');
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/admin/userlist');
    } else {
        if (!user.username || user._id !== userId) {
        dispatch(getUserDetails(userId));
        } else {
        setUsername(user.username);
        setEmail(user.email);
        setRole(user.role);
        setIsActive(user.isActive);
        }
        }
        }, [dispatch, history, userId, user, successUpdate]);
        
        const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ _id: userId, username, email, role, isActive }));
        };
        
        return (
        <>
        <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
        </Link>
        <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
        <Loader />
        ) : error ? (
        <Message variant="danger">{error}</Message>
        ) : (
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
        <Form.Label>Name</Form.Label>
        <Form.Control
        type="name"
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="isactive">
          <Form.Check
            type="checkbox"
            label="Is Active"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form>
    )}
  </FormContainer>
</>
);
};

export default UserEditScreen;