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
          <title>Inset || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <InsetComponent />
      </Suspense>
    </Fragment>
  );
};

export default InsetPage;
