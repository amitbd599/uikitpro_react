import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const UserSettingComponent = React.lazy(() =>
  import("../Components/RootComponents/UserSettingComponent")
);
const UserSettingPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            User Setting || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <UserSettingComponent />
      </Suspense>
    </Fragment>
  );
};

export default UserSettingPage;
