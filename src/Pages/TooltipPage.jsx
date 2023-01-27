import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const TooltipComponent = React.lazy(() =>
  import("../Components/RootComponents/TooltipComponent")
);
const TooltipPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
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
