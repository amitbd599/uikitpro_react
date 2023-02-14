import React from "react";
import { Container } from "react-bootstrap";

const UserVerification = () => {
  return (
    <>
      {/* ========== singin-area start ==========*/}
      <div className='signin-area pd-top-110'>
        <Container>
          <div className='signin-area-inner text-center mb-4'>
            <img src='/Assets/Images/other/2.png' alt='img' />
            <h3>تحقق</h3>
            <p>
              تم إرسال رمز المصادقة إلى
              <br /> (+880) 111 333 222
            </p>
          </div>
          <form className='verify-form-inner text-center'>
            <label className='single-input-wrap'>
              <input type='text' />
            </label>
            <label className='single-input-wrap'>
              <input type='text' />
            </label>
            <label className='single-input-wrap'>
              <input type='text' />
            </label>
            <label className='single-input-wrap'>
              <input type='password' />
            </label>
            <div className='text-center mt-2'>
              <p>
                لم أتلق رمز.
                <a href='#'>أعد إرسال الرمز</a>
              </p>
            </div>
            <a className='btn-large btn-blue w-100 mt-2' href='#'>
              تحقق
            </a>
          </form>
        </Container>
      </div>
      {/*========== singin-area End ==========*/}
    </>
  );
};

export default UserVerification;
