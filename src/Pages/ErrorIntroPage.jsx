import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ErrorIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/ErrorIntroComponent")
);
const ErrorIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Error Intro || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ErrorIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default ErrorIntroPage;
