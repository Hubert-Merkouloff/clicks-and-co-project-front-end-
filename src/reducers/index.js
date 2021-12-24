import { combineReducers } from "redux";
//import reducer
import userReducer from "./user";
import fieldReducer from "./field";
import shopReducer from "./shop";
import eventReducer from "./event";
import cartReducer from "./cart";
import searchReducer from "./search";


const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
  field: fieldReducer,
  event: eventReducer,
  cart: cartReducer,
  search:searchReducer
});


export default rootReducer;




