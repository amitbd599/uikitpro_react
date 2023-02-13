import React from "react";
import { Container } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Home_2 = () => {
  const darkMode = (value) => {
    localStorage.setItem("color", value);
    window.location.reload();
    return false;
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "10px",
  };
  return (
    <>
      {/* ========== Balance start ========== */}
      <div className='balance-area pd-top-110'>
        <Container>
          <h2>Discover</h2>
          <p>Welcome to UikitPro</p>
        </Container>
      </div>
      {/*========== Balance End========== */}
      {/* ========== Blog-area start ==========*/}
      <div className='blog-area pt-4'>
        <Container>
          <div className='blog-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/blog-details'>
                      How to save your money in own business firm.
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/blog-details'>
                      How to save your money in own business firm.
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/blog-details'>
                      How to save your money in own business firm.
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
      {/*========== Blog-area End ==========*/}
      {/*========== dark area Start ==========*/}
      <Container>
        <div className='dark-area'>
          <div className='section-title mb-0'>
            <p className='subtitle'>DISCOVER</p>
            <h3 className='title mb-0'>Dark Mode</h3>
            <div className='change-mode'>
              <div className='custom-control custom-switch custom-switch-icon custom-control-inline'>
                <div className='custom-switch-inner'>
                  <p className='mb-0'> </p>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='dark-mode'
                    data-active='true'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='dark-mode'
                    data-mode='toggle'
                  >
                    <span
                      className='switch-icon-left'
                      onClick={() => darkMode("dark")}
                    >
                      <FaMoon />
                    </span>
                    <span
                      className='switch-icon-right'
                      onClick={() => darkMode("")}
                    >
                      <FaSun />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/*========== dark area End ==========*/}
      {/*========== history start ==========*/}
      <div className='history-area pd-top-40'>
        <Container>
          <div className='single-blog'>
            <div className='thumb'>
              <img
                className='w-100'
                src='/Assets/Images/blog/1.png'
                alt='img'
              />
            </div>
            <div className='details'>
              <p className='subtitle'>DISCOVER</p>
              <h3>
                <Link to='/about'>About With Us</Link>
              </h3>
              <p>
                Reusable components designed for the mobile interface and ready
                to use.
              </p>
              <Link className='btn btn-blue' to='/about'>
                Learn More
              </Link>
            </div>
          </div>
          <div className='single-blog'>
            <div className='thumb'>
              <img
                className='w-100'
                src='/Assets/Images/blog/2.png'
                alt='img'
              />
            </div>
            <div className='details'>
              <p className='subtitle'>DISCOVER</p>
              <h3>
                <Link to='/all-page'>Pages</Link>
              </h3>
              <p>
                Reusable components designed for the mobile interface and ready
                to use.
              </p>
              <Link className='btn btn-blue' to='/all-page'>
                Preview
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/*========== history End ==========*/}
    </>
  );
};

export default Home_2;
