import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_SHOPLIST = 'ADD_SHOPLIST';
export const ADD_SHOPLISTS = 'ADD_SHOPLISTS';
export const ADD_SHOPLIST_ITEMS = 'ADD_SHOPLIST_ITEMS';
export const DELETE_DATA = 'DELETE_DATA';

// Export Actions
export function addShopList(shopList) {
  return {
    type: ADD_SHOPLIST,
    shopList,
  };
}

export function addShopLists(shopLists) {
  return {
    type: ADD_SHOPLISTS,
    shopLists,
  };
}

export function addShopListItems(shopListItems) {
  return {
    type: ADD_SHOPLIST_ITEMS,
    shopListItems,
  };
}

export function deleteData(shopListItems) {
  return {
    type: DELETE_DATA,
    shopListItems
  };
}

export function addShopListRequest(shopList) {
  return (dispatch) => {
    return callApi('shoplists', 'shoplist', {
      shopList: {
        name: shopList.name,
        content: shopList.content,
      },
    }).then(res => dispatch(addShopList(res.shopList)));
  };
}

export function fetchShopLists() {
  return (dispatch) => {
    return callApi('shoplists').then(res => {
      dispatch(addShopLists(res.shopLists));
    });
  };
}

export function fetchShopList(cuid) {
  return (dispatch) => {
    return callApi(`shoplist/${cuid}`).then(res => dispatch(addShopList(res.shopList)));
  };
}


export function fetchShopListsByFilter(name) {
  return (dispatch) => {
    return callApi(`shoplists/${name}`).then(res => {
      dispatch(addShopLists(res.shopLists));
    });
  };
}
