import React from "react";
import { Container } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorIntro = () => {
  return (
    <>
      {/* ==============ErrorIntro Popup=============== */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon red-color'>
            <FaExclamationTriangle />
          </div>
          <div className='details'>
            <h6 className='title'>Error</h6>
            <p>Somethink Went worng</p>
            <a className='btn btn-success w-100' href='#'>
              Done
            </a>
          </div>
        </div>
      </div>

      {/* ================= Inner Intro =================*/}
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

export default ErrorIntro;
