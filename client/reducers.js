/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/ShopList/PostReducer';
import intl from './modules/Intl/IntlReducer';
import shopLists from './modules/ShopList/ShopListReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  shopLists,
});
