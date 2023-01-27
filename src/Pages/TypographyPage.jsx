import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const TypographyComponent = React.lazy(() =>
  import("../Components/RootComponents/TypographyComponent")
);
const TypographyPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TypographyComponent />
      </Suspense>
    </Fragment>
  );
};

export default TypographyPage;
