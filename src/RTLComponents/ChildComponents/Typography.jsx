import React from "react";
import { Container } from "react-bootstrap";

const Typography = () => {
  return (
    <>
      {/* table 1 start */}
      <div className='table 1-area pd-top-110'>
        <Container>
          <h5 className='text-end'>تقصير</h5>
          <div className='ba-all-page-inner mb-4 p-0 border-radius-4'>
            <div className='table-responsive'>
              <table className='table uikit-table-1 text-end'>
                <thead>
                  <tr>
                    <th scope='col'>متغير ساس</th>
                    <th scope='col'>وصف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>var(--body-font)</td>
                    <td>خط النص الأساسي</td>
                  </tr>
                  <tr>
                    <td>var(--heading-font)</td>
                    <td>العنوان الخط</td>
                  </tr>
                  <tr>
                    <td>var(--main-color)</td>
                    <td>اللون الأساسي</td>
                  </tr>
                  <tr>
                    <td>var(--heading-color)</td>
                    <td>لون العنوان</td>
                  </tr>
                  <tr>
                    <td>var(--paragraph-color)</td>
                    <td>لون الفقرة</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
      {/* table 1 end */}
      {/* typography start */}
      <div className='allpage-area mg-top-40'>
        <Container>
          <h5 className='text-end'>قمة</h5>
          <div className='uikit-badge-inner bg-white mb-4 text-end'>
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>
          </div>
        </Container>
      </div>
      {/* typography end */}
      {/* typography start */}
      <div className='allpage-area mg-top-40'>
        <Container>
          <h5 className='text-end'>قمة</h5>
          <div className='uikit-badge-inner bg-white mb-4 text-end'>
            <p>
              يمكنك استخدام علامة العلامة ل<mark>تسليط الضوء</mark> نص.
            </p>
            <p>
              <del>من المفترض أن يتم التعامل مع هذا السطر كنص محذوف .</del>
            </p>
            <p>
              <s>
                من المفترض أن يتم التعامل مع هذا السطر على أنه لم يعد دقيقًا .
              </s>
            </p>
            <p>
              <ins>
                من المفترض أن يتم التعامل مع هذا السطر على أنه لم يعد دقيقًا .
              </ins>
            </p>
            <p>
              <u>سيتم عرض هذا السطر كما هو مسطر .</u>
            </p>
            <p>
              <small>
                من المفترض أن يتم التعامل مع هذا السطر على أنه طباعة جيدة .
              </small>
            </p>
            <p>
              <strong>تم تقديم هذا السطر كنص عريض .</strong>
            </p>
            <p>
              <em>تم تقديم هذا السطر كنص مائل.</em>
            </p>
          </div>
        </Container>
      </div>
      {/* typography end */}
    </>
  );
};

export default Typography;
