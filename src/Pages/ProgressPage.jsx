import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ProgressComponent = React.lazy(() =>
  import("../Components/RootComponents/ProgressComponent")
);
const ProgressPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Progress || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ProgressComponent />
      </Suspense>
    </Fragment>
  );
};

export default ProgressPage;
