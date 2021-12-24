export const SET_IS_ACTIVE_BURGER = "SET_IS_ACTIVE";

export const setIsActiveBurger = () => ({
  type: SET_IS_ACTIVE_BURGER,
});

export const SET_IS_ACTIVE_BASKET = "SET_IS_ACTIVE_BASKET";

export const setIsActiveBasKet = () => ({
  type: SET_IS_ACTIVE_BASKET,
});

export const SET_IS_CLICKED = "SET_IS_CLICKED";

export const setIsClicked = (value) => ({
  type: SET_IS_CLICKED,
  value,
});

export const SET_IS_CLICKED_CART = "SET_IS_CLICKED_CART";

export const setIsClickedCart = (value) => ({
  type: SET_IS_CLICKED_CART,
  value,
});

export const SET_IS_PROFIL_MODIFY = "SET_IS_PROFIL_MODIFY";

export const setIsProfilModify = () => ({
  type: SET_IS_PROFIL_MODIFY,
});

export const SET_MESSAGE = "SET_MESSAGE";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const setErrorMessage = (errormessage) => ({
  type: SET_ERROR_MESSAGE,
  errormessage
});


export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const deleteMessage = () => ({
  type: DELETE_MESSAGE,
});



