import React from "react";
import { Link } from "react-router-dom";

const OpenInner = () => {
  return (
    <div className='bg-base'>
      <div className='open-page-inner'>
        <Link to='/' className='thumb'>
          <img src='/Assets/Images/open.jpg' alt='img' />
        </Link>
      </div>
    </div>
  );
};

export default OpenInner;
