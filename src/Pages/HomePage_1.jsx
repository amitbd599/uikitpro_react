import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const HomeComponent_1 = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent_1")
);
const HomePage_1 = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Home-1 || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <HomeComponent_1 />
      </Suspense>
    </Fragment>
  );
};

export default HomePage_1;
