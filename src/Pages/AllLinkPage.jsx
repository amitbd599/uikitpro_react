import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllLinkComponent = React.lazy(() =>
  import("../Components/RootComponents/AllLinkComponent")
);
const AllLinkPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            All Link || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <AllLinkComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllLinkPage;
