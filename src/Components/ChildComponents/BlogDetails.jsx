import React from "react";
import { Container } from "react-bootstrap";

const BlogDetails = () => {
  return (
    <>
      {/* ================ blog-area start ================*/}
      <div className='blog-details-area pd-top-110'>
        <Container>
          <div className='blog-details-inner'>
            <div className='section-title'>
              <h3 className='title'>Blog Details</h3>
            </div>
            <div className='thumb'>
              <img src='/Assets/Images/blog/7.png' alt='img' />
            </div>
            <div className='details mb-4'>
              <h6>How to save your money in own business firm.</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/*================ blog-area End ================*/}
    </>
  );
};

export default BlogDetails;
