import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TooltipComponent = React.lazy(() =>
  import("../Components/RootComponents/TooltipComponent")
);
const TooltipPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Tooltip || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <TooltipComponent />
      </Suspense>
    </Fragment>
  );
};

export default TooltipPage;
