import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Home_1 = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "10px",
  };
  return (
    <>
      {/* ========== Balance start ========== */}
      <div className='balance-area pd-top-110'>
        <Container>
          <div className='balance-area-bg balance-area-bg-home'>
            <div className='balance-title text-center'>
              <h6>
                مرحبا!
                <br /> عزيزي MR Sen - محفظة Uikitpro
              </h6>
            </div>
            <div className='ba-balance-inner text-end align-self-center'>
              <div className='icon'>
                <img src='/Assets/Images/icon/1.png' alt='img' />
              </div>
              <h5 className='title'>الرصيد المتوفر</h5>
              <h5 className='amount'>$56,985.00</h5>
            </div>
          </div>
        </Container>
      </div>
      {/* ========== Balance End ========== */}
      {/* ========== Add Balance start ========== */}
      <div className='add-balance-area pt-4'>
        <Container>
          <div className='ba-add-balance-title ba-add-balance-btn'>
            <h5>إضافة رصيد</h5>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className='ba-add-balance-inner'>
            <Row className='custom-gutters-20'>
              <Col xs={6} className='text-center'>
                <a className='ba-add-balance-btn' href='#'>
                  <img src='/Assets/Images/icon/8.png' alt='img' />
                  <h6>انسحب</h6>
                </a>
              </Col>
              <Col xs={6} className='text-center'>
                <a className='ba-add-balance-btn' href='#'>
                  <img src='/Assets/Images/icon/9.png' alt='img' />
                  <h6>إرسال</h6>
                </a>
              </Col>
              <Col xs={6} className='text-center'>
                <a className='ba-add-balance-btn' href='#'>
                  <img src='/Assets/Images/icon/10.png' alt='img' />
                  <h6>البطاقات</h6>
                </a>
              </Col>
              <Col xs={6} className='text-center'>
                <a className='ba-add-balance-btn' href='#'>
                  <img src='/Assets/Images/icon/11.png' alt='img' />
                  <h6>تبادل</h6>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* ========== Add Balance End  ==========*/}
      {/* ========== Goal area Start ========== */}
      {/* goal area Start */}
      <div className='goal-area pt-4'>
        <Container>
          <div className='section-title'>
            <a href='#' className='float-start'>
              مشاهدة الكل
            </a>
            <h3 className='title float-end'>أهداف الادخار</h3>
          </div>
          <div className='single-goal single-goal-one'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details'>
                  <h6>تمويل الأعمال</h6>
                  <p>اعمال</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-one'>
                  <h6 className='goal-amount'>$130</h6>
                  <div>
                    <CircularProgressbar
                      value={33}
                      text={"33%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#11A44C",
                        pathColor: "#11A44C",
                      })}
                    >
                      <span>33%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-two'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details'>
                  <h6>متجر التطبيقات</h6>
                  <p>تكنولوجيا</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-two'>
                  <h6 className='goal-amount'>$165</h6>
                  <div>
                    <CircularProgressbar
                      value={45}
                      text={"45%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#fb025c",
                        pathColor: "#fb025c",
                      })}
                    >
                      <span>45%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-three'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details'>
                  <h6>برامج الألعاب</h6>
                  <p>تطوير</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-three'>
                  <h6 className='goal-amount'>$580</h6>
                  <div>
                    <CircularProgressbar
                      value={85}
                      text={"85%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#02a1fb",
                        pathColor: "#02a1fb",
                      })}
                    >
                      <span>85%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='single-goal single-goal-four'>
            <Row>
              <Col xs={7} className='pe-0'>
                <div className='details'>
                  <h6>سيارة سباق</h6>
                  <p>تلعب</p>
                </div>
              </Col>
              <Col xs={5} className='ps-0'>
                <div className='circle-inner circle-inner-four'>
                  <h6 className='goal-amount'>$980</h6>
                  <div>
                    <CircularProgressbar
                      value={25}
                      text={"25%"}
                      styles={buildStyles({
                        textSize: "26px",
                        textColor: "#7e02fb",
                        pathColor: "#7e02fb",
                      })}
                    >
                      <span>25%</span>
                    </CircularProgressbar>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* goal area End */}
      {/* ========== Goal area End ========== */}
      {/* ========== History start ========== */}
      <div className='history-area pt-4'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>تاريخ</h3>
            <Link to='/rtl-transaction' className='float-start'>
              مشاهدة الكل
            </Link>
          </div>
          <div className='ba-history-inner'>
            <Row className=' custom-gutters-20'>
              <Col xs={6}>
                <div className='ba-single-history ba-single-history-one text-end'>
                  <h6>دخل</h6>
                  <h5>$58,968.00</h5>
                </div>
              </Col>
              <Col xs={6}>
                <div className='ba-single-history ba-single-history-two text-end'>
                  <h6>نفقات</h6>
                  <h5>$50,968.00</h5>
                </div>
              </Col>
              <Col xs={6}>
                <div className='ba-single-history ba-single-history-three text-end'>
                  <h6>مجموع الفواتير</h6>
                  <h5>$50,968.00</h5>
                </div>
              </Col>
              <Col xs={6}>
                <div className='ba-single-history ba-single-history-four text-end'>
                  <h6>مدخرات</h6>
                  <h5>$58.00</h5>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* ========== History End ========== */}
      {/* ========== Cart start ========== */}
      <div className='cart-area pt-3'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>عربة التسوق الخاصة بي</h3>
            <Link to='/rtl-carts' className='float-start'>
              مشاهدة الكل
            </Link>
          </div>
          <img src='/Assets/Images/cart/1.png' alt='img' />
        </Container>
      </div>
      {/*========== Cart End ========== */}
      {/*========== Transaction start========== */}

      <div className='transaction-area pd-top-40'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>المعاملات</h3>
          </div>
          <ul className='transaction-inner'>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/12.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة .</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/13.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$250 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/14.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/29.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$100 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/15.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
            <li className='ba-single-transaction'>
              <div className='thumb'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
              </div>
              <div className='details'>
                <h5>اسم شركة رخيصة</h5>
                <p>شراء المجال</p>
                <h5 className='amount text-end'>
                  -$130 <br />
                  <FaAngleRight />
                </h5>
              </div>
            </li>
          </ul>
        </Container>
      </div>

      {/* ========== Transaction End ==========*/}
      {/*========== Send-money start ==========*/}
      <div className='send-money-area pd-top-36'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>إرسال الأموال</h3>
            <Link to='/rtl-bill-pay' className='float-start'>
              مشاهدة الكل
            </Link>
          </div>
          <Row>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/1.png' alt='img' />
                <p>أليكس سميث</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/2.png' alt='img' />
                <p>ماريانو </p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/3.png' alt='img' />
                <p>كاريتيكا</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/4.png' alt='img' />
                <p>جون</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/5.png' alt='img' />
                <p>ماريانو </p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/send-money/6.png' alt='img' />
                <p>كاريتيكا</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ==========Send-money End ==========*/}
      {/*========== Bill pay start ==========*/}
      <div className='bill-pay-area pt-4'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>دفع الفاتورة</h3>
            <Link to='/rtl-bill-pay' className='float-start'>
              مشاهدة الكل
            </Link>
          </div>
          <Row>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/17.png' alt='img' />
                <p>كهرباء</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/18.png' alt='img' />
                <p>فاتورة الماء</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/19.png' alt='img' />
                <p>فاتورة الغاز</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/20.png' alt='img' />
                <p>فاتورة الإنترنت</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/21.png' alt='img' />
                <p>كابل </p>
              </div>
            </Col>
            <Col xs={4}>
              <div className='single-send-money'>
                <img src='/Assets/Images/icon/22.png' alt='img' />
                <p>تذكرة الباص</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*========== Bill pay End ==========*/}
      {/*========== Blog-area start ==========*/}
      <div className='blog-area pt-4'>
        <Container>
          <div className='section-title'>
            <h3 className='title float-end'>المشاركات الاخيرة</h3>
            <Link to='/rtl-blog' className='float-start'>
              مشاهدة الكل
            </Link>
          </div>
          <div className='blog-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/rtl-blog-details'>
                      كيف تحفظ أموالك في شركة تجارية خاصة
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/rtl-blog-details'>
                      كيف تحفظ أموالك في شركة تجارية خاصة
                    </Link>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-blog'>
                  <div className='thumb'>
                    <img src='/Assets/Images/blog/3.png' alt='img' />
                  </div>
                  <div className='details'>
                    <Link to='/rtl-blog-details'>
                      كيف تحفظ أموالك في شركة تجارية خاصة
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
      {/*========== Blog-area End ==========*/}
    </>
  );
};

export default Home_1;
