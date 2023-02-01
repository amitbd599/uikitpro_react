import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const NotificationsComponent = React.lazy(() =>
  import("../Components/RootComponents/NotificationsComponent")
);
const NotificationsPage = () => {
  return (
    <Fragment>
   <Suspense fallback={<Preloader/>}>
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
