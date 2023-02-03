import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BlogComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogComponent")
);
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<Preloader />}>
        <Helmet>
          <title>Blog || Bootstrap 5 Based React Mobile UI Kit Template</title>
          <meta
            name='UikitPro'
            content='Bootstrap 5 Based React Mobile UI Kit Template'
          />
        </Helmet>
        <BlogComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogPage;
