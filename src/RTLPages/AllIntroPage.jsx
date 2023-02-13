import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllIntroComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AllIntroComponent")
);
const AllIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            All Intro || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AllIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllIntroPage;
