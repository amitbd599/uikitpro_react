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
      <div className='allpage-area mt-4 search'>
        <Container>
          <h5>Search For Title</h5>
          <div className='ba-all-page-inner border-radius-4 mb-4 pt-2'>
            <ul>
              <li className='border-bottom pb-2 mb-2'>
                <h6>Heading Over Title 1</h6>
                <p className='mb-0'>This is Example or search result </p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li className='border-bottom pb-2 mb-2'>
                <h6>Heading Over Title 1</h6>
                <p className='mb-0'>This is Example or search result </p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li className='border-bottom pb-2 mb-2'>
                <h6>Heading Over Title 1</h6>
                <p className='mb-0'>This is Example or search result </p>
                <p className='mb-0'>www.google.com</p>
              </li>
              <li>
                <h6>Heading Over Title 1</h6>
                <p className='mb-0'>This is Example or search result </p>
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
