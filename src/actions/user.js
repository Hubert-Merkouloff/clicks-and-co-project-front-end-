export const SET_USER_PAGE = "SET_USER_PAGE";

export const setUserPage = () => ({
  type: SET_USER_PAGE,
});

export const LOGIN = "LOGIN";

export const login = () => ({
  type: LOGIN,
});

export const SET_PROFIL = 'PROFIL';

export const setProfil = () => ({
  type: SET_PROFIL,
  
  
});


export const LOGOUT = "LOGOUT";

export const logOut = () => ({
  type: LOGOUT,
});

export const REGISTER = "REGISTER";

export const register = () => ({
  type: REGISTER,
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (user, id) => ({
  type: SET_CURRENT_USER,
  user,
  id
});


export const REDIRECTION = "REDIRECTION";

export const redirection = () => ({
  type: REDIRECTION,
});

export const SET_IS_LOGGED = "SET_IS_LOGGED";

export const setIsLogged = () => ({
  type: SET_IS_LOGGED,
});
