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
          <title>
            IntroPop|| Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <IntroPopComponent />
      </Suspense>
    </Fragment>
  );
};

export default IntroPopPage;
