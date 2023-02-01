import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AboutComponent = React.lazy(() =>
  import("../Components/RootComponents/AboutComponent")
);
const AboutPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>About || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AboutComponent />
      </Suspense>
    </Fragment>
  );
};

export default AboutPage;
