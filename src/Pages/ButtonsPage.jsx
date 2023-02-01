import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ButtonsComponent = React.lazy(() =>
  import("../Components/RootComponents/ButtonsComponent")
);
const ButtonsPage = () => {
  return (
    <Fragment>
   <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Buttons || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ButtonsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ButtonsPage;
