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
          <title>Modal || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ModalComponent />
      </Suspense>
    </Fragment>
  );
};

export default ModalPage;
