import React from "react";
import { Container } from "react-bootstrap";

const IntroPop = () => {
  return (
    <>
      {/* IntroPop Popup */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='details'>
            <h6 className='title'>Add To Home</h6>
            <div className='thumb mt-3 mb-3'>
              <img src='/Assets/Images/logo-2.png' alt='img' />
            </div>
            <p>Install uikitpro on Ypur Phone You Payment Sent To Josep</p>
          </div>
        </div>
      </div>

      {/* Inner View */}
      <div className='allpage-area mg-top-90'>
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

export default IntroPop;
