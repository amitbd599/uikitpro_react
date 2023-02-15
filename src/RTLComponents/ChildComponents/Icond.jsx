import React from "react";
import { Container } from "react-bootstrap";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const Icond = () => {
  return (
    <>
      {/* ====================  Icond Popup view ====================*/}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon base-color'>
            <FaCheckCircle />
          </div>
          <div className='details'>
            <h6 className='title'>عنوان ورقة العمل</h6>
            <p>
              <i class='fa fa-check'></i>أرسلت
            </p>
            <p>
              <i class='fa fa-check'></i>انسحب
            </p>
            <p>
              <i class='fa fa-check'></i>تبادل
            </p>
            <a className='btn-text d-block border-top-black pt-2' href='#'>
              فعله
            </a>
          </div>
        </div>
      </div>

      {/*==================== Inner View ====================*/}
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

export default Icond;
