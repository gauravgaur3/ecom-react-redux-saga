import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ACTION TO CART CALLED", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE TO CART CALLED", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      console.log("EMPTY CART CALLED", action);
      return (data = []);
    default:
      return data;
  }
};
