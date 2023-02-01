import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const AlertsComponent = React.lazy(() =>
  import("../Components/RootComponents/AlertsComponent")
);
const AlertsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Alerts || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AlertsComponent />
      </Suspense>
    </Fragment>
  );
};

export default AlertsPage;
