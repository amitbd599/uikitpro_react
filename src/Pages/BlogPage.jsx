import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const BlogComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogComponent")
);
const BlogPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Blog || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <BlogComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogPage;
