import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const CheckboxComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/CheckboxComponent")
);
const CheckboxPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Checkbox || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <CheckboxComponent />
      </Suspense>
    </Fragment>
  );
};

export default CheckboxPage;
