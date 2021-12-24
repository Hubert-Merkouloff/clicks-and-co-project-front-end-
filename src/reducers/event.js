import {
  DELETE_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_IS_ACTIVE_BASKET,
  SET_IS_ACTIVE_BURGER,
  SET_IS_CLICKED,
  SET_IS_CLICKED_CART,
  SET_IS_PROFIL_MODIFY,
  SET_MESSAGE,
} from "../actions/event";

const initialState = {
  isActive: false,
  isClicked: false,
  isActivCart: false,
  isClickedCart: false,
  message: "",
  errorMessage: ""
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_ACTIVE_BURGER:
      return {
        ...state,
        isActive: !state.isActive,
      };
    case SET_IS_ACTIVE_BASKET:
      return {
        ...state,
        isActivCart: !state.isActivCart,
      };
    case SET_IS_CLICKED:
      return {
        ...state,
        isClicked: action.value,
      };
    case SET_IS_CLICKED_CART:
      return {
        ...state,
        isClickedCart: action.value,
      };
    case SET_IS_PROFIL_MODIFY:
      return {
        ...state,
        isProfilModify: !state.isProfilModify,
      };

    // Message Flash
    case SET_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
      case SET_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.errormessage,
        };
    case DELETE_MESSAGE:
      return {
        ...state,
        message: "",
        errorMessage: ""
      };

    default:
      return state;
  }
};

export default reducer;
