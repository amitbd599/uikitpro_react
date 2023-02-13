import React from "react";
import { Container } from "react-bootstrap";

const Deposit = () => {
  return (
    <>
      {/* ================= Deposit Popup =================*/}
      <div className='uikit-alert-area'>
        <div className='uikit-alert-inner text-center'>
          <form className='details'>
            <h6 className='title mb-3'>Deposit Money</h6>
            <div className='single-select-inner text-start'>
              <h6>Form</h6>
              <select>
                <option>Select A Account</option>
                <option>Select A Account</option>
                <option>Select A Account</option>
                <option>Select A Account</option>
              </select>
            </div>
            <div className='single-select-inner text-start'>
              <h6>Form</h6>
              <input type='text' placeholder='$150' />
            </div>
            <a className='btn btn-success w-100 mt-2' href='#'>
              Done
            </a>
          </form>
        </div>
      </div>

      {/*================= Inner View =================*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5>Basic</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul>
              <li>
                <a href='#'>Default</a>
              </li>
              <li>
                <a href='#'>Inset</a>
              </li>
              <li>
                <a href='#'>Iconed</a>
              </li>
            </ul>
          </div>
          <h5>More</h5>
          <div className='ba-all-page-inner'>
            <ul>
              <li>
                <a href='#'>With Form</a>
              </li>
              <li>
                <a href='#'>Content</a>
              </li>
              <li>
                <a href='#'>Transaction</a>
              </li>
              <li>
                <a href='#'>Alert</a>
              </li>
              <li>
                <a href='#'>Alert Border</a>
              </li>
              <li>
                <a href='#'>Alert Image</a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*================= Inner end =================*/}
    </>
  );
};

export default Deposit;
