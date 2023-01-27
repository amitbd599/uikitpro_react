import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const NotificationsComponent = React.lazy(() =>
  import("../Components/RootComponents/NotificationsComponent")
);
const NotificationsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Radio || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <NotificationsComponent />
      </Suspense>
    </Fragment>
  );
};

export default NotificationsPage;
