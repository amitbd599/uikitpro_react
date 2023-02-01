import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TooltipComponent = React.lazy(() =>
  import("../Components/RootComponents/TooltipComponent")
);
const TooltipPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TooltipComponent />
      </Suspense>
    </Fragment>
  );
};

export default TooltipPage;
