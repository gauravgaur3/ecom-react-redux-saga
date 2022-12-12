import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/actionForCart';
import { productList } from '../redux/actionForProduct';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  useEffect(() => {
    dispatch(productList());
  }, [dispatch])

  return (
    <div>
      <div className="py-5 bg-secondary bg-opacity-10">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item)=><div className="col" key={item.id}>
              <div className="card shadow-sm">
                <img className="img-fluid card-img-top" src={item.image} alt='product'/>
                <div className="card-body">
                  <h5 className="card-text text-uppercase">{item.title.substring(0, 28)}</h5>
                  <p className="card-text fs-6 text-uppercase text-secondary">{item.category}</p>
                    <h2 className="card-text text-success">₹ {item.price}</h2>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary w-100" onClick={()=>dispatch(addtoCart(item))}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
