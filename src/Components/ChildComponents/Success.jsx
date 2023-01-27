import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  return (
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
  );
};

export default Success;
