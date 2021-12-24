import { DELETE_FIELD, DELETE_FIELD_ERROR, SET_FIELD_ERROR, SET_FIELD_PROFIL_VALUE, SET_FIELD_VALUE } from "../actions/field";


const initialState = {
  // state champs controllés
  emailValue: "",
  passwordValue: "",
  firstNameValue: "",
  lastNameValue: "",
  cityValue: "",
  addresseValue: "",

  zipcodeValue: "",
  confirmPasswordValue: "",
  searchValue: "",
  submitedValue: "",
  phoneValue: "",

  //state error champs controllés
  errors: {
    //email: false,
    //password: false
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SET_FIELD_ERROR:
        return {
          ...state,
          errors: action.value
        }
      case DELETE_FIELD_ERROR:
        return {
          ...state,
          errors: {}
        }
        case DELETE_FIELD:
          return {
            ...state,
            emailValue: "",
            passwordValue: "",
            firstNameValue: "",
            lastNameValue: "",
            cityValue: "",
            zipcodeValue: "",
            confirmPasswordValue: "",
            searchValue: "",
            submitedValue: "",
            phoneValue: "",
            addresseValue: "",
          };
        case SET_FIELD_PROFIL_VALUE:
          return {
            ...state,
            lastNameValue: action.valueName,
            firstNameValue:action.valueName2,
            emailValue: action.email,
            phoneValue: action.phone,
            addresseValue: action.address,
            zipcodeValue: action.zip,
            cityValue: action.city
          }
    default:
      return state;
  }
};

export default reducer;