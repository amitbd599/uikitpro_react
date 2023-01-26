import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const Transaction = () => {
  return (
    <>
      {/* transaction start */}
      <div className='transaction-area'>
        <Container>
          <div className='section-title'>
            <h3 className='title'>Recently Transaction</h3>
          </div>
          <ul className='transaction-inner'>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/12.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Namecheap Inc.</h5>
                <p>Domain Purchase</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/13.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Namecheap Inc.</h5>
                <p>Domain Purchase</p>
                <h5 className='amount text-end'>
                  -$250 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/14.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Namecheap Inc.</h5>
                <p>Domain Purchase</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/29.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Bill Resturant</h5>
                <p>Fun Life</p>
                <h5 className='amount text-end'>
                  -$100 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/15.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Namecheap Inc.</h5>
                <p>Domain Purchase</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
              </div>
              <div className='details'>
                <h5>Namecheap Inc.</h5>
                <p>Domain Purchase</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
          </ul>
        </Container>
      </div>
      {/* transaction End */}
    </>
  );
};

export default Transaction;
