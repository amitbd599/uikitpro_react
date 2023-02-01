import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const DialogComponent = React.lazy(() =>
  import("../Components/RootComponents/DialogComponent")
);
const DialogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Dialog || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <DialogComponent />
      </Suspense>
    </Fragment>
  );
};

export default DialogPage;
