import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllLink = () => {
  return (
    <>
      {/* page-title stary */}
      <div className='page-title pt-4'>
        <div className='container'>
          <Link className='float-end' to='/rtl-home-1'>
            بيت
          </Link>
          <span className='float-start'>كل الصفحات</span>
        </div>
      </div>
      {/* page-title end */}
      {/* All Page Link */}
      <div className='allpage-area'>
        <div className='container'>
          <div className='ba-all-page-inner'>
            <h5>الصفحات</h5>
            <ul>
              <li>
                <Link to='/rtl-carts'>
                  <FaAngleLeft /> بطاقتي
                </Link>
              </li>
              <li>
                <Link to='/rtl-saving'>
                  <FaAngleLeft /> إنقاذ
                </Link>
              </li>
              <li>
                <Link to='/rtl-transaction'>
                  <FaAngleLeft /> عملية
                </Link>
              </li>
              <li>
                <Link to='/rtl-transaction-details'>
                  <FaAngleLeft /> تفاصيل الصفقه
                </Link>
              </li>
              <li>
                <Link to='/rtl-bill-pay'>
                  <FaAngleLeft /> تفاصيل الفواتير
                </Link>
              </li>
              <li>
                <Link to='/rtl-notification'>
                  <FaAngleLeft /> إشعار
                </Link>
              </li>
              <li>
                <Link to='/rtl-bill-pay'>
                  <FaAngleLeft /> دفع الفاتورة
                </Link>
              </li>
              <li>
                <Link to='/rtl-blog'>
                  <FaAngleLeft /> مدونة
                </Link>
              </li>
              <li>
                <Link to='/rtl-blog-details'>
                  <FaAngleLeft /> تفاصيل المدونة
                </Link>
              </li>
              <li>
                <Link to='/rtl-about'>
                  <FaAngleLeft /> عن
                </Link>
              </li>
              <li>
                <Link to='/rtl-all-page'>
                  <FaAngleLeft /> كل مكون
                </Link>
              </li>
              <li>
                <Link to='/rtl-contact'>
                  <FaAngleLeft /> اتصال
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-two'>
            <h5 className='text-end'>مصادقة المستخدم</h5>
            <ul>
              <li>
                <Link to='/rtl-signin'>
                  <FaAngleLeft /> تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link to='/rtl-signup'>
                  <FaAngleLeft /> يسجل
                </Link>
              </li>
              <li>
                <Link to='/rtl-user-setting'>
                  <FaAngleLeft /> إعداد المستخدم
                </Link>
              </li>
              <li>
                <Link to='/rtl-user-verification'>
                  <FaAngleLeft /> التحقق من الرسائل القصيرة
                </Link>
              </li>
              <li>
                <Link to='/rtl-signup'>
                  <FaAngleLeft /> هل نسيت كلمة السر
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner style-three mb-4'>
            <h5 className='text-end'>قائمة طعام</h5>
            <ul>
              <li>
                <Link to='/rtl-about'>
                  <FaAngleLeft /> عن
                </Link>
              </li>
              <li>
                <Link to='/rtl-blog'>
                  <FaAngleLeft /> مدونة
                </Link>
              </li>
              <li>
                <Link to='/rtl-blog-details'>
                  <FaAngleLeft /> تفاصيل المدونة
                </Link>
              </li>
              <li>
                <Link to='/rtl-saving'>
                  <FaAngleLeft /> إنقاذ
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
