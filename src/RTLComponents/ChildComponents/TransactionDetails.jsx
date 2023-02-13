import React from "react";
import { Container } from "react-bootstrap";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TransactionDetails = () => {
  return (
    <>
      {/* ============= balance start =============*/}
      <div className='balance-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <h3 className='title'>Recently Transactios</h3>
            <a className='sub-delete' href='#'>
              <FaTrashAlt />
            </a>
          </div>
          <div className='ba-transaction-details text-center'>
            <h6>
              Here is your transactios <br /> details history
            </h6>
            <h4>
              Payment Sent <br />
              <span>$56.00</span>
            </h4>
          </div>
        </Container>
      </div>
      {/*============= balance End =============*/}
      {/*============= transaction start =============*/}
      <div className='transaction-details pd-top-36'>
        <Container>
          <ul className='transaction-details-inner'>
            <li className='transaction-details-title'>
              <span className='float-start pt-2'>Payment Status</span>
              <span className='float-end'>
                <FaCheck />
              </span>
            </li>
            <li>
              <span className='float-start'>To</span> :
              <span className='float-end'>Rakishony Roy</span>
            </li>
            <li>
              <span className='float-start'>Bank Name</span> :
              <span className='float-end'>Payoneer</span>
            </li>
            <li>
              <span className='float-start'>Category</span> :
              <span className='float-end'>Travely</span>
            </li>
            <li>
              <span className='float-start'>Purchase Receipt</span> :
              <span className='float-end'>Yes</span>
            </li>
            <li>
              <span className='float-start'>Purchase Date</span> :
              <span className='float-end'>03/22/2020</span>
            </li>
            <li>
              <span className='float-start'>Total Amounts</span> :
              <span className='float-end'>$757.00</span>
            </li>
          </ul>
        </Container>
      </div>
      {/*============= transaction End=============*/}
      <div className='btn-wrap pt-3 text-center'>
        <Container>
          <p className='btn-content-text'>
            If haveing any transaction issue, Please{" "}
            <Link to='/contact'>Contact us</Link>
          </p>
        </Container>
      </div>
    </>
  );
};

export default TransactionDetails;
