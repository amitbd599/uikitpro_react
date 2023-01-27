import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const SuccessComponent = React.lazy(() =>
  import("../Components/RootComponents/SuccessComponent")
);
const SuccessPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Success || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <SuccessComponent />
      </Suspense>
    </Fragment>
  );
};

export default SuccessPage;
