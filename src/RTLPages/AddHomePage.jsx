import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AddHomeComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/AddHomeComponent")
);
const AddHomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Add Home || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <AddHomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default AddHomePage;
