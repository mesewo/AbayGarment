import { createSlice } from '@reduxjs/toolkit';

// Product List Reducer
const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    productListRequest: (state) => {
      state.loading = true;
      state.products = [];
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Product Details Reducer
const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    product: { reviews: [] },
    loading: false,
    error: null,
  },
  reducers: {
    productDetailsRequest: (state) => {
      state.loading = true;
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productListRequest,
  productListSuccess,
  productListFail,
} = productListSlice.actions;

export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = productDetailsSlice.actions;

export const productListReducer = productListSlice.reducer;
export const productDetailsReducer = productDetailsSlice.reducer;