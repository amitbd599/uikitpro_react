import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const IcondComponent = React.lazy(() =>
  import("../Components/RootComponents/IcondComponent")
);
const IcondPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Icond || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <IcondComponent />
      </Suspense>
    </Fragment>
  );
};

export default IcondPage;
