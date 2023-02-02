import React from "react";
import { Container } from "react-bootstrap";

const Image = () => {
  return (
    <>
      {/* Image View Popup */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon red-color'>
            <img src='/Assets/Images/user.png' alt='img' />
          </div>
          <div className='details'>
            <h6 className='title'>Juben Send You $350</h6>
            <p>This is an Example</p>
            <a className='btn btn-blue w-100' href='#'>
              Done
            </a>
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

export default Image;
