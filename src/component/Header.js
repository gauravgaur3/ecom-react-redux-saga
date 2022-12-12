import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
    const result = useSelector((state)=>state.cartData)
    const dispatch = useDispatch();
    console.log("redux data in header",result)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ShopNow</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <div>
                <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(event)=>dispatch(productSearch(event.target.value))}/>
              </div>
            </ul>
              <Link type="button" className="btn btn-light position-relative" to="/cart">
                Cart
                <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill text-bg-secondary">
                  {result.length}
                </span>
              </Link>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Header;
