import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleRight, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllIntro = () => {
  const darkMode = (value) => {
    localStorage.setItem("color", value);
    window.location.reload();
    return false;
  };
  return (
    <>
      <Container className=' pd-top-110'>
        <div className='single-blog text-center'>
          <div className='details'>
            <h4>How to save your money in own business firm.</h4>
            <p>
              UikitPro umquam, eaque minus facilis ducimus odit totam vitae odio
              enim delectus est natus sunt nemo, iste ea.
            </p>
          </div>
        </div>
      </Container>
      {/* =============== dark area Start ===============*/}
      <Container>
        <div className='dark-area'>
          <div className='section-title mb-0'>
            <h3 className='title mb-0'>Dark Mode</h3>
            <div className='change-mode'>
              <div className='custom-control custom-switch custom-switch-icon custom-control-inline'>
                <div className='custom-switch-inner'>
                  <p className='mb-0'> </p>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='dark-mode'
                    data-active='true'
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='dark-mode'
                    data-mode='toggle'
                  >
                    <span
                      className='switch-icon-left'
                      onClick={() => darkMode("dark")}
                    >
                      <FaMoon />
                    </span>
                    <span
                      className='switch-icon-right'
                      onClick={() => darkMode("")}
                    >
                      <FaSun />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/*=============== dark area End ===============*/}
      {/*=============== Inner Action end ===============*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5>All Components</h5>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>A</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-action'>
                  Action
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-add-home'>
                  Add Home
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-payment-popup'>
                  Payment Popup
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-accordion'>
                  accordion
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-alerts'>
                  alerts
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>B</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-badge'>
                  Badge
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-buttons'>
                  Buttons
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>C</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-carousel'>
                  Carousel
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-checkbox'>
                  checkbox
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-content'>
                  content
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>D</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-deposit'>
                  deposit
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-dialog'>
                  dialog
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-dropdown'>
                  dropdown
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>E</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-error'>
                  error
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>F</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>G</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>H</h3>
            </div>
            <ul>
              <li>
                <Link to='/home-1'>
                  home
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-add-home'>
                  add-home
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-header'>
                  header
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>I</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-icond'>
                  icond
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-image'>
                  image
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-inset'>
                  inset
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>J</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>K</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>L</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-listview'>
                  listview
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>M</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-modal'>
                  modal
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>N</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-notifications'>
                  notification
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>O</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>P</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-progress'>
                  progress
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>Q</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>R</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-radio'>
                  radio
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>S</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-search'>
                  search
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-success'>
                  success
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>T</h3>
            </div>
            <ul>
              <li>
                <Link to='/components-tabs'>
                  tabs
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-table'>
                  table
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-title'>
                  title
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-toast'>
                  toast
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-toggle'>
                  toggle
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-tooltip'>
                  tooltip
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to='/components-typography'>
                  typography
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* ============= Inner Action end =============*/}
    </>
  );
};

export default AllIntro;
