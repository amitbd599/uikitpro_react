import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const InsetComponent = React.lazy(() =>
  import("../Components/RootComponents/InsetComponent")
);
const InsetPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Inset || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <InsetComponent />
      </Suspense>
    </Fragment>
  );
};

export default InsetPage;
