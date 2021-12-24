import axios from "axios";

import {
  GET_LIST_RANDOM_SHOP,
  saveListRandomShop,
  SEARCH_SHOP,
  saveListSearchShop,
  setListSearchShopFilter,
  submitedValue,
  SEARCH_SHOP_ITEMS,
  saveListShopItem,
  setLoading,
  GET_LIST_CATEGORIES,
  saveListCategories,
} from "../actions/shop";
import {} from "../actions/user";
import NProgress from "nprogress";

import { cleanSearchValue } from "../actions/field";
import { cleanDataCity } from "../actions/search";

const shopMiddleware = (store) => (next) => (action) => {
  let apiUrl = process.env.REACT_APP_API;
  
  console.log(apiUrl);
  switch (action.type) {
    case GET_LIST_RANDOM_SHOP: {
      // on extrait l'email et le password depuis le state

      axios

        .get(`${apiUrl}/shops/home`)
        .then((response) => {
          NProgress.start();
          // en cas de succes, on récupère notre liste de restaurant
          console.log(response.data);

          const listRandomShop = response.data;
          store.dispatch(saveListRandomShop(listRandomShop));
        })
        .catch(() => {
          console.log("erreur. récupération list random..");
        })
        .finally(() => {
          NProgress.done();
        });

      next(action);
      break;
    }


    case GET_LIST_CATEGORIES: {
      // on extrait l'email et le password depuis le state
      

      axios

        .get(`${apiUrl}/categories/home`)
        .then((response) => {
          
          // en cas de succes, on récupère notre liste de restaurant
          console.log(response.data);

          const listCategories = response.data;
          store.dispatch(saveListCategories(listCategories));
        })
        .catch(() => {console.log("erreur. récupération list random..")})
        .finally(() => {
        
      })

      next(action);
      break;
    }




    case SEARCH_SHOP: {
      console.log("on est dans le search shop middelware");

      // On récupère la valeur de recherche dans le state field.

      const state = store.getState();
      const { field } = state;
      const { searchValue } = field;

      // On active le spinner loading
      store.dispatch(setLoading(true));

      // j'affecte la valeur searchValue à SubmitedValue;
      store.dispatch(submitedValue(searchValue));

      // Réinitialisation à 0 de ma liste de shop recherchée
      store.dispatch(saveListSearchShop([]));

      //Réinitialisation de search value :
      store.dispatch(cleanSearchValue());

      //Remise à zéro du state search cityList
      store.dispatch(cleanDataCity());

      axios
        //.get(`${apiUrl_dev}/search/${searchValue}`)
        .post(`${apiUrl}/shops/searchbycity`, { searchValue: searchValue })
        .then((response) => {
          // en cas de succes, on récupère la liste
          console.log(response.data);
          const listSearchShop = response.data;

          // On sauvegarde les résultats dans le state shop.
          store.dispatch(saveListSearchShop(listSearchShop));
          store.dispatch(setListSearchShopFilter(listSearchShop));
        })
        //.catch{(console.log("problème récupération list search shop"));
        .catch(() => {
          console.log("problème récupération list search shop");
        })
        .finally(() => {
          // On désactive le spinner loading
          store.dispatch(setLoading(false));
        });

      next(action);
      break;
    }

    case SEARCH_SHOP_ITEMS: {
      console.log("on est dans le search shop items middelware");

      // On récupère la valeur du shop recherché

      const state = store.getState();
      const { shop } = state;
      const { currentShop_id } = shop;

      axios
        .get(`${apiUrl}/shops/${currentShop_id}`)
        .then((response) => {
          // en cas de succes, on récupère la liste
          console.log(response.data);
          const listShopItem = response.data;

          // On sauvegarde les résultats dans le state shop.
          store.dispatch(saveListShopItem(listShopItem));
        })
        .catch(console.log("problème récupération list shop items"));

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default shopMiddleware;
