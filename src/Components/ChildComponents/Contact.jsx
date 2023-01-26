import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      {/* contact start */}
      <div className='transaction-area mg-top-30'>
        <Container>
          <form action='#' className='contact-form-wrap'>
            <ul>
              <li>
                <input type='text' placeholder='Name' />
              </li>
              <li>
                <input type='text' placeholder='Phone Number' />
              </li>
              <li>
                <input type='text' placeholder='Mail Address' />
              </li>
              <li>
                <input type='text' placeholder='Subject' />
              </li>
              <li>
                <textarea placeholder='Type Of Message' defaultValue={""} />
              </li>
            </ul>
            <a className='btn-large btn-blue w-100' href='#'>
              Send Message
            </a>
          </form>
        </Container>
      </div>
      {/* contact End */}
    </>
  );
};

export default Contact;
