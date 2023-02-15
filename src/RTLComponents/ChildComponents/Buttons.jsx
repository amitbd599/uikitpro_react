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
              {/*=============== الأزرار الأساسية ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>الأزرار الأساسية</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-primary mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary mr-1 mb-2'
                    >
                      ثانوي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button type='button' className='btn-c btn-info mr-1 mb-2'>
                      معلومات
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning mr-1 mb-2'
                    >
                      تحذير
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger mr-1 mb-2'
                    >
                      خطر
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End الأزرار الأساسية =============== */}
            </Col>
            <Col xl={6}>
              {/*=============== الأزرار الأساسية ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أثرمضاعف</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-primary ripple mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary ripple mr-1 mb-2'
                    >
                      ثانوي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success ripple mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-info ripple mr-1 mb-2'
                    >
                      معلومات
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning ripple mr-1 mb-2'
                    >
                      تحذير
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
              {/*=============== End الأزرار الأساسية ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Outline Buttons ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار المخطط التفصيلي</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-outline-primary mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-secondary mr-1 mb-2'
                    >
                      ثانوي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-success mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-info mr-1 mb-2'
                    >
                      معلومات
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-warning mr-1 mb-2'
                    >
                      تحذير
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-outline-danger mr-1 mb-2'
                    >
                      خطر
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Outline Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Bankapp Buttons ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار UikitPro</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-shadow mr-1 mb-2'
                    >
                      ظل
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-01 mr-1 mb-2'
                    >
                      التدرج 01
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-02 mr-1 mb-2'
                    >
                      التدرج 02
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-03 mr-1 mb-2'
                    >
                      التدرج 03
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-04 mr-1 mb-2'
                    >
                      التدرج 04
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-gradient-05 mr-1 mb-2'
                    >
                      التدرج 5
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Bankapp Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Square Buttons ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار مربعة</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-primary btn-square mr-1 mb-2'
                    >
                      أساسي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary btn-square mr-1 mb-2'
                    >
                      ثانوي
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success btn-square mr-1 mb-2'
                    >
                      نجاح
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-info btn-square mr-1 mb-2'
                    >
                      معلومات
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning btn-square mr-1 mb-2'
                    >
                      تحذير
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger btn-square mr-1 mb-2'
                    >
                      خطر
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Square Buttons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Buttons Group ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار المجموعة</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <div
                      className='btn-group'
                      role='group'
                      aria-label='Buttons Group'
                    >
                      <button type='button' className='btn-c btn-primary mb-2'>
                        أساسي
                      </button>
                      <button
                        type='button'
                        className='btn-c btn-secondary mb-2'
                      >
                        ثانوي
                      </button>
                      <button type='button' className='btn-c btn-success mb-2'>
                        نجاح
                      </button>
                      <button type='button' className='btn-c btn-info mb-2'>
                        معلومات
                      </button>
                      <button type='button' className='btn-c btn-warning mb-2'>
                        تحذير
                      </button>
                      <button type='button' className='btn-c btn-danger mb-2'>
                        خطر
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
                <h4 className='text-end'>مع الأيقونات</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1'>
                  <div className='form-group text-end'>
                    <button
                      type='button'
                      className='btn-c btn-primary mr-1 mb-2'
                    >
                      <FaPencilAlt className='me-2' />
                      <span>أساسي</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-secondary mr-1 mb-2'
                    >
                      <FaRocket className='me-2' />
                      <span>ثانوي</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-success mr-1 mb-2'
                    >
                      <FaRegCheckCircle className='me-2' />
                      <span>نجاح</span>
                    </button>
                    <button type='button' className='btn-c btn-info mr-1 mb-2'>
                      <FaRegQuestionCircle className='me-2' />
                      <span>معلومات</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-warning mr-1 mb-2'
                    >
                      <FaExclamationTriangle className='me-2' />
                      <span>تحذير</span>
                    </button>
                    <button
                      type='button'
                      className='btn-c btn-danger mr-1 mb-2'
                    >
                      <FaExclamationCircle className='me-2' />
                      <span>خطر</span>
                    </button>
                  </div>
                </div>
              </div>
              {/*=============== End Buttons With Icons ===============*/}
            </Col>
            <Col xl={6}>
              {/*=============== Buttons Sizes ===============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أزرار الحجم</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body pb-1 text-end'>
                  <button
                    type='button'
                    className='btn-c btn-primary btn-lg mr-1 mb-2'
                  >
                    زر كبير
                  </button>
                  <button type='button' className='btn-c btn-success mr-1 mb-2'>
                    زر متوسط
                  </button>
                  <button
                    type='button'
                    className='btn-c btn-warning btn-sm mr-1 mb-2'
                  >
                    زر صغير
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
