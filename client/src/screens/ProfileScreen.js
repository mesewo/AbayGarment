import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import axios from 'axios';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
        setProfilePicture(user.profilePicture);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };
      const { data } = await axios.post('/api/upload/user', formData, config);
      setProfilePicture(data.imageUrl);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name,
          email,
          password,
          profilePicture,
        })
      );
    }
  };

  return (
    <div className="flex justify-center items-start p-6">
      <div className="w-full max-w-xl bg-gray-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>

        {error && <Message variant="danger" className="text-red-600 font-semibold mb-3">{error}</Message>}
        {success && <Message variant="success" className="text-green-600 font-semibold mb-3">Profile Updated</Message>}
        {loading && <Loader />}

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Profile Picture</label>
            <input
              type="text"
              placeholder="Enter profile picture URL"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="file"
              onChange={uploadFileHandler}
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 cursor-pointer"
            />
            {uploading && <Loader />}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileScreen;
