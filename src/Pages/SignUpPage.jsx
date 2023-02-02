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
          <title>
            SignUp || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <SignUpComponent />
      </Suspense>
    </Fragment>
  );
};

export default SignUpPage;
