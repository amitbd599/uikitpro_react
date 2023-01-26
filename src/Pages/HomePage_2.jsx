import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const HomeComponent_2 = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent_2")
);
const HomePage_2 = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Home - 2 || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <HomeComponent_2 />
      </Suspense>
    </Fragment>
  );
};

export default HomePage_2;
