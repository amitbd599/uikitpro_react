import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCreditCard, FaRegMap, FaRegSun } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const UserTabs = () => {
  return (
    <>
      {/* components tabs start */}
      <div className='container-inner pd-top-110'>
        <Container fluid>
          <Row className=' flex-row'>
            <Col xl={6}>
              {/* Basic Tabs */}
              <div className='basic-tabs'>
                <div className='widget-header'>
                  <h4 className='text-end'>علامات التبويب الأساسية</h4>
                </div>
                <div className='widget has-shadow'>
                  <Tabs>
                    <div className='d-flex justify-content-end'>
                      <TabList>
                        <Tab>مسكن</Tab>
                        <Tab>الملف الشخصي</Tab>
                        <Tab>اتصل</Tab>
                      </TabList>
                    </div>

                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Basic Tabs */}
            </Col>
            <Col xl={6}>
              {/* Tabs Dropdown */}
              <div className='tabs-dropdown'>
                <div className='widget-header'>
                  <h4>Tabs Dropdown</h4>
                </div>
                <div className='widget has-shadow'>
                  <Tabs>
                    <TabList>
                      <Tab>Home</Tab>
                      <Tab>Profile</Tab>
                      <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Tabs Dropdown */}
            </Col>
            <Col xl={6}>
              {/* vertical Tabs */}
              <div className='vertical-tabs'>
                <div className='widget-header'>
                  <h4>Vertical Tabs</h4>
                </div>
                <div className='widget has-shadow'>
                  <Tabs>
                    <TabList>
                      <Tab>Home</Tab>
                      <Tab>Profile</Tab>
                      <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End vertical Tabs */}
            </Col>
            <Col xl={6}>
              {/* Justified Tabs */}
              <div className='icon-tabs'>
                <div className='widget-header'>
                  <h4>Tabs With Icons</h4>
                </div>
                <div className='widget has-shadow'>
                  <Tabs>
                    <TabList>
                      <Tab>
                        <FaRegSun />
                      </Tab>
                      <Tab>
                        <FaRegMap />
                      </Tab>
                      <Tab>
                        <FaRegCreditCard />
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p className='text-end'>
                        على الشبكة العالمية انترنيت ويونيكود، حيث ستتم، على
                        الصعيدين الدولي والمحلي على حد سواء مناقشة سبل استخدام
                        يونكود في النظم القائمة وفيما يخص التطبيقات الحاسوبية،
                        الخطوط، تصميم النصوص والحوسبة متعددة اللغات.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Justified Tabs */}
            </Col>
          </Row>
          {/* End Row */}
        </Container>
      </div>
      {/* components tabs End */}
    </>
  );
};

export default UserTabs;
