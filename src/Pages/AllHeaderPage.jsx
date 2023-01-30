import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const AllHeaderComponent = React.lazy(() =>
  import("../Components/RootComponents/AllHeaderComponent")
);
const AllHeaderPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
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
