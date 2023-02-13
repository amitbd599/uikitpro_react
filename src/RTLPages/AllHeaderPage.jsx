import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllHeaderComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AllHeaderComponent")
);
const AllHeaderPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            All Header || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AllHeaderComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllHeaderPage;
