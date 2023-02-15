import React from "react";

const Notifications = () => {
  return (
    <>
      {/* ============= components notification start =============*/}
      <div className='container-inner pd-top-110'>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className='col-xl-6'>
              {/*============= Basic Example =============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='section-title mt-3 mb-3'>
                    <h4 className='text-end'>التخطيطت</h4>
                  </div>
                  <p className='text-end'>
                    <code>تنبيه</code> , <code>إنذار</code> , <code>نجاح</code>{" "}
                    , <code>تحذير</code> , <code>خطأ</code> ,{" "}
                    <code>معلومات / معلومات</code>
                  </p>
                  <div className='section-title mt-4 mb-3'>
                    <h4 className='text-end'>أنواع</h4>
                  </div>
                  <p className='text-end'>
                    <code>أعلى</code> , <code>أعلى اليسار</code> ,{" "}
                    <code>مركز أعلى</code> , <code>اعلى اليمين</code> ,{" "}
                    <code>المركز</code> , <code>يسار الوسط</code> ,{" "}
                    <code>المنتصف</code> , <br />
                    <code>الأسفل</code> , <code>أسفل اليسار</code> ,{" "}
                    <code>مركز القاع</code> , <code>أسفل اليمين</code>
                  </p>
                  <div className='section-title mt-5 mb-3'>
                    <h4 className='text-end'>الاتجاهات (قمة)</h4>
                  </div>
                  <div className='text-end'>
                    <button
                      id='example-top'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      قمة
                    </button>
                    <button
                      id='example-top-left'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      قمة اليسار
                    </button>
                    <button
                      id='example-top-center'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      قمة مركز
                    </button>
                    <button
                      id='example-top-right'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      قمة حق
                    </button>
                  </div>
                  <div className='section-title mt-3 mb-3'>
                    <h4 className='text-end'>الاتجاهات (Center)</h4>
                  </div>
                  <div className='text-end'>
                    <button
                      id='example-center'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      مركز اليسار
                    </button>
                    <button
                      id='example-center-left'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      مركز حق
                    </button>
                    <button
                      id='example-center-right'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      الأسفل
                    </button>
                  </div>
                  <div className='section-title mt-3 mb-3'>
                    <h4 className='text-end'>الأسفل اليسار</h4>
                  </div>
                  <div className='text-end'>
                    <button
                      id='example-bottom'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      الأسفل مركز
                    </button>
                    <button
                      id='example-bottom-left'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      الأسفل حق
                    </button>
                    <button
                      id='example-bottom-center'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      اليسار
                    </button>
                    <button
                      id='example-bottom-right'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      اليسار
                    </button>
                  </div>
                </div>
              </div>
              {/*============= End Basic Example =============*/}
            </div>
            <div className='col-xl-6'>
              {/*============= Advanced Example =============*/}
              <div className='widget has-shadow'>
                <div className='widget-body'>
                  <div className='section-title mt-3 mb-3'>
                    <h4 className='text-end'>مع تأخير</h4>
                  </div>
                  <div className='text-end'>
                    <button
                      id='example-top-left-delay'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      أعلى اليسار
                    </button>
                    <button
                      id='example-center-delay'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      مركز
                    </button>
                    <button
                      id='example-bottom-right-delay'
                      type='button'
                      className='btn-c btn-shadow mr-2 mb-3'
                    >
                      أسفل اليمين
                    </button>
                  </div>
                  <div className='section-title mt-5 mb-3'>
                    <h4 className='text-end'>التخطيطات</h4>
                  </div>
                  <button
                    id='example-default'
                    type='button'
                    className='d-block btn-c btn-primary mr-2 mb-3'
                  >
                    تقصير
                  </button>
                  <button
                    id='example-success'
                    type='button'
                    className='d-block btn-c btn-success mr-2 mb-3'
                  >
                    نجاح
                  </button>
                  <button
                    id='example-warning'
                    type='button'
                    className='d-block btn-c btn-warning mr-2 mb-3'
                  >
                    تحذير
                  </button>
                  <button
                    id='example-error'
                    type='button'
                    className='d-block btn-c btn-danger mr-2 mb-3'
                  >
                    خطأ
                  </button>
                  <button
                    id='example-info'
                    type='button'
                    className='d-block btn-c btn-info mr-2 mb-3'
                  >
                    معلومات
                  </button>
                </div>
              </div>
              {/*============= End Advanced Example =============*/}
            </div>
          </div>
          {/*============= End Row =============*/}
        </div>
      </div>
      {/*============= components notification End =============*/}
    </>
  );
};

export default Notifications;
