import React from "react";
import { Container } from "react-bootstrap";

const Toggle = () => {
  return (
    <>
      {/* toggle start */}
      <div className='allpage-area pd-top-110'>
        <Container>
          <h5>Top</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check form-switch'>
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckDefault'
                    >
                      Notification
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDefault'
                    />
                  </div>
                  <div className='form-check form-switch'>
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckChecked'
                    >
                      Newslatter
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckChecked'
                      defaultChecked=''
                    />
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
          <h5>Text</h5>
          <div className='ba-all-page-inner mb-4'>
            <ul className='uikit-badge-inner'>
              <li>
                <div className='single-checkbox-inner'>
                  <div className='form-check form-switch'>
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckDisabled'
                    >
                      Toggle 1
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckDisabled'
                    />
                  </div>
                  <div className='form-check form-switch'>
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckCheckedDisabled'
                    >
                      Toggle 2
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckCheckedDisabled'
                      defaultChecked=''
                    />
                  </div>
                  <div className='form-check form-switch'>
                    <label
                      className='form-check-label'
                      htmlFor='flexSwitchCheckCheckedDisabled2'
                    >
                      Toggle 3
                    </label>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      id='flexSwitchCheckCheckedDisabled2'
                    />
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
