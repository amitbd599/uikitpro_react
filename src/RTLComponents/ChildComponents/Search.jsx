import React from "react";
import { Container } from "react-bootstrap";

const Search = () => {
  return (
    <>
      {/* ================ Search start ================*/}
      <div className='Search-area pd-top-110'>
        <Container>
          <div className='single-search-inner'>
            <input type='text' placeholder='Search' />
            <i className='fa fa-search' />
          </div>
        </Container>
      </div>
      {/*================ Search end ================*/}
      {/*================ allpage start ================*/}
      <div className='allpage-area mt-5'>
        <Container>
          <h5 className='text-end'>أساسي</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul>
              <li className='border-bottom pb-2 mb-2 text-end'>
                <h6>العنوان فوق العنوان 1</h6>
                <p className='mb-0'>هذا مثال أو نتيجة بحث</p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li className='border-bottom pb-2 mb-2 text-end'>
                <h6>العنوان فوق العنوان 1</h6>
                <p className='mb-0'>هذا مثال أو نتيجة بحث</p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li className='border-bottom pb-2 mb-2 text-end'>
                <h6>العنوان فوق العنوان 1</h6>
                <p className='mb-0'>هذا مثال أو نتيجة بحث</p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li className='text-end'>
                <h6>العنوان فوق العنوان 1</h6>
                <p className='mb-0'>هذا مثال أو نتيجة بحث</p>
                <p className='mb-0'>www.google.com</p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/*================ allpage End ================*/}
    </>
  );
};

export default Search;
