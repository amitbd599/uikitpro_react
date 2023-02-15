import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

const Action = () => {
  return (
    <div className='allpage-area pd-top-110 action-component'>
      <Container>
        <h5 className='text-end'>أساسي</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>تقصير</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>أقحم</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>مرمز</span>
              </a>
            </li>
          </ul>
        </div>
        <h5 className='text-end'>أكثر</h5>
        <div className='ba-all-page-inner mb-4'>
          <ul>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>مع النموذج</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>المحتوى</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>عملية</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>انذار</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>حدود التنبيه</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaAngleLeft /> <span>صورة التنبيه</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Action;
