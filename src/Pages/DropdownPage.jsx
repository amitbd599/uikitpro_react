import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const DropdownComponent = React.lazy(() =>
  import("../Components/RootComponents/DropdownComponent")
);
const DropdownPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Dropdown || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <DropdownComponent />
      </Suspense>
    </Fragment>
  );
};

export default DropdownPage;
