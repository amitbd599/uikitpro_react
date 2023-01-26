import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ViewComponent = React.lazy(() =>
  import("../Components/RootComponents/ViewComponent")
);
const ViewPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>View || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ViewComponent />
      </Suspense>
    </Fragment>
  );
};

export default ViewPage;
