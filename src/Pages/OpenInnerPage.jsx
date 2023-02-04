import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const OpenInnerComponent = React.lazy(() =>
  import("../Components/RootComponents/OpenInnerComponent")
);
const OpenInnerPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            OpenInner || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <OpenInnerComponent />
      </Suspense>
    </Fragment>
  );
};

export default OpenInnerPage;
