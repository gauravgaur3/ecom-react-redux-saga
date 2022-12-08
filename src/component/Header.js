import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const result = useSelector((state)=>state.cartData)
    console.warn("redux data in header",result)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid justify-content-end">
          <button type="button" className="btn btn-light position-relative">
            Cart
            <span className="position-absolute top-0 start-99 translate-middle badge rounded-pill text-bg-secondary">
              {result.length}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
