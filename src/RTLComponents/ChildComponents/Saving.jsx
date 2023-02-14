import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
const Saving = () => {
  return (
    <>
      {/* goal area Start */}
      <div className='goal-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>إنقاذ الأهداف</h3>
            <a href='#' className='float-start'>
              Total-$ 129898
            </a>
          </div>
          <div className='single-goal single-goal-one'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details text-end'>
                  <h6>تمويل الأعمال</h6>
                  <p>اعمال</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-one'>
                  <h6 className='goal-amount'>$130</h6>
                  <div>
                    <CircularProgressbar
                      value={33}
                      text={"33%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#11A44C",
                        pathColor: "#11A44C",
                      })}
                    >
                      <span>33%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-two'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details text-end'>
                  <h6>متجر التطبيقات</h6>
                  <p>تكنولوجيا</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-two'>
                  <h6 className='goal-amount'>$165</h6>
                  <div>
                    <CircularProgressbar
                      value={45}
                      text={"45%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#fb025c",
                        pathColor: "#fb025c",
                      })}
                    >
                      <span>45%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-three'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details text-end'>
                  <h6>برامج الألعاب</h6>
                  <p>تطوير</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-three'>
                  <h6 className='goal-amount'>$580</h6>
                  <div>
                    <CircularProgressbar
                      value={85}
                      text={"85%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#02a1fb",
                        pathColor: "#02a1fb",
                      })}
                    >
                      <span>85%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-four'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details text-end'>
                  <h6>سيارة سباق</h6>
                  <p>تلعب</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-four'>
                  <h6 className='goal-amount'>$980</h6>
                  <div>
                    <CircularProgressbar
                      value={25}
                      text={"25%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#7e02fb",
                        pathColor: "#7e02fb",
                      })}
                    >
                      <span>25%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* goal area End */}
    </>
  );
};

export default Saving;
