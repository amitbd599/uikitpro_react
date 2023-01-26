import React from "react";

const ComponentsTooltip = () => {
  return (
    <>
      {/* components tooltip start */}
      <div className='container-inner mg-top-90'>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className='col-xl-6'>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4>Basic Example</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <button
                    type='button'
                    className='btn btn-secondary mb-2 me-2'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Tooltip on top'
                  >
                    Tooltip on top
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-toggle='tooltip'
                    data-bs-placement='right'
                    title='Tooltip on right'
                  >
                    Tooltip on right
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary mb-2 me-2'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title='Tooltip on bottom'
                  >
                    Tooltip on bottom
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-toggle='tooltip'
                    data-bs-placement='left'
                    title='Tooltip on left'
                  >
                    Tooltip on left
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </div>
            <div className='col-xl-6'>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4>left Example</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <button
                    type='button'
                    className='btn bg-base text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='left'
                    title='Tooltip on left'
                  >
                    Tooltip on left
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </div>
            <div className='col-xl-6'>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4>Right Example</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <button
                    type='button'
                    className='btn bg-base text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='right'
                    title='Tooltip on left'
                  >
                    Tooltip on left
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </div>
            <div className='col-xl-6'>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4>Bottom Example</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <button
                    type='button'
                    className='btn bg-base text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title='Tooltip on left'
                  >
                    Tooltip on left
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </div>
          </div>
          {/* End Row */}
          <div className='col-12'>
            {/* Basic Example */}
            <div className='widget-header'>
              <h4>Text</h4>
            </div>
            <div className='widget has-shadow'>
              <div className='widget-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, nemo! Ipsam sint doloremque qui nam, odio doloribus
                consequatur dolore voluptatibus quia fugiat minima neque cumque
                velit rem suscipit rerum praesentium.
              </div>
            </div>
            {/* End Basic Example */}
          </div>
        </div>
      </div>
      {/* components tooltip End */}
    </>
  );
};

export default ComponentsTooltip;
