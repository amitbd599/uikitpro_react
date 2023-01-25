import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const SavingComponent = React.lazy(() =>
  import("../Components/RootComponents/SavingComponent")
);
const SavingPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Saving || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <SavingComponent />
      </Suspense>
    </Fragment>
  );
};

export default SavingPage;
