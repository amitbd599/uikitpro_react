import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const AccordionIntroComponent = React.lazy(() =>
  import("../Components/RootComponents/AccordionIntroComponent")
);
const AccordionIntroPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Accordion Intro|| **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <AccordionIntroComponent />
      </Suspense>
    </Fragment>
  );
};

export default AccordionIntroPage;
