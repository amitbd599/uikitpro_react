import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      {/* SignUp-area start */}
      <div className='signin-area mg-top-90'>
        <Container>
          <div className='signin-area-inner text-center mb-4'>
            <img src='/Assets/Images/other/2.png' alt='img' />
            <h3>Let’s Sign Up</h3>
            <p>Welcome Back, you’ve been missed !</p>
          </div>
          <form className='contact-form-inner'>
            <label className='single-input-wrap'>
              <input type='text' placeholder='Fast Name' />
            </label>
            <label className='single-input-wrap'>
              <input type='text' placeholder='Last Name' />
            </label>
            <label className='single-input-wrap'>
              <input type='text' placeholder='Email Address' />
            </label>
            <label className='single-input-wrap'>
              <input type='password' placeholder='Password' />
            </label>
            <label className='single-input-wrap'>
              <input type='password' placeholder='Confirm Password' />
            </label>
            <a className='btn-large btn-blue w-100' href='#'>
              Sign Up
            </a>
            <div className='text-center'>
              <p>
                Already have not an account? <Link to='/signin'>Sign In</Link>
              </p>
            </div>
          </form>
        </Container>
      </div>
      {/* SignUp-area End */}
    </>
  );
};

export default SignUp;
