import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight, FaBell, FaPlus } from "react-icons/fa";
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
                {window.location.pathname === "/home-1" ? (
                  <span className='menu-back-page' onClick={navbarControl}>
                    <img src='/Assets/Images/icon/0.png' alt='img' />
                  </span>
                ) : (
                  <Link className='menu-back-page' to='/home-1'>
                    <img src='/Assets/Images/icon/28.png' alt='img' />
                  </Link>
                )}
              </Col>
              <Col
                sm={4}
                xs={4}
                className='text-center align-self-center text-center'
              >
                {window.location.pathname === "/home-1" || "/home-2" ? (
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
              <h5>Raduronto kelax</h5>
              <p>ID: 99883323</p>
            </div>
          </div>
          <div className='ba-balance-inner mb-3 text-end align-self-center'>
            <div className='icon'>
              <img src='/Assets/Images/icon/1.png' alt='img' />
            </div>
            <h5 className='title'>Available Balance</h5>
            <h5 className='amount'>$56,985.00</h5>
          </div>
          <div className='ba-add-balance-title'>
            <h5>Deposit</h5>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className='ba-main-menu'>
            <h5>Menu</h5>
            <ul>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/home-1'
                >
                  <span>Uikitpro Display</span>
                  <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/all-page'
                >
                  <span>Pages</span>
                  <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/about'
                >
                  <span>About Us</span>
                  <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/carts'
                >
                  <span>My Cart</span>
                  <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/user-setting'
                >
                  <span>Setting</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/notification'
                >
                  <span>Notification</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? "active" : "")}
                  to='/all-page'
                >
                  <span>All Component</span> <FaAngleRight />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active mt-4" : "mt-4"
                  }
                  to='/signup'
                >
                  <span>Logout</span> <FaAngleRight />
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
