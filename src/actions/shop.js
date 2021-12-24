export const GET_LIST_RANDOM_SHOP = 'GET_LIST_RANDOM_SHOP';

export const getListRandomShop = () => ({
  type: GET_LIST_RANDOM_SHOP,
  
});


export const SAVE_LIST_RANDOM_SHOP = 'SAVE_LIST_RANDOM_SHOP';

export const saveListRandomShop = (list) => ({
  type: SAVE_LIST_RANDOM_SHOP,
  list,
  
});


export const SEARCH_SHOP = 'SEARCH_SHOP';

export const searchShop = () => ({
  type: SEARCH_SHOP,
    
});


export const SAVE_LIST_SEARCH_SHOP = 'SAVE_LIST_SEARCH_SHOP';

export const saveListSearchShop = (list) => ({
  type: SAVE_LIST_SEARCH_SHOP,
  list,
  

});

export const SAVE_LIST_SHOP_ITEM = 'SAVE_LIST_SHOP_ITEM';

export const saveListShopItem = (list) => ({
  type: SAVE_LIST_SHOP_ITEM,
  list
});


export const SUBMITED_VALUE = 'SUBMITED_VALUE';

export const submitedValue = (searchValue) => ({
  type: SUBMITED_VALUE,
  searchValue
});


export const SET_CURRENT_SHOP = 'SET_CURRENT_SHOP';

export const setCurrentShop = (id) => ({
  type: SET_CURRENT_SHOP,
  id
});



export const SEARCH_SHOP_ITEMS = 'SEARCH_SHOP_ITEMS';

export const searchShopItems = () => ({
  type: SEARCH_SHOP_ITEMS,
  
});


export const SET_LOADING = 'SET_LOADING';

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});


export const SET_LIST_SEARCH_SHOP_FILTER = 'SET_LIST_SEARCH_SHOP_FILTER';

export const setListSearchShopFilter = (list) => ({
  type: SET_LIST_SEARCH_SHOP_FILTER,
  list
});

export const GET_LIST_CATEGORIES = 'GET_LIST_CATEGORIES';

export const getListCategories = () => ({
  type: GET_LIST_CATEGORIES,
  
});

export const SAVE_LIST_CATEGORIES = 'SAVE_LIST_CATEGORIES';

export const saveListCategories = (list) => ({
  type: SAVE_LIST_CATEGORIES,
  list
});






