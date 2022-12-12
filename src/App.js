import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Header from './component/Header'
import Main from './component/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
