import React from "react";
import { FaBell } from "react-icons/fa";

const BillPay = () => {
  return (
    <>
      {/* ================== bill-pay start ==================*/}
      <div className='bill-pay-area pd-top-110'>
        <div className='container'>
          <div className='section-title style-three'>
            <a href='#' className='float-start'>
              <FaBell />
            </a>
            <h3 className='title float-end'>دفع الفاتورة الشهرية</h3>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
                <p>كهرباء</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/18.png' alt='img' />
                <p>فاتورة الماء</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/19.png' alt='img' />
                <p>فاتورة الغاز</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/20.png' alt='img' />
                <p>فاتورة الإنترنت</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/21.png' alt='img' />
                <p>كابل </p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/22.png' alt='img' />
                <p>السفر بالطائرة</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/31.png' alt='img' />
                <p>طلب الطعام</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/32.png' alt='img' />
                <p>Hotel Booking </p> <p>حجز الفندق</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/33.png' alt='img' />
                <p>تذكرة القطارات</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/34.png' alt='img' />
                <p>تذكرة الفيلم</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/35.png' alt='img' />
                <p>فواتير أخرى</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/36.png' alt='img' />
                <p>تذكرة الباص</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================== bill-pay End ==================*/}
      {/*================== cart-area Start ==================*/}
      <div className='cart-area mt-3 mb-4'>
        <div className='container'>
          <img src='/Assets/Images/cart/6.png' alt='img' />
        </div>
      </div>
      {/*================== cart-area End ==================*/}
    </>
  );
};

export default BillPay;
