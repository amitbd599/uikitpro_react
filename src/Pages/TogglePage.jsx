import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ToggleComponent = React.lazy(() =>
  import("../Components/RootComponents/ToggleComponent")
);
const TogglePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Toggle || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ToggleComponent />
      </Suspense>
    </Fragment>
  );
};

export default TogglePage;
