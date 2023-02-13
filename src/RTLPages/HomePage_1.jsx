import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const HomeComponent_1 = React.lazy(() =>
  import("../RTLComponents/RootComponents/HomeComponent_1")
);
const HomePage_1 = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Home-1 || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <HomeComponent_1 />
      </Suspense>
    </Fragment>
  );
};

export default HomePage_1;
