import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const TitleComponent = React.lazy(() =>
  import("../Components/RootComponents/TitleComponent")
);
const TitlePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <TitleComponent />
      </Suspense>
    </Fragment>
  );
};

export default TitlePage;
