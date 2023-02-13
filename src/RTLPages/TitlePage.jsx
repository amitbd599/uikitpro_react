import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TitleComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/TitleComponent")
);
const TitlePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Title || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <TitleComponent />
      </Suspense>
    </Fragment>
  );
};

export default TitlePage;
