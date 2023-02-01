import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SignInComponent = React.lazy(() =>
  import("../Components/RootComponents/SignInComponent")
);
const SignInPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>SignIn || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <SignInComponent />
      </Suspense>
    </Fragment>
  );
};

export default SignInPage;
