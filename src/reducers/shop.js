import { SAVE_LIST_CATEGORIES, SAVE_LIST_RANDOM_SHOP, SAVE_LIST_SEARCH_SHOP, SAVE_LIST_SHOP_ITEM, SET_CURRENT_SHOP,SET_LIST_SEARCH_SHOP_FILTER,SET_LOADING,SUBMITED_VALUE } from "../actions/shop";

const initialState = {
  
  listrandomshop:[],
  listsearchshop:[],
  listsearchshopfilter:[],
  listshopitem:[],
  listcategories : [],
  currentShop_id:"",
  loading:false,
  
  

};

const reducer = (state = initialState, action = {}) => {
    
  switch (action.type) {

    case SAVE_LIST_RANDOM_SHOP:
      return {
        ...state,
        listrandomshop: action.list,
      };

    case SUBMITED_VALUE:
      return {
        ...state,
        submitedValue: action.searchValue,
      };

    case SAVE_LIST_SEARCH_SHOP:
      return {
        ...state,
        listsearchshop: action.list,
      };

    case SET_CURRENT_SHOP:
      return {
        ...state,
        currentShop_id: action.id,
      };

    case SAVE_LIST_SHOP_ITEM:
      return {
        ...state,
        listshopitem: action.list,
      };

    case SAVE_LIST_CATEGORIES:
      return {
        ...state,
        listcategories : action.list
      }

    case SET_LOADING:
      return {
        ...state,
        loading:action.value
      }


    case SET_LIST_SEARCH_SHOP_FILTER:
        return {
          ...state,
          listsearchshopfilter:action.list
        }

    

    
    default:
      return state;
  }
};

export default reducer;