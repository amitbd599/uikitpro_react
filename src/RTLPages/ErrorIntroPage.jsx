import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ErrorIntroComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ErrorIntroComponent")
);
const ErrorIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            ErrorIntro || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ErrorIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default ErrorIntroPage;
