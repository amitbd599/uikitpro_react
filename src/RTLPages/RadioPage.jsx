import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const RadioComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/RadioComponent")
);
const RadioPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Radio || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <RadioComponent />
      </Suspense>
    </Fragment>
  );
};

export default RadioPage;
