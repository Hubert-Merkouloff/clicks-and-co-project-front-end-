export const SET_FIELD_VALUE = "SET_FIELD_VALUE";

export const setFieldValue = (name, value) => ({
  type: SET_FIELD_VALUE,
  name,
  value,
});

export const SET_FIELD_ERROR = 'SET_FIELD_ERROR';

export const setFieldError = (value) => ({
  type: SET_FIELD_ERROR,
  value
});

export const DELETE_FIELD_ERROR = 'DELETE_FIELD_ERROR';

export const deleteFieldError = () => ({
  type: DELETE_FIELD_ERROR,
  
});

export const DELETE_FIELD = 'DELETE_FIELD';

export const deleteField = () => ({
  type: DELETE_FIELD,
  
});

export const SET_FIELD_PROFIL_VALUE = 'SET_FIELD_PROFIL_VALUE';

export const setFieldProfilValue = (
  valueName,
  valueName2,
  email,
  phone,
  address,
  zip,
  city
) => ({
  type: SET_FIELD_PROFIL_VALUE,
  valueName,
  valueName2,
  email,
  phone,
  address,
  zip,
  city,
});






export const CLEAN_SEARCH_VALUE = 'CLEAN_SEARCH_VALUE';

export const cleanSearchValue = () => ({
  type: CLEAN_SEARCH_VALUE,
  
});

