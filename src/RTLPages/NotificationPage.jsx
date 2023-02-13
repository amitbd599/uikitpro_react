import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const NotificationComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/NotificationComponent")
);
const NotificationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Notification || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <NotificationComponent />
      </Suspense>
    </Fragment>
  );
};

export default NotificationPage;
