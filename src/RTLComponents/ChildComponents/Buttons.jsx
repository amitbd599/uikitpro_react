import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaPencilAlt,
  FaRegCheckCircle,
  FaRegQuestionCircle,
  FaRocket,
} from "react-icons/fa";

const Buttons = () => {
  return (
    <>
      {/* =============== components buttons start ===============*/}
      <div className='container-inner pd-top-110 button-component'>
        <Container fluid>
          <Row className=' flex-row'>
            <Col xl={6}>
              {/*=============== Basic Buttons ===============*/}
              <div className='widget-header'>
                <h4>Basic Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-primary mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary mr-1 mb-2'
                    >
                      Secondary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button type='button' className='btn-c btn-info mr-1 mb-2'>
                      Info
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning mr-1 mb-2'
                    >
                      Warning
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger mr-1 mb-2'
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Basic Buttons =============== */}
            </Col>
            <Col xl={6}>
              {/*=============== Basic Buttons ===============*/}
              <div className='widget-header'>
                <h4>Ripple Effect</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-primary ripple mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary ripple mr-1 mb-2'
                    >
                      Secondary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-info ripple mr-1 mb-2'
                    >
                      Info
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning ripple mr-1 mb-2'
                    >
                      Warning
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
              {/*=============== End Basic Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Outline Buttons ===============*/}
              <div className='widget-header'>
                <h4>Outline Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-outline-primary mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-secondary mr-1 mb-2'
                    >
                      Secondary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-success mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-info mr-1 mb-2'
                    >
                      Info
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-warning mr-1 mb-2'
                    >
                      Warning
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-danger mr-1 mb-2'
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Outline Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Bankapp Buttons ===============*/}
              <div className='widget-header'>
                <h4>UikitPro Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-shadow mr-1 mb-2'
                    >
                      Shadow
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-01 mr-1 mb-2'
                    >
                      Gradient 01
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-02 mr-1 mb-2'
                    >
                      Gradient 02
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-03 mr-1 mb-2'
                    >
                      Gradient 03
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-04 mr-1 mb-2'
                    >
                      Gradient 04
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-05 mr-1 mb-2'
                    >
                      Gradient 05
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Bankapp Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Square Buttons ===============*/}
              <div className='widget-header'>
                <h4>Square Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-primary btn-square mr-1 mb-2'
                    >
                      Primary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary btn-square mr-1 mb-2'
                    >
                      Secondary
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success btn-square mr-1 mb-2'
                    >
                      Success
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-info btn-square mr-1 mb-2'
                    >
                      Info
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning btn-square mr-1 mb-2'
                    >
                      Warning
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger btn-square mr-1 mb-2'
                    >
                      Danger
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Square Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Buttons Group ===============*/}
              <div className='widget-header'>
                <h4>Group Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <div
                      className='btn-group'
                      role='group'
                      aria-label='Buttons Group'
                    >
                      <button type='button' className='btn-c btn-primary mb-2'>
                        Primary
                      </button>
                      <button
                        type='button'
                        className='btn-c btn-secondary mb-2'
                      >
                        Secondary
                      </button>
                      <button type='button' className='btn-c btn-success mb-2'>
                        Success
                      </button>
                      <button type='button' className='btn-c btn-info mb-2'>
                        Info
                      </button>
                      <button type='button' className='btn-c btn-warning mb-2'>
                        Warning
                      </button>
                      <button type='button' className='btn-c btn-danger mb-2'>
                        Danger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*=============== End Buttons Group ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Buttons With Icons ===============*/}
              <div className='widget-header'>
                <h4>With Icons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group'>
                    <button
                      type='button'
                      className='btn-c btn-primary mr-1 mb-2'
                    >
                      <FaPencilAlt className='me-2' />
                      <span>Primary</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary mr-1 mb-2'
                    >
                      <FaRocket className='me-2' />
                      <span>Secondary</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success mr-1 mb-2'
                    >
                      <FaRegCheckCircle className='me-2' />
                      <span>Success</span>
                    </button>
                    <button type='button' className='btn-c btn-info mr-1 mb-2'>
                      <FaRegQuestionCircle className='me-2' />
                      <span>Info</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning mr-1 mb-2'
                    >
                      <FaExclamationTriangle className='me-2' />
                      <span>Warning</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger mr-1 mb-2'
                    >
                      <FaExclamationCircle className='me-2' />
                      <span>Danger</span>
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Buttons With Icons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Buttons Sizes ===============*/}
              <div className='widget-header'>
                <h4>Size Buttons</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <button
                    type='button'
                    className='btn-c btn-primary btn-lg mr-1 mb-2'
                  >
                    Large Button
                  </button>
                  <button type='button' className='btn-c btn-success mr-1 mb-2'>
                    Medium Button
                  </button>
                  <button
                    type='button'
                    className='btn-c btn-warning btn-sm mr-1 mb-2'
                  >
                    Small Button
                  </button>
                </div>
              </div>
              {/*=============== End Buttons Sizes ===============*/}
            </Col>
          </Row>
          {/*=============== End Row ===============*/}
        </Container>
      </div>
      {/*=============== components buttons End ===============*/}
    </>
  );
};

export default Buttons;
