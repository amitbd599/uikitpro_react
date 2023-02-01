import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
const BlogDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogDetailsComponent")
);
const BlogDetailsPage = () => {
  return (
    <Fragment>
      <Suspense fallback={"Loader"}>
        <Helmet>
          <title>Blog Details || **********</title>
          <meta name='description' content='****************' />
        </Helmet>
        <BlogDetailsComponent />
      </Suspense>
    </Fragment>
  );
};

export default BlogDetailsPage;
