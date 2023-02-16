import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Area */}
      <div className='footer-area pt-2'>
        <div className='footer-top text-center'>
          <Container>
            <Link className='main-logo' to='/rtl-home-1'>
              <img src='/Assets/Images/logo-2.png' alt='' />
            </Link>
            <Link className='dark-logo' to='/rtl-home-2'>
              <img src='/Assets/Images/logo-3.png' alt='' />
            </Link>
            <p>
              حقوق الطبع والنشر © Uikitpro ReactJS 2023. جميع الحقوق محفوظة. صمم
              بواسطة قالب iPhone 11 Pro Max
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
        <Container>
          <div className='footer-bottom text-center'>
            <ul>
              <li>
                <Link to='/rtl'>
                  <img src='/Assets/Images/icon/23.png' alt='img' />
                </Link>
              </li>
              <li>
                <Link to='/rtl-all-page'>
                  <img src='/Assets/Images/icon/24.png' alt='img' />
                </Link>
              </li>
              <li>
                <Link className='ba-add-balance-btn' to='/rtl-transaction'>
                  <img src='/Assets/Images/icon/27.png' alt='img' />
                </Link>
              </li>
              <li>
                <Link to='/rtl-carts'>
                  <img src='/Assets/Images/icon/25.png' alt='img' />
                </Link>
              </li>
              <li>
                <Link className='menu-bar' to='/rtl-all-page'>
                  <img src='/Assets/Images/icon/26.png' alt='img' />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* footer End */}
    </>
  );
};

export default Footer;
