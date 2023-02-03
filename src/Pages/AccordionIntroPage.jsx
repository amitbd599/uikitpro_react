import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const AccordionIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/AccordionIntroComponent")
);
const AccordionIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Accordion Intro || Bootstrap 5 Based React Mobile UI Kit Template
          </title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <AccordionIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AccordionIntroPage;
