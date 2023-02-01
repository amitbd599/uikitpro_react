import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TypographyComponent = React.lazy(() =>
  import("../Components/RootComponents/TypographyComponent")
);
const TypographyPage = () => {
  return (
    <Fragment>
  <Suspense fallback={<Preloader/>}>
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
