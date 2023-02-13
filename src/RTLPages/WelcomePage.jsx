import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const WelcomeComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/WelcomeComponent")
);
const WelcomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Welcome || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <WelcomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default WelcomePage;
