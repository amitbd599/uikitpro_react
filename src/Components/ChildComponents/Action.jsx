import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";

const Action = () => {
  return (
    <div className='allpage-area mg-top-110'>
      <Container>
        <h5>Basic</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                <span>Default</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Inset</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Iconed</span> <FaAngleRight />
              </a>
            </li>
          </ul>
        </div>
        <h5>More</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                <span>With Form</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Content</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Transaction</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Alert</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Alert Border</span> <FaAngleRight />
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Alert Image</span> <FaAngleRight />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Action;
