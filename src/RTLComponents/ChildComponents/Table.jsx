import React from "react";
import { Container } from "react-bootstrap";

const Table = () => {
  return (
    <>
      {/* ============== table 1 start ==============*/}
      <div className='table 1-area pd-top-110'>
        <Container>
          <h5 className='text-end'>تقصير</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-1 text-end'>
                <thead>
                  <tr>
                    <th scope='col'>معرف المستخدم</th>
                    <th scope='col'>اسم</th>
                    <th scope='col'>عنوان</th>
                    <th scope='col'>الرصيد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>يوحنا</td>
                    <td>مدير</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>حداد</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>علامة</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/*============== table 1 end ==============*/}
      {/*============== table 2 start ==============*/}
      <div className='table-area mg-top-40'>
        <Container>
          <h5 className='text-end'>جدول الألوان</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-2 text-end'>
                <thead>
                  <tr>
                    <th scope='col'>معرف المستخدم</th>
                    <th scope='col'>اسم</th>
                    <th scope='col'>عنوان</th>
                    <th scope='col'>الرصيد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>يوحنا</td>
                    <td>مدير</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>حداد</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>علامة</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/*============== table 2 end ==============*/}
      {/*============== table 3 start ==============*/}
      <div className='table-area mg-top-40'>
        <Container>
          <h5 className='text-end'>جدول الخلفية</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-3 text-end'>
                <thead>
                  <tr>
                    <th scope='col'>معرف المستخدم</th>
                    <th scope='col'>اسم</th>
                    <th scope='col'>عنوان</th>
                    <th scope='col'>الرصيد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>15323</th>
                    <td>يوحنا</td>
                    <td>مدير</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15324</th>
                    <td>حداد</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                  <tr>
                    <th scope='row'>15325</th>
                    <td>علامة</td>
                    <td>مستخدم</td>
                    <td>$509.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/*============== table 3 end ==============*/}
    </>
  );
};

export default Table;
