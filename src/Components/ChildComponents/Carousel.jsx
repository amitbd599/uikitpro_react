import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings_1 = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "10px",
  };
  const settings_2 = {
    arrow: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 2,
    speed: 500,
  };
  const settings_3 = {
    arrow: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
  };
  const settings_4 = {
    arrow: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    speed: 500,
  };
  const settings_5 = {
    arrow: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <>
      <div className='carousel-area mg-top-110'>
        <div className='container'>
          {/* Full Carousel */}
          <div className='mt-4'>
            <h5>Full Carousel</h5>
            <Slider {...settings_1}>
              {[...Array(3)].map((item, index) => (
                <div className='carousel-1 ' key={index}>
                  <div className='item'>
                    <img
                      className=' img-fluid'
                      src='/Assets/Images/blog/1.png'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* Carousel 2 */}
          <div className='mt-4'>
            <h5>Carousel 2</h5>
            <Slider {...settings_2}>
              {[...Array(3)].map((item, index) => (
                <div className='carousel-2' key={index}>
                  <div className='item'>
                    <img
                      className=' img-fluid'
                      src='/Assets/Images/blog/1.png'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Carousel 3 */}
          <div className='mt-4'>
            <h5>Carousel 3</h5>
            <Slider {...settings_3}>
              {[...Array(5)].map((item, index) => (
                <div className='carousel-3' key={index}>
                  <div className='item'>
                    <img
                      className=' img-fluid'
                      src='/Assets/Images/blog/1.png'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Carousel 4 */}
          <div className='mt-4'>
            <h5>Carousel 4</h5>
            <Slider {...settings_4}>
              {[...Array(6)].map((item, index) => (
                <div className='carousel-4' key={index}>
                  <div className='item'>
                    <img
                      className=' img-fluid'
                      src='/Assets/Images/blog/1.png'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Carousel 5 */}
          <div className='my-4'>
            <h5>Carousel 5</h5>
            <Slider {...settings_5}>
              {[...Array(8)].map((item, index) => (
                <div className='carousel-4' key={index}>
                  <div className='item'>
                    <img
                      className=' img-fluid'
                      src='/Assets/Images/blog/1.png'
                      alt='img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
