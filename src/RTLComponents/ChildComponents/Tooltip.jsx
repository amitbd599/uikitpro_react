import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Tooltip = () => {
  return (
    <>
      {/* components tooltip start */}
      <div className='container-inner pd-top-110'>
        <Container fluid>
          <Row className='flex-row'>
            <Col xl={6}>
              {/* Basic Example */}
              <div className='widget-header text-end'>
                <h4>مثال أساسي</h4>
              </div>
              <div className='widget has-shadow text-end'>
                <div className='widget-body'>
                  <button
                    type='button'
                    className='btn btn-secondary mb-2 me-2'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Tooltip on top'
                  >
                    تلميح تشغيل أعلى
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-toggle='tooltip'
                    data-bs-placement='right'
                    title='Tooltip on right'
                  >
                    تلميح تشغيل أعلى
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary mb-2 me-2'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title='Tooltip on bottom'
                  >
                    تلميح تشغيل أعلى
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-toggle='tooltip'
                    data-bs-placement='left'
                    title='Tooltip on left'
                  >
                    تلميح تشغيل أعلى
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </Col>
            <Col xl={6}>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4 className='text-end'>اليسار مثال</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body text-end'>
                  <button
                    type='button'
                    className='btn btn-success text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='left'
                    title='Tooltip on left'
                  >
                    تلميح على اليسار
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </Col>
            <Col xl={6}>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4 className='text-end'>المثال الصحيح</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body text-end'>
                  <button
                    type='button'
                    className='btn btn-success text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='right'
                    title='Tooltip on left'
                  >
                    تلميح على اليسار
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </Col>
            <Col xl={6}>
              {/* Basic Example */}
              <div className='widget-header'>
                <h4 className='text-end'>المثال السفلي</h4>
              </div>
              <div className='widget has-shadow'>
                <div className='widget-body text-end'>
                  <button
                    type='button'
                    className='btn btn-success text-white'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title='Tooltip on left'
                  >
                    تلميح على اليسار
                  </button>
                </div>
              </div>
              {/* End Basic Example */}
            </Col>
          </Row>
          {/* End Row */}
          <Col xs={12}>
            {/* Basic Example */}
            <div className='widget-header'>
              <h4 className='text-end'>نص</h4>
            </div>
            <div className='widget has-shadow'>
              <div className='widget-body text-end'>
                ؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة العالمية
                انترنيت ويونيكود، حيث ستتم، على الصعيدين الدولي والمحلي على حد
                سواء مناقشة سبل
              </div>
            </div>
            {/* End Basic Example */}
          </Col>
        </Container>
      </div>
      {/* components tooltip End */}
    </>
  );
};

export default Tooltip;
