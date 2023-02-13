import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AccordionIntroComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AccordionIntroComponent")
);
const AccordionIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Accordion Intro || MobileKit Wallet & Banking ReactJS Mobile
            Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AccordionIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AccordionIntroPage;
