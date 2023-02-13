import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BlogDetailsComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/BlogDetailsComponent")
);
const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>
            Blog Details || MobileKit Wallet & Banking ReactJS Mobile Template
          </title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <BlogDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogDetailsPage;
