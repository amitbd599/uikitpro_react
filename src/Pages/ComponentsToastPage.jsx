import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsToastComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsToastComponent")
);
const ComponentsToastPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsToastComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsToastPage;
