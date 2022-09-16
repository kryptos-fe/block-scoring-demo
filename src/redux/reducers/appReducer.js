import { createSlice } from '@reduxjs/toolkit';
import { axiosClient } from '@/utils/index.js';
import { categoryActions } from '@/redux/reducers/categoryReducer.js';
import { all, put, takeLatest } from 'redux-saga/effects';
import { locationActions } from '@/redux/reducers/locationReducer.js';
import { myGiftActions } from '@/redux/reducers/myGiftReducer.js';
import { GIFT_TYPE_MAGIC } from '@/constants/index.js';
import moment from 'moment';

const initialState = {
  card: null,
  isLoading: false,
  isLoggedIn: false,
  isExpired: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCard(state, action) {
      state.card = action.payload;
    },
    setExpired(state) {
      state.isExpired = true;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    fetchCard(state) {
      state.isLoading = true;
    },
    fetchCardSuccess(state, action) {
      state.card = action.payload;
      state.isLoading = false;
    },
    fetchCardFailed(state) {
      state.isLoading = false;
      state.card = null;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
export const selectApp = (state) => state.app;

function* handleFetchCard() {
  try {
    const { data, externalData } = yield axiosClient.get('/card');
    if (typeof externalData._id === 'undefined') {
      throw new Error(externalData.msg);
    }

    if (data) {
      yield all([
        put({ type: locationActions.fetchProvinces.type }),
        put({ type: categoryActions.fetchBrands.type }),
        put({
          type: myGiftActions.fetchGratitudeGifts.type,
          payload: {
            gift_type: GIFT_TYPE_MAGIC.GRATITUDE,
            site_user_id: data.site_user_id,
          },
        }),
        put({ type: categoryActions.fetchVipCategory.type }),
        put({ type: categoryActions.fetchVoucherCategory.type }),
        put({ type: categoryActions.fetchPhysicalCategory.type }),
      ]);

      data.external = externalData;
      yield put({ type: appActions.fetchCardSuccess().type, payload: data });
      yield put({ type: appActions.setIsLoggedIn().type, payload: true });

      if (data.expired !== 0 && data.expired <= moment().unix()) {
        yield put({ type: appActions.setExpired().type });
      }
    } else {
      yield put({ type: appActions.fetchCardFailed().type });
    }
  } catch (e) {
    yield put({ type: appActions.fetchCardFailed().type });
  }
}

export function* appSaga() {
  yield takeLatest(appActions.fetchCard().type, handleFetchCard);
}
