import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* =============== blog-area start ===============*/}
      <div className='blog-details-area pd-top-110'>
        <Container>
          <div className='blog-details-inner'>
            <div className='section-title'>
              <h3 className='title'>About The Uikitpro</h3>
            </div>
            <div className='thumb'>
              <img src='/Assets/Images/blog/7.png' alt='img' />
            </div>
            <div className='details'>
              <h6>Recived Money By Aron Fince</h6>
              <p>You have received a payment form Aron Fince.</p>
              <p>
                Money Aron magna sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p>
                Fince ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, Consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/*=============== blog-area End ===============*/}
    </>
  );
};

export default About;
