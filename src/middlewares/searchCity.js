import axios from "axios";
import { ADD_DATA_CITY, saveDataCity } from "../actions/search";

import NProgress from 'nprogress';



const searchCityMiddleware = (store) => (next) => (action) => {
    
  switch (action.type) {

    case ADD_DATA_CITY: {

      const state = store.getState();
      const {field} = state;
      const {searchValue} = field;
            
      axios
        //.get(`https://vicopo.selfbuild.fr/ville/${searchValue}?format=callback`)
        //.get(`https://api-adresse.data.gouv.fr/search/?q=${searchValue}&limit=10`)
        .get(`https://geo.api.gouv.fr/communes?nom=${searchValue}&fields=departement&boost=population&limit=5`)
        .then((response) => {
          NProgress.start()
          // en cas de succes, on récupère notre liste de restaurant
          let result = response.data;
          console.log("récupération des communes API");
          console.log(result);
          
          let cityNames = result.map( (entity) => `${entity.nom}`);
          console.log(cityNames);
          
                  
          store.dispatch(saveDataCity(cityNames));
        })
        .catch(() => {console.log("erreur récupération des villes")})
        .finally(() => {
        NProgress.done()
      })

      next(action);
      break;
    }

    
    default:
      next(action);
  }
};

export default searchCityMiddleware;
