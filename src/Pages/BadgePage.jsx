import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BadgeComponent = React.lazy(() =>
  import("../Components/RootComponents/BadgeComponent")
);
const BadgePage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
