import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const HomeComponent_2 = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent_2")
);
const HomePage_2 = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Home-2 || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <HomeComponent_2 />
      </Suspense>
    </Fragment>
  );
};

export default HomePage_2;
