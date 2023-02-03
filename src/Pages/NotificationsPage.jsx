import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const NotificationsComponent = React.lazy(() =>
  import("../Components/RootComponents/NotificationsComponent")
);
const NotificationsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Notifications || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <NotificationsComponent />
      </Suspense>
    </Fragment>
  );
};

export default NotificationsPage;
