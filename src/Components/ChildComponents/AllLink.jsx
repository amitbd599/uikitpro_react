import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AllLink = () => {
  return (
    <>
      {/* page-title stary */}
      <div className='page-title pt-4'>
        <div className='container'>
          <a className='float-start' href='home.html'>
            Home
          </a>
          <span className='float-end'>All Pages</span>
        </div>
      </div>
      {/* page-title end */}
      {/* All Page Link */}
      <div className='allpage-area'>
        <div className='container'>
          <div className='ba-all-page-inner'>
            <h5>Pages</h5>
            <ul>
              <li>
                <a href='carts.html'>
                  My Card <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='saving.html'>
                  Saving <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='transaction.html'>
                  Transaction <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='transaction-details.html'>
                  Transaction Details <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='bill-pay.html'>
                  Bills Details <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='notification.html'>
                  Notification <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='bill-pay.html'>
                  Bill Pay <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='blog.html'>
                  Blog <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='blog-details.html'>
                  Blog Details <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='about.html'>
                  About <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='component.html'>
                  Component <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='contact.html'>
                  Contact <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-two'>
            <h5>User Authentication</h5>
            <ul>
              <li>
                <a href='signin.html'>
                  Login <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='signup.html'>
                  Register <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='user-setting.html'>
                  User Setting <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='user-verification.html'>
                  Sms Verification <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='signup.html'>
                  Forgot Password <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-three mb-4'>
            <h5>Menu</h5>
            <ul>
              <li>
                <a href='about.html'>
                  About <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='blog.html'>
                  Blog <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='blog-details.html'>
                  Blog Details <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='saving.html'>
                  Saving <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLink;
