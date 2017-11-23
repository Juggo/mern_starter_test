import { ADD_SHOPLIST, ADD_SHOPLISTS, ADD_SHOPLIST_ITEMS, DELETE_DATA } from './ShopListActions';

// Initial State
const initialState = { data: [] };

const ShopListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPLIST :
      return {
        data: [action.shopList, ...state.data],
      };

    case ADD_SHOPLISTS :
      return {
        data: action.shopLists,
      };
      
    case ADD_SHOPLIST_ITEMS :
      return {
        data: [action.shopListItems, ...state.data],
      };
      
    case DELETE_DATA :
      return {
        data: [],
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getShopLists = state => state.shopLists.data;

// Get post by cuid
export const getShopList = (state, cuid) => state.shopLists.data.filter(shopList => shopList.cuid === cuid)[0];

// Get all posts
export const getShopListItems = state => state.shopLists.data;

// Export Reducer
export default ShopListReducer;
