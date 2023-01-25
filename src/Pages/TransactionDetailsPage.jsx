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
          <title>Transaction Details || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TransactionDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default TransactionDetailsPage;
