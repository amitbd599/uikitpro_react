import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const IntroPopComponent = React.lazy(() =>
  import("../Components/RootComponents/IntroPopComponent")
);
const IntroPopPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            IntroPop|| MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <IntroPopComponent />
      </Suspense>
    </Fragment>
  );
};

export default IntroPopPage;
