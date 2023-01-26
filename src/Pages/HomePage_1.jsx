import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const HomeComponent_1 = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent_1")
);
const HomePage_1 = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Home || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <HomeComponent_1 />
      </Suspense>
    </Fragment>
  );
};

export default HomePage_1;
