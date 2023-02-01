import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllHeaderComponent = React.lazy(() =>
  import("../Components/RootComponents/AllHeaderComponent")
);
const AllHeaderPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>All Header || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AllHeaderComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllHeaderPage;
