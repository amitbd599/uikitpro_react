import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BillPayComponent = React.lazy(() =>
  import("../Components/RootComponents/BillPayComponent")
);
const BillPayPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Bill Pay || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <BillPayComponent />
      </Suspense>
    </Fragment>
  );
};

export default BillPayPage;
