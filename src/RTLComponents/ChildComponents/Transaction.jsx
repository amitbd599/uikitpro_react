import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const Transaction = () => {
  return (
    <>
      {/* ============ transaction start ============*/}
      <div className='transaction-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <h3 class='title float-end'>المعاملات الأخيرة</h3>
          </div>
          <ul className='transaction-inner'>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/12.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/13.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$250 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/14.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/29.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>مطعم بيل</h5>
                <p>حياة ممتعة</p>
                <h5 className='amount text-end'>
                  -$100 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/15.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
              </div>
              <div className='details text-end'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
          </ul>
        </Container>
      </div>
      {/*============ transaction End ============*/}

      <div className='btn-wrap mt-4 mb-2'>
        <Container>
          <a className='btn-large btn-success w-100' href='#'>
            المزيد من المعاملات
            <FaAngleRight />
          </a>
        </Container>
      </div>
    </>
  );
};

export default Transaction;
