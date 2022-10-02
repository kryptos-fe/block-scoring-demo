import { createSlice } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import categoryApi from '@/redux/api/categoryApi.js';

const initialState = {
  voucherCategories: null,
  physicalCategories: null,
  vipCategories: null,
  category: null,
  brands: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchPhysicalCategory() {},
    fetchPhysicalCategorySuccess(state, action) {
      state.physicalCategories = action.payload;
    },

    fetchVoucherCategory() {},
    fetchVoucherCategorySuccess(state, action) {
      state.voucherCategories = action.payload;
    },

    fetchVipCategory() {},
    fetchVipCategorySuccess(state, action) {
      state.vipCategories = action.payload;
    },

    fetchBrands() {},
    fetchBrandsSuccess(state, action) {
      state.brands = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
export const selectCategory = (state) => state.category;

function* handleFetchPhysicalCategory() {
  const params = { parent_id: 136 };
  const { data } = yield categoryApi.fetchCategories(params);
  yield put({ type: categoryActions.fetchPhysicalCategorySuccess.type, payload: data });
}

function* handleFetchVipCategory() {
  const params = { parent_id: 151 };
  const { data } = yield categoryApi.fetchCategories(params);
  yield put({ type: categoryActions.fetchVipCategorySuccess().type, payload: data });
}

function* handleFetchVoucherCategory() {
  const params = { parent_id: 2 };
  const { data } = yield categoryApi.fetchCategories(params);
  let arr = [];
  for (let item of data) {
    arr = arr.concat(item.children);
  }
  yield put({ type: categoryActions.fetchVoucherCategorySuccess.type, payload: arr });
}

function* handleFetchBrands() {
  const { data } = yield categoryApi.fetchBrands();
  yield put({ type: categoryActions.fetchBrandsSuccess.type, payload: data });
}

export function* categorySaga() {
  yield takeLatest(categoryActions.fetchPhysicalCategory().type, handleFetchPhysicalCategory);
  yield takeLatest(categoryActions.fetchVoucherCategory().type, handleFetchVoucherCategory);
  yield takeLatest(categoryActions.fetchVipCategory().type, handleFetchVipCategory);
  yield takeLatest(categoryActions.fetchBrands().type, handleFetchBrands);
}
