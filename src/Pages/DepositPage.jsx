import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const DepositComponent = React.lazy(() =>
  import("../Components/RootComponents/DepositComponent")
);
const DepositPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Deposit || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <DepositComponent />
      </Suspense>
    </Fragment>
  );
};

export default DepositPage;
