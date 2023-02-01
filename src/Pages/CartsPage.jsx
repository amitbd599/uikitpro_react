import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const CartsComponent = React.lazy(() =>
  import("../Components/RootComponents/CartsComponent")
);
const CartsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Carts || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <CartsComponent />
      </Suspense>
    </Fragment>
  );
};

export default CartsPage;
