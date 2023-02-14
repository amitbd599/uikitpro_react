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
        <h3>مرحبا</h3>
        <div className='thumb-wrap'>
          <img src='/Assets/Images/other/2.png' alt='img' />
        </div>
      </Container>
      <div className='welcome-footer'>
        <div className='welcome-slider owl-carousel'>
          <Slider {...settings}>
            <div className='item'>
              <h3>سهلة الاستخدام</h3>
              <p>
                ؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية
                انترنيت
              </p>
            </div>
            <div className='item'>
              <h3>سهلة الاستخدام</h3>
              <p>
                ؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية
                انترنيت
              </p>
            </div>
            <div className='item'>
              <h3>سهلة الاستخدام</h3>
              <p>
                ؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية
                انترنيت
              </p>
            </div>
          </Slider>
        </div>
        <div className='welcome-footer-bottom'>
          <Link className='btn-c btn-white-border' to='/rtl-signup'>
            يسجل
          </Link>
          <Link className='btn-c btn-white' to='/rtl-signin'>
            تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
