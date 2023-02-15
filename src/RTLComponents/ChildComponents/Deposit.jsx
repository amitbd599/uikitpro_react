import React from "react";
import { Container } from "react-bootstrap";

const Deposit = () => {
  return (
    <>
      {/* ================= Deposit Popup =================*/}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <form className='details'>
            <h6 className='title mb-3'>إيداع الأموال</h6>
            <div className='single-select-inner text-start'>
              <h6>استمارة</h6>
              <select>
                <option>حدد حساب</option>
                <option>حدد حساب</option>
                <option>حدد حساب</option>
                <option>حدد حساب</option>
              </select>
            </div>
            <div className='single-select-inner text-start'>
              <h6>استمارة</h6>
              <input type='text' placeholder='$150' />
            </div>
            <a className='btn btn-success w-100 mt-2' href='#'>
              منتهي
            </a>
          </form>
        </div>
      </div>

      {/*================= Inner View =================*/}
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
      {/*================= Inner end =================*/}
    </>
  );
};

export default Deposit;
