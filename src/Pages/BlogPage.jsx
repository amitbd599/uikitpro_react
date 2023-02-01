import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BlogComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogComponent")
);
const BlogPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
