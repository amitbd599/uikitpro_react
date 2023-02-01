import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CheckboxComponent = React.lazy(() =>
  import("../Components/RootComponents/CheckboxComponent")
);
const CheckboxPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Checkbox || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <CheckboxComponent />
      </Suspense>
    </Fragment>
  );
};

export default CheckboxPage;
