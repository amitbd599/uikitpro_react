import React from "react";
import { FaSnowflake } from "react-icons/fa";

const PaymentPopup = () => {
  return (
    <>
      {/* PaymentPopup  */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='icon base-color'>
            <FaSnowflake />
          </div>
          <div className='details'>
            <h6 className='title'>Tuch Id Required</h6>
            <p>You Payment Sent To Josep</p>
            <a className='btn btn-blue w-100' href='#'>
              Done
            </a>
          </div>
        </div>
      </div>
      {/* Inner Intro */}
      <div className='allpage-area mg-top-90'>
        <div className='container'>
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
        </div>
      </div>
    </>
  );
};

export default PaymentPopup;
