import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ToastComponent = React.lazy(() =>
  import("../Components/RootComponents/ToastComponent")
);
const ToastPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
