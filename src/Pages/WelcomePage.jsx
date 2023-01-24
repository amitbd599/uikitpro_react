import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const WelcomeComponent = React.lazy(() =>
  import("../Components/RootComponents/WelcomeComponent")
);
const WelcomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Home || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <WelcomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default WelcomePage;
