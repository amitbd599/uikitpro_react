import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BlogComponent = React.lazy(() =>
  import("../RTLComponents/RootComponents/BlogComponent")
);
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Blog || MobileKit Wallet & Banking ReactJS Mobile Template</title>
          <meta
            name='UikitPro'
            content='MobileKit Wallet & Banking ReactJS Mobile Template'
          />
        </Helmet>
        <BlogComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogPage;
