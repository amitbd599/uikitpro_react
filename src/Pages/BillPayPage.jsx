import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BillPayComponent = React.lazy(() =>
  import("../Components/RootComponents/BillPayComponent")
);
const BillPayPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Bill Pay || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <BillPayComponent />
      </Suspense>
    </Fragment>
  );
};

export default BillPayPage;
