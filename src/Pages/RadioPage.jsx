import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const RadioComponent = React.lazy(() =>
  import("../Components/RootComponents/RadioComponent")
);
const RadioPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Radio || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <RadioComponent />
      </Suspense>
    </Fragment>
  );
};

export default RadioPage;
