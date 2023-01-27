import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ToastComponent = React.lazy(() =>
  import("../Components/RootComponents/ToastComponent")
);
const ToastPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ToastComponent />
      </Suspense>
    </Fragment>
  );
};

export default ToastPage;
