import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAngleLeft, FaBell, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [show, setShow] = useState(false);

  const navbarControl = () => {
    setShow(!show);
  };
  return (
    <>
      <header>
        {/* header start */}
        <div className='header-area bg-base'>
          <img
            className='ba-nose-img'
            src='/Assets/Images/icon/40.png'
            alt='img'
          />

          <Container>
            <div className='header-top'>
              <Row>
                <Col xs={6}>
                  <p>8:33</p>
                </Col>
                <Col xs={6} className='text-end'>
                  <ul>
                    <li>
                      <img src='/Assets/Images/icon/37.png' alt='img' />
                    </li>
                    <li>
                      <img src='/Assets/Images/icon/38.png' alt='img' />
                    </li>
                    <li>
                      <img src='/Assets/Images/icon/39.png' alt='img' />
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <Row>
              <Col sm={4} xs={4} className='align-self-center'>
                {window.location.pathname === "/rtl-home-1" ? (
                  <span className='menu-back-page' onClick={navbarControl}>
                    <img src='/Assets/Images/icon/0.png' alt='img' />
                  </span>
                ) : (
                  <Link className='menu-back-page' to='/rtl-home-1'>
                    <img src='/Assets/Images/icon/28.png' alt='img' />
                  </Link>
                )}
              </Col>
              <Col
                sm={4}
                xs={4}
                className='text-center align-self-center text-center'
              >
                {window.location.pathname === "/rtl-home-1" || "/rtl-home-2" ? (
                  <img src='/Assets/Images/logo_4.png' alt='img' />
                ) : (
                  <div className='page-name'>Verification</div>
                )}
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='header-user' to='/user-setting'>
                      <img src='/Assets/Images/user.png' alt='img' />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        {/* header end */}

        {/* navbar end */}
        <div className={show ? "ba-navbar active" : "ba-navbar"}>
          <div className='ba-navbar-user text-center'>
            <div className='menu-close' onClick={navbarControl}>
              <MdClose />
            </div>
            <div className='thumb'>
              <img src='/Assets/Images/user.png' alt='user' />
            </div>
            <div className='details'>
              <h5>رادورونتو كيلاكس</h5>
              <p>ID: 998833234</p>
            </div>
          </div>
          <div className='ba-balance-inner mb-3 text-end align-self-center'>
            <div className='icon'>
              <img src='/Assets/Images/icon/1.png' alt='img' />
            </div>
            <h5 className='title'>الرصيد المتوفر</h5>
            <h5 className='amount'>$56,985.00</h5>
          </div>
          <div className='ba-add-balance-title'>
            <span>
              <FaPlus />
            </span>
            <h5>الوديعة</h5>
          </div>
          <div className='ba-main-menu'>
            <h5>قائمة الطعام</h5>
            <ul>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/home-1'
                >
                  <FaAngleLeft />
                  <span>عرض</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/all-page'
                >
                  <FaAngleLeft />
                  <span>الصفحات</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/about'
                >
                  <FaAngleLeft />
                  <span>معلومات عنا</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/carts'
                >
                  <FaAngleLeft />
                  <span>عربة التسوق الخاصة بي</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/user-setting'
                >
                  <FaAngleLeft /> <span>جلسة</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/notification'
                >
                  <FaAngleLeft /> <span>تنبيه</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/all-page'
                >
                  <FaAngleLeft /> <span>مكون</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active mt-4" : "mt-4"
                  }
                  to='/signup'
                >
                  <FaAngleLeft /> <span>تسجيل خروج</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* navbar end */}
      </header>
    </>
  );
};

export default Header;
