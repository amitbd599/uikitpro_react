import React from "react";
import { FaRegCreditCard, FaRegMap, FaRegSun } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ComponentsTabs = () => {
  return (
    <>
      {/* components tabs start */}
      <div className='container-inner mg-top-90'>
        <div className='container-fluid'>
          <div className='row flex-row'>
            <div className='col-xl-6'>
              {/* Basic Tabs */}
              <div className='basic-tabs'>
                <div className='widget-header'>
                  <h4>Basic Tabs</h4>
                </div>
                <div className='widget has-shadow'>
                  <Tabs>
                    <TabList>
                      <Tab>Home</Tab>
                      <Tab>Profile</Tab>
                      <Tab>Contact</Tab>
                    </TabList>

                    <TabPanel>
                      <p>
                        Nam sagittis nec velit vitae molestie. Donec eget luctus
                        sem. Nullam tortor tortor, consequat id lacinia nec,
                        tempus in diam. Phasellus vel molestie purus, ac
                        hendrerit risus. Phasellus non purus lacinia purus
                        fringilla hendrerit. Sed pharetra odio a ante volutpat
                        aliquam id non lacus.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend, so
                        absorbed in the exquisite.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Basic Tabs */}
            </div>
            <div className='col-xl-6'>
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
                      <p>
                        Nam sagittis nec velit vitae molestie. Donec eget luctus
                        sem. Nullam tortor tortor, consequat id lacinia nec,
                        tempus in diam. Phasellus vel molestie purus, ac
                        hendrerit risus. Phasellus non purus lacinia purus
                        fringilla hendrerit. Sed pharetra odio a ante volutpat
                        aliquam id non lacus.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend, so
                        absorbed in the exquisite.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Tabs Dropdown */}
            </div>
            <div className='col-xl-6'>
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
                      <p>
                        Nam sagittis nec velit vitae molestie. Donec eget luctus
                        sem. Nullam tortor tortor, consequat id lacinia nec,
                        tempus in diam. Phasellus vel molestie purus, ac
                        hendrerit risus. Phasellus non purus lacinia purus
                        fringilla hendrerit. Sed pharetra odio a ante volutpat
                        aliquam id non lacus.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend, so
                        absorbed in the exquisite.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End vertical Tabs */}
            </div>
            <div className='col-xl-6'>
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
                      <p>
                        Nam sagittis nec velit vitae molestie. Donec eget luctus
                        sem. Nullam tortor tortor, consequat id lacinia nec,
                        tempus in diam. Phasellus vel molestie purus, ac
                        hendrerit risus. Phasellus non purus lacinia purus
                        fringilla hendrerit. Sed pharetra odio a ante volutpat
                        aliquam id non lacus.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine. I am so happy, my dear friend, so
                        absorbed in the exquisite.
                      </p>
                    </TabPanel>
                    <TabPanel>
                      <p>
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
              {/* End Justified Tabs */}
            </div>
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* components tabs End */}
    </>
  );
};

export default ComponentsTabs;
