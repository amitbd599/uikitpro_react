import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Alerts = () => {
  return (
    <>
      {/* ==================== components alerts start ====================*/}
      <div className='container-inner pd-top-110 alert-component'>
        <Container fluid>
          <Row className=' flex-row'>
            <Col xl={6}>
              {/*==================== Basic Alerts ====================*/}
              <div className='widget-header'>
                <h4>Default</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary' role='alert'>
                    A Simple alert !
                  </div>
                  <div className='alert alert-secondary' role='alert'>
                    Dismissible Alert !
                  </div>
                  <div
                    className='alert alert-outline-secondary alert-dismissible fade show'
                    role='alert'
                  >
                    Outline Alert !
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
                <h4>Image</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary' role='alert'>
                    <img src='/Assets/Images/user.png' alt='img' />A Simple
                    alert !
                  </div>
                  <div className='alert alert-secondary' role='alert'>
                    <img src='/Assets/Images/user.png' alt='img' /> Dismissible
                    Alert !
                  </div>
                  <div
                    className='alert alert-outline-secondary alert-dismissible fade show'
                    role='alert'
                  >
                    <img src='/Assets/Images/user.png' alt='img' /> Outline
                    Alert !
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
                <h4>Colors</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-primary' role='alert'>
                    <strong>Hey!</strong> This is a primary alert
                  </div>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Hey!</strong> This is a secondary alert
                  </div>
                  <div className='alert alert-success' role='alert'>
                    <strong>Hey!</strong> This is a success alert
                  </div>
                  <div className='alert alert-info' role='alert'>
                    <strong>Hey!</strong> This is a info alert
                  </div>
                  <div className='alert alert-warning' role='alert'>
                    <strong>Hey!</strong> This is a warning alert
                  </div>
                  <div className='alert alert-danger' role='alert'>
                    <strong>Hey!</strong> This is a danger alert
                  </div>
                </div>
              </div>
              {/*==================== End Basic Alerts ====================*/}
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4>Alerts Botder</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  <div className='alert alert-outline-primary' role='alert'>
                    <strong>Hey!</strong> This is a primary alert
                  </div>
                  <div className='alert alert-outline-secondary' role='alert'>
                    <strong>Hey!</strong> This is a secondary alert
                  </div>
                  <div className='alert alert-outline-success' role='alert'>
                    <strong>Hey!</strong> This is a success alert
                  </div>
                  <div
                    className='alert alert-outline-secondary alert-dismissible fade show'
                    role='alert'
                  >
                    Outline Alert !
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
                    <img src='assets/img/user.png' alt='img' /> Outline Alert !
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='alert'
                      aria-label='Close'
                    />
                  </div>
                  <div className='alert alert-outline-info dashed' role='alert'>
                    <strong>Hey!</strong> This is a info alert with dashed
                    border
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4>Border Style</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  {/*==================== Bordered Style ====================*/}
                  <div className='alert alert-outline-info dashed' role='alert'>
                    <strong>Hey!</strong> This is a info alert with dashed
                    border
                  </div>
                  <p>
                    Use <code>.dashed</code> class.
                  </p>
                  <div
                    className='alert alert-outline-danger dotted'
                    role='alert'
                  >
                    <strong>Hey!</strong> This is a danger alert with dotted
                    border
                  </div>
                  <p>
                    Use <code>.dotted</code> class.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className='widget-header'>
                <h4>Gradient Style</h4>
              </div>
              <div className='widget has-shadow border-radius-5'>
                <div className='widget-body'>
                  {/*==================== Gradient Style ====================*/}
                  <div className='alert bg-gradient-03 no-border' role='alert'>
                    <strong>Hey!</strong> This is an alert with gradient
                    background
                  </div>
                  <div className='alert alert-outline-secondary' role='alert'>
                    <span className='text-gradient-03'>
                      <strong>Hey!</strong> This is an alert with text gradient
                    </span>
                  </div>
                  <p>
                    Use <code>.bg-gradient</code> and{" "}
                    <code>.text-gradient</code> class.
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
