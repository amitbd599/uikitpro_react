import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/Common/Preloader";
const BlogDetailsComponent = React.lazy(() =>
  import("../Components/RootComponents/BlogDetailsComponent")
);
const BlogDetailsPage = () => {
  return (
    <Fragment>
     <Suspense fallback={<Preloader/>}>
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
