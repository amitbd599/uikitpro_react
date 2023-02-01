import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AddHomeComponent = React.lazy(() =>
  import("../Components/RootComponents/AddHomeComponent")
);
const AddHomePage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
