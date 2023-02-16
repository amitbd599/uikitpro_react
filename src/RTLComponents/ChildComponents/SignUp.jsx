import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      {/* ============= SignUp-area start =============*/}
      <div className='signin-area pd-top-110'>
        <Container>
          <div className='signin-area-inner text-center mb-4'>
            <img src='/Assets/Images/other/2.png' alt='img' />
            <h3>هيا نشترك</h3>
            <p>مرحبًا بعودتك ، لقد فاتتك!</p>
          </div>
          <form className='contact-form-inner'>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='text'
                placeholder='اسم سريع
                    '
              />
            </label>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='text'
                placeholder='اسم العائلة
                    '
              />
            </label>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='text'
                placeholder='عنوان البريد الالكترونى
                    '
              />
            </label>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='password'
                placeholder='كلمة المرور
                    '
              />
            </label>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='password'
                placeholder='تأكيد كلمة المرور
                    '
              />
            </label>
            <a className='btn-large btn-blue w-100' href='#'>
              اشتراك
            </a>
            <div className='text-center'>
              <p>
                بالفعل ليس لديك حساب؟
                <Link to='/rtl-signin'> تسجيل الدخول</Link>
              </p>
            </div>
          </form>
        </Container>
      </div>
      {/*============= SignUp-area End =============*/}
    </>
  );
};

export default SignUp;
