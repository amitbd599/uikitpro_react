import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AllIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/AllIntroComponent")
);
const AllIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            All Intro || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <AllIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AllIntroPage;
