import React from "react";
import { Container } from "react-bootstrap";

const BlogDetails = () => {
  return (
    <>
      {/* ================ blog-area start ================*/}
      <div className='blog-details-area pd-top-110'>
        <Container>
          <div className='blog-details-inner'>
            <div className='section-title float-end'>
              <h3 className='title'>تفاصيل المدونة</h3>
            </div>
            <div className='thumb'>
              <img src='/Assets/Images/blog/7.png' alt='img' />
            </div>
            <div className='details mb-4 text-end'>
              <h6>كيف تحفظ أموالك في شركة تجارية خاصة.</h6>
              <p>
                عندما يريد العالم أن ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور
                المؤتمر الدولي العاشر ليونيكود بمدينة مَايِنْتْس، ألمانيا. و
                سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة
                العالمية انترنيت
              </p>
              <p>
                عندما يريد العالم أن ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور
                المؤتمر الدولي العاشر ليونيكود بمدينة مَايِنْتْس، ألمانيا. و
                سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة
                العالمية انترنيت
              </p>
              <p>
                عندما يريد العالم أن ، فهو يتحدّث بلغة يونيكود. تسجّل الآن لحضور
                المؤتمر الدولي العاشر ليونيكود بمدينة مَايِنْتْس، ألمانيا. و
                سيجمع المؤتمر بين خبراء من كافة قطاعات الصناعة على الشبكة
                العالمية انترنيت
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/*================ blog-area End ================*/}
    </>
  );
};

export default BlogDetails;
