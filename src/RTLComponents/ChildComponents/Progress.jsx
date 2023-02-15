import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Progress = () => {
  return (
    <>
      {/* ============== components progress start ==============*/}
      <div className='container-inner pd-top-110'>
        <Container fluid>
          <Row>
            <Col xl={6}>
              {/*============== Basic ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أشرطة التقدم الأساسية</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/*============== End Basic ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>مع تسميات</h4>
              </div>
              {/*============== Labels ==============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      25%
                    </div>
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      50%
                    </div>
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
              {/*============== End Labels ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>مع التدرج</h4>
              </div>
              {/*============== Gradient ==============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-gradient-01'
                      role='progressbar'
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-gradient-05'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-gradient-03'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-gradient-04'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/*============== End Gradient ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>قضبان متعددة</h4>
              </div>
              {/*============== Multiple ==============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-success'
                      role='progressbar'
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: "20%" }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar bg-gradient-01'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-gradient-02'
                      role='progressbar'
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                    <div
                      className='progress-bar bg-gradient-04'
                      role='progressbar'
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/*============== End Multiple ==============*/}
            </Col>
            <Col xl={6}>
              {/*============== Sizing ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>تحجيم</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-sm mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/*============== End Sizing ==============*/}
              <div className='section-title mt-5'>
                <h4 className='text-end'>كبير</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-primary'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-info'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar bg-danger'
                      role='progressbar'
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              {/*============== End Sizing ==============*/}
              <div className='widget-header'>
                <h4 className='text-end'>أشرطة التقدم المحجوزة</h4>
              </div>
              {/*============== Stripped ==============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar progress-bar-striped bg-primary'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar progress-bar-striped bg-info'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar progress-bar-striped bg-warning'
                      role='progressbar'
                      style={{ width: "75%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress mb-3'>
                    <div
                      className='progress-bar progress-bar-striped bg-danger'
                      role='progressbar'
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className='section-title mt-5'>
                <h4 className='text-end'>مفعم بالحيوية</h4>
              </div>
              {/*============== Stripped ==============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar progress-bar-striped progress-bar-animated bg-primary'
                      role='progressbar'
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <div className='progress progress-lg mb-3'>
                    <div
                      className='progress-bar progress-bar-striped progress-bar-animated bg-info'
                      role='progressbar'
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <p>
                    يستخدم <code>.التقدم-شريط المتحركة</code> صف دراسي .
                  </p>
                </div>
              </div>
              {/*============== End Stripped ==============*/}
            </Col>
          </Row>
          {/*============== End Row ==============*/}
        </Container>
      </div>
      {/*============== components progress End ==============*/}
    </>
  );
};

export default Progress;
