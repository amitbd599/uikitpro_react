import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const RadioComponent = React.lazy(() =>
  import("../Components/RootComponents/RadioComponent")
);
const RadioPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Components Radio || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <RadioComponent />
      </Suspense>
    </Fragment>
  );
};

export default RadioPage;
