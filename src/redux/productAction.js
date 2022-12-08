import { PRODUCT_LIST } from "./constants";

export const productList = async () => {
  let data = await fetch("https://fakestoreapi.com/products?limit=1");
  data = await data.json();
  console.log(data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
