import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AlertsComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AlertsComponent")
);
const AlertsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Alerts || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AlertsComponent />
      </Suspense>
    </Fragment>
  );
};

export default AlertsPage;
