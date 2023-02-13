import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ViewComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ViewComponent")
);
const ViewPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            UikitPro || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ViewComponent />
      </Suspense>
    </Fragment>
  );
};

export default ViewPage;
