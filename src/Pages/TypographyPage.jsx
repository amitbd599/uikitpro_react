import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TypographyComponent = React.lazy(() =>
  import("../Components/RootComponents/TypographyComponent")
);
const TypographyPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Typography || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <TypographyComponent />
      </Suspense>
    </Fragment>
  );
};

export default TypographyPage;
