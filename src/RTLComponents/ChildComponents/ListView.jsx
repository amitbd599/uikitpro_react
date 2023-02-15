import React from "react";
import { Container } from "react-bootstrap";

const ListView = () => {
  return (
    <>
      {/* ================== ListView end ==================*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5 className='text-end'>عرض قائمة بسيط</h5>
          <div className='ba-all-page-inner listview style-no-arrow mb-4'>
            <ul>
              <li>
                <a href='#' className='d-flex justify-content-end'>
                  جون فونسيسكا
                </a>
              </li>
              <li>
                <a href='#' className='d-flex justify-content-end'>
                  شوفي
                </a>
              </li>
              <li>
                <a href='#' className='d-flex justify-content-end'>
                  فارجسون
                </a>
              </li>
            </ul>
          </div>
          <h5 className='text-end'>عرض قائمة الارتباط</h5>
          <div className='ba-all-page-inner listview mb-4'>
            <ul>
              <li>
                <a href='#'>فونسيسكا</a>
              </li>
              <li>
                <a href='#'>
                  <span className='bg-btn'>62</span> شوفي
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='text'>Edit</span> فارجسون
                </a>
              </li>
            </ul>
          </div>
          <h5 className='text-end'>عرض ارتباط الصورة</h5>
          <div className='ba-all-page-inner listview style-no-arrow mb-4'>
            <ul>
              <li>
                <a href='#'>
                  <div>
                    <span className='bg-btn'>62</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span>فونسيسكا</span>
                    <img src='/Assets/Images/send-money/1.png' alt='img' />
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div>
                    <span className='bg-btn'>Edit</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span>فارجسون</span>
                    <img src='/Assets/Images/send-money/2.png' alt='img' />
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div>
                    <span>تعديل</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/3.png' alt='img' />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*================== ListView end ==================*/}
    </>
  );
};

export default ListView;
