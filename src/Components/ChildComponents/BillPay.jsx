import React from "react";
import { FaBell } from "react-icons/fa";

const BillPay = () => {
  return (
    <>
      {/* ================== bill-pay start ==================*/}
      <div className='bill-pay-area pd-top-110'>
        <div className='container'>
          <div className='section-title style-three'>
            <h3 className='title'>Pay Monthly Bill</h3>
            <a href='#'>
              <FaBell />
            </a>
          </div>
          <div className='row'>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
                <p>Electricity</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/18.png' alt='img' />
                <p>Water Bill </p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/19.png' alt='img' />
                <p>Gas Bill</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/20.png' alt='img' />
                <p>Internet Bill</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/21.png' alt='img' />
                <p>Cable </p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/22.png' alt='img' />
                <p>Airfare</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/31.png' alt='img' />
                <p>Food Order</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/32.png' alt='img' />
                <p>Hotel Booking </p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/33.png' alt='img' />
                <p>Trains Ticket</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/34.png' alt='img' />
                <p>Movie Ticket</p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/35.png' alt='img' />
                <p>Other Bills </p>
              </div>
            </div>
            <div className='col-4'>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/36.png' alt='img' />
                <p>Bus Ticket</p>
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
