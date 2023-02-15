import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dialog = () => {
  return (
    <>
      {/* =================== components buttons start ===================*/}
      <div className='container-inner pd-top-110'>
        <Container fluid>
          <Row className='flex-row'>
            <Col xl={6}>
              {/* Basic Buttons */}
              <div className='widget-header'>
                <h4 className='text-end'>أساسي</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button
                      type='button'
                      className='btn-c text-white bg-black ripple mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger ripple mr-1 mb-2'
                    >
                      خطر
                    </button>
                  </div>
                </div>
              </div>
              {/*=================== End Basic Buttons ===================*/}
            </Col>
            <Col xl={6}>
              {/*=================== Basic Buttons ===================*/}
              <div className='widget-header'>
                <h4 className='text-end'>ايكوند</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger ripple mr-1 mb-2'
                    >
                      خطر
                    </button>
                  </div>
                </div>
              </div>
              {/*=================== End Basic Buttons ===================*/}
            </Col>
            <Col xl={6}>
              {/*=================== Outline Buttons ===================*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار المخطط التفصيلي</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      زر الحظر
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      زر مضمن
                    </button>
                  </div>
                </div>
              </div>
              {/*=================== End Outline Buttons ===================*/}
            </Col>
            <Col xl={6}>
              {/*=================== Bankapp Buttons ===================*/}
              <div className='widget-header'>
                <h4 className='text-end'>أكثر</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c text-white bg-blue ripple mr-1 mb-2'
                    >
                      نموذج الحوار
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      حوار الصورة
                    </button>
                  </div>
                </div>
              </div>
              {/*=================== End Bankapp Buttons ===================*/}
            </Col>
          </Row>
          {/*=================== End Row ===================*/}
        </Container>
      </div>
      {/*=================== components buttons End ===================*/}
    </>
  );
};

export default Dialog;
