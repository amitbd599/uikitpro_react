import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* ============= SignIn-area start =============*/}
      <div className='signin-area pd-top-110'>
        <Container>
          <div className='signin-area-inner text-center'>
            <img src='/Assets/Images/other/2.png' alt='img' />
            <h3>Let’s Sign In</h3>
            <p>Welcome Back, you’ve been missed !</p>
            <a className='btn btn-white w-100 mt-3' href='#'>
              <img
                className='mb-0'
                src='/Assets/Images/icon/google.png'
                alt='img'
              />
              Login With Google
            </a>
            <a className='btn btn-white w-100' href='#'>
              <FaFacebookF /> <span>Login With Facebook</span>
            </a>
            <div className='or'>
              <span>or</span>
            </div>
          </div>
          <form className='contact-form-inner'>
            <label className='single-input-wrap'>
              <input type='text' placeholder='aron.banking@gmail.com' />
            </label>
            <label className='single-input-wrap'>
              <input type='password' placeholder='************' />
            </label>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                defaultValue=''
                id='flexCheckDefault'
              />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                Remember Me
              </label>
              <a className='float-end' href='#'>
                Forget Password?
              </a>
            </div>
            <a className='btn-large btn-blue w-100' href='#'>
              Sign In
            </a>
            <div className='text-center'>
              <p>
                Already have not an account? <Link to='/signup'>Sign up !</Link>
              </p>
            </div>
          </form>
        </Container>
      </div>
      {/*============= SignIn-area End =============*/}
    </>
  );
};

export default SignIn;
