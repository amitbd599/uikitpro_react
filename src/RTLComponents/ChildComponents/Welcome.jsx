import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Welcome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='welcome-area text-center mg-top-40'>
      <Container>
        <h3>Welcome</h3>
        <div className='thumb-wrap'>
          <img src='/Assets/Images/other/2.png' alt='img' />
        </div>
      </Container>
      <div className='welcome-footer'>
        <div className='welcome-slider owl-carousel'>
          <Slider {...settings}>
            <div className='item'>
              <h3>Simple To Use</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </p>
            </div>
            <div className='item'>
              <h3>Simple To Use</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </p>
            </div>
            <div className='item'>
              <h3>Simple To Use</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              </p>
            </div>
          </Slider>
        </div>
        <div className='welcome-footer-bottom'>
          <Link className='btn-c btn-white-border' to='/signup'>
            Register
          </Link>
          <Link className='btn-c btn-white' to='/signin'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
