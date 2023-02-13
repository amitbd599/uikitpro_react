import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ListViewComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ListViewComponent")
);
const ListViewPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            List View || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ListViewComponent />
      </Suspense>
    </Fragment>
  );
};

export default ListViewPage;
