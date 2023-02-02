import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TransactionDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/TransactionDetailsComponent")
);
const TransactionDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Transaction Details || Bootstrap 5 Based React Mobile UI Kit
            Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <TransactionDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default TransactionDetailsPage;
