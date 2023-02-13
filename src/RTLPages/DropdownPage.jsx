import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const DropdownComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/DropdownComponent")
);
const DropdownPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Dropdown|| MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <DropdownComponent />
      </Suspense>
    </Fragment>
  );
};

export default DropdownPage;
