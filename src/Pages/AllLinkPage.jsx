import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllLinkComponent = React.lazy(() =>
  import("../Components/RootComponents/AllLinkComponent")
);
const AllLinkPage = () => {
  return (
    <Fragment>
    <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>All Page Link || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AllLinkComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllLinkPage;
