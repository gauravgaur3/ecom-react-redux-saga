export const addtoCart = (data) =>{
    console.log("addtoCart",data);
    return{
        type: "ADD_TO_CART",
        data
    }
}