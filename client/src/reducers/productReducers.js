import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: { reviews: [] }, //  Initialize product as an object with reviews array
    loading: false,
    error: null,
    success: false, //  For delete, create, update success flags
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
    productDeleteRequest: (state) => {
      state.loading = true;
    },
    productDeleteSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productCreateRequest: (state) => {
      state.loading = true;
    },
    productCreateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productUpdateRequest: (state) => {
      state.loading = true;
    },
    productUpdateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productUpdateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productReviewCreateRequest: (state) => {
      state.loading = true;
    },
    productReviewCreateSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productReviewCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productTopRequest: (state) => {
      state.loading = true;
      state.products = [];
    },
    productTopSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productTopFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  productListRequest,
  productListSuccess,
  productListFail,
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productReviewCreateRequest,
  productReviewCreateSuccess,
  productReviewCreateFail,
  productTopRequest,
  productTopSuccess,
  productTopFail,
} = productSlice.actions;

export default productSlice.reducer;