import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  console.log(data);
  const product ={
    name:"iphone",
    type:"mobile",
    price:1000
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={()=>dispatch(addtoCart(product))}>Add to cart</button>
      <button className="btn btn-warning" onClick={()=>dispatch(removeFromCart(product))}>Remove</button>
      <button className="btn btn-danger" onClick={()=>dispatch(emptyCart(product))}>Empty Cart</button>
      <button className="btn btn-secondary" onClick={()=>dispatch(productList())}>Product List</button>
    </div>
  );
}

export default Main;
