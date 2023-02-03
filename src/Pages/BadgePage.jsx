import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BadgeComponent = React.lazy(() =>
  import("../Components/RootComponents/BadgeComponent")
);
const BadgePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Badge || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <BadgeComponent />
      </Suspense>
    </Fragment>
  );
};

export default BadgePage;
