import React from "react";

const Search = () => {
  return (
    <>
      {/* Search start */}
      <div className='Search-area mg-top-110'>
        <div className='container'>
          <div className='single-search-inner'>
            <input type='text' placeholder='Search' />
            <i className='fa fa-search' />
          </div>
        </div>
      </div>
      {/* Search end */}
      {/* allpage start */}
      <div className='allpage-area mt-4'>
        <div className='container'>
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
        </div>
      </div>
    </>
  );
};

export default Search;
