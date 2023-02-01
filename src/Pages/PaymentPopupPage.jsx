import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const PaymentPopupComponent = React.lazy(() =>
  import("../Components/RootComponents/PaymentPopupComponent")
);
const PaymentPopupPage = () => {
  return (
    <Fragment>
    <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Al Icon || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <PaymentPopupComponent />
      </Suspense>
    </Fragment>
  );
};

export default PaymentPopupPage;
