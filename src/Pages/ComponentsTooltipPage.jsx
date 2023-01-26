import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsTooltipComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsTooltipComponent")
);
const ComponentsTooltipPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsTooltipComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsTooltipPage;
