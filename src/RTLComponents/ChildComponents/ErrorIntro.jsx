import React from "react";
import { Container } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorIntro = () => {
  return (
    <>
      {/* ==============ErrorIntro Popup=============== */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon red-color'>
            <FaExclamationTriangle />
          </div>
          <div className='details'>
            <h6 className='title'>خطأ</h6>
            <p>هناك خطأ ما</p>
            <a className='btn btn-success w-100' href='#'>
              منتهي
            </a>
          </div>
        </div>
      </div>

      {/* ================= Inner Intro =================*/}
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

export default ErrorIntro;
