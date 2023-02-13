import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SignUpComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/SignUpComponent")
);
const SignUpPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            SignUp || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <SignUpComponent />
      </Suspense>
    </Fragment>
  );
};

export default SignUpPage;
