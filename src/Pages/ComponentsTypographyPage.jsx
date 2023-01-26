import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ComponentsTypographyComponent = React.lazy(() =>
  import("../Components/RootComponents/ComponentsTypographyComponent")
);
const ComponentsTypographyPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ComponentsTypographyComponent />
      </Suspense>
    </Fragment>
  );
};

export default ComponentsTypographyPage;
