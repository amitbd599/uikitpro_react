import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      {/* blog-area start */}
      <div className='blog-area mg-top-110'>
        <Container>
          <div className='section-title'>
            <h3 className='title'>Recent Posts</h3>
            <a href='#'>View All</a>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/1.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/2.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/3.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/4.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/5.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/6.png' alt='img' />
                </div>
                <div className='details'>
                  <a href='blog-details.html'>
                    How to save your money in own business firm.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* blog-area End */}
      <div className='btn-wrap mb-2 pb-4'>
        <Container>
          <a className='btn-large btn-blue w-100' href='#'>
            Load More
          </a>
        </Container>
      </div>
    </>
  );
};

export default Blog;
