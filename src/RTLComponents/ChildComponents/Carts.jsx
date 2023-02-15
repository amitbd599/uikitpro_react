import React from "react";
import { Container } from "react-bootstrap";

const Carts = () => {
  return (
    <>
      {/* ================ cart start ================*/}
      <div className='cart-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <a className='count-title float-start' href='#'>
              5
            </a>
            <h3 className='title float-end'>لديك عربات</h3>
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
        </Container>
      </div>
      {/*================ cart End ================*/}
    </>
  );
};

export default Carts;
