import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const DepositComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/DepositComponent")
);
const DepositPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Deposit || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <DepositComponent />
      </Suspense>
    </Fragment>
  );
};

export default DepositPage;
