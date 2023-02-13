import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ButtonsComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ButtonsComponent")
);
const ButtonsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Buttons || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ButtonsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ButtonsPage;
