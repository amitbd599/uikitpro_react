import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const CheckboxComponent = React.lazy(() =>
  import("../Components/RootComponents/CheckboxComponent")
);
const CheckboxPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
