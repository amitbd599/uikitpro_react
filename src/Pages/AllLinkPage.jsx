import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllLinkComponent = React.lazy(() =>
  import("../Components/RootComponents/AllLinkComponent")
);
const AllLinkPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            All Link || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AllLinkComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllLinkPage;
