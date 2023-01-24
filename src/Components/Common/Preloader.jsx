import React from "react";

const Preloader = () => {
  return (
    <>
      {/* preloader area start */}
      <div className='preloader' id='preloader'>
        <div className='preloader-inner'>
          <div className='spinner'>
            <div className='dot1' />
            <div className='dot2' />
          </div>
        </div>
      </div>
      <div className='body-overlay' id='body-overlay' />
      {/* preloader area end */}
    </>
  );
};

export default Preloader;
