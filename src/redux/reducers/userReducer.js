import { createSlice } from '@reduxjs/toolkit';
import { call, takeLatest } from 'redux-saga/effects';

const initialState = {
  membershipType: 'priority',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action) {
      state.membershipType = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export const selectUser = (state) => state.user;

export const userReducer = userSlice.reducer;

function* handleGetUserFetch() {
  const user = yield call(() => fetch(''));
}

export function* userSaga() {
  yield takeLatest('user/getUser', handleGetUserFetch);
}
