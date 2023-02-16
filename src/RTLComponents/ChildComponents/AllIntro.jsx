import React from "react";
import { Container } from "react-bootstrap";
import { FaAngleLeft, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllIntro = () => {
  const darkMode = (value) => {
    localStorage.setItem("color", value);
    window.location.reload();
    return false;
  };
  return (
    <>
      <Container className=' pd-top-110'>
        <div className='single-blog text-center'>
          <div className='details'>
            <h4>كيف تحفظ أموالك في شركة تجارية خاصة.</h4>
            <p>
              عندما يريد العالم بمدينة مَايِنْتْس، ألمانيا. و سيجمع المؤتمر بين
              خبراء من كافة قطاعات الصناعة على الشبكة العالمية انترنيت ويونيكود
              ونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية، الخطوط،
              تصميم النصوص والحوسبة متعددة اللغات.
            </p>
          </div>
        </div>
      </Container>
      {/* =============== dark area Start ===============*/}
      <Container>
        <div className='dark-area'>
          <div className='section-title mb-0'>
            <h3 className='title mb-0'>الوضع الداكن</h3>
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
      {/*=============== dark area End ===============*/}
      {/*=============== Inner Action end ===============*/}
      <div className='allpage-area mt-4'>
        <Container>
          <h5 className='text-end'>جميع المكونات</h5>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>أ</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-action'>
                  <FaAngleLeft />
                  فعل
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-add-home'>
                  <FaAngleLeft />
                  أضف الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-payment-popup'>
                  <FaAngleLeft />
                  نافذة الدفع المنبثقة
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-accordion'>
                  <FaAngleLeft />
                  الأكورديون
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-alerts'>
                  <FaAngleLeft />
                  تنبيهات
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ب</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-badge'>
                  <FaAngleLeft />
                  شارة
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-buttons'>
                  <FaAngleLeft />
                  أزرار
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ج</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-carousel'>
                  <FaAngleLeft />
                  دائري
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-checkbox'>
                  <FaAngleLeft />
                  خانة الاختيار
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-content'>
                  <FaAngleLeft />
                  محتوى
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>د</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-deposit'>
                  <FaAngleLeft />
                  إيداع
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-dialog'>
                  <FaAngleLeft /> الحوار
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-dropdown'>
                  <FaAngleLeft /> اسقاط
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ه</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-error'>
                  <FaAngleLeft />
                  خطأ
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>ل</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>جي</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ح</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-home-1'>
                  <FaAngleLeft />
                  بيت
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-add-home'>
                  <FaAngleLeft />
                  الوظيفة الإضافية
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-header'>
                  <FaAngleLeft />
                  رأس
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>أنا</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-icond'>
                  <FaAngleLeft />
                  رمز
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-image'>
                  <FaAngleLeft />
                  صورة
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-inset'>
                  <FaAngleLeft />
                  أقحم
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>ي</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>ك</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>إل</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-listview'>
                  <FaAngleLeft />
                  عرض القائمة
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>م</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-modal'>
                  <FaAngleLeft />
                  مشروط
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ن</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-notifications'>
                  <FaAngleLeft />
                  إشعار
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>ا</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ص</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-progress'>
                  <FaAngleLeft /> تقدم
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 mb-0'>
              <h3 className='title-badge mb-0'>س</h3>
            </div>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ر</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-radio'>
                  <FaAngleLeft /> مذياع
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>س</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-search'>
                  <FaAngleLeft /> يبحث
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-success'>
                  <FaAngleLeft /> نجاح
                </Link>
              </li>
            </ul>
          </div>
          <div className='ba-all-page-inner border-radius-4'>
            <div className='section-title p-3 pb-0 mb-0'>
              <h3 className='title-badge mb-0'>ر</h3>
            </div>
            <ul>
              <li>
                <Link to='/rtl-components-tabs'>
                  <FaAngleLeft /> نوافذ التبويب
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-table'>
                  <FaAngleLeft /> طاولة
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-title'>
                  <FaAngleLeft /> عنوان
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-toast'>
                  <FaAngleLeft /> خبز محمص
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-toggle'>
                  <FaAngleLeft /> تبديل
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-tooltip'>
                  <FaAngleLeft /> تبديل تلميح الأدوات
                </Link>
              </li>
              <li>
                <Link to='/rtl-components-typography'>
                  <FaAngleLeft /> الطباعة
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      {/* ============= Inner Action end =============*/}
    </>
  );
};

export default AllIntro;
