import React from "react";
import { Container } from "react-bootstrap";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TransactionDetails = () => {
  return (
    <>
      {/* ============= balance start =============*/}
      <div className='balance-area pd-top-110'>
        <Container>
          <div className='section-title'>
            <a className='sub-delete float-start' href='#'>
              <FaTrashAlt />
            </a>
            <h3 className='title float-end'>المعاملات الأخيرة</h3>
          </div>
          <div className='ba-transaction-details text-center'>
            <h6>
              ها هي المعاملات الخاصة بك
              <br /> تفاصيل التاريخ
            </h6>
            <h4>
              ارسلت الدفعه
              <br />
              <span>$56.00</span>
            </h4>
          </div>
        </Container>
      </div>
      {/*============= balance End =============*/}
      {/*============= transaction start =============*/}
      <div className='transaction-details pd-top-36'>
        <Container>
          <ul className='transaction-details-inner'>
            <li className='transaction-details-title'>
              <span className='float-end pt-2'>حالة السداد</span>
              <span className='float-start'>
                <FaCheck />
              </span>
            </li>
            <li className='text-end'>
              <span class='float-start'>ل</span> :
              <span class='float-end'>راكيشوني روي</span>
            </li>
            <li className='text-end'>
              <span class='float-start'>اسم البنك</span> :
              <span class='float-end'>بايونير</span>
            </li>
            <li className='text-end'>
              <span class='float-start'>فئة</span> :
              <span class='float-end'>بصعوبة</span>
            </li>
            <li className='text-end'>
              <span class='float-start'>إيصال الشراء</span> :
              <span class='float-end'>نعم</span>
            </li>
            <li className='text-end'>
              <span class='float-start'>تاريخ الشراء</span> :
              <span class='float-end'>03/22/2020</span>
            </li>
            <li className='text-end'>
              <span class='float-start'>المبالغ الإجمالية</span> :
              <span class='float-end'>$757.00</span>
            </li>
          </ul>
        </Container>
      </div>
      {/*============= transaction End=============*/}
      <div className='btn-wrap pt-3 text-center'>
        <Container>
          <p className='btn-content-text'>
            إذا كان لديك أي مشكلة في المعاملات ، من فضلك
            <Link to='/rtl-contact'> اتصل بنا</Link>
          </p>
        </Container>
      </div>
    </>
  );
};

export default TransactionDetails;
