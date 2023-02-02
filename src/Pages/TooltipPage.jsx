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
            Tooltip || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <TooltipComponent />
      </Suspense>
    </Fragment>
  );
};

export default TooltipPage;
