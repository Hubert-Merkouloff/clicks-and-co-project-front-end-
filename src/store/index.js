//import npm
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";

//Middelware
import userMiddleware from "../middlewares/user";
import shopMiddleware from "../middlewares/shop";
import cartMiddleware from "../middlewares/cart";

import searchCityMiddleware from "../middlewares/searchCity";

const middlewares = [
  userMiddleware,
  shopMiddleware,
  searchCityMiddleware,
  cartMiddleware,
];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducer, enhancers);
export default store;