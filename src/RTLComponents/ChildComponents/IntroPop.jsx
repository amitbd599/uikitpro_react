import React from "react";
import { Container } from "react-bootstrap";

const IntroPop = () => {
  return (
    <>
      {/* ===================== IntroPop Popup =====================*/}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='details'>
            <h6 className='title'>أضف إلى المنزل</h6>
            <div className='thumb mt-3 mb-3'>
              <img src='/Assets/Images/logo-2.png' alt='img' />
            </div>
            <p>قم بتثبيت uikitpro على هاتفك الذي دفعته إلى جوزيف</p>{" "}
          </div>
        </div>
      </div>

      {/*===================== Inner View =====================*/}
      <div className='allpage-area mg-top-90'>
        <Container>
          <h5 className='text-end'>أساسي</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul>
              <li>
                <a href='#' className='justify-content-end'>
                  تقصير
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  أقحم
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  مرمز
                </a>
              </li>
            </ul>
          </div>
          <h5 className='text-end'>أكثر</h5>
          <div className='ba-all-page-inner'>
            <ul>
              <li>
                <a href='#' className='justify-content-end'>
                  مع النموذج
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  المحتوى
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  عملية
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  انذار
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  حدود التنبيه
                </a>
              </li>
              <li>
                <a href='#' className='justify-content-end'>
                  صورة التنبيه
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default IntroPop;
