import React from "react";
import { Container } from "react-bootstrap";

const ListView = () => {
  return (
    <>
      {/* ================== ListView end ==================*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5>Simple List View</h5>
          <div className='ba-all-page-inner listview style-no-arrow mb-4'>
            <ul>
              <li>
                <a href='#'>John Fonseska</a>
              </li>
              <li>
                <a href='#'>Shofie</a>
              </li>
              <li>
                <a href='#'>Farguson</a>
              </li>
            </ul>
          </div>
          <h5>Link List View</h5>
          <div className='ba-all-page-inner listview mb-4'>
            <ul>
              <li>
                <a href='#'>John Fonseska</a>
              </li>
              <li>
                <a href='#'>
                  Shofie <span className='bg-btn'>62</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  Farguson <span className='text'>Edit</span>
                </a>
              </li>
            </ul>
          </div>
          <h5>Image List View</h5>
          <div className='ba-all-page-inner listview style-no-arrow mb-4'>
            <ul>
              <li>
                <a href='#'>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/1.png' alt='img' />
                    <span>John Fonseska</span>
                  </div>
                  <div>
                    <span className='bg-btn'>62</span>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/2.png' alt='img' />
                    <span>Shofie</span>
                  </div>
                  <div>
                    <span className='bg-btn'>Edit</span>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/3.png' alt='img' />
                  </div>
                  <div>
                    <span>Farguson</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <h5>Image Link View</h5>
          <div className='ba-all-page-inner listview mb-4'>
            <ul>
              <li>
                <a href='#'>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/1.png' alt='img' />
                  </div>
                  <div>
                    <span>John Fonseska</span>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <div className='d-flex align-items-center'>
                    <img src='/Assets/Images/send-money/2.png' alt='img' />
                    <span>John Fonseska</span>
                  </div>
                  <div>
                    <span className='bg-btn'>62</span>
                  </div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/Assets/Images/send-money/3.png' alt='img' />{" "}
                  Farguson <span className='text'>Edit</span>
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
