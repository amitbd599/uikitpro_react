import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ImageComponent = React.lazy(() =>
  import("../Components/RootComponents/ImageComponent")
);
const ImagePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Image || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <ImageComponent />
      </Suspense>
    </Fragment>
  );
};

export default ImagePage;
