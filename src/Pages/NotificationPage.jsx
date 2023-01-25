import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const NotificationComponent = React.lazy(() =>
  import("../Components/RootComponents/NotificationComponent")
);
const NotificationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Notification || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <NotificationComponent />
      </Suspense>
    </Fragment>
  );
};

export default NotificationPage;
