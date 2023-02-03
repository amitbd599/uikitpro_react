import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const DropdownComponent = React.lazy(() =>
  import("../Components/RootComponents/DropdownComponent")
);
const DropdownPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Dropdown|| Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <DropdownComponent />
      </Suspense>
    </Fragment>
  );
};

export default DropdownPage;
