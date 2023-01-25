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
          <title>Transaction || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TransactionComponent />
      </Suspense>
    </Fragment>
  );
};

export default TransactionPage;
