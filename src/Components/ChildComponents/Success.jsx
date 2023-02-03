import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
    <>
      {/* ================== Search Popup start================== */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon base-color'>
            <FaCheckCircle />
          </div>
          <div className='details'>
            <h6 className='title'>Success</h6>
            <p>You Payment Sent To Josep</p>
            <a className='btn btn-blue w-100' href='#'>
              Done
            </a>
          </div>
        </div>
      </div>
      {/* ================== Search Popup End================== */}
      {/*============== Inner Intro ==============*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5>Basic</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul>
              <li>
                <a href='#'>Default</a>
              </li>
              <li>
                <a href='#'>Inset</a>
              </li>
              <li>
                <a href='#'>Iconed</a>
              </li>
            </ul>
          </div>
          <h5>More</h5>
          <div className='ba-all-page-inner'>
            <ul>
              <li>
                <a href='#'>With Form</a>
              </li>
              <li>
                <a href='#'>Content</a>
              </li>
              <li>
                <a href='#'>Transaction</a>
              </li>
              <li>
                <a href='#'>Alert</a>
              </li>
              <li>
                <a href='#'>Alert Border</a>
              </li>
              <li>
                <a href='#'>Alert Image</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Success;
