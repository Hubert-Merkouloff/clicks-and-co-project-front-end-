export const ADD_DATA_CITY = 'ADD_DATA_CITY';

export const addDataCity = (searchvalue) => ({
  type: ADD_DATA_CITY,
  searchvalue
});

export const SAVE_DATA_CITY = 'SAVE_DATA_CITY';

export const saveDataCity = (cityList) => ({
  type: SAVE_DATA_CITY,
  cityList
});


export const CLEAN_DATA_CITY = 'CLEAN_DATA_CITY';

export const cleanDataCity = () => ({
  type: CLEAN_DATA_CITY,
  
});


