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
          <div className='text-end'>
            <h2>يكتشف</h2>
            <p>مرحبًا بك في UikitPro</p>
          </div>
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
                  <div className='details text-end'>
                    <Link to='/rtl-blog-details'>
                      كيف تحفظ أموالك في شركة تجارية خاصة.
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/2.png' alt='img' />
                  </div>
                  <div className='details text-end'>
                    <Link to='/rtl-blog-details '>
                      كيف تحفظ أموالك في شركة تجارية خاصة.
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/3.png' alt='img' />
                  </div>
                  <div className='details text-end'>
                    <Link to='/rtl-blog-details'>
                      كيف تحفظ أموالك في شركة تجارية خاصة.
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
          <div className='section-title mb-0 d-flex align-items-center justify-content-between'>
            <div className='change-mode '>
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
            <div className='text-end'>
              <p className='subtitle'>يكتشف</p>
              <h3 className='title mb-0'>الوضع الداكن</h3>
            </div>
          </div>
        </div>
      </Container>
      {/*========== dark area End ==========*/}
      {/*========== history start ==========*/}
      <div className='history-area pd-top-40'>
        <Container>
          <div className='single-blog text-end'>
            <div className='thumb'>
              <img
                className='w-100'
                src='/Assets/Images/blog/1.png'
                alt='img'
              />
            </div>
            <div className='details'>
              <p className='subtitle'>يكتشف</p>
              <h3>
                <Link to='/rtl-about'>حول معنا</Link>
              </h3>
              <p>
                مكونات قابلة لإعادة الاستخدام مصممة لواجهة الهاتف وجاهزة
                للاستخدام.
              </p>
              <Link className='btn btn-success' to='/rtl-about'>
                يتعلم أكثر
              </Link>
            </div>
          </div>
          <div className='single-blog text-end'>
            <div className='thumb'>
              <img
                className='w-100'
                src='/Assets/Images/blog/2.png'
                alt='img'
              />
            </div>
            <div className='details'>
              <p className='subtitle'>يكتشف</p>
              <h3>
                <Link to='/rtl-all-page'>الصفحات</Link>
              </h3>
              <p>
                مكونات قابلة لإعادة الاستخدام مصممة لواجهة الهاتف وجاهزة
                للاستخدام.
              </p>
              <Link className='btn btn-success' to='/rtl-all-page'>
                معاينة
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
