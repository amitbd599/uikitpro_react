import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const CarouselComponent = React.lazy(() =>
  import("../Components/RootComponents/CarouselComponent")
);
const CarouselPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Carousel || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <CarouselComponent />
      </Suspense>
    </Fragment>
  );
};

export default CarouselPage;
