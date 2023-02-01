import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const ContentComponent = React.lazy(() =>
  import("../Components/RootComponents/ContentComponent")
);
const ContentPage = () => {
  return (
    <Fragment>
    <Suspense fallback={<Preloader/>}>
        <Helmet>
          <title>Content || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <ContentComponent />
      </Suspense>
    </Fragment>
  );
};

export default ContentPage;
