import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AddHomeComponent = React.lazy(() =>
  import("../Components/RootComponents/AddHomeComponent")
);
const AddHomePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Add Home || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <AddHomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default AddHomePage;
