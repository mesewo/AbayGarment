import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios for API calls

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, // Logged-in user info
    loading: false,
    error: null,
    user: {}, // User details for profile
    success: false, // Profile update success flag
  },
  reducers: {
    // Login Actions
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

    // Register Actions
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

    // User Details Actions
    userDetailsRequest: (state) => {
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update Profile Actions
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

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
  userUpdateProfileReset,
} = userSlice.actions;

// Thunk Action for Updating User Profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileRequest());

    const {
      user: { userInfo },
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

export default userSlice.reducer;