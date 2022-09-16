import { createSlice } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import giftApi from '@/redux/api/giftApi.js';
import { scrollToTop } from '@/utils/index.js';
import { DEFAULT_PAGINATION, GIFT_TYPE_MAGIC } from '@/constants/index.js';

const initialState = {
  loading: false,
  gifts: null,
  query: {
    ...DEFAULT_PAGINATION,
    gift_type: GIFT_TYPE_MAGIC.VOUCHER,
  },
  total: 0,
};

const giftSlice = createSlice({
  name: 'gift',
  initialState,
  reducers: {
    appendGifts: (state, { meta, payload }) => {
      if (payload) {
        state.gifts = state.gifts.concat(payload);
        state.total = meta.pagination.total;
      }
      state.loading = false;
    },
    fetchGifts: (state) => {
      state.loading = true;
    },
    fetchGiftsSuccess: (state, { meta, payload }) => {
      if (payload) {
        state.gifts = payload;
        state.total = meta.pagination.total;
      }
      state.loading = false;
      scrollToTop();
    },
    fetchGiftsFailed: (state) => {
      state.loading = false;
    },
    setQuery(state, action) {
      state.query = { ...state.query, ...action.payload };
    },

    resetData(state) {
      state.gifts = null;
      state.total = 0;
    },
  },
});

export const giftActions = giftSlice.actions;
export const giftReducer = giftSlice.reducer;
export const selectGift = (state) => state.gift;

function* handleFetchGifts(action) {
  try {
    const { data, meta } = yield giftApi.fetchGifts(action.payload);
    const actionType = action.payload.isAppend ? giftActions.appendGifts().type : giftActions.fetchGiftsSuccess().type;
    yield put({ type: actionType, payload: data, meta });
  } catch (e) {
    yield put({ type: giftActions.fetchGiftsFailed().type });
  }
}

export function* giftSaga() {
  yield takeLatest(giftActions.fetchGifts().type, handleFetchGifts);
}
