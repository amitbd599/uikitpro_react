import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const CarouselComponent = React.lazy(() =>
  import("../Components/RootComponents/CarouselComponent")
);
const CarouselPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
