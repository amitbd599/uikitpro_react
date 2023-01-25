import React from "react";
import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

const Notification = () => {
  return (
    <>
      {/* notification start */}
      <div className='notification-area mg-top-90'>
        <Container>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/1.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Jhon Smith</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/2.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Alisha Ali</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/3.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Samita Sen</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/4.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Mikel Clurk</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/5.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Clurk Smith</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='ba-single-nitification-inner align-self-center'>
            <img
              className='close-image'
              src='/Assets/Images/icon/30.png'
              alt='img'
            />
            <div className='thumb'>
              <img src='/Assets/Images/send-money/6.png' alt='img' />
            </div>
            <div className='details'>
              <h6>
                <span>Jesica Jeny</span> confirmed your payment request
              </h6>
              <ul>
                <li>
                  <FaCalendarAlt /> <span>January 26, 2023</span>
                </li>
                <li>
                  <FaRegClock /> <span>12.00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* notification End */}
    </>
  );
};

export default Notification;
