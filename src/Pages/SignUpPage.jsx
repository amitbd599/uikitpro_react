import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SignUpComponent = React.lazy(() =>
  import("../Components/RootComponents/SignUpComponent")
);
const SignUpPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Transaction || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <SignUpComponent />
      </Suspense>
    </Fragment>
  );
};

export default SignUpPage;
