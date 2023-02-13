import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SavingComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/SavingComponent")
);
const SavingPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Saving || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <SavingComponent />
      </Suspense>
    </Fragment>
  );
};

export default SavingPage;
