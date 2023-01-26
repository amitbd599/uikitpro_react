import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ComponentsToast = () => {
  return (
    <div className='allpage-area mg-top-90'>
      <div className='container'>
        <h5>Usage</h5>
        <div className='ba-all-page-inner mb-4 d-flex justify-content-between'>
          <ul>
            <li>
              <a className='d-block'>
                <span className='color-text'>Toastbox('tasteID')</span> <br />
                Auto Close <br /> Example : auto close in 3 second <br />
                <span className='color-text'>Toastbox('tasteID 3000')</span>
              </a>
            </li>
          </ul>
          <div className='arrow-icon'>
            <span>
              <FaAngleRight />
            </span>
          </div>
        </div>
        <h5>Top</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                Default{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Inset{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Iconed{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <h5>Bottom</h5>
        <div className='ba-all-page-inner'>
          <ul>
            <li className='d-block'>
              <a href='#'>
                With Form
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Content{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Transaction{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert Border{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert Image{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <h5>Center</h5>
        <div className='ba-all-page-inner'>
          <ul>
            <li>
              <a href='#'>
                With Form{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Content{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Transaction{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert Border{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                Alert Image{" "}
                <span>
                  <FaAngleRight />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComponentsToast;
