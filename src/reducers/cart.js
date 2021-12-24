import { ADD_QUANTITY, REMOVE_QUANTITY, ADD_NEW_ITEM, EMPTY_CART } from "../actions/cart";

const initialState = {
  details: [],
};

const cartReducer = (state = initialState, action = {}) => {
  let index;
  let newDetails;

  switch (action.type) {
    case ADD_NEW_ITEM:
      newDetails = [...state.details];
      newDetails.push(action.newItem);

      return {
        ...state,
        details: newDetails,
      };

    case ADD_QUANTITY:
      index = state.details.findIndex((detail) => detail.id === action.id); //finding index

      newDetails = [...state.details];

      newDetails[index].quantity += 1;

      return {
        ...state,
        details: newDetails,
      };

    case REMOVE_QUANTITY:
      index = state.details.findIndex((detail) => detail.id === action.id); //finding index

      newDetails = [...state.details];

      newDetails[index].quantity -= 1;

      if (newDetails[index].quantity === 0) {
        //supprime un élément à partir de l'index
        newDetails.splice(index, 1);
      }

      return {
        ...state,
        details: newDetails,
      };


    case EMPTY_CART:
      return {
        ...state,
        details:[],
      }

    default:
      return state;
  }
};

export default cartReducer;
