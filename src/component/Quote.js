import React from 'react'

const Quote = () => {
  return (
    <div className="position-relative">
        <img src="woman-holding-various-shopping-bags-copy-space.jpg" alt="quote-img" className='quote-img'/>
        <div className='position-absolute top-50 start-50'>
            <div class="container text-white">
                <h1 className="fw-bold">SHOP WITH US</h1>
                <p className="lead">Welcome to our online shopping site, where you can find a wide variety of high-quality products at affordable prices.</p>
            </div>
        </div>
    </div>
  )
}

export default Quote