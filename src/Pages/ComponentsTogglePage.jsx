import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsToggleComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsToggleComponent")
);
const ComponentsTogglePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsToggleComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsTogglePage;
