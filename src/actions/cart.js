//counter

export const ADD_QUANTITY = "ADD_QUANTITY";

export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  id,
});

export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

export const removeQuantity = (id) => ({
  type: REMOVE_QUANTITY,
  id,
});

export const ADD_NEW_ITEM = "ADD_NEW_ITEM";

export const addNewItem = (newItem) => ({
  type: ADD_NEW_ITEM,
  newItem,
});

// send cart api

export const SEND_CART = "SEND_CART";

export const sendCart = (value) => ({
  type: SEND_CART,
  value,
});

export const EMPTY_CART = "EMPTY_CART";

export const emptyCart = () => ({
  type: EMPTY_CART,
});
