import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const addtoCart = (data) => {
  console.log("addtoCart", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = (data) => {
  console.log("addtoCart", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emptyCart = (data) => {
  console.log("addtoCart", data);
  return {
    type: EMPTY_CART,
    data,
  };
};
