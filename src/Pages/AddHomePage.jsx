import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const AddHomeComponent = React.lazy(() =>
  import("../Components/RootComponents/AddHomeComponent")
);
const AddHomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Alerts || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AddHomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default AddHomePage;
