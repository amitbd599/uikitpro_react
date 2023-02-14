import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      {/* =============== contact start ===============*/}
      <div className='transaction-area pd-top-110'>
        <Container>
          <form action='#' className='contact-form-wrap '>
            <ul>
              <li>
                <input className='text-end' type='text' placeholder='اسم' />
              </li>
              <li>
                <input
                  className='text-end'
                  type='text'
                  placeholder='رقم التليفون'
                />
              </li>
              <li>
                <input
                  className='text-end'
                  type='text'
                  placeholder='عنوان البريد'
                />
              </li>
              <li>
                <input className='text-end' type='text' placeholder='موضوع' />
              </li>
              <li>
                <textarea
                  className='text-end'
                  placeholder='نوع الرسالة'
                  defaultValue={""}
                />
              </li>
            </ul>
            <a className='btn-large btn-blue w-100' href='#'>
              أرسل رسالة
            </a>
          </form>
        </Container>
      </div>
      {/*=============== contact End ===============*/}
    </>
  );
};

export default Contact;
