import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <>
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
              <Link className='menu-back-page' to='/'>
                <img src='/Assets/Images/icon/28.png' alt='img' />
              </Link>
            </Col>
            <Col
              sm={4}
              xs={4}
              className='text-center align-self-center text-center'
            >
              <div className='page-name'>Verification</div>
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
    </>
  );
};

export default Header;
