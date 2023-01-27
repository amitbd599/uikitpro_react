import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const UserTabsComponent = React.lazy(() =>
  import("../Components/RootComponents/UserTabsComponent")
);
const TabsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Tabs || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <UserTabsComponent />
      </Suspense>
    </Fragment>
  );
};

export default TabsPage;
