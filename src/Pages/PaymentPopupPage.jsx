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
            Payment Popup || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <PaymentPopupComponent />
      </Suspense>
    </Fragment>
  );
};

export default PaymentPopupPage;
