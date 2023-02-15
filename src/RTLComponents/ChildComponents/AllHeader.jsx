import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllHeader = () => {
  return (
    <>
      <div className='pd-top-110'>
        <div className='header-style '>
          <Container>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className=' text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className=' align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className='header-style mt-4'>
        <Container>
          <Row>
            <Col sm={4} xs={4}>
              <Link className='menu-back-page' to='/rtl-home-1'>
                <FaAngleLeft />
              </Link>
            </Col>
            <Col sm={4} xs={4} className='text-center'>
              <div className='page-name'>عنوان</div>
            </Col>
            <Col sm={4} xs={4} className='align-self-center text-end'>
              <ul className='header-right'>
                <li>
                  <Link className='notf' to='/rtl-notification'>
                    <FaBell className='animated infinite swing' />
                    <span className='badge'>8</span>
                  </Link>
                </li>
                <li>
                  <Link className='header-user' to='/rtl-user-setting.'>
                    <img src='/Assets/Images/user.png' alt='img' />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='header-style mt-4'>
        <Container>
          <div className='header-style-inner bg-white p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style mt-4'>
        <Container>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf-btn' to='/rtl-notification'>
                      يضيف
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style mt-4'>
        <Container>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>
                  <h4 className='mb-0'>Uikitpro</h4>
                </div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf-text' to='/rtl-notification'>
                      يضيف
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style mt-4'>
        <Container>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>
                  <h4 className='mb-0'>Uikitpro</h4>
                </div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='header-user' to='/rtl-user-setting'>
                      <img src='/Assets/Images/user.png' alt='img' />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-black p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-purple p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-base p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-pink p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-yellow-2 p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style style-white mt-4'>
        <Container>
          <div className='header-style-inner bg-blue p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className='header-style mt-4'>
        <Container>
          <div className='header-style-inner bg-white p-2 border-radius-4'>
            <Row>
              <Col sm={4} xs={4}>
                <Link className='menu-back-page' to='/rtl-home-1'>
                  <FaAngleLeft />
                </Link>
              </Col>
              <Col sm={4} xs={4} className='text-center'>
                <div className='page-name'>عنوان</div>
              </Col>
              <Col sm={4} xs={4} className='align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/rtl-notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AllHeader;
