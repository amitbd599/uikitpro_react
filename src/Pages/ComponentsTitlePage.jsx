import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsTitleComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsTitleComponent")
);
const ComponentsTitlePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsTitleComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsTitlePage;
