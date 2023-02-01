import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ProgressComponent = React.lazy(() =>
  import("../Components/RootComponents/ProgressComponent")
);
const ProgressPage = () => {
  return (
    <Fragment>
   <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Radio || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ProgressComponent />
      </Suspense>
    </Fragment>
  );
};

export default ProgressPage;
