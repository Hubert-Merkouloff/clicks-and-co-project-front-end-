import { CLEAN_DATA_CITY, SAVE_DATA_CITY } from "../actions/search";

const initialState = {

  cityList : [],
  

};

const reducer = (state = initialState, action = {}) => {
    
  switch (action.type) {

    case SAVE_DATA_CITY:
      return {
        ...state,
        cityList: action.cityList,
      };

    case CLEAN_DATA_CITY:
      return {
        ...state,
        cityList:[],
      }

    
    
    default:
      return state;
  }
};

export default reducer;