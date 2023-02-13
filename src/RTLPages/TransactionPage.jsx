import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TransactionComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/TransactionComponent")
);
const TransactionPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Transaction || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <TransactionComponent />
      </Suspense>
    </Fragment>
  );
};

export default TransactionPage;
