import { emptyCart, SEND_CART } from "../actions/cart";
import axios from "axios";

import { deleteMessage, setIsActiveBasKet, setMessage } from "../actions/event";

const cartMiddleware = (store) => (next) => (action) => {
  let apiUrl = process.env.REACT_APP_API;
  const state = store.getState();
  const { cart } = state;
  const { details } = cart;
  const { user: userState } = state;
  const total = action.value;

  //TODO envoi juste token
  const { user } = userState;
  console.log(user);
  switch (action.type) {
    case SEND_CART:
      const userCart = {
        user: user.id,
        cart: details,
        total: total,
      };

      console.log(userCart);

      axios
        .post(`${apiUrl}/orders`, userCart, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })

        //console.log(userCart)

        .then((response) => {
          console.log(response.data);

          //
          const ValidateMessage = "Votre panier a bien été validé.";
          // show flasMessage error
          store.dispatch(setMessage(ValidateMessage));
          // hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);

          // vider le panier
          store.dispatch(emptyCart());

          // fermer la fenetre panier
          store.dispatch(setIsActiveBasKet());
        })

        .catch(() => {
          const errorMessage = "Une erreur est survenue lors de la commande.";
          // show flasMessage error
          store.dispatch(setMessage(errorMessage));
          // hide flashMessage
          setTimeout(() => {
            store.dispatch(deleteMessage());
          }, 5000);
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default cartMiddleware;
