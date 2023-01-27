import React from "react";

const Title = () => {
  return (
    <div className='uikit-alert-area'>
      <div className='uikit-alert-inner text-center'>
        <div className='icon base-color'>
          <i className='fa fa-check-circle' />
        </div>
        <div className='details'>
          <h6 className='title'>Action Sheet Title</h6>
          <p>Sent</p>
          <p>Withdrow</p>
          <p>Exchange</p>
          <p>Deposit</p>
          <a className='btn-text d-block border-top-black pt-2' href='#'>
            Cancle
          </a>
        </div>
      </div>
    </div>
  );
};

export default Title;
