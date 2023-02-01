import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ActionComponent = React.lazy(() =>
  import("../Components/RootComponents/ActionComponent")
);
const ActionPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Action || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ActionComponent />
      </Suspense>
    </Fragment>
  );
};

export default ActionPage;
