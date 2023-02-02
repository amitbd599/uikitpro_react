import React from "react";
import { Container } from "react-bootstrap";
import {
  FaAngleRight,
  FaCcMastercard,
  FaComments,
  FaEnvelope,
  FaLanguage,
  FaLock,
  FaPhoneAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UserSetting = () => {
  return (
    <>
      {/* ========== user-setting start ==========*/}
      <div className='user-setting-details pd-top-110'>
        <div className='container'>
          <div className='ba-navbar-user text-center'>
            <div className='thumb'>
              <img src='/Assets/Images/user.png' alt='user' />
            </div>
            <div className='details'>
              <h5>Raduronto kelax</h5>
              <p>ID: 99883323</p>
            </div>
          </div>
        </div>
      </div>
      {/*========== user-setting End ==========*/}

      {/*========== Content Start ==========*/}
      <div className='allpage-area'>
        <Container>
          <div className='ba-all-page-inner style-no-border'>
            <h5>Account</h5>
            <ul>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/user-setting'>
                  <FaUserAlt />
                  <span>Edit Profile</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/transaction'>
                  <FaPhoneAlt />
                  <span>Change Phone Number</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/transaction-details'>
                  <FaEnvelope />
                  <span>Change Email</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/transaction'>
                  <FaComments />
                  <span>Support</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='#'>
                  <FaQuestionCircle />
                  <span>Faqs</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/user-setting'>
                  <FaLanguage />
                  <span>Language</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/user-verification'>
                  <FaSignOutAlt />
                  <span>Sign Out</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-two style-no-border'>
            <h5>More Settings</h5>
            <ul>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/signin'>
                  <FaLock />
                  <span>Change Password</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <Link to='/transaction'>
                  <FaCcMastercard />
                  <span>Bank Account</span>
                </Link>
                <span>
                  <FaAngleRight />
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*========== Content end ==========*/}
    </>
  );
};

export default UserSetting;
