import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const BadgeComponent = React.lazy(() =>
  import("../Components/RootComponents/BadgeComponent")
);
const BadgePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Badge || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <BadgeComponent />
      </Suspense>
    </Fragment>
  );
};

export default BadgePage;
