import React from "react";
import { Container } from "react-bootstrap";
import {
  FaAngleLeft,
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
              <h5>رادورونتو كيلاكس</h5>
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
            <h5>الحساب</h5>
            <ul>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-user-setting'>
                  <span>تعديل الملف الشخصي</span>
                  <FaUserAlt />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-transaction'>
                  <span>غير رقم الهاتف</span>
                  <FaPhoneAlt />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-transaction-details'>
                  <span>تغيير الايميل</span>
                  <FaEnvelope />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-transaction'>
                  <span>يدعم</span>
                  <FaComments />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='#'>
                  <span>الأسئلة الشائعة</span>
                  <FaQuestionCircle />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-user-setting'>
                  <span>لغة</span>
                  <FaLanguage />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-user-verification'>
                  <span>خروج</span>
                  <FaSignOutAlt />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-two style-no-border'>
            <h5 className='text-end'>المزيد من الإعدادات</h5>
            <ul>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-signin'>
                  <span>تغيير كلمة المرور</span>
                  <FaLock />
                </Link>
              </li>
              <li className='d-flex justify-content-between align-items-center'>
                <span>
                  <FaAngleLeft />
                </span>
                <Link to='/rtl-transaction'>
                  <span>حساب البنك</span>
                  <FaCcMastercard />
                </Link>
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
