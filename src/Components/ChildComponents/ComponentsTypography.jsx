import React from "react";

const ComponentsTypography = () => {
  return (
    <>
      {/* table 1 start */}
      <div className='table 1-area mg-top-120'>
        <div className='container'>
          <h5>Default</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-1'>
                <thead>
                  <tr>
                    <th scope='col'>Sass Variable</th>
                    <th scope='col'>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>var(--body-font)</td>
                    <td>Body Font</td>
                  </tr>
                  <tr>
                    <td>var(--heading-font)</td>
                    <td>heading Font</td>
                  </tr>
                  <tr>
                    <td>var(--main-color)</td>
                    <td>Main Color</td>
                  </tr>
                  <tr>
                    <td>var(--heading-color)</td>
                    <td>heading Color</td>
                  </tr>
                  <tr>
                    <td>var(--paragraph-color)</td>
                    <td>paragraph Color</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* table 1 end */}
      {/* typography start */}
      <div className='allpage-area mg-top-90'>
        <div className='container'>
          <h5>Top</h5>
          <div className='uikit-badge-inner bg-white mb-4'>
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>
          </div>
        </div>
      </div>
      {/* typography end */}
      {/* typography start */}
      <div className='allpage-area'>
        <div className='container'>
          <h5>Top</h5>
          <div className='uikit-badge-inner bg-white mb-4'>
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined.</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
          </div>
        </div>
      </div>
      {/* typography end */}
    </>
  );
};

export default ComponentsTypography;
