import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ModalComponent = React.lazy(() =>
  import("../Components/RootComponents/ModalComponent")
);
const ModalPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Modal || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <ModalComponent />
      </Suspense>
    </Fragment>
  );
};

export default ModalPage;
