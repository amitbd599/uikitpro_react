import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {/* ================== blog-area start ==================*/}
      <div className='blog-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>المشاركات الاخيرة</h3>
            <a className='float-start' href='#'>
              مشاهدة الكل
            </a>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/1.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/2.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/3.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/4.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/5.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='single-blog'>
                <div className='thumb'>
                  <img src='/Assets/Images/blog/6.png' alt='img' />
                </div>
                <div className='details text-end'>
                  <Link to='/rtl-blog-details'>
                    كيف تحفظ أموالك في شركة تجارية خاصة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/*================== blog-area End ==================*/}
      <div className='btn-wrap mb-2 pb-4'>
        <Container>
          <a className='btn-large btn-blue w-100' href='#'>
            تحميل المزيد
          </a>
        </Container>
      </div>
    </>
  );
};

export default Blog;
