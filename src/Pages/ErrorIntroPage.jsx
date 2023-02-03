import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ErrorIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/ErrorIntroComponent")
);
const ErrorIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            ErrorIntro || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <ErrorIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default ErrorIntroPage;
