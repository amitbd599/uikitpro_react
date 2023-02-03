import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AlertsComponent = React.lazy(() =>
  import("../Components/RootComponents/AlertsComponent")
);
const AlertsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Alerts || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <AlertsComponent />
      </Suspense>
    </Fragment>
  );
};

export default AlertsPage;
