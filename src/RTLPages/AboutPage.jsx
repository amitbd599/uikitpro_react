import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AboutComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AboutComponent")
);
const AboutPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            About || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AboutComponent />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
