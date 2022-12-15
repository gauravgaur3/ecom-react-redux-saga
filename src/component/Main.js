import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/actionForCart';
import { productList } from '../redux/actionForProduct';
import { useEffect } from 'react';
import Quote from './Quote';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  useEffect(() => {
    dispatch(productList());
  }, [dispatch])

  return (
    <div className='bg-info bg-opacity-25'>
      <Quote/>
      <div className="py-5">
        <div className="container">
          <div className='row justify-content-md-center'>
              <h2 class="display-4 fw-normal text-center border-bottom border-4 col-6 border-info mb-5">Our Products</h2>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {data.map((item)=><div className="col" key={item.id}>
              <div className="card shadow-sm position-relative">
              <span className="position-absolute badge bg-primary">{item.rating.rate} <i className="bi bi-star-fill"></i></span>
                <img className="img-fluid card-img-top p-4" src={item.image} alt='product'/>
                <div className="card-body bg-light">
                  <div className="text-uppercase text-secondary opacity-75 mb-1">{item.category}</div>
                  <h5 className="text-uppercase mb-2">{item.title.substring(0, 20)}
                  </h5>
                  <p className='text-secondary mb-3'>{item.description.substring(0,100)}...</p>
                  <div className='border-top d-flex justify-content-between pt-3'>
                    <h4 className="text-success">${item.price}</h4>
                    <button className="btn btn-warning" onClick={()=>dispatch(addtoCart(item))}>Add to cart</button>
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
