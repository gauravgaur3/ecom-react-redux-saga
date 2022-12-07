import { useDispatch } from 'react-redux';
import './App.css';
import { addtoCart } from './redux/action';

function App() {
  const dispatch = useDispatch();
  const product ={
    name:"iphone",
    type:"mobile",
    price:1000
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(addtoCart(product))}>Hit Me</button>
    </div>
  );
}

export default App;
