import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/action';
const Cart = () => {
    const cartData = useSelector((state)=>state.cartData);
    const dispatch = useDispatch();
    let totalAmount = cartData.length && cartData.map(item=>item.price).reduce((prev,next)=>prev+next);
    let afterDeliveryCharger = cartData.length && totalAmount + 60;
  return (
    <>
      {/* Checkout */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-3 order-md-last ">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-danger" onClick={()=>dispatch(emptyCart(cartData))}>Clear Cart</button>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-2">Sub-total</h5>
                </div>
                <span className="text-muted my-2">₹ {totalAmount}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-2">Delivery Charges</h5>
                </div>
                <span className="text-muted my-2">
                  +60
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h5 className="my-2">Checkout Amount</h5>
                </div>
                <span className="text-muted my-2">₹ {afterDeliveryCharger}</span>
              </li>
              <div className="input-group">
                <button type="submit" className="btn btn-success w-100 mt-3">
                  CHECKOUT
                </button>
              </div>
            </ul>
          </div>

          {/* My Bag */}
          <div className="col-md-7 col-lg-6">
            <h3 className="mb-3">MY BAG</h3>
            {/* {cartData.length()>0?<div className="row g-3"> */}
              {
                cartData.map((item)=>{
                 return <div className="col-12">
                  <div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-row">
                        <img
                          className="rounded"
                          src={item.image}
                          width="100"
                          height="100"
                          alt={item.title}
                        />

                        <div className="m-3">
                          <h4 className="font-weight-bold d-block">{item.title}</h4>
                          <h6>₹ {item.price}</h6>
                          <span className="badge me-2 text-bg-secondary">
                          Color {/*  {color} */}
                          </span>

                          <div className="d-inline-flex align-items-center">
                            {/* <i className="bi bi-dash btn" onClick={()=>decrement(id)}></i> */}
                            <input type="text" className="form-control form-control-sm w-25 text-center" placeholder={item.rating.count}/>
                            {/* <i className="bi bi-plus btn" onClick={()=>increment(id)}></i> */}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <i className="bi bi-x-lg btn" onClick={()=>dispatch(removeFromCart(item.id))}></i>
                      </div>
                    </div>
                  </div>
                </div>
                })
              }
            {/* </div>:<h3 className="">Your cart is empty!</h3>} */}
          </div>
        </div>
      </div>
  </>
  )
}

export default Cart