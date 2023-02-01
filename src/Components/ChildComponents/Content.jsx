import React from "react";

const Content = () => {
  return (
    <>
      {/* Content Popup */}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <div className='details'>
            <h6 className='title'>Action Sheet Content</h6>
            <p>
              Lorem ipsum dolor sit, amet elit. commodi odi minus maxime autem
              quo facilis, at, sint minima possimus eaque iure dolore.
            </p>
            <a className='btn btn-blue w-100' href='#'>
              Close
            </a>
          </div>
        </div>
      </div>

      {/* Inner View */}
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
      {/* Inner end */}
    </>
  );
};

export default Content;
