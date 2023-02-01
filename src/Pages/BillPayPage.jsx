import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BillPayComponent = React.lazy(() =>
  import("../Components/RootComponents/BillPayComponent")
);
const BillPayPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Bill Pay || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <BillPayComponent />
      </Suspense>
    </Fragment>
  );
};

export default BillPayPage;
