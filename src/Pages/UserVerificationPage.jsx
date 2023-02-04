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
            User Verification || MobileKit Wallet & Banking ReactJS Mobile
            Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <UserVerificationComponent />
      </Suspense>
    </Fragment>
  );
};

export default UserVerificationPage;
