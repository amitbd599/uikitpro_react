import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const ContentComponent = React.lazy(() =>
  import("../Components/RootComponents/ContentComponent")
);
const ContentPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
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
