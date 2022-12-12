import { combineReducers } from "redux";
import { cartData } from "./reducerForCart";
import { productData } from "./productReducer";
export default combineReducers({ cartData, productData });
