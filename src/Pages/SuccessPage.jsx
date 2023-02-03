import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SuccessComponent = React.lazy(() =>
  import("../Components/RootComponents/SuccessComponent")
);
const SuccessPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Success || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <SuccessComponent />
      </Suspense>
    </Fragment>
  );
};

export default SuccessPage;
