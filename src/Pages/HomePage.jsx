import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const HomeComponent = React.lazy(() =>
  import("../Components/RootComponents/HomeComponent")
);
const HomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Home || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <HomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
