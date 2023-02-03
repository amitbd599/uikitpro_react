import React from "react";
import { Container } from "react-bootstrap";

const Badge = () => {
  return (
    <>
      {/* ============== badge end ==============*/}
      <div className='allpage-area pd-top-110 badge-component'>
        <Container fluid>
          <h5>Example</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <img src='/Assets/Images/send-money/1.png' alt='img' />
                Heanry Micle
                <span className='count bg-base'>7</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/2.png' alt='img' />
                Heanry Micle
                <span className='count bg-black'>9</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/3.png' alt='img' />
                Heanry Micle
                <span className='count bg-purple'>11</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/4.png' alt='img' />
                Heanry Micle
                <span className='count bg-pink'>7</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/5.png' alt='img' />
                Heanry Micle
                <span className='count bg-yellow'>77</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/6.png' alt='img' />
                Heanry Micle
                <span className='count text'>22</span>
              </li>
              <li>
                <img src='/Assets/Images/send-money/3.png' alt='img' />
                Heanry Micle
                <span className='count bg-blue'>22</span>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*============== badge end ==============*/}

      {/*============== badge end ==============*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5>Colors</h5>
          <div className='ba-all-page-inner mb-4 pt-3 p-2'>
            <button type='button' className='btn-c btn-primary mr-1 mb-2'>
              Primary
            </button>
            <button type='button' className='btn-c btn-secondary mr-1 mb-2'>
              Secondary
            </button>
            <button type='button' className='btn-c btn-success mr-1 mb-2'>
              Success
            </button>
            <button type='button' className='btn-c btn-info mr-1 mb-2'>
              Info
            </button>
            <button type='button' className='btn-c btn-warning mr-1 mb-2'>
              Warning
            </button>
            <button type='button' className='btn-c btn-danger mr-1 mb-2'>
              Danger
            </button>
          </div>
        </Container>
      </div>
      {/*============== badge end ==============*/}
    </>
  );
};

export default Badge;
