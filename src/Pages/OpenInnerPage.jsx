import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const OpenInnerComponent = React.lazy(() =>
  import("../Components/RootComponents/OpenInnerComponent")
);
const OpenInnerPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            OpenInner || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <OpenInnerComponent />
      </Suspense>
    </Fragment>
  );
};

export default OpenInnerPage;
