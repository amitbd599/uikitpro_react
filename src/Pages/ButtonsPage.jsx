import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ButtonsComponent = React.lazy(() =>
  import("../Components/RootComponents/ButtonsComponent")
);
const ButtonsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Buttons || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ButtonsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ButtonsPage;
