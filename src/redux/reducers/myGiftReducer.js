import { createSlice } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import myGiftApi from '@/redux/api/myGiftApi.js';

const initialState = {
  loading: false,
  gratitudeGifts: null,
  activeVouchers: null,
  usedVouchers: null,
  orders: null,
};

const myGiftSlice = createSlice({
  name: 'myGift',
  initialState: initialState,
  reducers: {
    fetchVouchers(state) {
      state.loading = true;
    },
    fetchVouchersSuccess(state, action) {
      state.vouchers = action.payload;
      state.loading = false;
    },
    fetchVouchersFailed(state) {
      state.loading = false;
    },
    fetchActiveVouchers(state) {
      state.loading = true;
    },
    fetchActiveVouchersSuccess(state, action) {
      state.activeVouchers = action.payload;
      state.loading = false;
    },
    fetchUsedVouchers(state) {
      state.loading = true;
    },
    fetchUsedVouchersSuccess(state, action) {
      state.usedVouchers = action.payload;
      state.loading = false;
    },
    fetchOrders(state) {
      state.loading = false;
    },
    fetchOrdersSuccess(state, action) {
      state.orders = action.payload;
      state.loading = false;
    },
    fetchOrdersFailed(state) {
      state.loading = false;
    },
    // FETCH GRATITUDE ACTION TYPES
    fetchGratitudeGifts(state) {
      state.loading = true;
    },
    fetchGratitudeGiftsSuccess(state, action) {
      state.gratitudeGifts = action.payload;
      state.loading = false;
    },
    fetchGratitudeGiftsFailed(state) {
      state.loading = false;
    },
  },
});

function* fetchMyGiftVouchers(action) {
  try {
    const { data, success } = yield myGiftApi.fetchMyGifts(action.payload);
    if (success) {
      if (action.payload.gift_type === 1) {
        yield put({ type: myGiftActions.fetchVouchersSuccess().type, payload: data });
      } else {
        yield put({ type: myGiftActions.fetchVouchersFailed().type });
      }
    } else {
      yield put({ type: myGiftActions.fetchVouchersFailed().type });
    }
  } catch (e) {
    yield put({ type: myGiftActions.fetchVouchersFailed().type });
  }
}

function* fetchActiveVouchers(action) {
  try {
    const { data } = yield myGiftApi.fetchMyGifts(action.payload);
    if (action.payload.gift_type === 1) {
      yield put({ type: myGiftActions.fetchActiveVouchersSuccess().type, payload: data });
    } else {
      yield put({ type: myGiftActions.fetchVouchersFailed().type });
    }
  } catch (e) {
    yield put({ type: myGiftActions.fetchVouchersFailed().type });
  }
}

function* fetchUsedVouchers(action) {
  try {
    const { data } = yield myGiftApi.fetchMyGifts(action.payload);
    if (action.payload.gift_type === 1) {
      yield put({ type: myGiftActions.fetchUsedVouchersSuccess().type, payload: data });
    } else {
      yield put({ type: myGiftActions.fetchVouchersFailed().type });
    }
  } catch (e) {
    yield put({ type: myGiftActions.fetchVouchersFailed().type });
  }
}

function* fetchOrders(action) {
  try {
    const { data } = yield myGiftApi.fetchMyGifts(action.payload);
    if (action.payload.gift_type === 2) {
      yield put({ type: myGiftActions.fetchOrdersSuccess().type, payload: data });
    } else {
      yield put({ type: myGiftActions.fetchOrdersFailed().type });
    }
  } catch (e) {
    console.log(e);
    yield put({ type: myGiftActions.fetchOrdersFailed().type });
  }
}

function* fetchGratitudeGifts(action) {
  try {
    const { data } = yield myGiftApi.fetchMyGifts(action.payload);
    yield put({ type: myGiftActions.fetchGratitudeGiftsSuccess().type, payload: data });
  } catch (e) {
    yield put({ type: myGiftActions.fetchGratitudeGiftsFailed().type });
  }
}

export function* myGiftSaga() {
  yield takeLatest(myGiftActions.fetchGratitudeGifts().type, fetchGratitudeGifts);
  yield takeLatest(myGiftActions.fetchVouchers().type, fetchMyGiftVouchers);
  yield takeLatest(myGiftActions.fetchActiveVouchers().type, fetchActiveVouchers);
  yield takeLatest(myGiftActions.fetchUsedVouchers().type, fetchUsedVouchers);
  yield takeLatest(myGiftActions.fetchOrders().type, fetchOrders);
}

export const myGiftActions = myGiftSlice.actions;
export const myGiftReducer = myGiftSlice.reducer;
export const selectMyGift = (state) => state.myGift;
