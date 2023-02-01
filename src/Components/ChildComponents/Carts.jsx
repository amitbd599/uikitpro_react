import React from "react";

const Carts = () => {
  return (
    <>
      {/* cart start */}
      <div className='cart-area mg-top-110'>
        <div className='container'>
          <div className='section-title'>
            <h3 className='title'>You Have Carts</h3>
            <a className='count-title' href='#'>
              5
            </a>
          </div>
          <div className='ba-cart-inner mb-3'>
            <img src='/Assets/Images/cart/1.png' alt='img' />
          </div>
          <div className='ba-cart-inner mb-3'>
            <img src='/Assets/Images/cart/2.png' alt='img' />
          </div>
          <div className='ba-cart-inner mb-3'>
            <img src='/Assets/Images/cart/3.png' alt='img' />
          </div>
          <div className='ba-cart-inner mb-3'>
            <img src='/Assets/Images/cart/4.png' alt='img' />
          </div>
          <div className='ba-cart-inner mb-3'>
            <img src='/Assets/Images/cart/5.png' alt='img' />
          </div>
        </div>
      </div>
      {/* cart End */}
    </>
  );
};

export default Carts;
