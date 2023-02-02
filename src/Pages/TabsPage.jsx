import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const UserTabsComponent = React.lazy(() =>
  import("../Components/RootComponents/UserTabsComponent")
);
const TabsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Tabs || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <UserTabsComponent />
      </Suspense>
    </Fragment>
  );
};

export default TabsPage;
