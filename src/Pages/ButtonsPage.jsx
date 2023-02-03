import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ButtonsComponent = React.lazy(() =>
  import("../Components/RootComponents/ButtonsComponent")
);
const ButtonsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Buttons || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <ButtonsComponent />
      </Suspense>
    </Fragment>
  );
};

export default ButtonsPage;
