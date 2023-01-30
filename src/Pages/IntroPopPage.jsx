import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const IntroPopComponent = React.lazy(() =>
  import("../Components/RootComponents/IntroPopComponent")
);
const IntroPopPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>IntroPop || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <IntroPopComponent />
      </Suspense>
    </Fragment>
  );
};

export default IntroPopPage;
