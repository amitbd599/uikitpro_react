import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/AllIntroComponent")
);
const AllIntroPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>All Intro || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AllIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllIntroPage;
