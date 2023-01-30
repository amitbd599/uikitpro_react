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
          <title>Image || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ImageComponent />
      </Suspense>
    </Fragment>
  );
};

export default ImagePage;
