import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const InsetComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/InsetComponent")
);
const InsetPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Inset || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <InsetComponent />
      </Suspense>
    </Fragment>
  );
};

export default InsetPage;
