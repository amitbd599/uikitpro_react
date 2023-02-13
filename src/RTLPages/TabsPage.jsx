import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const UserTabsComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/UserTabsComponent")
);
const TabsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Tabs || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <UserTabsComponent />
      </Suspense>
    </Fragment>
  );
};

export default TabsPage;
