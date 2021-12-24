import {

  LOGOUT,
  REDIRECTION,
  SET_CURRENT_USER,
  SET_IS_LOGGED,
 
  SET_USER_PAGE,
} from "../actions/user";

const initialState = {
  isLogin: true,
  user: {},
  //message: "",
  isRedirection: false,
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Save user state
    case SET_USER_PAGE: {
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    }
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.user
      };
  
    // Redirection when success login page
    case REDIRECTION:
      return {
        ...state,
        isRedirection: !state.isRedirection,
      };
    case SET_IS_LOGGED:
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;
