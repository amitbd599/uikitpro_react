import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ImageComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/ImageComponent")
);
const ImagePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Image || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <ImageComponent />
      </Suspense>
    </Fragment>
  );
};

export default ImagePage;
