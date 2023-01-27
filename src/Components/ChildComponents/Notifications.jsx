import React from "react";

const Notifications = () => {
  return (
    <>
      {/* components notification start */}
      <div className='container-inner mg-top-90'>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className='col-xl-6'>
              {/* Basic Example */}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='section-title mt-3 mb-3'>
                    <h4>Layouts:</h4>
                  </div>
                  <p>
                    <code>notification</code> , <code>alert</code> ,{" "}
                    <code>success</code> , <code>warning</code> ,{" "}
                    <code>error</code> , <code>info/informations</code>
                  </p>
                  <div className='section-title mt-4 mb-3'>
                    <h4>Types:</h4>
                  </div>
                  <p>
                    <code>top</code> , <code>topLeft</code> ,{" "}
                    <code>topCenter</code> , <code>topRight</code> ,{" "}
                    <code>center</code> , <code>centerLeft</code> ,{" "}
                    <code>centerRight</code> , <br />
                    <code>bottom</code> , <code>bottomLeft</code> ,{" "}
                    <code>bottomCenter</code> , <code>bottomRight</code>
                  </p>
                  <div className='section-title mt-5 mb-3'>
                    <h4>Directions (Top)</h4>
                  </div>
                  <button
                    id='example-top'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Top
                  </button>
                  <button
                    id='example-top-left'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Top Left
                  </button>
                  <button
                    id='example-top-center'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Top Center
                  </button>
                  <button
                    id='example-top-right'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Top Right
                  </button>
                  <div className='section-title mt-3 mb-3'>
                    <h4>Directions (Center)</h4>
                  </div>
                  <button
                    id='example-center'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Center
                  </button>
                  <button
                    id='example-center-left'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Center Left
                  </button>
                  <button
                    id='example-center-right'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Center Right
                  </button>
                  <div className='section-title mt-3 mb-3'>
                    <h4>Directions (Bottom)</h4>
                  </div>
                  <button
                    id='example-bottom'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Bottom
                  </button>
                  <button
                    id='example-bottom-left'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Bottom Left
                  </button>
                  <button
                    id='example-bottom-center'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Bottom Center
                  </button>
                  <button
                    id='example-bottom-right'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Bottom Right
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </div>
            <div className='col-xl-6'>
              {/* Advanced Example */}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='section-title mt-3 mb-3'>
                    <h4>With Delay</h4>
                  </div>
                  <button
                    id='example-top-left-delay'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Top Left
                  </button>
                  <button
                    id='example-center-delay'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Center
                  </button>
                  <button
                    id='example-bottom-right-delay'
                    type='button'
                    className='btn-c btn-shadow mr-2 mb-3'
                  >
                    Bottom Right
                  </button>
                  <div className='section-title mt-5 mb-3'>
                    <h4>Layouts:</h4>
                  </div>
                  <button
                    id='example-default'
                    type='button'
                    className='d-block btn-c btn-primary mr-2 mb-3'
                  >
                    Default
                  </button>
                  <button
                    id='example-success'
                    type='button'
                    className='d-block btn-c btn-success mr-2 mb-3'
                  >
                    Success
                  </button>
                  <button
                    id='example-warning'
                    type='button'
                    className='d-block btn-c btn-warning mr-2 mb-3'
                  >
                    Warning
                  </button>
                  <button
                    id='example-error'
                    type='button'
                    className='d-block btn-c btn-danger mr-2 mb-3'
                  >
                    Error
                  </button>
                  <button
                    id='example-info'
                    type='button'
                    className='d-block btn-c btn-info mr-2 mb-3'
                  >
                    Informations
                  </button>
                </div>
              </div>
              {/* End Advanced Example */}
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* components notification End */}
    </>
  );
};

export default Notifications;
