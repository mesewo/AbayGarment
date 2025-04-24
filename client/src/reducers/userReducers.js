import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios for API calls

// User Login Slice
const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {
    userInfo: null, // Logged-in user info
    loading: false,
    error: null,
  },
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
      state.userInfo = null;
    },
  },
});

// User Register Slice
const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {
    userRegisterRequest: (state) => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// User Profile Update Slice
const userUpdateProfileSlice = createSlice({
  name: 'userUpdateProfile',
  initialState: {
    success: false,
    loading: false,
    error: null,
  },
  reducers: {
    userUpdateProfileRequest: (state) => {
      state.loading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    userUpdateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userUpdateProfileReset: (state) => {
      state.success = false;
      state.error = null;
    },
  },
});

// Export actions for user login
export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} = userLoginSlice.actions;

// Export actions for user registration
export const {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} = userRegisterSlice.actions;

// Export actions for user profile update
export const {
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
  userUpdateProfileReset,
} = userUpdateProfileSlice.actions;

// Thunk Action for Updating User Profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put('/api/users/profile', user, config);

    dispatch(userUpdateProfileSuccess(data));
  } catch (error) {
    dispatch(
      userUpdateProfileFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Combine reducers for export
const userReducers = {
  userLogin: userLoginSlice.reducer,
  userRegister: userRegisterSlice.reducer,
  userUpdateProfile: userUpdateProfileSlice.reducer,
};

export default userReducers;