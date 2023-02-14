import React from "react";
import { Container } from "react-bootstrap";

const Toggle = () => {
  return (
    <>
      {/* toggle start */}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5 className='text-end'>قمة</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check form-switch d-flex justify-content-between'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                    <label
                      className='form-check-label text-end d-inline'
                      htmlFor='flexSwitchCheckDefault'
                    >
                      تنبيه
                    </label>
                  </div>
                  <div className='form-check form-switch d-flex justify-content-between'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      defaultChecked=''
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckChecked'
                    >
                      النشرة الإخبارية
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* toggle end */}
      {/* toggle start */}
      <div className='allpage-area'>
        <Container>
          <h5 className='text-end'>نص</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check form-switch d-flex justify-content-between'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      defaultChecked=''
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckChecked'
                    >
                      النشرة الإخبارية
                    </label>
                  </div>
                  <div className='form-check form-switch d-flex justify-content-between'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      defaultChecked=''
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckChecked'
                    >
                      النشرة الإخبارية
                    </label>
                  </div>
                  <div className='form-check form-switch d-flex justify-content-between'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      defaultChecked=''
                    />
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckChecked'
                    >
                      النشرة الإخبارية
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* toggle end */}
    </>
  );
};

export default Toggle;
