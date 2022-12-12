import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      const remainingItems = data.filter((item)=>item.id!==action.data)
      console.log (remainingItems);
      return [...remainingItems];
    case EMPTY_CART:
      return (data = []);
    default:
      return data;
  }
};
