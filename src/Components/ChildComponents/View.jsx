import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const View = () => {
  const darkBG = localStorage.getItem("color");
  const [show, setShow] = useState(true);
  const QRControl = () => {
    setShow(!show);
  };
  return (
    <>
      {/* ========== Start Inner section ========== */}
      <div className='sc5'>
        <div className='bemo-banner'>
          <Container>
            <Row className='justify-content-center'>
              <Col xl={6} className='align-self-center'>
                <div className='section-title mt-4 mt-lg-0'>
                  {darkBG === "dark" ? (
                    <img
                      className='mb-4'
                      src='/Assets/Images/logo-3.png'
                      alt='icon'
                    />
                  ) : (
                    <img
                      className='mb-4'
                      src='/Assets/Images/logo.png'
                      alt='icon'
                    />
                  )}

                  <h3 className='entry-title'>
                    MobileKit Wallet & Banking ReactJS Mobile Template
                  </h3>
                  <p className='d-none d-lg-block'>
                    UikitPro is an elegant, modern and fully customizable Walet
                    &amp; Banking ReactJS Mobile App Powered by Bootstrap 5X
                  </p>
                  <div className='app-content'>
                    <ul className='applist ms-0 ps-0'>
                      <li># PWA Ready</li>
                      <li># Use React Bootstrap 5 with SCSS</li>
                      <li># Dark / Light Mode</li>
                      <li># Clean Markup</li>
                      <li># Easy to Edit</li>
                      <li># Component Base All Layout</li>
                      <li># Structured File</li>
                      <li># React Router Dom</li>
                    </ul>
                  </div>
                </div>
                <div className='banner-btn'>
                  {/* <Link
                    className='scroll-down-btn-demo m-auto d-none d-lg-inline-block'
                    to='/rtl/index'
                  >
                    RTL View
                  </Link> */}
                  <a
                    className='scroll-down-btn-demo mx-1 d-none d-lg-inline-block'
                    target='_blank'
                    href='https://themeforest.net/user/s7template'
                  >
                    Buy Now
                  </a>
                  <Link
                    className='scroll-down-btn-demo m-auto d-inline-block d-lg-none'
                    to='/home-1'
                  >
                    Live Demo
                  </Link>
                </div>
                <div
                  className={
                    show
                      ? "qr-button alert alert-warning alert-dismissible fade show"
                      : "qr-button alert alert-warning alert-dismissible fade "
                  }
                  role='alert'
                >
                  <img src='/Assets/Images/qr.png' alt='qr' className='qr' />
                  <div className='text'>
                    <div className='qr-text'>
                      Scan the QR code to view on your mobile device Main
                      Version
                    </div>
                  </div>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='alert'
                    aria-label='Close'
                    onClick={QRControl}
                  />
                </div>
              </Col>
              <Col xl={4} className='offset-xl-2 d-none d-lg-block'>
                <div className='phoneContent'>
                  <div className='phoneWrapper'>
                    <div className='in'>
                      <iframe className='getFrame' src='/home-1' />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* end banner section */}
        {/* start feature section */}
        <div className='demo-feature pd-top-60 pd-bottom-60 d-none d-lg-block'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={9} xs={12}>
                <div className='section-title text-center'>
                  <h1 className='entry-title mb-3'>Discover Core Feature</h1>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/42.png' alt='icon' />
                  <div className='media-body'>
                    <h5>Clean Markup</h5>
                    <p>
                      UikitPro Clean and readable code structure and validated
                      by W3C.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/46.png' alt='icon' />
                  <div className='media-body'>
                    <h5>React Bootstrap 5</h5>
                    <p>
                      Developed on React Bootstrap 5, the most popular css
                      framework.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/43.png' alt='icon' />
                  <div className='media-body'>
                    <h5 className='mt-0'>Menu</h5>
                    <p>
                      UikitPro have custome menu..Sibebar menu &amp; footer
                      menu.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/41.png' alt='icon' />
                  <div className='media-body'>
                    <h5 className='mt-0'>Component</h5>
                    <p>
                      UikitPro have 50+ Component. We have designed many
                      components that will make you feel like using an mobile
                      apps.{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/42.png' alt='icon' />
                  <div className='media-body'>
                    <h5 className='mt-0'>User Friendly Design</h5>
                    <p>
                      UikitPro is simple, clean, intuitive, and reliable from
                      home screen to the payment form. If your product is
                      struggling with usability, try implementing one of my tips
                      during the app development stage.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6} xs={12}>
                <div className='media'>
                  <img src='/Assets/Images/icon/45.png' alt='icon' />
                  <div className='media-body'>
                    <h5 className='mt-0'>SCSS</h5>
                    <p>
                      UikitPro have scss file include. SCSS is a CSS
                      pre-processor with syntax advancements. Style sheets in
                      the advanced syntax are processed by the program, and
                      turned into regular CSS style
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* end feature section */}
      </div>
      {/* ========== End Inner section ========== */}

      {/* ========== Start Footer section ========== */}

      <div className='footer-area mb-0'>
        <div className='footer-top pt-5 text-center'>
          <Container>
            <Link to='/'>
              <img src='/Assets/Images/logo-2.png' alt='' />
            </Link>
            <p>
              Copyright © Uikitpro ReactJS 2023. All Rights Reserved. Designed
              By s7template
            </p>
            <ul className='social-area'>
              <li>
                <a className='facebook' href='#'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className='twitter' href='#'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className='linkedin' href='#'>
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a className='pinterest' href='#'>
                  <FaPinterestP />
                </a>
              </li>
              <li>
                <a className='instagram' href='#'>
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Container>
        </div>
      </div>
      {/* ========== End Footer section ========== */}
    </>
  );
};

export default View;
