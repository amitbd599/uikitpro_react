import React from "react";
import { Container } from "react-bootstrap";

const Radio = () => {
  return (
    <>
      {/* =============== badge end ===============*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5>Example</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
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
                      type='radio'
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
                      type='radio'
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
        </Container>
      </div>
      {/*=============== badge end ===============*/}
      {/*=============== badge end ===============*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5>Example</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
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
                      type='radio'
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
        </Container>
      </div>
      {/*=============== badge end ===============*/}
      {/*=============== badge end ===============*/}
      <div className='allpage-area mt-4'>
        <div className='container'>
          <h5>Inline</h5>
          <div className='ba-all-page-inner mb-4 p-3'>
            Lorem ipsum dolor sit, amet elit. Perferendis,
            <span className='form-check d-inline-block ms-2 mx-2'>
              <input
                className='form-check-input'
                type='radio'
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
      {/*=============== badge end ===============*/}
    </>
  );
};

export default Radio;
