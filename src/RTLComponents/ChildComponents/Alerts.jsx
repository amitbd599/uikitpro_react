import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Alerts = () => {
  return (
    <>
      {/* ==================== components alerts start ====================*/}
      <div className='container-inner pd-top-110 alert-component rtl'>
        <Container fluid>
          <Row className=' flex-row'>
            <Col xl={6}>
              {/*==================== Basic Alerts ====================*/}
              <div className='widget-header'>
                <h4 className='text-end'>تقصير</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary text-end' role='alert'>
                    تنبيه بسيط!
                  </div>
                  <div className='alert alert-secondary text-end' role='alert'>
                    تنبيه غير مقبول!
                  </div>
                  <div
                    className='alert rtlclose alert-outline-secondary alert-dismissible fade show text-end'
                    role='alert'
                  >
                    تنبيه تفصيلي!
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    />
                  </div>
                </div>
              </div>
              {/*==================== End Basic Alerts ====================*/}
            </Col>
            <Col xl={6}>
              {/*==================== Basic Alerts ====================*/}
              <div className='widget-header'>
                <h4 className='text-end'>صورة</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary text-end' role='alert'>
                    تنبيه بسيط!
                    <img
                      src='/Assets/Images/user.png'
                      alt='img'
                      className='ms-2'
                    />
                  </div>
                  <div className='alert alert-secondary text-end' role='alert'>
                    تنبيه غير مقبول!
                    <img
                      src='/Assets/Images/user.png'
                      alt='img'
                      className='ms-2'
                    />
                  </div>
                  <div
                    className='alert rtlclose alert-outline-secondary alert-dismissible fade show text-end'
                    role='alert'
                  >
                    تنبيه مخطط!
                    <img
                      src='/Assets/Images/user.png'
                      alt='img'
                      className='ms-2'
                    />
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    />
                  </div>
                </div>
              </div>
              {/*==================== End Basic Alerts ====================*/}
            </Col>
            <Col xl={6}>
              {/*==================== Basic Alerts ====================*/}
              <div className='widget-header'>
                <h4 className='text-end'>الألوان</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه أساسي
                  </div>
                  <div className='alert alert-secondary text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-success text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-info text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-warning text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-danger text-end' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                </div>
              </div>
              {/*==================== End Basic Alerts ====================*/}
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4 className='text-end'>حدود التنبيهات</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-outline-primary' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-outline-secondary' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div className='alert alert-outline-success' role='alert'>
                    <strong>مهلا!</strong> هذا تنبيه ثانوي
                  </div>
                  <div
                    className='alert alert-outline-secondary alert-dismissible fade show'
                    role='alert'
                  >
                    تنبيه تفصيلي!
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    />
                  </div>
                  <div
                    className='alert alert-outline-secondary alert-dismissible fade show'
                    role='alert'
                  >
                    <img src='assets/img/user.png' alt='img' /> تنبيه تفصيلي!
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    />
                  </div>
                  <div className='alert alert-outline-info dashed' role='alert'>
                    <strong>يا!</strong> هذا تنبيه معلومات بحدود متقطعة
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4 className='text-end'> نمط الحدود</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  {/*==================== Bordered Style ====================*/}
                  <div
                    className='alert alert-outline-info dashed text-end'
                    role='alert'
                  >
                    <strong>مهلا!</strong> هذا تنبيه معلومات بحدود متقطعة
                  </div>
                  <p className='text-end'>
                    يستخدم <code>متقطع</code> صف دراسي .
                  </p>
                  <div
                    className='alert alert-outline-danger dotted text-end'
                    role='alert'
                  >
                    <strong>مهلا!</strong> هذا تنبيه خطر بحدود منقطة
                  </div>
                  <p className='text-end'>
                    يستخدم <code>.منقط</code> صف دراسي .
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4 className='text-end'>نمط التدرج</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  {/*==================== Gradient Style ====================*/}
                  <div
                    className='alert bg-gradient-03 no-border text-end'
                    role='alert'
                  >
                    <strong>مهلا!</strong> هذا تنبيه بخلفية متدرجة
                  </div>
                  <div
                    className='alert alert-outline-secondary text-end'
                    role='alert'
                  >
                    <span className='text-gradient-03'>
                      <strong>مهلا!</strong> هذا تنبيه مع نص متدرج
                    </span>
                  </div>
                  <p className='text-end'>
                    يستخدم <code>.bg- الانحدار</code> و <code>.تدرج النص</code>{" "}
                    صف دراسي .
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {/*==================== End Row ====================*/}
        </Container>
      </div>
      {/*==================== components alerts End ====================*/}
    </>
  );
};

export default Alerts;
