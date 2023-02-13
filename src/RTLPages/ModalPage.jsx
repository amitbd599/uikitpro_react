import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ModalComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ModalComponent")
);
const ModalPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Modal || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ModalComponent />
      </Suspense>
    </Fragment>
  );
};

export default ModalPage;
