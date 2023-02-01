import React from "react";

const Dialog = () => {
  return (
    <>
      {/* components buttons start */}
      <div className='container-inner mg-top-90'>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className='col-xl-6'>
              {/* Basic Buttons */}
              <div className='widget-header'>
                <h4>Basic</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button
                      type='button'
                      className='btn-c text-white bg-black ripple mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger ripple mr-1 mb-2'
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              {/* End Basic Buttons */}
            </div>
            <div className='col-xl-6'>
              {/* Basic Buttons */}
              <div className='widget-header'>
                <h4>Icond</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger ripple mr-1 mb-2'
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              {/* End Basic Buttons */}
            </div>
            <div className='col-xl-6'>
              {/* Outline Buttons */}
              <div className='widget-header'>
                <h4>Outline Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      Block Button
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      Inline Button
                    </button>
                  </div>
                </div>
              </div>
              {/* End Outline Buttons */}
            </div>
            <div className='col-xl-6'>
              {/* Bankapp Buttons */}
              <div className='widget-header'>
                <h4>More</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      Form Dialog
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      Image Dialog
                    </button>
                  </div>
                </div>
              </div>
              {/* End Bankapp Buttons */}
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* components buttons End */}
    </>
  );
};

export default Dialog;
