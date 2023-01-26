import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsTabsComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsTabsComponent")
);
const ComponentsTabsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Tabs || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsTabsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsTabsPage;
