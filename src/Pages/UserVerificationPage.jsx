import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const UserVerificationComponent = React.lazy(() =>
  import("../Components/RootComponents/UserVerificationComponent")
);
const UserVerificationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            User Verification || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <UserVerificationComponent />
      </Suspense>
    </Fragment>
  );
};

export default UserVerificationPage;
