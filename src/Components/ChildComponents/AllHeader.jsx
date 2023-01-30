import React from "react";
import { FaAngleLeft, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllHeader = () => {
  return (
    <>
      <div className='header-style mg-top-110'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 col-4'>
              <Link className='menu-back-page' to='/home-1'>
                <FaAngleLeft />
              </Link>
            </div>
            <div className='col-sm-4 col-4 text-center'>
              <div className='page-name'>Title</div>
            </div>
            <div className='col-sm-4 col-4 align-self-center text-end'>
              <ul className='header-right'>
                <li>
                  <Link className='notf' to='/notification'>
                    <FaBell className='animated infinite swing' />
                    <span className='badge'>8</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4 col-4'>
              <Link className='menu-back-page' to='/home-1'>
                <FaAngleLeft />
              </Link>
            </div>
            <div className='col-sm-4 col-4 text-center'>
              <div className='page-name'>Title</div>
            </div>
            <div className='col-sm-4 col-4 align-self-center text-end'>
              <ul className='header-right'>
                <li>
                  <Link className='notf' to='/notification'>
                    <FaBell className='animated infinite swing' />
                    <span className='badge'>8</span>
                  </Link>
                </li>
                <li>
                  <Link className='header-user' to='/user-setting.'>
                    <img src='/Assets/Images/user.png' alt='img' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-white p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf-btn' to='/notification'>
                      Add
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>
                  <h4 className='mb-0'>Uikitpro</h4>
                </div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf-text' to='/notification'>
                      Add
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-white p-2 border-radius-4 border-gray'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>
                  <h4 className='mb-0'>Uikitpro</h4>
                </div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='header-user' to='/user-setting'>
                      <img src='/Assets/Images/user.png' alt='img' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-black p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-purple p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-base p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-pink p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-yellow-2 p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style style-white mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-blue p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-style mt-4'>
        <div className='container'>
          <div className='header-style-inner bg-white p-2 border-radius-4'>
            <div className='row'>
              <div className='col-sm-4 col-4'>
                <Link className='menu-back-page' to='/home-1'>
                  <FaAngleLeft />
                </Link>
              </div>
              <div className='col-sm-4 col-4 text-center'>
                <div className='page-name'>Title</div>
              </div>
              <div className='col-sm-4 col-4 align-self-center text-end'>
                <ul className='header-right'>
                  <li>
                    <Link className='notf' to='/notification'>
                      <FaBell className='animated infinite swing' />
                      <span className='badge'>8</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllHeader;
