import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SuccessComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/SuccessComponent")
);
const SuccessPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Success || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <SuccessComponent />
      </Suspense>
    </Fragment>
  );
};

export default SuccessPage;
