import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllLink = () => {
  return (
    <>
      {/* page-title stary */}
      <div className='page-title pt-4'>
        <div className='container'>
          <Link className='float-start' to='/home-1'>
            Home
          </Link>
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
                <Link to='/carts'>
                  My Card <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/saving'>
                  Saving <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/transaction'>
                  Transaction <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/transaction-details'>
                  Transaction Details <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/bill-pay'>
                  Bills Details <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/notification'>
                  Notification <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/bill-pay'>
                  Bill Pay <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  Blog <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/blog-details'>
                  Blog Details <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/all-page'>
                  All Component <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contact <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-two'>
            <h5>User Authentication</h5>
            <ul>
              <li>
                <Link to='/signin'>
                  Login <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/signup'>
                  Register <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/user-setting'>
                  User Setting <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/user-verification'>
                  Sms Verification <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/signup'>
                  Forgot Password <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-three mb-4'>
            <h5>Menu</h5>
            <ul>
              <li>
                <Link to='/about'>
                  About <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  Blog <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/blog-details'>
                  Blog Details <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/saving'>
                  Saving <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllLink;
