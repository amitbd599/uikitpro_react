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
                <h4>Basic</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <Dropdown>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/*================= End Basic Buttons =================*/}
            </Col>
            <Col xl={6}>
              {/*================= Split button dropdowns =================*/}
              <div className='widget-header'>
                <h4>Split button dropdowns</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <Dropdown as={ButtonGroup}>
                    <Button variant='success'>Split Button</Button>

                    <Dropdown.Toggle
                      split
                      variant='success'
                      id='dropdown-split-basic'
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {/*================= End Split button dropdowns =================*/}
            </Col>
            <Col xl={6}>
              {/*================= Dark dropdowns =================*/}
              <div className='widget-header'>
                <h4>Dark dropdowns</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <Dropdown>
                    <Dropdown.Toggle
                      id='dropdown-button-dark-example1'
                      variant='secondary'
                    >
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant='dark'>
                      <Dropdown.Item href='#/action-1' active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-2'>
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href='#/action-4'>
                        Separated link
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
