import { cartReducer } from './cartReducer.js';
import { appReducer } from './appReducer.js';
import { userReducer } from './userReducer.js';
import { categoryReducer } from './categoryReducer.js';
import { giftReducer } from './giftReducer.js';
import { locationReducer } from './locationReducer.js';
import { myGiftReducer } from './myGiftReducer.js';

export const rootReducer = {
  app: appReducer,
  user: userReducer,
  category: categoryReducer,
  gift: giftReducer,
  cart: cartReducer,
  location: locationReducer,
  myGift: myGiftReducer,
};
