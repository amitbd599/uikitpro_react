import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TransactionComponent = React.lazy(() =>
  import("../Components/RootComponents/TransactionComponent")
);
const TransactionPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Transaction || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <TransactionComponent />
      </Suspense>
    </Fragment>
  );
};

export default TransactionPage;
