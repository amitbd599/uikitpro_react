import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleRight, FaMoon, FaSun } from "react-icons/fa";

const AllIntro = () => {
  const darkMode = (value) => {
    localStorage.setItem("color", value);
    window.location.reload();
    return false;
  };
  return (
    <>
      <Container className=' mg-top-110'>
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
      {/* dark area Start */}
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
      {/* dark area End */}
      {/* navbar end */}
      <div className='allpage-area mt-4'>
        <Container>
          <h5>All Components</h5>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>A</h3>
            </div>
            <ul>
              <li>
                <a href='components-action.html'>
                  Action
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-add-home.html'>
                  Add Home
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-all-icon.html'>
                  All Icon
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-accordion.html'>
                  accordion
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-alerts.html'>
                  alerts
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>B</h3>
            </div>
            <ul>
              <li>
                <a href='components-badge.html'>
                  Badge
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-buttons.html'>
                  Buttons
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>C</h3>
            </div>
            <ul>
              <li>
                <a href='components-carousel.html'>
                  Carousel
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-checkbox.html'>
                  checkbox
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-content.html'>
                  content
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>D</h3>
            </div>
            <ul>
              <li>
                <a href='components-deposit.html'>
                  deposit
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-dialog.html'>
                  dialog
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-dropdown.html'>
                  dropdown
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>E</h3>
            </div>
            <ul>
              <li>
                <a href='components-error.html'>
                  error
                  <FaAngleRight />
                </a>
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
                <a href='components-home.html'>
                  home
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-add-home.html'>
                  add-home
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-header.html'>
                  header
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>I</h3>
            </div>
            <ul>
              <li>
                <a href='components-icond.html'>
                  icond
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-image.html'>
                  image
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-inset.html'>
                  inset
                  <FaAngleRight />
                </a>
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
                <a href='components-listview.html'>
                  listview
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>M</h3>
            </div>
            <ul>
              <li>
                <a href='components-modal.html'>
                  modal
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>N</h3>
            </div>
            <ul>
              <li>
                <a href='components-notifications.html'>
                  notification
                  <FaAngleRight />
                </a>
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
                <a href='components-progress.html'>
                  progress
                  <FaAngleRight />
                </a>
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
                <a href='components-radio.html'>
                  radio
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>S</h3>
            </div>
            <ul>
              <li>
                <a href='components-search.html'>
                  search
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-success.html'>
                  success
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>T</h3>
            </div>
            <ul>
              <li>
                <a href='components-tabs.html'>
                  tabs
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-table.html'>
                  table
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-title.html'>
                  title
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-toast.html'>
                  toast
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-toggle.html'>
                  toggle
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-tooltip.html'>
                  tooltip
                  <FaAngleRight />
                </a>
              </li>
              <li>
                <a href='components-typography.html'>
                  typography
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* navbar end */}
    </>
  );
};

export default AllIntro;
