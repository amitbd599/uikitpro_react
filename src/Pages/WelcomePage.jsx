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
          <title>
            Welcome || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <WelcomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default WelcomePage;
