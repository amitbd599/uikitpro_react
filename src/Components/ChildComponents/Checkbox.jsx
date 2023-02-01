import React from "react";

const Checkbox = () => {
  return (
    <>
      {/* badge end */}
      <div className='allpage-area mg-top-110'>
        <div className='container'>
          <h5>Example</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='exampleRadios1'
                      defaultValue='option1'
                      defaultChecked=''
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleRadios1'
                    >
                      $ 60
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='exampleRadios2'
                      defaultValue='option2'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleRadios2'
                    >
                      $ 120
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='exampleRadios3'
                      defaultValue='option3'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='exampleRadios3'
                    >
                      $ 220
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* badge end */}
      {/* badge end */}
      <div className='allpage-area mt-4'>
        <div className='container'>
          <h5>Example</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      defaultValue=''
                      id='defaultCheck1'
                    />
                    <label className='form-check-label' htmlFor='defaultCheck1'>
                      $ 60
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      defaultValue=''
                      id='defaultCheck2'
                    />
                    <label className='form-check-label' htmlFor='defaultCheck2'>
                      $ 120
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* badge end */}
      {/* badge end */}
      <div className='allpage-area mt-4'>
        <div className='container'>
          <h5>Inline</h5>
          <div className='ba-all-page-inner mb-4 p-2'>
            Lorem ipsum dolor sit, amet elit. Perferendis,
            <span className='form-check d-inline-block ms-2 mx-2'>
              <input
                className='form-check-input'
                type='checkbox'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                Default radio
              </label>
            </span>
            eius qui ut deleniti, tenetur fugiat dicta nam incidunt odit quod,
            vero ipsa quis!
          </div>
        </div>
      </div>
      {/* badge end */}
    </>
  );
};

export default Checkbox;
