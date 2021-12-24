import axios from "axios";
import { deleteMessage, setErrorMessage, setMessage } from "../actions/event";

import {
  LOGIN,
  redirection,
  REGISTER,
  setCurrentUser,
  setIsLogged,
  SET_PROFIL,
} from "../actions/user";

const userMiddleware = (store) => (next) => (action) => {
  let apiUrl = process.env.REACT_APP_API;
  const state = store.getState();
  const { field } = state;
  const {
    firstNameValue,
    lastNameValue,
    cityValue,
    emailValue,
    passwordValue,
    //confirmPasswordValue,
    zipcodeValue,
    phoneValue,
    addresseValue,
  } = field;

  const { user: userState } = state;

  const {
    id,
    token,
    avatar,
    roles,
  } = userState.user;

  console.log(`Login id ${id}`)

  switch (action.type) {
    case LOGIN: {
      axios
        .post(`${apiUrl}/login_check`, {
          username: emailValue,
          password: passwordValue,
        })

        .then((response) => {
          // destruring response.data.user for save id, directly in state
          console.log(response.data)
          const { user, token} = response.data;
          
           const {
            id,
            firstname,
            lastname,
            email,
            phone_number,
            address,
            zip_code,
            city,
            avatar,
            roles
          } = user 
          const userInfos = {
            id: id,
            token: token,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone_number,
            address: address,
            zip_code: zip_code,
            city: city,
            avatar: avatar,
            roles: roles
          };
          //save user
          store.dispatch(setCurrentUser(userInfos));
          store.dispatch(setIsLogged());
          // set isRedirection => true
          store.dispatch(redirection());
        })
        .catch(() => {
          const errorMessage =
            "Votre e-mail ou votre mot de passe n'est pas correct";
          // show flasMessage error
            store.dispatch(setErrorMessage(errorMessage));
          // hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);
        });

      next(action);
      break;
    }
    case REGISTER: {
      axios
        .post(`${apiUrl}/users`, {
          firstname: firstNameValue,
          lastname: lastNameValue,
          city: cityValue,
          address: addresseValue,
          zip_code: zipcodeValue,
          phone_number: phoneValue,
          email: emailValue,
          password: passwordValue,
        })

        .then((response) => {
          // on recupére message
          store.dispatch(setMessage(response.message));
          // hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);

          // set isRedirection => true
          const registerMessage = "Compte utilisateur créé";
          store.dispatch(redirection());
          store.dispatch(setMessage(registerMessage));
        })
        .catch(() => {
          //Show error message api
          //store.dispatch(setMessage(error.response.data.errorMessage));
          const errorMessage = "Une erreur est survenue veuillez ressayer svp";
          store.dispatch(setErrorMessage(errorMessage));
          //hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);
        });

      next(action);
      break;
    }

    case SET_PROFIL: {
      const updateProfil = {
        firstname: firstNameValue,
        lastname: lastNameValue,
        city: cityValue,
        address: addresseValue,
        zip_code: zipcodeValue,
        phone_number: phoneValue,
        email: emailValue,
        
      };
      
      axios

      .put(`${apiUrl}/users/${id}`, updateProfil,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        console.log(response.data);
         const userInfos = {
           id: id,
           token: token,
           firstname: firstNameValue,
           lastname: lastNameValue,
           email: emailValue,
           phone: phoneValue,
           address: addresseValue,
           zip_code: zipcodeValue,
           city: cityValue,
           avatar: avatar,
           roles: roles,
         };
        store.dispatch(setCurrentUser(userInfos));
        const message = "Votre profil a été modifié avec succés"
          store.dispatch(setMessage(message));
          // hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);

        
      })
      .catch(() => {
        const errorMessage = "Une erreur est survenue";
        // show flasMessage error
        store.dispatch(setErrorMessage(errorMessage));
        // hide flashMessage
        setTimeout(() => {
          store.dispatch(deleteMessage());
        }, 5000);
      });
  
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
