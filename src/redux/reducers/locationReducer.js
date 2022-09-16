import { createSlice } from '@reduxjs/toolkit';
import { takeLatest, put } from 'redux-saga/effects';
import locationApi from '@/redux/api/locationApi.js';

const initialState = {
  provinces: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    fetchProvinces() {},
    fetchProvincesSuccess(state, action) {
      state.provinces = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
export const selectLocation = (state) => state.location;

function* handleFetchProvinces() {
  const { data } = yield locationApi.fetchProvinces();
  yield put({ type: locationActions.fetchProvincesSuccess().type, payload: data });
}

export function* locationSaga() {
  yield takeLatest(locationActions.fetchProvinces().type, handleFetchProvinces);
}
