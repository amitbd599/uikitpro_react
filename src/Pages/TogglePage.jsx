import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ToggleComponent = React.lazy(() =>
  import("../Components/RootComponents/ToggleComponent")
);
const TogglePage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Typography || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ToggleComponent />
      </Suspense>
    </Fragment>
  );
};

export default TogglePage;
