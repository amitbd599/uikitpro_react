import React from "react";
import { Container } from "react-bootstrap";

const Badge = () => {
  return (
    <>
      {/* ============== badge end ==============*/}
      <div className='allpage-area pd-top-110 badge-component rtl'>
        <Container fluid>
          <h5 className='text-end'>مثال</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li className='text-end'>
                <span className='count bg-base'>7</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/1.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count bg-black'>9</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/2.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count bg-purple'>11</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/3.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count bg-pink'>7</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/4.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count bg-yellow'>77</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/5.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count text'>22</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/6.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
              <li className='text-end'>
                <span className='count bg-blue'>22</span>
                هنري مايكل
                <img
                  src='/Assets/Images/send-money/3.png'
                  alt='img'
                  className='ms-2'
                />
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*============== badge end ==============*/}

      {/*============== badge end ==============*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5 className='text-end'>الألوان</h5>
          <div className='ba-all-page-inner mb-4 pt-3 p-2'>
            <button type='button' className='btn-c btn-primary mr-1 mb-2'>
              أساسي
            </button>
            <button type='button' className='btn-c btn-secondary mr-1 mb-2'>
              ثانوي
            </button>
            <button type='button' className='btn-c btn-success mr-1 mb-2'>
              نجاح
            </button>
            <button type='button' className='btn-c btn-info mr-1 mb-2'>
              معلومات
            </button>
            <button type='button' className='btn-c btn-warning mr-1 mb-2'>
              تحذير
            </button>
            <button type='button' className='btn-c btn-danger mr-1 mb-2'>
              خطر
            </button>
          </div>
        </Container>
      </div>
      {/*============== badge end ==============*/}
    </>
  );
};

export default Badge;
