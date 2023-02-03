import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const PaymentPopupComponent = React.lazy(() =>
  import("../Components/RootComponents/PaymentPopupComponent")
);
const PaymentPopupPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Payment Popup || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <PaymentPopupComponent />
      </Suspense>
    </Fragment>
  );
};

export default PaymentPopupPage;
