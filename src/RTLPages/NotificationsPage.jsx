import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const NotificationsComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/NotificationsComponent")
);
const NotificationsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Notifications || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <NotificationsComponent />
      </Suspense>
    </Fragment>
  );
};

export default NotificationsPage;
