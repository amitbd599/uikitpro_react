import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TypographyComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/TypographyComponent")
);
const TypographyPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Typography || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <TypographyComponent />
      </Suspense>
    </Fragment>
  );
};

export default TypographyPage;
