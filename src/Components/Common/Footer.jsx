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
            <a className='main-logo' href='home.html'>
              <img src='/Assets/Images/logo-2.png' alt='' />
            </a>
            <a className='dark-logo' href='home.html'>
              <img src='/Assets/Images/logo-3.png' alt='' />
            </a>
            <p>
              Copyright © Uikitpro 2022. All Rights Reserved. Designed By
              s7template
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
                <Link to='/'>
                  <img src='/Assets/Images/icon/23.png' alt='img' />
                </Link>
              </li>
              <li>
                <a href='all-page.html'>
                  <img src='/Assets/Images/icon/24.png' alt='img' />
                </a>
              </li>
              <li>
                <a className='ba-add-balance-btn' href='#'>
                  <img src='/Assets/Images/icon/27.png' alt='img' />
                </a>
              </li>
              <li>
                <a href='cart.html'>
                  <img src='/Assets/Images/icon/25.png' alt='img' />
                </a>
              </li>
              <li>
                <a className='menu-bar' href='#'>
                  <img src='/Assets/Images/icon/26.png' alt='img' />
                </a>
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
