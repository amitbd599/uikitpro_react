import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
const DropdownIntro = () => {
  return (
    <>
      {/* ================= components buttons start =================*/}
      <div className='container-inner pd-top-110'>
        <Container fluid>
          <Row className=' flex-row'>
            <Col xl={6}>
              {/*================= Basic Buttons =================*/}
              <div className='widget-header'>
                <h4 className='text-end'>أساسي</h4>
              </div>
              <div className='widget has-shadow d-flex justify-content-end'>
                <div className='widget-body'>
                  <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                      زر القائمة المنسدلة
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>فعل</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>عمل آخر</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>شيء آخر</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/*================= End Basic Buttons =================*/}
            </Col>
            <Col xl={6}>
              {/*================= Split button dropdowns =================*/}
              <div className='widget-header'>
                <h4 className='text-end'>القوائم المنسدلة لزر الانقسام</h4>
              </div>
              <div className='widget has-shadow d-flex justify-content-end'>
                <div className='widget-body'>
                  <Dropdown as={ButtonGroup}>
                    <Button variant='success'>زر الانقسام</Button>

                    <Dropdown.Toggle
                      split
                      variant='success'
                      id='dropdown-split-basic'
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>فعل</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>عمل آخر</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>شيء آخر</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/*================= End Split button dropdowns =================*/}
            </Col>
            <Col xl={6}>
              {/*================= Dark dropdowns =================*/}
              <div className='widget-header'>
                <h4 className='text-end'>القوائم المنسدلة المظلمة</h4>
              </div>
              <div className='widget has-shadow d-flex justify-content-end'>
                <div className='widget-body'>
                  <Dropdown>
                    <Dropdown.Toggle
                      id='dropdown-button-dark-example1'
                      variant='secondary'
                    >
                      زر القائمة المنسدلة
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant='dark'>
                      <Dropdown.Item href='#/action-1' active>
                        فعل
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>عمل آخر</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>شيء آخر</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href='#/action-4'>
                        رابط منفصل
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/*================= End Outline Buttons =================*/}
            </Col>
          </Row>
          {/*================= End Row =================*/}
        </Container>
      </div>
      {/*================= components buttons End =================*/}
    </>
  );
};

export default DropdownIntro;
