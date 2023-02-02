import React from "react";
import { Container } from "react-bootstrap";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const Icond = () => {
  return (
    <>
      {/* Icond Popup view */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon base-color'>
            <FaCheckCircle />
          </div>
          <div className='details'>
            <h6 className='title'>Action Sheet Title</h6>
            <p>
              <FaCheck className='me-1' />
              Sent
            </p>
            <p>
              <FaCheck className='me-1' />
              Withdrow
            </p>
            <p>
              <FaCheck className='me-1' />
              Exchange
            </p>
            <a className='btn-text d-block border-top-black pt-2' href='#'>
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

export default Icond;
