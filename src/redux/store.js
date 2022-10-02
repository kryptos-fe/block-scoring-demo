import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { reduxBatch } from '@manaflair/redux-batch';

import { rootReducer } from '@/redux/reducers/rootReducer.js';
import { categorySaga } from '@/redux/reducers/categoryReducer.js';
import { giftSaga } from '@/redux/reducers/giftReducer.js';
import { appSaga } from '@/redux/reducers/appReducer.js';
import { locationSaga } from '@/redux/reducers/locationReducer.js';
import { myGiftSaga } from '@/redux/reducers/myGiftReducer.js';
import { userSaga } from '@/redux/reducers/userReducer.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

function* rootSaga() {
  yield all([categorySaga(), giftSaga(), appSaga(), locationSaga(), myGiftSaga(), userSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
