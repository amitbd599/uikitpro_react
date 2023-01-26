import React from "react";

const Navbar = () => {
  return (
    <>
      {/* navbar end */}
      <div className='ba-navbar'>
        <div className='ba-navbar-user text-center'>
          <div className='menu-close'>
            <i className='la la-times' />
          </div>
          <div className='thumb'>
            <img src='assets/img/user.png' alt='user' />
          </div>
          <div className='details'>
            <h5>Raduronto kelax</h5>
            <p>ID: 99883323</p>
          </div>
        </div>
        <div className='ba-balance-inner mb-3 text-end align-self-center'>
          <div className='icon'>
            <img src='assets/img/icon/1.png' alt='img' />
          </div>
          <h5 className='title'>Available Balance</h5>
          <h5 className='amount'>$56,985.00</h5>
        </div>
        <div className='ba-add-balance-title'>
          <h5>Deposit</h5>
          <i className='fa fa-plus' />
        </div>
        <div className='ba-main-menu'>
          <h5>Menu</h5>
          <ul>
            <li>
              <a className='active' href='home.html'>
                Uikitpro Display
              </a>
            </li>
            <li>
              <a href='all-page.html'>Pages</a>
            </li>
            <li>
              <a href='about.html'>About Us</a>
            </li>
            <li>
              <a href='carts.html'>My Cart</a>
            </li>
            <li>
              <a href='user-setting.html'>Setting</a>
            </li>
            <li>
              <a href='notification.html'>Notification</a>
            </li>
            <li>
              <a href='component.html'>Component</a>
            </li>
            <li>
              <a className='mt-4' href='signup.html'>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* navbar end */}
    </>
  );
};

export default Navbar;
