import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

const Toast = () => {
  return (
    <div className='allpage-area pd-top-110'>
      <Container>
        <h5 className='text-end'>الأسفل</h5>
        <div className='ba-all-page-inner mb-4 d-flex justify-content-between'>
          <div className='arrow-icon ps-2'>
            <span>
              <FaAngleLeft />
            </span>
          </div>{" "}
          <ul>
            <li>
              <a className='d-block'>
                <span className='color-text'>بوكس ('طعم')</span> على مقربة
                السيارات <br />
                <span className='color-text'>توست بوكس ('طعم 3000')</span>
              </a>
            </li>
          </ul>
        </div>
        <h5 className='text-end'>قمة</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                مع النموذج
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                أقحم
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                مرمز{" "}
              </a>
            </li>
          </ul>
        </div>
        <h5 className='text-end'>انذار</h5>
        <div className='ba-all-page-inner'>
          <ul>
            <li className='d-block'>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                مع النموذج
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                النموذج
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                عملية
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                صورة التنبيه
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                انذار
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                انذار
              </a>
            </li>
          </ul>
        </div>
        <h5 className='text-end'>مركز</h5>
        <div className='ba-all-page-inner'>
          <ul>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                مع النموذج
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                المحتوى
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                عملية
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                انذار
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                حدود التنبيه
              </a>
            </li>
            <li>
              <a href='#'>
                <span>
                  <FaAngleLeft />
                </span>
                صورة التنبيه
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Toast;
