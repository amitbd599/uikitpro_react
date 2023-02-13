import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const DialogComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/DialogComponent")
);
const DialogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Dialog || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <DialogComponent />
      </Suspense>
    </Fragment>
  );
};

export default DialogPage;
