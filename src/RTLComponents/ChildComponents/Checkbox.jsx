import React from "react";
import { Container } from "react-bootstrap";

const Checkbox = () => {
  return (
    <>
      {/* ================== badge end ==================*/}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5 className='text-end'>مثال</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check d-flex justify-content-between'>
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
                  <div className='form-check d-flex justify-content-between'>
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
                  <div className='form-check d-flex justify-content-between'>
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
        </Container>
      </div>
      {/*================== badge end ==================*/}
      {/*================== badge end ==================*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5 className='text-end'>مثال</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check  d-flex justify-content-between'>
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
                  <div className='form-check  d-flex justify-content-between'>
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
        </Container>
      </div>
      {/*================== badge end ==================*/}
      {/*================== badge end ==================*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5 className='text-end'>في النسق</h5>
          <div className='ba-all-page-inner mb-4 p-2'>
            على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين
            <span className='form-check d-inline-block ms-2 mx-2'>
              <label className='form-check-label' htmlFor='flexRadioDefault1'>
                في النسق
              </label>
            </span>
            على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على الصعيدين
          </div>
        </Container>
      </div>
      {/*================== badge end ==================*/}
    </>
  );
};

export default Checkbox;
